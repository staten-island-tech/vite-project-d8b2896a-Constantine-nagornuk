

const cards = [
{
Name: 'Dorritos',
Size:"Large",
Cost: '10$',
Picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GY0239J8-3b3UUV5FwWwydJSCti90Z9izgOhp3JJgjZ-c-UVZNeoKrtYYehroGltrNw&usqp=CAU',
Type: 'Chips'
},
{
    Name: 'Lays- Sour Cream and onionos',
    Size:"Regular size",
    Cost: '10$',
    Picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GY0239J8-3b3UUV5FwWwydJSCti90Z9izgOhp3JJgjZ-c-UVZNeoKrtYYehroGltrNw&usqp=CAU',
    Type: 'Chips'
    },
    {
        Name: 'Lays Barbecue',
        Size:"Regular size",
        Cost: '12$',
        Picture: 'https://target.scene7.com/is/image/Target/GUEST_d890d5f0-a8eb-4a4a-8634-d5da9baed871?wid=488&hei=488&fmt=pjpeg',
        Type: 'Chips'
        
        },
        {
            Name: 'Hershey Chocalte',
            Size:"Regular size",
            Cost: '8$',
            Picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDXRnGIsbaSAC1sRjmIFgYj0w0J41cMB7BazeiGjO0SbCYspCkQesjD0ubC4GFQAzZ9Q&usqp=CAU',
            Type: 'Choclate'
            
            },
          {
                Name: 'Hershey Chocalte-Cookie and cream',
                Size:"Regular size",
                Cost: '3$',
                Picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiaUuEMGwVgTrBQxTSGEJdLg23ok3qB7heqg&usqp=CAU',
                Type: 'Choclate'
                
                },
]





 

cards.forEach((card) => {
    let x = cards.Name.value
    let y = cards.Picture.value
    let z = cards.Cost.value
    const cardHTML = `
        <div class="card">
          <h2 class="Name">${x}</h2>
          <img class="Image" src="${y}" alt="${x}">
          <p id="Cost">${z}</p>
          <button class="Delete">Delete</button>
        </div>
`

    

}) 