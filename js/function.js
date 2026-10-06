function openPupup(pupupName) {
    let pupUpEle = document.querySelector(`.popup[data-popup-name="${pupupName}"]`);

    pupUpEle.classList.add("active");
    setTimeout(function () {
        pupUpEle.classList.add("show");
    }, 10);
}
function closePupup(pupupName) {
    let pupUpEle = document.querySelector(`.popup[data-popup-name="${pupupName}"]`);

    pupUpEle.classList.remove("show");
    setTimeout(function () {
        pupUpEle.classList.remove("active");
    }, 300);
}

function changeActive() {
  links.forEach(function (link) {
    let section = document.querySelector(link.getAttribute("href")),
        top = section.offsetTop - 150,
        bottom = top + section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < bottom) {
      links.forEach(function (item) {
        item.classList.remove("active");
      });
      link.classList.add("active");
    }
  });
}
