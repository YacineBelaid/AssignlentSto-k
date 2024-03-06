"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nanoid_1 = require("nanoid");
const app = (0, express_1.default)();
const port = 4000;
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
const data = {};
function generateURL() {
    return (0, nanoid_1.nanoid)();
}
function getUrl(urlLink) {
    return data[urlLink] || null;
}
function postUrl(urlLink) {
    let shortenUrl = getUrl(urlLink);
    if (!shortenUrl) {
        shortenUrl = generateURL();
        data[urlLink] = shortenUrl;
    }
    return shortenUrl;
}
app.get('/url/:urlLink', (req, res) => {
    const { urlLink } = req.params;
    const shortenUrl = getUrl(urlLink);
    if (shortenUrl) {
        return res.status(200).json({ shortenUrl });
    }
    return res.status(404).json({ message: 'URL not found' });
});
app.get('/list', (req, res) => {
    return res.status(200).json(Object.entries(data));
});
app.post('/', (req, res) => {
    const { url } = req.body;
    const shortenUrl = postUrl(url);
    return res.status(200).json({ shortenUrl });
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map