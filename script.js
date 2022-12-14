function TotalAPagar (CantidadTickets,categorias){
    const valorTicket = 200;
    let total = CantidadTickets * valorTicket;

    switch (categorias){
        case "Estudiante":
          total = total - (total*80/100)
          break;
        case "Trainee":
          total = total - (total*50/100)
          break;
        case "Junior":
          total = total - (total*15/100)
          break;
    }
    return total

}
let boton = document.getElementById ("livealertbtn")

let formulario = document.getElementById("formulariotickets")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    
})

boton.addEventListener("click", ()=>{
     let cantidad = document.getElementById("cantidad-entradas").value
     let categorias = document.getElementById("categorias").value

let valor = TotalAPagar(cantidad,categorias)

let  divresumen = document.getElementById("liveAlertPlaceholder")
divresumen.textcontent = "Total a pagar: $"+ valor
}
)
