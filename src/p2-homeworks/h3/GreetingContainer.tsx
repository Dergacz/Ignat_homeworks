import React, {ChangeEvent,KeyboardEvent, useState} from "react"
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (trimmedUser: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const addUser = () => {
        const trimmedUser = name.trim();
        if (trimmedUser){
            addUserCallback(trimmedUser)
            alert(`Hello  ${trimmedUser}!`)
            setName("")
            setError("")
        }
        else {
            setError("Bad name")
        }
    }
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13){
            addUser()
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
