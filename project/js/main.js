import "../css/style.css";
import"../js/cardsinfo"

const DOMselectors = {
    box: document.getElementById("Cards")
}


console.log("test?")
 

cards.forEach((card) => {
    let x = cards.Name.value
    let y = cards.Picture.value
    let z = cards.Cost.value
    if (x &&  y && z) {
        const cardHTML = `
        <div class="card">
          <h2 class="Name">${x}</h2>
          <img class="Image" src="${y}" alt="${x}">
          <p id="Cost">${z}</p>
          <button class="Delete">Delete</button>
        </div>`
          console.log(card)
        DOMselectors.box.insertAdjacentElement('beforeend' , cardHTML)

    }

    


}) 

