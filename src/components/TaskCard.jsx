import { FaTimes } from 'react-icons/fa'
import {Link as Linkrouter} from 'react-router-dom'

export default function TaskCard({ task, handleDelete, toogleReminder }) {
  const date = new Date(task.day).toUTCString().split(' 00:00')[0]

  return (
    <div className={`task-container ${task.reminder ? 'task-reminder' : ''}`} onDoubleClick={() => toogleReminder(task.id)}>
      <h3>{task.text} <FaTimes onClick={() => handleDelete(task.id)}/></h3>
      <p>{date} <span>at {task.hour}</span></p>
      <Linkrouter to={`/task/${task.id}`}>Details</Linkrouter>
    </div>
  )
}
