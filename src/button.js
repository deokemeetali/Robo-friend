function button(){
const submitbutton = ['submit1','submit2','submit3'];
return submitbutton.map(function(clickme){
return (<button>{clickme}</button>)
});
}
export default button;