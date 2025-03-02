import React  from 'react'




function Component2() {
 
  const getmoviedata= async()=>{
    try{
      const jsonobject = await axios.get('http://127.0.0.1:3000/aboutmovie')
      console.log(jsonobject.data)
    }
    catch(error){
      console.log("Post data failed")
    }
  }

  return (
    <div class="text-bg-info p-3">
      <h1>Get Movie data</h1>
      <form action="">
      <button type='button' class="btn btn-outline-success" onClick={getmoviedata}>Load movie data</button>
      {/* <table border='1px'>
        <thead>
          <tr>
            <th>Moviename</th>
            <th>genrename</th>
            <th>heroname</th>
            <th>heroinname</th>
            <th>releaseyear</th>
            <th>setrating</th>
        
          </tr>
        </thead>
      </table> */}
      </form>
    </div>
     
  )
}

export default Component2
