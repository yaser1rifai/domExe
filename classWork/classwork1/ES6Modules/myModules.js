function addTextToBody(text){
    const div=document.createElement("div");
    div.TextContent=text; 
}
function sayHello(name){
    console.log(`hello ${name}`)
}
//export{addTextToBody,sayHello};
//export default sayHello;

addTextToBody(" modules are cool");
sayHello("Adam");