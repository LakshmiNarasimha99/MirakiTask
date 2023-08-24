import "./login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="row m-0 mt-5 align-items-center justify-content-center">
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
          <div className="card">
            <div className="card-body m-0">
              <div className="h5 text-center">Login</div>
              <form>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      maxLength={35}
                      className="form-control"
                      placeholder="Username"
                      id="username"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <label htmlFor="password" className="form-label mt-4">
                      Password
                    </label>
                    <input
                      type="password"
                      maxLength={50}
                      className="form-control"
                      placeholder="Password"
                      id="password"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                    <button
                      className="btn btn-primary mt-3"
                      type="submit"
                      onClick={() => {
                        navigate("/home");
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
