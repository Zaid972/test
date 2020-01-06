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
        if(i%4==0){
            console.log ("Four");
        }
        else if (i%10==0){
            console.log ("Ten");
        }
        else if (i%4==0 && i%10==0){
            	console.log("TenFour");
        }
    }
}
  
 function stringlength(){
 	let letters=prompt("enter text")
 	let textlength=letters.length
 	alert(textlength +  ' characters')
 }



 function login(){
 	let username=prompt("enter username")
 	let password=prompt("Enter Password")
 	if(username=="Zaid" && password=="623"){
 		alert("correct")
 	}
 	else{ 
 		alert ("incorrect")
 	}
 }	



function encryption(){
	var a = prompt ("Encrypt code")  
	var b =a.replace(/a/g,"%").replace(/b/g,"1").replace(/c/g,"2").replace(/d/g,"3").replace(/e/g,"4").replace(/f/g,"5").
	replace(/g/g,"^").replace(/h/g,"7").replace(/i/g,"+").replace(/j/g,"=").replace(/k/g,"#").replace(/l/g,"@").
	replace(/m/g,"$").replace(/n/g,">>").replace(/o/g,"<").replace(/p/g,"l").replace(/q/g,"?").replace(/r/g,";").
	replace(/s/g,"-").replace(/t/g,"``").replace(/u/g,"9").replace(/v/g,"^^").replace(/w/g,":").replace(/x/g,"*").replace(/y/g,"z").replace(/z/g,"!")
	alert(b)
  }
  
  function decryption(){
  	var c = prompt ("Decrypt code")
  	var d=c.replace(/%/g,"a").replace(/1/g,"b").replace(/2/g,"c").replace(/3/g,"d").replace(/4/g,"e").replace(/5/g,"f").
  	replace(/^/g,"g").replace(/>/g,"h").replace(/</g,"i").replace(/=/g,"j").replace(/#/g,"k").replace(/@/g,"l").
  	replace(/$/g,"m").replace(/>>/g,"n").replace(/</g,"o").replace(/l/g,"p").replace(/?/g,"q").replace(/;/g,"r").
  	replace(/-/g,"s").replace(/``/g,"t").replace(/9/g,"u").replace(/^^/g,"y").replace(/:/g,"w").replace(/ */g,"x").
  	replace(/z/g,"y").replace(/!/g,"z")
  	alert(d)
}


