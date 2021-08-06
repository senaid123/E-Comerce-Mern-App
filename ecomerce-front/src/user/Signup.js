import React, {useState} from 'react'
import Layout from "../core/Layout"
import {Link} from "react-router-dom"
import {signup} from "../Auth"
const  Signup = () => {
      const [values, setValues] = useState({
          name: " ",
          email: " ",
          password: " ",
          error: " ",
          succes: false
      });
      

      const {name,email,password,succes,error} = values;

      const handleChange = name => event =>{
          setValues({...values, error: false, [name]: event.target.value})
          
      }
    
      const clickSubmit = (event) =>{
          event.preventDefault();
          setValues({...values, error:false});
          signup({ name, email, password})
          .then(data =>{
              if(data.error){
                  setValues({...values, error: data.error, succes:false})
              }else{
                  setValues({
                      ...values,
                      name: "",
                      email: "",
                      password: "",
                      error: "",
                      succes: true
                  })
              }
          })


      }

     const signupForm = () =>(
         <form>
             <div className="form-group">
                 <label className="text-muted">Name</label>
                  <input onChange ={handleChange("name")} type="text" className="form-control" value={name}/>

             </div>
             <div className="form-group">
                 <label className="text-muted">Email</label>
                  <input onChange ={handleChange("email")} type="text" className="form-control" value={email}/>

             </div>
             <div className="form-group">
                 <label className="text-muted">Password</label>
                  <input onChange ={handleChange("password")} type="secret" className="form-control" value={password}/>

             </div>
             <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
         </form>
     )


     /* SUCESS AND ERRORS IN THE SIGNINGUP  */

     const showError = () =>(
         <div className="alert alert-danger" style={{display: error? " " : "none"}}>
          {error}
         </div>
     );

     const showSucces = () =>(
         <div className="alert alert-info" style={{display: succes ? " ": "none"}}>
             New account is created. Plese Sign <Link to="/signin">signin</Link>

         </div>
     );
     
    

    return (
 
        <Layout className="container col-md-8 offset-md-2"title="Sign up to" description=" sign up to Node react e comerce app">
            {showSucces()}
            {showError()}
           {signupForm()}
         
        </Layout>
    )
    }

export default Signup
