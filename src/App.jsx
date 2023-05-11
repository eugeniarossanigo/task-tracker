import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { tasks as data } from './data/tasks'
import AddTask from './components/AddTask'

function App() {
    const [tasks, setTasks] = useState(data)
    const [open, setOpen] = useState(false)

    // const handleOpen = () => { open ? setOpen(false) : setOpen(true) }
    const handleOpen = () => setOpen(!open)

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const handleAdd = (task) => {
        const newTask = {id: tasks.length, ...task}
        setTasks([...tasks, newTask])
    }

    const toogleReminder = (id) => {
        console.log(id)
        setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    return (
        <div className='container'>
            <Header handleOpen={handleOpen} open={open}/>
            {/* <Header handleOpen={() => setOpen(!open) }/> */}
            { open && <AddTask handleAdd={handleAdd}/> }
            <main>
                { tasks.length > 0 ?
                    <Tasks tasks={tasks} handleDelete={handleDelete} toogleReminder={toogleReminder} />
                    :
                    <p>No tasks</p>
                }
            </main>
        </div>
    )
}

export default App
