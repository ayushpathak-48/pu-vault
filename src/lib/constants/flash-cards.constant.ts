export const flashCards = [
  {
    subject_name: "Artificial Intelligence",
    key: "artificial-intelligence",
    specialization: "ai",
    units: [
      {
        id: 1,
        title: "Unit-1: Java Database Connectivity",
        key: "java-database-connectivity",
        cards: [
          {
            id: 1,
            front: "What is JDBC?",
            back: "JDBC (Java Database Connectivity) is an API that allows Java applications to interact with databases.",
          },
          {
            id: 2,
            front: "What are the main components of JDBC?",
            back: "JDBC API, JDBC Driver Manager, JDBC Drivers, and the Database.",
          },
          {
            id: 3,
            front: "What are the types of JDBC drivers?",
            back: "Type 1 (JDBC-ODBC Bridge), Type 2 (Native API), Type 3 (Network Protocol), Type 4 (Thin Driver).",
          },
          {
            id: 4,
            front: "Which JDBC driver type is platform-independent?",
            back: "Type 4 (Thin Driver) is 100% Java and platform-independent.",
          },
          {
            id: 5,
            front: "How do you load a JDBC driver?",
            back: 'Using `Class.forName("com.mysql.cj.jdbc.Driver")` or `DriverManager.registerDriver(new Driver())`.',
          },
          {
            id: 6,
            front: "What is the purpose of the DriverManager class?",
            back: "It manages a list of database drivers and establishes connections with the database.",
          },
          {
            id: 7,
            front: "How do you establish a connection to a database?",
            back: "Using `Connection con = DriverManager.getConnection(url, user, password);`.",
          },
          {
            id: 8,
            front: "What is the use of the Connection interface in JDBC?",
            back: "It provides methods to create statements and manage transactions.",
          },
          {
            id: 9,
            front: "What are the different types of JDBC statements?",
            back: "Statement, PreparedStatement, and CallableStatement.",
          },
          {
            id: 10,
            front:
              "What is the difference between Statement and PreparedStatement?",
            back: "PreparedStatement is precompiled and prevents SQL injection, while Statement executes raw queries.",
          },
          {
            id: 11,
            front: "How do you execute a SQL query using JDBC?",
            back: "Using `Statement.executeQuery()` for SELECT and `Statement.executeUpdate()` for INSERT/UPDATE/DELETE.",
          },
          {
            id: 12,
            front: "What is a ResultSet in JDBC?",
            back: "It is a table of data representing the result of a SQL query.",
          },
          {
            id: 13,
            front: "How do you retrieve data from a ResultSet?",
            back: "Using `rs.next()` to iterate and `rs.getXXX(columnName)` to fetch values.",
          },
          {
            id: 14,
            front: "What is a CallableStatement in JDBC?",
            back: "It is used to call stored procedures in a database.",
          },
          {
            id: 15,
            front: "How do you handle transactions in JDBC?",
            back: "By setting `con.setAutoCommit(false)`, executing queries, and using `con.commit()` or `con.rollback()`.",
          },
          {
            id: 16,
            front: "How do you close a JDBC connection?",
            back: "Using `con.close()`, `stmt.close()`, and `rs.close()` to free resources.",
          },
          {
            id: 17,
            front: "What is connection pooling in JDBC?",
            back: "It is a technique to reuse database connections for efficiency using DataSource or frameworks like HikariCP.",
          },
          {
            id: 18,
            front: "What is SQL injection, and how does JDBC prevent it?",
            back: "SQL injection is a security vulnerability. Using PreparedStatement helps prevent it.",
          },
          {
            id: 19,
            front:
              "What is the advantage of using DataSource over DriverManager?",
            back: "DataSource supports connection pooling and better resource management.",
          },
          {
            id: 20,
            front: "Which packages are commonly used in JDBC?",
            back: "`java.sql` and `javax.sql`.",
          },
        ],
      },
    ],
  },
  {
    subject_name: "Advance Java Programming",
    key: "advance-java-programming",
    units: [
      {
        id: 1,
        title: "Unit -1: Java Database Connectivity",
        key: "java-database-connectivity",
        cards: [
          {
            id: 1,
            front: "What is JDBC?",
            back: "JDBC (Java Database Connectivity) is an API that allows Java applications to interact with databases.",
          },
          {
            id: 2,
            front: "What are the main components of JDBC?",
            back: "JDBC API, JDBC Driver Manager, JDBC Drivers, and the Database.",
          },
          {
            id: 3,
            front: "What are the types of JDBC drivers?",
            back: "Type 1 (JDBC-ODBC Bridge), Type 2 (Native API), Type 3 (Network Protocol), Type 4 (Thin Driver).",
          },
          {
            id: 4,
            front: "Which JDBC driver type is platform-independent?",
            back: "Type 4 (Thin Driver) is 100% Java and platform-independent.",
          },
          {
            id: 5,
            front: "How do you load a JDBC driver?",
            back: 'Using `Class.forName("com.mysql.cj.jdbc.Driver")` or `DriverManager.registerDriver(new Driver())`.',
          },
          {
            id: 6,
            front: "What is the purpose of the DriverManager class?",
            back: "It manages a list of database drivers and establishes connections with the database.",
          },
          {
            id: 7,
            front: "How do you establish a connection to a database?",
            back: "Using `Connection con = DriverManager.getConnection(url, user, password);`.",
          },
          {
            id: 8,
            front: "What is the use of the Connection interface in JDBC?",
            back: "It provides methods to create statements and manage transactions.",
          },
          {
            id: 9,
            front: "What are the different types of JDBC statements?",
            back: "Statement, PreparedStatement, and CallableStatement.",
          },
          {
            id: 10,
            front:
              "What is the difference between Statement and PreparedStatement?",
            back: "PreparedStatement is precompiled and prevents SQL injection, while Statement executes raw queries.",
          },
          {
            id: 11,
            front: "How do you execute a SQL query using JDBC?",
            back: "Using `Statement.executeQuery()` for SELECT and `Statement.executeUpdate()` for INSERT/UPDATE/DELETE.",
          },
          {
            id: 12,
            front: "What is a ResultSet in JDBC?",
            back: "It is a table of data representing the result of a SQL query.",
          },
          {
            id: 13,
            front: "How do you retrieve data from a ResultSet?",
            back: "Using `rs.next()` to iterate and `rs.getXXX(columnName)` to fetch values.",
          },
          {
            id: 14,
            front: "What is a CallableStatement in JDBC?",
            back: "It is used to call stored procedures in a database.",
          },
          {
            id: 15,
            front: "How do you handle transactions in JDBC?",
            back: "By setting `con.setAutoCommit(false)`, executing queries, and using `con.commit()` or `con.rollback()`.",
          },
          {
            id: 16,
            front: "How do you close a JDBC connection?",
            back: "Using `con.close()`, `stmt.close()`, and `rs.close()` to free resources.",
          },
          {
            id: 17,
            front: "What is connection pooling in JDBC?",
            back: "It is a technique to reuse database connections for efficiency using DataSource or frameworks like HikariCP.",
          },
          {
            id: 18,
            front: "What is SQL injection, and how does JDBC prevent it?",
            back: "SQL injection is a security vulnerability. Using PreparedStatement helps prevent it.",
          },
          {
            id: 19,
            front:
              "What is the advantage of using DataSource over DriverManager?",
            back: "DataSource supports connection pooling and better resource management.",
          },
          {
            id: 20,
            front: "Which packages are commonly used in JDBC?",
            back: "`java.sql` and `javax.sql`.",
          },
        ],
      },
    ],
  },
];
