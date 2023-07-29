import { useState } from 'react'

export default function AddTask({ handleAdd }) {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
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
    // console.log(text, day, hour, details, reminder)
    setText('')
    setDay('')
    setHour('')
    setDetails('')
    setReminder(false)
  }

  return (
    <form className='form-container' onSubmit={handleSubmit} >
      <fieldset>
        <label>Task</label>
        <input type="text" placeholder='Meeting...' value={text} onChange={(e) => setText(e.target.value)} />
      </fieldset>
      {/* <fieldset>
          <label>Day & Time</label>
          <input type="datetime-local" value={day} onChange={(e) => setDay(e.target.value)} />
      </fieldset> */}
      <fieldset className='day-time'>
        <div>
          <label>Day</label>
          <input type="text" placeholder='June 20th at...' value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div>
          <label>Time</label>
          <input type="text" placeholder='June 20th at...' value={hour} onChange={(e) => setHour(e.target.value)} />
        </div>
      </fieldset>
      <fieldset>
        <label>Details</label>
        <input type="text" placeholder='Take the examples...' value={details} onChange={(e) => setDetails(e.target.value)} />
      </fieldset>
      <fieldset>
        <label>
          <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
          Reminder
        </label>
      </fieldset>
      <button className='btn btn-save'>Save</button>
    </form>
  )
}
