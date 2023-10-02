import axios from "axios";

export default axios.create({
	// baseURL: "https://api.troubleshoot.co.bd/v1/",
	baseURL: "https://troubleshootprovider.asthaall.com/api/v1/",
	headers: {
		"X-Requested-With": "XMLHttpRequest",
		"Content-Type": "application/json",
	},
	withCredentials: true,
});
