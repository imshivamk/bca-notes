---
dg-publish: true
---
## Arrays 

1. Arrays are defined as the collection of similar types of data items stored at contiguous memory locations.
2. It is the fundamental data structure and a derived data type which can store multiple elements of the same data type under one common name.
3. It is one of the simplest data structures where each data element can be randomly accessed by using its index number.
4. For example, if we want to store the marks of a student in 6 subjects, then we don't need to define a different variable for the marks in different subjects.
5. Instead, we can define an array that can store the marks in each subject at the contiguous memory locations.

## Properties
1. Each element in an array is of the same data type and carries the same size that is 4 bytes.
2. Elements in the array are stored at contiguous memory locations from which the first element is stored at the smallest memory location. 
3. Elements of the array can be randomly accessed since we can calculate the address of each element of the array with the given base address and the size of the data element. 

### Advantages
1. Array provides the single name for the group of variables of the same type.
2. Traversing an array is a very simple process 
3. Random access : Any element in the array can be directly accessed by using the index. 

### Disadvantages
1. Array is homogenous.
2. It means that the elements with similar data type can be stored in it. 
3. The size of an array is fixed, meaning it cannot be expanded or shrunk during runtime.
4. In array, there is static memory allocation that is size of an array cannot be altered.
5. There will be wastage of memory if we store less number of elements than the declared size.

## Operations
1. **Traversal** - This operation is performed to traverse through the array elements. It prints all array elements one after another.
2. **Insertion** - This operation is performed to insert one or more elements into the array. As per the requirements, an element can be added at the beginning, end, or at any index of the array.
3. **Deletion** - This operation is performed to insert one or more elements into the array. As per the requirements, an element can be added at the beginning, end, or at any index of the array. 
4. **Search** - This operation is performed to search an element in the array based on the value or index.
5. **Update** - This operation is performed to update an existing array element located at the given index.