import ajax from "./ajax";

export default async function (username, password) {
  const response = await ajax("/templates/");
  const cookie = response.cookie.replace("; path=/", "");
  const token = response.body.querySelector("[action='../login.php']>[name='securetoken']").value;

  const login = await ajax("/login.php", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Cookie": cookie
    },
    body: "UserLogin=" + username + "&UserPassword=" + password + "&securetoken=" + token
  });
  return login.body.querySelector("[name='securetoken']") ? "error" : { cookie: cookie };
};