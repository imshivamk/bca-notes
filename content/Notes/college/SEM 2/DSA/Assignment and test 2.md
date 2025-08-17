---
dg-publish: true
---


- [[#TEST 2|TEST 2]]
	- [[#TEST 2#Q1. What is a File? Explain file operations and modes in detail|Q1. What is a File? Explain file operations and modes in detail]]
	- [[#TEST 2#Q2. Explain the types of file|Q2. Explain the types of file]]
	- [[#TEST 2#Q3.  explain the following functions in detail : 1. fopen 2. fclose 3. getc 4. putc 5. getw and 6. putw|Q3.  explain the following functions in detail : 1. fopen 2. fclose 3. getc 4. putc 5. getw and 6. putw]]
- [[#Assignment|Assignment]]
	- [[#Assignment#Q1. What is a stack. Explain the operations of stack in detail|Q1. What is a stack. Explain the operations of stack in detail]]
	- [[#Assignment#Q2. Explain Queue asa data structure with suitable examples|Q2. Explain Queue asa data structure with suitable examples]]

## TEST 2
### Q1. What is a File? Explain file operations and modes in detail

1. In C programming, a file is a collection of data stored on a storage medium such as a hard disk, SSD, or memory. 
2. Files are used to store information permanently so that it can be accessed later.
3. provides reusability
****

File operations in C typically involve the following tasks:

1. **Opening a File:**
   - To perform operations on a file, you must first open it using the `fopen()` function. This function takes two arguments: the filename and the mode in which the file should be opened.

2. **Reading from a File:**
   - Once a file is opened for reading using the mode `"r"`, data can be read from the file using functions like `fscanf()`, `fgets()`, or `fread()`.

3. **Writing to a File:**
   - If a file is opened for writing using modes like `"w"`, `"a"`, or `"r+"`, data can be written to the file using functions like `fprintf()`, `fputs()`, or `fwrite()`.

4. **Closing a File:**
   - After performing operations on a file, it should be closed using the `fclose()` function to release system resources associated with it.

The following are the commonly used file modes in C:

- **"r" (Read):** Opens a file for reading. The file must exist; otherwise, `fopen()` returns NULL.
- **"w" (Write):** Opens a file for writing. If the file already exists, its contents are overwritten. If the file doesn't exist, a new file is created.
- **"a" (Append):** Opens a file for appending. Data written to the file is appended to the end. If the file doesn't exist, a new file is created.
- **"r+" (Read and Write):** Opens a file for both reading and writing. The file must exist, and both reading and writing operations can be performed.
- **"w+" (Read and Write):** Opens a file for both reading and writing. If the file exists, its contents are overwritten. If the file doesn't exist, a new file is created.
- **"a+" (Append and Read):** Opens a file for reading and appending. Data written to the file is appended to the end. If the file doesn't exist, a new file is created.

Here's an example demonstrating file operations in C:

```c
#include <stdio.h>

int main() {
    FILE *fp;
    char str[100];

    // Open file for writing
    fp = fopen("example.txt", "w");
    if (fp == NULL) {
        printf("Error opening file for writing.\n");
        return 1;
    }

    // Write a string to the file
    fprintf(fp, "Hello, World!\n");

    // Close the file
    fclose(fp);

    // Open file for reading
    fp = fopen("example.txt", "r");
    if (fp == NULL) {
        printf("Error opening file for reading.\n");
        return 1;
    }

    // Read and print the string from the file
    fscanf(fp, "%s", str);
    printf("Read from file: %s\n", str);

    // Close the file
    fclose(fp);

    return 0;
}
```

This example demonstrates opening a file for writing, writing a string to it, closing the file, reopening it for reading, reading the string from it, and closing it again.
### Q2. Explain the types of file

In C programming, files can be categorized into two main types based on their usage and access patterns: text files and binary files.

1. **Text Files:**
   - Text files store data in a human-readable format, where each character is represented by its corresponding ASCII characters
   - Text files are commonly used for storing textual data such as plain text documents, configuration files, source code files, etc.
   - In text files, data is organized as a sequence of lines, with each line terminated by a newline character (`'\n'`).
   - Text files can be easily created, edited, and viewed using text editors or word processors.
   - Examples of functions for handling text files in C include `fscanf()`, `fprintf()`, `fgets()`, and `fputs()`.

2. **Binary Files:**
   - Binary files store data in a non-human-readable format, where each byte of data is represented directly without any encoding. 
   - Binary files are used for storing data that doesn't need to be human-readable, such as images, audio files, video files, executable files, etc.
   - In binary files, data is stored in its raw binary form, without any special formatting or encoding. 
   - This makes binary files more efficient for storing complex data structures or large volumes of data.
   - Binary files cannot be easily edited or viewed directly using text editors or word processors, as the data is not in a human-readable format.
   - Examples of functions for handling binary files in C include `fread()` and `fwrite()`.

Both text files and binary files can be read from and written to using the same set of file handling functions provided by the `<stdio.h>` header file. 
The choice between using text files and binary files depends on the nature of the data being stored and the specific requirements of the application.



| **Aspect**          | **Text Files**                         | **Binary Files**                      |
|---------------------|----------------------------------------|---------------------------------------|
| **Human-Readable**  | Yes                                    | No                                    |
| **Encoding**        | ASCII or Unicode                       | Raw binary                            |
| **Usage**           | Storing textual data                    | Storing non-textual data              |
| **Ease of Editing** | Easy                                   | Difficult                             |
| **Size**            | Larger (due to text encoding)          | Smaller (no encoding overhead)        |
| **Portability**     | Portable across different platforms    | Portable, but may have endian issues  |



### Q3.  explain the following functions in detail : 1. fopen 2. fclose 3. getc 4. putc 5. getw and 6. putw

1. **`fopen`:**
   - The `fopen` function is used to open a file. It takes two arguments: the filename (as a string) and the mode in which the file should be opened (as a string). The mode specifies whether the file should be opened for reading, writing, appending, etc. It returns a pointer to a `FILE` object, which is used in subsequent file operations. If the file cannot be opened, `fopen` returns `NULL`.

   Example usage:
   ```c
   FILE *fp;
   fp = fopen("example.txt", "w"); // Open file for writing
   if (fp == NULL) {
       perror("Error opening file");
       return 1;
   }
   ```

2. **`fclose`:**
   - The `fclose` function is used to close a file that was previously opened using `fopen`. It takes a single argument: a pointer to the `FILE` object representing the file to be closed. Once the file is closed, no further operations can be performed on it until it is opened again.

   Example usage:
   ```c
   fclose(fp); // Close the file
   ```

3. **`getc`:**
   - The `getc` function is used to read a single character from a file. It takes a single argument: a pointer to the `FILE` object representing the file from which to read. It returns the character read as an `int`, or `EOF` if the end of the file is reached or an error occurs.

   Example usage:
   ```c
   int ch;
   ch = getc(fp); // Read a character from the file
   ```

4. **`putc`:**
   - The `putc` function is used to write a single character to a file. It takes two arguments: the character to write and a pointer to the `FILE` object representing the file to which to write. It returns the character written as an `unsigned char`, or `EOF` if an error occurs.

   Example usage:
   ```c
   putc('A', fp); // Write a character to the file
   ```

5. **`getw`:**
   - The `getw` function is used to read a single integer (word) from a binary file. It takes a single argument: a pointer to the `FILE` object representing the file from which to read. It returns the integer read as an `int`, or `EOF` if the end of the file is reached or an error occurs.

   Example usage:
   ```c
   int num;
   num = getw(fp); // Read an integer from the file
   ```

6. **`putw`:**
   - The `putw` function is used to write a single integer (word) to a binary file. It takes two arguments: the integer to write and a pointer to the `FILE` object representing the file to which to write. It returns `EOF` if an error occurs.

   Example usage:
   ```c
   putw(123, fp); // Write an integer to the file
   ```

These functions are essential for performing file I/O operations in C programs. It's crucial to handle errors properly when using these functions to ensure the robustness and reliability of file operations.


## Assignment
### Q1. What is a stack. Explain the operations of stack in detail
[[STACK]]
[[Stack using array]]

### Q2. Explain Queue asa data structure with suitable examples

[[Queue]]
