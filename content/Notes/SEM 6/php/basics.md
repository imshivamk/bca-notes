## 1. variables and data types 

- $ : used to represent variables
	1. strings
	2. integers
	3. float
	4. booleans

```php
<?php
	$name = "Shivam";
	$age = 21;
	$gpa = 9.8
	$eligible = false;
	
	echo"Hello {$name}<br>";
	echo"You're {$age} yearts old";
	echo"Your gpa {$gpa}";
	
	if($age >= 18){
		$eligible = true;
	}	
?>
```

## 2. operators

1. arithmetic operators

```php
<?php 
	$z = $x + $y;
	$z = $x - $y;
	$z = $x / $y;
	$z = $x % $y;
	$z = $x * $y;
	$z = $x ** $y;	
	?>
```

2. increment / decrement

```php
$x++; 
$x--; 

```

## 3