function toggle(element){
    var content = element.innerHTML;

    var frame = document.getElementById(element.id + "-frame");
    var description = document.getElementById(element.id + "-description");
    var reward = document.getElementById(element.id + "-reward");
    
    if(content=="[-]"){
        element.innerHTML = "[+]";
        content = element.innerHTML;
        frame.style.height = "30px";
        description.style.display = "none";
        reward.style.display = "none";
    }
    else{
        element.innerHTML = "[-]";
        content = element.innerHTML;
        frame.style.height = "90px";
        description.style.display = "block";
        reward.style.display = "block";
    }
}