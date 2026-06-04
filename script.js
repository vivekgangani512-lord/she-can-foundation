function submitForm() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;

    if (name === "" || email === "" || msg === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Thank you for volunteering with She Can Foundation!");

    document.getElementById("volunteerForm").reset();

    return false;
}