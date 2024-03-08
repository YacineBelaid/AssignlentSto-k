import express from "express";
import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { url, urlData } from "./models/url.model";
const app = express();
const port = 4000;

app.use((req: Request, res: Response, next: any) => {
  const allowedOrigins = ["http://localhost:4000", "http://localhost:5173"];
  const origin = req.headers.origin as string;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/////////// DATA ////////////
const data: { [key: string]: urlData } = {};
const reversedata: { [key: string]: urlData } = {};
///////////// UTILITIES ////////////
function generateURL(urlLink: string): urlData {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear().toString();
  const urlToStore: urlData = {
    Shortlink: "http://localhost:5173/" + nanoid(),
    URL: urlLink,
    Clicks: 0,
    CreatedAt: `${day}/${month}/${year}`,
    UpdatedAt: `${day}/${month}/${year}`,
  };
  return urlToStore;
}

function getUrlByUrl(URL: string): urlData | null {
  return reversedata[URL] || null;
}
function getUrlByShortlink(ShortLink: string): urlData | null {
    return data[ShortLink] || null;
  }

function postUrl(urlLink: string): urlData {
  let shortenUrl = getUrlByUrl(urlLink);
  if (shortenUrl === null) {
    shortenUrl = generateURL(urlLink);
    data[shortenUrl.Shortlink] = shortenUrl;
    reversedata[shortenUrl.URL] = shortenUrl;
  }
  return shortenUrl;
}

//////// ROUTER ///////////

app.get("/", (req: Request, res: Response) => {
  return res.status(301).redirect("http://localhost:5173");
});

app.get("/list", (req: Request, res: Response) => {
  if (Object.keys(data).length === 0) {
    return res.status(204).redirect("http://localhost:5173");
  }
  return res.status(200).json(data);
});

app.get("/url", (req: Request, res: Response) => {
    console.log("reverseData : ",reversedata)
    console.log("Data : ",data)
    const ShortLink  = req.query.url;
    console.log(ShortLink)
    const shortenUrl = getUrlByShortlink('' + ShortLink);
    console.log(shortenUrl)
    if (shortenUrl) {
      const redirectURL = shortenUrl.URL;
      shortenUrl.Clicks++;
      return res.status(200).json(redirectURL);
    }
    return res.status(201).json({ message: "URL not found" });
  });

app.post("/url", (req: Request, res: Response) => {
  const url = req.body.userUrl;
  const shortenUrl = postUrl(url);
  return res.status(200).json({ shortenUrl });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
