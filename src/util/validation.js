export function emailValidation(email) {
    var check = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(check)) {
        return true;
    } else {
        return false;
    }
}

export function formatarTelefone(numero) {
    const formatado = numero.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    return formatado;
}

export function formatarCPF(cpf) {
    const formatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return formatado;
}