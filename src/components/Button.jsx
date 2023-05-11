export default function Button({ text, handleOpen }) {

    return (
        <button className='btn btn-add' onClick={handleOpen}>{text}</button>
    )
}
