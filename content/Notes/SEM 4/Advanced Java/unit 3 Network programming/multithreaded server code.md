---
dg-publish: true
---
# code

```java
import java.io.*;
import java.net.*;

public class Server {
    public static void main(String[] args) {
        int port = 8000;
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server is waiting for client connections...");

            while (true) {
                Socket clientSocket = serverSocket.accept();
                System.out.println("New client connected!");

                // Assign a new thread for each client
                ClientHandler clientHandler = new ClientHandler(clientSocket);
                new Thread(clientHandler).start();
            }
        } catch (IOException e) {
            System.out.println("Server Error: " + e.getMessage());
        }
    }
}

```

```java
import java.io.*;
import java.net.*;

public class ClientHandler implements Runnable {
    private Socket socket;
    private DataInputStream dis;
    private DataOutputStream dos;

    public ClientHandler(Socket socket) {
        this.socket = socket;
        try {
            dis = new DataInputStream(socket.getInputStream());
            dos = new DataOutputStream(socket.getOutputStream());
        } catch (IOException e) {
            System.out.println("Error initializing client handler: " + e.getMessage());
        }
    }

    @Override
    public void run() {
        try {
            String msg;
            while (true) {
                msg = dis.readUTF().trim();
                System.out.println("Client: " + msg);

                if (msg.equalsIgnoreCase("end")) {
                    dos.writeUTF("Server: Connection closed.");
                    break;
                }

                // Server's response logic
                String response = "Server says: " + msg;
                switch (msg.toLowerCase()) {
                    case "hello":
                        response = "Hi! How are you?";
                        break;
                    case "kaisa hai":
                        response = "Main badhiya, tum batao?";
                        break;
                    default:
                        response = "Server: " + msg;
                }

                dos.writeUTF(response);
            }
        } catch (IOException e) {
            System.out.println("Client disconnected.");
        } finally {
            try {
                socket.close();
                System.out.println("Client connection closed.");
            } catch (IOException e) {
                System.out.println("Error closing socket: " + e.getMessage());
            }
        }
    }
}

```

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.io.*;
import java.net.Socket;

public class myClient {
    private Socket socket;
    private DataInputStream dis;
    private DataOutputStream dos;
    private JTextArea chatArea;
    private JTextField inputField;

    public myClient(String address, int port) {
        try {
            socket = new Socket(address, port);
            dis = new DataInputStream(socket.getInputStream());
            dos = new DataOutputStream(socket.getOutputStream());

            startGUI();

            // Start listening for server messages
            new Thread(() -> listenToServer()).start();

        } catch (IOException e) {
            System.out.println("Client Error: " + e.getMessage());
        }
    }

    private void startGUI() {
        JFrame frame = new JFrame("Chat Client");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);
        frame.setLayout(new BorderLayout(10, 10));

        chatArea = new JTextArea();
        chatArea.setEditable(false);
        chatArea.setMargin(new Insets(10, 10, 10, 10));
        chatArea.setLineWrap(true);
        frame.add(new JScrollPane(chatArea), BorderLayout.CENTER);

        inputField = new JTextField();
        inputField.addActionListener(this::sendMessage);
        frame.add(inputField, BorderLayout.SOUTH);

        frame.setVisible(true);
    }

    private void sendMessage(ActionEvent e) {
        String message = inputField.getText().trim();
        if (!message.isEmpty()) {
            try {
                dos.writeUTF(message);
                dos.flush();
                chatArea.append("You: " + message + "\n");
                inputField.setText("");
            } catch (IOException ex) {
                chatArea.append("Error: " + ex.getMessage() + "\n");
            }
        }
    }

    private void listenToServer() {
        try {
            while (true) {
                String response = dis.readUTF();
                chatArea.append(response + "\n");
            }
        } catch (IOException e) {
            chatArea.append("Disconnected from server.\n");
        }
    }

    public static void main(String[] args) {
        new myClient("localhost", 8000);
    }
}

```
