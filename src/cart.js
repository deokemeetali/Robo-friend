function Cart(props){
     return props.myCartList.map((elem)=>{
     return (<><li>{elem.name}</li>
     <li>{elem.image}</li></>);
     })
}
export default Cart;