const str2ab = str => new Uint8Array(str.split("").map(i => i.charCodeAt())).buffer;
const ab2str = ab => Array.from(new Uint8Array(ab)).map(i => String.fromCharCode(i)).join("");

async function encrypt(str, iv) {
  var hex = await crypto.subtle.digest({ name: "SHA-256" }, str2ab(iv));
  var key = await crypto.subtle.importKey("raw", hex, { name: "AES-GCM" }, false, ["encrypt"]);
  var encrypt = await crypto.subtle.encrypt({ name: "AES-GCM", iv: hex }, key, str2ab(str));
  return encrypt;
};

async function decrypt(input, iv) {
  var hex = await crypto.subtle.digest({ name: "SHA-256" }, str2ab(iv));
  var key = await crypto.subtle.importKey("raw", hex, { name: "AES-GCM" }, false, ["decrypt"]);
  var decrypt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: hex }, key, input);
  return ab2str(decrypt);
};

export default async function (url, init, isfile) {
  var input = await encrypt(JSON.stringify({ url, init }), navigator.userAgent);
  const response = await fetch("https://data.mcsmds.tk/sapi", {
    method: "POST",
    body: input
  });
  var output = JSON.parse(await decrypt(await response.arrayBuffer(), navigator.userAgent));
  if (!isfile) output.body = new DOMParser().parseFromString(decodeURIComponent(escape(output.body)), "text/html");
  return output;
};