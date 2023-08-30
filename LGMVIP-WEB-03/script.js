
var Image;
var image = function (event) {
    Image = URL.createObjectURL(event.target.files[0]);
  };
  const Name = document.getElementById('Name')
  const Email = document.getElementById('Email')
  const website = document.getElementById('website')
  const btn = document.getElementById('btn');
  const Male = document.getElementById('Male')
  const Female = document.getElementById('Female')
  const form = document.querySelector('form');
  const cards = document.getElementById('cards');
  const resetbtn = document.getElementById('resetbtn');
  btn.addEventListener('click', function () {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let values = []
    checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
    });
  
    if (!Name.value || !Email.value || !website.value) {
      alert('Please enter all fields!')
    }
    else {
      cards.innerHTML += `
    <div class="card">
    <div class="card-body">
    <p class="text"><b>Name : </b>${Name.value}</p>
    <p class="text"><b>Gender : </b>${Male.checked ? Male.value : Female.checked ? Female.value : 'Others'}</p>
    <p class="text"><b>Email : </b>${Email.value}</p>
    <p class="text"><b>LinkedIn : </b>${website.value}</p>
    <p class="text"><b>Skills : </b>${values}</p>
    </div>
    <div class="image">
        <img src='${Image}' alt="Image">
      </div>
    </div>
    `
      form.reset()
      selectImage = null;
    }
  });
  resetbtn.addEventListener('click', function () {
    selectImage = null;
    cards.innerHTML="";
  
  });