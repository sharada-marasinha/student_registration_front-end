let studentProfile = document.getElementById("profile");

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
      console.log(res);
      res.forEach((element) => {
        body += `<tr>
          <td>
            <div class="testmonals-col">
              <img src="img/Untitled design round 2.png" alt="">
              <div>
                   <h2>${element.firstName + " " + element.lastName}</h2>
                   <br>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ut maiores, error fugiat blanditiis nisi assumenda doloremque, officiis ipsum quis reiciendis! Neque corrupti ea delectus repellat dicta laborum obcaecati deserunt?</p>
                   <br>
                  <h4>${element.email}</h4>
                  <h6>${element.country}</h6>
                  <br>
                  <input type="button" onclick="deleteStudent(${element.id
          })" value="Delete">
                  <input type="button" value="Update">
                  <input type="button" onclick="viewprofile(${element.id
          })" value="View Profile">
                  <h6 class="pinCode">PIN:STD#0${element.id}</h6>
              </div>
          </div>
          </td>
        </tr>`;
      });

      studentProfile.innerHTML = body;
    });
}

// -----------------------calling loadProfile Methords --------------------
loadProfiles();

// --------------------------------Search -----------------------------------
function searchBtn() {
  alert("Searching...");
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
        body += `<tr>
          <td>
            <div class="testmonals-col">
            <img src="img/Untitled design round 2.png" alt="">
              <div>
                  <h2>${element.firstName + " " + element.lastName}</h2>
                   <br>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ut maiores, error fugiat blanditiis nisi assumenda doloremque, officiis ipsum quis reiciendis! Neque corrupti ea delectus repellat dicta laborum obcaecati deserunt?</p>
                   <br>
                  <h4>${element.email}</h4>
                  <h6>${element.country}</h6>
                  <br>
                  <input type="button" onclick="deleteStudent(${element.id
          })" value="Delete">
                  <input type="button" value="Update">
                  <input type="button" onclick="viewProfile(${element.id
          })" value="View Profile">
                  <h6 class="pinCode">PIN:STD#0${element.id}</h6>
              </div>
          </div>
          </td>
        </tr>`;
      });

      studentProfile.innerHTML = body;
    })
    .catch((error) => console.log("error", error));
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



function viewprofile(id) {
  alert("View Profile"+id);
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
  console.log(result);
  let body = ``;
  body += `<tr>
  <td>
    <div class="testmonals-col">
    <img src="img/Untitled design round 2.png" alt="">
      <div>
          <h2>${result.firstName + " " + result.lastName}</h2>
           <br>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ut maiores, error fugiat blanditiis nisi assumenda doloremque, officiis ipsum quis reiciendis! Neque corrupti ea delectus repellat dicta laborum obcaecati deserunt?</p>
           <br>
          <h4>${result.email}</h4>
          <h6>${result.country}</h6>
          <br>
          <input type="button" onclick="deleteStudent(${result.id
  })" value="Delete">
          <input type="button" value="Update">
          <input type="button" onclick="viewProfile(${result.id
  })" value="View Profile">
          <h6 class="pinCode">PIN:STD#0${result.id}</h6>
      </div>
  </div>
  </td>
</tr>`;

studentProfile.innerHTML = body;
}