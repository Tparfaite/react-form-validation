import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup"

const Form = () => {
   

    const formik=useFormik({
        initialValues :{
            firstName:"",
            lastName:"",
            email:"",
            password:""
        },
        validationSchema:Yup.object({
            firstName:Yup.string().max(10,"must not be more than 10 character").required("required"),
            lastName:Yup.string().max(10,"must not be more than 10 characters").required("required"),
            email:Yup.string().email().required(),
            password:Yup.string().min(4,"password must not be less than 4 characters").max(8,"password must not be more than 8 characters").required("required")
        }),
        onSubmit:(values)=>{
          console.log(values)
        }
    })
   
    
  return (
    <form className='form1' onSubmit={formik.handleSubmit}>
    <div className='input-name'>
        <input type="text" name="firstName" placeholder="first name" onChange={formik.handleChange} value={formik.values.firstName}/>
        {formik.touched.firstName && formik.errors.firstName? <p>{formik.errors.firstName}</p> :null}
    </div><br/>
    <div className='input-name'>
        <input type="text" name="lastName" placeholder="last name"  onChange={formik.handleChange}  value={formik.values.lastName}/>
        {formik.touched.lastName && formik.errors.lastName? <p>{formik.errors.lastName}</p> :null}
    </div><br/>
    <div className='input-name'>
        <input type="email" name="email" placeholder="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.touched.email && formik.errors.email? <p>{formik.errors.email}</p> :null}
    </div><br/>
    <div className='input-name'>
        <input type="password" name="password" placeholder="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.touched.password && formik.errors.password? <p>{formik.errors.password}</p> :null}
    </div><br/>
    <button type='submit'>Submit</button><br/>
    </form>
  )
}

export default Form
