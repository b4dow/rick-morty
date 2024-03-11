import { useState } from "react"
import validate from "./validate"

const Form = ({ login })=> {
    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    })

    const [ error, setError ] = useState({})

    const handleChange = (event)=> {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setError(validate({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit= (event)=> {
        event.preventDefault()
        login(userData)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <h2>Welcome</h2>
            <div>
                <label htmlFor="">Email</label>
                <input 
                    type="email" 
                    value={userData.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                />  
                <br/>
                {
                    error.email ? (
                        <p style={{color: 'red', fontSize: '12px'}}>{error.email}</p>
                    ) : null
                }
            </div>
            <br/>
            <div>
                <label htmlFor="">Password</label>
                <input 
                    type="password" 
                    value={userData.password}
                    onChange={handleChange}
                    name="password"
                    placeholder="Password"
                />
                <br/>
                {
                    error.password && <p style={{color: 'red',  fontSize: '12px'}}>{error.password}</p>
                   
                }
            </div>
            <br/>
            <button type="submit" > Login </button>
            
        </form>
        </>
    )
}

export default Form