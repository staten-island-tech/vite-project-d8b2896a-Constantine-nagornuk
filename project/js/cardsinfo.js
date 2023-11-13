

const cards = [
{
Name: 'Dorritos',
Size:"Family Size",
Cost: '10$',
Picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GY0239J8-3b3UUV5FwWwydJSCti90Z9izgOhp3JJgjZ-c-UVZNeoKrtYYehroGltrNw&usqp=CAU'
},

]


const cardHTML = `
        <div class="card">
          <h2 class="Lego#">${}</h2>
          <img class="Image" src="${}" alt="${}">
          <p id="number_of_set">${}</p>
          <button class="Delete">Delete</button>
        </div>

cards.forEach((card) => {

})