const axios_module = require("axios");
const iconv = require("iconv-lite");
const fs = require("node:fs");

const axios = axios_module.create({
  timeout: 30000,
  responseType: "text",
});

axios.interceptors.request.use(
  (request) => {
    request.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Referer: "https://deimos.dgi.uanl.mx/cgi-bin/wspd_cgi.sh/login.htm",
      Origin: "https://deimos.dgi.uanl.mx/cgi-bin/wspd_cgi.sh/login.htm",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36",
    };
    request.responseType = "arraybuffer";
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (value) => {
    value.data = iconv.decode(value.data, "ISO-8859-1");
    return value;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const formData = new URLSearchParams();
formData.append("HTMLUsuCve", "2191792");
formData.append("HTMLPassword", "Linuxpc.arch3");
formData.append("HTMLPrograma", "");
formData.append("HTMLTipCve", "01");

const response = axios
  .post(
    "https://deimos.dgi.uanl.mx/cgi-bin/wspd_cgi.sh/eselcarrera.htm",
    formData,
  )
  .then((out) => fs.writeFileSync("out.html", out.data));
