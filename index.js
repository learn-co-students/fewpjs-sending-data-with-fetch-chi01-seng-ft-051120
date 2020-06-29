const body = document.querySelector("body")
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(resp => resp.json())
  .then(userData => {
    // const pTag = document.createElement("p")
    // pTag.innerHTML = userData.id
    // body.appendChild(pTag)
    const pTag = `<p>${userData.id}</p>`
    body.innerHTML = pTag
    })
  .catch((error) => {
    const errorTag = `<p>${error}</p>` 
    body.innerHTML = errorTag
  })
  
  }