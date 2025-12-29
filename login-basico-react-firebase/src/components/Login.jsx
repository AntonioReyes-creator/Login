import React from "react";
import Cat from "../assets/cat.png";
import Robot from "../assets/robot.jpg";

const Login = () => {
  return (
    <div className="container">
      <div className="row limite container-principal">
        <div className="col-md-4 ">
          <div className="padre">
            <div className="card card-body">
              <img src={Robot} alt="" className="estilo-profile" />
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control caja-texto"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control caja-texto"
                    id="exampleInputPassword1"
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

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
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
