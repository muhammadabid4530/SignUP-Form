const port = 8000;
function showSignUpForm() {
  document.getElementById('displayForm').style.display = 'none';
  document.getElementById('signUpForm').style.display = 'block';
  document.getElementById('signInForm').style.display = 'none';
}
function showSignInForm() {
  document.getElementById('displayForm').style.display = 'none';
  document.getElementById('signUpForm').style.display = 'none';
  document.getElementById('signInForm').style.display = 'block';
}

// SignUP
const signUp = async () => {
  const Name = document.getElementById("username").value;
  const Name1 = document.getElementById("name").value;
  const Password = document.getElementById("password").value;
  const response = await fetch(`http://localhost:${port}/signUp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userName: Name, password: Password,name:Name1 })
  })
  const data = await response.json();
  console.log(data);
  if (response.ok) {
    alert("Data Added successfully ")
  }
  else {
    alert(data.error || 'Error signing up');
  }

}
// SignIn
const signIn = async () => {
  const userName = document.getElementById("username1").value;
  const password = document.getElementById("password1").value;

  try {
    const response = await fetch(`http://localhost:${port}/signIn/${userName}/${password}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    const data = await response.json();
    console.log("Response:", response);
    console.log("Data:", data);

    if (response.ok) {
      localStorage.setItem('token',data.token)
      alert("Login successful",data)
      window.location.href = 'index1.html';
    } 
    else {
      alert(data.message || 'Error signing in');
    }
  } catch (error) {
    console.error('Error:', error);
    alert("An error occurred. Please try again later.");
  }
};
