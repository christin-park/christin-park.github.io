window.onload = function() {
    checkFirstVisit();
};

function setVisitStatus() {
    localStorage.setItem('visitedBefore', 'true');
}

function checkFirstVisit() {
    if (localStorage.getItem('visitedBefore')) {
        currentTexts = returnText;
    }
    else {
        setVisitStatus();
    }
}

function countVisits() {
    let visitCount = localStorage.getItem('visitCount');

    if (visitCount) {
        visitCount = parseInt(visitCount) + 1;
    }
    else {
        visitCount = 1;
    }

    localStorage.setItem('visitCount', visitCount);
    return visitCount;
}

const numberOfVisits = countVisits();

const textContents = [
    "Hello! I'm a memory keeper.",
    "Looks like you want to visit some of Christin Park's memories.",
    "What would you like to know about?"
];

const returnText = [
    "Hello! I'm a memory keeper.",
    `Well, I guess you already know that. After all, you've been here ${numberOfVisits} times.`,
    "Wondering if I scavenged for more memories?",
    "Or perhaps you are revisiting some old ones?",
    "Well, whatever the case, I think the fact that you returned is captivating.",
    "These are some of the reasons why I love being a memory keeper!",
    "What would you like to know about?"
];

let currentTexts = textContents;
let currentIndex = 0;
let previousIndex = 0;
let currentText = '';
let characterIndex = 0;
let isTyping = false;

const textContentElement = document.querySelector('.text-content');
const nextArrow = document.getElementById('nextArrow');

function typeText() {
    if (characterIndex < currentTexts[currentIndex].length) {
        currentText += currentTexts[currentIndex][characterIndex];
        textContentElement.textContent = currentText;
        characterIndex++;
        setTimeout(typeText, 15);
    } else {
        isTyping = false;
        if (currentIndex === currentTexts.length - 1) {
            navButtons();
            nextArrow.style.display = 'none';
        }
    }
}

const returnArrows = document.querySelectorAll('.return');

returnArrows.forEach(returnArrow => {
    returnArrow.addEventListener('click', function() {
        delInteractDivs();
        let rightText = document.querySelector(".right-text");
        rightText.style.display = "flex";
        if (previousIndex >= 0 && previousIndex < currentTexts.length) {
            currentText = '';
            characterIndex = 0;
            isTyping = true;
            textContentElement.textContent = '';
            typeText();
        }
    });
});

nextArrow.addEventListener('click', () => {
    previousIndex = currentIndex;
    if (!isTyping) {
        if (currentIndex < currentTexts.length - 1) {
            currentIndex++;
            currentText = '';
            characterIndex = 0;
            isTyping = true;
            textContentElement.textContent = '';
            typeText();
        }
    }
});


function navButtons() {
    const navContent = [
        "About Christin Park",
        "Personal Projects",
        "Adventures"
    ];

    const navTo = [
        '1-about.html',
        '2-projects.html',
        '3-adventures.html'
    ]

    const navDiv = document.querySelector('.nav-div');

    navDiv.innerHTML = '';

    for (let i = 0; i < 3; ++i) {
        const nav1 = document.createElement('div');
        nav1.textContent = navContent[i];
        nav1.classList.add(`nav-${i}`);
        navDiv.appendChild(nav1);
        nav1.addEventListener('click', () => {
            window.location.href = navTo[i];
        });
    }
}

function scrollToElement(myElement) {
    const element = document.getElementById(myElement);
    if (element) {
      element.scrollIntoView({ behavior:'instant'});
    }
  }

//stop displaying curr divs before displaying new one
function delInteractDivs() {
    let interactDivs = document.getElementsByClassName("dialogue");
    for (let i = 0; i < interactDivs.length; i++) {
        interactDivs[i].style.display = "none";
    }

    let rightText = document.querySelector(".right-text");
    rightText.style.display = "none";
    
}

//claud
document.getElementById("claud-img").addEventListener("click", function() {
    let puzzleDiv = document.getElementById("claud-text");
    delInteractDivs();
    puzzleDiv.style.display = "flex";
});

//puzzle
document.getElementById("puzzle-img").addEventListener("click", function() {
    let puzzleDiv = document.getElementById("puzzle-text");
    delInteractDivs();
    puzzleDiv.style.display = "flex";
});

