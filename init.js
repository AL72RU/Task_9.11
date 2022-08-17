
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('genderOutput').innerText = `${initPerson.gender},`;
    document.getElementById('professionOutput').innerText = `${initPerson.profession},`;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
};

document.getElementById('btn_1').addEventListener('click', function () {
    window.onload();
})

document.getElementById('btn_2').addEventListener('click', function () {
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('middleNameOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('professionOutput').innerText = "";
    document.getElementById('birthYearOutput').innerText = "";
})