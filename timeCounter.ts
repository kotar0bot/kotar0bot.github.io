function getDateFormat(date: Date): string{
  return date.getFullYear().toString() + "/" +
         (date.getMonth() + 1).toString() + "/" +
         date.getDate().toString() + " " +
         date.getHours().toString() + ":" +
         date.getMinutes().toString() + ":" +
         date.getSeconds().toString() + "." +
         date.getMilliseconds().toString();
}

function countUp(){
  document.getElementById("timeCounter").textContent = getDateFormat(new Date());
  setTimeout(() => {
    countUp();
  }, 1);
}

countUp();
