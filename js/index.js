let nav = document.querySelector("nav"),
  lastScroll = 0,
   links = document.querySelectorAll("nav .links a"),
    nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    slides = document.querySelectorAll('.sc-carousel-item'),
    indecatorsEle = document.querySelectorAll(".indecators li"),
    popUpPart = document.querySelector(".popup .part"),
    popUpBox = document.querySelector(".popup .box"),
    popUpContent = document.querySelector(".popup .content"),
    breakfastRow = document.querySelector("#pills-BreakFast  .row"),
    lunchRow = document.querySelector("#pills-Lunch .row"),
    dinnerRow = document.querySelector("#pills-Dinner .row"),
    drinksRow = document.querySelector("#pills-Drinks .row"),
    detailsContent = document.querySelector('.popup[data-popup-name="details"] .content'),
    detailsList = [],
    detailsIndex = 0;
     

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    nav.classList.remove("hide", "color");
  } else if (currentScroll > lastScroll) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
    nav.classList.add("color");
    changeActive();
  }

  lastScroll = currentScroll;
});



nextBtn.addEventListener('click', function () {
  let current = document.querySelector('.sc-carousel-item.active');
  let next = current.nextElementSibling;

  while (next && !next.classList.contains('sc-carousel-item')) {
    next = next.nextElementSibling;
  }

  if (!next) {
    next = document.querySelector('.sc-carousel-item');
  }

  current.classList.remove('active');
  next.classList.add('active');
});

prevBtn.addEventListener('click', function () {
  let current = document.querySelector('.sc-carousel-item.active');
  let prev = current.previousElementSibling;

  while (prev && !prev.classList.contains('sc-carousel-item')) {
    prev = prev.previousElementSibling;
  }

  if (!prev) {
    let allSlides = document.querySelectorAll('.sc-carousel-item');
    prev = allSlides[allSlides.length - 1];
  }

  current.classList.remove('active');
  prev.classList.add('active');
});


indecatorsEle.forEach(function (indecator, index) {
  indecator.addEventListener('click', function () {
    let currentSlide = document.querySelector('.sc-carousel-item.active');
    let currentIndecator = document.querySelector('.indecators li.active');

    currentSlide.classList.remove('active');
    currentIndecator.classList.remove('active');

    slides[index].classList.add('active');
    indecator.classList.add('active');
  });
});



popUpPart.addEventListener("click" , function(e){
  e.stopPropagation();
})
popUpBox.addEventListener("click" , function(e){
  e.stopPropagation();
})
popUpContent.addEventListener("click" , function(e){
  e.stopPropagation();
})
BreakFast.forEach(function (item) {
  breakfastRow.innerHTML += `
    <div class="col-lg-6 box">
      <div class="item">
        <div class="row element mt-3">
          <div class="col-3 photo">
            <div class="item">
              <img src="images/${item.images[0]}" alt="${item.name}">
              <div class="layout">
                <i class="fa-regular fa-square-plus" onclick="openDetails(${item.id})"></i>
              </div>
            </div>
          </div>
          <div class="col-9 part">
            <div class="item">
              <div class="info">
                <div class="head">
                  <h4>${item.name}</h4>
                  <div class="lines">
                    <span></span>
                    <span></span>
                  </div>
                  <h4>$${item.price.toFixed(2)}</h4>
                </div>
                <p>${item.miniDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

Lunch.forEach(function(item){
  lunchRow.innerHTML +=`
   <div class="col-lg-6 box">
      <div class="item">
        <div class="row element mt-3">
          <div class="col-3 photo">
            <div class="item">
              <img src="images/${item.images[0]}" alt="${item.name}">
              <div class="layout">
                <i class="fa-regular fa-square-plus" onclick="openDetails(${item.id})"></i>
              </div>
            </div>
          </div>
          <div class="col-9 part">
            <div class="item">
              <div class="info">
                <div class="head">
                  <h4>${item.name}</h4>
                  <div class="lines">
                    <span></span>
                    <span></span>
                  </div>
                  <h4>$${item.price.toFixed(2)}</h4>
                </div>
                <p>${item.miniDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
})

Dinner.forEach(function(item){
  dinnerRow.innerHTML +=`
   <div class="col-lg-6 box">
      <div class="item">
        <div class="row element mt-3">
          <div class="col-3 photo">
            <div class="item">
              <img src="images/${item.images[0]}" alt="${item.name}">
              <div class="layout">
                <i class="fa-regular fa-square-plus" onclick="openDetails(${item.id})"></i>
              </div>
            </div>
          </div>
          <div class="col-9 part">
            <div class="item">
              <div class="info">
                <div class="head">
                  <h4>${item.name}</h4>
                  <div class="lines">
                    <span></span>
                    <span></span>
                  </div>
                  <h4>$${item.price.toFixed(2)}</h4>
                </div>
                <p>${item.miniDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
})

Drinks.forEach(function(item){
  drinksRow.innerHTML +=`
   <div class="col-lg-6 box ">
      <div class="item">
        <div class="row element mt-3">
          <div class="col-3 photo">
            <div class="item">
              <img src="images/${item.images[0]}" alt="${item.name}">
              <div class="layout">
                <i class="fa-regular fa-square-plus" onclick="openDetails(${item.id})"></i>
              </div>
            </div>
          </div>
          <div class="col-9 part">
            <div class="item">
              <div class="info">
                <div class="head">
                  <h4>${item.name}</h4>
                  <div class="lines">
                    <span></span>
                    <span></span>
                  </div>
                  <h4>$${item.price.toFixed(2)}</h4>
                </div>
                <p>${item.miniDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
})

function contentDetails() {
  let item = detailsList[detailsIndex];

  detailsContent.innerHTML = `
    <i class="fa-regular fa-circle-xmark exit" onclick="closePupup('details')"></i>
    <div class="title">
      <h4>SPECIAL SELECTION</h4>
      <img src="images/separator.svg" class="img-fluid" alt="">
    </div>
    <h2>${item.name}</h2>
    <div class="photo">
      <img src="images/${item.images[0]}" alt="${item.name}">
      <span class="price">$${item.price.toFixed(2)}</span>
      <button class="prev" onclick="changeDetails(-1)"><i class="fa-solid fa-chevron-left"></i></button>
      <button class="next" onclick="changeDetails(1)"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
    <p>${item.description}</p>
  `;
}

function openDetails(id) {
  let clicked = allMenu.find(function (item) {
    return item.id === id;
  });

  detailsList = allMenu.filter(function (item) {
    return item.type === clicked.type;
  });

  detailsIndex = detailsList.findIndex(function (item) {
    return item.id === id;
  });

  contentDetails();
  openPupup("details");
}

function changeDetails(step) {
  detailsIndex = (detailsIndex + step + detailsList.length) % detailsList.length;
  contentDetails();
}