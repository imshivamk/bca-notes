---
dg-publish: true
---
- [[#Java Network Programming|Java Network Programming]]
- [[#The `java.net` Package|The `java.net` Package]]
- [[#Connection-Oriented Transmission (Stream-Based Communication)|Connection-Oriented Transmission (Stream-Based Communication)]]
- [[#Socket Class|Socket Class]]
	- [[#Socket Class#Creating a Socket to a Remote Host on a Port|Creating a Socket to a Remote Host on a Port]]
- [[#Creating a TCP Client and Server|Creating a TCP Client and Server]]
	- [[#Creating a TCP Client and Server#1. TCP Server (Listening for Client Connections)|1. TCP Server (Listening for Client Connections)]]
	- [[#Creating a TCP Client and Server#2. TCP Client (Connecting to Server)|2. TCP Client (Connecting to Server)]]
- [[#Explanation of Code:|Explanation of Code:]]
- [[#Output Example|Output Example]]
- [[#Conclusion|Conclusion]]

## Java Network Programming

Java provides a robust networking API in the `java.net` package, allowing developers to create network-based applications. It supports various communication models, including connection-oriented and connectionless transmission.

---

## The `java.net` Package

The `java.net` package provides classes and interfaces for networking applications in Java. Some key classes include:

- Socket – Implements client-side communication using TCP.
- ServerSocket – Implements server-side communication using TCP.
- InetAddress – Represents an IP address.
- URL & URLConnection – Provides support for handling URLs.
- DatagramSocket & DatagramPacket – Implements UDP-based communication.

---

## Connection-Oriented Transmission (Stream-Based Communication)

Connection-oriented transmission is implemented using TCP (Transmission Control Protocol), which ensures reliable and ordered delivery of data between a client and a server.

TCP communication is handled using:

1. Socket Class (for the client)
2. ServerSocket Class (for the server)

---

## Socket Class

The `Socket` class is used to create a connection between a client and a server. It provides methods to:

- Establish a connection with a remote host.
- Send and receive data streams.
- Close the connection.

### Creating a Socket to a Remote Host on a Port

To connect to a remote server on a specific port, use:

```java
Socket socket = new Socket("hostname", portNumber);
```

Where:

- `"hostname"` is the IP address or domain name of the remote server.
- `portNumber` is the port on which the server is listening.

---

## Creating a TCP Client and Server

A simple TCP client-server program in Java:

### 1. TCP Server (Listening for Client Connections)

```java
import java.io.*;
import java.net.*;

public class SimpleServer {
    public static void main(String[] args) {
        int port = 5000; // Server listens on this port

        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server is listening on port " + port);

            while (true) {
                Socket socket = serverSocket.accept(); // Accepts client connection
                System.out.println("New client connected");

                // Read input from client
                BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                PrintWriter output = new PrintWriter(socket.getOutputStream(), true);

                String message = input.readLine();
                System.out.println("Received: " + message);

                output.println("Hello from Server!"); // Sending response

                socket.close(); // Close connection
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

---

### 2. TCP Client (Connecting to Server)

```java
import java.io.*;
import java.net.*;

public class SimpleClient {
    public static void main(String[] args) {
        String serverAddress = "localhost"; // Change to server's IP if needed
        int port = 5000;

        try (Socket socket = new Socket(serverAddress, port)) {
            PrintWriter output = new PrintWriter(socket.getOutputStream(), true);
            BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));

            output.println("Hello from Client!"); // Sending message

            String response = input.readLine();
            System.out.println("Server says: " + response); // Receiving response

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

---

## Explanation of Code:

1. The ServerSocket in `SimpleServer` listens on port `5000`.
2. The server accepts client connections using `accept()`.
3. The client (SimpleClient) connects to the server using `new Socket("localhost", 5000)`.
4. The client sends a message using `PrintWriter`.
5. The server reads the message using `BufferedReader` and responds.
6. The client receives the response and prints it.

---

## Output Example

Running the Server:

```
Server is listening on port 5000
New client connected
Received: Hello from Client!
```

Running the Client:

```
Server says: Hello from Server!
```

---

## Conclusion

- Java provides networking capabilities using the `java.net` package.
- TCP-based communication ensures reliable data transfer.
- The Socket and ServerSocket classes handle client-server communication.
- The example demonstrates basic TCP-based message exchange.