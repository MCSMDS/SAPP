import ajax from "./ajax";

export default async function (cookie, id, filename) {
  const file = await ajax("/home/imail/downloadattachment.php?CampusMailID=" + id + "&b_filename=" + encodeURIComponent(btoa(unescape(encodeURIComponent(filename)))), {
    headers: {
      "Cookie": cookie
    }
  }, true);
  const byte = file.body.split("").map(char => char.codePointAt(0));
  const utf8 = Uint8Array.from(byte);
  return new Blob([utf8.buffer]);
};