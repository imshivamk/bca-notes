---
dg-publish: true
---
### 1. **Introduction to Servlets**

- **Servlets** are Java programs that run on a web server and generate dynamic web content. They are part of the Java EE (Enterprise Edition) specification and enable the development of web applications.
- Servlets typically handle requests from web clients (usually browsers), process those requests, and return responses.
- They work based on the client-server architecture, where the server (web container) processes the request and sends back a response.

### 2. **Hierarchy of Servlets**

- The **javax.servlet** package defines the standard API for Java Servlets.
- Key classes/interfaces in the hierarchy include:
    - **Servlet** (the base interface that all servlets implement)
    - **GenericServlet** (abstract class that implements the `Servlet` interface)
    - **HttpServlet** (extends `GenericServlet` and provides methods for HTTP request/response handling)
    - **ServletRequest** and **ServletResponse** (interfaces used to handle requests and responses, respectively)

### 3. **Lifecycle of a Servlet**

A servlet goes through the following stages:

1. **Instantiation**: The servlet container loads the servlet class into memory and creates an instance of it.
2. **Initialization** (`init` method): The `init()` method is called once when the servlet is first loaded into memory. It initializes the servlet.
3. **Request Handling** (`service` method): The `service()` method is invoked for every request made to the servlet. It handles the HTTP request by calling methods like `doGet()`, `doPost()`, etc.
4. **Destruction** (`destroy` method): The `destroy()` method is called before the servlet is removed from memory. It allows for cleanup resources.
    

### 4. **Tomcat Configuration**

- **Apache Tomcat** is a widely-used open-source servlet container that implements the Java Servlet and JavaServer Pages (JSP) specifications.
- Key configuration files:
    
    - `web.xml`: This file, located in the `WEB-INF` directory, contains the configuration for servlets, mappings, filters, and listeners.
    - `server.xml`: The main configuration file for Tomcat where server-level configurations like port settings and host settings are defined.
        
- Servlets are mapped in `web.xml`, where you define URL patterns and associate them with a servlet

### 5. **Handling GET and POST Requests (HTTP)**

- **GET Request**:
    - The `doGet()` method in a servlet handles HTTP GET requests. It's used to retrieve data from the server.
    - Data is passed through the URL (query string).
- **POST Request**:
    - The `doPost()` method handles HTTP POST requests, typically used when submitting form data.
    - Data is passed in the body of the request (not in the URL), making it more secure for sending sensitive information.
        
- **Difference**:
    - GET is idempotent (can be cached, repeated without side effects), while POST is not.
    - POST can send larger amounts of data.


### 6. **Handling Data from HTML to Servlet**

- Forms in HTML use the `<form>` tag with attributes `method="GET"` or `method="POST"`.
- When the form is submitted, data is sent to a servlet for processing.
    
    - In a GET request, data is passed through the URL.
    - In a POST request, data is passed in the body of the request.
- In the servlet, you retrieve the form data using `request.getParameter()`.
### 7. **Session Tracking**

- **Cookies**:
    
    - A cookie is a small piece of data sent by the server and stored on the client’s browser. It can be used to store session information or preferences.
    - In a servlet, you can create cookies using `Cookie` objects and send them in the response using `response.addCookie()`.
    - Cookies are automatically sent with every request to the server for the domain they are associated with.

- **HttpSession**:

    - The `HttpSession` interface is used to maintain session state across multiple requests.
    - Sessions are created by the servlet container and associated with a unique session ID.
    - You can store and retrieve session attributes using methods like `session.setAttribute()` and `session.getAttribute()`
    - Sessions can be tracked via cookies or URL rewriting (if cookies are disabled).


### Summary

- Servlets enable dynamic content generation and interaction between web clients and servers.
- The servlet lifecycle involves initialization, request processing, and cleanup stages
- Tomcat is a popular servlet container for running Java web applications.
- HTTP methods like GET and POST are handled by `doGet()` and `doPost()` methods, respectively.
- Data from HTML forms is passed to servlets via query strings (GET) or request bodies (POST).
- Session tracking in servlets can be achieved with cookies or HTTP sessions, helping maintain user state across requests.
