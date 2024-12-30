//todays date
const date = new Date();

let day = date.getDate();
let month = date.getMonth() +1;
let year = date.getFullYear();

//inputs
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

//outputs
let yearOut = document.getElementById('yearOut');
let monthOut = document.getElementById('monthOut');
let dayOut = document.getElementById('dayOut');

//error
const error = document.querySelectorAll('.error');
const label = document.querySelectorAll('.text');

//button 
const button = document.querySelector('.arrow');

//input
const input = document.querySelectorAll('input');

button.addEventListener('click', () => {
    // Validate input first
    const dayValue = parseInt(dayInput.value);
    const monthValue = parseInt(monthInput.value);
    const yearValue = parseInt(yearInput.value);

    if (
        (1 <= dayValue && dayValue <= 31) &&
        (1 <= monthValue && monthValue <= 12) &&
        (1000 <= yearValue && yearValue <= year)
    ) {
        let years = year - yearValue;
        let months = month - monthValue;
        let days = day - dayValue;

        if (days < 0) {
            months -= 1;
            const previousMonth = new Date(year, month - 1, 0); // Last day of previous month
            days += previousMonth.getDate();
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        // Outputs
        yearOut.innerText = years;
        monthOut.innerText = months;
        dayOut.innerText = days;

        //remove error
        error.forEach(e => {
            e.innerText = 'Invalid entry';
            e.classList.remove('text');
        })
        label.forEach(p => {
            p.classList.remove('error');
        })
        input.forEach(i => {
            i.classList.remove('inputError')
        })
    } else {
        error.forEach(e => {
            e.innerText = 'Invalid entry';
            e.classList.add('text');
        })
        label.forEach(p => {
            p.classList.add('error');
        })
        input.forEach(i => {
            i.classList.add('inputError')
        })
    }
});