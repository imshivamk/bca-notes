# **R Programming – Detailed Exam Notes**

---

## 1. Introduction to R

- **Definition**:  
    R is a programming language and environment for statistical computing, data analysis, and graphics.
- **History**:  
    Developed by Ross Ihaka and Robert Gentleman in 1993 at the University of Auckland.
- **Key Features**:
    1. Free and open-source.
    2. Large package repository (CRAN).
    3. Highly extensible for statistical methods and machine learning.
    4. Strong data visualization capabilities.
    5. Platform independent (Windows, Linux, macOS).
    6. Community-driven development.

---

## 2. Getting R and Managing R

### a) Installing R
- Download from **CRAN**: [https://cran.r-project.org/](https://cran.r-project.org/).
- Install **RStudio IDE** for user-friendly interface.

### b) Package Management

- Install a package:
    
    ```R
    install.packages("dplyr")
    ```
    
- Load a package:
    
    ```R
    library(dplyr)
    ```
    
- Remove a package:
    
    ```R
    remove.packages("dplyr")
    ```
    
- List installed packages:
    
    ```R
    installed.packages()
    ```

---

## 3. Arithmetic and Matrix Operations

### a) Arithmetic Operators

|Operator|Description|Example (`a=10, b=3`)|Result|
|---|---|---|---|
|`+`|Addition|`a+b`|13|
|`-`|Subtraction|`a-b`|7|
|`*`|Multiplication|`a*b`|30|
|`/`|Division|`a/b`|3.33|
|`%%`|Modulus|`a%%b`|1|
|`%/%`|Integer Division|`a%/%b`|3|
|`^` or `**`|Power|`a^b`|1000|

### b) Matrix Creation

```R
m1 <- matrix(1:6, nrow=2, ncol=3, byrow=TRUE)
print(m1)
```

Output:

```
     [,1] [,2] [,3]
[1,]    1    2    3
[2,]    4    5    6
```

### c) Matrix Operations

```R
m2 <- matrix(7:12, 2, 3)
m1 + m2       # Addition
m1 - m2       # Subtraction
m1 * m2       # Element-wise multiplication
t(m1)         # Transpose
m1 %*% t(m2)  # Matrix multiplication (2x3 %*% 3x2)
```

---

## 4. Functions in R

### a) Built-in Functions

Examples:

```R
mean(c(1,2,3,4,5))   # Mean
sum(1:5)             # Sum
sqrt(16)             # Square root
```

### b) User-defined Functions

```R
# Function with arguments and return
power <- function(x, y) {
  result <- x^y
  return(result)
}
power(2, 3)  # 8
```

### c) Default Parameters

```R
greet <- function(name="Guest") {
  print(paste("Hello", name))
}
greet()         # Hello Guest
greet("R User") # Hello R User
```

---

## 5. Control Structures

### a) If-Else

```R
x <- -2
if (x > 0) {
  print("Positive")
} else if (x < 0) {
  print("Negative")
} else {
  print("Zero")
}
```

### b) For Loop

```R
for (i in 1:5) {
  print(paste("Iteration:", i))
}
```

### c) While Loop

```R
count <- 1
while (count <= 3) {
  print(count)
  count <- count + 1
}
```

### d) Repeat Loop (similar to do-while)

```R
count <- 1
repeat {
  print(count)
  count <- count + 1
  if (count > 3) break
}
```

### e) Switch Statement

```R
choice <- "c"
result <- switch(choice,
                 "a" = "Apple",
                 "b" = "Banana",
                 "c" = "Cherry")
print(result)
```

---

## 6. Working with Objects and Data

### a) Types of Objects

|Object Type|Description|Example|
|---|---|---|
|Vector|One-dimensional array of same type|`c(1,2,3)`|
|Matrix|2D array of same type|`matrix(1:6,2,3)`|
|List|Collection of elements (any type)|`list(name="R", age=30)`|
|Data Frame|Table-like structure (rows & columns)|`data.frame(ID=1:3, Name=c("A","B","C"))`|
|Factor|Stores categorical data|`factor(c("M","F","M"))`|

---

### b) Manipulating Objects

```R
x <- c(10, 20, 30)
x[2]       # Access (20)
x[1] <- 15 # Modify element
length(x)  # Length
```

---

### c) Constructing Data Objects

```R
vec <- c(1,2,3,4)                        # Vector
mat <- matrix(1:9, 3, 3)                 # Matrix
lst <- list(name="R", year=1993)         # List
df  <- data.frame(ID=1:3, Score=c(90,85,88)) # Data Frame
```

---

### d) Types of Data Items

1. **Numeric** – `x <- 3.14`
2. **Integer** – `y <- 5L`
3. **Character** – `z <- "Hello"`
4. **Logical** – `flag <- TRUE`
5. **Complex** – `c <- 2+3i`

Check type:

```R
typeof(x)
class(df)
```

---

### e) Structure of Data Items

```R
str(df)
summary(df)
```

Output:

```
'data.frame': 3 obs. of  2 variables:
 $ ID   : int  1 2 3
 $ Score: num  90 85 88
```

---

### f) Reading and Getting Data

- **CSV File**:
    
    ```R
    data <- read.csv("data.csv", header=TRUE)
    head(data)
    ```
    
- **Text File**:
    
    ```R
    data <- read.table("data.txt", header=TRUE)
    ```
    
- **Keyboard Input**:
    
    ```R
    x <- readline(prompt="Enter a number: ")
    as.numeric(x)
    ```
    

---

### g) Manipulating Data

```R
df$Score[2] <- 95              # Modify value
subset(df, Score > 90)         # Filter rows
df$Grade <- c("A", "B", "A")   # Add new column
df[order(df$Score, decreasing=TRUE), ] # Sort
```

---

### h) Storing Data

```R
save(df, file="data.RData")     # Save R object
load("data.RData")              # Load R object
write.csv(df, "output.csv")     # Export to CSV
```

---

## Quick Diagram: Objects in R (Hierarchy)

```
Object
│
├── Atomic Vectors (numeric, character, logical, complex)
├── Matrix (2D homogeneous)
├── Array (multi-dimensional homogeneous)
├── List (heterogeneous collection)
└── Data Frame (table, columns = vectors)
```
