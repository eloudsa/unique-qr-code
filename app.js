const express = require("express");
const useragent = require("useragent");
const qrcode = require("qrcode");
const app = express();
require("dotenv").config();

// generate the QR code to route to the app
app.get("/", (req, res) => {
	qrcode.toDataURL("https://qr42.onrender.com/pcardapp", function (err, url) {
		// display source code bigger and centered in the page with a title
		res.send(
			`<h1 style="text-align: center; font-size: 2em;">
				Scan to install PCard app
			</h1>
			<img src="${url}" style="display: block; margin-left: auto; margin-right: auto; width: 25%;"/>`
		);
	});
});

// redirect to the app store
app.get("/pcardapp", (req, res) => {
	const agent = useragent.parse(req.headers["user-agent"]);
	switch (agent.os.family.toLowerCase()) {
		case "ios":
			res.writeHead(302, {
				location: `https://apps.apple.com/app/${process.env.IOS_APP_ID}`,
			});
			break;
		case "android":
			res.writeHead(302, {
				location: `https://play.google.com/store/apps/details?id=${process.env.ANDROID_APP_ID}`,
			});
			break;
		default:
			res.send("Device Type is unknown!");
	}
	res.end();
});

// listen for requests
const portNumber = process.env.PORT || 80;
app.listen(portNumber);
