import Navbar from '../components/navbar'
import { login, signup } from './actions'
import styles from './login.module.css'

export default function LoginPage() {
  return (
    <>
      <Navbar></Navbar>
      <form className={styles.flex}>
      <label htmlFor='email'>Email:</label>
      <input id='email' name='email' type='email' required></input>
      <label htmlFor='password'>Password:</label>
      <input id='password' name='password' type='password' required></input>
      <button formAction={login} className={styles.button}>Login</button>
      <button formAction={signup} className={styles.button}>Sign up</button>
    </form>
    </>

  )
}