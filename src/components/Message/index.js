import './index.css'

const Message = props => {
  const {message} = props
  console.log(message)
  return <h1 className="message">{message}</h1>
}

export default Message
