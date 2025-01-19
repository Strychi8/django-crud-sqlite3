(function(){

    const btnEliminacion = document.querySelectorAll(".btnEliminacion")

    btnEliminacion.forEach(btn => {
          btn.addEventListener('click', (evento) => {
              const confirmacion = confirm('¿Esta seguro de eliminar el curso?')
              if(!confirmacion){
                 evento.preventDefault()
              }
          })
    })
 
})()

