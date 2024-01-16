let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');

let listProducts = [
    {
        id: 1,
        name: 'Mercedes Benz A35 2.0 AMG 4matic',
        price: 279000.00,
        quantity: 4,
        image: 'AMG4MATIC.jpeg',
        nature: {
            color: ['red'],
            year: ['2019'],
            type: 'Mercedes'
        }
    },
    {
        id: 2,
        name: 'LAMBORGHINI URUS V8 AUTO',
        price: 1804045.00,
        quantiy: 3,
        image: 'LamboUrus.jpeg',
        nature: {
            color: ['Yellow'],
            year: ['2019'],
            type: 'Lamborghini'
        }
    },
    {
        id: 3,
        name: 'Porsche 911 Carrera S 3.0',
        price: 879000.00,
        quantiy: 6,
        image: 'porsche911.jpeg',
        nature: {
            color: ['white'],
            year: ['2020'],
            type: 'Porsche'
        }
    },
    {
        id: 4,
        name: 'PORSCHE CARRERA 911 3.0 (A) 4S ',
        price: 900000.00,
        quantiy: 10,
        image: 'porsche9114s.jpeg',
        nature: {
            color: ['white'],
            year: ['2019'],
            type: 'Porsche'
        }
    },
    {
        id: 5,
        name: 'PORSCHE PANAMERA 4S 4.8 (USED)',
        price: 138000.00,
        quantiy: 30,
        image: 'porschePanamera.jpeg',
        nature: {
            color: ['maroon'],
            year: ['2010', '2011'],
            type: 'Porsche'
        }
    },
    {
        id: 6,
        name: 'Mercedes Benz C63 AMG Sports Coupe',
        price: 350000.00,
        quantiy: 11,
        image: 'MercC63.jpeg',
        nature: {
            color: ['black'],
            year: ['2011'],
            type: 'Mercedes'
        }
    },
    {
        id: 7,
        name: 'Aston Martin Vantage V8 Coupe',
        price: 1600000.00,
        quantiy: 11,
        image: 'car1.jpg',
        nature: {
            color: ['white'],
            year: ['2011'],
            type: 'AstonMartin'
        }
    },
    {
        id: 8,
        name: 'Porsche 718 Cayman GT4 RS',
        price: 1550000.00,
        quantiy: 11,
        image: 'car2.jpg',
        nature: {
            color: ['white'],
            year: ['2011'],
            type: 'Porsche'
        }
    },
    {
        id: 9,
        name: 'Mercedes Benz CLE Coupe',
        price: 570000.00,
        quantiy: 11,
        image: 'car5.jpg',
        nature: {
            color: ['orange'],
            year: ['2011'],
            type: 'Mercedes'
        }
    },
    {
        id: 10,
        name: 'Mercedes C Class AMG C 43 4MATIC Premium Plus Coupe',
        price: 203801.00,
        quantiy: 11,
        image: 'mercamg.jpg',
        nature: {
            color: ['white'],
            year: ['2011'],
            type: 'Mercedes'
        }
    },
    {
        id: 11,
        name: 'Aston Martin DB12',
        price: 1152607.00,
        quantiy: 11,
        image: 'astonmartin1.jpg',
        nature: {
            color: ['red'],
            year: ['2024'],
            type: 'AstonMartin'
        }
    },
    {
        id: 12,
        name: 'Aston Martin Vantage',
        price: 682896.00,
        quantiy: 11,
        image: 'astonmartin2.jpg',
        nature: {
            color: ['grey'],
            year: ['2023'],
            type: 'AstonMartin'
        }
    },
    {
        id: 13,
        name: 'Aston Martin DB9 GT',
        price: 550000.00,
        quantiy: 11,
        image: 'astonmartin3.jpg',
        nature: {
            color: ['red'],
            year: ['2016'],
            type: 'AstonMartin'
        }
    },

    {
        id: 14,
        name: 'Lamborghini Aventador',
        price: 2357162.00,
        quantiy: 11,
        image: 'lambo2.jpg',
        nature: {
            color: ['grey'],
            year: ['2022'],
            type: 'Lamborghini'
        }
    },
    {
        id: 15,
        name: 'Lamborghini Sian',
        price: 13938000.00,
        quantiy: 11,
        image: 'lambo3.jpg',
        nature: {
            color: ['olive'],
            year: ['2021'],
            type: 'Lamborghini'
        }
    },


];

let productFilter = listProducts;
showProduct(productFilter);

filter.addEventListener('submit', function (event) {
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // check category
        if (valueFilter.category.value !== '') {
            if (item.nature.type !== valueFilter.category.value) {
                return false;
            }
        }
        // check color
        if (valueFilter.color.value !== '') {
            if (!item.nature.color.includes(valueFilter.color.value)) {
                return false;
            }
        }
        // check year
        if (valueFilter.year.value !== '') {
            if (!item.nature.year.includes(valueFilter.year.value)) {
                return false;
            }
        }
        return true;
    });
    productFilter.sort((a, b) => {
        return a.nature.year[0] - b.nature.year[0];
    });
    showProduct(productFilter);
});

function showProduct(productFilter) {
    count.innerText = productFilter.length;
    list.innerHTML = '';

    if (productFilter.length === 0) {
        let noCarFoundMessage = document.createElement('div');
        noCarFoundMessage.innerText = 'No cars found.';
        list.appendChild(noCarFoundMessage);
    } else {
        productFilter.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');

            // create image
            let newImage = new Image();
            newImage.src = item.image;
            newItem.appendChild(newImage);
            // create name product
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);
            // create price
            let newPrice = document.createElement('div');
            newPrice.classList.add('price');
            newPrice.innerText = 'Rm' + item.price.toLocaleString();
            newItem.appendChild(newPrice);

            list.appendChild(newItem);
        });
    }
}
