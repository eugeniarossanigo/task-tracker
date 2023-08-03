import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import TasksDetails from './components/TasksDetails'

function App() {
  const [tasks, setTasks] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      setTasks(await fetchTasks())
    }
    getTasks()
  }, [])
    
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const handleOpen = () => setOpen(!open)

  const handleDelete = async (id) => {
    await fetch('http://localhost:5000/tasks/' + id, {
      method: 'DELETE'
      })
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleAdd = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(task)
  })
  const data = await res.json()
  setTasks([...tasks, data])
  }

  const fetchTask = async(id) => {
    const res = await fetch('http://localhost:5000/tasks/' + id)
    const data = await res.json()
    return data
  }

  const toogleReminder = async(id) => {
    const toogleTask = await fetchTask(id)
    const updateTask = {...toogleTask, reminder: !toogleTask.reminder}
    const res = await fetch('http://localhost:5000/tasks/' +id, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(updateTask)
    })
    const data = await res.json()
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  return (
    <Router>
      <div className='container'>
        <Header handleOpen={handleOpen} open={open}/>
        <Routes>
          <Route path='/' element={
          <>
            { open && <AddTask handleAdd={handleAdd}/> }
            <main>
            { tasks.length > 0 ?
                <Tasks tasks={tasks} handleDelete={handleDelete} toogleReminder={toogleReminder} />
                :
                <p>No tasks</p>
            }
            </main>
          </>
          } />
          <Route path='/about' element={<About />} />
          <Route path='/task/:id' element={<TasksDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
