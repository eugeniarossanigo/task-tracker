import {PropTypes} from 'prop-types' 
import Button from './Button'
import { useLocation } from 'react-router-dom'

export default function Header({ title, handleOpen, open }) {
  const location = useLocation()
  // const { pathname } = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && 
          <Button text={open ? 'Close' : 'Add Task'} handleOpen={handleOpen}/>
      }
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}