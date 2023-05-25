const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(
  `<!DOCTYPE html><body><h1 id="heading">Hello World</h1></body></html>`
);
global.window = dom.window;
global.document = dom.window.document;

require("./main");
const heading = document.getElementById("heading");

test("checks the message", () => {
  expect(heading.textContent).toBe("Hello World");
});
