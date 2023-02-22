// CDN - Content Delivery Network

const daysElement = document.querySelector("#timer-days-value");
const hoursElement = document.querySelector("#timer-hours-value");
const minutesElement = document.querySelector("#timer-minutes-value");
const secondsElement = document.querySelector("#timer-seconds-value");

const startCourseDateTime = moment(
  "01-03-2023 20:00:00",
  "DD-MM-YYYY HH:mm:ss"
);
const intervalCancelToken = setInterval(countdown, 1000);

function countdown() {
  const dateNow = moment();

  const days = startCourseDateTime.diff(dateNow, "days");
  const hours = startCourseDateTime.diff(dateNow.add(days, "days"), "hours");
  const minutes = startCourseDateTime.diff(
    dateNow.add(hours, "hours"),
    "minutes"
  );
  const seconds = startCourseDateTime.diff(
    dateNow.add(minutes, "minutes"),
    "seconds"
  );

  daysElement.innerText = days;
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;

  if ([days, hours, minutes, seconds].every((element) => element <= 0)) {
    clearInterval(intervalCancelToken);
    [daysElement, hoursElement, minutesElement, secondsElement].forEach(
      (element) => {
        element.style.color = "red";
      }
    );
  }
}

//NPM - Node Package Manager
