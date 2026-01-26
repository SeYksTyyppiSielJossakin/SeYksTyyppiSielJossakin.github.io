
let inventory = JSON.parse(localStorage.getItem("inventory")) || {
    coins: 0,
    fish: 0,
    junk: 0
}
// Update numbers on screen
function updateUI() {
    document.getElementById("coins").textContent = inventory.coins;
    document.getElementById("fish").textContent = inventory.fish;
    document.getElementById("junk").textContent = inventory.junk;
    document.getElementById("coins").textContent = inventory.coins;
    document.getElementById("fish").textContent = inventory.fish;
    document.getElementById("junk").textContent = inventory.junk;
}

// Catch an item
function catchItem(item) {
    
        inventory[item]++;
        localStorage.setItem("inventory", JSON.stringify(inventory));
        updateUI();
    

}

function IcatchItem(item) {
    if (inventory[item] > 0) {

        inventory[item]--;
        localStorage.setItem("inventory", JSON.stringify(inventory));
        updateUI();
    }

}

// Reset everything
function resetInventory() {
    inventory = { coins: 0, fish: 0, junk: 0 };
    localStorage.setItem("inventory", JSON.stringify(inventory));
    updateUI();
}

// Load UI when page opens
updateUI();