var music = "seunrere.mp3"
var song = new Audio(music)

function playMusic() {
    song.play()
}

function pauseMusic() {
    song.pause()
}

// Code block to ensure new price is being updated as new items are being added
function arith() {
    var priceOfItem = Number(document.getElementById("price").value)
    var newMoney = money - priceOfItem
    showMoney.innerHTML = "Available Money: ₦" + newMoney
    money = newMoney
}

// A global variable to set money available
var money = 10000
showMoney.innerHTML = "Available Money: ₦" + money

// This displays the current date
var daty = new Date().toLocaleDateString()
showDate.innerHTML = "Today's Date: "  + daty
showDateModal.innerHTML = "Today's Date: "  + daty

// This ensures the inputs only show after clicking a button and that button disappears after
function showInputs() {
    mainInputs.style.display = "block"
    withdrawMoney.style.display = "none"
}

// This handles form submission
function addBudget() {
    if (item.value === "" || price.value === "") {
        emptyField.style.display = "block"
    } else {
        emptyField.style.display = "none"
        if (Number(price.value) > money) {
            overSpend.style.display = "block"
        } else {
            overSpend.style.display = "none"
            showBudget.innerHTML += "<p class='my-2'>" + item.value + ' - ₦' + price.value + "</p>"
            arith()
            item.value = ""
            price.value = ""
        }
    }
}