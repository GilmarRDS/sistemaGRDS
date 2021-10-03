function habilitarList(){
    document.getElementById('frmReInIn').elements["insInf"].disabled = false;
}

function dasabilitarList(){
    let instInf = document.getElementById('frmReInIn').elements["insInf"];

    if(instInf.disabled == false){
        instInf.disabled = true;
        instInf[0].selected = true;

    }
}