import react, {useEffect,useState} from 'react'
import TextField from './users/StyledTextField';


const Login = (props)=>{
  const [username,setUsername]=useState('')
  const [password, setPassword]=useState('')

  const onChangePassword=(e)=>{
    setPassword(e.target.value)
  }
  const onChangeUsername=(e)=>{
    setUsername(e.target.value)
  }


  return(
    <>
    <h1>Login as {username} {password}</h1>
      Username: <input type='text' name='username' value={username} onChange={onChangeUsername} />
      <br></br>
      Password: <input type='password' name='password' value={password} onChange={onChangePassword} />
      <p> My name is {username} </p>
    </>
  )
}
export default Login

