---
dg-publish: true
---
## data types

1. Scaler - scalers in R are vectors of size 1
	1. double
	2. int
	3. character
	4. logical (true/false)
2. Vector - Vectors are **one-dimensional homogeneous** data structures.
	1. array
	2. matrix
	3. data frame
	

```r
>v1 <- c(1, 2, 3)           # Numeric vector
v2 <- c("a", "b", "c")     # Character vector
v3 <- c(TRUE, FALSE, TRUE) # Logical vector
```


A scalar is treated as a numeric vector of length 1


```r
x <- 5     
length(x)  # Output: 1
```


> x = c(1,2,3,4,5,6,7,8,9,10);
> y = c(8,0,4,6,2,10,20,14,8,-9);
> z = x+y


> print(z);
 [1]  9  2  7 10  7 16 27 22 17  1
> min(y)
[1] -9
> max(y)
[1] 20
> min(x)
[1] 1
> mix(y)
> range_y = max(y) - min(y)
[1] 29

> ls()
[1] "max_x"   "max_y"   "min_x"   "min_y"   "range_y" "x"       "y"
[8] "z"

> summary(y)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
   -9.0     2.5     7.0     6.3     9.5    20.0


## plot graphs

>plot(x,y)
>barplot(x,y)
>plot(x,y,type="l")

![[Pasted image 20250805152102.png]]

![[Pasted image 20250805152030.png]]

## read exccel file

>install.packages("readxl")
>find.package("readxl")


>library(readxl)

>data_file = file.choose()
>patient_data = read_xlsx(data_file)
>patient_data


![[Pasted image 20250805151401.png]]

## operations on data 

> str(patient_data)


![[Pasted image 20250805150358.png]]

### metadata

>patient_data$"weight"

![[Pasted image 20250805151705.png]]

> head(patient_data) // first 6 rows
> tail(patient_data) // last 6 rows
> patine


## random access to data

>patient_data[2]

![[Pasted image 20250805150833.png]]
>patient_data[1:3, 2]

![[Pasted image 20250805150723.png]]


>patient_Data[, c(3,5)]

![[Pasted image 20250805151111.png]]
>patient_data[c(1,4), c(1,3,5)]

![[Pasted image 20250805151138.png]]
## 
>patient_weight = patient_data$"weight"

![[Pasted image 20250805152210.png]]

## using conditions

### find the average weight of smokers in the given dataset
> smoking_patients = patients_data[patients_data$"smoking" == TRUE]

![[Pasted image 20250805152809.png]]