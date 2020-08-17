import ajax from "./ajax";

export default async function (cookie, id, form, to) {
  const nform = ["2", "0", "1", "2", form][form > 3 ? 4 : form];
  const file = await ajax("/home/imail/changefolder.php", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Cookie": cookie
    },
    body: "CampusMailID[]=" + id + "&FolderID=" + nform + "&targetFolderID=" + to
  });

  if (file.body.querySelector("[name='securetoken']")) return "error";

  return true;
};