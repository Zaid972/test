
function o(){
  var x =0;
   while(x<=99){
	x = x +1;
	if(x % 4 == 0 && x % 10 == 0) {
	console.log("fourteen");
	}else if(x % 10 == 0){
	console.log("ten");
	}else if(x % 4 == 0){
	console.log("four");

    }
  }
	
}






function giveyear(){
	var year = prompt("give me a year and i might give you two centuries");
	var century = year/100+ 1;
	console.log (century)
	prompt("that year is the " + Math.floor (century) + " century");







}


 function triangle (){
 	var y = prompt("Enter the other angle of that same triangle(Just the number)");
 	var x = prompt("enter an angle belonging to a triangle)");
 	alert(180 - x -y + "" + " degree is the 3rdangle of the triangle");

 	 }


    function test3(){
    	alert("A");
    	console.log("Hi");


    }


     
     function Tenfour(){
         for(let i=0 ; i<101 ; i+=1){ 
             if(i%4==0)
             console.log ("Four");

            else if (i%10==0)
            	console.log ("Ten");
            else if (i%4==0 && i%10==0)
            	console.log("TenFour");
            else{    


            }


            }

         }
  




