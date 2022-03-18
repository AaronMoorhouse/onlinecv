var ageText = $("#age-text");
var birthday = new Date("07/22/1995");
var age = calculateAge(birthday);

ageText.html(age + " Years");

function calculateAge(birthday) {
    var ageDiff = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}