// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique impedit quod magnam, tenetur voluptatem cumque. Repellat, saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet a dolore excepturi dignissimos consequatur voluptate?",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum tempora expedita corrupti sapiente reprehenderit laborum. Omnis a et repellendus sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet a dolore excepturi dignissimos consequatur voluptate?",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos eius vel assumenda magni doloribus deserunt quo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet a dolore excepturi dignissimos consequatur voluptate?",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque magni vitae nulla nihil eius sint minima ad soluta maxime expedita? Aut fugiat aliquam perspiciatis placeat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet a dolore excepturi dignissimos consequatur voluptate?",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  // show next person
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    detail();
  });

  //   show prev person
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    detail();
  });

  //   show random person
  randomBtn.addEventListener("click", () => {
    randomNum();
    detail();
  });

  //   genrate random number between 0 to 3
  function randomNum() {
    let num = Math.floor(Math.random() * reviews.length);
    currentItem = num;
  }

  //   show the person based on the item
  function detail() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
});
