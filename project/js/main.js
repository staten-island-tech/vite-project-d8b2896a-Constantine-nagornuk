import "../css/style.css";
import cards from "../js/cardsinfo.js";

const DOMselectors = {
    box: document.getElementById("Cards"),
    filterButton: document.getElementById("filterButton"),
    revertButton: document.getElementById("revertButton"),
    choc: document.getElementById("Choclate"),
    chips: document.getElementById("Chips")
    

}

cards.forEach((card) => {
  let x = card.Name
  let y = card.Size
  let z = card.Cost
  let g = card.Picture
  let u = card.Type
  const stuff = `
  <div class="Card">
        <h2>${x}</h2>
        <p>${y}</p>
        <img class="snackimg" src="${g}" alt="">
        <p>type:${u}</p>
        <p>${z}</p>
      </div>`
      DOMselectors.box.insertAdjacentHTML('beforeend', stuff);
})





DOMselectors.filterButton.addEventListener("click", filterBySize);

function filterBySize() {
  const filteredCards = cards.filter(card => card.Size === 'Large');
  DOMselectors.box.innerHTML = '';

  filteredCards.forEach((card) => {
    let x = card.Name;
    let y = card.Size;
    let z = card.Cost;
    let g = card.Picture;
    let u = card.Type;

    const cardHTML = `
      <div class="Card">
        <h2>${x}</h2>
        <p>${y}</p>
        <img class="snackimg" src="${g}" alt="">
        <p>Type: ${u}</p>
        <p>${z}</p>
      </div>`;

    DOMselectors.box.insertAdjacentHTML('beforeend', cardHTML);
  });
}




DOMselectors.choc.addEventListener("click", filterBySize1);

function filterBySize1() {
  const filteredCards1 = cards.filter(card => card.Type === 'Choclate');
  DOMselectors.box.innerHTML = '';

  filteredCards1.forEach((card) => {
    let x = card.Name;
    let y = card.Size;
    let z = card.Cost;
    let g = card.Picture;
    let u = card.Type;

    const cardHTML = `
      <div class="Card">
        <h2>${x}</h2>
        <p>${y}</p>
        <img class="snackimg" src="${g}" alt="">
        <p>Type: ${u}</p>
        <p>${z}</p>
      </div>`;

    DOMselectors.box.insertAdjacentHTML('beforeend', cardHTML);
  });
}



DOMselectors.revertButton.addEventListener("click", revertToOriginal);

function revertToOriginal() {
  DOMselectors.box.innerHTML = '';

  cards.forEach((card) => {
    let x = card.Name
    let y = card.Size
    let z = card.Cost
    let g = card.Picture
    let u = card.Type
    const stuff = `
    <div class="Card">
          <h2>${x}</h2>
          <p>${y}</p>
          <img class="snackimg" src="${g}" alt="">
          <p>type:${u}</p>
          <p>${z}</p>
        </div>`
        DOMselectors.box.insertAdjacentHTML('beforeend', stuff);
  })
}



DOMselectors.chips.addEventListener("click", chips2);

function chips2(){
    const chipsfilter = cards.filter(card => card.Type === 'Chips');
    DOMselectors.box.innerHTML = '';
    chipsfilter.forEach((card) => {
        let x = card.Name
        let y = card.Size
        let z = card.Cost
        let g = card.Picture
        let u = card.Type
        const stuff = `
        <div class="Card">
              <h2>${x}</h2>
              <p>${y}</p>
              <img class="snackimg" src="${g}" alt="">
              <p>type:${u}</p>
              <p>${z}</p>
            </div>`
            DOMselectors.box.insertAdjacentHTML('beforeend', stuff);
      })
    }
