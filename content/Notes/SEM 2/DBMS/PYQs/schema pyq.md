## Q1. Students are taken admission in college, office procedure is completed by office employee, students attending class, they have library card with them. Students are making a project practice in laboratory with the help of above information. Design a database schema for Student Admission System by following the normalization rules


Designing a database schema for a Student Admission System involves identifying the entities and relationships, and then structuring them into tables while following normalization rules to avoid redundancy and ensure data integrity. Here's a step-by-step approach to design the schema:

### Step 1: Identify the Entities
1. **Student**: Information about students.
2. **Admission**: Details about the admission process.
3. **Employee**: Information about the office employees handling the admission process.
4. **Class**: Details about the classes that students attend.
5. **LibraryCard**: Information about the library cards issued to students.
6. **Project**: Information about projects that students work on in the laboratory.
7. **Laboratory**: Details about the laboratory where students practice.

### Step 2: Define the Attributes
- **Student**: `student_id`, `name`, `date_of_birth`, `address`, `phone_number`, `email`
- **Admission**: `admission_id`, `student_id`, `admission_date`, `employee_id`
- **Employee**: `employee_id`, `name`, `position`, `office_phone`, `email`
- **Class**: `class_id`, `class_name`, `schedule`, `room_number`
- **LibraryCard**: `card_id`, `student_id`, `issue_date`, `expiry_date`
- **Project**: `project_id`, `student_id`, `lab_id`, `project_title`, `supervisor_id`, `start_date`, `end_date`
- **Laboratory**: `lab_id`, `lab_name`, `location`, `capacity`

### Step 3: Define the Relationships
- A **student** can have one **library card**.
- A **student** can be involved in multiple **projects**.
- An **employee** manages the **admission** process.
- A **class** can have multiple **students**.

### Step 4: Create the Database Schema
 tables banao for each entity with its attributes
### Step 5: Normalization
- **First Normal Form (1NF)**: Ensure each table has a primary key and contains only atomic (indivisible) values.
- **Second Normal Form (2NF)**: Ensure that all non-key attributes are fully functional dependent on the primary key.
- **Third Normal Form (3NF)**: Ensure that all the attributes are not only dependent on the primary key but also independent of each other.

The schema provided above adheres to these normalization rules, ensuring minimal redundancy and optimal data integrity.