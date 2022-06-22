class Car {
    constructor(modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    getModelName() {
        return this.modelName;
    }

    getModelYear() {
        return this.modelYear;
    }

    getType() {
        return this.type;
    }

    getPrice() {
        return this.price;
    }

    setModelName(modelName) {
        this.modelName = modelName;
    }

    setModelYear(modelYear) {
        this.modelYear = modelYear;
    }

    setType(type) {
        this.type = type;
    }

    setPrice(price) {
        this.price = price;
    }
}

let ionic = new Car("아이오닉", "2021", "e", 4000);
let genesis = new Car("제네시스", "2021", "g", 7000);
ionic.setPrice(4300);
console.log(ionic.getPrice());

// 상속
class ElectricCar extends Car {
    constructor(modelName, modelYear, price, chargeTime) {
        super(modelName, modelYear, price);
        this.chargeTime = chargeTime;
    }

    setChargeTime(time) {
        this.chargeTime = time;
    }

    getChargeTime(time) {
        return this.chargeTime;
    }
}

let eCar = new ElectricCar("전기차", "2022", "e", 8000);
console.log(eCar.getModelName());
console.log(eCar.getChargeTime());
