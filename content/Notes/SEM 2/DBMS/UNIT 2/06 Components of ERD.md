---
dg-publish: true
---
![](https://i.imgur.com/EymNDOG.png)
- [[#1. Entity|1. Entity]]
- [[#2. Weak Entity:|2. Weak Entity:]]
- [[#3. Attribute and types|3. Attribute and types]]
	- [[#2. Weak Entity:#1. Key attribute:|1. Key attribute:]]
	- [[#2. Weak Entity:#2. Composite Attribute|2. Composite Attribute]]
	- [[#2. Weak Entity:#3. Multivalued Attribute|3. Multivalued Attribute]]
	- [[#2. Weak Entity:#4. derived attribute|4. derived attribute]]
- [[#4. Relationships|4. Relationships]]
	- [[#2. Weak Entity:#1. One to One|1. One to One]]
	- [[#2. Weak Entity:#2. One to Many|2. One to Many]]
	- [[#2. Weak Entity:#3. Many to Many|3. Many to Many]]
	- [[#2. Weak Entity:#4. Many to one|4. Many to one]]


### 1. Entity
1. An Entity may be an <mark style="background: #BBFABBA6;">object with a physical existence</mark> – a particular person, car, house, or employee – or it may be an <mark style="background: #FFF3A3A6;">object with a conceptual existence</mark> – a company, a job, or a university course. 
2. An entity is represented as <mark style="background: #FFF3A3A6;">rectangle</mark> in an ER diagram.
3. Consider an organization as an example- <mark style="background: #FFF3A3A6;">manager, prodct, employee, department etc. can be taken as an entity.</mark>
4. For example: In the following ER diagram we have two entities Student and College and these two entities have many to one relationship as many students study in a single college.

![[Pasted image 20240219183617.png]]
![[Pasted image 20240219183630.png]]
### 2. Weak Entity:
1. An <mark style="background: #FFF3A3A6;">entity that depends on another entity</mark> called a weak entity.
2. The weak entity <mark style="background: #BBFABBA6;">doesn't contain any key attribute of its own</mark>.
3. The weak entity is represented by a <mark style="background: #BBFABBA6;">double rectangle.</mark>
4. For Example, A company may <mark style="background: #FFB86CA6;">store the information of dependents (Parents, Children, Spouse) of an Employee. But the dependents don’t have existed without the employee</mark>. So Dependent will be a Weak Entity Type and Employee will be Identifying Entity type for Dependent, which means it is Strong Entity Type.
![[Pasted image 20240219183646.png]]

## 3. Attribute and types
1. An attribute describes the <mark style="background: #FFB86CA6;">property of an entity.</mark>
2. For example, <mark style="background: #FFF3A3A6;">Roll No, Name, DOB, Age, Address</mark>, and Mobile No are the attributes that define entity type Student.
3. In ER diagram, the attribute is represented by an oval. 
[![](https://i.imgur.com/lw8kybem.png)](https://i.imgur.com/lw8kybe.png)


**There are four types of attributes:**

#### 1. Key attribute:

1. The attribute which <mark style="background: #FFB8EBA6;">uniquely identifies each entity in the entity set</mark> is called the key attribute.
2. For example, <mark style="background: #FFB8EBA6;">Roll no. will be unique for each student</mark>. 
3. In ER diagram, the key attribute is represented by an <mark style="background: #FFB8EBA6;">oval with underlying lines.</mark>
[![](https://i.imgur.com/ZlRn3Rmt.png)](https://i.imgur.com/ZlRn3Rm.png)



#### 2. Composite Attribute
1. An attribute <mark style="background: #FFB86CA6;">composed of many other attributes</mark> is called a composite attribute.
2. An attribute that is a <mark style="background: #FFB86CA6;">combination of other attributes</mark> is known as composite attribute
3. For example, <mark style="background: #FFB86CA6;">In student entity, the student address</mark> is a composite attribute as an address is composed of other attributes such as <mark style="background: #FFB86CA6;">pin code, state, country.</mark>

![](https://i.imgur.com/BTLAOzg.png)


#### 3. Multivalued Attribute
1. An attribute consisting of <mark style="background: #FFF3A3A6;">more than one value for a given entity.</mark>
2. An attribute that <mark style="background: #FFF3A3A6;">can hold multiple values</mark> is known as multivalued attribute.
3. It is represented with <mark style="background: #FFF3A3A6;">double ovals</mark> in an ER Diagram.
4. For example – A<mark style="background: #FFF3A3A6;"> person can have more than one phone numbers</mark> so the phone number attribute is multivalued.
[![](https://i.imgur.com/IJpY00kt.png)](https://i.imgur.com/IJpY00k.png)

#### 4. derived attribute
1. its an attribute that <mark style="background: #BBFABBA6;">can be derive from an existing attribute</mark>
2. for example, we can <mark style="background: #BBFABBA6;">derive the age attribute from the Date of birth</mark> of the entity.
[![](https://i.imgur.com/hp82oHzt.png)](https://i.imgur.com/hp82oHz.png)


## 4. Relationships

1. A relationship is used to describe the relation between entities. 
2. A relationship is represented by diamond shape in ER diagram, it shows the relationship among entities.
3. There are four types of cardinal relationships:

#### 1. One to One
1. A one-to-one relationship occurs when <mark style="background: #FFB86CA6;">each record in one entity is related to only one record in another entity, and vice versa.</mark>
2. This type of relationship is relatively rare in databases, but it is essential in specific scenarios.
3.  <mark style="background: #FFB86CA6;">each individual can only have one passport, and each passport can only belong to one person.</mark>
![](https://i.imgur.com/xzxVVcb.png)
[![](https://i.imgur.com/bTj8uqGm.png)](https://i.imgur.com/bTj8uqG.png)

#### 2. One to Many

1. The one-to-many relationship is the <mark style="background: #FFF3A3A6;">most common</mark> type of relationship in DBMS
2. In this relationship, <mark style="background: #FFB8EBA6;">a record in one entity can be associated with multiple records in another entity</mark>,
3. while <mark style="background: #FFF3A3A6;">each record in the second entity is related to only one record in the first entity.</mark>
4. For instance, in a customer and order database, <mark style="background: #FFB86CA6;">each customer can place multiple orders, but each order is associated with only one customer.</mark>
![](https://i.imgur.com/4Ix9s0F.png)
![](https://i.imgur.com/p60ccv3.png)

#### 3. Many to Many

1. A many-to-many relationship arises when <mark style="background: #FFF3A3A6;">multiple records in one entity can be linked to multiple records in another entity. </mark>
2. each student can enroll in multiple courses, and each course can have multiple students.
3. a customer can buy many products and a product can have multiple customers

![](https://i.imgur.com/WC2Jl0Y.png)

#### 4. Many to one
1. When entities in one entity set can take part only once in the relationship set
2. entities in other entity sets can take part more than once in the relationship set, <mark style="background: #FFB86CA6;">cardinality is many to one.</mark>