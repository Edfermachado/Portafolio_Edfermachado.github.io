function ShowHide(){
    var p = document.getElementsByClassName("Gato")[0];
    var perfil = document.getElementById("Perfil");
    var sobre = document.getElementById("SobreMi");
    perfil.style.display = "block";
    

    if(sobre.style.visibility == "hidden")
    {
        sobre.style.visibility = "visible";
        perfil.style.visibility = "hidden";
    }else
    {
        sobre.style.visibility = "hidden";
        perfil.style.visibility = "visible";
    }
}

function Copiar(){
    var textarea = document.getElementById("mail");
    textarea.select();
    document.execCommand("copy");
    alert("Copiado en portapales")
}