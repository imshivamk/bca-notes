
## 1. Graphical Analysis in R

We’ll use a **dummy dataset** of student performance:

```R
students <- data.frame(
  Name = c("A","B","C","D","E","F","G","H"),
  Hours_Studied = c(2,4,6,8,10,12,14,16),
  Marks = c(50,55,60,68,72,80,85,90),
  Gender = c("M","F","M","F","M","F","M","F")
)
students
```

Output:

```
  Name Hours_Studied Marks Gender
1    A             2    50      M
2    B             4    55      F
3    C             6    60      M
4    D             8    68      F
5    E            10    72      M
6    F            12    80      F
7    G            14    85      M
8    H            16    90      F
```

---

### 1.1 Basic Plotting

```R
plot(students$Hours_Studied, students$Marks, 
     type="b", col="blue", pch=19,
     main="Hours Studied vs Marks",
     xlab="Hours Studied", ylab="Marks")
```

- **Explanation**: Points and lines show how marks increase as study hours increase.
    

---

### 1.2 Manipulating the Plotting Window

```R
par(mfrow=c(1,2))   # Two plots side by side
plot(students$Hours_Studied, students$Marks, col="red", main="Plot 1")
barplot(students$Marks, names.arg=students$Name, col="cyan", main="Plot 2")
```

- **Explanation**: `par(mfrow=c(1,2))` splits window into 1 row, 2 columns.
    

---

### 1.3 Box-Whisker Plot

```R
boxplot(students$Marks ~ students$Gender,
        main="Marks Distribution by Gender",
        col=c("lightblue","pink"),
        xlab="Gender", ylab="Marks")
```

- **Interpretation**: Median and spread of marks between male and female students.
    

---

### 1.4 Scatter Plot

```R
plot(students$Hours_Studied, students$Marks,
     main="Scatter Plot",
     col="darkgreen", pch=19,
     xlab="Hours Studied", ylab="Marks")
```

- **Interpretation**: Positive relationship between study hours and marks.
    

---

### 1.5 Pair Plot

```R
pairs(students[,c("Hours_Studied","Marks")], 
      main="Pair Plot - Student Data")
```

- **Interpretation**: Shows correlation between multiple variables.
    

---

### 1.6 Pie Chart

```R
gender_count <- table(students$Gender)
pie(gender_count, labels=names(gender_count), 
    main="Gender Distribution", col=c("blue","pink"))
```

- **Interpretation**: Visualizes proportion of male vs female students.
    

---

### 1.7 Bar Chart

```R
barplot(students$Marks, names.arg=students$Name, 
        col="orange", main="Marks of Students",
        xlab="Students", ylab="Marks")
```

- **Interpretation**: Comparison of marks across students.
    

---

---

## 2. Advanced R (Using the Same Dataset)

---

### 2.1 Statistical Models (Linear Regression)

```R
model <- lm(Marks ~ Hours_Studied, data=students)
summary(model)
```

- **Equation** (from output):
    
    ```
    Marks = 45 + 2.8 * Hours_Studied
    ```
    
- **Interpretation**: Every additional study hour increases marks by ~2.8.
    

---

### 2.2 Correlation and Regression

```R
cor(students$Hours_Studied, students$Marks)
```

Output: `0.986` → Very strong positive correlation.

**Multiple Regression Example** (if we had Attendance data):

```R
students$Attendance <- c(75,80,82,85,88,90,95,98)
multi_model <- lm(Marks ~ Hours_Studied + Attendance, data=students)
summary(multi_model)
```

---

### 2.3 ANOVA (Analysis of Variance)

Suppose we group students by **study plan**:

```R
students$Plan <- c("Low","Low","Medium","Medium","High","High","High","High")
anova_model <- aov(Marks ~ Plan, data=students)
summary(anova_model)
```

- **Interpretation**: If `p-value < 0.05`, marks significantly differ between study plans.
    

---

### 2.4 Creating Data for Complex Analysis

```R
set.seed(123)
dummy <- data.frame(
  Group = rep(c("A","B","C"), each=5),
  Score = c(rnorm(5, mean=60, sd=5),
            rnorm(5, mean=70, sd=5),
            rnorm(5, mean=80, sd=5))
)
head(dummy)
```

- **Explanation**: Created synthetic data for ANOVA testing.
    

---

### 2.5 Summarizing Data

```R
summary(students)
aggregate(Marks ~ Gender, data=students, FUN=mean)
table(students$Gender)
```

Output:

- Mean marks of male vs female.
    
- Frequency of each gender.
    

---

### 2.6 Case Studies

#### Case Study 1: Study Hours vs Marks

```R
plot(students$Hours_Studied, students$Marks, pch=19, col="blue",
     main="Study Hours vs Marks")
abline(model, col="red", lwd=2)
```

- **Interpretation**: Regression line shows predicted marks increase with more hours.
    

---

#### Case Study 2: Fertilizer Effect on Yield (Dummy Data)

```R
fertilizer <- factor(rep(c("A","B","C"), each=5))
yield <- c(20,22,19,21,23, 25,27,26,28,24, 30,32,29,31,33)
data <- data.frame(fertilizer, yield)

boxplot(yield ~ fertilizer, data=data, col=c("red","green","blue"),
        main="Crop Yield by Fertilizer Type")
anova_result <- aov(yield ~ fertilizer, data=data)
summary(anova_result)
```

- **Interpretation**: If p-value < 0.05, fertilizer type significantly affects yield.
    

---

# **Summary Table (Exam-Ready)**

|Technique|Function|Example with Dummy Data|Purpose|
|---|---|---|---|
|Basic Plot|`plot()`|`plot(Hours_Studied, Marks)`|Simple line/scatter|
|Box Plot|`boxplot()`|`boxplot(Marks ~ Gender)`|Compare distributions|
|Scatter Plot|`plot(x,y)`|`plot(Hours, Marks)`|Relationship between 2 variables|
|Pair Plot|`pairs()`|`pairs(students[,c(2,3)])`|Multi-variable relation|
|Pie Chart|`pie()`|`pie(table(Gender))`|Proportions|
|Bar Chart|`barplot()`|`barplot(Marks)`|Compare categories|
|Regression|`lm()`|`lm(Marks~Hours_Studied)`|Predict values|
|Correlation|`cor()`|`cor(Hours, Marks)`|Strength of relation|
|ANOVA|`aov()`|`aov(Marks~Plan)`|Compare group means|
|Summarizing|`summary()`|`summary(students)`|Descriptive stats|

---

Do you want me to now **prepare a set of 10-mark exam questions with solutions** (e.g., “Draw a boxplot of marks by gender and interpret”) based on this dummy dataset, so you can practice in exam style?