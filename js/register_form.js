

function Student(firstName, lastName, dobDay, dobMonth, dobYear, email, mobileNumber, gender, address, city, pinCode, state, country, hobbies, otherHobby,
    classXBoard, classXPercentage, classXYrOfPassing,
    classXIIBoard, classXIIPercentage, classXIIXYrOfPassing,
    graduationBoard, graduationPercentage, graduationYrOfPassing,
    mastersBoard, mastersPercentage, mastersYrOfPassing,
    selectedCourse) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dobDay + " " + dobMonth + " " + dobYear;
    this.email = email;
    this.mobileNumber = mobileNumber;
    this.gender = gender;
    this.address = address;
    this.city = city;
    this.pinCode = pinCode;
    this.state = state;
    this.country = country;
    this.hobbies = hobbies;
    this.otherHobby = otherHobby;
    this.classX = "board : " + classXBoard + ", percentage : " + classXPercentage + ", yearOfPassing : " + classXYrOfPassing;
    this.classXII = "board : " + classXIIBoard + ", percentage : " + classXIIPercentage + ", yearOfPassing : " + classXIIXYrOfPassing;
    this.graduation = "board : " + graduationBoard + ", percentage : " + graduationPercentage + ", yearOfPassing : " + graduationYrOfPassing;
    this.masters = "board : " + mastersBoard + ", percentage : " + mastersPercentage + ", yearOfPassing : " + mastersYrOfPassing;
    this.selectedCourse = selectedCourse;
}

function submitForm() {
    // Retrieve values from input fields
    var firstName = document.getElementById("f_name").value;
    var lastName = document.getElementById("l_name").value;
    var dobDay = document.getElementById("Birthday_Day").value;
    var dobMonth = document.getElementById("Birthday_Month").value;
    var dobYear = document.getElementById("Birthday_Year").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var pinCode = document.getElementById("pinCode").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var hobbies = '';
    var hobbyCheckboxes = document.getElementsByName("hobbies");
    for (var i = 0; i < hobbyCheckboxes.length; i++) {
        if (hobbyCheckboxes[i].checked) {
            hobbies += hobbyCheckboxes[i].value + ', ';
        }
    }
    // Remove the trailing comma and space if any
    if (hobbies.length > 0) {
        hobbies = hobbies.substring(0, hobbies.length - 2);
    }
    var otherHobby = document.getElementById("Other_Hobby").value;

    // Retrieve values from qualification table
    var classXBoard = document.getElementById("ClassX_Board").value;
    var classXPercentage = document.getElementById("ClassX_Percentage").value;
    var classXYrOfPassing = document.getElementById("ClassX_YrOfPassing").value;

    var classXIIBoard = document.getElementById("ClassXII_Board").value;
    var classXIIPercentage = document.getElementById("ClassXII_Percentage").value;
    var classXIIXYrOfPassing = document.getElementById("ClassXII_YrOfPassing").value;

    var graduationBoard = document.getElementById("Graduation_Board").value;
    var graduationPercentage = document.getElementById("Graduation_Percentage").value;
    var graduationYrOfPassing = document.getElementById("Graduation_YrOfPassing").value;

    var mastersBoard = document.getElementById("Masters_Board").value;
    var mastersPercentage = document.getElementById("Masters_Percentage").value;
    var mastersYrOfPassing = document.getElementById("Masters_YrOfPassing").value;

    // Retrieve selected course
    var selectedCourse = document.querySelector('input[name^="Course"]:checked').value;

    // Create student object
    var student = new Student(firstName, lastName, dobDay, dobMonth, dobYear, email, mobileNumber, gender, address, city, pinCode, state, country, hobbies, otherHobby,
        classXBoard, classXPercentage, classXYrOfPassing,
        classXIIBoard, classXIIPercentage, classXIIXYrOfPassing,
        graduationBoard, graduationPercentage, graduationYrOfPassing,
        mastersBoard, mastersPercentage, mastersYrOfPassing,
        selectedCourse);

    // Display student object (you can modify this to do whatever you want)
    var studentJSON = JSON.stringify(student);
    console.log(studentJSON);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: studentJSON,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/student", requestOptions)
        .then(response => response.text())
        .then(result => Swal.fire(
            'Good job!',
            `Register Successfully ${firstName}`,
            'success'
          ))
        .catch(error => Swal.fire(
            'Good job!',
            `Register failed Try again ! ${firstName}`,
            'success'
          ));

}