import React from 'react'
import { useForm } from 'react-hook-form';

const Hookform = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      function onFormSubmit(data){
        console.log(data)
      }
  return (
    <>
    <h2>Contact Form</h2>
    <form onSubmit={handleSubmit(onFormSubmit)}>
        <label> Name:</label>
        <input type="text" {...register('name',{ required: "Name is required", minLength:3 })} />
        {errors.name && <p style={{color:"red"}}> {errors.name.message}</p>}
        <br />
        <label> Email:</label>
        <input type="text" {...register('email',
          { 
            required: "Email is Required",
            pattern:/^\S+@\S+\.\S+$/
          })} />
        {errors.email && <p style={{color:"red"}}> {errors.email.message}</p>}
        <br />
        <label> Message:</label>
        <textarea {...register('message')} />
        <br />
        <input type="submit" />
    </form>
    </>
  )
}

export default Hookform