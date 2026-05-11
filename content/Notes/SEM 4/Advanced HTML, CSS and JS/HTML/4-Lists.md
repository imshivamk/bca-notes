---
dg-publish: true
---

## Definition

1. Lists in HTML are used to **group related items** together in a structured format.
2. They help in **organizing content** on a webpage for better readability.
3. There are **three types of lists** in HTML:
    - **Ordered List**
    - **Unordered List**
    - **Description List**

---

## 1. Ordered List (`<ol>`)

1. Displays list items in a **numbered sequence**.
2. Uses the `<ol>` tag (ordered list) and `<li>` for each list item.

### Syntax:

```html
<ol>   
	<li>Item One</li> 
	<li>Item Two</li>   
	<li>Item Three</li>
</ol>
```
### Output:

1. Item One
2. Item Two
3. Item Three


---

## 2. Unordered List (`<ul>`)

1. Displays list items with **bullets (•)** instead of numbers.
2. Uses the `<ul>` tag (unordered list) and `<li>` for each item.

### Syntax:
```html
<ul>   <li>HTML</li>   <li>CSS</li>   <li>JavaScript</li> </ul>
```
### Output:

• HTML  
• CSS  
• JavaScript
### Attributes:

- `type`: Specifies the bullet type (`disc`, `circle`, `square`)
### Example:

```html
<ul type="square">
	<li>Pen</li> 
	<li>Pencil</li> 
</ul>
```

---

## 4. Description List (`<dl>`)

1. Used for **definition-style lists**, like dictionaries or FAQs.
2. Contains:
    
    - `<dl>`: Description list container
    - `<dt>`: Term (name or heading)
    - `<dd>`: Description of the term

### Syntax:

```html
<dl> 
	<dt>HTML</dt> 
		<dd>HyperText Markup Language</dd>
	<dt>CSS</dt>
		<dd>Cascading Style Sheets</dd> 
</dl>
```
``
### Output:

**HTML**  
 HyperText Markup Language  
**CSS**  
 Cascading Style Sheets

---
## 5. Nested Lists

1. Lists can be **nested** inside each other (e.g., a list inside a list item).
2. Any type of list can be nested.

### Example:
```html
<ol>   <li>Fruits     <ul>       <li>Apple</li>       <li>Mango</li>     </ul>   </li>   <li>Vegetables</li> </ol>
```
``

---

## 6. Summary

|List Type|Tag|Items Use|Appearance|
|---|---|---|---|
|Ordered List|`<ol>`|`<li>`|Numbered items|
|Unordered List|`<ul>`|`<li>`|Bulleted items|
|Description List|`<dl>`|`<dt>`, `<dd>`|Term-definition pairs|