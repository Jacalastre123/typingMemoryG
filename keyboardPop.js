document.addEventListener("keydown", (event) => {
    const keys = document.getElementById("keys")
    keys.classList = "keys"
    keys.innerHTML = event.key 

    
})