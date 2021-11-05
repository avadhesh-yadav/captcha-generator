//create captcha 
function captchaGenerator() {
    let cap = new Array('a', 'v', 'd', 's', 'Y', 'A', '0', '1', '2', 'D', 'V');
    let a = cap[Math.floor(Math.random() * cap.length)];
    let b = cap[Math.floor(Math.random() * cap.length)];
    let c = cap[Math.floor(Math.random() * cap.length)];
    let d = cap[Math.floor(Math.random() * cap.length)];
    let e = cap[Math.floor(Math.random() * cap.length)];

    let result = a + "" + b + "" + c + "" + d + "" + e;
    document.getElementById('createCaptcha').value = result;
}
//is valid
function isvalid() {
    let captcha = removeSpaces(document.getElementById('createCaptcha').value);
    let input = removeSpaces(document.getElementById('inputcaptcha').value);
    if (captcha == input) {
        return true;
    } else {
        return false;
    }
}
//remove space
function removeSpaces(s) {
    return s.split(" ").join('');
}