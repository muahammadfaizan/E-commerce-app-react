import React from 'react'
import { useForm } from 'react-hook-form'

const Home = () => {
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const userFormSubmit = (data)=>{
    console.log(data);
    
  }

  return (
    <>
    <h1 className='text-center mt-5'>Admission Form</h1>
    <div>
      <form onSubmit={handleSubmit(userFormSubmit)} className='flex flex-col justify-center gap-5 flex-wrap mx-[100px]'>
      <label className='label-text' htmlFor='text'>Full Name</label>
    <input type="text" placeholder="Full Name" className="input input-bordered  w-full max-w-xs" {...register("Full Name" , { required: true })} />
    <br />
    {errors.text && <span className='text-danger'>This field is required</span>}

    <label className='label-text ' htmlFor='text'>Father Name</label>
    <input type="text" placeholder="Father Name" className="input input-bordered w-full max-w-xs" {...register("Father Name" , { required: true })}/>  
    <br />
    {errors.text && <span className='text-danger'>This field is required</span>}

    <label className='label-text mt-3' htmlFor='text'>Email</label>
    <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" {...register("email" , { required: true })}/>
    <br />  
    {errors.email && <span className='text-danger'>This field is required</span>}

    <label className='label-text' htmlFor='text'>Phone Number</label>    
    <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs"  {...register("number" , { required: true })} />
    <br />  
    {errors.number && <span className='text-danger'>This field is required</span>}
    
    <label className='label-text' htmlFor='text'>National ID (CNIC)</label>
    <input type="number" placeholder="CNIC" className="input input-bordered w-full max-w-xs"  {...register("number" , { required: true })}/>
    <br />  
    {errors.number && <span className='text-danger'>This field is required</span>}
    
    <label className='label-text' htmlFor='text'>Date of Birth</label>
    <input type="date" placeholder="Full Name" className="input input-bordered w-full max-w-xs"  {...register("date" , { required: true })} />
    <br />  
    {errors.date && <span className='text-danger'>This field is required</span>}

    <label className='label-text' htmlFor='text'>Address</label> 
    <input type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" {...register("text" , { required: true })} />
    <br />  
    {errors.text && <span className='text-danger'>This field is required</span>}

    <button type='submit' className='btn btn-primary'>Submit</button>
      </form>

      </div>
    </>
  )
}

export default Home