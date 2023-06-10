import React, { useState } from "react";
import styles from './Form.module.css';
import validation from "./validation";

const Form = (props) => {
    const {login} = props;
    const [userData, setUserData] = useState({email: '', password: ''});
    const [errors, setErrors]= useState({})
    const handlerChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
        setErrors(validation({...userData, [e.target.name]: e.target.value}));
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        login(userData);
    }
    return (
        <div>
            <form onSubmit={handlerSubmit}>
                {/* username */}
                <label htmlFor="">Email</label>
                <input type="text" 
                placeholder="email..." 
                name='email' 
                value={userData.email} 
                onChange={handlerChange}
                />
                {errors.e1 ? (
                    <p>{errors.e1}</p>
                ) : errors.e2 ? (
                    <p>{errors.e2}</p>
                ) : (
                    <p>{errors.e3}</p>)}
                    
                {/* password */}
                <label htmlFor="">password</label>
                <input type='password' 
                placeholder="password..." 
                name='password'
                value={userData.password} 
                onChange={handlerChange}
                />

                {errors.p1 ? (
                    <p>{errors.p1}</p>
                ) : (
                    <p>{errors.p2}</p>)}
                
                {/* boton de logueado  */}
                
                <button>Login</button>               
            </form>
            <div>
                <p>ejemplo@gmail.com</p>
                <p>1Password</p>
            </div>
        </div>
    )
}

export default Form;