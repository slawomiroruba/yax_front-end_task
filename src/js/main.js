/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Yax | Software House Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia :)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const form = document.querySelector("#form");
const inputName = document.querySelector("#userName");
const errorName = document.querySelector(".userName");
const inputSurname = document.querySelector("#userSurname");
const errorSurname = document.querySelector(".userSurname");
const inputEmail = document.querySelector("#userEmail");
const errorEmail = document.querySelector(".userEmail");
const errorChoice = document.querySelector(".userChoice");

inputName.addEventListener("input", e => {
    const val = inputName.value;
    const reg = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,}$/u;

    if (!reg.test(val)) {
        inputName.classList.remove("field-correct");
        inputName.classList.add("field-error");
        errorName.classList.add("display-block");
    } else {
        inputName.classList.remove("field-error");
        inputName.classList.add("field-correct");
        errorName.classList.remove("display-block");
    }
});

inputSurname.addEventListener("input", e => {
    const val = inputSurname.value;
    const reg = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,}$/u;

    if (!reg.test(val)) {
        inputSurname.classList.remove("field-correct");
        inputSurname.classList.add("field-error");
        errorSurname.classList.add("display-block");
        
    } else {
        inputSurname.classList.remove("field-error");
        inputSurname.classList.add("field-correct");
        errorSurname.classList.remove("display-block");
    }
});

inputEmail.addEventListener("input", e => {
    const val = inputEmail.value;
    const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
    if (!reg.test(val)) {
        inputEmail.classList.remove("field-correct");
        inputEmail.classList.add("field-error");
        errorEmail.classList.add("display-block");

    } else {
        inputEmail.classList.remove("field-error");
        inputEmail.classList.add("field-correct");
        errorEmail.classList.remove("display-block");

    }
});



form.addEventListener("submit", e => {
    e.preventDefault();
    
    const checkboxes = form.querySelectorAll("input[type=checkbox]");
    let checkedCount = 0;

    for (const chk of checkboxes) {
        for (const chk of checkboxes) {
            if (chk.checked) {
                checkedCount++;
            }
        }
    }


    if (checkedCount > 0) {
        swal("Przyjęliśmy twoje zgłoszenie!", "Odezwiemy się tak szybko jak to możliwe!", "success");
        inputName.classList.remove("field-correct");
        inputSurname.classList.remove("field-correct");
        inputEmail.classList.remove("field-correct");
        errorChoice.classList.remove("display-block");
        form.reset();
    } else {
        errorChoice.classList.add("display-block");
        console.log(errorChoice);
    }
})