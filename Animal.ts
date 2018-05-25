interface Animal {
     eat: (food:String) => void,
     speak: (sound: String) => void
    }

class Dog implements Animal {
   private name:String;
   constructor(name:String){
       this.name= name;
   }
   eat(food:String){
       console.log(this.name+" "+food);
   }
   speak(sound:String){
       console.log(this.name+" "+sound);
   }
}

class Cat implements Animal {
    private name:String;
    constructor(name:String){
        this.name= name;
    }
    eat(food:String){
        console.log(this.name+" "+food);
    }
    speak(sound:String){
        console.log(this.name+" "+sound);
    }
 }

let dog1= new Dog("Charlie");
let dog2= new Dog("Max");
let cat1= new Cat("kitty");
dog1.eat("eat meat");
dog2.speak("bark bhow-bhow");
cat1.speak("speak meow-meow");
cat1.speak("drink milk");
