## Q.4 Explain different types of JSP tags.

### definition

### **What is JSP?**

**JSP (JavaServer Pages)** is a server-side technology used to create dynamic, platform-independent web applications using Java. It allows embedding Java code directly into HTML pages using special JSP tags.

- JSP files have the `.jsp` extension.
- They are compiled into **Servlets** by the web container (like Apache Tomcat).
- It simplifies the development of dynamic web content by separating presentation (HTML) from business logic (Java).

### **Where is JSP Used?**

JSP is mainly used in the **presentation layer** of web applications. Its typical uses include:

1. **Dynamic Web Pages**:  
    Generate content like user profiles, search results, or dashboards based on user input or database content.
2. **Form Handling**:  
    Collect form data and interact with JavaBeans or databases to process it.
3. **Session Management**:  
    Track user sessions and manage login/logout functionality.
4. **Data Display**:  
    Fetch and display data from a backend (like MySQL) using Java code and custom tags.

### 1. **Directive Tags**

- These provide global information about the JSP page to the container.
    
- Syntax: `<%@ directive attribute="value" %>`
- Types:
    
    - **Page Directive**: Defines page-level settings (e.g., language, errorPage).
        
        `<%@ page language="java" contentType="text/html" %>`
        
    - **Include Directive**: Includes a file during the translation phase.
        
        `<%@ include file="header.jsp" %>`
        

---

### 2. **Declaration Tags**

- Used to declare variables and methods that can be used later in the JSP page.
- Syntax: `<%! declaration %>`
- Example:

```java
<%! int count = 0; %>
```
```java
<%! public int getCount() { return count++; } %>`
```

---

### 3. **Scriptlet Tags**

- Used to write Java code that is executed each time the page is requested.
    
- Syntax: `<% Java code %>`
    
- Example:
    
    jsp
    
    CopyEdit
    
    `<% int sum = 5 + 10; out.println("Sum: " + sum); %>`
    

---

### 4. **Expression Tags**

- Used to output the result of Java expressions directly to the client.
    
- Syntax: `<%= expression %>`
    
- Example:
    
    jsp
    
    CopyEdit
    
    `<%= new java.util.Date() %>`
    

---

### 5. **Action Tags**

- Used to control the behavior of the JSP engine.
    
- Syntax: `<jsp:action_name attributes />`
    
- Common action tags:
    
    - **jsp:include** – Includes another resource at request time.
        
        jsp
        
        CopyEdit
        
        `<jsp:include page="footer.jsp" />`
        
    - **jsp:forward** – Forwards the request to another resource.
        
        jsp
        
        CopyEdit
        
        `<jsp:forward page="home.jsp" />`
        
    - **jsp:useBean**, **jsp:setProperty**, **jsp:getProperty** – For JavaBeans interaction.
        
        jsp
        
        CopyEdit
        
        `<jsp:useBean id="user" class="com.example.User" scope="session" /> <jsp:setProperty name="user" property="name" value="Alice" /> <jsp:getProperty name="user" property="name" />`
        

---

### 6. **Custom Tags**

- User-defined tags created using tag libraries.
    
- Helps in reusing functionality and separating business logic from presentation.
    
- Requires a tag handler class and a TLD (Tag Library Descriptor) file.
    

---

**Summary Table:**

|Tag Type|Syntax Example|Purpose|
|---|---|---|
|Directive|`<%@ page language="java" %>`|Page-level info|
|Declaration|`<%! int x = 0; %>`|Declare variables/methods|
|Scriptlet|`<% int a = 5; %>`|Java logic|
|Expression|`<%= a + 10 %>`|Output result of expression|
|Action|`<jsp:include page="footer.jsp" />`|Built-in actions|
|Custom|`<prefix:tagName />`|Reusable user-defined tags|
