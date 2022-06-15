// Exercise 1 Section
class Preson {
    constructor(name, pets, residence, hobbies){
       this.name = name;
       this.pets = pets;
       this.residence = residence;
       this.hobbies = hobbies;
    }

    addHobby(hobby){
        this.Hobbies.push(hobby);
      }
    removeHobby(hobby){
          let foundIdx = this.hobbies.indexof(hobby);
          let valuesBefore = this.addHobby.slice(0, foundIdx);
          let valuesAfter = this.addHobby.slice(foundIdx + 1);
          this.hobbies = valuesBefore.concat(valuesAfter);
          
  
      }

    greeting(){
        console.log("Hello fellow person!");
      }
      toString(){
        return Object.values(this).toString
        
    }

    }

     
     




  
    // Exercise 2 Section
    class Coder extends Person {
        constructor(oname, pets, residence, hobbies ,occpation){
            super(name, pets, residence, hobbies)
            this.occpation = occpation;
        }
            greeting(){
                console.log("Hello i am coder!");
              }
        }
    

    // Exercise 3 Section
     let person = new Person("Keyur" ,0 ,"memphis" ,["working","reading","watchin"]);
     person.addHobby("fencing");
     console.log(person);
      person.removeHobby("reading");
      console.log(person);
      console.log(Coder);
      console.greeting();
      console.log(Coder.toString);
    // Exercise 4 Section


    class Calculator {
        result = 0;
         
        add(a, b){
            this.result = a + b;
            return this.result
        }
        subtract(a, b){
            this.result = a - b;
            return this.result
        }
        multiply(a, b){
            this.result = a * b;
            return this.result
        }
        divide(a, b){
            this.result = a / b;
            return this.result
        }
        display(){
console.log(this.result);
        }
    }
     let calc = new Calculator
      calc.add(0,1)
      calc.display()
      calc.subtract(0,1)
      calc.display()
      calc.multiply(0,1)
      calc.display()
      calc.divide(0,1)
      calc.display()
     