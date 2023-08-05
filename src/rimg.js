function Rimg(props){
      return props.image1.map((elem)=>{
         return (<img src="https://robohash.org/`${elem.id}`1?200x200"></img>);
      })
// return (<>
//       {/* <img src="https://robohash.org/`1?200x200" alt="robots">c
//       <img src="https://robohash.org/2?200x200" alt="robots"></img>
//       <img src="https://robohash.org/3?200x200" alt="robots"></img>
//       <img src="https://robohash.org/4?200x200" alt="robots"></img>
//       <img src="https://robohash.org/5?200x200" alt="robots"></img>
//       <img src="https://robohash.org/6?200x200" alt="robots"></img>
//       <img src="https://robohash.org/7?200x200" alt="robots"></img>
//       <img src="https://robohash.org/8?200x200" alt="robots"></img>
//       <img src="https://robohash.org/9?200x200" alt="robots"></img>
//       <img src="https://robohash.org/10?200x200" alt="robots"></img> */}
//       </>)
}
export default Rimg;