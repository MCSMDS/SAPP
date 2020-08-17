import ajax from "./ajax";

export default async function (cookie) {
  const file = await ajax("/home/imail/folder.php", {
    headers: {
      "Cookie": cookie
    }
  });
  if (file.body.querySelector("[name='securetoken']")) return "error";

  var html = file.body.querySelectorAll('.iMailsubject');
  var label = [];
  html.forEach((el, i) => {
    if (i % 2 === 1) return;
    const name = el.text;
    const id = parseInt(el.getAttribute("href").split("=")[1]);
    label.push({ name, id });
  });

  return label;
};