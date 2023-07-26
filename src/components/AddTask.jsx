import { useState } from 'react'

export default function AddTask({ handleAdd }) {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

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
    handleAdd({text, day, reminder})
    // console.log(text, day, reminder)
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='form-container' onSubmit={handleSubmit} >
      <div>
        <label>Task</label>
        <input type="text" placeholder='Meeting...' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      {/* <div>
          <label>Day & Time</label>
          <input type="datetime-local" value={day} onChange={(e) => setDay(e.target.value)} />
      </div> */}
      <div>
        <label>Day & Time</label>
        <input type="text" placeholder='June 20th at...' value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div>
        <label>Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>
      <button className='btn btn-save'>Save</button>
    </form>
  )
}
