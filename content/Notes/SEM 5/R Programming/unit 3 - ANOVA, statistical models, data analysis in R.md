
## **1. Statistical Models Overview**

**Definition:**  
A _statistical model_ describes how data are generated and how variables relate to each other.  
It represents a mathematical relationship between dependent (response) and independent (predictor) variables.

**General form:**  
$$
Y = f(X) + \epsilon  
$$
where

- ( Y ): dependent variable
    
- ( X ): independent variable(s)
    
- ( f(X) ): systematic component (model function)
    
- ( \epsilon ): random error term
    

**Types of Models:**

1. **Descriptive** – summarize data (mean, median, variance)
    
2. **Inferential** – estimate population parameters, test hypotheses
    
3. **Predictive** – forecast or predict outcomes using regression or ML
    

**In R:**  
Common modeling functions include:

```r
lm()      # Linear models (regression)
glm()     # Generalized linear models
aov()     # ANOVA
cor()     # Correlation
summary() # Model summaries
```

---

## **2. Correlation Analysis**

### **Definition:**

Correlation measures the **strength and direction of a linear relationship** between two quantitative variables.

$$
r = \frac{ \sum (x_i - \bar{x})(y_i - \bar{y}) }{ \sqrt{ \sum (x_i - \bar{x})^2 \sum (y_i - \bar{y})^2 } }  
$$

- ( r ) ranges from -1 to +1
    
- ( r = 1 ): perfect positive correlation
    
- ( r = -1 ): perfect negative correlation
    
- ( r = 0 ): no linear correlation
    

---

### **R Syntax:**

```r
cor(x, y, method = "pearson")
cor.test(x, y, method = "pearson")  # gives test and confidence interval
```

**Methods:**

- `"pearson"` – linear correlation (default)
    
- `"spearman"` – rank correlation (non-parametric)
    
- `"kendall"` – concordance-based correlation
    

---

### **Example:**

**Dataset:**  
Car speed vs stopping distance (from built-in dataset `cars`)

```r
data(cars)
head(cars)
cor(cars$speed, cars$dist)
cor.test(cars$speed, cars$dist)
```

**Output Interpretation:**

- Suppose `r = 0.8069` → strong positive correlation.
    
- As speed increases, stopping distance tends to increase.
    

---

### **Real-world case:**

In **finance**, correlation helps assess how two stocks move together.  
For example, correlation between NIFTY50 and SENSEX daily returns shows market linkage.

```r
cor(nifty_returns, sensex_returns)
```

---

## **3. Regression Analysis**

### **Definition:**

Regression models quantify the **relationship between a dependent variable** and **one or more independent variables**.

### **Types:**

- **Simple Linear Regression:** one predictor
    
- **Multiple Linear Regression:** multiple predictors
    
- **Nonlinear Regression:** relationship not linear in parameters
    
- **Logistic Regression:** categorical response (binary outcomes)
    

---

### **A. Simple Linear Regression**

**Model:**  
$$
Y = \beta_0 + \beta_1 X + \epsilon  

$$


**R Syntax:**

```r
model <- lm(y ~ x, data = dataset)
summary(model)
plot(x, y)
abline(model, col = "red")
```

**Example:**

```r
data(cars)
model <- lm(dist ~ speed, data = cars)
summary(model)
```

**Interpretation:**

- `Estimate(Intercept)` → expected dist when speed = 0
    
- `Estimate(speed)` → expected change in distance for each 1-unit increase in speed
    
- `R-squared` → how well model explains data variance
    

**Visualization:**

```r
plot(cars$speed, cars$dist, main="Speed vs Distance", xlab="Speed", ylab="Distance")
abline(model, col="blue")
```

---

### **B. Multiple Linear Regression**

**Model:**  
$$ 
Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + ... + \beta_k X_k + \epsilon  
$$

**R Syntax:**

```r
model2 <- lm(Sales ~ TV + Radio + Newspaper, data = marketing)
summary(model2)
```

**Example Dataset:**

```r
marketing <- data.frame(
  TV = c(230, 44, 17, 151, 180),
  Radio = c(37, 39, 45, 41, 10),
  Newspaper = c(69, 45, 23, 15, 12),
  Sales = c(22, 10, 9, 18, 15)
)
```

