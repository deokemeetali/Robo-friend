function List(props){
    return props.myList.map((elem)=>{
        return(<> <div>
            <h2>ROBOT-{elem.id}</h2>
            <img src={`https://robohash.org/${elem.id}?200x200`} alt="robots"></img>
        <li>{elem.name}</li>
        
        <li>{elem.email}</li></div>
    </>) ;
    })
}
export default List;