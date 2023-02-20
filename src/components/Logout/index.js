import './index.css'

const Login = props => {
  const {changeButton} = props

  const buttonClicked = () => {
    changeButton()
  }

  return (
    <button className="button" type="button" onClick={buttonClicked}>
      Logout
    </button>
  )
}

export default Login
