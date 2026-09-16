/* Contact Form Validation */
export function initFormValidation() {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');

  if (!form) return;

  const validators = {
    tipo: val => val !== '' || 'Selecciona el tipo de proyecto.',
    superficie: val => (val !== '' && Number(val) > 0) || 'Ingresa una superficie válida.',
    nombre: val => val.trim().length >= 2 || 'Ingresa tu nombre.',
    email: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) || 'Ingresa un email válido.'
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    Object.keys(validators).forEach(id => {
      const input = document.getElementById(id);
      const errorSpan = document.getElementById(`error-${id}`);
      const parent = input.parentElement;

      const result = validators[id](input.value);

      if (result !== true) {
        parent.classList.add('error');
        errorSpan.textContent = result;
        isValid = false;
      } else {
        parent.classList.remove('error');
        errorSpan.textContent = '';
      }
    });

    if (isValid) {
      form.reset();
      successMsg.style.display = 'block';
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 5000);
    }
  });
}
