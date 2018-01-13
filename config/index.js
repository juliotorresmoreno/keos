module.exports = {
	"isDev": false,
	"server": {
		"port": 3000,
		"secure": true,
		"key": "certs/key.pem",
		"cert": "certs/cert.pem",
		"password": null
	},
	"rooms": {
		"maxClients": 0
	},
	"stunservers": [
		{ "urls": "stun:stun.l.google.com:19302" }
	],
	"turnservers": [

	],
};
