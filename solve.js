
// kilometerToMeter
function kilometerToMeter(kilometer){

    var meter = kilometer * 5000;
    return meter;
} 
console.log(kilometerToMeter(5));

//Kilometer is "25000"


// bugetCalculator

function bugetCalculator(watch,mobile,laptop){

    var sampleOne = (watch * 50);

    var sampleTwo = (mobile * 100);

    var sampleThree = (laptop * 500);

    var totallCost = sampleOne + sampleTwo + sampleThree;

    return totallCost; 
}

console.log(bugetCalculator(2,2,2));  

// Buget Calculate is "1300"



function hotelCost(day){

    if(day<=10){
        
       var totallCost = day*100;
    }
    else if(day<=20){

       var  first = 10*100;

       var  firstDiscount = (day-10)*80;

       var  totallCost = first + result2;
    }
    else{

       var first  = 10*100;

       var firstDiscount = 10*80;


       var secondDiscount  = (day-20)*50;

       var totallCost = first + firstDiscount + secondDiscount;

   
   
    }

      return totallCost;   
      
     

}

console.log(hotelCost(45));

 // Totall cost is "3050"



//  megaFriend

function megaFriend(friendsname) {

    var main_name = friendsname[0];

    if (friendsname.length == 0){

        return "Error"
    }
    for (var i = 0; i < friendsname.length; i++) {

        var saifulboss = friendsname[i];

        if (saifulboss.length > main_name.length) {

            main_name = saifulboss;
        }
    }
    return main_name;

}

 var friendsname = ["saiful","tushr","Ashwini Koul","Sidharth Shukla","Shehnaaz Gill"];

 
 var finalresult = megaFriend(friendsname);
 console.log(finalresult);

