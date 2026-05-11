Statistical Models in R**

### **Dataset: Students’ Marks in Different Subjects**

```r
# Create a sample dataset
students <- data.frame(
  Name = c("Alice", "Bob", "Charlie", "David", "Ella"),
  Maths = c(85, 70, 90, 65, 95),
  Science = c(88, 75, 92, 60, 98),
  English = c(80, 68, 85, 70, 90),
  StudyHours = c(5, 3, 6, 2, 7)
)

students
```

**Output:**

| Name    | Maths | Science | English | StudyHours |     |
| ------- | ----- | ------- | ------- | ---------- | --- |
| Alice   | 85    | 88      | 80      | 5          |     |
| Bob     | 70    | 75      | 68      | 3          |     |
| Charlie | 90    | 92      | 85      | 6          |     |
| David   | 65    | 60      | 70      | 2          |     |
| Ella    | 95    | 98      | 90      | 7          |     |

---

## **1️⃣ Linear Regression (Simple)**

**Objective:** Predict **Science marks** based on **Maths marks**.

```r
# Linear regression model
linear_model <- lm(Science ~ Maths, data = students)
summary(linear_model)
```

**Explanation:**

- `Science` is the dependent variable, `Maths` is independent.
    
- R will estimate coefficients (\beta_0) and (\beta_1).
    
- Can be used to predict Science marks for a given Maths score.
    

---

## **2️⃣ Multiple Linear Regression**

**Objective:** Predict **Science marks** based on **Maths and English marks**.

```r
# Multiple linear regression
multi_model <- lm(Science ~ Maths + English, data = students)
summary(multi_model)
```

**Explanation:**

- Combines multiple predictors.
    
- Useful to see **combined effect** of Maths and English on Science.
    

---

## **3️⃣ Logistic Regression**

**Objective:** Predict whether a student **passed Science** (pass ≥ 75) based on **StudyHours**.

```r
# Create a binary variable: pass/fail
students$PassScience <- ifelse(students$Science >= 75, 1, 0)
```

```r
students$PassScience <- ifelse(students$Science >= 75, 1, 0)

for (i in 1: length(students$Names}))
{
	if (students[i]$Science >= 75){
students$PassedScience = 1
}
else{
students[i]$PassedScience = 0
}
}

```

```r
# Logistic regression
log_model <- glm(PassScience ~ StudyHours, data = students, family = binomial)
summary(log_model)
```

**Explanation:**

- `PassScience` is binary (1 = Pass, 0 = Fail).
- `StudyHours` is the predictor.
- Can estimate probability of passing based on hours studied.

---

## **4️⃣ ANOVA (Analysis of Variance)**

**Objective:** Test if the **average Maths marks** differ across **groups based on StudyHours**.

```r
# Categorize students into groups
students$StudyGroup <- cut(students$StudyHours, breaks=c(0,3,5,7), labels=c("Low","Medium","High"))

# ANOVA model
anova_model <- aov(Maths ~ StudyGroup, data = students)
summary(anova_model)
```

**Explanation:**

- Compares mean Maths marks between Low, Medium, High study groups.
    
- Tests the hypothesis: “Do study groups differ in Maths performance?”
    

---

## **5️⃣ Generalized Linear Model (GLM) - Poisson Example**

**Objective:** Model the **number of subjects scored above 85** (count data) based on **StudyHours**.

```r
# Count subjects scored above 85
students$HighScores <- rowSums(students[,c("Maths","Science","English")] > 85)

# Poisson regression
glm_model <- glm(HighScores ~ StudyHours, data = students, family = poisson)
summary(glm_model)
```

**Explanation:**

- Response: Count of high scores per student.
    
- Predictor: StudyHours.
    
- GLM allows modeling **non-normal response variables** like counts.
    

---

### ✅ **Summary Table of Models**

|Model|Dependent|Independent|Type of Response|R Function|
|---|---|---|---|---|
|Linear Regression|Science|Maths|Continuous|`lm()`|
|Multiple Linear Regression|Science|Maths + English|Continuous|`lm()`|
|Logistic Regression|PassScience|StudyHours|Binary|`glm(family=binomial)`|
|ANOVA|Maths|StudyGroup|Continuous (grouped)|`aov()`|
|GLM (Poisson)|HighScores|StudyHours|Count|`glm(family=poisson)`|
