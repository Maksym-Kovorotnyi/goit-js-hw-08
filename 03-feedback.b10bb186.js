!function(){var e,t=document.querySelector(".feedback-form"),a=document.querySelector("input"),r=document.querySelector("textarea");t.addEventListener("input",(function(e){var t={email:a.value,feedback:r.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))})),t.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),(e=JSON.parse(localStorage.getItem("feedback-form-state")))&&(a.value=e.email,r.value=e.feedback)}();
//# sourceMappingURL=03-feedback.b10bb186.js.map
