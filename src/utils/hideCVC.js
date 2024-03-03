export const hideCVC = (cvc) => {

    for(let x = 0; x < cvc.length ; x++){
        cvc = cvc.replace(cvc[x],"*")
    }
    return cvc
}