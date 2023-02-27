                //COPIAR NUMERO

document.querySelector("#lista-1").onclick= async() =>{
    try {
        await navigator.clipboard.writeText("810-555-111-000")
        swal({
            title: "Texto copiado!",
            icon: "success"
        })
    } catch (error) {
        swal({
            title: "Error al copiar!",
            icon: "error"
        })
    }
}


            //  VENTANA DE E-MAIL


const btnabrirPopup = document.getElementById("lista-2");
const ventanaEmail = document.getElementById("ventana-email");
const popupEmail = document.getElementById("popup-email");
const cerrarVentanaEmail = document.getElementById("cerrar-ventana-email");


btnabrirPopup.addEventListener("click", function () {
    ventanaEmail.classList.add("active")
    popupEmail.classList.add("active")
})

cerrarVentanaEmail.addEventListener("click", ()=>{
    ventanaEmail.classList.remove("active")
    popupEmail.classList.remove("active")
})


            //Ventana de Ubicacion

const abrirVentanaMap = document.getElementById("lista-5");
const ventanaMap = document.getElementById("ventana-map");
const popupMap = document.getElementById("popup-map");
const cerrarVentanaMap = document.getElementById("cerrar-ventana-map")

abrirVentanaMap.addEventListener("click", ()=>{
    ventanaMap.classList.add("active")
    popupMap.classList.add("active")
})

cerrarVentanaMap.addEventListener("click", ()=>{
    ventanaMap.classList.remove("active")
    ventanaMap.classList.remove("active")
})


            //Redireccion boton whatsapp

// const redireccion = ()=>{
//     location.href = "https://wa.me/542984529481";
// }

            //redireccion boton linkedin 
// const redireccionLinkedin = ()=>{
//     location.href = "https://ar.linkedin.com/";
// }



