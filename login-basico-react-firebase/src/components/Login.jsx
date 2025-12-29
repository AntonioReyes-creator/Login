/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Cat from "../assets/cat.png";
import Robot from "../assets/robot.jpg";

import appFirebase from '../credenciales';
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';

const auth = getAuth(appFirebase);
const Login = () => {

  const [registrado,setRegistrado] = useState(false)

  const functAutentication = async(e)=>{
    e.preventDefault();
    const correo = e.target.email.value;
    const contrasena = e.target.password.value;
    console.log(correo);

    if(registrado){
      try{
      await createUserWithEmailAndPassword(auth, correo, contrasena)
      }catch{
        alert("asegure de que la contrasea sea mayor a 8 dijitos")
      }
    }else{
      try{
      await signInWithEmailAndPassword(auth, correo, contrasena);
      }catch(error){
        alert("El correo o la contraseña son incorrectos")
      }
    }
  }
    
  

  return (
    <div className="container">
      <div className="row container-principal">
        <div className="col-md-4 ">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={Robot} alt="" className="estilo-profile" />
              <form onSubmit={functAutentication} >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control caja-texto"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control caja-texto"
                    id="password"
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-registrarse">
                  {registrado ? "Registrate": "Iniciar Sesion"}
                </button>
              </form>
              <h4 className="texto">{registrado ? "Ya tienes cuenta":"No tienes cuenta"}<button className=" btn-iniciarSesion" onClick={()=>setRegistrado(!registrado)}>{registrado?"Iniciar Sesion":"Registrate"}</button></h4>
            </div>
          </div>
        </div>
        <div className="col-md-4  ">
          <img src={Cat} alt="" className="tamaño-cat" />
        </div>
      </div>
    </div>
  );
};

export default Login;
