



let studentProfile = document.getElementById("profile");

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
};

let body =   ``;

fetch("http://localhost:8080/student")
.then(response => response.json())
.then(res => {


    res.forEach(element => {
        
        body += `<tr>
        <td>
          <div class="testmonals-col">
            <img src="img/Untitled design round 2.png" alt="">
            <div>
                 <h2>${element.firstName+" "+element.lastName}</h2>
                 <br>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ut maiores, error fugiat blanditiis nisi assumenda doloremque, officiis ipsum quis reiciendis! Neque corrupti ea delectus repellat dicta laborum obcaecati deserunt?</p>
                 <br>
                <h4>${element.email}</h4>
                <h6>${element.country}</h6>
                <br>
                <input type="button" value="Delete">
                <input type="button" value="Update">
                <input type="button" value="View Profile">
                <h6 class="pinCode">PIN:STD#0${element.id}</h6>
            </div>
        </div>
        </td>
      </tr>`;

    });

    studentProfile.innerHTML = body;


})


function searchBtn(){
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
        let body = ``;

        data.forEach(element => {

            body += `<tr>
            <td>
              <div class="testmonals-col">
              <img src="img/Untitled design round 2.png" alt="">
                <div>
                     <h2>${element.firstName}</h2>
                     <br>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ut maiores, error fugiat blanditiis nisi assumenda doloremque, officiis ipsum quis reiciendis! Neque corrupti ea delectus repellat dicta laborum obcaecati deserunt?</p>
                     <br>
                    <h4>${element.email}</h4>
                    <h6>${element.country}</h6>
                    <br>
                    <input type="button" value="Delete">
                    <input type="button" value="Update">
                    <input type="button" value="View Profile">
                    <h6 class="pinCode">PIN:STD#0${element.id}</h6>
                </div>
            </div>
            </td>
          </tr>`;

        });

        studentProfile.innerHTML = body;
     


      })
      .catch(error => console.log('error', error));
}



