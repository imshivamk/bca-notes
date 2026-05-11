---
dg-publish: true
---

# JavaScript Events, DOM, Cookies and Sessions

- [[#1. What is an Event?|1. What is an Event?]]
- [[#2. Common JavaScript Event Types|2. Common JavaScript Event Types]]
- [[#3. Working with DOM (Document Object Model)|3. Working with DOM (Document Object Model)]]
- [[#4. Concept of Cookies and Sessions|4. Concept of Cookies and Sessions]]
- [[#5. When and How to Use Cookies vs Sessions|5. When and How to Use Cookies vs Sessions]]
- [[#6. Summary|6. Summary]]

---

## 1. What is an Event?

1. An **event** is an action or occurrence that happens in the browser, which JavaScript can detect and respond to.
2. Events are triggered by the user (e.g., clicking, typing, hovering) or by the browser (e.g., page load).
3. JavaScript uses **event handlers** to execute specific code in response to these events.

---

## 2. Common JavaScript Event Types

### 2.1 `onclick` Event
- **Description**: Triggered when an HTML element is clicked.
- **Syntax**:
    ```html
    <button onclick="sayHello()">Click Me</button>
    ```

    ```javascript
    function sayHello() {
      alert("Hello!");
    }
    ```

### 2.2 `onsubmit` Event

- **Description**: Triggered when a form is submitted.
- **Used to**: Validate form data before submission.
- **Syntax**:

    ```html
    <form onsubmit="return validateForm()">
      <input type="text" id="name" />
      <input type="submit" />
    </form>
    ```

    ```javascript
    function validateForm() {
      let name = document.getElementById("name").value;
      if (name === "") {
        alert("Name is required");
        return false;
      }
      return true;
    }
    ```


### 2.3 `onmouseover` and `onmouseout` Events

- **Description**:
    
    - `onmouseover`: Triggered when the mouse pointer enters an element.
    - `onmouseout`: Triggered when the mouse pointer leaves an element.
- **Syntax**:

    ```html
    <div onmouseover="hoverIn()" onmouseout="hoverOut()">Hover me</div>
    ```

    ```javascript
    function hoverIn() {
      console.log("Mouse entered");
    }
    function hoverOut() {
      console.log("Mouse left");
    }
    ```



### 2.4 `onload` Event

- **Description**: Triggered when the entire page (including all assets) finishes loading.
    
- **Used to**: Run scripts after the page is fully available.
    
- **Syntax**:
    
    ```html
    <body onload="initPage()">
    ```

    ```javascript
    function initPage() {
      console.log("Page Loaded");
    }
    ```


### 2.6 `onkeydown` Event

- **Description**: Triggered when a key is pressed down.

- **Syntax**:


    ```html
    <input type="text" onkeydown="showKey(event)" />
    ```

    ```javascript
    function showKey(e) {
      console.log("You pressed: " + e.key);
    }
    ```


---

## 3. Working with DOM (Document Object Model)

1. **DOM** represents the structure of an HTML document as a tree of objects.
    
2. JavaScript can access and modify HTML elements through the DOM.
    
3. **Common DOM Methods**:
    
    - `document.getElementById("id")`
    
    - `document.getElementsByClassName("class")`
    
    - `document.getElementsByTagName("tag")`
    
    - `element.innerHTML` – to get/set content
    
    - `element.style.property` – to change CSS styles
    

### Example:

```javascript
document.getElementById("demo").innerHTML = "Hello, DOM!";
```

---

## 4. Concept of Cookies and Sessions

### 4.1 Cookies

1. **Cookies** are small pieces of data stored on the client-side (browser).

2. Used to store user preferences, login status, etc.

3. **Created by**: Server or JavaScript

4. **Syntax (JavaScript)**:

    ```javascript
    document.cookie = "username=John; expires=Tue, 01 Jan 2026 00:00:00 UTC; path=/";
    ```

5. **Access cookies**:

    ```javascript
    console.log(document.cookie);
    ```


### 4.2 Sessions

1. **Sessions** store data on the **server** related to a user.

2. More secure than cookies as they are not stored on the client.

3. Typically used to store sensitive information like login credentials, user roles, etc.

4. Each session has a unique session ID.


---

## 5. When and How to Use Cookies vs Sessions

|Criteria|Cookies|Sessions|
|---|---|---|
|Storage|Client-side|Server-side|
|Security|Less secure|More secure|
|Data Size|Small (usually <4KB)|Larger (depends on server)|
|Lifespan|Can be set to expire|Ends when browser or session is closed|
|Use Cases|Save preferences, remember language|User authentication, shopping cart|

---

## 6. Summary

- Events let JavaScript interact with user actions.

- DOM provides access to modify webpage structure.

- Cookies and sessions help maintain user state across pages.

- Proper use of these concepts is crucial for building interactive and dynamic web applications.
