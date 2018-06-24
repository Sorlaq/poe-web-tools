function passiveCount(){
    var fromLevel = parseInt(document.getElementById("level").value)-1;
    var fromBandits;
    var ascPoints = 0;

    if(document.getElementById("bandits").value == "none"){
        fromBandits = 2;
    }
    else{
        fromBandits = 0;
    }

    var nLab = document.getElementById("nLab").value;
    var cLab = document.getElementById("cLab").value;
    var mLab = document.getElementById("mLab").value;
    var uLab = document.getElementById("uLab").value;

    if(nLab){
        ascPoints += 2;
    }
    if(cLab){
        ascPoints += 2;
    }
    if(mLab){
        ascPoints += 2;
    }
    if(uLab){
        ascPoints += 2;
    }

    document.getElementById("passiveTotal").innerHTML = fromLevel+fromBandits;
    document.getElementById("fromLevel").innerHTML = fromLevel;
    document.getElementById("fromBandits").innerHTML = fromBandits;
    document.getElementById("ascendancyTotal").innerHTML = ascPoints;
}