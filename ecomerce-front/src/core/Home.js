import React, {useState, useEffect} from "react";
import Layout from "./Layout";
import {getProducts} from "./ApiCore"
import Card from "./Card"
import Search from "./Search"
const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setproductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then(data =>{
      if(data.error){
        setError(data.error)
      }
      else{
        setProductsBySell(data)
      }
    })
  }
  const loadProductsByArrival = () => {
    getProducts("createdAt").then(data =>{
      if(data.error){
        setError(data.error)
      }
      else{
        setproductsByArrival(data)
      }
    })
  }


  useEffect(() => {
    loadProductsByArrival()
    loadProductsBySell()
  }, []);

  return (
    <Layout title="Home Page" description="Node react e comerce app" className="container-fluid">
     <Search/>
       <div className="row">
      <h2 className="mb-4">New Arrivals</h2>       
      {productsByArrival.map((product,i)=>(
      <div key={i} className="col-4 mb-3">
      <Card  product={product}/>
      </div>))}
      </div>
       <div className="row">
       <h2 className="mb-4">Best sellers</h2>       
      {productsBySell.map((product,i)=>(
      <div key={i} className="col-4 mb-3">
      <Card  product={product}/>
      </div>))}
      </div>
      
    </Layout>
  );
};

export default Home;
