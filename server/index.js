const str2ab = str => new Uint8Array(str.split("").map(i => i.charCodeAt())).buffer;
const ab2str = ab => Array.from(new Uint8Array(ab)).map(i => String.fromCharCode(i)).join("");

async function encrypt(str, iv) {
  var hex = await crypto.subtle.digest({ name: "SHA-256" }, str2ab(iv));
  var key = await crypto.subtle.importKey("raw", hex, { name: "AES-GCM" }, false, ["encrypt"]);
  var encrypt = await crypto.subtle.encrypt({ name: "AES-GCM", iv: hex }, key, str2ab(str))
  return encrypt;
}

async function decrypt(input, iv) {
  var hex = await crypto.subtle.digest({ name: "SHA-256" }, str2ab(iv));
  var key = await crypto.subtle.importKey("raw", hex, { name: "AES-GCM" }, false, ["decrypt"]);
  var decrypt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: hex }, key, input)
  return ab2str(decrypt);
}

addEventListener("fetch", event => event.respondWith(handleRequest(event.request)));

async function handleRequest(request) {
  if (!["https://sapp.mcsmds.tk/", "https://sapp.mcsmds.tk/?pwa"].includes(request.header.referer) ||
    request.url != "https://data.mcsmds.tk/sapi" ||
    request.isBot);//return new Response(null, { status: 418 });
  if (request.method == "POST" /* && request.header["content-type"].includes("text/plain") */) {
    var input = JSON.parse(await decrypt(await request.arrayBuffer(), request.header["user-agent"]));
    var response = await fetch("http://eclass.hebron.edu.hk" + input.url, input.init)
    var output = await encrypt(JSON.stringify({ cookie: response.cookie, body: ab2str(await response.arrayBuffer()) }), request.header["user-agent"]);
    return new Response(output, { headers: { "Access-Control-Allow-Origin": "https://sapp.mcsmds.tk" } })
  }
  return new Response(null, { status: 418 })
}

Object.defineProperty(Request.prototype, "header", {
  get: function () {
    let header = {};
    for (const [key, value] of this.headers) {
      header[key] = value;
    }
    return header;
  }
});

Object.defineProperty(Response.prototype, "cookie", {
  get: function () {
    return this.headers.getAll("set-cookie").pop(-1);
  }
});

Object.defineProperty(Request.prototype, "isBot", {
  get: function () {
    return !this.header["accept-language"] || !this.header["user-agent"];
  }
});