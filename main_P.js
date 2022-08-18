// Your JavaScript code goes here.
function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
}
document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
function SmartPhone(name,id) {
      var phone ={};
      phone.name=name;
      phone.id=id;
      phone.state=state;
      phone.cost=cost;
      return phone;
    }
    
    var state = function(status) {
        this.state=status;
      return 'the state of this phone is ' +this.state;
      };
    
    var cost = function(number) {
        this.cost=number;
        return 'the repairing will cost ' + this.cost;
    }; 

var tab2 =document.getElementsByClassName("box2");
var tab1 =document.getElementsByClassName("box1");
//function add(name,id,state,cost){


//}

var phone001=SmartPhone("oppo","F01");
phone001.state("not repaired")
phone001.cost("0")

var phone002=SmartPhone("samsung","S02")
phone002.state("repaired")
phone002.cost("30 DTN")

var phone003=SmartPhone("nokia","J21")
phone003.state("repaired")
phone003.cost("60 DTN")

 

var DB = [phone001,phone002,phone003];

for (i=0;i<DB.length;i++){
console.log(DB[i]);
tab1[i].innerText="Customer Phone_ID: "+DB[i].id;
tab2[i].innerText="Phone_State: "+DB[i].state;
};




function showAlert1(){
 alert(DB[0].state+"& it cost: "+DB[0].cost)
 }

 function showAlert2(){
 alert(DB[1].state+"& it cost: "+DB[1].cost)
 }

function showAlert3(){
alert(DB[2].state+"& it cost: "+DB[2].cost)
}







