function encodeAndDecodeMessages() {
    let encodeButton = document.querySelectorAll('button')[0];
    let decodeButton = document.querySelectorAll('button')[1];
    let textInput = document.querySelectorAll('textarea')[0];
    let textOutput = document.querySelectorAll('textarea')[1];

    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

    function ascii(a){
        return a.charCodeAt(0)
    }
    function encode() {
        let text = textInput.value;
        let encodedMessage = '';
        for (let i = 0; i < text.length; i++) {
            encodedMessage += String.fromCharCode(ascii(`${text[i]}`) + 1);
        }
        textInput.value = '';
        textOutput.value = encodedMessage;
    }
    function decode() {
        let text = textOutput.value;
        let decodedMessage = '';
        for (let i = 0; i < text.length; i++) {
            decodedMessage += String.fromCharCode(ascii(`${text[i]}`) - 1);
        }
        textOutput.value = decodedMessage;
    }
}