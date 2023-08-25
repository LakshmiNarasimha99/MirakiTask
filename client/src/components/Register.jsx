import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { envi } from "../environment";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  return (
    <div>
      <div className="row m-0 mt-5 align-items-center justify-content-center">
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
          <div className="card">
            <div className="card-body m-0">
              <div className="h5 text-center">Register</div>
              <form
                onSubmit={handleSubmit(async(data) => {
                  try {
                    console.log(data);
                    const res = await axios.post(`${envi.api_url}users/register`, data);
                    console.log(res.data,"data");
                    toast.success("Student Registered successfully");
                    // navigate("/");
                  } catch (error) {
                    toast.error(error.response.data.msg,{});
                  }
                })}
              >
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      {...register("name",{required:"This is required"})}
                      type="text"
                      maxLength={35}
                      className="form-control"
                      placeholder="Username"
                      id="username"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <label htmlFor="username" className="form-label">
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: "This is required",
                        minLength: { value: 4, message: "Minimum length is 4" },
                      })}
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
                      {...register("password", {
                        required: "This is required",
                        minLength: { value: 3, message: "Minimum length is 3" },
                      })}
                      type="password"
                      maxLength={50}
                      className="form-control"
                      placeholder="Password"
                      id="password"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-start">
                      <button 
                       className="btn btn-primary mt-3" type="submit">
                        Submit
                      </button>
                     
                    </div>
                    <a className=" col-md-6 col-sm-6 col-6 mt-3 text-end">
                      <Link to={"/"}>Login here</Link>
                    </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
