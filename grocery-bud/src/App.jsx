import { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  }
  else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage)
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEdit] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // dispay alert
      showAlert(true, 'danger', 'please enter value')
    }
    else if (name && isEditing) {
      // deal with edit
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        }))
      setName('')
      setEdit(null)
      setIsEditing(false)
      showAlert(true, 'success', 'value changed ')
    }
    else {
      // show alert 
      showAlert(true, 'success', 'item added to the lists')
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      }
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show: show, type, msg })
  }

  const clearItem = () => {
    showAlert(true, 'danger', 'empty list')
    setList([])
  }
  const removeItem = (id) => {
    setAlert(true, 'danger', 'item removed ')
    setList(list.filter((item) => item.id !== id))
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEdit(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={alert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className='grocery'
            placeholder='eg. eggs' value={name}
            onChange={(e) => setName(e.target.value)} />
          <button className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearItem}>clear item</button>
        </div>
      )}

    </section>
  )

}

export default App
