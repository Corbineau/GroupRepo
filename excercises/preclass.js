const isValidPAss = (password) => {
    if (password.length < 8) {
        return false
    }
    hasUpperLower(password).then(() => {
        console.log(true);
    }).catch(() => {
        console.log(false);
    })
    }


const hasUpperLower = (password) => {
    return new Promise((resolve, reject) => {
        let hasLower;
        let hasUpper;
        for (let i = 0; i < password.length; i++) {
            if (password[i].toLowerCase === password[i]) {
                hasLower = true;
            }
            if (password[i].toUpperCase === password[i]) {
                hasUpper = true;
            }
        }
        if (hasUpper && hasLower) {
            resolve(true);
        } else {
            reject(false);
        }
    });
 }