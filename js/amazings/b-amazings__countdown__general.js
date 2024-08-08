/////////////// Running Out

document.addEventListener("DOMContentLoaded", () => {
  const countdownContainers = document.querySelectorAll(
    ".amazing__runningout__countdown"
  );

  function toPersianDigits(num) {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return num.toString().replace(/\d/g, (d) => persianDigits[d]);
  }

  countdownContainers.forEach((container) => {
    const countdownElements = {
      hours: container.querySelectorAll(
        ".amazing__runningout__countdown__number"
      )[2],
      minutes: container.querySelectorAll(
        ".amazing__runningout__countdown__number"
      )[1],
      seconds: container.querySelectorAll(
        ".amazing__runningout__countdown__number"
      )[0],
    };

    let targetTime = 24 * 60 * 60; // 24 hours in seconds

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
});

/////////////// Custom

document.addEventListener("DOMContentLoaded", () => {
  const countdownContainers = document.querySelectorAll(
    ".amazing__custom__countdown"
  );

  function toPersianDigits(num) {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return num.toString().replace(/\d/g, (d) => persianDigits[d]);
  }

  countdownContainers.forEach((container) => {
    const countdownElements = {
      hours: container.querySelectorAll(
        ".amazing__custom__countdown__number"
      )[2],
      minutes: container.querySelectorAll(
        ".amazing__custom__countdown__number"
      )[1],
      seconds: container.querySelectorAll(
        ".amazing__custom__countdown__number"
      )[0],
    };

    let targetTime = 24 * 60 * 60; // 24 hours in seconds

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
});