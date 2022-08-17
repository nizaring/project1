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


var tab =document.getElementsByClassName('box');

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


var phone004=SmartPhone("....","....");
var phone005=SmartPhone("....","....");
var phone006=SmartPhone("....","....");
var phone007=SmartPhone("....","....");
var phone008=SmartPhone("....","....");
var phone0098=SmartPhone("....","....");
var phone010=SmartPhone("....","...."); 

var DB = [phone001,phone002,phone003];

for (i=0;i<DB.length;i++){
console.log(DB[i]);
tab[i].innerText="Customer Phone_ID: "+DB[i].id;
};


// var imgG=document.getElementById('img1');
// imgG.src="https://www.tadreex.com/images/Tadreex.png"


function showAlert1(){
 alert(DB[0].state+"& it cost: "+DB[0].cost)
 }

 function showAlert2(){
    alert(DB[1].state+"& it cost: "+DB[1].cost)
    }

    function showAlert3(){
        alert(DB[2].state+"& it cost: "+DB[2].cost)
        }







