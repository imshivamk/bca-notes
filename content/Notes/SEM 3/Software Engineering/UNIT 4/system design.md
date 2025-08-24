---
dg-publish: true
---

- [[#ANALYSIS AND DESIGN TOOLS|ANALYSIS AND DESIGN TOOLS]]
	- [[#ANALYSIS AND DESIGN TOOLS#1. Entity-Relationship Diagram (ERD)|1. Entity-Relationship Diagram (ERD)]]
	- [[#ANALYSIS AND DESIGN TOOLS#2. Decision Tree|2. Decision Tree]]
		- [[#2. Decision Tree#Decision Table|Decision Table]]
	- [[#ANALYSIS AND DESIGN TOOLS#3. Data Flow Diagram (DFD)|3. Data Flow Diagram (DFD)]]
	- [[#ANALYSIS AND DESIGN TOOLS#4. Data Dictionary|4. Data Dictionary]]
		- [[#4. Data Dictionary#Elements of Data Dictionary:|Elements of Data Dictionary:]]
		- [[#4. Data Dictionary#Advantages:|Advantages:]]
	- [[#ANALYSIS AND DESIGN TOOLS#5. Pseudo Code|5. Pseudo Code]]
	- [[#ANALYSIS AND DESIGN TOOLS#6. Input and Output Design|6. Input and Output Design]]
- [[#STRUCTURED SYSTEM DESIGN|STRUCTURED SYSTEM DESIGN]]
	- [[#STRUCTURED SYSTEM DESIGN#1. Modules|1. Modules]]
	- [[#STRUCTURED SYSTEM DESIGN#2. Structured Chart|2. Structured Chart]]
	- [[#STRUCTURED SYSTEM DESIGN#3. Qualities of Good Design|3. Qualities of Good Design]]
	- [[#STRUCTURED SYSTEM DESIGN#4. Coupling|4. Coupling]]
		- [[#4. Coupling#Types of Coupling:|Types of Coupling:]]
	- [[#STRUCTURED SYSTEM DESIGN#5. Cohesion|5. Cohesion]]
		- [[#5. Cohesion#Types of Cohesion:|Types of Cohesion:]]
	- [[#STRUCTURED SYSTEM DESIGN#6. Case Studies|6. Case Studies]]

## ANALYSIS AND DESIGN TOOLS

### 1. Entity-Relationship Diagram (ERD)

- Definition: Visual representation of entities in a system and the relationships between them.
    
- Components:
    
    - Entities: Represented by rectangles (e.g., Student, Course).
    - Attributes: Represented by ovals (e.g., Student Name, Course Code).
    - Relationships: Represented by diamonds, linking entities (e.g., Enrollment links Student to Course).
- Example:  
    An ERD for a university system might show a "Student" entity connected to a "Course" entity through an "Enrolled In" relationship.
    

---

### 2. Decision Tree

- Definition: A tree-like model that represents decisions, their possible outcomes, and associated consequences.
- Usage: Helps in logical decision-making.
- Example:  
    A decision tree for determining whether to grant a loan might branch based on conditions like "Credit Score" and "Income".

#### Decision Table

- Definition: A tabular representation of conditions and their corresponding actions.
- Components:
    - Conditions: Columns for decision variables.
    - Actions: Rows for actions to be taken.
- Example:
    
    |Conditions|High Credit|Low Credit|High Income|Low Income|
    |---|---|---|---|---|
    |Action (Loan)|Approve|Reject|Approve|Reject|
    

---

### 3. Data Flow Diagram (DFD)

- Definition: Shows the flow of data within a system, emphasizing inputs, processes, and outputs.
    
- Components:
    
    - External Entity: Represented by rectangles.
    - Process: Represented by circles.
    - Data Store: Represented by open rectangles.
    - Data Flow: Represented by arrows.
- Example:  
    For an online ordering system:
    
    - External Entity: Customer
    - Process: Place Order
    - Data Store: Orders Database
    - Data Flow: Customer -> Place Order -> Orders Database

---

### 4. Data Dictionary

- Definition: A centralized repository of information about data elements, their meaning, relationships, and usage.

#### Elements of Data Dictionary:

- Data element name
- Description
- Data type (e.g., integer, string)
- Size (e.g., 10 characters)
- Allowed values or range

#### Advantages:

- Simplifies communication between team members.
- Helps maintain data consistency.
- Facilitates system design and documentation.

---

### 5. Pseudo Code

- Definition: A plain-English representation of program logic, focusing on structure rather than syntax.
- Example:
    
    ```
    IF age >= 18 THEN  
        PRINT "Eligible to vote"  
    ELSE  
        PRINT "Not eligible to vote"  
    ```
    

---

### 6. Input and Output Design

- Input Design: Focuses on how data is captured (e.g., forms, input fields).
    - Goals: Reduce errors, ensure clarity.
    - Example: A login form with fields for username and password.
- Output Design: Deals with how information is presented (e.g., reports, dashboards).
    - Goals: Ensure readability and usability.
    - Example: An invoice generated after a purchase.

---

## STRUCTURED SYSTEM DESIGN

### 1. Modules

- Concept: A system is divided into smaller, manageable units (modules).
- Types of Modules:
    1. Control Module: Coordinates other modules.
    2. Functional Module: Performs a specific task.

---

### 2. Structured Chart

- Definition: A hierarchical diagram showing system modules and their relationships.
- Example: A payroll system may have modules like Employee Data, Tax Calculation, and Pay Generation.

---

### 3. Qualities of Good Design

- Modularity: Breaks system into independent parts.
- Scalability: Accommodates future growth.
- Readability: Easy for developers to understand.
- Flexibility: Allows changes without major redesign.

---

### 4. Coupling

- Definition: The degree of dependency between modules.

#### Types of Coupling:

1. Content Coupling: One module uses another's data directly.
2. Control Coupling: One module controls the behavior of another.
3. Data Coupling: Modules communicate through well-defined data.
4. Low Coupling: Ideal; reduces dependencies.

---

### 5. Cohesion

- Definition: The degree to which elements in a module belong together.

#### Types of Cohesion:

1. Functional Cohesion: Performs a single, well-defined task.
2. Sequential Cohesion: Output of one part is input to another.
3. Logical Cohesion: Performs related tasks.

---

### 6. Case Studies

- Example: Hospital Management System
    - Modules: Patient Records, Billing, Appointment Scheduling.
    - Input Design: Patient details form.
    - Output Design: Bills, patient reports.
    - ERD: Shows relationships like Patient -> Doctor -> Treatment.

---

Let me know if you'd like diagrams for any section!