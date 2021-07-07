const https = require("https");
const chalk = require("chalk");

function checker(username) {
  // Returns a JSON.
  const url = `https://instagram.com/${username}/?__a=1`;

  https.get(url, (res) => {
    console.log(res);
    if (res.statusCode === 404) {
      console.log(chalk.red(`${chalk.bold(username)} exists.`));
    }
    console.log(chalk.blue(`${chalk.green(username)} not exists.`));
  });
}

module.exports = checker;
