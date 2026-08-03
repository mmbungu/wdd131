const REVIEW_KEY = "reviewCount";

let reviewCount = Number(localStorage.getItem(REVIEW_KEY)) || 0;
reviewCount += 1;
localStorage.setItem(REVIEW_KEY, reviewCount.toString());

document.querySelector("#reviewCount").textContent = reviewCount;
