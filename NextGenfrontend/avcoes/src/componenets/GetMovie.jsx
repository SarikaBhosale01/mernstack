import React, { useState,useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function GetMovie() {

    const [news, setnews] = useState([]);
    useEffect(() => {
      axios
        .get("http://127.0.0.1:3000/getmoviedata")
        .then((res) => {
          // handle success
          console.log(res.data);
          setnews(res.data);
          //  console.log(res);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }, []);
    return ( 
        <>
        <div className="container my-5">
          <div className="row text-center">
            {news.map((val) => {
              return (
                <div className="col my-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={val.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{val.moviename}</h5>
                      <p className="card-text">{val.hero}</p>
                      <p className="card-text">{val.heroine}</p>
                      <p className="card-text">{val.rating}</p>
                      <p className="card-text">{val.year}</p>
                      <p className="card-text">{val.genre}</p>
                      <a
                        href={val.rating}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
  )
}

export default GetMovie