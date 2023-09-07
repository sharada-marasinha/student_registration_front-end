let studentProfile = document.getElementById("profile");
let studentProfile2 = document.getElementById("stdProfile");

// ---------------------------------Loading profile----------------------------------------------------

function loadProfiles() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let body = ``;

  fetch("http://localhost:8080/student")
    .then((response) => response.json())
    .then((res) => {
      res.forEach((element) => {
        body += `<div class="testmonals-col">
              <img src="profile/${element.imageName}" alt="">
              <div>
                   <h2>${element.firstName + " " + element.lastName}</h2>
                   <br>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ut maiores, error fugiat blanditiis nisi assumenda doloremque, officiis ipsum quis reiciendis! Neque corrupti ea delectus repellat dicta laborum obcaecati deserunt?</p>
                   <br>
                  <h4>${element.email}</h4>
                  <h6>${element.country}</h6>
                  <br>
                  <input type="button" class="btn btn-danger" onclick="deleteStudent(${element.id
          })" value="Delete">
                  <input type="button" class="btn btn-success" value="Update">
                  <input type="button" class="btn btn-primary" onclick="viewprofile(${element.id})" value="View Profile">
                  <h6 class="pinCode">PIN:STD${element.selectedCourse}#0${element.id}</h6>
              </div>
          </div>`;
      });

      studentProfile.innerHTML = body;
    });
}

// -----------------------calling loadProfile Methords --------------------
loadProfiles();

// --------------------------------Search -----------------------------------
function searchBtn() {
  const searchText = document.getElementById("search_bar").value;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:8080/student/${searchText}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let body = ``;

      data.forEach((element) => {
        body += `<div class="testmonals-col">
        <img src="profile/${element.imageName}" alt="">
        <div>
             <h2>${element.firstName + " " + element.lastName}</h2>
             <br>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ut maiores, error fugiat blanditiis nisi assumenda doloremque, officiis ipsum quis reiciendis! Neque corrupti ea delectus repellat dicta laborum obcaecati deserunt?</p>
             <br>
            <h4>${element.email}</h4>
            <h6>${element.country}</h6>
            <br>
            <input type="button" class="btn btn-danger" onclick="deleteStudent(${element.id
    })" value="Delete">
            <input type="button" class="btn btn-success" value="Update">
            <input type="button" class="btn btn-primary" onclick="viewprofile(${element.id
    })" value="View Profile">
            <h6 class="pinCode">PIN:STD${element.selectedCourse}#0${element.id}</h6>
        </div>
    </div>`;
      });

      studentProfile.innerHTML = body;
    })
    .catch((error) => console.log("error", error));
}

function viewprofile(id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`http://localhost:8080/student/std-id/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => lodeProfile(result)
    )
    .catch(error => console.log('error', error));
}

function lodeProfile(result) {
  
  //window.open("student_profile.html", "top");

 let stdObj = JSON.parse(result);
 
  let body = ``;
  body += `
  <div class="sidenav">
  <div class="profile">
    <img src="profile/${stdObj.imageName}" alt="">

      <div class="name">
          ${stdObj.firstName+" "+stdObj.lastName}
      </div>
      <div class="email">
      ${stdObj.email}
      </div>
  </div>

  <div class="sidenav-url">
      <div class="url">

          <hr align="center">
      </div>
      <div class="url">
      <button class="btn btn-danger" onclick="deleteStudent(${stdObj.id})">Delete</button>
      <button class="btn btn-success" onclick="">Update</button>
          <hr align="center">
      </div>
  </div>
</div>
<!-- End -->

<!-- Main -->
<div class="main">
  <h2 class="headers">IDENTITY</h2>
  <div class="card">
      <div class="card-body">
          <i class="fa fa-pen fa-xs edit"></i>
          <table>
              <tbody>
                  <tr>
                      <td>Full Name</td>
                      <td>:</td>
                      <td>${stdObj.firstName+" "+stdObj.lastName}</td>
                  </tr>
                  <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>${stdObj.email}</td>
                </tr>
                  <tr>
                      <td>Birth Day</td>
                      <td>:</td>
                      <td>${stdObj.dateOfBirth}</td>
                  </tr>
                  <tr>
                  <td>Gender</td>
                  <td>:</td>
                  <td>${stdObj.gender}</td>
                  </tr>
                  <tr>
                      <td>Address</td>
                      <td>:</td>
                      <td>${stdObj.address}</td>
                  </tr>
                  <tr>
                  <td>City</td>
                  <td>:</td>
                  <td>${stdObj.city}</td>
                  </tr>
                  <tr>
                  <td>Pin Code</td>
                  <td>:</td>
                  <td>${stdObj.pinCode}</td>
                  </tr>
                  <tr>
                  <td>State</td>
                  <td>:</td>
                  <td>${stdObj.state}</td>
                  </tr>
                  <tr>
                      <td>Hobbies</td>
                      <td>:</td>
                      <td>${stdObj.hobbies+" : "+stdObj.otherHobby}</td>
                  </tr>
                  <tr>
                      <td>Selected Course</td>
                      <td>:</td>
                      <td>${stdObj.selectedCourse}</td>
                  </tr>
            
              </tbody>
          </table>
      </div>
  </div>

  <h2 class="headers">EDUCATION</h2>
  <div class="card">
      <div class="card-body">
          <i class="fa fa-pen fa-xs edit"></i>
          <div class="social-media">
            <table >
              <tr>
              <th>classX</th>
              <th>classXII</th>
              <th>graduation</th>
              <th>master></th>
              </tr>
              <tr>
              <td>${stdObj.classX}</td>
              <td>${stdObj.classXII}</td>
              <td>${stdObj.graduation}</th>
              <td>${stdObj.masters}</td>
              </tr>
            </table>
          </div>
      </div>
  </div>
</div>`;

studentProfile.innerHTML = body;
}
// ---------------------------------Delete Student--------------------------------------

function deleteStudent(idForDelete) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:8080/student/${idForDelete}`, requestOptions)
        .then((response) => response.text())
        .then(
          (result) => loadProfiles(),
          Swal.fire("Deleted!", "Your file has been deleted.", "success")
        )
        .catch((error) => console.log("error", error));
    }
  });
}