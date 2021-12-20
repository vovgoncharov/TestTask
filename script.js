"use strict";
const form = document.querySelector(".form-own");
const first = document.querySelector("#number-one");
const second = document.querySelector("#number-two");
const res = document.querySelector(".res");
const select = document.querySelector("#dropdown");

select.addEventListener("change", (e) => {
    select.value;
});

const getForm = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (select.value === "*") {
            let result = parseInt(first.value) * parseInt(second.value);
            res.innerHTML = `${result}`;
        } else if (select.value === "/") {
            let result = parseInt(first.value) / parseInt(second.value);
            res.innerHTML = `${result}`;
        } else if (select.value === "+") {
            let result = parseInt(first.value) + parseInt(second.value);
            res.innerHTML = `${result}`;
        } else if (select.value === "-") {
            let result = parseInt(first.value) - parseInt(second.value);
            res.innerHTML = `${result}`;
        }
    });
};

getForm();
