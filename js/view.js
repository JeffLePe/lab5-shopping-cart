var view = {
    
    displayList: function(name){
        var itemlistProduct = view.createItemProduct(name);
        view.addListProduct(itemlistProduct);
    },
    
    displayListPrice: function(price){
        var itemlistPrice = view.createItemPrice(price);
        view.addListPrice(itemlistPrice);
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
    
    addListProduct: function(itemListProduct){
        var item = document.getElementById('list-name');
        item.appendChild(itemListProduct);
    },
    
    addListPrice: function(itemListPrice){
        var item = document.getElementById('list-price');
        item.appendChild(itemListPrice);
    }
    
}