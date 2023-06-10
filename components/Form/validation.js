const validator = (data) => {
    let errors = {};
// email validation
    if(!data.email) {
        errors.e1 = 'ingresa tu email'
    } else if (!data.email.includes('@')) {
            errors.e2 = 'email invalido' 
        } else if (data.email.length > 35) {
                errors.e3 = 'tu email debe tener un maximo de 35 caracteres'
            };

// password validation
    if(!/\d+/.test(data.password)){
        errors.p1= 'La contraseña debe tener un numero'
    } else if (data.password.length < 6 || data.password.length > 10){
        errors.p2='La contraseña debe tener entre 6 y 10 caracteres'
    }

    return errors;
}

export default validator