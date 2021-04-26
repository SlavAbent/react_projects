import React, {useState, useEffect} from 'react';

const Alert = ({type, message, removeAlert}) => {
    const [active, setActive] = useState(false)
    useEffect(() => {
        const time = setTimeout(() => {
            removeAlert()
        }, 5000)
        return () => clearTimeout(time)
    })
    const closeAlert = () => {
        setActive(removeAlert())
    }
    return (
        <p className={`todo-alert todo-alert-${type}`}>{message} 
            <span className="todo-alert-remove" onClick={closeAlert}>x</span>
        </p>
    )
}

export default Alert;