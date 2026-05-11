---
dg-publish: true
---
# HTML – HyperText Markup Language

> [[#1. Definition|1. Definition]]
  [[#2. Features of HTML|2. Features of HTML]]
  [[#3. Structure of an HTML Document|3. Structure of an HTML Document]]
  [[#4. Common HTML Tags|4. Common HTML Tags]]
  [[#5. HTML Attributes|5. HTML Attributes]]
  [[#6. Types of Elements|6. Types of Elements]]
  [[#7. Semantic vs Non-Semantic Tags|7. Semantic vs Non-Semantic Tags]]
  [[#8. Versions of HTML|8. Versions of HTML]]


## 1. Definition

1. HTML stands for **HyperText Markup Language**.
2. It is the **standard markup language** used to create and design webpages.
3. HTML is used to **define the structure and layout** of a webpage using various tags and elements.
4. It is not a programming language; it does not contain logic or conditions like a programming language.
5. HyperText refers to the ability to link to other webpages through hyperlinks.
6. Markup Language means it uses predefined tags to mark up text content for web display.

---

## 2. Features of HTML

1. Easy to learn and use.
2. Platform-independent and supported by all web browsers.
3. Allows the inclusion of text, images, audio, video, and links.
4. Provides structure to web documents.
5. Enables the creation of user forms for input.
6. Supports integration with CSS for styling and JavaScript for interactivity.

---

## 3. Structure of an HTML Document

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

### Explanation:

1. `<!DOCTYPE html>` – Declares the document as HTML5.
2. `<html>` – Root element of the HTML page.
3. `<head>` – Contains metadata such as the title and links to stylesheets.
4. `<title>` – Specifies the title shown in the browser tab.
5. `<body>` – Contains the content visible to the user (text, images, etc.).

---

## 4. Common HTML Tags

|Tag|Description|
|---|---|
|`<h1>` to `<h6>`|Defines headings (h1 is largest)|
|`<p>`|Defines a paragraph|
|`<a>`|Creates a hyperlink|
|`<img>`|Displays an image|
|`<br>`|Inserts a line break|
|`<hr>`|Inserts a horizontal line|
|`<div>`|Container for block elements|
|`<span>`|Container for inline content|
|`<ul>` / `<ol>`|Unordered and ordered lists|
|`<li>`|List item|
|`<table>`|Creates a table|
|`<form>`|Creates a form|
|`<input>`|Input field inside a form|
|`<button>`|Button element|

---

## 5. HTML Attributes

1. Attributes provide **additional information** about HTML elements.
2. They are always specified in the **start tag**.
3. Common attributes include:
    - `id`: Unique identifier
    - `class`: Classification of elements
    - `src`: Specifies the path of an image or media
    - `href`: Specifies the URL of a link
    - `alt`: Alternative text for an image
    - `style`: Inline CSS styling
    - `title`: Tooltip text shown on hover

---

## 6. Types of Elements

1. **Block-level Elements**: Start on a new line and take up the full width.
    - Examples: `<div>`, `<p>`, `<h1>`, `<table>`, `<form>`
2. **Inline Elements**: Do not start on a new line and take only as much width as necessary.
    - Examples: `<span>`, `<a>`, `<img>`, `<strong>`, `<em>`

---

## 7. Semantic vs Non-Semantic Tags

1. **Semantic Tags**: Clearly describe their meaning in a human- and machine-readable way.
    - Examples: `<header>`, `<footer>`, `<article>`, `<section>`, `<nav>`
2. **Non-Semantic Tags**: Do not clearly describe their content.
    - Examples: `<div>`, `<span>`
---

## 8. Versions of HTML

1. HTML 1.0 – Basic version with limited functionality.
2. HTML 2.0 – First standard version.
3. HTML 3.2 – Introduced scripting support and tables.
4. HTML 4.01 – Introduced CSS support and scripting improvements.
5. HTML5 – Latest version with support for audio, video, canvas, new semantic elements, and APIs.
