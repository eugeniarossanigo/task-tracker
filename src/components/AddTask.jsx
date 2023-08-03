import { useState } from 'react'

export default function AddTask({ handleAdd }) {
  const [text, setText] = useState('')
  const [day, setDay] = useState(new Date().toJSON().slice(0, 10))
  const [hour, setHour] = useState('11:30')
  const [reminder, setReminder] = useState(false)
  const [details, setDetails] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('please add a task')
      return
    }
    if (!day) {
      alert('please add a date')
      return
    }
    handleAdd({text, day, hour, details, reminder})
    setText('')
    setDay(new Date().toJSON().slice(0, 10))
    setHour('11:30')
    setDetails('')
    setReminder(false)
  }

  return (
    <form className='form-container' onSubmit={handleSubmit} >
      <fieldset>
        <label>Task</label>
        <input type="text" placeholder='Meeting...' value={text} onChange={(e) => setText(e.target.value)} />
      </fieldset>
      <fieldset className='day-time'>
        <div>
          <label>Day</label>
          <input type="date" data-format="DD MM YYYY" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div>
          <label>Time</label>
          <input type="time" value={hour} onChange={(e) => setHour(e.target.value)} />
        </div>
      </fieldset>
      <fieldset>
        <label>Details</label>
        <textarea type="text" rows={3} placeholder='Take the examples...' value={details} onChange={(e) => setDetails(e.target.value)} />
      </fieldset>
      <fieldset>
        <label>
          <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
          Remind me
        </label>
      </fieldset>
      <button className='btn btn-save'>Save</button>
    </form>
  )
}
