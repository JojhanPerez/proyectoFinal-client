import React, { useState } from "react";
import { List, Button, Modal as ModalAntd, notification } from "antd";
import { EditOutlined, PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import EditSubject from "../EditSubject/EditSubject";
import AddSubject from "../AddSubject/AddSubject";
import Modal from "../../../Modal/Modal";
import { deleteSubject } from "../../../../api/subject";

const { confirm } = ModalAntd;

export default function ListSubjects(props) {
    /* page user */
    const { subjects, setReloadSubjects } = props;
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    const addSubjectModal = () => {
        setIsVisibleModal(true);
        setModalTitle("Creando nueva asignatura");
        setModalContent(
            <AddSubject
                setIsVisibleModal={setIsVisibleModal}
                setReloadSubjects={setReloadSubjects}
            />
        );
    };
    console.log(subjects);

    return (
        <div className="list-subjects">
            <div className="list-subjects__header">
                <div className="list-subjects__header-switch">
                    <List.Item
                        actions={[
                            <Button type="primary" onClick={addSubjectModal}>
                                <PlusCircleOutlined />
                            </Button>,
                        ]}
                    >
                        <List.Item.Meta title={<span>Asignaturas</span>}></List.Item.Meta>
                    </List.Item>
                </div>
            </div>
            <Subjects
                subjects={subjects}
                setIsVisibleModal={setIsVisibleModal}
                setModalTitle={setModalTitle}
                setModalContent={setModalContent}
                setReloadSubjects={setReloadSubjects}
            />

            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
            >
                {modalContent}
            </Modal>
        </div>
    );
}

function Subjects(props) {
    const {
        setIsVisibleModal,
        setModalTitle,
        setModalContent,
        subjects,
        setReloadSubjects,
    } = props;

    const editSubject = (subject) => {
        setIsVisibleModal(true);
        setModalTitle(
            `Editar ${subject.department ? subject.department : "..."} ${subject.academic_activity ? subject.academic_activity : "..."
            }`
        );
        setModalContent(
            <EditSubject
                subject={subject}
                setIsVisibleModal={setIsVisibleModal}
                setReloadSubjects={setReloadSubjects}
            />
        );
    };
    console.log(subjects);
    return (
        <List
            className="subjects"
            itemLayout="horizontal"
            dataSource={subjects}
            renderItem={(subject) => (
                <DeleteSubject
                    subject={subject}
                    editSubject={editSubject}
                    setReloadSubjects={setReloadSubjects}
                />
            )}
        />
    );
}

function DeleteSubject(props) {
    const { subject, editSubject, setReloadSubjects } = props;
    const showDeleteConfirm = () => {
        confirm({
            title: "Eliminando asignatura",
            content: `¿Estas seguro que quieres eliminar a ${subject.academic_activity}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deleteSubject(subject._id)
                .then((response) => {
                    console.log(subject._id);
                    notification["success"]({
                      message: response,
                    });
                    console.log(subject._id);
                    setReloadSubjects(true);
                  })
                  .catch((err) => {
                    notification["error"]({
                      message: err,
                    });
                  })
            },
        });
    };

    return (
        <List.Item
            actions={[
                <Button type="primary" onClick={() => editSubject(subject)}>
                    <EditOutlined />
                </Button>,
                <Button type="danger" onClick={showDeleteConfirm}>
                    <DeleteOutlined />
                </Button>,
            ]}
        >
            <List.Item.Meta
                title={`
                ${subject.department ? subject.department : "..."} -
                ${subject.academic_activity ? subject.academic_activity : "..."}
            `}
                description={"Código:"+ " " + subject.activity_code}
            />
        </List.Item>
    );
}
