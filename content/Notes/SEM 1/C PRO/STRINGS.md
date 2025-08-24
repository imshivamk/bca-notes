---
dg-publish: true
---
```table-of-contents
```

In C, strings are arrays of characters terminated by a null character (`'\0'`). Strings are a common and essential feature in C programming for handling text data. Here’s an overview of working with strings in C:

### Declaring and Initializing Strings

#### 1. **Declaration**

You can declare a string using a character array or a pointer to a character.

```c
char str1[20]; // Character array
char *str2;    // Pointer to a character
```

#### 2. **Initialization**

Strings can be initialized during declaration.

```c
char str1[20] = "Hello, World!";
char *str2 = "Hello, World!";
```

When a string is initialized with a double-quoted string literal, it automatically includes the null character at the end.

### String Input and Output

#### 1. **Reading Strings**

You can use `scanf`, `gets`, or `fgets` to read strings from input.

```c
#include <stdio.h>

int main() {
    char str[50];

    // Using scanf
    printf("Enter a string: ");
    scanf("%s", str); // Note: scanf stops at whitespace
    printf("You entered: %s\n", str);

    // Using fgets
    printf("Enter another string: ");
    fgets(str, sizeof(str), stdin); // fgets includes whitespace and reads until newline
    printf("You entered: %s", str);

    return 0;
}
```

**Important:** `gets` is not recommended due to the risk of buffer overflow. Always use `fgets` for safer input handling.

#### 2. **Printing Strings**

You can use `printf` to print strings.

```c
#include <stdio.h>

int main() {
    char str[] = "Hello, World!";
    printf("%s\n", str);

    return 0;
}
```

### String Functions

C provides several standard library functions for handling strings. These functions are declared in the `string.h` header file.

#### 1. **String Length**

`strlen` calculates the length of a string (excluding the null character).

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello, World!";
    printf("Length of string: %lu\n", strlen(str));

    return 0;
}
```

#### 2. **String Copy**

`strcpy` copies one string to another.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char source[] = "Hello, World!";
    char destination[20];

    strcpy(destination, source);
    printf("Copied string: %s\n", destination);

    return 0;
}
```

#### 3. **String Concatenation**

`strcat` appends one string to the end of another.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "Hello";
    char str2[] = ", World!";

    strcat(str1, str2);
    printf("Concatenated string: %s\n", str1);

    return 0;
}
```

#### 4. **String Comparison**

`strcmp` compares two strings lexicographically.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "Hello";
    char str2[] = "World";

    int result = strcmp(str1, str2);
    if (result == 0) {
        printf("Strings are equal.\n");
    } else if (result < 0) {
        printf("str1 is less than str2.\n");
    } else {
        printf("str1 is greater than str2.\n");
    }

    return 0;
}
```

#### 5. **String Searching**

`strstr` finds the first occurrence of a substring in a string.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello, World!";
    char *substr = "World";

    char *result = strstr(str, substr);
    if (result) {
        printf("Substring found at position: %ld\n", result - str);
    } else {
        printf("Substring not found.\n");
    }

    return 0;
}
```

### Manual String Manipulation

Sometimes you may need to manipulate strings manually. Here are a few examples:

#### 1. **Copying a String Manually**

```c
#include <stdio.h>

void stringCopy(char *destination, const char *source) {
    while (*source) {
        *destination = *source;
        destination++;
        source++;
    }
    *destination = '\0'; // Null-terminate the destination string
}

int main() {
    char source[] = "Hello, World!";
    char destination[20];

    stringCopy(destination, source);
    printf("Copied string: %s\n", destination);

    return 0;
}
```

#### 2. **Concatenating Strings Manually**

```c
#include <stdio.h>

void stringConcat(char *destination, const char *source) {
    while (*destination) {
        destination++; // Move to the end of the destination string
    }
    while (*source) {
        *destination = *source;
        destination++;
        source++;
    }
    *destination = '\0'; // Null-terminate the destination string
}

int main() {
    char str1[20] = "Hello";
    char str2[] = ", World!";

    stringConcat(str1, str2);
    printf("Concatenated string: %s\n", str1);

    return 0;
}
```

