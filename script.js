const BASE_URL = "https://api.agify.io/";

async function fetchData() {
    const button = document.getElementById("button");
    button.addEventListener("click", async (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const response = await fetch(`${BASE_URL}?name=${name}`);
        const data = await response.json();
        console.log(data);
        const resultElement = document.querySelector("p");
        resultElement.textContent = data.name + " is " + data.age + " years old";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});