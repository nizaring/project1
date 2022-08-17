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

var nizar=SmartPhone("oppo","F01");
nizar.state("not repaired")

var lotfi=SmartPhone("samsung","S02")
var hamza=SmartPhone("nokia","J21")
var user001=SmartPhone("....","....");
var user002=SmartPhone("....","....");
var user003=SmartPhone("....","....");
var user004=SmartPhone("....","....");
var user005=SmartPhone("....","....");
var user006=SmartPhone("....","....");
var user007=SmartPhone("....","...."); 

var DB = [nizar,lotfi,hamza];

for (i=0;i<DB.length;i++){
console.log(DB[i]);
tab[i].innerText="Customer Name: "+ DB[i].name  +"       "+"& Phone_ID: "+DB[i].id;
};


// var imgG=document.getElementById('img1');
// imgG.src="https://www.tadreex.com/images/Tadreex.png"


function showAlert1(){
 alert(DB[0].state)
 ;}

function showAlert2(){
    alert(DB[1].state)
    ;}
      





