document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let age = document.getElementById('age').value.trim();
    let email = document.getElementById('email').value.trim();
    let errorMessages = '';

    if (!name) {
        errorMessages += 'El nombre es obligatorio.<br>';
    }

    if (!age || isNaN(age) || age <= 0) {
        errorMessages += 'La edad es obligatoria y debe ser un número válido.<br>';
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        errorMessages += 'El correo es obligatorio y debe tener un formato válido.<br>';
    }

    if (errorMessages) {
        document.getElementById('errorMessages').innerHTML = errorMessages;
    } else {
        document.getElementById('errorMessages').innerHTML = '';
        alert('Formulario enviado con éxito');
        // Aquí puedes agregar el código para enviar el formulario
    }
});