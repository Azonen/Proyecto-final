const apiRick = async(pagina) => {
  const searchName = document.getElementById("name")
  searchName.value = ""
  let url ="https://rickandmortyapi.com/api/character/?page="+pagina
  const api = await fetch(url)
  const data =await api.json()
  console.log(data)
  const divRes = document.getElementById("resultado")
  divRes.innerHTML = ""
  data.results.map((item)=>{
    divItem = document.createElement("div")
    divItem.innerHTML =
    `
      <div>
     
        <ul class="list">
        <img src="${item.image}"
        <li><p>Name: ${item.name}</p></li>
        <li><p>Species: ${item.species}</p></li>
        <li><p>Status: ${item.status}</p></li>
        </ul>
      </div>
    `
    divRes.appendChild(divItem)
  })
}

apiRick()

const getOne = async() => {
  const select = document.getElementById("select")
  select.value = 1
  const divRes = await document.getElementById("resultado")
  divRes.innerHTML = ""
  const searchName = document.getElementById("name").value
  let url = `https://rickandmortyapi.com/api/character/?name=${searchName}`
  const api = await fetch(url)
  const data = await api.json()
  console.log(data)
  data.results.map(item=>{
    divItem = document.createElement("div")
    divItem.innerHTML =
    `
    <div>
        <ul class="list">
        <img src="${item.image}"
        <li><p>Name: ${item.name}</p></li>
        <li><p>Species: ${item.species}</p></li>
        <li><p>Status: ${item.status}</p></li>
        </ul>
      </div>
    `
    divRes.appendChild(divItem)
 
  })
}

const home = () => {
  apiRick()
  const select = document.getElementById("select")
  select.value = 1
}


