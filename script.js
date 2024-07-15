function generatePassword(){
    const length = document.getElementById('length').value;

    if (length < 6) {
        alert('Password length must be at least 6 characters.');
        return;
    }

    if (length > 20) {
        alert('Password length can be maximum 20 characters.');
        return;
    }

    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()+~?><-=';
    
    let charset = letters;

    /* */

    if (document.getElementById('numbers').checked) {
        charset += numbers;
    }
    if (document.getElementById('symbols').checked) {
        charset += symbols;
    }

    /* */


    let password = ''; 

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').innerText = password;

}
    
