
import './App.css';
import { HiShieldCheck, HiTrash, HiSwitchHorizontal } from "react-icons/hi";

function App() {
  return (
    <div className="App ">
      <p className="todo-alert todo-alert-success">Информация <span className="todo-alert-remove">x</span></p>
      <div className="app-todo">
        <section className='section-center'>
          <form className='todo-form'>
            <div className="todo-header">
              <h3>todolist</h3>
              <p className="todo-yes">выполнено: 0 из 5</p>
            </div>
            <div className='form-control'>
              <input
                type='text'
                className='todo-input'
                placeholder='text todo'
              />
              <button type='submit' className='todo-submit'>
                добавить 
              </button>
            </div>
          </form>
          <div className='todo-container'>
            <div className='todo-list'>
              <article className='todo-item'>
                <p className='title'>текст одного списка</p>
                <div className='btn-container'>
                  <button
                    type='button'
                    className='yes-btn'><HiShieldCheck/>
                  </button>
                  <button
                    type='button'
                    className='edit-btn'><HiSwitchHorizontal/>
                  </button>
                  <button
                    type='button'
                    className='delete-btn'><HiTrash/>
                  </button>
                  
                </div>
              </article>
            </div>
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
