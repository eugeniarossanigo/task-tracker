import {Link as Linkrouter} from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <p>Copyright &copy; 2023</p>
      <Linkrouter to='/about'>About</Linkrouter>
    </footer>
  )
}
