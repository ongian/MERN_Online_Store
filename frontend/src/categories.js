const categories = [
    {
        category: 'Laptops',
        image: 'laptop.png',
        brands: ['Lenovo', 'Acer', 'HP'],
        availableSpecs: [
            {RAM: ['2GB', '4GB', '8GB']},
            {OS: ['Windows 11', 'Windows 10']},
            {Size: ['12"','13"','14"','15"','16"']},
            {StorageType: ['SSD', 'HDD']},
            {StorageCapacity: ['256 GB', '500 GB', '1 TB'] }
        ]
    },
    {
        category: 'Mobile',
        image: 'mobile.png',
        brands: ['Oppo', 'Samsung', 'iPhone'],
        availableSpecs: [
            {RAM: ['2GB', '4GB', '8GB']},
            {Processor: ['Meditatek', 'Snapdragon']},
            {StorageCapacity: ['4 GB','8 GB','16 GB','32 GB'] },
            {Camera: ['12 MP', '16 MP', '32 MP']}
        ]
    },
    {
        category: 'Desktops',
        image: 'desktop.png',
        brands: ['Lenovo', 'Acer', 'HP'],
        availableSpecs: [
            {RAM: ['2GB', '4GB', '8GB']},
            {OS: ['Windows 11', 'Windows 10']},
            {Size: ['12"','13"','14"','15"','16"']},
            {StorageType: ['SSD', 'HDD']},
            {StorageCapacity: ['256 GB', '500 GB', '1 TB'] }
        ]
    }
]

export default categories;