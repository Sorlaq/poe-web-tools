function questDisplay(){
    var level;

    if(isNaN(document.getElementById("level").value)){
        level = 0;
    }
    else{
        level = document.getElementById("level").value;
    }

    if(level<5){
        document.getElementById("quest1-frame").style.display = "none";
    }
    else{
        document.getElementById("quest1-frame").style.display = "block";
    }

    if(level<12){
        document.getElementById("quest2-frame").style.display = "none";
    }
    else{
        document.getElementById("quest2-frame").style.display = "block";
    }
    
    if(level<17){
        document.getElementById("quest3-frame").style.display = "none";
    }
    else{
        document.getElementById("quest3-frame").style.display = "block";
    }

    if(level<30){
        document.getElementById("quest4-frame").style.display = "none";
    }
    else{
        document.getElementById("quest4-frame").style.display = "block";
    }
}