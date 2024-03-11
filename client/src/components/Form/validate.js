const emailRegexp = new RegExp(/\S+@\S+\.\S+/)

//const passwordRegexp = new RegExp (/^[a-z0-9_-]{6,18}$/)
const passwordRegexp = new RegExp(/\d/)

const validate = (userData)=> {
    let errors = {}

    if(!emailRegexp.test(userData.email) || !userData.email || userData.email.length >= 35) {
        errors.email = 'El mail no puede estar vacio, debe ser un email valido y ademas debe tener mas de 35 caracteres'
    }
    else if(userData.password.length < 6 || userData.password.length >10 || !passwordRegexp.test(userData.password)) {
        errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres'
    }

    return errors

}

export default validate