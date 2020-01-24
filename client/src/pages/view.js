import React, { useEffect, useState } from 'react';
import {
  useParams
} from "react-router-dom";

const View = () => {
  const { id } = useParams();
  const [data, setData] = useState(0)
  useEffect(() => {
    const url = `http://localhost:3001/view/${id}`
    fetch(url, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((response) => response.json())
      .then(res => {
        setData(res)
      })
      .catch(err => console.log(err))
  },[])

  if (data) {
    const { name } = data
    const { desc } = data
    const { image } = data
    return (
      <div style={{ margin: 10 }}>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <h3>
                {name}
              </h3><img alt="Bootstrap Image Preview" src={image} />
            </div>
            <div class="col-md-6">
              <p>
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } 
  return (
    <div style={{ margin: 10 }}></div>
  )
  
}

export default View
