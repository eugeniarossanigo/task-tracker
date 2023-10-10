import { useEffect, useState } from 'react'
import { useParams, Link as Linkrouter, useNavigate } from 'react-router-dom'

export default function TasksDetails() {
  const [task, setTask] = useState({})
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTask = async() => {
      const res = await fetch('http://localhost:5000/tasks/' + params.id)
      const data = await res.json()
      
      if (res.status === 404) {
          navigate('/')
      }

      setTask(data)
      setLoading(false)
    }

    fetchTask()
  }, [params.id])

  const date = new Date(task.day).toUTCString().split(' 00:00')[0]

  return (
    loading ? 
    <h3>Loading... </h3>
    :
    <div className='task-container'>
      <p>{date} <span>at {task.hour}</span></p>
      <h3>{task.text}</h3>
      <p className='details'>{task.details}</p>
      <Linkrouter to='/'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
      </Linkrouter>
    </div>
  )
}
