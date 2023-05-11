export default function Button({ text, handleAdd }) {

    return (
        <button className='btn btn-add' onClick={handleAdd}>{text}</button>
    )
}
