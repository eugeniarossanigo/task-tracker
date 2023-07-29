import { FaTimes } from 'react-icons/fa'
import {Link as Linkrouter} from 'react-router-dom'

export default function TaskCard({ task, handleDelete, toogleReminder }) {
  return (
    <div className={`task-container ${task.reminder ? 'task-reminder' : ''}`} onDoubleClick={() => toogleReminder(task.id)}>
      <h3>{task.text} <FaTimes onClick={() => handleDelete(task.id)}/></h3>
      <div>
        <p>{task.day} {task.hour}</p>
        <p>{task.hour}</p>
      </div>
      <Linkrouter to={`/task/${task.id}`}>Details</Linkrouter>
    </div>
  )
}
