document.addEventListener("DOMContentLoaded", function() {
  updateItems()
})
var pcss = document.getElementById("pcss")
function updateItems () {
  fetch("http://localhost:2000/api/all").then((res) => {
    console.log(res)
    return res.json()
  }).then((data) => {
    let items = JSON.parse(data)
    items.forEach(item => {
      pcss.innerHTML += `
      <div class="item-container">
      Equipamento: <span>${item.type}</span><br>
      Patrimonio: <span>${item.patrimonio}</span><br>
      Processador: <span>${item.processador}</span><br>
      Memória: <span>${item.memoria}</span><br>
      Disco: <span>${item.disco}</span><br>
      Placa de Vídeo: <span>${item.pv}</span><br>
      Setor: <span>${item.setor}</span><br>
  </div>`
    });
  })
}





const modal = document.querySelector('.modal-container')

function openModal() {
    modal.classList.add('active')
    modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
      }
    }  
}


function createItem () {
  let type = document.getElementById("type").value
  let patrimonio = document.getElementById("patrimonio").value
  let processador = document.getElementById("processador").value
  let memoria = document.getElementById("memoria").value
  let disco = document.getElementById("disco").value
  let pv = document.getElementById("pv").value
  let setor = document.getElementById("setor").value


  let pcs = {type, patrimonio, processador, memoria, disco, pv, setor}

  const options = {
    method:"POST", 
    headers: new Headers ({'content-type' : 'application/json'}),
    body: JSON.stringify(pcs)
}

  fetch("http://localhost:2000/api/new", options).then((res) => {
    pcss.innerHTML = ""
    updateItems()
    modal.classList.remove('active')
    document.getElementById("patrimonio").value = ""
  } 
  )
}
