var view = {
    
    displayList: function(name){
        var itemlistProduct = view.createItemProduct(name);
        view.addListProduct(itemlistProduct);
    },
    
    displayListPrice: function(price){
        var itemlistPrice = view.createItemPrice(price);
        view.addListPrice(itemlistPrice);
    },
    
    displayTotal: function(total) {
        var itemTotal = view.createItemTotal(total);
        view.addItemTotal(itemTotal);
    },
    
    createItemProduct: function(name){
        var itemProduct = document.createElement('li');
        itemProduct.innerHTML = name;
        return itemProduct;
    },
    
    createItemPrice: function(price){
        var itemPrice = document.createElement('li');
        itemPrice.innerHTML = price;
        return itemPrice;
    },
    
    createItemTotal: function(total) {
        var item = document.createElement('p');
        item.innerHTML = total;
        return item;
    },
    
    addListProduct: function(itemListProduct){
        var item = document.getElementById('list-name');
        item.appendChild(itemListProduct);
    },
    
    addListPrice: function(itemListPrice){
        var item = document.getElementById('list-price');
        item.appendChild(itemListPrice);
    },
    
    addItemTotal: function(itemTotal) {
        var item = document.getElementById('total');
        item.appendChild(itemTotal);
    }
    
};