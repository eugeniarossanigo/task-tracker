import { FaTimes } from 'react-icons/fa'

export default function TaskCard({ task, handleDelete, toogleReminder }) {

    return (
        <div className='task-container' onDoubleClick={() => toogleReminder(task.id)}>
            <h3>{task.text} <FaTimes onClick={() => handleDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}
