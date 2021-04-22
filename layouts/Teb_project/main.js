// alert('hi');
// console.log('hi');
// const workBtnContainer = document.querySelector(".work_categories");

// const projectContainer = document.querySelector(".work__projects");
// const projects = document.querySelectorAll(".project");
// alert('hi');
// workBtnContainer.addEventListener("click", (e) => {
  
//   const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
//   if (filter == null) {
//     return;
//   }

//   const active = document.querySelector(".category__btn.selected");
//   active.classList.remove("selected");
//   const target =
//     e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
//   target.classList.add("selected");

//   projectContainer.classList.add("anim-out");
//   setTimeout(() => {
//     projects.forEach((project) => {
//       if (filter === "*" || filter === project.dataset.type) {
//         project.classList.remove("invisible");
//       } else {
//         project.classList.add("invisible");
//       }
//     });
//     projectContainer.classList.remove("anim-out");
//   }, 350);
// });

