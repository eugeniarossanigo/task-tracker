import {PropTypes} from 'prop-types' 
import Button from './Button'

export default function Header({ title }) {
    const handleClick = () => {
        console.log('hi')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Close' handleClick={handleClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}