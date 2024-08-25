// Reglas de encriptación
const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Inversión de las reglas de encriptación
const decryptionRules = Object.fromEntries(
    Object.entries(encryptionRules).map(([key, value]) => [value, key])
);

function processText() {
    const text = document.getElementById('textInput').value;
    const action = document.getElementById('action').value;
    const resultField = document.getElementById('result');
    
    let result;
    if (action === 'encrypt') {
        result = encrypt(text);
    } else if (action === 'decrypt') {
        result = decrypt(text);
    }
    
    resultField.value = result;
}

function encrypt(text) {
    return text.split('').map(char => encryptionRules[char] || char).join('');
}

function decrypt(text) {
    for (const [key, value] of Object.entries(decryptionRules)) {
        text = text.split(key).join(value);
    }
    return text;
}

function copyToClipboard() {
    const resultField = document.getElementById('result');
    resultField.select();
    document.execCommand('copy');
}
