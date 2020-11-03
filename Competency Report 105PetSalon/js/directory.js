function display(aPet){
    // create the vars
    var text="";

    var dogicon= '<i class="fas fa-dog"></i>';
    var caticon= '<i class="fas fa-cat"></i>';
    var birdicon= '<i class="fas fa-crow"></i>';
    
    
        //display the Icon of the type of pet, hint use(if)
        if(aPet.type==="Dog"){
            icon=dogicon;
        }else if(aPet.type==="Cat"){
            icon=caticon;

        }else if(aPet.type==="Bird"){
            icon=birdicon;
        }else{
            icon='<i class="fas fa-question-circle"></i>';
        }
        // create HTML text
        var tr=`
        <tr id="${aPet.id}" >
        
            <td> id: ${aPet.id} </td>
            <td> Name:${aPet.name} </td>
            <td> Age: ${aPet.age}</td
            <td> Gender: ${aPet.gender}</td>
            <td> Type: ${aPet.type}</td>
            <td> Breed:${aPet.breed} </td>
            <td> Service: ${aPet.service}</td>
            <td> Comments: ${aPet.comments}</td>
            <td> Price:  ${aPet.price}<td>
            <td> Owner: ${aPet.owner}</td>
            <td> Contact Phone: ${aPet.contactPhone}</td>
            <button class="btn btn-danger" onclick='deletePet(${aPet.id})'>
            Delete </button>
            
        </div>
        `;
        
    
    $('#pets').append(tr);
}
    
function displayTable(aPet){

    var tr=`
    <tr id="${aPet.id}">

        <td>${aPet.id}</td>
        <td>${aPet.name}</h2>
        <td>${aPet.age}</p>
        <td>${aPet.gender}</p>
        <td>${aPet.type}</p>
        <td>${aPet.breed}</p>
        <td>${aPet.service}</p>
        <td>${aPet.price}<p>
        <td>${aPet.owner}</p>
        <td>${aPet.contactPhone}</p>
        <button class="btn btn-danger" onclick='deletePet(${aPet.id})'>
        Delete </button>

    </tr>`;
    $('#petTable').append(tr);
    // create the template string 
}




    