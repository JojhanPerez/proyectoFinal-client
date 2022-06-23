import React, { useState, useEffect } from "react";
import { getSubjects } from "../../../api/subject";
import ListSubjects from "../../../components/AdminComponents/Subject/ListSubject";
import "./Subject.scss";

export default function Subject() {
  const [subjects, setSubjects] = useState([]);
  const [reloadSubjects, setReloadSubjects] = useState(false);

  useEffect(() => {
    getSubjects().then((response) => {
      console.log(response);
      setSubjects(response);
    });
    setReloadSubjects(false);
  }, [reloadSubjects]);

  return (
    <div>
      <ListSubjects subjects={subjects} setReloadSubjects={setReloadSubjects} />
    </div>
  );
}
