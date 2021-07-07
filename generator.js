/**
 * @function generator
 * @description Generate a random username
 *
 * @param {Number} len - username length
 * @returns {String}
 */
function generator(len = 5) {
  // Set characters, numbers and symbols that instagram accepts
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789_.";
  let username = "";

  for (let i = 0; i < len; i++) {
    username += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return username;
}

module.exports = generator;
