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