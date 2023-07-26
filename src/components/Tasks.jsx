import TaskCard from './TaskCard'

export default function Tasks({ tasks, handleDelete, toogleReminder }) {
  return (
  <>
    {tasks.map((task) => <TaskCard key={task.id} task={task} handleDelete={handleDelete} toogleReminder={toogleReminder} />)}
  </>
  )
}
