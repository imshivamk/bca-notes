---
dg-publish: true
---
- [[#1. Concept of Streams|1. Concept of Streams]]
- [[#2. Types of Streams|2. Types of Streams]]
- [[#3. The Console|3. The Console]]
- [[#4. InputStream|4. InputStream]]
- [[#5. OutputStream|5. OutputStream]]
- [[#6. Reader|6. Reader]]
- [[#7. Writer|7. Writer]]
- [[#8. File|8. File]]
- [[#9. FileInputStream|9. FileInputStream]]
- [[#10. FileOutputStream|10. FileOutputStream]]
- [[#11. FileReader|11. FileReader]]
- [[#12. FileWriter|12. FileWriter]]

### Java Input/Output (I/O)

#### 1. Concept of Streams

- Stream: A sequence of data (bytes/characters) flowing from a source to a destination.
- Categories:
    - Input Stream: Reads data.
    - Output Stream: Writes data.

---

#### 2. Types of Streams

1. Byte Streams:
    
    - Handles binary data.
    - Classes: `InputStream` and `OutputStream`.
    - Example:
        
        ```java
        FileInputStream fis = new FileInputStream("file.txt");
        int data = fis.read();
        ```
        
2. Character Streams:
    
    - Handles text data.
    - Classes: `Reader` and `Writer`.
    - Example:
        
        ```java
        FileReader fr = new FileReader("file.txt");
        int charData = fr.read();
        ```
        

---

#### 3. The Console

1. `System.err`:
    
    - Outputs error messages.
    - Example:
        
        ```java
        System.err.println("Error occurred!");
        ```
        
2. `System.out`:
    
    - Outputs normal messages.
    - Example:
        
        ```java
        System.out.println("Hello, World!");
        ```
        
3. `System.in`:
    
    - Reads input from the user.
    - Example:
        
        ```java
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        ```
        

---

#### 4. InputStream

- Purpose: Reads bytes from a source.
- Common Methods:
    - `read()`: Reads one byte.
    - `close()`: Closes the stream.
- Example:
    
    ```java
    InputStream is = new FileInputStream("file.txt");
    int byteData = is.read();
    ```
    

---

#### 5. OutputStream

- Purpose: Writes bytes to a destination.
- Common Methods:
    - `write(int b)`: Writes one byte.
    - `flush()`: Flushes the stream.
- Example:
    
    ```java
    OutputStream os = new FileOutputStream("file.txt");
    os.write(65); // Writes 'A'
    ```
    

---

#### 6. Reader

- Purpose: Reads characters from a source.
- Common Methods:
    - `read()`: Reads one character.
    - `close()`: Closes the stream.
- Example:
    
    ```java
    Reader reader = new FileReader("file.txt");
    int charData = reader.read();
    ```
    

---

#### 7. Writer

- Purpose: Writes characters to a destination.
- Common Methods:
    - `write(String str)`: Writes a string.
    - `close()`: Closes the stream.
- Example:
    
    ```java
    Writer writer = new FileWriter("file.txt");
    writer.write("Hello!");
    ```
    

---

#### 8. File

- Purpose: Represents file/directory paths.
- Key Methods:
    - `exists()`: Checks file existence.
    - `createNewFile()`: Creates a file.
- Example:
    
    ```java
    File file = new File("file.txt");
    boolean exists = file.exists();
    ```
    

---

#### 9. FileInputStream

- Purpose: Reads bytes from a file.
- Example:
    
    ```java
    FileInputStream fis = new FileInputStream("file.txt");
    int data = fis.read();
    fis.close();
    ```
    

---

#### 10. FileOutputStream

- Purpose: Writes bytes to a file.
- Example:
    
    ```java
    FileOutputStream fos = new FileOutputStream("file.txt");
    fos.write(65); // Writes 'A'
    fos.close();
    ```
    

---

#### 11. FileReader

- Purpose: Reads characters from a file.
- Example:
    
    ```java
    FileReader fr = new FileReader("file.txt");
    int charData = fr.read();
    fr.close();
    ```
    

---

#### 12. FileWriter

- Purpose: Writes characters to a file.
- Example:
    
    ```java
    FileWriter fw = new FileWriter("file.txt");
    fw.write("Hello, World!");
    fw.close();
    ```
    

Let me know if you need a complete program with these concepts!