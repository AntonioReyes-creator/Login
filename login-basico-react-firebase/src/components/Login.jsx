import React from 'react'
import Cat from '../assets/cat.png'
import Robot from '../assets/robot.jpg'

const Login = () => {
  return (
    <div className='container'>
        <h2 className='text-center'>Login</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="padre">
                    <div className="card card-body">
                        <form action="">
                            <input type="text" placeholder='Ingresar Email'/>
                            <input type="password" placeholder='Ingresar Contraseña' />
                            <button>Registrarse</button>
                        </form>
                    </div>
                </div>
                
            </div>
            <div className="col-md-8">
                <img src={Cat} alt="" className='tamaño-cat'/>
            </div>
        </div>      
    </div>
  )
}

export default Login
