//#region general


/* Login validation & Toast notification message on successful LOGIN in the modal */
const modalForm = document.getElementById('modal-form')
const username = modalForm.querySelector('#username')
const password = modalForm.querySelector('#password')
const errorElement = modalForm.querySelector('#error')
const loginButton = modalForm.querySelector('#liveToastBtn')

// Different Login validation
loginButton.addEventListener('click', (e) => {
  let messages = []
  if (username.value === '' || username.value == null) {
    console.log(username.value);
    messages.push('Name is required')
  }

  if (password.value.length <= 3) {
    messages.push('Password must be longer than 3 characters')
  }
  else if (password.value !== 'PassW') {
    messages.push('Password or Username is incorrect')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

  //Successful login validation with Toast notification
  else if (password.value === 'PassW') {
    const toastLiveExample = document.getElementById('liveToast')
    loginButton.setAttribute('data-bs-dismiss', 'modal');
    loginButton.click();
    
  
      const toast = new bootstrap.Toast(toastLiveExample)
      toast.show()
    

    //Change navbar login button to username & sign out button
    const loginNavbar = document.getElementById('loginNavbar')
    loginNavbar.classList.add('user')
    loginNavbar.innerHTML = ` ${username.value}  <a onclick="signOut()"><i class="bi bi-box-arrow-right" style="cursor: pointer;"></i></a>`

    //Close modal after successful login
  }
})

function signOut() {
  const loginNavbar = document.getElementById('loginNavbar')
  loginNavbar.classList.remove('user')
  loginNavbar.innerHTML = `<button class="btn btn-custom btn-outline-secondary text-white" data-bs-toggle="modal"
  data-bs-target="#exampleModalToggle">Log in</button>`

  loginButton.removeAttribute('data-bs-dismiss', 'modal');
}

//#endregion general

//#region index.html

/* for scroll animation */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
//#endregion index.html

//#region project.html

/* arrow on project page. */

const arrow = document.getElementById('arrow');

window.addEventListener('load', () => {
  arrow.classList.add('active');
});
window.onload = function () {
  setTimeout(function () {
    var heading = document.querySelectorAll("#my-heading");
    heading.forEach(function (element) {
      element.classList.add("text-customv2");
    });
  }, 900);
}
//#endregion project.html

