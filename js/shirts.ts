//Interface

interface BaseShirt {
  setColor(color); //Methods established on the interface must exist on the class the interface its being implemented, otherwise it will throw an error
  getColor();
}

//Decorator: Allows to add an extra method or functionality to an existing class and its childs

function stamp(logo: string) {
  return function (target: Function) {
    target.prototype.stamped = function (): void {
      //:void means the function does not return anything
      console.log("Shirt stamped succesfuly with: " + logo);
    };
  };
}

//Class: (Object Model)
@stamp("Gucci")
/*export*/
class Shirts implements BaseShirt {
  //export allows to import the file
  //Props: (Object characteristics)

  private color: string;
  private model: string;
  private brand: string;
  private size: string;
  private price: number;

  //Constructor

  constructor(
    color: string,
    model: string,
    brand: string,
    size: string,
    price: number
  ) {
    (this.color = color),
      (this.model = model),
      (this.brand = brand),
      (this.size = size),
      (this.price = price);
  }

  //Using a constructor allows to set the properties values when the class is instantiated

  //Methods: (Object functions or actions)

  public setColor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }
}

//Child Class

class Overshirt extends Shirts {
  public secColor: string;

  setSecColor(secColor: string) {
    this.secColor = secColor;
  }

  getSecColor(): string {
    return this.secColor;
  }
}

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
