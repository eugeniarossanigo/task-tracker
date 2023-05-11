import {PropTypes} from 'prop-types' 
import Button from './Button'

export default function Header({ title, handleOpen, open }) {
    const handleAdd = () => {
        console.log('hi')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={open ? 'Close' : 'Add Task'} handleAdd={handleAdd} handleOpen={handleOpen}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}