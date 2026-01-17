	
![[Pasted image 20250814142050.png]]

- total number of records - 49
- total number of fields - 112

> total data bits = 49 * 112 = 5488

| no. | Field      | Data_Purpose                |
| --- | ---------- | --------------------------- |
| 1   | Timestamps | when the test was submitted |
| 2   | Username   | name of the student         |
...

>In a new sheet, copy and paste the Fields from the dataset. 

![[Screenshot 2025-08-14 141944.png]]

![[Pasted image 20250814152041.png]]
## using R

```r
find.package("readxl")
library(readxl)
data_file = file.choose()
class_test_data = read_xlsx(data_file)
```

```r
class_test_data
```

```
# A tibble: 28 × 2
   ScoreBCA ScoreMCA
      <dbl>    <dbl>
 1        4       39
 2       47       44
 3       47       48
 4       48       49
 5       42       50
 6       38       48
 7       47       42
 8       47       46
 9       48       42
10       48       47
```

```r
ScoreBCA = class_test_data$"ScoreBCA"
ScoreMCA = class_test_data$"ScoreMCA"
```

```r
str(ScoreBCA)
summary(ScoreBCA)
str(ScoreMCA)
summary(ScoreMCA)
```


```r
install.packages("writexl")
library(writexl)
data_file = file.choose()

```