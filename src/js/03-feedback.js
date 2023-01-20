const form = document.querySelector(".feedback-form");
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', resetForm)

function onFormInput(event) {

    const obj = {
    email: input.value,
    feedback: textarea.value,
}
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
   
}

onFormSave()
function onFormSave() {
    const getTexts = JSON.parse(localStorage.getItem('feedback-form-state'))
     if ( getTexts) {
        input.value = getTexts.email;
         textarea.value = getTexts.feedback;
    }
}

function resetForm(event) {
    event.preventDefault();
    console.log(localStorage.getItem('feedback-form-state'))
    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
    
}





