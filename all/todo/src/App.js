import React, { useState } from 'react';
import List from './components/list'
import Alert from './components/alert'
import './App.css';


function App() {
  const [list, setList] = useState([])
  const [alert, setAlert] = useState({show: false, message: '', type: ''})
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [name, setName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if(!name){
      showAlert(true, 'введите название', 'danger')
    } else if (name && edit) {
      setList(
        list.map(item => {
          if(item.id === editId){
            return {...item, title: name}
          }
          return item
        })
      )
      setName('')
      setEdit(false)
      setEditId(null)
      showAlert(true, 'отредактировано', 'success')
    } else {
      showAlert(true, 'запись добавлена', 'success')
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      setName('')
    }
  }
  const showAlert = (show=false, message='', type='') => {
    setAlert({show, type, message})
  }
  
  const editItem = id => {
   const spec = list.find(item => item.id === id)
   setEdit(true)
   setEditId(id)
   setName(spec.title)
   showAlert(true, 'элемент изменен', 'warning')
  }

  const deleteItem = id => {
    showAlert(true, 'элемент удален', 'danger')
    const newItem = list.filter(item => item.id !== id)
    setList(newItem)
    setName('')
  }

  return (
    <div className="App ">
      {
        alert.show && <Alert {...alert} removeAlert={showAlert}/>
      }
      <div className="app-todo">
        <section className='section-center'>
          <form className='todo-form' onSubmit={handleSubmit}>
            <div className="todo-header">
              <h3>todolist</h3>
              <p className="todo-yes">выполнено: 0 из {list.length}</p>
            </div>
            <div className='form-control'>
              <input
                type='text'
                className='todo-input'
                placeholder='text todo'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button type='submit' className='todo-submit'>
                { edit ? 'изменить' : 'добавить'}
              </button>
            </div>
          </form>
          <div className='todo-container'>
            {
              list.length > 0 && (
                <div className='todo-list'>
                  <List 
                    list={list} 
                    editItem={editItem} 
                    deleteItem={deleteItem} 
                  />
                </div>
              )
            }
        </div>
        <button className='clear-btn' >
          очистить все
        </button>
      </section>
      </div>
    </div>
  );
}

export default App;
