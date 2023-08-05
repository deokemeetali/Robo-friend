

import React  from 'react';
 import './App.css';
// import Stopwatch from './stopwatch';
// import List from './list';
// import Header from './header';-

class App extends React.Component{

       constructor(){
        super()
        this.state={count:0,a:""};
        this.start=this.stopwatch.bind(this);
        // this.resume=this.resume.bind(this);
        // this.reset=this.reset.bind(this);
    }
    stopwatch(status){
      if(status=="start"){
        this.setState({a:setInterval(()=>{
          this.setState((prevstate)=>({count:prevstate.count+1}));},1000)})
        }
    else if(status=="resume"){
         clearInterval(this.state.a);
    }
    else{
         this.setState({count:0});
    }
  }
    
    render(){
      const realtime = this.state.count;
      const hours = Math.floor(realtime/3600);
      const minutes =  Math.floor(realtime % 3600 / 60);
      const seconds =  Math.floor(realtime % 3600 % 60);
       return(<>

      <div className='styling'>{hours}:{minutes}:{seconds}</div>
        <div className='button1'><button className='button1' onClick={() => this.stopwatch("start")}>start</button>
        <button onClick={() => this.stopwatch("resume")}>resume</button>
        <button onClick={() => this.stopwatch("reset")}>reset</button>
        </div>
          </>)
    }
// clickmeCount(){
// this.setState((pre) =>({count:pre.count+1}));

// 
        
// render(){
//   return (<div>
//      <button onClick={this.clickmeCount}>click me</button>
//      <h3>clicked button :{this.state.count}</h3>
//   </div>)
// }
}
export default App;