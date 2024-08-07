const handleSubmit = async () => {
    // console.log("handleRegistration");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;

    let data = {
        name: name,
        email: email,
        password,
        dob
    }

    try {
        const response = await postRequest('user', data);
        console.log(response);
        // alert("You're Registered Successfully..");

        window.location.replace("../login.html");
    } catch (error) {
        console.log(error);
    }
    event.preventDefault();
}

const regFormRef = document.getElementById("signUpForm").addEventListener("submit", handleSubmit);