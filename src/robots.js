import React from "react";
import List from "./list";
import './App.css';
// import Rimg from "./rimg";
class Robots extends React.Component{
constructor(){
    super();
    this.state={users:[]};
}
 render(){
 return(<>
      
      <div className="formating" ><List myList={this.state.users}/></div>
       {/* <Rimg image1={this.state.users}/> */}
    </>);
 }
componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        return response.json();
    })
    .then(data =>this.setState({users:data}));
    

}
}
export default Robots;