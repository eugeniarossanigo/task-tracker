export default function Button({ text, handleClick }) {

    return (
        <button className='btn btn-close' onClick={handleClick}>{text}</button>
    )
}
