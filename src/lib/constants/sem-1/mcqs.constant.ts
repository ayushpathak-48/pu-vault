export const sem1MCQs = [
  // // AJP
  // {
  //   subject_name: "Advance Java Programming",
  //   key: "advance-java-programming",
  //   course: null,
  //   units: [
  //     {
  //       id: 1,
  //       title: "Unit - 1: Java Database Connectivity",
  //       key: "java-database-connectivity",
  //       all_mcqs: [
  //         {
  //           id: 1,
  //           title: "What does JDBC stand for?",
  //           options: [
  //             "Java Database Connectivity",
  //             "Java Data Communication",
  //             "Java Data Control",
  //             "Java Database Configuration",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "JDBC stands for Java Database Connectivity, which is an API for connecting and executing queries with databases.",
  //         },
  //         {
  //           id: 2,
  //           title: "Which of the following is not a core component of JDBC?",
  //           options: ["DriverManager", "Statement", "Driver", "Servlet"],
  //           correct_option: 3,
  //           solution: "Servlet is part of Java EE and not a JDBC component.",
  //         },
  //         {
  //           id: 3,
  //           title: "Which interface is used to execute SQL queries in JDBC?",
  //           options: ["Connection", "Driver", "Statement", "SQLException"],
  //           correct_option: 2,
  //           solution: "Statement interface is used to execute SQL queries.",
  //         },
  //         {
  //           id: 4,
  //           title: "Which JDBC component manages a list of database drivers?",
  //           options: ["Driver", "Statement", "DriverManager", "Connection"],
  //           correct_option: 2,
  //           solution:
  //             "DriverManager is responsible for managing a list of database drivers.",
  //         },
  //         {
  //           id: 5,
  //           title:
  //             "Which object is returned by the getConnection() method of DriverManager?",
  //           options: ["Statement", "Connection", "Driver", "ResultSet"],
  //           correct_option: 1,
  //           solution: "The getConnection() method returns a Connection object.",
  //         },
  //         {
  //           id: 6,
  //           title: "Which method is used to execute SQL SELECT queries?",
  //           options: [
  //             "executeUpdate()",
  //             "execute()",
  //             "executeSelect()",
  //             "executeQuery()",
  //           ],
  //           correct_option: 3,
  //           solution:
  //             "The executeQuery() method is used to execute SELECT queries.",
  //         },
  //         {
  //           id: 7,
  //           title: "What is the return type of executeQuery() method?",
  //           options: ["ResultSet", "Connection", "Statement", "int"],
  //           correct_option: 0,
  //           solution: "The executeQuery() method returns a ResultSet object.",
  //         },
  //         {
  //           id: 8,
  //           title: "Which JDBC driver type uses ODBC driver under the hood?",
  //           options: ["Type 1", "Type 2", "Type 3", "Type 4"],
  //           correct_option: 0,
  //           solution:
  //             "Type 1 JDBC driver uses ODBC driver to connect to the database.",
  //         },
  //         {
  //           id: 9,
  //           title: "Which of the following is a feature of Type 4 JDBC driver?",
  //           options: [
  //             "Requires native code",
  //             "Translates JDBC calls into database-specific calls using middleware",
  //             "Translates JDBC calls directly into database calls",
  //             "Uses ODBC for communication",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "Type 4 JDBC driver translates JDBC calls directly into database-specific calls using a pure Java implementation.",
  //         },
  //         {
  //           id: 10,
  //           title: "Which interface provides metadata about the ResultSet?",
  //           options: [
  //             "DatabaseMetaData",
  //             "ResultSetMetaData",
  //             "Statement",
  //             "CallableStatement",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "ResultSetMetaData interface provides metadata about the ResultSet object.",
  //         },
  //         {
  //           id: 11,
  //           title: "Which method is used to execute an update in the database?",
  //           options: [
  //             "executeQuery()",
  //             "execute()",
  //             "executeUpdate()",
  //             "submitQuery()",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "The executeUpdate() method is used for executing INSERT, UPDATE, DELETE queries.",
  //         },
  //         {
  //           id: 12,
  //           title: "What is a CallableStatement used for?",
  //           options: [
  //             "Executing SQL queries",
  //             "Calling stored procedures",
  //             "Managing connections",
  //             "Reading metadata",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "CallableStatement is used for executing stored procedures in JDBC.",
  //         },
  //         {
  //           id: 13,
  //           title:
  //             "Which of the following statements is used for precompiled SQL statements?",
  //           options: [
  //             "Statement",
  //             "PreparedStatement",
  //             "CallableStatement",
  //             "Connection",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "PreparedStatement is used for executing precompiled SQL statements.",
  //         },
  //         {
  //           id: 14,
  //           title: "How does JDBC handle transactions?",
  //           options: [
  //             "Automatically commits after each statement",
  //             "Requires manual commit",
  //             "Only supports auto-commit mode",
  //             "Does not support transactions",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "By default, JDBC auto-commits, but transactions can be manually managed using setAutoCommit(false).",
  //         },
  //         {
  //           id: 15,
  //           title: "Which method sets auto-commit mode in JDBC?",
  //           options: [
  //             "setCommit()",
  //             "autoCommit()",
  //             "setAutoCommit(boolean)",
  //             "commitMode()",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "The setAutoCommit(boolean) method is used to enable or disable auto-commit mode.",
  //         },
  //         {
  //           id: 16,
  //           title: "Which method commits a transaction in JDBC?",
  //           options: [
  //             "commit()",
  //             "setAutoCommit()",
  //             "execute()",
  //             "executeUpdate()",
  //           ],
  //           correct_option: 0,
  //           solution: "The commit() method commits a transaction in JDBC.",
  //         },
  //         {
  //           id: 17,
  //           title: "Which method is used to rollback a transaction?",
  //           options: [
  //             "rollbackTransaction()",
  //             "undo()",
  //             "rollback()",
  //             "cancel()",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "The rollback() method is used to roll back a transaction.",
  //         },
  //         {
  //           id: 18,
  //           title: "Which of the following is not a valid JDBC driver type?",
  //           options: ["Type 1", "Type 2", "Type 3", "Type 5"],
  //           correct_option: 3,
  //           solution:
  //             "There are only four types of JDBC drivers (Type 1 to Type 4).",
  //         },
  //         {
  //           id: 19,
  //           title: "Which exception class handles JDBC errors?",
  //           options: [
  //             "IOException",
  //             "SQLException",
  //             "JDBCException",
  //             "DBException",
  //           ],
  //           correct_option: 1,
  //           solution: "SQLException class is used for handling JDBC errors.",
  //         },
  //         {
  //           id: 20,
  //           title: "What does the ResultSet interface represent?",
  //           options: [
  //             "A connection to the database",
  //             "A precompiled statement",
  //             "A table of data representing a database result",
  //             "A SQL query",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "ResultSet represents a table of data returned by executing a query.",
  //         },
  //         {
  //           id: 21,
  //           title:
  //             "Which method of ResultSet moves the cursor to the next row?",
  //           options: ["moveNext()", "nextRow()", "next()", "advance()"],
  //           correct_option: 2,
  //           solution:
  //             "The next() method moves the cursor to the next row in the ResultSet.",
  //         },
  //         {
  //           id: 22,
  //           title:
  //             "What will happen if you call getString() on a ResultSet without moving the cursor?",
  //           options: [
  //             "Returns first row",
  //             "Throws SQLException",
  //             "Returns null",
  //             "Returns empty string",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "You must call next() before accessing data; otherwise, SQLException is thrown.",
  //         },
  //         {
  //           id: 23,
  //           title: "Which method of Connection object creates a Statement?",
  //           options: [
  //             "getStatement()",
  //             "createStatement()",
  //             "buildStatement()",
  //             "newStatement()",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "createStatement() is the correct method used to create a Statement object.",
  //         },
  //         {
  //           id: 24,
  //           title: "What does the PreparedStatement object help prevent?",
  //           options: [
  //             "Data loss",
  //             "SQL injection",
  //             "Connection timeout",
  //             "Concurrency issues",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "PreparedStatement helps prevent SQL injection by using placeholders for parameters.",
  //         },
  //         {
  //           id: 25,
  //           title: "Which method is used to close a JDBC connection?",
  //           options: ["end()", "finish()", "close()", "terminate()"],
  //           correct_option: 2,
  //           solution: "close() method is used to close a JDBC Connection.",
  //         },
  //         {
  //           id: 26,
  //           title: "Which JDBC driver type is known as the thin driver?",
  //           options: ["Type 1", "Type 2", "Type 3", "Type 4"],
  //           correct_option: 3,
  //           solution:
  //             "Type 4 is known as the thin driver as it is a pure Java driver that communicates directly with the database.",
  //         },
  //         {
  //           id: 27,
  //           title: "What is the role of the Driver class in JDBC?",
  //           options: [
  //             "Execute SQL",
  //             "Load JDBC driver",
  //             "Manage connection pool",
  //             "Handle exceptions",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Driver class is responsible for loading JDBC drivers at runtime.",
  //         },
  //         {
  //           id: 28,
  //           title:
  //             "Which method of DriverManager is used to load the driver class explicitly?",
  //           options: [
  //             "DriverManager.loadDriver()",
  //             "Class.forName()",
  //             "DriverManager.register()",
  //             "DriverManager.initialize()",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             'Class.forName("driver class") is used to load the JDBC driver explicitly.',
  //         },
  //         {
  //           id: 29,
  //           title:
  //             "Which method can you use to retrieve metadata about the database itself?",
  //           options: [
  //             "getDatabaseMetaData()",
  //             "getMetaData()",
  //             "getSchemaInfo()",
  //             "getTableInfo()",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "getDatabaseMetaData() provides information about the database's structure and capabilities.",
  //         },
  //         {
  //           id: 30,
  //           title: "Which of the following statements is true about ResultSet?",
  //           options: [
  //             "It is scrollable by default",
  //             "It is forward-only by default",
  //             "It updates the database automatically",
  //             "It supports batch execution",
  //           ],
  //           correct_option: 1,
  //           solution: "By default, ResultSet is forward-only and read-only.",
  //         },
  //         {
  //           id: 31,
  //           title: "How do you get the number of columns in a ResultSet?",
  //           options: [
  //             "rs.getColumnCount()",
  //             "ResultSet.getColumns()",
  //             "rs.getMetaData().getColumnCount()",
  //             "ResultSet.getMetaData().columns()",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "You can get column count using rs.getMetaData().getColumnCount().",
  //         },
  //         {
  //           id: 32,
  //           title:
  //             "Which interface is used to represent stored procedures in JDBC?",
  //           options: [
  //             "Statement",
  //             "PreparedStatement",
  //             "CallableStatement",
  //             "ResultSet",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "CallableStatement is used to execute stored procedures in JDBC.",
  //         },
  //         {
  //           id: 33,
  //           title:
  //             "What is returned by executeUpdate() when running an INSERT or UPDATE?",
  //           options: ["ResultSet", "boolean", "int", "void"],
  //           correct_option: 2,
  //           solution:
  //             "executeUpdate() returns an int representing the number of rows affected.",
  //         },
  //         {
  //           id: 34,
  //           title:
  //             "Which method of PreparedStatement sets a String value in a SQL query?",
  //           options: ["setText()", "setString()", "setChar()", "setValue()"],
  //           correct_option: 1,
  //           solution:
  //             "setString(int parameterIndex, String value) is used to set a String in a PreparedStatement.",
  //         },
  //         {
  //           id: 35,
  //           title:
  //             "Which method sets a parameter to an integer value in PreparedStatement?",
  //           options: ["setInt()", "setNumber()", "setInteger()", "setDigit()"],
  //           correct_option: 0,
  //           solution:
  //             "setInt() sets a parameter to an int value in PreparedStatement.",
  //         },
  //         {
  //           id: 36,
  //           title:
  //             "How do you retrieve a value from the third column in ResultSet?",
  //           options: [
  //             "rs.get(3)",
  //             "rs.getColumn(3)",
  //             "rs.getValue(3)",
  //             "rs.getString(3)",
  //           ],
  //           correct_option: 3,
  //           solution:
  //             "You can retrieve a String value from a column using getString(columnIndex).",
  //         },
  //         {
  //           id: 37,
  //           title:
  //             "Which ResultSet method checks if the cursor is before the first row?",
  //           options: [
  //             "isFirst()",
  //             "isBeforeFirst()",
  //             "checkFirst()",
  //             "cursorAtStart()",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "isBeforeFirst() returns true if the cursor is before the first row.",
  //         },
  //         {
  //           id: 38,
  //           title: "What happens if you forget to close the JDBC connection?",
  //           options: [
  //             "It gets closed automatically",
  //             "Database crashes",
  //             "Memory leak and resource lock",
  //             "Nothing",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "Forgetting to close JDBC connections can cause memory leaks and keep resources locked.",
  //         },
  //         {
  //           id: 39,
  //           title: "Which of the following allows batch updates in JDBC?",
  //           options: [
  //             "PreparedStatement",
  //             "CallableStatement",
  //             "Statement",
  //             "All of the above",
  //           ],
  //           correct_option: 3,
  //           solution:
  //             "All of the above can be used for batch updates using addBatch() and executeBatch().",
  //         },
  //         {
  //           id: 40,
  //           title: "Which method of Statement adds a query to the batch?",
  //           options: ["addQuery()", "addToBatch()", "addBatch()", "queue()"],
  //           correct_option: 2,
  //           solution: "addBatch() adds SQL commands to a batch for execution.",
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "Unit - 2: Java Servlets",
  //       key: "java-servlets",
  //       all_mcqs: [
  //         {
  //           id: 1,
  //           title:
  //             "Which of the following is a popular web server used for running servlets?",
  //           options: [
  //             "Apache Hadoop",
  //             "Apache Kafka",
  //             "Apache Tomcat",
  //             "Apache Maven",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "Apache Tomcat is a widely used web server and servlet container for running Java servlets.",
  //         },
  //         {
  //           id: 2,
  //           title:
  //             "Which environment variable must be set to compile and run Java programs?",
  //           options: ["JAVA_LIB", "JAVA_PATH", "JAVA_HOME", "JAVA_ENV"],
  //           correct_option: 2,
  //           solution:
  //             "JAVA_HOME points to the JDK directory and is essential for compiling Java programs.",
  //         },
  //         {
  //           id: 3,
  //           title: "Which port is used by default by Apache Tomcat?",
  //           options: ["80", "8080", "443", "8005"],
  //           correct_option: 1,
  //           solution:
  //             "Apache Tomcat uses port 8080 as its default HTTP connector port.",
  //         },
  //         {
  //           id: 4,
  //           title: "What is a servlet?",
  //           options: [
  //             "A Java applet",
  //             "A Java class that responds to web requests",
  //             "A JavaScript module",
  //             "A database connection",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "A servlet is a Java class that runs on a web server and handles client requests.",
  //         },
  //         {
  //           id: 5,
  //           title: "Which method is called once in a servlet life cycle?",
  //           options: ["init()", "service()", "doGet()", "destroy()"],
  //           correct_option: 0,
  //           solution:
  //             "init() is called once when the servlet is first loaded to perform initialization.",
  //         },
  //         {
  //           id: 6,
  //           title: "Which method handles GET requests in a servlet?",
  //           options: ["doPost()", "doGet()", "service()", "process()"],
  //           correct_option: 1,
  //           solution:
  //             "doGet() is used to handle HTTP GET requests in servlets.",
  //         },
  //         {
  //           id: 7,
  //           title:
  //             "Which method is used to clean up resources before a servlet is destroyed?",
  //           options: ["init()", "service()", "destroy()", "end()"],
  //           correct_option: 2,
  //           solution:
  //             "destroy() is called when a servlet is taken out of service to release resources.",
  //         },
  //         {
  //           id: 8,
  //           title: "What package contains the servlet API?",
  //           options: [
  //             "java.servlet",
  //             "javax.servlet",
  //             "org.servlet",
  //             "com.servlet",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "The servlet API is located in the javax.servlet package.",
  //         },
  //         {
  //           id: 9,
  //           title: "Which interface must a servlet implement?",
  //           options: [
  //             "HttpServletRequest",
  //             "ServletContext",
  //             "Servlet",
  //             "HttpServlet",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "All servlets implement the Servlet interface, directly or indirectly.",
  //         },
  //         {
  //           id: 10,
  //           title:
  //             "Which class is commonly extended for writing HTTP servlets?",
  //           options: [
  //             "GenericServlet",
  //             "HttpServlet",
  //             "BaseServlet",
  //             "WebServlet",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "HttpServlet is a commonly extended class to handle HTTP-specific functionality.",
  //         },
  //         {
  //           id: 11,
  //           title: "What is the use of the service() method?",
  //           options: [
  //             "Initializes the servlet",
  //             "Handles requests and responses",
  //             "Destroys the servlet",
  //             "Reloads the servlet",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "The service() method handles both GET and POST requests and generates responses.",
  //         },
  //         {
  //           id: 12,
  //           title: "Which object represents the client's request?",
  //           options: [
  //             "ServletResponse",
  //             "HttpSession",
  //             "HttpServletRequest",
  //             "ServletContext",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "HttpServletRequest contains all information about the client's request.",
  //         },
  //         {
  //           id: 13,
  //           title: "How do you generate a response in servlets?",
  //           options: [
  //             "Using PrintWriter from HttpServletResponse",
  //             "System.out.println()",
  //             "ServletContext.getWriter()",
  //             "PrintStream",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "You use response.getWriter() to get a PrintWriter and write the response.",
  //         },
  //         {
  //           id: 14,
  //           title: "What is a cookie in servlets?",
  //           options: [
  //             "Server-side data store",
  //             "Client-side storage mechanism",
  //             "Java class for JSON parsing",
  //             "Security tool",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Cookies are small data stored on the client side to maintain session data.",
  //         },
  //         {
  //           id: 15,
  //           title: "Which method is used to add a cookie to a response?",
  //           options: [
  //             "addCookie()",
  //             "setCookie()",
  //             "createCookie()",
  //             "putCookie()",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "addCookie() method of HttpServletResponse is used to add a cookie.",
  //         },
  //         {
  //           id: 16,
  //           title: "Which interface provides session management?",
  //           options: [
  //             "ServletConfig",
  //             "HttpSession",
  //             "ServletRequest",
  //             "Cookie",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "HttpSession interface provides session tracking functionality between client and server.",
  //         },
  //         {
  //           id: 17,
  //           title: "Which method gets a session from the request?",
  //           options: [
  //             "request.getSession()",
  //             "response.getSession()",
  //             "session.create()",
  //             "session.get()",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "getSession() is used to retrieve or create a session from the request object.",
  //         },
  //         {
  //           id: 18,
  //           title: "What is the default session timeout in servlets?",
  //           options: ["30 seconds", "1 minute", "5 minutes", "30 minutes"],
  //           correct_option: 3,
  //           solution:
  //             "By default, session timeout is 30 minutes unless configured otherwise.",
  //         },
  //         {
  //           id: 19,
  //           title: "What is a servlet filter used for?",
  //           options: [
  //             "Modifying requests or responses",
  //             "Storing session data",
  //             "Compiling servlets",
  //             "Creating cookies",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "Filters are used to pre-process requests and post-process responses.",
  //         },
  //         {
  //           id: 20,
  //           title: "Which method is overridden to implement a servlet filter?",
  //           options: ["init()", "doFilter()", "service()", "process()"],
  //           correct_option: 1,
  //           solution:
  //             "doFilter() method is overridden to define filter behavior.",
  //         },
  //         {
  //           id: 21,
  //           title: "Which interface must a filter class implement?",
  //           options: ["ServletFilter", "HttpFilter", "Filter", "Servlet"],
  //           correct_option: 2,
  //           solution:
  //             "All filter classes must implement the javax.servlet.Filter interface.",
  //         },
  //         {
  //           id: 22,
  //           title: "Where is the filter mapped in a web application?",
  //           options: [
  //             "Servlet class",
  //             "web.xml",
  //             "Filter.java",
  //             "HttpServletRequest",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Filters are mapped to URLs or servlets in web.xml or using annotations.",
  //         },
  //         {
  //           id: 23,
  //           title: "Which method initializes a filter?",
  //           options: ["init()", "start()", "service()", "run()"],
  //           correct_option: 0,
  //           solution:
  //             "init() is called once when the filter is instantiated to initialize it.",
  //         },
  //         {
  //           id: 24,
  //           title: "How are multiple filters ordered in execution?",
  //           options: [
  //             "Alphabetically",
  //             "Randomly",
  //             "Based on declaration order",
  //             "Based on name length",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "Filters execute in the order they are declared in web.xml or by annotation priority.",
  //         },
  //         {
  //           id: 25,
  //           title: "Which object is passed along the filter chain?",
  //           options: ["HttpServlet", "ServletConfig", "FilterChain", "Cookie"],
  //           correct_option: 2,
  //           solution:
  //             "FilterChain object is used to pass the request and response to the next filter or servlet.",
  //         },
  //         {
  //           id: 26,
  //           title: "How do you map a filter to a servlet in annotations?",
  //           options: [
  //             "@WebServlet",
  //             "@FilterMapping",
  //             "@WebFilter",
  //             "@ServletFilter",
  //           ],
  //           correct_option: 2,
  //           solution: "@WebFilter is used to map filters using annotations.",
  //         },
  //         {
  //           id: 27,
  //           title: "Which tag in web.xml is used to define a servlet?",
  //           options: [
  //             "<servlet-mapping>",
  //             "<web-servlet>",
  //             "<define-servlet>",
  //             "<servlet>",
  //           ],
  //           correct_option: 3,
  //           solution:
  //             "<servlet> tag is used to define servlet configuration in web.xml.",
  //         },
  //         {
  //           id: 28,
  //           title: "Which tag in web.xml is used to map a servlet to a URL?",
  //           options: [
  //             "<url-map>",
  //             "<url-pattern>",
  //             "<servlet-pattern>",
  //             "<servlet-mapping>",
  //           ],
  //           correct_option: 3,
  //           solution:
  //             "<servlet-mapping> is used to map a servlet to a specific URL pattern.",
  //         },
  //         {
  //           id: 29,
  //           title:
  //             "Which method of HttpServlet is overridden to handle POST requests?",
  //           options: ["doGet()", "doPost()", "service()", "processPost()"],
  //           correct_option: 1,
  //           solution: "doPost() is used to handle HTTP POST requests.",
  //         },
  //         {
  //           id: 30,
  //           title:
  //             "Which object allows access to global parameters set in web.xml?",
  //           options: [
  //             "ServletRequest",
  //             "ServletConfig",
  //             "ServletContext",
  //             "HttpSession",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "ServletContext provides access to global parameters and application-wide information.",
  //         },
  //         {
  //           id: 31,
  //           title:
  //             "Which method is used to retrieve an initialization parameter in a servlet?",
  //           options: [
  //             "getInitParameter()",
  //             "getParameter()",
  //             "getConfigParam()",
  //             "getServletParam()",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "getInitParameter() retrieves servlet-specific initialization parameters from web.xml.",
  //         },
  //         {
  //           id: 32,
  //           title:
  //             "What is the purpose of the web.xml file in a Java web application?",
  //           options: [
  //             "To store servlet source code",
  //             "To configure servlets and mappings",
  //             "To compile Java files",
  //             "To monitor memory usage",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "web.xml is the deployment descriptor used to configure servlets, filters, listeners, etc.",
  //         },
  //         {
  //           id: 33,
  //           title:
  //             "What is the return type of getWriter() method of HttpServletResponse?",
  //           options: ["OutputStream", "PrintStream", "PrintWriter", "Writer"],
  //           correct_option: 2,
  //           solution:
  //             "getWriter() returns a PrintWriter object to write character-based responses.",
  //         },
  //         {
  //           id: 34,
  //           title: "Which HTTP status code represents a successful request?",
  //           options: ["404", "200", "500", "301"],
  //           correct_option: 1,
  //           solution: "200 is the status code for a successful HTTP request.",
  //         },
  //         {
  //           id: 35,
  //           title:
  //             "What happens if you do not call chain.doFilter() in a filter?",
  //           options: [
  //             "An exception is thrown",
  //             "The request is terminated",
  //             "Next filter is skipped",
  //             "Filter is ignored",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "If chain.doFilter() is not called, the request is not passed to the next filter or servlet.",
  //         },
  //         {
  //           id: 36,
  //           title:
  //             "Which object allows sharing data between different servlets?",
  //           options: [
  //             "HttpServlet",
  //             "ServletRequest",
  //             "ServletContext",
  //             "HttpSession",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "ServletContext allows sharing data across the entire web application.",
  //         },
  //         {
  //           id: 37,
  //           title: "Which annotation is used to define a servlet in Java?",
  //           options: ["@WebServlet", "@Servlet", "@HttpServlet", "@WebApp"],
  //           correct_option: 0,
  //           solution:
  //             "@WebServlet is the annotation used to declare servlet classes and their URL mappings.",
  //         },
  //         {
  //           id: 38,
  //           title: "Which method in servlet returns MIME type of response?",
  //           options: [
  //             "getMimeType()",
  //             "setContentType()",
  //             "getContentType()",
  //             "getType()",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "setContentType() sets the MIME type of the response, e.g., 'text/html'.",
  //         },
  //         {
  //           id: 39,
  //           title:
  //             "Which method sends a redirect response to the client using a new URL?",
  //           options: [
  //             "sendRedirect()",
  //             "forward()",
  //             "responseRedirect()",
  //             "newUrl()",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "sendRedirect() sends a redirect response to the client to a different URL.",
  //         },
  //         {
  //           id: 40,
  //           title: "Which is true about session tracking in servlets?",
  //           options: [
  //             "Cookies can't be used",
  //             "Only one method exists",
  //             "Sessions can be tracked using URL rewriting",
  //             "Session tracking is not supported",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "Session tracking in servlets can be achieved using cookies, hidden fields, and URL rewriting.",
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: "Unit - 3: Java Server Pages",
  //       key: "java-server-pages",
  //       all_mcqs: [
  //         {
  //           id: 1,
  //           title: "What does JSP stand for?",
  //           options: [
  //             "Java Server Pages",
  //             "Java Servlet Pages",
  //             "Java Software Pages",
  //             "Java Script Pages",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "JSP stands for Java Server Pages, used for building dynamic web content.",
  //         },
  //         {
  //           id: 2,
  //           title: "Why is JSP needed?",
  //           options: [
  //             "To replace HTML",
  //             "To simplify server-side programming",
  //             "To eliminate JavaScript",
  //             "To manage databases",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "JSP helps simplify server-side programming by allowing Java code inside HTML.",
  //         },
  //         {
  //           id: 3,
  //           title: "Which is an advantage of JSP over Servlets?",
  //           options: [
  //             "More secure",
  //             "Faster than all Java apps",
  //             "Easier to write HTML",
  //             "Better database integration",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "JSP is preferred for web pages with more HTML content, allowing embedding Java directly.",
  //         },
  //         {
  //           id: 4,
  //           title: "Which is the first phase in the life cycle of a JSP page?",
  //           options: [
  //             "Compilation",
  //             "Initialization",
  //             "Translation",
  //             "Execution",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "In the JSP life cycle, the translation phase translates the JSP to a servlet.",
  //         },
  //         {
  //           id: 5,
  //           title: "What is the use of a declaration tag in JSP?",
  //           options: [
  //             "Execute Java code",
  //             "Define variables and methods",
  //             "Write expressions",
  //             "Handle exceptions",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Declaration tags define variables and methods with `<%! ... %>`.",
  //         },
  //         {
  //           id: 6,
  //           title: "Which tag is used to insert Java code that gets executed?",
  //           options: [
  //             "Declaration tag",
  //             "Scriptlet tag",
  //             "Expression tag",
  //             "Custom tag",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Scriptlet tags `<% ... %>` execute Java code inside JSP.",
  //         },
  //         {
  //           id: 7,
  //           title:
  //             "Which tag evaluates and inserts the result into the output?",
  //           options: [
  //             "Expression tag",
  //             "Declaration tag",
  //             "Scriptlet tag",
  //             "Custom tag",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "Expression tag `<%= ... %>` evaluates and inserts result into HTML.",
  //         },
  //         {
  //           id: 8,
  //           title: "What does the 'out' implicit object in JSP refer to?",
  //           options: [
  //             "OutputStream",
  //             "PrintWriter",
  //             "Response buffer",
  //             "Console log",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "The 'out' object is an instance of JspWriter, used for writing response data.",
  //         },
  //         {
  //           id: 9,
  //           title: "Which implicit object gives access to the request data?",
  //           options: ["page", "response", "request", "application"],
  //           correct_option: 2,
  //           solution:
  //             "The 'request' object provides access to client request data like parameters and headers.",
  //         },
  //         {
  //           id: 10,
  //           title: "Which object is used to manage user sessions in JSP?",
  //           options: ["page", "application", "session", "context"],
  //           correct_option: 2,
  //           solution:
  //             "The 'session' object helps track user sessions across multiple requests.",
  //         },
  //         {
  //           id: 11,
  //           title: "What is the purpose of pageContext in JSP?",
  //           options: [
  //             "Tracks session state",
  //             "Access to request parameters",
  //             "Access to all scoped variables",
  //             "Manages exceptions",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "pageContext provides access to attributes in page, request, session, and application scopes.",
  //         },
  //         {
  //           id: 12,
  //           title: "What does the 'exception' implicit object represent?",
  //           options: [
  //             "All thrown exceptions",
  //             "Last occurred exception",
  //             "Exception in error page",
  //             "Null pointer exception",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "In error JSP pages, 'exception' contains the Throwable object that caused the error.",
  //         },
  //         {
  //           id: 13,
  //           title: "What is a JavaBean?",
  //           options: [
  //             "Java applet",
  //             "Reusable Java component with properties",
  //             "JavaScript class",
  //             "Servlet wrapper",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "JavaBeans are reusable Java classes that follow specific conventions with properties and setters/getters.",
  //         },
  //         {
  //           id: 14,
  //           title: "Which JSP action tag is used to access a JavaBean?",
  //           options: [
  //             "<jsp:declare>",
  //             "<jsp:scriptlet>",
  //             "<jsp:useBean>",
  //             "<jsp:bean>",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "<jsp:useBean> is used to create or access a JavaBean in JSP.",
  //         },
  //         {
  //           id: 15,
  //           title: "How do you read a property from a JavaBean in JSP?",
  //           options: [
  //             "<jsp:useBean>",
  //             "<jsp:getProperty>",
  //             "<jsp:setProperty>",
  //             "<jsp:readBean>",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "<jsp:getProperty> is used to read a property value from a JavaBean.",
  //         },
  //         {
  //           id: 16,
  //           title: "What does JSP EL (Expression Language) allow?",
  //           options: [
  //             "Writing Java code in HTML",
  //             "Accessing scoped variables easily",
  //             "Defining servlets",
  //             "Extending JSP lifecycle",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "JSP EL allows simpler access to attributes stored in different scopes like request/session.",
  //         },
  //         {
  //           id: 17,
  //           title: "How do you invoke EL in JSP?",
  //           options: ["<% $expr %>", "<%= expr %>", "${expr}", "<el:expr>"],
  //           correct_option: 2,
  //           solution:
  //             "Expression Language in JSP is invoked using `${expr}` syntax.",
  //         },
  //         {
  //           id: 18,
  //           title: "Which symbol prevents EL evaluation in JSP?",
  //           options: ["\\", "#", "!", "%"],
  //           correct_option: 3,
  //           solution:
  //             'Using `<%@ page isELIgnored="true" %>` disables EL evaluation in JSP.',
  //         },
  //         {
  //           id: 19,
  //           title: "What is a custom tag in JSP?",
  //           options: [
  //             "User-defined HTML element",
  //             "Servlet alias",
  //             "Custom Java class for reusable logic",
  //             "JSP error handler",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "Custom tags are user-defined reusable components handled by tag handler classes.",
  //         },
  //         {
  //           id: 20,
  //           title: "What is the use of Tag Library Descriptor (TLD) in JSP?",
  //           options: [
  //             "Declares EL variables",
  //             "Defines JavaBeans",
  //             "Describes custom tag libraries",
  //             "Compiles JSP",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "TLD files describe custom tag libraries and are required to use custom tags in JSP.",
  //         },
  //         {
  //           id: 21,
  //           title:
  //             "Which tag is used to store a value in a variable using JSTL?",
  //           options: ["<c:out>", "<c:set>", "<c:store>", "<c:assign>"],
  //           correct_option: 1,
  //           solution: "<c:set> is used to assign values to variables in JSTL.",
  //         },
  //         {
  //           id: 22,
  //           title: "What is the function of <c:out> in JSTL?",
  //           options: [
  //             "Output HTML",
  //             "Escape and print values",
  //             "Set session attributes",
  //             "Call servlet",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "<c:out> is used to display values with XML/HTML escaping by default.",
  //         },
  //         {
  //           id: 23,
  //           title: "Which JSTL tag is used to iterate over collections?",
  //           options: ["<c:loop>", "<c:iterate>", "<c:repeat>", "<c:forEach>"],
  //           correct_option: 3,
  //           solution:
  //             "<c:forEach> is used for looping over arrays, collections, or maps.",
  //         },
  //         {
  //           id: 24,
  //           title:
  //             "Which tag is used to include content from another resource in JSTL?",
  //           options: ["<c:import>", "<c:include>", "<jsp:include>", "<c:get>"],
  //           correct_option: 0,
  //           solution:
  //             "<c:import> allows inclusion of content from local or external resources.",
  //         },
  //         {
  //           id: 25,
  //           title: "Which tag allows conditional execution in JSTL?",
  //           options: ["<c:check>", "<c:if>", "<c:condition>", "<c:when>"],
  //           correct_option: 1,
  //           solution: "<c:if> is used for evaluating a condition in JSTL.",
  //         },
  //         {
  //           id: 26,
  //           title: "How do you perform multiple condition checks in JSTL?",
  //           options: [
  //             "Using <c:when>",
  //             "Using <c:switch>",
  //             "Using <c:choose> with <c:when>",
  //             "Using <c:case>",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "<c:choose> is used with <c:when> and <c:otherwise> for multiple conditions.",
  //         },
  //         {
  //           id: 27,
  //           title: "What does the <c:remove> tag do?",
  //           options: [
  //             "Deletes files",
  //             "Removes JavaBeans",
  //             "Removes variables from scope",
  //             "Uninstalls JSTL",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "<c:remove> removes a scoped variable from specified scope.",
  //         },
  //         {
  //           id: 28,
  //           title: "Which JSTL tag is used for error handling?",
  //           options: ["<c:try>", "<c:catch>", "<c:throw>", "<c:error>"],
  //           correct_option: 1,
  //           solution:
  //             "<c:catch> is used to catch and handle exceptions within JSTL.",
  //         },
  //         {
  //           id: 29,
  //           title: "Which of the following is NOT a valid JSP implicit object?",
  //           options: ["application", "session", "context", "pageContext"],
  //           correct_option: 2,
  //           solution:
  //             "'context' is not a valid JSP implicit object. 'application' and 'pageContext' are valid.",
  //         },
  //         {
  //           id: 30,
  //           title:
  //             "What is the correct scope attribute value for a variable accessible throughout the session?",
  //           options: ["page", "request", "session", "application"],
  //           correct_option: 2,
  //           solution:
  //             "'session' scope means the variable is accessible across multiple requests by the same user.",
  //         },
  //         {
  //           id: 31,
  //           title: "Which tag library prefix is commonly used for JSTL core?",
  //           options: ["html", "jstl", "core", "c"],
  //           correct_option: 3,
  //           solution:
  //             "The JSTL core tags are typically prefixed with 'c', e.g., <c:out>, <c:forEach>.",
  //         },
  //         {
  //           id: 32,
  //           title:
  //             "Which JSTL tag is used to evaluate an expression and store the result?",
  //           options: ["<c:eval>", "<c:calculate>", "<c:set>", "<c:assign>"],
  //           correct_option: 2,
  //           solution:
  //             "<c:set> is used for evaluating and storing results in scoped variables.",
  //         },
  //         {
  //           id: 33,
  //           title:
  //             "Which expression language scope has the narrowest visibility?",
  //           options: ["application", "session", "request", "page"],
  //           correct_option: 3,
  //           solution:
  //             "Page scope is the narrowest; variables are available only within the current JSP page.",
  //         },
  //         {
  //           id: 34,
  //           title:
  //             "Which of the following tags is used for exception handling in JSTL?",
  //           options: ["<c:try>", "<c:catch>", "<c:handle>", "<c:exception>"],
  //           correct_option: 1,
  //           solution:
  //             "<c:catch> allows error handling by capturing exceptions in JSTL.",
  //         },
  //         {
  //           id: 35,
  //           title:
  //             "Which directive enables or disables EL evaluation in a JSP page?",
  //           options: [
  //             "<%@ taglib %>",
  //             '<%@ page isELIgnored="false" %>',
  //             "<%@ expression %>",
  //             "<%@ el %>",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             '<%@ page isELIgnored="false" %> enables Expression Language evaluation.',
  //         },
  //         {
  //           id: 36,
  //           title:
  //             "What happens if a JavaBean property does not have a getter method?",
  //           options: [
  //             "It throws a runtime error",
  //             "It can still be read",
  //             "JSP ignores it",
  //             "Bean becomes abstract",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "If a getter is missing, accessing the property via <jsp:getProperty> causes a runtime error.",
  //         },
  //         {
  //           id: 37,
  //           title: "Where do you define a custom tag in a JSP application?",
  //           options: [
  //             "In the servlet",
  //             "In web.xml only",
  //             "In a TLD file",
  //             "In the JavaBean",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "Custom tags are defined and described using Tag Library Descriptor (TLD) files.",
  //         },
  //         {
  //           id: 38,
  //           title:
  //             "Which object can be used to set attributes that are visible to all JSPs in the application?",
  //           options: ["session", "request", "application", "page"],
  //           correct_option: 2,
  //           solution:
  //             "application scope allows sharing attributes across the entire web app.",
  //         },
  //         {
  //           id: 39,
  //           title:
  //             "Which of the following is a valid way to disable a JSTL core tag?",
  //           options: [
  //             "Remove taglib directive",
  //             "Use c:disable",
  //             "Use isELIgnored",
  //             "Use comments",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "Removing or not importing the taglib directive effectively disables JSTL usage in that JSP.",
  //         },
  //         {
  //           id: 40,
  //           title:
  //             "Which tag is used to terminate execution inside a <c:forEach> loop?",
  //           options: ["<c:break>", "<c:stop>", "<c:exit>", "None of these"],
  //           correct_option: 3,
  //           solution:
  //             "JSTL does not support breaking a loop with a tag like <c:break>; you must use conditions.",
  //         },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       title: "Unit - 4: Java Web Services",
  //       key: "java-web-services",
  //       all_mcqs: [
  //         {
  //           id: 1,
  //           title: "What are web services?",
  //           options: [
  //             "Desktop applications",
  //             "Programs to browse internet",
  //             "Software systems for machine-to-machine interaction over a network",
  //             "Database management tools",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "Web services are standardized software systems that allow communication between machines over a network.",
  //         },
  //         {
  //           id: 2,
  //           title: "Which architecture pattern do web services follow?",
  //           options: [
  //             "Monolithic",
  //             "Service-Oriented Architecture",
  //             "Layered",
  //             "Peer-to-Peer",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Web services are based on Service-Oriented Architecture (SOA), promoting interoperability.",
  //         },
  //         {
  //           id: 3,
  //           title: "Which of the following is a type of web service?",
  //           options: ["JSON", "JDBC", "SOAP", "Servlet"],
  //           correct_option: 2,
  //           solution:
  //             "SOAP (Simple Object Access Protocol) is a type of web service protocol.",
  //         },
  //         {
  //           id: 4,
  //           title: "What does REST stand for?",
  //           options: [
  //             "Remote Execution Simple Transfer",
  //             "Representational State Transfer",
  //             "Resource Service Transfer",
  //             "Remote Servlet Translator",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "REST stands for Representational State Transfer, a popular web service architectural style.",
  //         },
  //         {
  //           id: 5,
  //           title: "Which protocol is commonly used by SOAP web services?",
  //           options: ["FTP", "SMTP", "HTTP", "SSH"],
  //           correct_option: 2,
  //           solution:
  //             "SOAP web services most commonly use HTTP as their transport protocol.",
  //         },
  //         {
  //           id: 6,
  //           title: "What is one key feature of RESTful services?",
  //           options: [
  //             "Tightly coupled",
  //             "Requires WSDL",
  //             "Stateless communication",
  //             "Binary message format",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "RESTful services use stateless communication, meaning no client context is stored on the server.",
  //         },
  //         {
  //           id: 7,
  //           title:
  //             "Which of the following is a format used by REST web services?",
  //           options: ["HTML", "XML", "JSON", "Both XML and JSON"],
  //           correct_option: 3,
  //           solution:
  //             "REST can use multiple data formats, commonly XML and JSON.",
  //         },
  //         {
  //           id: 8,
  //           title:
  //             "SOAP web services require which of the following for service description?",
  //           options: ["XML schema", "WSDL", "JDBC", "UDDI"],
  //           correct_option: 1,
  //           solution:
  //             "SOAP services use WSDL (Web Services Description Language) to describe service interfaces.",
  //         },
  //         {
  //           id: 9,
  //           title:
  //             "Which framework is commonly used to build RESTful services in Java?",
  //           options: ["Hibernate", "Struts", "Jersey", "JSP"],
  //           correct_option: 2,
  //           solution:
  //             "Jersey is a popular open-source framework for building RESTful services in Java.",
  //         },
  //         {
  //           id: 10,
  //           title:
  //             "Which annotation is used in Jersey to map a URI to a method?",
  //           options: ["@GET", "@POST", "@Path", "@Resource"],
  //           correct_option: 2,
  //           solution:
  //             "@Path is used to define URI patterns in Jersey-based RESTful services.",
  //         },
  //         {
  //           id: 11,
  //           title:
  //             "Which annotation is used in JAX-RS to handle GET HTTP requests?",
  //           options: ["@POST", "@GET", "@PUT", "@DELETE"],
  //           correct_option: 1,
  //           solution: "@GET is used to handle HTTP GET requests in JAX-RS.",
  //         },
  //         {
  //           id: 12,
  //           title: "What does the @PathParam annotation do in JAX-RS?",
  //           options: [
  //             "Extract query string",
  //             "Extract form data",
  //             "Extract path parameter from URI",
  //             "Defines service URL",
  //           ],
  //           correct_option: 2,
  //           solution: "@PathParam is used to extract values from the URI path.",
  //         },
  //         {
  //           id: 13,
  //           title:
  //             "Which annotation extracts data from the query string in REST?",
  //           options: ["@PathParam", "@FormParam", "@QueryParam", "@Param"],
  //           correct_option: 2,
  //           solution:
  //             "@QueryParam extracts parameters passed in the query string of the URL.",
  //         },
  //         {
  //           id: 14,
  //           title: "Which annotation handles form data in RESTful services?",
  //           options: ["@FormParam", "@DataParam", "@FormField", "@POSTParam"],
  //           correct_option: 0,
  //           solution:
  //             "@FormParam is used to extract form fields submitted via POST.",
  //         },
  //         {
  //           id: 15,
  //           title: "Which HTTP method is typically used for retrieving data?",
  //           options: ["POST", "GET", "PUT", "DELETE"],
  //           correct_option: 1,
  //           solution:
  //             "GET is the standard method used to retrieve data in HTTP-based RESTful services.",
  //         },
  //         {
  //           id: 16,
  //           title: "Which HTTP method is used to delete a resource?",
  //           options: ["GET", "POST", "DELETE", "HEAD"],
  //           correct_option: 2,
  //           solution: "DELETE is used to remove a resource from the server.",
  //         },
  //         {
  //           id: 17,
  //           title: "Which HTTP method is idempotent?",
  //           options: ["POST", "GET", "PUT", "Both GET and PUT"],
  //           correct_option: 3,
  //           solution:
  //             "GET and PUT are idempotent, meaning multiple requests have the same effect as one.",
  //         },
  //         {
  //           id: 18,
  //           title: "What is the full form of JAX-RS?",
  //           options: [
  //             "Java API for RESTful Web Services",
  //             "Java Application for REST Services",
  //             "Java API for XML Requests",
  //             "Java Access for Resource Services",
  //           ],
  //           correct_option: 0,
  //           solution: "JAX-RS stands for Java API for RESTful Web Services.",
  //         },
  //         {
  //           id: 19,
  //           title:
  //             "Which component is used in JAX-RS to send HTTP requests from client side?",
  //           options: [
  //             "HttpServlet",
  //             "JAX-RS client API",
  //             "Java Bean",
  //             "ServletContext",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "JAX-RS provides a client API to send HTTP requests to RESTful services.",
  //         },
  //         {
  //           id: 20,
  //           title: "Which HTTP status code indicates successful request?",
  //           options: [
  //             "200 OK",
  //             "404 Not Found",
  //             "500 Internal Error",
  //             "403 Forbidden",
  //           ],
  //           correct_option: 0,
  //           solution: "HTTP 200 OK indicates a successful request.",
  //         },
  //         {
  //           id: 21,
  //           title: "Which of the following best describes SOAP?",
  //           options: [
  //             "Stateless and lightweight",
  //             "Protocol using JSON",
  //             "Strictly XML-based and heavy",
  //             "Always faster than REST",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "SOAP is a protocol that uses XML and is considered heavier than REST.",
  //         },
  //         {
  //           id: 22,
  //           title: "Which of the following statements about REST is false?",
  //           options: [
  //             "REST uses HTTP",
  //             "REST requires WSDL",
  //             "REST is stateless",
  //             "REST supports multiple formats",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Unlike SOAP, REST does not use WSDL for service definition.",
  //         },
  //         {
  //           id: 23,
  //           title: "Which is true about REST URI structure?",
  //           options: [
  //             "It uses verbs in URI",
  //             "It uses nouns to represent resources",
  //             "It uses methods in path",
  //             "It uses Java methods in URI",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "RESTful URIs use nouns to identify resources, while actions are represented using HTTP methods.",
  //         },
  //         {
  //           id: 24,
  //           title:
  //             "Which file must be configured to use Jersey in a web application?",
  //           options: [
  //             "web.xml",
  //             "jersey.xml",
  //             "rest-config.xml",
  //             "services.xml",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "web.xml is used to configure Jersey servlets in Java web apps.",
  //         },
  //         {
  //           id: 25,
  //           title:
  //             "Which annotation is used to inject values from HTML forms in JAX-RS?",
  //           options: ["@FormData", "@FormInput", "@FormParam", "@HTMLParam"],
  //           correct_option: 2,
  //           solution:
  //             "@FormParam is used to extract form fields submitted through POST forms.",
  //         },
  //         {
  //           id: 26,
  //           title: "What is the purpose of HTTP response codes?",
  //           options: [
  //             "To authenticate users",
  //             "To track sessions",
  //             "To indicate request processing result",
  //             "To define service path",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "HTTP status codes inform the client about the outcome of a request.",
  //         },
  //         {
  //           id: 27,
  //           title: "What does HTTP 404 mean?",
  //           options: [
  //             "Unauthorized access",
  //             "Resource not found",
  //             "Success",
  //             "Bad request",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "404 Not Found means the requested resource doesn't exist on the server.",
  //         },
  //         {
  //           id: 28,
  //           title: "Which HTTP status code represents a bad request?",
  //           options: ["403", "400", "500", "302"],
  //           correct_option: 1,
  //           solution:
  //             "400 Bad Request means the server couldn't understand the request due to malformed syntax.",
  //         },
  //         {
  //           id: 29,
  //           title:
  //             "Which client API class is used to initiate a request in JAX-RS?",
  //           options: [
  //             "RestRequest",
  //             "RequestBuilder",
  //             "Client",
  //             "RestConnector",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "javax.ws.rs.client.Client is used to initiate requests in JAX-RS client API.",
  //         },
  //         {
  //           id: 30,
  //           title:
  //             "Which JAX-RS annotation is used to define the base URI of a resource?",
  //           options: ["@Base", "@Path", "@Resource", "@URI"],
  //           correct_option: 1,
  //           solution:
  //             "@Path defines the base URI for the resource class or method.",
  //         },
  //         {
  //           id: 31,
  //           title:
  //             "Which annotation is used to produce JSON output from a REST service?",
  //           options: [
  //             '@Produces("text/html")',
  //             '@Produces("application/json")',
  //             "@PathParam",
  //             "@JsonFormat",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             '@Produces("application/json") tells the service to respond with JSON data.',
  //         },
  //         {
  //           id: 32,
  //           title: "What is the main transport protocol used by REST and SOAP?",
  //           options: ["SMTP", "HTTP", "FTP", "TCP"],
  //           correct_option: 1,
  //           solution:
  //             "Both REST and SOAP primarily use HTTP as the transport protocol.",
  //         },
  //         {
  //           id: 33,
  //           title: "Which annotation in JAX-RS is used to receive JSON input?",
  //           options: [
  //             '@Consumes("application/json")',
  //             '@Produces("application/json")',
  //             "@RequestBody",
  //             "@JsonInput",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             '@Consumes("application/json") specifies that the service accepts JSON input.',
  //         },
  //         {
  //           id: 34,
  //           title: "Which HTTP method is used to update a resource?",
  //           options: ["POST", "GET", "PUT", "DELETE"],
  //           correct_option: 2,
  //           solution: "PUT is used to update an existing resource in REST.",
  //         },
  //         {
  //           id: 35,
  //           title: "Which HTTP status code indicates internal server error?",
  //           options: ["403", "404", "500", "503"],
  //           correct_option: 2,
  //           solution:
  //             "500 Internal Server Error indicates that the server encountered an unexpected condition.",
  //         },
  //         {
  //           id: 36,
  //           title: "Which media type is used to consume form-encoded data?",
  //           options: [
  //             "application/json",
  //             "text/plain",
  //             "application/x-www-form-urlencoded",
  //             "multipart/form-data",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "application/x-www-form-urlencoded is used for HTML form submission.",
  //         },
  //         {
  //           id: 37,
  //           title:
  //             "Which exception is thrown for a missing resource in JAX-RS?",
  //           options: [
  //             "ResourceException",
  //             "NotFoundException",
  //             "MissingResourceException",
  //             "BadRequestException",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "NotFoundException is thrown when a resource is not found in JAX-RS.",
  //         },
  //         {
  //           id: 38,
  //           title:
  //             "Which annotation specifies a method can consume form data in POST?",
  //           options: [
  //             '@Consumes("application/json")',
  //             '@Consumes("application/x-www-form-urlencoded")',
  //             "@FormInput",
  //             "@BodyParam",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             '@Consumes("application/x-www-form-urlencoded") allows receiving form POST data.',
  //         },
  //         {
  //           id: 39,
  //           title:
  //             "What is the default behavior of JAX-RS if no exception handling is configured?",
  //           options: [
  //             "Return 200 OK",
  //             "Return 500 Internal Server Error",
  //             "Ignore exception",
  //             "Redirect to login",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Unhandled exceptions in JAX-RS default to HTTP 500 Internal Server Error.",
  //         },
  //         {
  //           id: 40,
  //           title:
  //             "Which of the following libraries is used with Jersey to support REST client features?",
  //           options: ["Hibernate", "JSP", "JAX-RS Client", "Spring Boot"],
  //           correct_option: 2,
  //           solution:
  //             "JAX-RS Client API is used with Jersey to create HTTP clients for REST services.",
  //         },
  //       ],
  //     },
  //     {
  //       id: 5,
  //       title: "Unit - 5: Introduction to Spring and Hibernate",
  //       key: "introduction-to-spring-and-hibernate",
  //       all_mcqs: [
  //         {
  //           id: 1,
  //           title: "What is Spring MVC?",
  //           options: [
  //             "A programming language",
  //             "A Java framework for building web applications",
  //             "A database system",
  //             "A type of HTTP protocol",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Spring MVC is a framework for building web applications in Java, following the Model-View-Controller design pattern.",
  //         },
  //         {
  //           id: 2,
  //           title: "Which of the following is an advantage of Spring MVC?",
  //           options: [
  //             "Provides better integration with Java EE",
  //             "Seamless integration with Hibernate",
  //             "Supports multiple view technologies",
  //             "All of the above",
  //           ],
  //           correct_option: 3,
  //           solution:
  //             "Spring MVC is highly flexible, allowing seamless integration with various technologies like Java EE and Hibernate.",
  //         },
  //         {
  //           id: 3,
  //           title: "Which architecture does Spring MVC follow?",
  //           options: [
  //             "Client-Server",
  //             "Model-View-Controller",
  //             "Layered",
  //             "Client-Model-Controller",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Spring MVC is based on the Model-View-Controller architecture pattern.",
  //         },
  //         {
  //           id: 4,
  //           title:
  //             "Which component in Spring MVC is responsible for handling user requests?",
  //           options: [
  //             "Controller",
  //             "DispatcherServlet",
  //             "Model",
  //             "ViewResolver",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "In Spring MVC, the Controller handles user requests and controls the flow.",
  //         },
  //         {
  //           id: 5,
  //           title: "What does the DispatcherServlet do in Spring MVC?",
  //           options: [
  //             "Handles HTTP requests",
  //             "Manages session data",
  //             "Acts as a controller",
  //             "Routes requests to appropriate handlers",
  //           ],
  //           correct_option: 3,
  //           solution:
  //             "The DispatcherServlet is the front controller in Spring MVC, routing requests to the appropriate handler method.",
  //         },
  //         {
  //           id: 6,
  //           title:
  //             "Which module of the Spring Framework helps in integrating with Hibernate?",
  //           options: ["Spring Core", "Spring ORM", "Spring AOP", "Spring Web"],
  //           correct_option: 1,
  //           solution:
  //             "The Spring ORM module provides support for integrating with frameworks like Hibernate.",
  //         },
  //         {
  //           id: 7,
  //           title: "What is the role of the Model in Spring MVC?",
  //           options: [
  //             "To handle view rendering",
  //             "To manage application logic",
  //             "To pass data to the view",
  //             "To handle user inputs",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "In Spring MVC, the Model holds the data of the application that is passed to the view.",
  //         },
  //         {
  //           id: 8,
  //           title: "What is Hibernate in Java?",
  //           options: [
  //             "A web framework",
  //             "A data access framework",
  //             "A database system",
  //             "A JavaScript library",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Hibernate is a data access framework for Java, providing ORM (Object-Relational Mapping).",
  //         },
  //         {
  //           id: 9,
  //           title: "What is ORM in Hibernate?",
  //           options: [
  //             "Object-Relation Mapping",
  //             "Object-Relational Model",
  //             "Open Resource Management",
  //             "Object Remote Management",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "ORM stands for Object-Relational Mapping, which is a technique used to map Java objects to database tables.",
  //         },
  //         {
  //           id: 10,
  //           title: "What is the main purpose of Hibernate?",
  //           options: [
  //             "To provide a framework for web applications",
  //             "To map Java objects to database tables",
  //             "To manage Java beans",
  //             "To handle database queries",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Hibernate is used to simplify database operations by mapping Java objects to database tables.",
  //         },
  //         {
  //           id: 11,
  //           title:
  //             "Which component in Hibernate handles the database connection?",
  //           options: ["Session", "SessionFactory", "Transaction", "Query"],
  //           correct_option: 1,
  //           solution:
  //             "The SessionFactory is responsible for creating and managing sessions, which are used to interact with the database.",
  //         },
  //         {
  //           id: 12,
  //           title:
  //             "Which of the following is not a type of Hibernate association?",
  //           options: [
  //             "One-to-One",
  //             "One-to-Many",
  //             "Many-to-Many",
  //             "Many-to-Single",
  //           ],
  //           correct_option: 3,
  //           solution:
  //             "Hibernate supports One-to-One, One-to-Many, and Many-to-Many associations, but not Many-to-Single.",
  //         },
  //         {
  //           id: 13,
  //           title:
  //             "Which file is used to configure Hibernate in a Java project?",
  //           options: [
  //             "hibernate.cfg.xml",
  //             "hibernate.properties",
  //             "hibernate.xml",
  //             "hibernate.config",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "The hibernate.cfg.xml file is used to configure Hibernate settings, such as database connection details.",
  //         },
  //         {
  //           id: 14,
  //           title: "What is HQL in Hibernate?",
  //           options: [
  //             "Hibernate Query Language",
  //             "Hibernate Query Layer",
  //             "Hibernate Query List",
  //             "Hibernate Quick Language",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "HQL stands for Hibernate Query Language, a query language similar to SQL for querying the database in Hibernate.",
  //         },
  //         {
  //           id: 15,
  //           title: "What is the default fetch type in Hibernate?",
  //           options: ["Lazy", "Eager", "Immediate", "None"],
  //           correct_option: 0,
  //           solution:
  //             "By default, Hibernate uses lazy loading, where data is fetched only when it is accessed.",
  //         },
  //         {
  //           id: 16,
  //           title:
  //             "Which of the following annotations is used to define a Hibernate entity class?",
  //           options: ["@Entity", "@Table", "@Model", "@MappedSuperclass"],
  //           correct_option: 0,
  //           solution: "@Entity is used to mark a class as a Hibernate entity.",
  //         },
  //         {
  //           id: 17,
  //           title:
  //             "Which of the following is not a module of the Spring Framework?",
  //           options: [
  //             "Spring AOP",
  //             "Spring MVC",
  //             "Spring JDBC",
  //             "Spring ORM",
  //             "Spring Hibernate",
  //           ],
  //           correct_option: 4,
  //           solution:
  //             "Spring does not have a specific module called Spring Hibernate, though Hibernate support is provided under Spring ORM.",
  //         },
  //         {
  //           id: 18,
  //           title:
  //             "Which of the following is a Spring MVC annotation for handling HTTP POST requests?",
  //           options: [
  //             "@GetMapping",
  //             "@PostMapping",
  //             "@RequestMapping",
  //             "@PathVariable",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "@PostMapping is used in Spring MVC to handle HTTP POST requests.",
  //         },
  //         {
  //           id: 19,
  //           title: "In Hibernate, what does the Session object do?",
  //           options: [
  //             "It manages the transaction",
  //             "It represents the connection to the database",
  //             "It caches objects",
  //             "It creates database tables",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "The Session object represents a single unit of work and is used for interacting with the database.",
  //         },
  //         {
  //           id: 20,
  //           title: "What is the main purpose of the Spring MVC controller?",
  //           options: [
  //             "To manage session data",
  //             "To process user input and return a response",
  //             "To render views",
  //             "To configure database connections",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "The controller in Spring MVC is responsible for processing user inputs and returning an appropriate response.",
  //         },
  //         {
  //           id: 21,
  //           title:
  //             "What is the main advantage of using Spring MVC over traditional web frameworks?",
  //           options: [
  //             "It uses XML exclusively",
  //             "It decouples view and controller components",
  //             "It supports only JSP as the view technology",
  //             "It relies on a custom servlet container",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Spring MVC provides a clear separation of concerns, decoupling the view and controller components.",
  //         },
  //         {
  //           id: 22,
  //           title:
  //             "Which Spring MVC component is responsible for resolving views?",
  //           options: [
  //             "ViewResolver",
  //             "Controller",
  //             "Model",
  //             "DispatcherServlet",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "The ViewResolver is responsible for resolving views based on logical names.",
  //         },
  //         {
  //           id: 23,
  //           title: "In Hibernate, what does a transaction represent?",
  //           options: [
  //             "A session object",
  //             "A unit of work with the database",
  //             "A connection pool",
  //             "A database table",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "A transaction in Hibernate represents a unit of work that can involve multiple database operations.",
  //         },
  //         {
  //           id: 24,
  //           title:
  //             "Which of the following is true about Spring’s dependency injection?",
  //           options: [
  //             "It is mandatory to use annotations",
  //             "It allows components to be loosely coupled",
  //             "It requires manual configuration for each bean",
  //             "It only works in web applications",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Spring's dependency injection allows for loosely coupled components, making the system easier to maintain.",
  //         },
  //         {
  //           id: 25,
  //           title: "Which of the following is not a feature of Spring MVC?",
  //           options: [
  //             "Supports multiple view technologies",
  //             "In-built exception handling",
  //             "Custom tag libraries",
  //             "Built-in support for Hibernate",
  //           ],
  //           correct_option: 3,
  //           solution:
  //             "While Spring MVC integrates well with Hibernate, it does not provide built-in support for it, but uses the Spring ORM module.",
  //         },
  //         {
  //           id: 26,
  //           title:
  //             "Which annotation is used to map a controller method to a URL in Spring MVC?",
  //           options: [
  //             "@RequestMapping",
  //             "@GetMapping",
  //             "@RequestParam",
  //             "@PathVariable",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "@RequestMapping is used to map a controller method to a specific URL in Spring MVC.",
  //         },
  //         {
  //           id: 27,
  //           title:
  //             "Which of the following is a valid way to configure Hibernate with Spring?",
  //           options: [
  //             "Using XML-based configuration only",
  //             "Using Java-based configuration",
  //             "Using Spring Boot only",
  //             "Both XML and Java-based configurations",
  //           ],
  //           correct_option: 3,
  //           solution:
  //             "Hibernate can be configured with Spring using both XML-based and Java-based configuration methods.",
  //         },
  //         {
  //           id: 28,
  //           title: "What does the Spring AOP module provide?",
  //           options: [
  //             "Aspect-Oriented Programming features",
  //             "Data access support",
  //             "Transaction management",
  //             "Security management",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "Spring AOP provides features for Aspect-Oriented Programming, allowing for separation of concerns like logging or transaction management.",
  //         },
  //         {
  //           id: 29,
  //           title: "In Hibernate, how is data persisted?",
  //           options: [
  //             "Using SessionFactory",
  //             "Using EntityManager",
  //             "Using JPA",
  //             "Using Session objects",
  //           ],
  //           correct_option: 3,
  //           solution:
  //             "In Hibernate, data is persisted using Session objects that manage the interaction with the database.",
  //         },
  //         {
  //           id: 30,
  //           title:
  //             "Which annotation is used to automatically inject a dependency in Spring?",
  //           options: ["@Inject", "@Autowired", "@Resource", "@Bean"],
  //           correct_option: 1,
  //           solution:
  //             "@Autowired is used in Spring to automatically inject a dependency into a bean.",
  //         },
  //         {
  //           id: 31,
  //           title:
  //             "Which type of database operations can Hibernate automatically generate for the developer?",
  //           options: [
  //             "Database schema creation",
  //             "Database connection pooling",
  //             "Transaction management",
  //             "Session management",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "Hibernate can automatically generate the database schema from the entity classes.",
  //         },
  //         {
  //           id: 32,
  //           title: "What does the Hibernate Query Language (HQL) allow?",
  //           options: [
  //             "Executing native SQL queries",
  //             "Creating complex database schemas",
  //             "Querying the database using Java objects",
  //             "Mapping Java classes to database tables",
  //           ],
  //           correct_option: 2,
  //           solution:
  //             "HQL allows developers to write queries using Java objects rather than database tables.",
  //         },
  //         {
  //           id: 33,
  //           title:
  //             "Which of the following is a characteristic of Hibernate’s second-level cache?",
  //           options: [
  //             "Stores all objects in memory",
  //             "Caches objects across sessions",
  //             "Only caches queries",
  //             "Caches data at the database level",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "Hibernate’s second-level cache stores data across sessions to improve performance.",
  //         },
  //         {
  //           id: 34,
  //           title:
  //             "In Spring MVC, how can a controller handle HTTP GET and POST methods?",
  //           options: [
  //             "Using @GetMapping and @PostMapping annotations",
  //             "Using @RequestMapping annotation",
  //             "By writing separate methods for each",
  //             "By using multiple DispatcherServlets",
  //           ],
  //           correct_option: 0,
  //           solution:
  //             "Spring MVC uses @GetMapping and @PostMapping to handle HTTP GET and POST requests respectively.",
  //         },
  //         {
  //           id: 35,
  //           title:
  //             "Which method in Hibernate is used to save an object into the database?",
  //           options: ["save()", "insert()", "persist()", "create()"],
  //           correct_option: 0,
  //           solution:
  //             "In Hibernate, the save() method is used to persist an object into the database.",
  //         },
  //         {
  //           id: 36,
  //           title:
  //             "Which of the following is the default behavior for Hibernate when fetching associations?",
  //           options: [
  //             "Eager fetching",
  //             "Lazy fetching",
  //             "Deferred fetching",
  //             "Batch fetching",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "By default, Hibernate uses lazy fetching for associations, meaning data is loaded only when accessed.",
  //         },
  //         {
  //           id: 37,
  //           title:
  //             "Which of the following technologies is integrated by default into Spring MVC?",
  //           options: ["JDBC", "JSP", "Hibernate", "JSF"],
  //           correct_option: 1,
  //           solution:
  //             "Spring MVC supports JSP (JavaServer Pages) as a default view technology.",
  //         },
  //         {
  //           id: 38,
  //           title:
  //             "In Hibernate, which annotation is used to specify the table associated with an entity class?",
  //           options: ["@Entity", "@Table", "@Column", "@MappedSuperclass"],
  //           correct_option: 1,
  //           solution:
  //             "@Table is used to specify the table in the database that is associated with a Hibernate entity.",
  //         },
  //         {
  //           id: 39,
  //           title: "What does the Spring ORM module do?",
  //           options: [
  //             "Integrates Java with relational databases",
  //             "Provides support for Object-Relational Mapping",
  //             "Supports Aspect-Oriented Programming",
  //             "None of the above",
  //           ],
  //           correct_option: 1,
  //           solution:
  //             "The Spring ORM module provides integration with ORM frameworks like Hibernate for object-relational mapping.",
  //         },
  //         {
  //           id: 40,
  //           title:
  //             "Which annotation is used to inject a dependency into a Spring component?",
  //           options: ["@Inject", "@Autowired", "@Resource", "@Bean"],
  //           correct_option: 1,
  //           solution:
  //             "@Autowired is used to inject a dependency into a Spring component.",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
