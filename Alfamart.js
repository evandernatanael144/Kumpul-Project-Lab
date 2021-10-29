class Person{
    constructor(name, bod, address, phone_number){
        this.name = name;
        this.bod = bod;
        this.address = address;
        this.phone_number = phone_number;
    }
    getName = () => {
        return this.name;
    };
    getBod = () => {
        return this.bod;
    };
    getBod = () => {
        return this.address;
    };
    getBod = () => {
        return this.phone_number;
    };

}
class Staff extends Person{
    constructor(name, bod, address, phone_number,staffID, location, salary, work_time, shift){
        super(name, bod, address, phone_number);
        this.staffID = staffID;
        this.location = location;
        this.salary = salary;
        this.work_time = work_time;
        this.shift = shift;
    }
    getLocation = () => {
        return this.location;
    };
    getSalary = () => {
        return this.Salary;
    };
    getWork_time = () => {
        return this.work_time;
    };
    getShift = () => {
        return this.shift;
    };
}
class Customer extends Person{
    constructor(customerId, delivery_address){
        super(name, bod, address, phone_number);
        this.customerId = customerId;
        this.delivery_address = delivery_address;
    }
    getCustomerId = () => {
        return this.customerId;
    };
    getDelivery_address = () => {
        return this.delivery_address;
    };
}
class Supervisor extends Staff{
    constructor(supervisor_id, staffID, location, salary, work_time, shift){
        super(staffID, location, salary, work_time, shift);
        this.supervisor_id = supervisor_id;
    }
    getSupervisorId = () => {
        return this.supervisor_id;
    };
}
class Cashier extends Staff{
    constructor(cashier_id, cashier_accont, staffID, location, salary, work_time, shift){
        super(staffID, location, salary, work_time, shift);
        this.cashier_id = cashier_id;
        this.cashier_accont = cashier_accont;
    }
    getCashierId = () => {
        return this.cashier_id;
    };
    getCashierAccount = () => {
        return this.cashier_accont;
    };
}
class Product{
    constructor(product_id, product_category, product_description, supplier, qty){
        this.product_id = product_id;
        this.product_category = product_category;
        this.product_description = product_description;
        this.supplier = supplier;
        this.qty = qty;
    }
    getProductId = () => {
        return this.product_id;
    };
    getProductCategory = () => {
        return this.product_category;
    };
    getProductDescription = () => {
        return this.product_description;
    };
    getSupplier = () => {
        return this.supplier;
    };
    getQty = () => {
        return this.qty;
    }
}
class Sabun extends Product{
    constructor(sabun_type, sabun_packaging, sabunMFDate, product_id, product_category, product_description, supplier, qty){
        super(product_id, product_category, product_description, supplier);
        this.sabun_type = sabun_type;
        this.sabun_packaging = sabun_packaging;
        this.sabunMFDate = sabunMFDate;
        this.qty = qty;
    }
    getSabunType = () => {
        return this.sabun_type;
    };
    getSabunPackaging = () => {
        return this.sabun_type;
    };
    getSabunMFDate = () => {
        return this.sabunMFDate;
    }
}
class Shampoo extends Product{
    constructor(shampoo_type, shampoo_packaging, shampooMFDate, product_id, product_category, product_description, supplier){
        super(product_id, product_category, product_description, supplier);
        this.shampoo_type = shampoo_type;
        this.shampoo_packaging = shampoo_packaging;
        this.shampooMFDate = shampooMFDate;
    }
    getShampooType = () => {
        return this.shampoo_type;
    };
    getShampooPackaging = () => {
        return this.shampoo_type;
    };
    getShampooDate = () => {
        return this.shampooMFDate;
    }
}

let Calc = new Product("124532", "Food and Beverages", "Makanan Ringan", "Indomaret", "50");
console.log(Product.getQty + 10);