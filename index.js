// Add your code here
function submitData(name, email) {
    let formData = {
        name: `${name}`,
        email: `${email}`
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
    let theBody = document.querySelector("body");
    let newLine = document.createElement("p");
    newLine.innerHTML = `${object.id}`;
    theBody.append(newLine)
    })
    .catch(function(error) {
    let theBody = document.querySelector("body");
    let newLine = document.createElement("p");
    newLine.innerHTML = `${error.message}`;
    theBody.append(newLine)
    });
}

// function addThis(json) {
    
// } 


// fetch("http://localhost:3000/users", configObj)
//     .then(resp => resp.json())
//     .then(json => addThis(json));