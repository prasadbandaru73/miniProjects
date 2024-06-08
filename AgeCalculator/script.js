let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let currentDate = date.getDate();
let todayDate = document.getElementById("todayDate");
let errorMsg = document.querySelector(".error");
todayDate.innerText = getDate();
function getDate() {
    if(currentDate < 10) currentDate = '0' + currentDate;
    if(currentMonth < 10) currentMonth = "0" + currentMonth;
    return `${currentDate}/${currentMonth}/${currentYear}`;
}
errorMsg.style.display = "none";
let button = document.getElementById("age");

button.addEventListener('click', () => {
    let userInput = document.querySelector(".userInput").value;
    const userDOB = new Date(userInput);
    let userDate = userInput.substring(0,2);
    let userMonth = userInput.substring(3,5);
    let userYear = userInput.substring(6);
    if (userDOB.getTime() !== userDOB.getTime()) {
      errorMsg.style.display = "inline";
      document.querySelector(".userInput").value = "";
      setTimeout(() => window.location.reload(),3000);
    }else {
        const ageYear = date.getFullYear() - userDOB.getFullYear();
        const ageMonth = Math.abs(userDOB.getMonth() - date.getMonth());
        const ageDay = Math.abs(userDOB.getDate() - date.getDate());
        let card = document.querySelector(".card");
        let months = ageMonth > 1 ? "months" : "month";
        let days = ageDay > 1 ? "days" : "day";
        card.style.fontSize = "2rem";
        card.innerText = `You are ${ageYear} years ${ageMonth} ${months} and ${ageDay} ${days} old`;
        let backButton = document.getElementById("back");
        backButton.style.display = "inline";
        backButton.style.fontSize = "2rem";
        backButton.addEventListener("click", () => {
          window.location.reload();
        })
    }
});
