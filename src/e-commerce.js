import React from "react";
import Cart from './cart.js'
class Ecommerce extends React.Component{
      constructor(){
        super();
        this.state={users:[]};
      }
      render(){
       return ( <><Cart myCartList={this.state.users}/></>)
      }
      componentDidMount(){
        fetch('https://fakestoreapi.com/products/1')
        .then((res)=>{
            return res.json();
        })
        .then(data =>this.setState({users:data}));
        
      }

}
export default Ecommerce;