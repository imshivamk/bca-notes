---
dg-publish: true
---

## Entity-Relationship (ER) Data Model  

1. describes the structure of a database <mark style="background: #FFB8EBA6;">with the help of a diagram</mark>, which is <mark style="background: #FFB86CA6;">known as Entity Relationship Diagram</mark> (ER Diagram).
2. An ER model is a <mark style="background: #FFF3A3A6;">design or blueprint of a database</mark> that can later be implemented as a database.
3. The main components:
	1. entity set
	2. relationship set.
4. An ER diagram shows the relationship among entity sets.
5. model for <mark style="background: #BBFABBA6;">identifying entities to be represented</mark> in the database and <mark style="background: #BBFABBA6;">representation of how those entities are related</mark>.
6. ER models are u<mark style="background: #FFF3A3A6;">sed to model real-world objects like a person, a car, or a company</mark> 
7. relation between these real-world objects.
8. In short, the <mark style="background: #FFB86CA6;">ER Diagram is the structural format of the database. </mark>

## Symbols Used in ER Model  

1. <mark style="background: #BBFABBA6;">Rectangles</mark>: Rectangles represent <mark style="background: #FFF3A3A6;">Entities</mark> in the ER Model.
2. <mark style="background: #BBFABBA6;">Ellipses</mark>: Ellipses represent <mark style="background: #FFF3A3A6;">Attributes</mark> in the ER Model.
3. <mark style="background: #BBFABBA6;">Diamond</mark>: Diamonds represent <mark style="background: #FFF3A3A6;">Relationships among Entities.</mark>
4. <mark style="background: #BBFABBA6;">Lines</mark>: Lines represent attributes to entities and entity sets with other <mark style="background: #FFF3A3A6;">relationship</mark> types.
5. <mark style="background: #ABF7F7A6;">Double Ellipse</mark>: Double Ellipses represent <mark style="background: #FFF3A3A6;">Multi-Valued Attributes </mark>.
6. <mark style="background: #ABF7F7A6;">Double Rectangle</mark>: Double Rectangle represents a <mark style="background: #FFF3A3A6;">Weak Entity</mark>.

]![](https://i.imgur.com/UhLLtag.png)

## Components of a ER Diagram

### 1. Entity
1. An Entity may be an <mark style="background: #BBFABBA6;">object with a physical existence</mark> – a particular person, car, house, or employee – or it may be an <mark style="background: #FFF3A3A6;">object with a conceptual existence</mark> – a company, a job, or a university course. 
2. An entity is represented as <mark style="background: #FFF3A3A6;">rectangle</mark> in an ER diagram.
3. Consider an organization as an example- <mark style="background: #FFF3A3A6;">manager, prodct, employee, department etc. can be taken as an entity.</mark>
4. For example: In the following ER diagram we have two entities Student and College and these two entities have many to one relationship as many students study in a single college.
### 2. Weak Entity:
1. An <mark style="background: #FFF3A3A6;">entity that depends on another entity</mark> called a weak entity.
2. The weak entity <mark style="background: #BBFABBA6;">doesn't contain any key attribute of its own</mark>.
3. The weak entity is represented by a <mark style="background: #BBFABBA6;">double rectangle.</mark>
4. For Example, A company may <mark style="background: #FFB86CA6;">store the information of dependents (Parents, Children, Spouse) of an Employee. But the dependents don’t have existed without the employee</mark>. So Dependent will be a Weak Entity Type and Employee will be Identifying Entity type for Dependent, which means it is Strong Entity Type.

## 3. Attribute and types
1. An attribute describes the <mark style="background: #FFB86CA6;">property of an entity.</mark>
2. For example, <mark style="background: #FFF3A3A6;">Roll No, Name, DOB, Age, Address</mark>, and Mobile No are the attributes that define entity type Student.
3. In ER diagram, the attribute is represented by an oval. 
##### There are four types of attributes:
1. Key attribute:
	1. The attribute which <mark style="background: #FFB8EBA6;">uniquely identifies each entity in the entity set</mark> is called the key attribute.
	2. For example, <mark style="background: #FFB8EBA6;">Roll no. will be unique for each student</mark>. 
	3. In ER diagram, the key attribute is represented by an <mark style="background: #FFB8EBA6;">oval with underlying lines.</mark>
2. Composite Attribute
	1. An attribute <mark style="background: #FFB86CA6;">composed of many other attributes</mark> is called a composite attribute.
	2. An attribute that is a <mark style="background: #FFB86CA6;">combination of other attributes</mark> is known as composite attribute.
	3. For example, <mark style="background: #FFB86CA6;">In student entity, the student address</mark> is a composite attribute as an address is composed of other attributes such as <mark style="background: #FFB86CA6;">pin code, state, country.</mark>
3. Multivalued Attribute
	1. An attribute consisting of <mark style="background: #FFF3A3A6;">more than one value for a given entity.</mark>
	2. An attribute that <mark style="background: #FFF3A3A6;">can hold multiple values</mark> is known as multivalued attribute.
	3. It is represented with <mark style="background: #FFF3A3A6;">double ovals</mark> in an ER Diagram.
	4. For example – A<mark style="background: #FFF3A3A6;"> person can have more than one phone numbers</mark> so the phone number attribute is multivalued.
4. derived attribute
	1. its an attribute that <mark style="background: #BBFABBA6;">can be derive from an existing attribute</mark>
	2. for example, we can <mark style="background: #BBFABBA6;">derive the age attribute from the Date of birth</mark> of the entity.


## 4. Relationships

1. one to one e.g a person can have only one passport
2. one to many e.g  <mark style="background: #FFB86CA6;">each customer can place multiple orders, but each order is associated with only one customer.</mark>
3. many to many e.g a customer can buy many products and a product can have multiple customers
4. many to one e.g 