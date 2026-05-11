---
dg-publish: true
---

- [[#Definition|Definition]]
- [[#Advantages|Advantages]]
- [[#Disadvantages|Disadvantages]]
- [[#Characteristics|Characteristics]]
	- [[#Characteristics#1. Product quality|1. Product quality]]
	- [[#Characteristics#2. Customer satisfaction|2. Customer satisfaction]]
	- [[#Characteristics#3. Cost effective|3. Cost effective]]
	- [[#Characteristics#4. Security|4. Security]]
- [[#Principles of Software Testing|Principles of Software Testing]]
- [[#Types of testing|Types of testing]]

### Definition

1. its an important process in SDLC, that <mark style="background: #D2B3FFA6;">checks whether the actual software matches the expected requirements</mark> and ensures the software is bug-free user experience
2. process of <mark style="background: #D2B3FFA6;">evaluating</mark> a software application <mark style="background: #D2B3FFA6;">to ensure it meets specified requirements and is free from defects</mark>
3. checks whether the actual software matches the expected requirements
4. ensures the software is<mark style="background: #D2B3FFA6;"> bug-free</mark>
5. It involves 
	1. identifying bugs
	2. verifying functionality
	3. validating that the software performs as expected 
	   under various conditions.
4. method for<mark style="background: #2dba4e;"> assessment the functionality of the software</mark> program
5. purpose :  to identify errors, faults or missing requirements in contrast to actual requirements
### Advantages

- Identifies bugs early.
- Ensures quality and user satisfaction.
- Reduces development costs (long-term).

### Disadvantages

- Time-consuming (manual testing).
- Initial cost for automation tools.
- Requires skilled testers for complex systems.
### Characteristics

#### 1. Product quality
1. ensures the delivery of a high quality product
2. the errors are discovered and fixed early in the development cycle
#### 2. Customer satisfaction
1. Usability testing :  checks the application for how easily usable it is for the users to use the app
#### 3. Cost effective
1. Testing any object on time helps to save money and time for the long term
2. If the bugs are caught in the early phases of software testing, it costs less to fix those errors.
#### 4. Security
1. Security testing :  focused on testing the application for security attacks from internal or external sources
### Principles of Software Testing

- All the tests should meet the <mark style="background: #D2B3FFA6;">customer’s requirements.</mark>
- To make our software testing <mark style="background: #D2B3FFA6;">should be performed by a third party.</mark>
- Exhaustive testing is not possible. We need the optimal amount of testing based on the risk assessment of the application.
- All the<mark style="background: #D2B3FFA6;"> tests</mark> to be conducted should be<mark style="background: #D2B3FFA6;"> planned before implementing it</mark>
- <mark style="background: #D2B3FFA6;">Start testing with small parts and extend it to large parts</mark>.

### Types of testing

1. **Automation Testing**
	1.  AKA Test automation
	2.  tester write scripts and uses another software to test the product
	3.  used to re-run the test scenarios quickly and repeatedly 
	4. Common auto testing software : JUnit, Selenium
2. **Manual Testing** :  
	-  testing software manually
	-  without using any automation tool
	- Testers use test plans, test cases or test scenarios to test software to ensure the completeness of testing.
	- Common manual testing tools : JIRA, Test-Link
	  **different stages for manual testing** :-
	1. **White box**
		1. tester is aware of the internal workings of the product and has access to its source code
		2. conducted by making sure that all internal operations are performed according to the specifications
		**It includes**
		1. *unit Testing* 
			1. individual units/components of a software/system are tested 
			2. to validate that each unit of the software performs as designed
		3. *integration Testing*
			1. individual units are combined and tested as a group
			2. to expose faults in the interaction between integrated unit
		4. *system*
	3. **Black box**
		1. tester doesn’t have access to the source code of the software
		2. conducted at the software interface without any concern with the internal logical structure of the software
		**It Includes :**
		1. **Functional**  : verifying software functionality against requirements
			1. *Unit*
			2. *Integrated*
				1. Incremental
					1. Top-down
					2. Bottom-Up
				2. Non-Incremental
			3. *System*
		2. **Non-Functional** : Tests non functional aspects like performance, usability, and security.
			1. Performance
			2. Usability
			3. Compatibility

![](https://i.imgur.com/TJkErpe.png)
