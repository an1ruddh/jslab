//  Write JavaScript code to encrypt the text using Caesar Cipher technique. Display the encrypted text. Prompt the user for input and the shift pattern.                                                                                
function caesarCipherEncrypt(text, shift) {
  let encryptedText = "";
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    if (char.match(/[a-z]/i)) {
      const code = text.charCodeAt(i);
      let encryptedChar = "";
      
      if (char === char.toLowerCase()) {
        encryptedChar = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      } else {
        encryptedChar = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      
      encryptedText += encryptedChar;
    } else {
      encryptedText += char;
    }
  }
  
  return encryptedText;
}

const text = prompt("Enter the text to encrypt:");
const shift = parseInt(prompt("Enter the shift pattern:"));

const encryptedText = caesarCipherEncrypt(text, shift);
console.log("Encrypted text:", encryptedText);

