import requests
import sys

login_url = "https://deimos.dgi.uanl.mx/cgi-bin/wspd_cgi.sh/eselcarrera.htm"

session = requests.Session()
session.headers = {
  "Content-Type": "application/x-www-form-urlencoded",
  "Referer": "https://deimos.dgi.uanl.mx/cgi-bin/wspd_cgi.sh/login.htm",
  "Origin": "https://deimos.dgi.uanl.mx/cgi-bin/wspd_cgi.sh/login.htm",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36",
};

formData = {
    "HTMLUsuCve": sys.argv[1],
    "HTMLPassword": sys.argv[2],
    "HTMLPrograma": "",
    "HTMLTipCve": "01"
}

res = session.post(login_url, params=formData)
print(res.text, res.status_code)
