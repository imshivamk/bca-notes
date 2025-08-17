---
dg-publish: true
---

## Java Database Connectivity (JDBC)

### 1. What is JDBC?

JDBC (Java Database Connectivity) is a Java API that allows Java applications to interact with a wide range of relational databases using SQL commands.

**Purpose:**

- Connect to databases from Java applications
    
- Send SQL queries and retrieve results
    
- Perform operations like insert, update, delete, and retrieve
    

---

### 2. JDBC Architecture

![JDBC Architecture (optional visual)]  
JDBC acts as a bridge between Java applications and a DBMS.

Components:

- JDBC API (provided by Java)
    
- JDBC Drivers (specific to DBMS like MySQL, Oracle, etc.)
    

---

### 3. JDBC Configuration

You need:

1. **JDBC Driver** – Provided by the database vendor (e.g., MySQL Connector/J for MySQL)
    
2. **Database URL** – Identifies the database location
    
3. **Username & Password**
    

**Example URL:**

```java
String url = "jdbc:mysql://localhost:3306/mydb";
```

---

### 4. Types of JDBC Drivers

| Type | Name                    | Description                              |
| ---- | ----------------------- | ---------------------------------------- |
| 1    | JDBC-ODBC Bridge        | Uses ODBC, legacy, not used anymore      |
| 2    | Native API              | Uses native DB library                   |
| 3    | Network Protocol        | Uses middleware server                   |
| 4    | Thin Driver (Pure Java) | Directly connects to database (used now) |

✅ Type 4 is widely used today.

---

### 5. Steps to Connect to a Database

1. **Load Driver Class**
2. **Create Connection**
3. **Create Statement**
4. **Execute Query**
5. **Process Result**
6. **Close Connection**
    

**Example:**

```java
import java.sql.*;

public class JDBCExample {
    public static void main(String[] args) throws Exception {
        // Step 1: Load driver
        Class.forName("com.mysql.cj.jdbc.Driver");

        // Step 2: Establish connection
        Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/testdb", "root", "password");

        // Step 3: Create Statement
        Statement stmt = con.createStatement();

        // Step 4: Execute query
        ResultSet rs = stmt.executeQuery("SELECT * FROM users");

        // Step 5: Process results
        while (rs.next()) {
            System.out.println(rs.getInt(1) + " " + rs.getString(2));
        }

        // Step 6: Close connection
        con.close();
    }
}
```

---

### 6. JDBC Statement Types

#### a. `Statement`

Used for static SQL queries (no parameters):

```java
Statement stmt = con.createStatement();
stmt.executeUpdate("INSERT INTO users VALUES (1, 'John')");
```

#### b. `PreparedStatement`

Used for dynamic, parameterized queries. Prevents SQL injection:

```java
PreparedStatement ps = con.prepareStatement("INSERT INTO users VALUES (?, ?)");
ps.setInt(1, 2);
ps.setString(2, "Alice");
ps.executeUpdate();
```

#### c. `CallableStatement`

Used to call stored procedures:

```java
CallableStatement cs = con.prepareCall("{call getUser(?)}");
cs.setInt(1, 1);
ResultSet rs = cs.executeQuery();
```

---

### 7. Scrollable and Updatable ResultSet

Allows navigating and updating rows directly:

```java
Statement stmt = con.createStatement(
    ResultSet.TYPE_SCROLL_INSENSITIVE,
    ResultSet.CONCUR_UPDATABLE);

ResultSet rs = stmt.executeQuery("SELECT * FROM users");

rs.absolute(2); // move to 2nd row
rs.updateString("name", "UpdatedName");
rs.updateRow();
```

---

### 8. ResultSet Methods

|Method|Description|
|---|---|
|`next()`|Moves to next row|
|`getInt(index)`|Gets int value from column|
|`getString(index)`|Gets string from column|
|`absolute(n)`|Moves to specific row|

---

### 9. Metadata in JDBC

#### a. DatabaseMetaData

Gives information about database:

```java
DatabaseMetaData dbmd = con.getMetaData();
System.out.println("DB Name: " + dbmd.getDatabaseProductName());
```

#### b. ResultSetMetaData

Gives info about result set columns:

```java
ResultSetMetaData rsmd = rs.getMetaData();
int columnCount = rsmd.getColumnCount();
for (int i = 1; i <= columnCount; i++) {
    System.out.println("Column Name: " + rsmd.getColumnName(i));
}
```

---

### 10. Best Practices

- Always close connections, statements, and result sets.
    
- Use try-with-resources or finally block for cleanup.
    
- Use `PreparedStatement` over `Statement` for security.
    

---

Would you like a visual flowchart or diagram for the JDBC process?