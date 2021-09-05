console.log('connected')
let tbody = document.querySelector('#tbody')
let table = document.querySelector('#table')

const getData = async () => {
  try {
    const response = await fetch(`/.netlify/functions/hours`)
    const data = await response.json()

    data.map((item) => {
      tbody.innerHTML += `<tr><td>Every ${item.i} hour</td><td>${item.data}</td></tr>`
    })
    table.appendChild(tbody)
  } catch (error) {
    // console.log(error)
  }
}

getData()
