import config from "./config.js";

export function saveCustomerData(post){
return fetch(`${config.endpoint}/customers`,{
    method:"POST",
    body:JSON.stringify(post),
    headers:{
        "Content-Type": "application/json"  
    }
}).then(res => res.json())
}

export function getCustomerData(){
   // const p=new Promise(function(resolve,reject){
        fetch(`${config.endpoint}/customers`)
     .then(function (response){
         return response.json();
     })
     .then(function (data){
        getCustomer(data);
     })
    
    
}

 function getCustomer(data) {
    var col = [];
 for (var i = 0; i < data.length; i++) {
 for (var key in data[i]) {
 if (col.indexOf(key) === -1) {
 col.push(key);
 }
 }
 }
 
 // CREATE DYNAMIC TABLE.
 var table = document.createElement("table");
 table.setAttribute('id', 'table');
 
 // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
 
 var tr = table.insertRow(-1); // TABLE ROW.
 
 for (var i = 0; i < col.length-1; i++) {
 var th = document.createElement("th"); // TABLE HEADER.
 th.innerHTML = col[i];
 tr.appendChild(th);
 }

 var th = document.createElement("th"); 
 th.innerHTML="Action";
 tr.appendChild(th);
 
 
 // ADD JSON DATA TO THE TABLE AS ROWS.
 for (var i = 0; i < data.length; i++) {
 
 tr = table.insertRow(-1);
 
 for (var j = 0; j < col.length-1; j++) {
 var tabCell = tr.insertCell(-1);
 tabCell.innerHTML = data[i][col[j]];
 }

 var cell = tr.insertCell(-1);
 var btnRemove = document.createElement("input");
 btnRemove.type = "button";
 btnRemove.value = "DELETE";
 
 btnRemove.onclick= function() {
     //alert("Delect");
   let conf=  confirm("Are you sure to delete the record");
   if(conf == true){
         
   }
 var emptab = document.getElementById('table');
console.log("printing"+this.parentNode.parentNode.rowIndex);

 var delv= this.parentNode.parentNode.rowIndex;
 
 //console.log(data[delv-1].id)
 
 var delid=data[delv-1].id;
 
 console.log(data)
 
 emptab.deleteRow(this.parentNode.parentNode.rowIndex); 
 
 console.log(`${config.endpoint}/customers/${delid}`)
 
 return fetch(`${config.endpoint}/customers/${delid}` , 
 {
 method: 'delete'
 }) .then(r=> r.json())
 
 
 }
 cell.appendChild(btnRemove); 
 
}

 
 
 // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
 var divContainer = document.getElementById("showdata");
 divContainer.innerHTML = "";
 divContainer.appendChild(table);
}