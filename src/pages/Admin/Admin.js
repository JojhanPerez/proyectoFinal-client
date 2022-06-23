import React from "react";
import { EditOutlined } from "@ant-design/icons";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";
import "./Admin.scss"

const { Meta } = Card;

export default function Admin() {
    return (
        <div className="content">
        <Card
            style={{ width: 300, marginRight: "30px", marginLeft: "30px" }}
            cover={
                <img 
                    alt="example"
                    src="https://media.gamestop.com/i/gamestop/10136002/Microsoft-Xbox-One-Black-Wireless-Controller"
                />
            }
            actions={[ <Link to="/admin/xbox" ><EditOutlined style={{ color: "red" }} key="edit" /></Link> ]}
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Xbox One Controller"
                description="More ergonomic and reduced design, with better button layout.
                Improved D-Pad, similar to the Elite controller.
                USB-C connection that allows charging and playing.
                Bluetooth energy efficiency and latency reduction.
                Grip texture on triggers, horns, joystick and matte finish."
            />
        </Card>

        <Card
            style={{ width: 300, marginRight: "30px", marginLeft: "30px" }}
            cover={
                <img
                    alt="example"
                    src="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
                />
            }
            actions={[ <Link to="/admin/fifa" ><EditOutlined style={{ color: "red" }} key="edit" /> </Link> ]}
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Video Game Fifa 22"
                description="FUT 22 redesigns Division Rivals and FUT Champions, making it easier for you to test your skills and progress in your duels against other players. The mode gives you more customization options than ever before, both on and off the pitch, and introduces FUT Heroes."
            />
        </Card>

        <Card
            style={{ width: 300, marginRight: "30px", marginLeft: "30px" }}
            cover={
                <img
                    alt="example"
                    src="https://audiocolor.co/wp-content/uploads/2022/02/Control-PS5-Dualsense-Starligth-Azul-1.jpg"
                />
            }
            actions={[ <Link to="/admin/ps" ><EditOutlined style={{ color: "red" }} key="edit" /></Link> ]}
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Play Station 5 Controller"
                description="Dimensions - 160mm x 66mm x 106mm
                Weight - 280 grams
                Motion Sensor - Six-axis (three axis for gyroscope + three axis for accelerometer)
                Audio - Jack 3.5 headphone port (output 48kHz/16bit, input : 24kHz/16bit)
                Haptic feedback (R2/L2)"
            />
        </Card>
    </div>
    );
}
