//Interface
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorator: Allows to add an extra method or functionality to an existing class and its childs
function stamp(logo) {
    return function (target) {
        target.prototype.stamped = function () {
            //:void means the function does not return anything
            console.log("Shirt stamped succesfuly with: " + logo);
        };
    };
}
//Class: (Object Model)
var Shirts = /** @class */ (function () {
    //Constructor
    function Shirts(color, model, brand, size, price) {
        (this.color = color),
            (this.model = model),
            (this.brand = brand),
            (this.size = size),
            (this.price = price);
    }
    //Using a constructor allows to set the properties values when the class is instantiated
    //Methods: (Object functions or actions)
    Shirts.prototype.setColor = function (color) {
        this.color = color;
    };
    Shirts.prototype.getColor = function () {
        return this.color;
    };
    Shirts = __decorate([
        stamp("Gucci")
        /*export*/
    ], Shirts);
    return Shirts;
}());
//Child Class
var Overshirt = /** @class */ (function (_super) {
    __extends(Overshirt, _super);
    function Overshirt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Overshirt.prototype.setSecColor = function (secColor) {
        this.secColor = secColor;
    };
    Overshirt.prototype.getSecColor = function () {
        return this.secColor;
    };
    return Overshirt;
}(Shirts));
var ovShirt = new Overshirt("Black", "OvShirt", "BigJohn", "S", 40.99);
console.log(ovShirt);
ovShirt.setSecColor("Gray");
console.log(ovShirt);
ovShirt.stamped();
//var shirt = new Shirts("Blue", "V-neck", "Gef", "XL", 30.99);
//console.log(shirt.getColor());
//shirt.color = "Blue";
// shirt.brand = "Gef";
// shirt.size = "L";
// shirt.model = "V-Neck";
// shirt.price = 30.99;
//console.log(shirt);
//var shirt2 = new Shirts("Red", "Round-Neck", "Nautica", "M", 30.99);
//shirt2.setColor("Black");
//console.log(shirt2.getColor());
//shirt2.color = "Red";
// shirt2.brand = "Nautica";
// shirt2.size = "M";
// shirt2.model = "Round-Neck";
// shirt2.price = 30.99;
//console.log(shirt2);
