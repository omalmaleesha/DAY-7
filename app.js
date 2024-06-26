// class Customer{
//     name;
//     age;
//     address;
//     constructor(name,age,address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     setName(name){
//         this.name = name;
//     }

//     getName(){
//         return this.name;
//     }

// }

// let  customer1 = new Customer("maleesha",21,"jayamanne");
// let  customer2 = new Customer("kamal",32,"perera");
// let array = [customer1,customer2];
// console.log(array);
// console.log(customer1.getName());

let number = Math.floor((Math.random() * 10) + 1);
    
        function guess(){
            let inputNumber = parseInt(document.getElementById("inputfield").value);
            console.log(inputNumber);

            let output = document.getElementById("output");
            
            if(number == inputNumber){
                output.innerHTML =  "Your number equals the guess number";
                alert("you guess the number you WIN !");
            }else if(number > inputNumber){
                output.innerHTML = "Your number is less than the guess number";
            }else{
                output.innerHTML =  "Your number is greater than the guess number";
            }

            
        }

        function clearInput() {
            document.getElementById("inputfield").value = "";
            document.getElementById("output").innerHTML = "loarding";
        }


