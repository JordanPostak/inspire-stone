// utils.js

// Function to generate a unique ID
const guid = () => {
  let uniqueId = parseInt(Math.random() * Number.MAX_SAFE_INTEGER);
  uniqueId = uniqueId
    .toString(18)
    .slice(0, 5)
    .padStart(5, "0")
    .toLocaleUpperCase();
  return uniqueId;
};

// Function to hash a password
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(buffer));
  const hashedPassword = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return hashedPassword;
}

export { guid, hashPassword };