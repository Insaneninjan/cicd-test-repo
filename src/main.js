// モジュールのimport
import { greet } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("message");
  const name = "World";
  element.innerText = greet(name); // テンプレート文字列を使用
});

document.getElementById("heading").innerText = "Hello World!!!";
