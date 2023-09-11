let studentTable = document.getElementById("tblStudent");
let studentTable2 = document.getElementById("tblStudent2");
//-------------------------VIEW AS TABLE ------------------------------>>
var requestOptions = {
    method: "GET"
};

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


fetch("http://localhost:8080/student")
.then(response => response.json())
.then(res => {
    res.forEach(element => {
        
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