**Interpretation:**

- Coefficients show how each media type contributes to Sales.
    
- `p-value < 0.05` → significant predictor.
    
- `Adjusted R²` accounts for multiple variables.
    

---

### **C. Logistic Regression**

Used when the dependent variable is **binary (0/1)**.  
Example: Predicting if a patient has diabetes based on BMI and age.

```r
model3 <- glm(diabetes ~ age + bmi, data = health, family = binomial)
summary(model3)
```

---

### **Real-world case:**

In **healthcare**, regression models predict disease risk (heart disease vs cholesterol, age).  
In **marketing**, regression predicts sales from ad expenditure.

---

## **4. Analysis of Variance (ANOVA)**

### **Definition:**

ANOVA tests if **mean differences** among **three or more groups** are statistically significant.

**Hypotheses:**

- ( H_0 ): All group means are equal
    
- ( H_1 ): At least one group mean differs
    

---

### **R Syntax:**

```r
result <- aov(y ~ factor, data = dataset)
summary(result)
TukeyHSD(result)  # pairwise comparison
```

---

### **Example:**

Testing effect of fertilizer type on plant yield.

|Fertilizer|Yield|
|---|---|
|A|20|
|A|22|
|B|27|
|B|25|
|C|30|
|C|28|

```r
fertilizer <- data.frame(
  type = rep(c("A", "B", "C"), each = 2),
  yield = c(20, 22, 27, 25, 30, 28)
)

result <- aov(yield ~ type, data = fertilizer)
summary(result)
TukeyHSD(result)
```

**Interpretation:**

- If `p-value < 0.05`, reject H₀ → mean yields differ by fertilizer type.
    

---

### **Real-world case:**

- In **agriculture**, ANOVA compares crop yields using different fertilizers.
    
- In **education**, compares test scores of different teaching methods.
    

---

## **5. Creating Data for Complex Analysis**

### **Manually Creating Data Frames**

```r
data <- data.frame(
  Name = c("A", "B", "C"),
  Score = c(80, 90, 75),
  Gender = c("M", "F", "M")
)
```

### **Generating Random Data**

```r
set.seed(123)
df <- data.frame(
  age = sample(18:60, 100, replace = TRUE),
  income = rnorm(100, mean = 50000, sd = 10000),
  gender = sample(c("Male", "Female"), 100, replace = TRUE)
)
head(df)
```

### **Combining and Merging**

```r
merged <- merge(df1, df2, by = "ID")
```

### **Importing Data**

```r
read.csv("data.csv")
read.table("data.txt", header=TRUE)
```

---

## **6. Summarizing Data**

**Descriptive Statistics in R:**

```r
summary(df)
mean(df$age)
median(df$income)
sd(df$income)
var(df$income)
range(df$income)
```

**Grouped Summaries:**

```r
aggregate(income ~ gender, data=df, FUN=mean)
tapply(df$income, df$gender, mean)
```

**Visual Summaries:**

```r
boxplot(df$income ~ df$gender)
hist(df$age)
```

---

## **7. Case Study: Predicting House Prices**

**Objective:** Predict house prices using size and number of bedrooms.

```r
house <- data.frame(
  size = c(1400, 1600, 1700, 1875, 1100),
  bedrooms = c(3, 3, 3, 4, 2),
  price = c(245000, 312000, 279000, 308000, 199000)
)

model <- lm(price ~ size + bedrooms, data = house)
summary(model)
```

**Interpretation:**

- `size` has a strong positive coefficient → larger houses cost more.
    
- Model helps predict prices of new houses.
    

---

## **8. Summary Table**

|Concept|Function|Key Output|Real-world Application|
|---|---|---|---|
|Correlation|`cor()`, `cor.test()`|r, p-value|Relation between variables|
|Linear Regression|`lm()`|Coefficients, R²|Predict continuous outcomes|
|Logistic Regression|`glm(..., family=binomial)`|Odds ratios|Predict binary outcomes|
|ANOVA|`aov()`|F-statistic, p-value|Compare group means|
|Summaries|`summary()`, `aggregate()`|Mean, median, sd|Descriptive analysis|
