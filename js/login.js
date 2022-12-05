function login(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if (user == "alopez" && pass == "123456"){

        location.href = "admin/dashboard.html"
    }
}