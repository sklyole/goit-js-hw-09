const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  if (event.target.name) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

function completeForm() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const parseData = JSON.parse(savedData);
    form.email.value = parseData.email || '';
    form.message.value = parseData.message || '';
    formData.email = parseData.email || '';
    formData.message = parseData.message || '';
  }
}
completeForm();

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all field');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';

  form.reset();
});
