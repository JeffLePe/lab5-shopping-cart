var controller = {
    
    init: function() {
        controller.getForm();
        controller.displayProducts();
        controller.displayTotal();
    },
    
    getForm: function() {
        var eventForm = document.getElementById('form-product');
        eventForm.addEventListener('submit', controller.eventSubmitHandler);
    },
    
    eventSubmitHandler: function(event) {
        event.preventDefault();
        var name = document.getElementById('name');
        var price = document.getElementById('price');
        controller.addProduct(name);
        controller.addPrice(price);
        name = "";
        price = 0;
    },
    
    addProduct: function(name) {
        list.addProduct(name);
        view.displayList(name);
    },
    
    addPrice: function(price) {
        list.addPrice(price);
        view.displayListPrice(price);
    },
    
    displayProducts: function() {
        var products = list.getListProducts();
        var prices = list.getListPrices();
        products.forEach(view.displayList);
        prices.forEach(view.displayListPrice);
    },
    
    displayTotal: function(){
        var total = list.calcTotal();
        view.displayTotal(total);
    }
    
};

controller.init();