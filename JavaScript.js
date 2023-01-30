//SUBMIT FORM FUNCTION TO DISPLAY AN ALERT MESSAGE AND DELETE THE FIELDS WHEN THE INVIA BUTTON IS CLICKED

function Erase() {
    var name = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var email = document.getElementById("subject").value;
    var fields = [name,lname,email,subject];
    var isFilled = true;

    for(var i=0; i<fields.length; i++){
        if(fields[i] === ""){
            isFilled = false;
            break;
        }
    }
    if(isFilled){
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";

        swal({
            title: "Grazie!",
            text: "Il tuo messaggio e' stato inviato correttamente",
            icon: "success",
            button: "ok",
        });
    } else {
        swal({
            title: "🤖",
            text: "Inserisci tutti i dati prima di inviarci il messaggio",
            icon: "error",
            button: "ok",
        });
    }
}


//OPENS THE GRAZIE PAGE IN A NEW TAB

document.getElementById("submit").addEventListener("click", function(){
    window.open("grazie.html", "_blank");
});