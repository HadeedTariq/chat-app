import {FcGoogle} from 'react-icons/fc'
import { useUser } from '../context/store'
import {signInWithPopup} from 'firebase/auth'
import { stateType } from '../context/reducer'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [{},dispatch]=useUser()
    const navigator=useNavigate()
    const login=async()=>{
       const {user}=await signInWithPopup(auth,provider) 
       localStorage.setItem('chat-user',JSON.stringify(user))
       dispatch({type:stateType.SETUSER,user:user})
       navigator('/')
    }
  return (
    <>
     <div className="login">
        <button onClick={login}>
          <div><FcGoogle size={25}/></div>
          <div>Sign in with Google</div>
        </button>
     </div>
    </>
  )
}

export default Login