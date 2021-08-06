class Animal {
    constructor(name = "", age = 0, isMammal = true) {
      this.name = name;
      this.age = age;
      this.isMammal = isMammal;
    }
  }
  
  class Rabbit extends Animal {
    constructor(name, age, isMammal) {
      super(name, age, isMammal = true);
      this.isMammal = isMammal;
      this.age = age;
    }
    eat() {
      return `${this.name} Sedang Makan ${this.isMammal}!`;
    }
  }
  
  class Eagle extends Animal {
    constructor(name, age, isMammal = false) {
      super(name, age, isMammal);
      this.isMammal = isMammal;
      this.age = age;
    }
    fly() {
      return `${this.name} Sedang Terbang ${this.isMammal}!`;
    }
  }
  
  let MyRabbit = new Rabbit("Labi", 2);
  let MyEagle = new Eagle("ello", 4);
  
  console.log(MyRabbit.eat());
  console.log(MyEagle.fly()); 