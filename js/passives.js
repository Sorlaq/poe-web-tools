function passiveCount(){
    var fromLevel;

    if(isNaN(parseInt(document.getElementById("level").value))){
        fromLevel = 0;
    }
    else{
        fromLevel = parseInt(document.getElementById("level").value)-1;
    }

    var fromQuests = 0;

    if(fromLevel=>5){
        fromQuests += 1;
    }

    if(fromLevel=>12){
        fromQuests += 1;
    }

    if(fromLevel=>17){
        fromQuests += 1;
    }

    if(fromLevel=>30){
        fromQuests += 1;
    }

    var fromBandits;
    var ascPoints = 0;

    if(document.getElementById("bandits").value == "none"){
        fromBandits = 2;
    }
    else{
        fromBandits = 0;
    }

    var nLab = document.getElementById("nLab");
    var cLab = document.getElementById("cLab");
    var mLab = document.getElementById("mLab");
    var uLab = document.getElementById("uLab");

    if(nLab.checked){
        ascPoints += 2;
    }
    if(cLab.checked){
        ascPoints += 2;
    }
    if(mLab.checked){
        ascPoints += 2;
    }
    if(uLab.checked){
        ascPoints += 2;
    }

    var totalPassives = fromLevel + fromBandits + fromQuests;

    document.getElementById("passiveTotal").innerHTML = totalPassives;
    document.getElementById("fromLevel").innerHTML = fromLevel;
    document.getElementById("fromBandits").innerHTML = fromBandits;
    document.getElementById("fromQuests").innerHTML = fromQuests;
    document.getElementById("ascendancyTotal").innerHTML = ascPoints;
}

