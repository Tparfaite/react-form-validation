import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import { useFormik } from 'formik';


const Form2 = () => {
const formik=useFormik({
  initialValues:{
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  },
  validationSchema:Yup.object({
    firstName:Yup.string().max(10,"name can't exceed 10 characters").required("required"),
    lastName:Yup.string().max(10,"last name can't exceed 10 characters").required("required"),
    email:Yup.string().email().required("required"),
    password:Yup.string().min(4,"enter at most 4 characters").max(8,"password can't exceed 8 characters"),
  }),
  onSubmit:(values)=>{
    console.log(values);
  }
})

  return (
   <>
   <Form className='form2' autoComplete='off'  onSubmit={formik.handleSubmit}>
    <Form.Group><Form.Label>first name</Form.Label> <Form.Control  type="text" id="fname" name="firstName" onChange={formik.handleChange} value={formik.values.firstName}  /> {formik.touched.firstName && formik.errors.firstName? <p>{formik.errors.firstName}</p>:null} </Form.Group>
    <Form.Group><Form.Label>last name</Form.Label> <Form.Control  type="text" id="lname" name="lastName" onChange={formik.handleChange} value={formik.values.lastName}/> {formik.touched.lastName && formik.errors.lastName? <p>{formik.errors.lastName}</p>:null}</Form.Group>
    <Form.Group><Form.Label>email</Form.Label> <Form.Control  type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />{formik.touched.email && formik.errors.email? <p>{formik.errors.email}</p>:null} </Form.Group>
    <Form.Group><Form.Label>password</Form.Label> <Form.Control  type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} /> {formik.touched.password && formik.errors.password? <p>{formik.errors.password}</p>:null}</Form.Group>
    <Form.Group><Form.Label>confirm Password</Form.Label> <Form.Control  type="password" id="confirmPassword" name="confirmPassword" onChange={formik.handleChange} value={formik.values.confirmPassword}  />{formik.touched.confirmPassword && formik.errors.confirmPassword? <p>{formik.errors.confirmPassword}</p>:null} </Form.Group>
    <Button variant="warning"  type='submit'>Submit</Button>
   </Form>
   
   </>
  )
}

export default Form2
