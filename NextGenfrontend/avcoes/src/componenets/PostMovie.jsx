import React, { useState } from 'react'
import axios from 'axios'


function PostMovie() {
    const [moviename,setmoviename] = useState(0);
    const [hero,sethero] = useState(0);
    const [heroine,setheroine] = useState(0);
    const [year,setyear] = useState(0);
    const [rating,setrating] = useState(0);
    const [genre,setgenre] = useState(0);

    const apipostdata= async()=>{
        try{
        const jsonobject = 
        await axios.post('http://127.0.0.1:3000/aboutmovie',
         {moviename,hero,heroine,year,rating,genre})
        alert('Data saved successfully')
        console.log(jsonobject.data)
        }
        catch(error){
            console.log("Post data failed")
        }  
    }

    return (
    <>
    <div class="p-1 mb-1 bg-info text-dark">
        <h1>Post Movie Data</h1>
        <form>
            <input type='text' class="form-control w-50"
             onChange={(e) => setmoviename(e.target.value)}
             placeholder='Enter Movie Name'/><br/>
            <input type='text' class="form-control w-50"
             onChange={(e) => sethero(e.target.value)}
            placeholder='Enter Hero Name'/><br/>
            <input type='text'class="form-control w-50"
             onChange={(e) => setheroine(e.target.value)}
            placeholder='Enter Heroine Name'/><br/>
            <input type='number' class="form-control w-50"
             onChange={(e) => setyear(e.target.value)}
            placeholder='Enter Release Year'/><br/>
            <input type='number' class="form-control w-50"
             onChange={(e) => setrating(e.target.value)}
            placeholder='Enter Your Rating'/><br/>
            <input type='text' class="form-control w-50"
             onChange={(e) => setgenre(e.target.value)}
            placeholder='Enter Movie Genre'/><br/>
            <input type='button' class="bg-success" onClick={apipostdata} value='Add Movie Data'/>


        </form>
    </div>
    </>
  )
}



export default PostMovie
