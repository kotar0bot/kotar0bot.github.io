function calcAge(birthdayStr) {
    var date = new Date();
    var dStr = '' + date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2);
    return Math.floor((parseInt(dStr) - parseInt(birthdayStr)) / 10000);
}
;
document.getElementById("age").textContent = calcAge('19921002').toString();
