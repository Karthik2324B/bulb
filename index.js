
function light(show){
    let pic;
    if(show==1){
        pic="bulbon.jpg"
    }
    else{
        pic="bulboff.jpg"
    }
    document.getElementById("bulb").src=pic;
}