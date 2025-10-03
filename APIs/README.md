# 🌐 Practicing APIs and Non-JSON Data Formats

This guide summarizes key learnings and demo URLs for practicing API calls, compression formats, and handling non-JSON data like images and videos.

---

## 📦 JSON APIs for Practice

| API Name         | Description                                | Demo URL                                      |
|------------------|--------------------------------------------|-----------------------------------------------|
| JSONPlaceholder  | Fake REST API for prototyping              | `https://jsonplaceholder.typicode.com/posts`  |
| ReqRes           | Simulated user data and auth               | `https://reqres.in/api/users`                 |
| DummyJSON        | E-commerce data (products, carts, users)   | `https://dummyjson.com/products`              |
| Fake Store API   | Products, categories, carts, users         | `https://fakestoreapi.com/products`           |

---

## 🧠 Utility & Fun APIs

| API Name         | Description                                | Demo URL                                      |
|------------------|--------------------------------------------|-----------------------------------------------|
| Bored API        | Random activity suggestions                | `https://www.boredapi.com/api/activity`       |
| Advice Slip API  | Random advice generator                    | `https://api.adviceslip.com/advice`           |
| Cat Facts        | Random cat facts                           | `https://catfact.ninja/fact`                  |
| Dog CEO API      | Random dog images                          | `https://dog.ceo/api/breeds/image/random`     |

---

## 🕒 Time & Location APIs

| API Name         | Description                                | Demo URL                                      |
|------------------|--------------------------------------------|-----------------------------------------------|
| World Time API   | Current time by timezone                   | `http://worldtimeapi.org/api/timezone/Asia/Kolkata` |
| IPinfo           | IP geolocation (limited free usage)        | `https://ipinfo.io/json`                      |

---

## 🗜️ Compression Practice (GZIP & Brotli)

### Tools to Test Compression:
- [GZIP Test](https://www.giftofspeed.com/gzip-test/)
- [Brotli Test](https://tools.keycdn.com/brotli-test)

### Node.js Example:
```js
const express = require('express');
const compression = require('compression');
const app = express();

app.use(compression()); // Enables GZIP
app.get('/', (req, res) => {
  res.send('Hello with GZIP!');
});

app.listen(3000);
```

---

## 🖼️ Non-JSON Data: Images

| Format | Demo URL |
|--------|----------|
| PNG    | `https://via.placeholder.com/300.png` |
| WebP   | `https://www.gstatic.com/webp/gallery/1.webp` |
| JPG    | `https://via.placeholder.com/300.jpg` |
| SVG    | `https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_VS_SVG.svg` |

### JavaScript Fetch Example:
```js
fetch('https://via.placeholder.com/300.png')
  .then(res => res.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  });
```

---

## 🎥 Non-JSON Data: Videos

| Format | Demo URL |
|--------|----------|
| MP4    | `https://www.w3schools.com/html/mov_bbb.mp4` |
| WebM   | `https://www.w3schools.com/html/mov_bbb.webm` |

### HTML Example:
```html
<video width="320" height="240" controls>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  <source src="https://www.w3schools.com/html/mov_bbb.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

---

## 🔊 Non-JSON Data: Audio

| Format | Demo URL |
|--------|----------|
| MP3    | `https://www.w3schools.com/html/horse.mp3` |

### JavaScript Fetch Example:
```js
fetch('https://www.w3schools.com/html/horse.mp3')
  .then(res => res.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play();
  });
```

---

## 📄 Non-JSON Data: PDF

| Format | Demo URL |
|--------|----------|
| PDF    | `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf` |

### JavaScript Fetch Example:
```js
fetch('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf')
  .then(res => res.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  });
```

---

## 📊 Other Formats & MIME Types

| Format        | MIME Type                     | Typical Use Case                                |
|---------------|-------------------------------|--------------------------------------------------|
| HTML          | `text/html`                   | Web pages, rendered directly in browsers         |
| Plain Text    | `text/plain`                  | Simple text responses, logs, or messages         |
| XML           | `application/xml` or `text/xml`| Data exchange, especially in legacy systems      |
| JSON          | `application/json`            | APIs, structured data for web apps               |
| CSV           | `text/csv`                    | Tabular data, spreadsheets, exports              |
| PDF           | `application/pdf`             | Documents, reports, forms                        |
| Image         | `image/png`, `image/jpeg`, etc| Photos, icons, graphics                          |
| Audio         | `audio/mpeg`, `audio/ogg`, etc| Music, podcasts, sound effects                   |
| Video         | `video/mp4`, `video/webm`, etc| Streaming, tutorials, media playback             |
| ZIP           | `application/zip`             | Bundled files, downloads                         |
| Binary        | `application/octet-stream`    | Raw data, file downloads                         |

### Fetch Example for CSV:
```js
fetch('https://people.sc.fsu.edu/~jburkardt/data/csv/airtravel.csv')
  .then(res => res.text())
  .then(csv => console.log(csv));
```

---

## 🧪 Inspecting Responses in Browser

### JavaScript Console Example:
```js
fetch('https://jsonplaceholder.typicode.com/posts/3')
  .then(res => res.json())
  .then(data => console.log(data));
```

### For Binary Data:
```js
fetch('https://via.placeholder.com/300.png')
  .then(res => res.blob())
  .then(blob => console.log(blob));
```

### DevTools Tips:
- Open **Network tab**
- Reload or run fetch
- Click request → Check **Headers** and **Content-Type**

---

## ✅ Next Steps

- Try combining APIs into a dashboard
- Use Postman or curl for deeper testing
- Explore headers, status codes, and caching
