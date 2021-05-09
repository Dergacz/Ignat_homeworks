import React from "react"
import style from "./Message.module.css"

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={style.all}>
            <img src={props.avatar} className={style.img}/>
            <div className={style.angle}/>
            <div className={style.container}>
                <div className={style.name}>
                    {props.name}
                </div>
                <div className={style.message}>
                    {props.message}
                    <span className={style.time}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
