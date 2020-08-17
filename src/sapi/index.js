import Getcookie from "./Getcookie";
import Getmails from "./Getmails";
import Getlabel from './Getlabel';
import Getcontent from "./Getcontent";
import Getremove from "./Getremove";
import Getmove from './Getmove';
import Getfile from "./Getfile";

export default {
  login: async function (username = window.getStorage("username"), password = window.getStorage("password")) {
    const cookie = await Getcookie(username, password);
    if (cookie === "error") return;
    window.setStorage("username", username);
    window.setStorage("password", password);
    window.setStorage("cookie", cookie.cookie);
    return window.getStorage("cookie");
  }, mail: async function (id = 0) {
    const mail = await Getmails(window.getStorage("cookie"), id);
    if (mail === "error") {
      const cookie = await this.login();
      const mail = await Getmails(cookie, id);
      return mail;
    }
    return mail;
  }, label: async function () {
    const result = await Getlabel(window.getStorage("cookie"));
    if (result === "error") {
      const cookie = await this.login();
      const result = await Getlabel(cookie);
      return result;
    }
    return result;
  }, content: async function (id) {
    const content = await Getcontent(window.getStorage("cookie"), id);
    if (content === "error") {
      const cookie = await this.login();
      const content = await Getcontent(cookie, id);
      return content;
    }
    return content;
  }, moveto: async function (id, form, to) {
    const result = await Getmove(window.getStorage("cookie"), id, form, to);
    if (result === "error") {
      const cookie = await this.login();
      const result = await Getmove(cookie, id, form, to);
      return result;
    }
    return result;
  }, remove: async function (id) {
    const result = await Getremove(window.getStorage("cookie"), id);
    if (result === "error") {
      const cookie = await this.login();
      const result = await Getremove(cookie, id);
      return result;
    }
    return result;
  }, dawnload: async function (filename) {
    const blob = await Getfile(window.getStorage("cookie"), window.getStorage("contentid"), filename);
    const a = document.createElement("a");
    a.download = filename;
    a.href = URL.createObjectURL(blob);
    a.click();
  }
};