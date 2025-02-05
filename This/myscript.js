
const car = {
    brand: "Toyota",  
    model: "Corolla",  
    year: 2020, 
    getCarInfo: function(){
        return `this is car's brand:${this.brand},this is car's model:${this.model}`
    },
    updateyear: function(NewYear){
        this.year=NewYear
    },
    displayInfo: function () {
        setTimeout(() => {
            console.log(this);
            
        }, 3000);
        
    }      
  }; 
//   console.log(car.getCarInfo());

//   car.updateyear(2023)
//   console.log(car.year);
  console.log(car.displayInfo());
  
  
  