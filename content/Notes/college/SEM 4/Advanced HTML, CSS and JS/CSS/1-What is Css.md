---
dg-publish: true
---

# CSS – Cascading Style Sheets

- [[#1. Introduction to CSS|1. Introduction to CSS]]
- [[#2. Types of Style Sheets|2. Types of Style Sheets]]
	- [[#2. Types of Style Sheets#1. Inline CSS|1. Inline CSS]]
	- [[#2. Types of Style Sheets#2. Internal/embedded CSS|2. Internal/embedded CSS]]
	- [[#2. Types of Style Sheets#3. External CSS|3. External CSS]]
- [[#3. CSS Selectors|3. CSS Selectors]]
- [[#4. Using Class and Span Tag|4. Using Class and Span Tag]]
	- [[#4. Using Class and Span Tag#Using `class` Attribute:|Using `class` Attribute:]]
	- [[#4. Using Class and Span Tag#Using `span` Tag:|Using `span` Tag:]]
- [[#5. Text Properties in CSS|5. Text Properties in CSS]]
- [[#6. Color and Background Properties|6. Color and Background Properties]]
- [[#7. Border and Shading|7. Border and Shading]]
- [[#8. Box and Block Properties|8. Box and Block Properties]]
- [[#9. Positioning with CSS|9. Positioning with CSS]]
- [[#10. Summary of Style Sheet Types|10. Summary of Style Sheet Types]]

---

## 1. Introduction to CSS

1. **CSS (Cascading Style Sheets)** is used to **style and format** HTML elements.
2. It separates the **presentation layer** from the **structure layer** (HTML).
3. CSS controls layout, fonts, colors, spacing, borders, positioning, and more.
4. It enhances **reusability**, **consistency**, and **design flexibility** across webpages.

---

## 2. Types of Style Sheets

### 1. Inline CSS

- Style is written **directly within an HTML element** using the `style` attribute.
- Affects **only that specific element**.

 Syntax:

```html
<p style="color: blue; font-size: 16px;">This is a paragraph.</p>
```

---

### 2. Internal/embedded CSS

- Written within the `<style>` tag inside the `<head>` section of the HTML document.
- Affects **all matching elements in the same HTML page**.

 Syntax:

```html
<head>
  <style>
    h1 {
      color: red;
      text-align: center;
    }
  </style>
</head>
```

---

### 3. External CSS

- CSS code is written in a **separate `.css` file**.
- Linked using the `<link>` tag in the HTML `<head>`.
- Used for **site-wide consistency and reusability**.

 Syntax (HTML):

```html
<link rel="stylesheet" href="style.css">
```

 Syntax (style.css):

```css
body {
  background-color: #f0f0f0;
}
```

---

## 3. CSS Selectors

1. **Universal Selector (`*`)** – Targets all elements.
    
    ```css
    * {
      margin: 0;
      padding: 0;
    }
    ```
    
2. **Element Selector** – Targets specific elements.
    
    ```css
    p {
      color: green;
    }
    ```
    
3. **Class Selector (`.`)** – Targets elements with a specific class.
    
    ```css
    .highlight {
      background-color: yellow;
    }
    ```
    
4. **ID Selector (`#`)** – Targets a specific element with an ID.
    
    ```css
    #header {
      font-size: 24px;
    }
    ```
    
5. **Group Selector** – Targets multiple elements.
    
    ```css
    h1, h2, p {
      font-family: Arial;
    }
    ```
    
6. **Descendant Selector** – Targets nested elements.
    
    ```css
    div p {
      color: blue;
    }
    ```
    

---

## 4. Using Class and Span Tag

### Using `class` Attribute:

```html
<p class="highlight">This is a highlighted paragraph.</p>
```

```css
.highlight {
  background-color: yellow;
}
```

### Using `span` Tag:

- Used for **inline styling** or formatting part of a text.
    

```html
<p>This is a <span style="color: red;">red</span> word.</p>
```

---

## 5. Text Properties in CSS

|Property|Description|
|---|---|
|`color`|Sets the text color|
|`text-align`|Aligns text (`left`, `center`, `right`)|
|`font-size`|Sets size of text|
|`font-family`|Sets font style|
|`font-weight`|Boldness of text|
|`text-decoration`|Underline, overline, etc.|
|`letter-spacing`|Space between letters|

 Example:

```css
p {
  font-size: 18px;
  text-align: justify;
  font-weight: bold;
}
```

---

## 6. Color and Background Properties

|Property|Description|
|---|---|
|`color`|Text color|
|`background-color`|Background color|
|`background-image`|Sets image as background|
|`background-repeat`|Repeats image (`repeat`, `no-repeat`)|
|`background-position`|Sets position of background image|

 Example:

```css
body {
  background-color: lightblue;
  background-image: url("bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
}
```

---

## 7. Border and Shading

|Property|Description|
|---|---|
|`border`|Sets border around elements|
|`border-style`|Solid, dotted, dashed, etc.|
|`border-width`|Thickness of the border|
|`border-color`|Color of the border|

 Example:

```css
div {
  border: 2px solid black;
  padding: 10px;
}
```

---

## 8. Box and Block Properties

1. **Box Model** consists of: `margin`, `border`, `padding`, and `content`.
    
2. **Block-level elements** take the full width.
    
3. Important properties:
    
    - `width`
        
    - `height`
        
    - `margin`
        
    - `padding`
        
    - `display`
        
    - `overflow`
        

 Example:

```css
.box {
  width: 200px;
  height: 100px;
  padding: 10px;
  margin: 20px;
  border: 1px solid gray;
}
```

---

## 9. Positioning with CSS

|Position Value|Description|
|---|---|
|`static`|Default (no special positioning)|
|`relative`|Positioned relative to its normal position|
|`absolute`|Positioned relative to nearest positioned parent|
|`fixed`|Fixed to the viewport (e.g., sticky headers)|
|`sticky`|Acts like `relative` until a scroll threshold|

 Example:

```css
.fixed-header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
}
```

---

## 10. Summary of Style Sheet Types

|Type|Applied To|Scope|Reusability|
|---|---|---|---|
|Inline|Single element|Very limited|No|
|Embedded|Single HTML file|One page only|No|
|External|Linked HTML files|Site-wide|Yes|

---

Let me know if you'd like a **sample webpage using all these CSS features** together or a **practice exercise** to reinforce these topics.