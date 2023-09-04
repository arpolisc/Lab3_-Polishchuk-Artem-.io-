function alwaysFail() {
  return "Помилка!";
}

class AlwaysError {
  constructor(message) {
    this.message = message || "Помилка!";
  }

  throwError() {
    throw new Error(this.message);
  }
}

function buggyCode() {
  for (let i = 0; i < 10; i++) {
    console.log("Цей код неправильно працює!");
  }
}

module.exports = {
  alwaysFail,
  AlwaysError,
  buggyCode,
};
