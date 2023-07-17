fetch('./assets/js/json/data.json') 
  .then(response => response.json())
  .then(Mydata => { 


    const personalInformation = Mydata.data; 

    function createTable(Mydata) { var table = document.createElement("table")
    table.setAttribute('id' , 'table');
      var thead = document.createElement("thead");
      var tbody = document.createElement("tbody");
      var tfoot = document.createElement("tfoot"); 


       var headerRow = document.createElement("tr");

      var headerNames = ["სახელი", "პროფესია", "დაბადების ადგილი", 'ზიპ კოდი', "კარიერის დაწყება", "სასურველი ხელფასი"];


       headerNames.forEach(function (headerName) { var th = document.createElement("th");

        th.textContent = headerName;
        
        headerRow.appendChild(th);


 });


 thead.appendChild(headerRow);
  Mydata.forEach(function (obj) { 
        var row = document.createElement("tr");
        Object.keys(obj).forEach(function (key) { 


          var cell = document.createElement("td"); 

          cell.textContent = obj[key]; 
          row.appendChild(cell);   });

        tbody.appendChild(row); 
        tbody.appendChild(row); 
        
       

      });






  var footerRow = document.createElement("tr");
  var footerCell = document.createElement("td");

  footerCell.style.textAlign = "center";
  footerCell.textContent = "სტატუსი: აქტიურია!";
  footerRow.appendChild(footerCell);
  tfoot.appendChild(footerRow);














     
      table.appendChild(thead);
      table.appendChild(tbody);
      table.appendChild(tfoot);

      return table; 
    }

  
    var tableContainer = document.getElementById("tableContainer");

   tableContainer.appendChild(createTable(personalInformation));

  })


  .catch(error => { 
    console.error('Error:', error);
  });






























