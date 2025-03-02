import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios';
function Component1() {
  const [moviename,setmoviename] = useState(0);
  const [genrename,setgenrename]= useState(0);
  const [heroname,setheroname] = useState(0);
  const [heroinname,setheroinname] = useState(0);
  const [releaseyear,setreleaseyear]= useState(0);
  const [rating,setrating] = useState(0);

  const apipostdata=async ()=>{
    try{
         const jsonobject=  await axios.post('http://127.0.0.1:3000/aboutmovie',{moviename,genrename,heroname,heroinname,releaseyear,rating})
         alert('data saved succesfully')
         console.log(jsonobject.data)
   }
  catch(error){
   console.log("Post data failed")
  }
  console.log(moviename+genrename+heroname+heroinname+releaseyear+rating)
}
  return (
    <div  class="text-bg-warning p-3" >
<h1>Post Movie</h1>
    
    <form action="">
        <div>
            <input onChange={(e)=>setmoviename(e.target.value)} class="  form-control w-100" type="text" placeholder='Enter the movie name' /><br />
            <input onChange={(e)=>setgenrename(e.target.value)} class="form-control w-100" type="text" placeholder='Enter the genre' /><br />
            <input onChange={(e)=>setheroname(e.target.value)} class="form-control w-100" type="text" placeholder='Enter the hero name'/><br />
            <input onChange={(e)=>setheroinname(e.target.value)} class="form-control w-100" type="text" placeholder='Enter the heroin name' /><br />
            <input onChange={(e)=>setreleaseyear(e.target.value)} class="form-control w-100" type="text" placeholder='Enter the release year' /><br />
            <input onChange={(e)=>setrating(e.target.value)} class="form-control w-100" type="text" placeholder='Enter your rating' /><br />
            
            <button  onClick={apipostdata} type="button" class="btn btn-outline-success">Add movie data</button>
            {/* <button class="bg-primary">Add movie data</button> */}
        </div>
    </form>
    </div>
  )
}

export default Component1
