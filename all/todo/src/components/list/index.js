import React, {useState} from 'react';
// import Edit from '../../components/edit'
import { HiShieldCheck, HiTrash, HiSwitchHorizontal } from "react-icons/hi";
const List = ({list, deleteItem, editItem}) => {
const [yes, setYes] = useState([
    {type: ''}
])
    const yesItem = (id) => {
//         const index = yes.find(elem => elem.id === id);
//         console.log(index);
//         const old = yes[index];
//         const newArr = {type: !old.type};

//         return {
//             yes: newArr
//         }
    }

    let classNames = 'title title-'
    if(classNames){
        classNames += ' active';
    }
    return (
        <div>
            {list.map(item => {
                const {title, id} = item
                return (
                    <article key={id} className='todo-item'>
                         <p className={classNames}>{title}</p>
                        <div className='btn-container'>
                            <button
                                type='button'
                                className='yes-btn'
                                onClick={() => yesItem(id)}
                                ><HiShieldCheck/>
                            </button>
                            <button
                                type='button'
                                className='edit-btn'
                                onClick={() => editItem(id)}>
                                <HiSwitchHorizontal/>
                            </button>
                            <button
                                type='button'
                                className='delete-btn'
                                onClick={() => deleteItem(id)}>
                                <HiTrash/>
                            </button>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
export default List