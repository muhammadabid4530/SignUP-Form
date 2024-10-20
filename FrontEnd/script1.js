

const port = 8000;
const Users = () => {
  const container = document.getElementById("Options");
  const fetchUsers = () => {
    fetch(`http://localhost:${port}/read`)
      .then(res => res.json())
      .then(data => {
        container.innerHTML = "";
        data.forEach(element => {
          container.innerHTML += `<option value="${element.name}">${element.name}</option>`;
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  };
  fetchUsers();
  return null;
}

// FormData 
const FormData = async () => {
  const Name = document.getElementById("name").value;
  const RollNo = parseInt(document.getElementById("rollNo").value);
  const MobileNo = parseInt(document.getElementById("mobileNo").value);
  const Email = document.getElementById("email").value;
  const token=localStorage.getItem('token');
  const response = await fetch(`http://localhost:${port}/studentData`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: Name, rollNo: RollNo, mobileNo: MobileNo, email: Email,userId:token })
  })
  const data = await response.json();
  console.log(data);
  if (response.ok) {
    alert("Data Added successfully ")
  }
  else {
    alert('Error signing up');
  }

}

// logout
const logout=()=>{
  localStorage.removeItem('token');
  window.location.href = './index.html';
}

// output
const Output = async () => {
  const output = document.getElementById('output');
  output.innerHTML=""
  const user = localStorage.getItem('token');
  const response = await fetch(`http://localhost:${port}/output`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId: user })
  }).then((res)=>{
    return res.json()
  }).then((res)=>{
    res.forEach((data)=>{
      output.innerHTML+=`<tr> <td>${data.name}</td> <td>${data.rollNo}</td> <td>${data.mobileNo}</td> <td>${data.email}</td> </tr>`
    })
  })
     
};
