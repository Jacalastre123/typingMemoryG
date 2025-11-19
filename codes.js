document.addEventListener("input", () => {
    codeValue = codable.value
    if (codeValue === "Alert") {
        window.alert("Alerting!")
    }

    if (codeValue === "Invert") {
        document.body.style.backgroundColor = "white";
        document.querySelectorAll("div").forEach(div => { div.style.backgroundColor = "grey"})
        document.querySelectorAll("h1").forEach(div => { div.style.color = "black"})
    }

    if (codeValue === "UnHide") {
        codable.style.backgroundColor = "white"
        codable.style.color = "black"
    }
})