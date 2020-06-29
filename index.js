const body = document.querySelector("body");

function submitData(name, email) {
  let formData = {
    name: name,
    email: email,
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configObj)
    .then((resp) => resp.json())
    .then((object) => appendId(object))
    .catch((error) => appendError(error));
}

function appendId(object) {
  body.innerHTML += `
    <p>${object.id}</p>
  `;
}

function appendError(error) {
  body.innerHTML += `
    <p>${error.message}</p>
  `;
}
