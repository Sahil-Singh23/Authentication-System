function signup() {
  var username = document.getElementById("signUp-username").value;
  var email = document.getElementById("signUp-email").value;
  var password = document.getElementById("signUp-password").value;
  if (!username || !email || !password) {
    alert("Please fill all the fields ");
    return;
  }
  axios
    .post("http://localhost:3000/signup", {
      username: username,
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response.data);
      alert("Signup successful!");
      window.location.href = "/signin";
    })
    .catch((error) => {
      console.error("Signup failed:", error);

      // Handle different types of errors
      if (error.response) {
        // Server responded with error status
        const errorMessage = error.response.data.message || "Signup failed";
        alert(errorMessage);
      } else if (error.request) {
        // Network error
        alert("Network error. Please check your connection.");
      } else {
        // Something else went wrong
        alert("An unexpected error occurred. Please try again.");
      }
    });
}

async function signin() {
  var username = document.getElementById("signin-username").value;
  var password = document.getElementById("signin-password").value;

  if (!username || !password) {
    alert("Please fill all the fields ");
    return;
  }
  try {
    const response = await axios.post("http://localhost:3000/signin", {
      username: username,
      password: password,
    });

    localStorage.setItem("token", response.data.token);
    alert("you are signed in");
    window.location.href = "/dash";
  } catch (err) {
    console.log(err);

    // Handle different types of errors
    if (err.response) {
      // Server responded with error status (401, 500, etc.)
      const errorMessage = err.response.data.message;
      alert(errorMessage);
    } else if (err.request) {
      // Network error - no response received
      alert("Network error. Please check your connection.");
    } else {
      // Something else went wrong
      alert("An unexpected error occurred. Please try again.");
    }
  }
}
