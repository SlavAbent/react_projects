import React, {useState, useRef} from 'react'

export const TodoForm: React.FC = () => {
    // const [title, setTitle] = useState<string>('')

    // const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event:React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            // console.log(title);
            // setTitle('')
        }
    }
    return (
        <div className="input__field mt2">
            <label 
                htmlFor="title" 
                className="active">
                Введите название дела
            </label>
            <input 
                // value={title} 
                // onChange={changeHandler} 
                onKeyPress={keyPressHandler}
                type="text" 
                id="title" 
                placeholder="Введите название дела"
            />
        </div>
    )
}