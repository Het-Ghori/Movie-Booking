const handleLogin = async () => {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    // console.log(email, pass);

    try {
        let data = await getRequest('user')
        console.log(data);

        data.map((value) => {
            if (value['email'] == email && value['password'] === pass) {
                console.log("Hello!");
                window.location.replace("./admin/admin-cinema.html");
            }
            //  if (value['email'] == "ankit@gmail.com" && value['password'] === 1234) {
            //     window.location.assign("./admin/admin-cinema.html");
            // }
        })
    } catch (error) {
        console.log("error");
    }
}

const userLogRef = document.getElementById("loginForm").addEventListener("submit", handleLogin)