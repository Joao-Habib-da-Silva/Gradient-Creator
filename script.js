function clickhere() {
    var value = window.document.getElementById("first").value.toLowerCase()
    var value2 = window.document.getElementById("second").value.toLowerCase()
    var value3 = window.document.getElementById("third").value.toLowerCase()
    var value4 = window.document.getElementById("forth").value.toLowerCase()
    var box = window.document.getElementById("square")
    var minib = window.document.getElementById("minibox")
    var minib2 = window.document.getElementById("minibox2")
    var minib3 = window.document.getElementById("minibox3")

    if(value === "" || value2 === "" || value3 === "") {
        window.alert("Cuidado! O mini serviço não irá te ajudar se você não conseguir colocar algo escrito!")
    }
     if (value4 === "yes") {
        box.style.background = `linear-gradient(0.25turn, #${value}, #${value2}, #${value3})`
        minib.style.backgroundColor = `#${value}`
        minib2.style.backgroundColor = `#${value2}`
        minib3.style.backgroundColor = `#${value3}`

    }
    else {
        box.style.background = `linear-gradient(0.25turn, ${value}, ${value2}, ${value3})`
        minib.style.backgroundColor = `${value}`
        minib2.style.backgroundColor = `${value2}`
        minib3.style.backgroundColor = `${value3}`
    }
}
window.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        clickhere()
    }
})