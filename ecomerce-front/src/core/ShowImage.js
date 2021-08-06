import React from "react"


const ShowImage = ({item}) =>{
  return (
 <div className="product-img">
     <img src={`http://localhost:8000/api/product/photo/${item._id}`} alt={item.name} className="mb-3" style={{maxHeight: '100%', maxWidth:'100%' }}/>
     
  </div>
  );
}

export default ShowImage