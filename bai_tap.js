// Câu 1: Hàm tạo Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Tạo mảng products
var products = [];
products.push(new Product(1, "Laptop Dell XPS 15", 25000000, 10, "Electronics", true));
products.push(new Product(2, "iPhone 15 Pro", 28000000, 5, "Electronics", true));
products.push(new Product(3, "Tai nghe AirPods Pro", 5000000, 20, "Accessories", true));
products.push(new Product(4, "Ốp lưng iPhone", 200000, 0, "Accessories", false));
products.push(new Product(5, "Bàn phím cơ", 3000000, 15, "Accessories", true));
products.push(new Product(6, "Chuột không dây", 800000, 8, "Accessories", true));
products.push(new Product(7, "Màn hình 27 inch", 8000000, 3, "Electronics", true));
products.push(new Product(8, "Loa Bluetooth", 2500000, 0, "Accessories", false));

console.log("Danh sách sản phẩm:", products);

// Câu 3: Mảng gồm name và price
var result3 = [];
for (var i = 0; i < products.length; i++) {
    result3.push({
        name: products[i].name,
        price: products[i].price
    });
}
console.log("Câu 3:", result3);

// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
var result4 = [];
for (var i = 0; i < products.length; i++) {
    if (products[i].quantity > 0) {
        result4.push(products[i]);
    }
}
console.log("Câu 4:", result4);

// Câu 5: Kiểm tra có sản phẩm giá > 30 triệu không
var check = false;
for (var i = 0; i < products.length; i++) {
    if (products[i].price > 30000000) {
        check = true;
    }
}
console.log("Câu 5:", check);

// Câu 6: Accessories có phải tất cả đều đang bán không
var allAvailable = true;
for (var i = 0; i < products.length; i++) {
    if (products[i].category == "Accessories") {
        if (products[i].isAvailable == false) {
            allAvailable = false;
        }
    }
}
console.log("Câu 6:", allAvailable);

// Câu 7: Tổng giá trị tồn kho
var total = 0;
for (var i = 0; i < products.length; i++) {
    total += products[i].price * products[i].quantity;
}
console.log("Câu 7:", total);

// Câu 8: Dùng for...of
console.log("Câu 8:");
for (var p of products) {
    var status = "Ngừng bán";
    if (p.isAvailable == true) {
        status = "Đang bán";
    }
    console.log(p.name + " - " + p.category + " - " + status);
}

// Câu 9: Dùng for...in
console.log("Câu 9:");
for (var i = 0; i < products.length; i++) {
    console.log("Sản phẩm:", products[i].name);
    for (var key in products[i]) {
        console.log(key + ":", products[i][key]);
    }
    console.log("------------------");
}

// Câu 10: Tên sản phẩm đang bán và còn hàng
var result10 = [];
for (var i = 0; i < products.length; i++) {
    if (products[i].isAvailable == true && products[i].quantity > 0) {
        result10.push(products[i].name);
    }
}
console.log("Câu 10:", result10);
