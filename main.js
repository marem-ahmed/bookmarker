var siteName=document.getElementById("siteName");
var siteURl=document.getElementById("siteURL");




var sites=[];
if(localStorage.getItem("Sites")){
    sites=JSON.parse(localStorage.getItem('Sites'))
    display()
}


// function to add site


function add(){
    if(validation()==true){
 var site={
        nameSite:siteName.value,
        url:siteURl.value
    };
    sites.push(site);
    // set fev site in localStorage
    localStorage.setItem('Sites',JSON.stringify(sites))
    // display fev sites to user
    console.log(sites)
        display()
    }
    else{
        window.alert("write vaild data")
    }
    // creat  fev site
  

}

// function to display fev site in table
function display(){
   var container=``;
    for(var i=0;i<sites.length ;i++){
container+=` <tr>
        <td class="defaultcolor">${i}</td>
        <td class="defaultcolor">${sites[i].nameSite}</td>
        <td><a class=" btn btn-success" href="${sites[i].url}" target="_blank"><i class="fa-solid fa-eye"></i> Visit</a></td>
        <td><button class="btn btn-danger" onclick="deleteFevSite(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`
    }
   document.getElementById("tbody").innerHTML=container
  
}
// function delete fev site from table
function deleteFevSite(index){
sites.splice(index,1);
localStorage.setItem("Sites",JSON.stringify(sites))
display()
}

// function of validation input

function  validation(){
    


    if(siteName.value!==""&&siteURl.value!==""&&validationUrl()==true ){
        
        return true
    }
    else{
        return false
    }
}
function validationUrl(){
    var regex = /^(ftp|http|https):\/\/[^ "]+$/;
   return regex.test(siteURl.value);
}