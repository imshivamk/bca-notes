---
dg-publish: true
---

*NOTE n is the size of the array*

![](https://i.imgur.com/jffx7YW.png)


## INSERTION

Array = {11, 12, 13, 14};
n = 4;
insert 15 at position  2;
posi = 2;

- **FORWARD SHIFTING**

```c
for(int i = n - 1; i >= posi - 1; i--)
{
	array[i+1] = array[i];
}
```


![](https://i.imgur.com/kmnilD4.png)

- assign value to be inserted at the target index

![](https://i.imgur.com/uHjGUHA.png)

- **n++**

![](https://i.imgur.com/7z9nZMP.png)

## DELETION

**Array = {11, 12, 13, 14};**
**n = 4;**

**DELETE position 2**
**Posi = 2;**


![](https://i.imgur.com/XL139y2.png)

- BACKWARD SHIFTING

```c
for(int i = posi - 1; i< n; i++)
{
	array[i] = array[i+1];
}
```

![](https://i.imgur.com/N648szR.png)
