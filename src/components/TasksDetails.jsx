import { useEffect, useState } from 'react'
import { useParams, Link as Linkrouter, useNavigate } from 'react-router-dom'

export default function TasksDetails() {
  const [task, setTask] = useState({})
  const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTask = async() => {
      const res = await fetch('http://localhost:5000/tasks/' + params.id)
      const data = await res.json()
      
      if (res.status === 404) {
          // setError('Task not found')
          navigate('/')
      }

      setTask(data)
      setLoading(false)
    }

    fetchTask()
  }, [params.id])

    // if (error) {
    //     return <Navigate to='/' />
    // }

  return (
    loading ? 
    <h3>Loading... </h3>
    :
    <div className='task-container'>
      <div>
        <p>{task.day}</p>
        <p>{task.hour}</p>
      </div>
      <h3>{task.text}</h3>
      <p className='details'>{task.details}</p>
      <Linkrouter to='/'>Go Back</Linkrouter>
      {/* <Button onClick={() => navigate(-1)} text='Go Back' /> */}
    </div>
  )
}
