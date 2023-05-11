import {PropTypes} from 'prop-types' 
import Button from './Button'

export default function Header({ title }) {
    const handleAdd = () => {
        console.log('hi')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Add' handleAdd={handleAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}