import ajax from "./ajax";

export default async function (cookie, ids) {
  const link = ["viewfolder.php?FolderID=2", "viewfolder.php?FolderID=0", "viewfolder.php?FolderID=1", "trash.php", "viewfolder.php?FolderID=" + ids][ids > 3 ? 4 : ids];

  let sizenum = await ajax("/home/imail/" + link, {
    headers: {
      "Cookie": cookie
    }
  });
  if (sizenum.body.querySelector("[name='securetoken']")) return "error";
  sizenum = sizenum.body.querySelector(".tablebottom td[width='100%']")?.textContent.split("總數 ")[1];
  if (!sizenum) return [];

  let text = await ajax("/home/imail/" + link, {
    headers: {
      "Cookie": cookie + "; ck_page_size=" + sizenum
    }
  });
  text.body.querySelector(".tablebottom").parentNode.remove();

  var mail = [];
  text.body.querySelectorAll(".tabletop~tr").forEach(function (el) {
    if (ids === 0 || ids > 3) {
      let title = el.querySelector("[class^='iMailsender']").textContent;
      let subtitle = el.querySelector("[class^='iMailsubject']").textContent.trim();
      let id = el.querySelector("[class^='iMailsubject']").getAttribute("href").split("=")[1].split("&")[0];
      mail.push({ title, subtitle, id });
    } else if (ids === 1) {
      let title = el.querySelector("[title]").getAttribute("title");
      let subtitle = el.querySelector("[class^='iMailsubject']").textContent.trim();
      let id = el.querySelector("[class^='iMailsubject']").getAttribute("href").split("=")[1].split("&")[0];
      mail.push({ title: "收件者: " + title, subtitle, id });
    } else if (ids === 2) {
      let subtitle = el.querySelector("[class^='iMailsubject']").textContent.trim();
      mail.push({ title: "草稿", subtitle });
    } else if (ids === 3) {
      let title = el.querySelector("[class^='iMailsender']").textContent;
      let subtitle = el.querySelector("[class^='iMailsubject']").textContent.trim();
      mail.push({ title, subtitle });
    };
  });
  return mail;
};