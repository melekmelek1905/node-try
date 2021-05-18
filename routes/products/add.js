const fs = require('fs');
var product = {
    "id": 11,
    "category": "jeans",
    "name": "Ripped jeans",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg",
    "size": "XL",
    "color": "blue",
    "price": 20.99
}
fs.readFile('./products.json', (err, data) => {
    if (err) {
        console.log("fama mochkla")
    } else {
        var json = JSON.parse(data)
        json.push(product)
        fs.writeFile("./products.json", JSON.stringify(json))
    }
})