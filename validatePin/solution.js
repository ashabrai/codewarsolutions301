function validatePIN (pin) {
    let atm =  /^(\d{4}|\d{6})$/.test(pin);
    
    return atm;
    }