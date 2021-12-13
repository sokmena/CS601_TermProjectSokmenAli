const displayTable = document.getElementById("results"); // Get the table

document.addEventListener('DOMContentLoaded', function(){
    fetch('https://substantial-foam-piano.glitch.me/degrees.json')
      .then(response => response.json())
      .then(data => {
      let len = data.Degrees.length;
      let wid = Object.keys(data.Degrees[0]).length;
      
      // clearing contents of to make sure we do not write multiple tables
      displayTable.innerHTML = "";
      
      // creating a table
      let myTable = document.createElement('table');
      let tBody = document.createElement('tbody');
      myTable.appendChild(tBody);
      
      // adding headers
      let headRow = document.createElement('tr');
      for (let col = 0; col < wid; col++){
        let th = document.createElement('th');
        th.appendChild(document.createTextNode(Object.keys(data.Degrees[0])[col]));
        headRow.appendChild(th);
      }
      tBody.appendChild(headRow);
      
      // iterating through length and width to add data
      for (let row = 0; row < len; row++) {
        let tr = document.createElement('tr');
        tBody.appendChild(tr);
        for (let col = 0; col < wid; col++){
          let td = document.createElement('td');
          // adding content
          td.appendChild(document.createTextNode(Object.values(data.Degrees[row])[col]));
          tr.appendChild(td);
        }
      }
      displayTable.appendChild(myTable);
    })
    .catch((error) => {
      // catching and handling errors
      console.error('Error:', error); 
      displayTable.innerHTML = "Could not load the data, please try again later.";
    });
});



