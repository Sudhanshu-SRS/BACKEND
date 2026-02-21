import React  from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Home = () => {
   const navigate=useNavigate()
    const handelsubmit=async (e)=>{
        e.preventDefault()
        const formdata=new FormData(e.target)
        axios.post("http://localhost:3000/create-post",formdata).then((res)=>{
            console.log(res);
          navigate('/postC')

        }).catch((err)=>{
            console.log(err);
            alert("Error While Creating Post")
        })

    }



  return (
    <section className='post-creation-section'>
        <h1>This Is Home Post Create Page Welcome</h1>
        <form onSubmit={handelsubmit}>
          <input type='file' name='image' accept='image/*' placeholder='Upload Your Image Here' />
          <input type='text' name='caption' placeholder='Enter Caption' required/>
          <button type="submit">Submit</button>
        </form>
    </section>
  )
}

export default Home