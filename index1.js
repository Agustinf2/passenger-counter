let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
};

function save() {
    let countSt = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "

    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countSt
    countEl.textContent = 0
    // Declaro el count en cero de nuevo porque el javascript lleva la cuenta
    count = 0
    // NB: Make sure to not delete the existing content of the paragraph
};
