import ajax from "./ajax";

export default async function (cookie, id) {
  const file = await ajax("/home/imail/remove.php?CampusMailID=" + id, {
    headers: {
      "Cookie": cookie
    }
  });
  if (file.body.querySelector("[name='securetoken']")) return "error";

  return true;
};

/*
POST
/home/imail/remove.php
Content-Type: application/x-www-form-urlencoded
Cookie:PHPSESSID=ns0brn8kmirt296c4qjairbhj0
CampusMailID%5B%5D=3623730

GET
/home/imail/remove.php?
CampusMailID=3623826
Cookie: PHPSESSID=ns0brn8kmirt296c4qjairbhj0
*/