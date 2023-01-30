                //COPIAR NUMERO

document.querySelector("#lista-1").onclick= async() =>{
    try {
        await navigator.clipboard.writeText("810-555-111-000")
        swal({
            title: "Texto copiado!",
            icon: "success"
        })
    } catch (error) {
        alert("error")
    }
}


            //  VENTANA DE E-MAIL
const abrir = ()=>{
    document.getElementById("windown").style.display="block"
 }
 const cerrar = ()=>{
    document.getElementById("windown").style.display="none"
 }

            //Ventana de Ubicacion
const open = ()=>{
    document.getElementById("vent").style.display="block"
 }
 const close = ()=>{
    document.getElementById("vent").style.display="none"
 }


            //Redireccion boton whatsapp

const redireccion = ()=>{
    location.href = "https://wa.me/542984529481";
}

            //redireccion boton linkedin 
const redireccionLinkedin = ()=>{
    location.href = "https://ar.linkedin.com/";
}



 
 

