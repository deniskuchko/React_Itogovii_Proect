import { AES, enc } from "crypto-js";

export const passwordCoding = (message) => {
  const ciphertext = AES.encrypt(`${message}`, "123").toString();

  return ciphertext;
};
export const passwordDisCoding = (comeingMessage) => {
  const bytes = AES.decrypt(`${comeingMessage}`, "123");
  const originalText = bytes.toString(enc.Utf8);
  return originalText;
};
