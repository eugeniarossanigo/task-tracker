import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { tasks as data } from './data/tasks'

function App() {
    const [tasks, setTasks] = useState(data)

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => id !== task.id))
    }

    const toogleReminder = (id) => {
        console.log(id)
    }

    return (
        <div className='container'>
            <Header />
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
