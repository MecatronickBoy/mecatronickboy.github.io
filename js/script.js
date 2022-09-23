document.addEventListener("DOMContentLoaded", () => {
    let json_area = document.getElementById("json-area")
    fetch("./data/gustavo.json")
    .then(response => response.json())
    .then((json_content) => {
        json_area.innerHTML = json_content
    })
})