// -----------------------------------------  ძებნა ------------------------------------------------





  async function fetchJSON() {
    try {
      const response = await fetch('./assets/js/json/data.json');
      const jsonData = await response.json();
      return jsonData.data; 
    } catch (error) {
      console.error('Error fetching JSON:', error);
      return null;
    }
  }

  function searchByName(data, keyword) {
    const results = [];

    for (const entry of data) {
      const name = entry[0].toLowerCase();
        
      if (name.includes(keyword)) {  
        results.push(entry);
        var tabledel = document.getElementById('table');
        tabledel.style.display="none"
       

      }
    }

    return results;
  }

  function displayResults(results) {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    if (results.length === 0) {
      resultsList.innerHTML = '<li>No results found.</li>';
    } else {
      for (const entry of results) {
        var newtable = document.getElementById('newtable')
        var row5 = document.createElement("tr");
        var th5 = document.createElement("th");
        var td5 = document.createElement("td");

        td5.textContent =entry.join(' | ')
        th5.appendChild(td5);
        row5.appendChild(th5);
        newtable.appendChild(row5)

      

        const h2=document.querySelector('#h2result')
        h2.style.display="block"

        
      }
    }
  }

  document.getElementById('searchButton').addEventListener('click', async () => {
    const keyword = document.getElementById('searchInput').value;

    if (keyword.trim() === '') {
      alert('Please enter a search keyword.');
      return;
    }

    try {
      const data = await fetchJSON();

      if (data) {
        const searchResults = searchByName(data, keyword);
        displayResults(searchResults);
      }
    } catch (error) {
      console.error('Error fetching or processing JSON:', error);
    }
  });



  //-------------------------------------ძებნა პროფესიით ---------------

  async function fetchJSON2() {
    try {
      const response2 = await fetch('./assets/js/json/data.json');
      const jsonData2 = await response2.json();
      return jsonData2.data; 
    } catch (error) {
      console.error('Error fetching JSON:', error);
      return null;
    }
  }

  function searchByprofessi(data, keyword2) {
    const results2 = [];

    for (const entry2 of data) {
      const nameprof = entry2[1].toLowerCase();

      if (nameprof.includes(keyword2)) {  
        results2.push(entry2);
        var tabledel = document.getElementById('table');
        tabledel.style.display="none"
       

      }
    }

    return results2;
  }

  function displayResults2(results2) {
   const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
   

    if (results2.length === 0) {
      resultsList.innerHTML = '<li>No results found.</li>';
    } else {
      for (const entry2 of results2) {
        
         var newtable = document.getElementById('newtable')
        var row5 = document.createElement("tr");
        var th5 = document.createElement("th");
        var td5 = document.createElement("td");

        td5.textContent =entry2.join(' | ')
        th5.appendChild(td5);
        row5.appendChild(th5);
        newtable.appendChild(row5)
        
       const h2=document.querySelector('#h2result')
        h2.style.display="block"
        
      }
    }
  }
  
  document.getElementById('searchButton2').addEventListener('click', async () => {
    const keyword2 = document.getElementById('searchInput2').value;

    if (keyword2.trim() === '') {
      alert('Please enter a search keyword.');
      return;
    }

    try {
      const data = await fetchJSON2();

      if (data) {
        const searchResults2 = searchByprofessi(data, keyword2);
        displayResults2(searchResults2);
      }
    } catch (error) {
      console.error('Error fetching or processing JSON:', error);
    }
  });

  // -------------------------------------------- ძებნა ზიპ კოდით----------------------

  async function fetchJSON3() {
    try {
      const response3 = await fetch('./assets/js/json/data.json');
      const jsonData3 = await response3.json();
      return jsonData3.data; 
    } catch (error) {
      console.error('Error fetching JSON:', error);
      return null;
    }
  }

  function searchByzip(data, keyword3) {
    const results3 = [];

    for (const entry3 of data) {
      const namezip = entry3[3].toLowerCase(); 
      

      if (namezip.includes(keyword3)) {  
        results3.push(entry3);
        var tabledel = document.getElementById('table');
        tabledel.style.display="none"
       

      }
    }

    return results3;
  }

  function displayResults3(results3) {
   const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
   

    if (results3.length === 0) {
      resultsList.innerHTML = '<li>No results found.</li>';
    } else {
      for (const entry3 of results3) {
        var newtable = document.getElementById('newtable')
        var row5 = document.createElement("tr");
        var th5 = document.createElement("th");
        var td5 = document.createElement("td");

        td5.textContent =entry3.join(' | ')
        th5.appendChild(td5);
        row5.appendChild(th5);
        newtable.appendChild(row5)

      

        const h2=document.querySelector('#h2result')
        h2.style.display="block"

        
      }
    }
  }
  
  document.getElementById('searchButton3').addEventListener('click', async () => {
    const keyword3 = document.getElementById('searchInput3').value;

    if (keyword3.trim() === '') {
      alert('Please enter a search keyword.');
      return;
    }

    try {
      const data = await fetchJSON3();

      if (data) {
        const searchResults3 = searchByzip(data, keyword3);
        displayResults3(searchResults3);
      }
    } catch (error) {
      console.error('Error fetching or processing JSON:', error);
    }
  });


  // --------------------------------------------- ძებნა ხელფასით-----------------------------------

  async function fetchJSON4() {
    try {
      const response4 = await fetch('./assets/js/json/data.json');
      const jsonData4 = await response4.json();
      return jsonData4.data; 
    } catch (error) {
      console.error('Error fetching JSON:', error);
      return null;
    }
  }

  function searchBymany(data, keyword4) {
    const results4 = [];

    for (const entry4 of data) {
      const namemany = entry4[5].toLowerCase(); 
     

      if (namemany.includes(keyword4)) {  
        results4.push(entry4);
        var tabledel = document.getElementById('table');
        tabledel.style.display="none"
       

      }
    }

    return results4;
  }

  function displayResults4(results4) {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
   

    if (results4.length === 0) {
      resultsList.innerHTML = '<li>No results found.</li>';
    } else {
      for (const entry4 of results4) {
         var newtable = document.getElementById('newtable')
        var row5 = document.createElement("tr");
        var th5 = document.createElement("th");
        var td5 = document.createElement("td");

        td5.textContent =entry4.join(' | ')
        th5.appendChild(td5);
        row5.appendChild(th5);
        newtable.appendChild(row5)

      

        const h2=document.querySelector('#h2result')
        h2.style.display="block"

        
      }
    }
  }
  
  document.getElementById('searchButton4').addEventListener('click', async () => {
    const keyword4 = document.getElementById('searchInput4').value;

    if (keyword4.trim() === '') {
      alert('Please enter a search keyword.');
      return;
    }

    try {
      const data = await fetchJSON4();

      if (data) {
        const searchResults4 = searchBymany(data, keyword4);
        displayResults4(searchResults4);
      }
    } catch (error) {
      console.error('Error fetching or processing JSON:', error);
    }
  });