var salon={
    name:"The Fashion Pet",
    address:{
        street:"university ave.",
        number:"2569"

    },
    hours:{
        open:"8:00 am",
        close:"8:00 pm" 
    },

pets:[]
    
}
       


var id=0;

/* constructor*/
class Pet{
    constructor(name,gender,age,type,breed,comments,price,service,ownersName,contactPhone){
        this.name=name;
        this.gender=gender;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.comments=comments;
        this.price=price;
        this.service=service;
        this.owner=ownersName;
        this.contactPhone=contactPhone;
        this.id=id++;
    }
}

var scooby = new Pet("Scooby","Male",12,"Dog","Dalmation","Playful",49.99,"Full Service","Hadassah","555-454-6935");
var tweety = new Pet("Tweety","Female",5,"Bird","Canary","Sings too loud",10.99,"Bath","Janelis","414-369-7852");
var snoopy = new Pet("Snoopy","Male",60,"Dog","Chihuahua","loud bark",20.99,"Nails Cut","Alenid","617-456-3256");
var silvester = new Pet("Silvester","Male",9,"Cat","Tiger","Won't shower",25.99,"Hair Cut","Junior","787-658-1412",);



/*register function */
const txtName = document.getElementById('petName');
const txtGender = document.getElementById('petGender');
const txtAge = document.getElementById('petAge');
const txtType = document.getElementById('petType');
const txtBreed = document.getElementById('petBreed');
const txtComments=document.getElementById('petComments');
const txtPrice=document.getElementById('petPrice');
const txtService = document.getElementById('petService');
const txtOwner = document.getElementById('ownersName');
const txtContact = document.getElementById('contactPhone');



/* Display on console to verify is correct 
    console.log(txtName.value);
    console.log(txtGender.value);
    console.log(txtAge.value);
    console.log(txtType.value);
    console.log(txtBreed.value);
    console.log(txtService.value);
    console.log(txtOwner.value);
    console.log(txtContact.value); */

function register(){
var thePet = new Pet(txtName.value,txtGender.value,txtAge.value,txtType.value,txtBreed.value,txtComments.value,txtPrice.value,txtService.value,txtOwner.value,txtContact.value);
salon.pets.push(thePet);
displayTable(thePet);
clear();
registeredPets();
profitCalculation();

};
//competency Report FSDI-105
//$(funtion(){//
 //////   var content= "Pet Added";   
//$('#contactPhone').on(click, function(){
 //   var contactphoneId =$(this).attr('thePet')
    
//});
//});


function clear(){
    txtName.value="";
    txtGender.value="";
    txtAge.value="";
    txtType.value="";
    txtBreed.value="";
    txtComments.value="";
    txtPrice.value="";
    txtService.value="";
    txtOwner.value="";
    txtContact.value="";
    
};

//document.write("Pets registered: " + salon.pets.length + "<br>" + "<br>");
//document.write("Pet names: " +  "<br>" + "1." + salon.pets[0].name + "<br>","2." + salon.pets[1].name + "<br>","3." + salon.pets[2].name + "br","4." + salon.pets[3].name + "<br>","5." + salon.pets[4].name + "<br>");

function registeredPets(){
    document.getElementById('registeredPets').innerHTML=`Number of pets: ${salon.pets.length}`;

}
function profitCalculation(){
    var total=0;
    for(var i=0;i<salon.pets.length;i++){
        total=total + Number(salon.pets[i].price);
    }

    document.getElementById('profits').innerHTML=`Profits: ${total}`;

}
function deletePet(petId){
    // delete from the array
    //travel the array
    for(var i=0;i<salon.pets.length;i++){
    if(salon.pets[i].id===petId){
        indexDelete=i; //storing the position
    }
    //splice()

}
salon.pets.splice(indexDelete,1);
//delete from the html
//remove
$('#'+petId).remove();
}


// asssigment class #2
//add an input under the index.html
    //get the text from the input $('#petsearch') use (.va) if using jquery); store it in a variable

    //search
    //travel the array (for)
    //compare the variable with salon.pets[i].name
    //store the position

    //highlight the found pet on the table

function  search(){
    var searchString=$('#searchPet').val();
    var searchIndex;
    for(var i=0;i<salon.pets.length;i++){

        if(searchString.toLowerCase()===salon.pets[i].name.toLowerCase() || searchString.toLowerCase()===salon.pets[i].service.toLowerCase())
        {
            searchIndex=i;
        }
        else{
            console.log("No");
        }
    }
        console.log(searchIndex);

        $('#'+searchIndex).addClass('highlight');
}
       

   
    function init(){
    /* display at the bottom of the footer*/
    text=
    `${salon.name}, ${salon.address.street}, ${salon.address.number} <br>
    open from ${salon.hours.open} to ${salon.hours.close}`;

    document.getElementById("footer-info").innerHTML=text;
    
    salon.pets.push(scooby);
    displayTable(scooby);
    salon.pets.push(tweety);
    displayTable(tweety);
    salon.pets.push(snoopy);
    displayTable(snoopy);
    salon.pets.push(silvester);
    displayTable(silvester);
    registeredPets();
    profitCalculation();
    
    $('#registerPet').on('click', register);
        
        
        
    $('#btn-search').on('click',search);
        
    $("#searchPet").keypress(function(e){
        if(e.key==="Enter"){
            search();

        }
    });

    $('#contactPhone').keypress(function(e){
        if(e.key==="Enter"){
        register();
        
        }
    });
    };
//$('#contactPhone').keypress(function(e){
    //if(e.key==="Enter"){
     //   register('#Pet');
        
   // }
//});
 //   }
window.onload=init;


