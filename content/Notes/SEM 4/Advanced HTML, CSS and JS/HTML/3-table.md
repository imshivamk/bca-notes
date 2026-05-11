---
dg-publish: true
---
> [[#1. Definition|1. Definition]]
  [[#2. Basic Table Structure|2. Basic Table Structure]]
  [[#3. Table with Borders and Caption|3. Table with Borders and Caption]]
  [[#4. `colspan` Attribute|4. `colspan` Attribute]]
  [[#5. `rowspan` Attribute|5. `rowspan` Attribute]]
  [[#6. Complete Table Example with `colspan` and `rowspan`|6. Complete Table Example with `colspan` and `rowspan`]]
  [[#7. Summary|7. Summary]]

## 1. Definition

1. HTML tables are used to **organize data in rows and columns**.
    
2. The `<table>` element is used to create a table structure.
    
3. Tables can include headings, data cells, borders, and attributes for layout control.
    

---

 ## 2. Basic Table Structure

 Tags Used:

|Tag|Description|
|---|---|
|`<table>`|Defines the table|
|`<tr>`|Table row|
|`<th>`|Table header cell (bold & centered)|
|`<td>`|Table data cell|
|`<caption>`|Table caption (optional)|

---

 Syntax:

```html
<table>
  <tr>
    <th>Heading 1</th>
    <th>Heading 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

 Output:

|Heading 1|Heading 2|
|---|---|
|Data 1|Data 2|

---

## 3. Table with Borders and Caption

```html
<table border="1">
  <caption>Student Information</caption>
  <tr>
    <th>Name</th>
    <th>Roll No</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>101</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>102</td>
  </tr>
</table>
```

 Notes:

- The `border` attribute adds a visible border to the table.
    
- The `<caption>` element gives a title to the table.
    

---

## 4. `colspan` Attribute

1. Used to **merge multiple columns** into one cell.
    
2. Specifies the number of columns a cell should span.
    

 Example:

```html
<table border="1">
  <tr>
    <th colspan="2">Student Details</th>
  </tr>
  <tr>
    <td>Name</td>
    <td>John</td>
  </tr>
</table>
```

 Output:

|Student Details|
|---|
|Name|

---

## 5. `rowspan` Attribute

1. Used to **merge multiple rows** into one cell.
    
2. Specifies the number of rows a cell should span.
    

 Example:

```html
<table border="1">
  <tr>
    <th rowspan="2">Name</th>
    <td>John</td>
  </tr>
  <tr>
    <td>Doe</td>
  </tr>
</table>
```

 Output:

| Name | John |  
| | Doe |

---

## 6. Complete Table Example with `colspan` and `rowspan`

```html
<table border="1">
  <caption>Employee Details</caption>
  <tr>
    <th>Name</th>
    <th>Department</th>
    <th colspan="2">Contact</th>
  </tr>
  <tr>
    <td rowspan="2">Alice</td>
    <td>HR</td>
    <td>Email</td>
    <td>alice@example.com</td>
  </tr>
  <tr>
    <td>HR</td>
    <td>Phone</td>
    <td>1234567890</td>
  </tr>
</table>
```

---

## 7. Summary

|Attribute|Use|
|---|---|
|`border`|Adds a border around the table|
|`colspan`|Merges multiple columns|
|`rowspan`|Merges multiple rows|
|`caption`|Adds a heading above the table|

---

Let me know if you want notes on **styling tables using CSS** or how tables are used in responsive web design.