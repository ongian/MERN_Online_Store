const products = [
    {
        id: 123,
        name: "Acer Extensa 15",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: 'laptops',
        specs: [
            {Brand: 'Acer'},
            {RAM: '4GB'},
            {OS: 'Windows 10 Home'},
            {Processor: 'Intel Celeron'},
            {Storage: '256GB SSD'},
            {StorageType: 'SSD'}
        ],
        images: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'],
        imagePreview: 'preview.png',
        ratings: 4.4,
        numOfReviews: 35,
        stocks: 14,
        productSoldByWeek: 3,
        listPrice: 12999.99,
        price: 10999.99,
        variants: null
    },
    {
        id: 234,
        name: "HP Desktop Computer Original Brand New Intel Core i3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: 'desktops',
        specs: [
            {Brand: 'HP'},
            {RAM: '16GB'},
            {OS: 'Windows 10 Home'},
            {Processor: 'Intel Core i3'},
            {Storage: '512GB SSD'},
            {StorageType: 'SSD'}
        ],
        images: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'],
        imagePreview: 'preview.png',
        ratings: 4.1,
        numOfReviews: 35,
        stocks: 21,
        productSoldByWeek: 5,
        listPrice: 12999.99,
        price: 10999.99,
        variants: null
    },
    {
        id: 246,
        name: "Samsung Galaxy A52s",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: 'mobiles',
        specs: [
            {Brand: 'Samsung'},
            {RAM: '12GB'},
            {ROM: '512GB'},
            {Camera: '12MP Front / 48MP Back'},
            {Battery: '5000mAh Li-ion battery'},
            {Processor: 'MediaTek 6889'}
        ],
        images: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'],
        imagePreview: 'preview.png',
        ratings: 4.8,
        numOfReviews: 35,
        stocks: 14,
        productSoldByWeek: 3,
        listPrice: 12999.99,
        price: 10999.99,
        variants: [{color: 'black', stock: 12}, {color: 'blue', stock: 10}, {color: 'pink', stock: 1}]
    },
    {
        id: 247,
        name: "Samsung Galaxy A52s 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: 'mobiles',
        specs: [
            {Brand: 'Samsung'},
            {RAM: '12GB'},
            {ROM: '512GB'},
            {Camera: '12MP Front / 48MP Back'},
            {Battery: '5000mAh Li-ion battery'},
            {Processor: 'MediaTek 6889'}
        ],
        images: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'],
        imagePreview: 'preview.png',
        ratings: 4.2,
        numOfReviews: 30,
        stocks: 7,
        productSoldByWeek: 21,
        listPrice: 12999.99,
        price: 10999.99,
        variants: [{color: 'black', stock: 12}, {color: 'blue', stock: 10}, {color: 'pink', stock: 1}]
    }
]

export default products;