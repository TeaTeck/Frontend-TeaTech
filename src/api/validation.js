export function emailValidation(email) {
    var check = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(check)) {
        return true;
    } else {
        return false;
    }
}