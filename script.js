function generatePassword(){
    const length = document.getElementById('largo').value;

    if (length < 6) {
        alert('La longitud de la contraseña debe ser al menos de 6 caracteres.');
        return;
    }

    if (length > 20) {
        alert('La longitud de la contraseña debe ser de maximo 20 caracteres.');
        return;
    }

    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()+~?><-=';
    
    let charset = letras;

    /* */

    if (document.getElementById('numeros').checked) {
        charset += numeros;
    }
    if (document.getElementById('simbolos').checked) {
        charset += simbolos;
    }

    /* */


    let password = ''; /* variable password vacia */

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').innerText = password;

}
    