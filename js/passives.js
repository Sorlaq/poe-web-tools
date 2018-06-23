function passiveCount(){
    var fromLevel = parseInt(document.getElementById("level").value)-1;
    var fromBandits;

    if(document.getElementById("bandits").value == "none"){
        fromBandits = 2;
    }
    else{
        fromBandits = 0;
    }

    document.getElementById("passiveTotal").innerHTML = fromLevel+fromBandits;
    document.getElementById("fromLevel").innerHTML = fromLevel;
    document.getElementById("fromBandits").innerHTML = fromBandits;
}