//cooking
document.getElementById("cooking-img").addEventListener("click", function() {
    let cookingDiv = document.getElementById("cooking-text");
    delInteractDivs();
    cookingDiv.style.display = "flex";
});

//sticker
document.getElementById("sticker-img").addEventListener("click", function() {
    let stickerDiv = document.getElementById("sticker-text");
    delInteractDivs();
    stickerDiv.style.display = "flex";
});

//moda
document.getElementById("moda-img").addEventListener("click", function() {
    let stickerDiv = document.getElementById("moda-text");
    delInteractDivs();
    stickerDiv.style.display = "flex";
});
  
//skyta
document.getElementById("skyta-img").addEventListener("click", function() {
    let stickerDiv = document.getElementById("skyta-text");
    delInteractDivs();
    stickerDiv.style.display = "flex";
});
  
//cookie jar
document.getElementById("cookie-jar-img").addEventListener("click", function() {
    let stickerDiv = document.getElementById("cookie-jar-text");
    delInteractDivs();
    stickerDiv.style.display = "flex";
});

//paper plane
document.getElementById("paper-crane-img").addEventListener("click", function() {
    let paperCraneDiv = document.getElementById("paper-crane-text");
    delInteractDivs();
    paperCraneDiv.style.display = "flex";
});


//hover cursor
const claudImages = document.querySelectorAll('.jump-animation');
if (all.classList.contains('fire-cursor')) {
    claudImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.cursor = 'pointer';
        });
    });
}


//FIRE
let fireImg = document.getElementById("fire-img");
let moopImg = document.getElementById("moop-img");
let moopDiv = document.getElementById("moop-text");
let poomImg = document.getElementById("poom-img");
let moopDialogue = document.getElementById("moop-dialogue");
let every = document.getElementById("every");
let newMoopTextDisplayed = false;

fireImg.addEventListener("mouseover", function() {
    delInteractDivs();
    moopDiv.style.display = "block";

    //fire cursor
    all.classList.add('fire-cursor');
});

//moop mouseover
moopImg.addEventListener("mouseover", function() {
    if (all.classList.contains('fire-cursor') && newMoopTextDisplayed === false) {
        moopDiv.style.display = "none"; 
        setTimeout(function() {
            moopDiv.style.display = "block";
        }, 70);
        delInteractDivs();
        moopDialogue.innerHTML = `"HEY!!! I live in this a bottle, so I don't have ANY water to spare! Visit my sister, Poom, she's in charge of the water delivery service here." <br><br>`;
        moopDialogue.innerHTML += "-Moop";
        newMoopTextDisplayed = true;
    }
});

//poom mouseover
poomImg.addEventListener("mouseover", function() {
    let poomDiv = document.getElementById("poom-text");
    let moopDiv = document.getElementById("moop-text");

    if (all.classList.contains('fire-cursor')) {
        delInteractDivs();
        poomDiv.style.display = "block";
        all.classList.remove('fire-cursor');
        moopDialogue.innerHTML = "HMPH... haven't you ever been told to not play around fire? This is a memory keeper service, not a playground!!! <br><br>";
        moopDialogue.innerHTML += "Well, I AM the (very) official firefighter in case people like YOU come along. So... go find some water I guess. <br><br>";
        moopDialogue.innerHTML += "-Moop";
        newMoopTextDisplayed = false;
    }
});

//instruments
document.getElementById("instruments-img").addEventListener("click", function() {
    let paperCraneDiv = document.getElementById("instruments-text");
    delInteractDivs();
    paperCraneDiv.style.display = "block";
});

//mask
document.getElementById("mask-img").addEventListener("click", function() {
    let maskDiv = document.getElementById("mask-text");
    delInteractDivs();
    maskDiv.style.display = "block";
});

//back button
const backButtonElements = document.querySelectorAll('.go-back');
backButtonElements.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href= '0-home.html';
        delInteractDivs();
        let rightText = document.querySelector(".right-text");
        rightText.style.display = "flex";
        if (previousIndex >= 0 && previousIndex < currentTexts.length) {
            currentText = '';
            characterIndex = 0;
            isTyping = true;
            textContentElement.textContent = '';
            typeText();
        }
    });
});

//wini
document.getElementById("wini-img").addEventListener("click", function() {
    let winiDiv = document.getElementById("wini-text");
    delInteractDivs();
    winiDiv.style.display = "block";
});

