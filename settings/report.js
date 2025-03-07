import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

function toISOFormat(dateTimeString) {
  var today = new Date();
  var day = today.getDate() + "";
  var month = (today.getMonth() + 1) + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";

  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);

  function checkZero(data){
    if(data.length == 1){
      data = "0" + data;
    }
    return data;
  }

  return day + "-" + month + "-" + year + "_" + hour + minutes + seconds;
}

export function generateReport(data, testName) {
  let dateNow = new Date();
  dateNow = toISOFormat(dateNow);
  return {
    [`reports/${testName}_${dateNow}.html`]: htmlReport(data),
  };
}