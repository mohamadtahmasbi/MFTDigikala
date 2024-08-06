document.addEventListener("DOMContentLoaded", () => {
  const countdownElements = {
    hours: document.querySelectorAll(".amazing__intro__countdown__number")[2],
    minutes: document.querySelectorAll(".amazing__intro__countdown__number")[1],
    seconds: document.querySelectorAll(".amazing__intro__countdown__number")[0],
  };

  let targetTime = 24 * 60 * 60; // 24 hours in seconds

  function toPersianDigits(num) {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return num.toString().replace(/\d/g, (d) => persianDigits[d]);
  }

  function updateCountdown() {
    let hours = Math.floor(targetTime / 3600);
    let minutes = Math.floor((targetTime % 3600) / 60);
    let seconds = targetTime % 60;

    countdownElements.hours.textContent = toPersianDigits(
      String(hours).padStart(2, "0")
    );
    countdownElements.minutes.textContent = toPersianDigits(
      String(minutes).padStart(2, "0")
    );
    countdownElements.seconds.textContent = toPersianDigits(
      String(seconds).padStart(2, "0")
    );

    if (targetTime > 0) {
      targetTime--;
      setTimeout(updateCountdown, 1000);
    }
  }

  updateCountdown();
});
