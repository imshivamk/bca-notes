---
dg-publish: true
---

### 1. What is a Servlet?

A Java Servlet is a Java program that runs on a web server and handles HTTP requests and responses. Servlets are used to create dynamic web content.

### 2. Tomcat Server

Apache Tomcat is an open-source servlet container that provides an environment to run Java Servlets and JSPs.

- Acts as a web server and servlet container
    
- Deploy `.war` files to run web apps
    

### 3. Servlet Lifecycle

The servlet lifecycle is managed by the servlet container and includes:

1. **Loading** – Servlet class is loaded.
    
2. **Instantiation** – Object of the servlet is created.
    
3. **Initialization** – `init()` method is called once.
    
4. **Request handling** – `service()` method is called for each request.
    
5. **Destruction** – `destroy()` method is called before the servlet is removed.
    

```java
public class MyServlet extends HttpServlet {
    public void init() throws ServletException {
        // Initialization code
    }

    public void service(HttpServletRequest req, HttpServletResponse res) throws IOException {
        // Handle request
    }

    public void destroy() {
        // Cleanup code
    }
}
```

### 4. Servlet Class Hierarchy

```
Object
  ↳ GenericServlet
       ↳ HttpServlet
```

- `GenericServlet` is a protocol-independent base class.
    
- `HttpServlet` is commonly used for HTTP-specific servlets.
    

### 5. Handling GET and POST Requests

Servlets use `doGet()` and `doPost()` methods to handle HTTP requests.

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    response.getWriter().println("Hello from GET");
}

protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    String name = request.getParameter("username");
    response.getWriter().println("Hello, " + name);
}
```

### 6. HTML to Servlet Communication

HTML form data can be sent to a servlet using GET or POST.

**HTML Example:**

```html
<form action="MyServlet" method="post">
  Name: <input type="text" name="username">
  <input type="submit" value="Submit">
</form>
```

**Servlet:**

```java
String name = request.getParameter("username");
```

### 7. Session Tracking

Used to maintain state between multiple requests from the same user.

#### a. Cookies

Small text files stored in the client’s browser.

```java
Cookie ck = new Cookie("name", "John");
response.addCookie(ck);
```

#### b. HTTP Session

Stores data on the server.

```java
HttpSession session = request.getSession();
session.setAttribute("user", "John");
```

### 8. RequestDispatcher

Used to forward or include a request from one resource to another.

#### Forwarding:

```java
RequestDispatcher rd = request.getRequestDispatcher("nextServlet");
rd.forward(request, response);
```

#### Including:

```java
RequestDispatcher rd = request.getRequestDispatcher("header.html");
rd.include(request, response);
```

(Shall I continue with Java Server Pages (JSP) next in this level of detail?)