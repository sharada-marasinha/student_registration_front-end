function searchBtn() {
    const searchText = document.getElementById("search_bar").value;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`http://localhost:8080/student/${searchText}`, requestOptions)
      .then(response => response.json())
      .then(data => {

        console.log(data);
        let tblBody = `<tr>
<td>id</td>
<td>First Name</td>
<td>Last Name</td>
<td>dateOfBirth</td>
<td>Email</td>
<td>mobileNumber</td>
<td>gender</td>
<td>address</td>
<td>city</td>
<td>pinCode</td>

</tr>`;
        let tblBody2 = `<tr>
<td>id</td>
<td>First Name</td>
<td>state</td>
<td>country</td>
<td>hobbies</td>
<td>otherHobby</td>
<td>classX</td>
<td>classXII</td>
<td>graduation</td>
<td>masters</td>
<td>selectedCourse</td>


</tr>`;
        data.forEach(element => {

          tblBody += `<tr>
              <td>${element.id}</td>
              <td>${element.firstName}</td>
              <td>${element.lastName}</td>
              <td>${element.dateOfBirth}</td>
              <td>${element.email}</td>
              <td>${element.mobileNumber}</td>
              <td>${element.gender}</td>
              <td>${element.address}</td>
              <td>${element.city}</td>
              <td>${element.pinCode}</td>
             
              </tr>`;
          tblBody2 += `<tr>
              <td>${element.id}</td>
              <td>${element.firstName}</td>
              <td>${element.state}</td>
              <td>${element.country}</td>
              <td>${element.hobbies}</td>
              <td>${element.otherHobby}</td>
              <td>${element.classX}</td>
              <td>${element.classXII}</td>
              <td>${element.graduation}</td>
              <td>${element.masters}</td>
              <td>${element.selectedCourse}</td>
              </tr>`;

        });

        studentTable.innerHTML = tblBody;
        studentTable2.innerHTML = tblBody2;


      })
      .catch(error => console.log('error', error));

  }