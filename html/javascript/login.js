console.log("Welcome to login page")
//console.warn("This is just a Practise Purpose login page")
const a = prompt("Please Enter your name:")
// if (a=="salman"){
//     alert(` Hello ${a} you are the special member of our admin`)
// }
// if (a=="aneeza"){
//     alert(` hello ${a} you are the special member of our admin`)
// }
// else{
//     b = confirm("Do you really want to enter the page")
//     console.log(b)
//     if (b="false"){
//         b = document.history
//         history.go(-1)
        
//     }
//     else{
//         alert(`${a} Hope you enjoy it`)
//     }
    
// }
function blank(){
    // let n = document.getElementsByClassName("back");
    // n= document.removeChild(document.getElementsByClassName("can"));
    alert(`This was not expected from you ${a} \nJust go away from my page. You Fool😑`);
    let l = document.history;
    // history.go(-1);
    // console.log(l)
}
function happy(){
    alert(`Thank you soo much ${a} 😊  `);
    let l = document.history;
    // history.go(-1);
    // console.log(l)
}
function clearError(){
    error = document.getElementsByClassName('formerror');
    for(let item of error)
    {
        item.innerHtml = "";
    }
}





function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error; 
}

function validateForm(){
    var returnval = true;
    clearError();

    var name = document.forms['myform']["name"].value;
    if(name.length<5){
        seterror("name","*Length of name is too short");
        returnval = false;
    }
    if(name.length == 0){
        seterror("name","*length of name cannot be zero!");
        returnval = false;
    }
}