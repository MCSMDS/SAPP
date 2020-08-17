import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Link, Typography } from "@material-ui/core";
import Parser from "html-react-parser";
import ajax from "./ajax";

function rewrite(html) {
  const options = {
    replace: ({ name, attribs, children }) => {
      if (name && name === "a") {
        return <Link href={attribs.href}>{Parser.domToReact(children, options)}</Link>;
      }
      if (name && name === "p") {
        return <Typography>{Parser.domToReact(children, options)}</Typography>
      }
    }
  };
  return renderToStaticMarkup(Parser(html, options));
}

export default async function (cookie, id) {
  const file = await ajax("/home/imail/viewmail_content.php?CampusMailID=" + id, {
    headers: {
      "Cookie": cookie
    }
  });
  if (file.body.querySelector("[name='securetoken']")) return "error";

  var [time, sender, , , title] = file.body.querySelectorAll(".tabletext");
  title = title.textContent;
  sender = sender.textContent;
  time = time.querySelector("#PastDateDiv").getAttribute("title");

  var files = [];
  file.body.querySelectorAll("img[src='/images/file.gif']").forEach(function (el) {
    files.push(el.nextElementSibling.textContent);
  });

  var content = file.body.querySelector(".style1").parentNode;
  content.querySelectorAll("[class]").forEach(el => el.removeAttribute("class"));
  content.querySelectorAll("[lang]").forEach(el => el.removeAttribute("lang"));

  content.querySelectorAll("[style]").forEach(el => { el.style.fontFamily = ""; el.style.lineHeight = "" });
  console.log(content);
  content = rewrite(content.innerHTML);

  return { title, sender, time, files, content };
};