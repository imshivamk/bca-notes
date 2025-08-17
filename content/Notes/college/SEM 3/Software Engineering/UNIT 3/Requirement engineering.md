---
dg-publish: true
---


- [[#1. What is requirement engineering|1. What is requirement engineering]]
	- [[#1. What is requirement engineering#Scope of requirement engineering|Scope of requirement engineering]]
	- [[#1. What is requirement engineering#7 distinct tasks of requirement engineering|7 distinct tasks of requirement engineering]]
	- [[#1. What is requirement engineering#Key Phases in requirement engineering|Key Phases in requirement engineering]]
- [[#2. Software requirements and types|2. Software requirements and types]]
	- [[#2. Software requirements and types#Types of Software requirements|Types of Software requirements]]
		- [[#Types of Software requirements#1. User|1. User]]
		- [[#Types of Software requirements#2. System requirements|2. System requirements]]
		- [[#Types of Software requirements#3. Domain|3. Domain]]
		- [[#Types of Software requirements#4. Functional|4. Functional]]
		- [[#Types of Software requirements#5. Non functional|5. Non functional]]
- [[#Requirement elicitation|Requirement elicitation]]
- [[#4. SRS System requirement specifications|4. SRS System requirement specifications]]
		- [[#Types of Software requirements#SRS format acc to IEEE|SRS format acc to IEEE]]
- [[#5. Characteristics of good SRS|5. Characteristics of good SRS]]
		- [[#Types of Software requirements#purpose|purpose]]


## 1. What is requirement engineering

1. process of collecting the software requirement from the client, then understand ,evaluate and document
2. process of establishing services that the customer requires from the system.
3. goal : develop and maintain sophisticated SRS document
4. software engineer and customer take an active role
5. use techniques and principles for cost effective analysis, documentation and understand user needs.
6. process of gathering, analyzing, documenting, and managing the requirements of a software system.
7. ensures that the software meets user needs and expectations

### Scope of requirement engineering

1. understand customer requirement and needs
2. analyze the feasibility of their requirement
3. negotiate reasonable solutions
4. specify clear solution
5. manage all requirements
6. requirement --> project

### 7 distinct tasks of requirement engineering

1. inception
2. ellicitation
3. elaboration
4. negotiation
5. specification
6. validation
7. requirement management

### Key Phases in requirement engineering

1. **Requirement Elicitation**: Gathering requirements from stakeholders.
2. **Requirement Analysis**: Analyzing and prioritizing the gathered requirements.
3. **Requirement Specification**: Documenting the requirements in a clear and precise manner.
4. **Requirement Validation**: Ensuring the requirements are complete and feasible.
5. **Requirement Management**: Handling changes to the requirements throughout the software lifecycle.

## 2. Software requirements and types

1. description of features and functionalities of the target system
2. Requirements convey the expectation of users from the software product.
3. requirements can be obvious or hidden, known or unknown, expected or unexpected from client’s point of view.

### Types of Software requirements

#### 1. User 
1. Written for customers.
2. For e. g User Interface, Natural language
#### 2. System requirements
1. higher level then functional and non-functional requirements
2. Structured document setting our detailed description of the system’s functions, services and operational constraints 
#### 3. Domain
1. Requirements of the application domain of the system, reflect characteristics of a domain of projects
2. requirements are therefore identified from that domain model and are <mark style="background: #FFB8EBA6;">not user specific</mark>
3. 
#### 4. Functional
1. Statement of services, how the system should react to particular inputs, what functionality is to be provided. 
2. Functional requirements are not concerned with how these functions are to be achieved, <mark style="background: #D2B3FFA6;">just what is to be achieved</mark>.
#### 5. Non functional
1. quality constraints that the system must satisfy according to the project contract.
2. <mark style="background: #FFB8EBA6;">deals with attributes, or properties, of the software rather than functions.</mark>
3. Portability , Security Reliability Performance Flexibility reusability


## Requirement elicitation

1. definition
2. characteristics
3. diagram
4. steps of elicitation - identify stakeholders, gather reuirements, prioritize requirements, categorize feasibility
5. process activities - discovery, classification, priority and negotitation, specification
6. techniques/methods - interviews, brainstorming sessions, application specific technique, use case approach, quality function deployment

![](https://i.imgur.com/LKgxoOB.png)

![](https://i.imgur.com/VyGWFJE.png)

![](https://i.imgur.com/RDp83v9.png)

## 4. SRS System requirement specifications

1. Official statement of the system, that the developers should implement
2. complete description of requirements of the software that need to be fulfilled for the successful development
3. functional/non-functional
4. user requirements as well as system specification requirements

#### SRS format acc to IEEE 
1. intro
2. general description
3. functional req
4. interface req
5. non functional/qualitative req

## 5. Characteristics of good SRS

1. Correct:  Should accurately reflect product functionality and specification at any point of time. 
2. Unambiguous: Should not be any confusion regarding interpretation of the requirements.
3. Complete: Should contain all the features requested by a client.
4. Consistent: Same abbreviations and conventions must be followed throughout the document .
5. Modifiable: SRS must be structured to permit effective modifications.(e.g. don’t be redundant, keep requirements separate)
6. Traceable: Origin of each requirement is clear. 
7. Verifiable:  An SRS is verifiable only if every stated requirement can be verified. A requirement is verifiable if there exists some finite cost effective process with which we can check that the SW meets the requirement.

#### purpose
1. framework that all will follow
2. defines SW product we will build
3. know all requirements for SWDev
4. critical info - dev ops and quality assuarance
5. reduce time and effort
6. feedback to custimer