---
dg-publish: true
---
An array in C is a data structure that stores a collection of similar data types in contiguous memory locations. Arrays are declared using the following syntax:

C

```
data_type array_name[array_size];
```

where `data_type` is the data type of the elements in the array, `array_name` is the name of the array, and `array_size` is the number of elements in the array.

One-dimensional arrays are the simplest type of array, and they have only one dimension. To access an element in a one-dimensional array, we use the following syntax:

C

```
array_name[index]
```

where `index` is the index of the element in the array. The index of the first element in the array is 0, and the index of the last element is `array_size` - 1.

Here is an example of a one-dimensional array in C:

C

```
int numbers[5] = {10, 20, 30, 40, 50};
```

This array declares an array of five integers, named `numbers`. The elements of the array are initialized to the values 10, 20, 30, 40, and 50.

To access an element in the array, we can use the following syntax:

C

```
int number = numbers[2];
```

This statement will assign the value of the third element in the array, which is 30, to the variable `number`.

We can also use a for loop to iterate over all of the elements in the array:

C

```
for (int i = 0; i < 5; i++) {
  printf("%d\n", numbers[i]);
}
```

This code will print the following output:

```
10
20
30
40
50
```

One-dimensional arrays are a powerful data structure that can be used to store and manipulate a variety of data types. They are commonly used in a wide range of applications, including sorting, searching, and data analysis.