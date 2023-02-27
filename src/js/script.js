//#region general

/* Toast notification message when LOGIN button in modal is clicked. */

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)
    
    toast.show()
  })
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

const cube = document.getElementById('arrow');

window.addEventListener('load', () => {
  cube.classList.add('active');
});
window.onload = function() {
  setTimeout(function() {
    var heading = document.querySelectorAll("#my-heading");
    heading.forEach(function(element) {
      element.classList.add("text-customv2");
    });
  }, 900);
}
//#endregion project.html

const element = document.querySelector('#my-element');

element.addEventListener('mouseenter', () => {
  element.classList.add('cursor-shadow');
});

element.addEventListener('mouseleave', () => {
  element.classList.remove('cursor-shadow');
});
