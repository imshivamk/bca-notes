---
dg-publish: true
---
Here’s a clean breakdown of Java JDBC implementations for your queries on:

1. **PreparedStatements and Stored Procedures using CallableStatements**
    
2. **Scrollable and Updatable ResultSets**
    
3. **DatabaseMetadata and ResultSetMetadata**
    

---

## ✅ 2. **PreparedStatements and Stored Procedures with CallableStatements**

### 🔹 A. PreparedStatement Example

```java
public void insertUsingPreparedStatement(Connection con) {
    try {
        String query = "INSERT INTO students (name, rollno, age, email) VALUES (?, ?, ?, ?)";
        PreparedStatement psmt = con.prepareStatement(query);

        Scanner sc = new Scanner(System.in);
        System.out.print("Name: ");
        psmt.setString(1, sc.nextLine());

        System.out.print("Roll No: ");
        psmt.setInt(2, Integer.parseInt(sc.nextLine()));

        System.out.print("Age: ");
        psmt.setInt(3, Integer.parseInt(sc.nextLine()));

        System.out.print("Email: ");
        psmt.setString(4, sc.nextLine());

        psmt.executeUpdate();
        System.out.println("Data inserted using PreparedStatement.");
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

---

### 🔹 B. CallableStatement for Stored Procedure

#### 📌 SQL (create this in DBMS first):

```sql
DELIMITER //
CREATE PROCEDURE getStudentByRoll(IN rno INT)
BEGIN
    SELECT * FROM students WHERE rollno = rno;
END;
//
DELIMITER ;
```

#### 📌 Java Code:

```java
public void callStoredProcedure(Connection con) {
    try {
        CallableStatement cstmt = con.prepareCall("{CALL getStudentByRoll(?)}");
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Roll No: ");
        cstmt.setInt(1, sc.nextInt());

        ResultSet rs = cstmt.executeQuery();

        while (rs.next()) {
            System.out.println("Name: " + rs.getString("name"));
            System.out.println("Age: " + rs.getInt("age"));
            System.out.println("Email: " + rs.getString("email"));
        }

    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

---

## ✅ 3. **Scrollable and Updatable ResultSet**

```java
public void scrollAndUpdate(Connection con) {
    try {
        Statement stmt = con.createStatement(
            ResultSet.TYPE_SCROLL_SENSITIVE,
            ResultSet.CONCUR_UPDATABLE
        );

        ResultSet rs = stmt.executeQuery("SELECT * FROM students");

        // Move to last
        rs.last();
        System.out.println("Last student: " + rs.getString("name"));

        // Move to first
        rs.first();
        System.out.println("First student: " + rs.getString("name"));

        // Update age of first student
        rs.updateInt("age", rs.getInt("age") + 1);
        rs.updateRow();
        System.out.println("First student's age updated.");

    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

---

## ✅ 4. **DatabaseMetadata and ResultSetMetadata**

### 🔹 A. DatabaseMetadata

```java
public void printDatabaseMetadata(Connection con) {
    try {
        DatabaseMetaData dbmd = con.getMetaData();

        System.out.println("Database Name: " + dbmd.getDatabaseProductName());
        System.out.println("Driver Name: " + dbmd.getDriverName());
        System.out.println("URL: " + dbmd.getURL());
        System.out.println("User: " + dbmd.getUserName());

    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

---

### 🔹 B. ResultSetMetadata

```java
public void printResultSetMetadata(Connection con) {
    try {
        Statement stmt = con.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT * FROM students");

        ResultSetMetaData rsmd = rs.getMetaData();
        int columnCount = rsmd.getColumnCount();

        System.out.println("Total columns: " + columnCount);
        for (int i = 1; i <= columnCount; i++) {
            System.out.println("Column " + i + ": " + rsmd.getColumnName(i) + " - " + rsmd.getColumnTypeName(i));
        }

    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

---

Let me know if you want this as a single class or split by topic for submission.