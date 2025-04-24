export const mcqs = [
  {
    subject_name: "Advance Java Programming",
    key: "advance-java-programming",
    units: [
      {
        id: 1,
        title: "Unit - 1: Java Database Connectivity",
        key: "java-database-connectivity",
        all_mcqs: [
          {
            id: 1,
            title: "What does JDBC stand for?",
            options: [
              "Java Database Connectivity",
              "Java Data Communication",
              "Java Data Control",
              "Java Database Configuration",
            ],
            correct_option: 0,
            solution:
              "JDBC stands for Java Database Connectivity, which is an API for connecting and executing queries with databases.",
          },
          {
            id: 2,
            title: "Which of the following is not a core component of JDBC?",
            options: ["DriverManager", "Statement", "Driver", "Servlet"],
            correct_option: 3,
            solution: "Servlet is part of Java EE and not a JDBC component.",
          },
          {
            id: 3,
            title: "Which interface is used to execute SQL queries in JDBC?",
            options: ["Connection", "Driver", "Statement", "SQLException"],
            correct_option: 2,
            solution: "Statement interface is used to execute SQL queries.",
          },
          {
            id: 4,
            title: "Which JDBC component manages a list of database drivers?",
            options: ["Driver", "Statement", "DriverManager", "Connection"],
            correct_option: 2,
            solution:
              "DriverManager is responsible for managing a list of database drivers.",
          },
          {
            id: 5,
            title:
              "Which object is returned by the getConnection() method of DriverManager?",
            options: ["Statement", "Connection", "Driver", "ResultSet"],
            correct_option: 1,
            solution: "The getConnection() method returns a Connection object.",
          },
          {
            id: 6,
            title: "Which method is used to execute SQL SELECT queries?",
            options: [
              "executeUpdate()",
              "execute()",
              "executeSelect()",
              "executeQuery()",
            ],
            correct_option: 3,
            solution:
              "The executeQuery() method is used to execute SELECT queries.",
          },
          {
            id: 7,
            title: "What is the return type of executeQuery() method?",
            options: ["ResultSet", "Connection", "Statement", "int"],
            correct_option: 0,
            solution: "The executeQuery() method returns a ResultSet object.",
          },
          {
            id: 8,
            title: "Which JDBC driver type uses ODBC driver under the hood?",
            options: ["Type 1", "Type 2", "Type 3", "Type 4"],
            correct_option: 0,
            solution:
              "Type 1 JDBC driver uses ODBC driver to connect to the database.",
          },
          {
            id: 9,
            title: "Which of the following is a feature of Type 4 JDBC driver?",
            options: [
              "Requires native code",
              "Translates JDBC calls into database-specific calls using middleware",
              "Translates JDBC calls directly into database calls",
              "Uses ODBC for communication",
            ],
            correct_option: 2,
            solution:
              "Type 4 JDBC driver translates JDBC calls directly into database-specific calls using a pure Java implementation.",
          },
          {
            id: 10,
            title: "Which interface provides metadata about the ResultSet?",
            options: [
              "DatabaseMetaData",
              "ResultSetMetaData",
              "Statement",
              "CallableStatement",
            ],
            correct_option: 1,
            solution:
              "ResultSetMetaData interface provides metadata about the ResultSet object.",
          },
          {
            id: 11,
            title: "Which method is used to execute an update in the database?",
            options: [
              "executeQuery()",
              "execute()",
              "executeUpdate()",
              "submitQuery()",
            ],
            correct_option: 2,
            solution:
              "The executeUpdate() method is used for executing INSERT, UPDATE, DELETE queries.",
          },
          {
            id: 12,
            title: "What is a CallableStatement used for?",
            options: [
              "Executing SQL queries",
              "Calling stored procedures",
              "Managing connections",
              "Reading metadata",
            ],
            correct_option: 1,
            solution:
              "CallableStatement is used for executing stored procedures in JDBC.",
          },
          {
            id: 13,
            title:
              "Which of the following statements is used for precompiled SQL statements?",
            options: [
              "Statement",
              "PreparedStatement",
              "CallableStatement",
              "Connection",
            ],
            correct_option: 1,
            solution:
              "PreparedStatement is used for executing precompiled SQL statements.",
          },
          {
            id: 14,
            title: "How does JDBC handle transactions?",
            options: [
              "Automatically commits after each statement",
              "Requires manual commit",
              "Only supports auto-commit mode",
              "Does not support transactions",
            ],
            correct_option: 1,
            solution:
              "By default, JDBC auto-commits, but transactions can be manually managed using setAutoCommit(false).",
          },
          {
            id: 15,
            title: "Which method sets auto-commit mode in JDBC?",
            options: [
              "setCommit()",
              "autoCommit()",
              "setAutoCommit(boolean)",
              "commitMode()",
            ],
            correct_option: 2,
            solution:
              "The setAutoCommit(boolean) method is used to enable or disable auto-commit mode.",
          },
          {
            id: 16,
            title: "Which method commits a transaction in JDBC?",
            options: [
              "commit()",
              "setAutoCommit()",
              "execute()",
              "executeUpdate()",
            ],
            correct_option: 0,
            solution: "The commit() method commits a transaction in JDBC.",
          },
          {
            id: 17,
            title: "Which method is used to rollback a transaction?",
            options: [
              "rollbackTransaction()",
              "undo()",
              "rollback()",
              "cancel()",
            ],
            correct_option: 2,
            solution:
              "The rollback() method is used to roll back a transaction.",
          },
          {
            id: 18,
            title: "Which of the following is not a valid JDBC driver type?",
            options: ["Type 1", "Type 2", "Type 3", "Type 5"],
            correct_option: 3,
            solution:
              "There are only four types of JDBC drivers (Type 1 to Type 4).",
          },
          {
            id: 19,
            title: "Which exception class handles JDBC errors?",
            options: [
              "IOException",
              "SQLException",
              "JDBCException",
              "DBException",
            ],
            correct_option: 1,
            solution: "SQLException class is used for handling JDBC errors.",
          },
          {
            id: 20,
            title: "What does the ResultSet interface represent?",
            options: [
              "A connection to the database",
              "A precompiled statement",
              "A table of data representing a database result",
              "A SQL query",
            ],
            correct_option: 2,
            solution:
              "ResultSet represents a table of data returned by executing a query.",
          },

          {
            id: 21,
            title:
              "Which method of ResultSet moves the cursor to the next row?",
            options: ["moveNext()", "nextRow()", "next()", "advance()"],
            correct_option: 2,
            solution:
              "The next() method moves the cursor to the next row in the ResultSet.",
          },
          {
            id: 22,
            title:
              "What will happen if you call getString() on a ResultSet without moving the cursor?",
            options: [
              "Returns first row",
              "Throws SQLException",
              "Returns null",
              "Returns empty string",
            ],
            correct_option: 1,
            solution:
              "You must call next() before accessing data; otherwise, SQLException is thrown.",
          },
          {
            id: 23,
            title: "Which method of Connection object creates a Statement?",
            options: [
              "getStatement()",
              "createStatement()",
              "buildStatement()",
              "newStatement()",
            ],
            correct_option: 1,
            solution:
              "createStatement() is the correct method used to create a Statement object.",
          },
          {
            id: 24,
            title: "What does the PreparedStatement object help prevent?",
            options: [
              "Data loss",
              "SQL injection",
              "Connection timeout",
              "Concurrency issues",
            ],
            correct_option: 1,
            solution:
              "PreparedStatement helps prevent SQL injection by using placeholders for parameters.",
          },
          {
            id: 25,
            title: "Which method is used to close a JDBC connection?",
            options: ["end()", "finish()", "close()", "terminate()"],
            correct_option: 2,
            solution: "close() method is used to close a JDBC Connection.",
          },
          {
            id: 26,
            title: "Which JDBC driver type is known as the thin driver?",
            options: ["Type 1", "Type 2", "Type 3", "Type 4"],
            correct_option: 3,
            solution:
              "Type 4 is known as the thin driver as it is a pure Java driver that communicates directly with the database.",
          },
          {
            id: 27,
            title: "What is the role of the Driver class in JDBC?",
            options: [
              "Execute SQL",
              "Load JDBC driver",
              "Manage connection pool",
              "Handle exceptions",
            ],
            correct_option: 1,
            solution:
              "Driver class is responsible for loading JDBC drivers at runtime.",
          },
          {
            id: 28,
            title:
              "Which method of DriverManager is used to load the driver class explicitly?",
            options: [
              "DriverManager.loadDriver()",
              "Class.forName()",
              "DriverManager.register()",
              "DriverManager.initialize()",
            ],
            correct_option: 1,
            solution:
              'Class.forName("driver class") is used to load the JDBC driver explicitly.',
          },
          {
            id: 29,
            title:
              "Which method can you use to retrieve metadata about the database itself?",
            options: [
              "getDatabaseMetaData()",
              "getMetaData()",
              "getSchemaInfo()",
              "getTableInfo()",
            ],
            correct_option: 0,
            solution:
              "getDatabaseMetaData() provides information about the database's structure and capabilities.",
          },
          {
            id: 30,
            title: "Which of the following statements is true about ResultSet?",
            options: [
              "It is scrollable by default",
              "It is forward-only by default",
              "It updates the database automatically",
              "It supports batch execution",
            ],
            correct_option: 1,
            solution: "By default, ResultSet is forward-only and read-only.",
          },
          {
            id: 31,
            title: "How do you get the number of columns in a ResultSet?",
            options: [
              "rs.getColumnCount()",
              "ResultSet.getColumns()",
              "rs.getMetaData().getColumnCount()",
              "ResultSet.getMetaData().columns()",
            ],
            correct_option: 2,
            solution:
              "You can get column count using rs.getMetaData().getColumnCount().",
          },
          {
            id: 32,
            title:
              "Which interface is used to represent stored procedures in JDBC?",
            options: [
              "Statement",
              "PreparedStatement",
              "CallableStatement",
              "ResultSet",
            ],
            correct_option: 2,
            solution:
              "CallableStatement is used to execute stored procedures in JDBC.",
          },
          {
            id: 33,
            title:
              "What is returned by executeUpdate() when running an INSERT or UPDATE?",
            options: ["ResultSet", "boolean", "int", "void"],
            correct_option: 2,
            solution:
              "executeUpdate() returns an int representing the number of rows affected.",
          },
          {
            id: 34,
            title:
              "Which method of PreparedStatement sets a String value in a SQL query?",
            options: ["setText()", "setString()", "setChar()", "setValue()"],
            correct_option: 1,
            solution:
              "setString(int parameterIndex, String value) is used to set a String in a PreparedStatement.",
          },
          {
            id: 35,
            title:
              "Which method sets a parameter to an integer value in PreparedStatement?",
            options: ["setInt()", "setNumber()", "setInteger()", "setDigit()"],
            correct_option: 0,
            solution:
              "setInt() sets a parameter to an int value in PreparedStatement.",
          },
          {
            id: 36,
            title:
              "How do you retrieve a value from the third column in ResultSet?",
            options: [
              "rs.get(3)",
              "rs.getColumn(3)",
              "rs.getValue(3)",
              "rs.getString(3)",
            ],
            correct_option: 3,
            solution:
              "You can retrieve a String value from a column using getString(columnIndex).",
          },
          {
            id: 37,
            title:
              "Which ResultSet method checks if the cursor is before the first row?",
            options: [
              "isFirst()",
              "isBeforeFirst()",
              "checkFirst()",
              "cursorAtStart()",
            ],
            correct_option: 1,
            solution:
              "isBeforeFirst() returns true if the cursor is before the first row.",
          },
          {
            id: 38,
            title: "What happens if you forget to close the JDBC connection?",
            options: [
              "It gets closed automatically",
              "Database crashes",
              "Memory leak and resource lock",
              "Nothing",
            ],
            correct_option: 2,
            solution:
              "Forgetting to close JDBC connections can cause memory leaks and keep resources locked.",
          },
          {
            id: 39,
            title: "Which of the following allows batch updates in JDBC?",
            options: [
              "PreparedStatement",
              "CallableStatement",
              "Statement",
              "All of the above",
            ],
            correct_option: 3,
            solution:
              "All of the above can be used for batch updates using addBatch() and executeBatch().",
          },
          {
            id: 40,
            title: "Which method of Statement adds a query to the batch?",
            options: ["addQuery()", "addToBatch()", "addBatch()", "queue()"],
            correct_option: 2,
            solution: "addBatch() adds SQL commands to a batch for execution.",
          },
        ],
      },
      {
        id: 2,
        title: "Unit - 2: Java Servlets",
        key: "java-servlets",
        all_mcqs: [
          {
            id: 1,
            title:
              "Which of the following is a popular web server used for running servlets?",
            options: [
              "Apache Hadoop",
              "Apache Kafka",
              "Apache Tomcat",
              "Apache Maven",
            ],
            correct_option: 2,
            solution:
              "Apache Tomcat is a widely used web server and servlet container for running Java servlets.",
          },
          {
            id: 2,
            title:
              "Which environment variable must be set to compile and run Java programs?",
            options: ["JAVA_LIB", "JAVA_PATH", "JAVA_HOME", "JAVA_ENV"],
            correct_option: 2,
            solution:
              "JAVA_HOME points to the JDK directory and is essential for compiling Java programs.",
          },
          {
            id: 3,
            title: "Which port is used by default by Apache Tomcat?",
            options: ["80", "8080", "443", "8005"],
            correct_option: 1,
            solution:
              "Apache Tomcat uses port 8080 as its default HTTP connector port.",
          },
          {
            id: 4,
            title: "What is a servlet?",
            options: [
              "A Java applet",
              "A Java class that responds to web requests",
              "A JavaScript module",
              "A database connection",
            ],
            correct_option: 1,
            solution:
              "A servlet is a Java class that runs on a web server and handles client requests.",
          },
          {
            id: 5,
            title: "Which method is called once in a servlet life cycle?",
            options: ["init()", "service()", "doGet()", "destroy()"],
            correct_option: 0,
            solution:
              "init() is called once when the servlet is first loaded to perform initialization.",
          },
          {
            id: 6,
            title: "Which method handles GET requests in a servlet?",
            options: ["doPost()", "doGet()", "service()", "process()"],
            correct_option: 1,
            solution:
              "doGet() is used to handle HTTP GET requests in servlets.",
          },
          {
            id: 7,
            title:
              "Which method is used to clean up resources before a servlet is destroyed?",
            options: ["init()", "service()", "destroy()", "end()"],
            correct_option: 2,
            solution:
              "destroy() is called when a servlet is taken out of service to release resources.",
          },
          {
            id: 8,
            title: "What package contains the servlet API?",
            options: [
              "java.servlet",
              "javax.servlet",
              "org.servlet",
              "com.servlet",
            ],
            correct_option: 1,
            solution:
              "The servlet API is located in the javax.servlet package.",
          },
          {
            id: 9,
            title: "Which interface must a servlet implement?",
            options: [
              "HttpServletRequest",
              "ServletContext",
              "Servlet",
              "HttpServlet",
            ],
            correct_option: 2,
            solution:
              "All servlets implement the Servlet interface, directly or indirectly.",
          },
          {
            id: 10,
            title:
              "Which class is commonly extended for writing HTTP servlets?",
            options: [
              "GenericServlet",
              "HttpServlet",
              "BaseServlet",
              "WebServlet",
            ],
            correct_option: 1,
            solution:
              "HttpServlet is a commonly extended class to handle HTTP-specific functionality.",
          },
          {
            id: 11,
            title: "What is the use of the service() method?",
            options: [
              "Initializes the servlet",
              "Handles requests and responses",
              "Destroys the servlet",
              "Reloads the servlet",
            ],
            correct_option: 1,
            solution:
              "The service() method handles both GET and POST requests and generates responses.",
          },
          {
            id: 12,
            title: "Which object represents the client's request?",
            options: [
              "ServletResponse",
              "HttpSession",
              "HttpServletRequest",
              "ServletContext",
            ],
            correct_option: 2,
            solution:
              "HttpServletRequest contains all information about the client's request.",
          },
          {
            id: 13,
            title: "How do you generate a response in servlets?",
            options: [
              "Using PrintWriter from HttpServletResponse",
              "System.out.println()",
              "ServletContext.getWriter()",
              "PrintStream",
            ],
            correct_option: 0,
            solution:
              "You use response.getWriter() to get a PrintWriter and write the response.",
          },
          {
            id: 14,
            title: "What is a cookie in servlets?",
            options: [
              "Server-side data store",
              "Client-side storage mechanism",
              "Java class for JSON parsing",
              "Security tool",
            ],
            correct_option: 1,
            solution:
              "Cookies are small data stored on the client side to maintain session data.",
          },
          {
            id: 15,
            title: "Which method is used to add a cookie to a response?",
            options: [
              "addCookie()",
              "setCookie()",
              "createCookie()",
              "putCookie()",
            ],
            correct_option: 0,
            solution:
              "addCookie() method of HttpServletResponse is used to add a cookie.",
          },
          {
            id: 16,
            title: "Which interface provides session management?",
            options: [
              "ServletConfig",
              "HttpSession",
              "ServletRequest",
              "Cookie",
            ],
            correct_option: 1,
            solution:
              "HttpSession interface provides session tracking functionality between client and server.",
          },
          {
            id: 17,
            title: "Which method gets a session from the request?",
            options: [
              "request.getSession()",
              "response.getSession()",
              "session.create()",
              "session.get()",
            ],
            correct_option: 0,
            solution:
              "getSession() is used to retrieve or create a session from the request object.",
          },
          {
            id: 18,
            title: "What is the default session timeout in servlets?",
            options: ["30 seconds", "1 minute", "5 minutes", "30 minutes"],
            correct_option: 3,
            solution:
              "By default, session timeout is 30 minutes unless configured otherwise.",
          },
          {
            id: 19,
            title: "What is a servlet filter used for?",
            options: [
              "Modifying requests or responses",
              "Storing session data",
              "Compiling servlets",
              "Creating cookies",
            ],
            correct_option: 0,
            solution:
              "Filters are used to pre-process requests and post-process responses.",
          },
          {
            id: 20,
            title: "Which method is overridden to implement a servlet filter?",
            options: ["init()", "doFilter()", "service()", "process()"],
            correct_option: 1,
            solution:
              "doFilter() method is overridden to define filter behavior.",
          },
          {
            id: 21,
            title: "Which interface must a filter class implement?",
            options: ["ServletFilter", "HttpFilter", "Filter", "Servlet"],
            correct_option: 2,
            solution:
              "All filter classes must implement the javax.servlet.Filter interface.",
          },
          {
            id: 22,
            title: "Where is the filter mapped in a web application?",
            options: [
              "Servlet class",
              "web.xml",
              "Filter.java",
              "HttpServletRequest",
            ],
            correct_option: 1,
            solution:
              "Filters are mapped to URLs or servlets in web.xml or using annotations.",
          },
          {
            id: 23,
            title: "Which method initializes a filter?",
            options: ["init()", "start()", "service()", "run()"],
            correct_option: 0,
            solution:
              "init() is called once when the filter is instantiated to initialize it.",
          },
          {
            id: 24,
            title: "How are multiple filters ordered in execution?",
            options: [
              "Alphabetically",
              "Randomly",
              "Based on declaration order",
              "Based on name length",
            ],
            correct_option: 2,
            solution:
              "Filters execute in the order they are declared in web.xml or by annotation priority.",
          },
          {
            id: 25,
            title: "Which object is passed along the filter chain?",
            options: ["HttpServlet", "ServletConfig", "FilterChain", "Cookie"],
            correct_option: 2,
            solution:
              "FilterChain object is used to pass the request and response to the next filter or servlet.",
          },
          {
            id: 26,
            title: "How do you map a filter to a servlet in annotations?",
            options: [
              "@WebServlet",
              "@FilterMapping",
              "@WebFilter",
              "@ServletFilter",
            ],
            correct_option: 2,
            solution: "@WebFilter is used to map filters using annotations.",
          },
          {
            id: 27,
            title: "Which tag in web.xml is used to define a servlet?",
            options: [
              "<servlet-mapping>",
              "<web-servlet>",
              "<define-servlet>",
              "<servlet>",
            ],
            correct_option: 3,
            solution:
              "<servlet> tag is used to define servlet configuration in web.xml.",
          },
          {
            id: 28,
            title: "Which tag in web.xml is used to map a servlet to a URL?",
            options: [
              "<url-map>",
              "<url-pattern>",
              "<servlet-pattern>",
              "<servlet-mapping>",
            ],
            correct_option: 3,
            solution:
              "<servlet-mapping> is used to map a servlet to a specific URL pattern.",
          },
          {
            id: 29,
            title:
              "Which method of HttpServlet is overridden to handle POST requests?",
            options: ["doGet()", "doPost()", "service()", "processPost()"],
            correct_option: 1,
            solution: "doPost() is used to handle HTTP POST requests.",
          },
          {
            id: 30,
            title:
              "Which object allows access to global parameters set in web.xml?",
            options: [
              "ServletRequest",
              "ServletConfig",
              "ServletContext",
              "HttpSession",
            ],
            correct_option: 2,
            solution:
              "ServletContext provides access to global parameters and application-wide information.",
          },
          {
            id: 31,
            title:
              "Which method is used to retrieve an initialization parameter in a servlet?",
            options: [
              "getInitParameter()",
              "getParameter()",
              "getConfigParam()",
              "getServletParam()",
            ],
            correct_option: 0,
            solution:
              "getInitParameter() retrieves servlet-specific initialization parameters from web.xml.",
          },
          {
            id: 32,
            title:
              "What is the purpose of the web.xml file in a Java web application?",
            options: [
              "To store servlet source code",
              "To configure servlets and mappings",
              "To compile Java files",
              "To monitor memory usage",
            ],
            correct_option: 1,
            solution:
              "web.xml is the deployment descriptor used to configure servlets, filters, listeners, etc.",
          },
          {
            id: 33,
            title:
              "What is the return type of getWriter() method of HttpServletResponse?",
            options: ["OutputStream", "PrintStream", "PrintWriter", "Writer"],
            correct_option: 2,
            solution:
              "getWriter() returns a PrintWriter object to write character-based responses.",
          },
          {
            id: 34,
            title: "Which HTTP status code represents a successful request?",
            options: ["404", "200", "500", "301"],
            correct_option: 1,
            solution: "200 is the status code for a successful HTTP request.",
          },
          {
            id: 35,
            title:
              "What happens if you do not call chain.doFilter() in a filter?",
            options: [
              "An exception is thrown",
              "The request is terminated",
              "Next filter is skipped",
              "Filter is ignored",
            ],
            correct_option: 2,
            solution:
              "If chain.doFilter() is not called, the request is not passed to the next filter or servlet.",
          },
          {
            id: 36,
            title:
              "Which object allows sharing data between different servlets?",
            options: [
              "HttpServlet",
              "ServletRequest",
              "ServletContext",
              "HttpSession",
            ],
            correct_option: 2,
            solution:
              "ServletContext allows sharing data across the entire web application.",
          },
          {
            id: 37,
            title: "Which annotation is used to define a servlet in Java?",
            options: ["@WebServlet", "@Servlet", "@HttpServlet", "@WebApp"],
            correct_option: 0,
            solution:
              "@WebServlet is the annotation used to declare servlet classes and their URL mappings.",
          },
          {
            id: 38,
            title: "Which method in servlet returns MIME type of response?",
            options: [
              "getMimeType()",
              "setContentType()",
              "getContentType()",
              "getType()",
            ],
            correct_option: 1,
            solution:
              "setContentType() sets the MIME type of the response, e.g., 'text/html'.",
          },
          {
            id: 39,
            title:
              "Which method sends a redirect response to the client using a new URL?",
            options: [
              "sendRedirect()",
              "forward()",
              "responseRedirect()",
              "newUrl()",
            ],
            correct_option: 0,
            solution:
              "sendRedirect() sends a redirect response to the client to a different URL.",
          },
          {
            id: 40,
            title: "Which is true about session tracking in servlets?",
            options: [
              "Cookies can't be used",
              "Only one method exists",
              "Sessions can be tracked using URL rewriting",
              "Session tracking is not supported",
            ],
            correct_option: 2,
            solution:
              "Session tracking in servlets can be achieved using cookies, hidden fields, and URL rewriting.",
          },
        ],
      },
      {
        id: 3,
        title: "Unit - 3: Java Server Pages",
        key: "java-server-pages",
        all_mcqs: [
          {
            id: 1,
            title: "What does JSP stand for?",
            options: [
              "Java Server Pages",
              "Java Servlet Pages",
              "Java Software Pages",
              "Java Script Pages",
            ],
            correct_option: 0,
            solution:
              "JSP stands for Java Server Pages, used for building dynamic web content.",
          },
          {
            id: 2,
            title: "Why is JSP needed?",
            options: [
              "To replace HTML",
              "To simplify server-side programming",
              "To eliminate JavaScript",
              "To manage databases",
            ],
            correct_option: 1,
            solution:
              "JSP helps simplify server-side programming by allowing Java code inside HTML.",
          },
          {
            id: 3,
            title: "Which is an advantage of JSP over Servlets?",
            options: [
              "More secure",
              "Faster than all Java apps",
              "Easier to write HTML",
              "Better database integration",
            ],
            correct_option: 2,
            solution:
              "JSP is preferred for web pages with more HTML content, allowing embedding Java directly.",
          },
          {
            id: 4,
            title: "Which is the first phase in the life cycle of a JSP page?",
            options: [
              "Compilation",
              "Initialization",
              "Translation",
              "Execution",
            ],
            correct_option: 2,
            solution:
              "In the JSP life cycle, the translation phase translates the JSP to a servlet.",
          },
          {
            id: 5,
            title: "What is the use of a declaration tag in JSP?",
            options: [
              "Execute Java code",
              "Define variables and methods",
              "Write expressions",
              "Handle exceptions",
            ],
            correct_option: 1,
            solution:
              "Declaration tags define variables and methods with `<%! ... %>`.",
          },
          {
            id: 6,
            title: "Which tag is used to insert Java code that gets executed?",
            options: [
              "Declaration tag",
              "Scriptlet tag",
              "Expression tag",
              "Custom tag",
            ],
            correct_option: 1,
            solution:
              "Scriptlet tags `<% ... %>` execute Java code inside JSP.",
          },
          {
            id: 7,
            title:
              "Which tag evaluates and inserts the result into the output?",
            options: [
              "Expression tag",
              "Declaration tag",
              "Scriptlet tag",
              "Custom tag",
            ],
            correct_option: 0,
            solution:
              "Expression tag `<%= ... %>` evaluates and inserts result into HTML.",
          },
          {
            id: 8,
            title: "What does the 'out' implicit object in JSP refer to?",
            options: [
              "OutputStream",
              "PrintWriter",
              "Response buffer",
              "Console log",
            ],
            correct_option: 1,
            solution:
              "The 'out' object is an instance of JspWriter, used for writing response data.",
          },
          {
            id: 9,
            title: "Which implicit object gives access to the request data?",
            options: ["page", "response", "request", "application"],
            correct_option: 2,
            solution:
              "The 'request' object provides access to client request data like parameters and headers.",
          },
          {
            id: 10,
            title: "Which object is used to manage user sessions in JSP?",
            options: ["page", "application", "session", "context"],
            correct_option: 2,
            solution:
              "The 'session' object helps track user sessions across multiple requests.",
          },
          {
            id: 11,
            title: "What is the purpose of pageContext in JSP?",
            options: [
              "Tracks session state",
              "Access to request parameters",
              "Access to all scoped variables",
              "Manages exceptions",
            ],
            correct_option: 2,
            solution:
              "pageContext provides access to attributes in page, request, session, and application scopes.",
          },
          {
            id: 12,
            title: "What does the 'exception' implicit object represent?",
            options: [
              "All thrown exceptions",
              "Last occurred exception",
              "Exception in error page",
              "Null pointer exception",
            ],
            correct_option: 2,
            solution:
              "In error JSP pages, 'exception' contains the Throwable object that caused the error.",
          },
          {
            id: 13,
            title: "What is a JavaBean?",
            options: [
              "Java applet",
              "Reusable Java component with properties",
              "JavaScript class",
              "Servlet wrapper",
            ],
            correct_option: 1,
            solution:
              "JavaBeans are reusable Java classes that follow specific conventions with properties and setters/getters.",
          },
          {
            id: 14,
            title: "Which JSP action tag is used to access a JavaBean?",
            options: [
              "<jsp:declare>",
              "<jsp:scriptlet>",
              "<jsp:useBean>",
              "<jsp:bean>",
            ],
            correct_option: 2,
            solution:
              "<jsp:useBean> is used to create or access a JavaBean in JSP.",
          },
          {
            id: 15,
            title: "How do you read a property from a JavaBean in JSP?",
            options: [
              "<jsp:useBean>",
              "<jsp:getProperty>",
              "<jsp:setProperty>",
              "<jsp:readBean>",
            ],
            correct_option: 1,
            solution:
              "<jsp:getProperty> is used to read a property value from a JavaBean.",
          },
          {
            id: 16,
            title: "What does JSP EL (Expression Language) allow?",
            options: [
              "Writing Java code in HTML",
              "Accessing scoped variables easily",
              "Defining servlets",
              "Extending JSP lifecycle",
            ],
            correct_option: 1,
            solution:
              "JSP EL allows simpler access to attributes stored in different scopes like request/session.",
          },
          {
            id: 17,
            title: "How do you invoke EL in JSP?",
            options: ["<% $expr %>", "<%= expr %>", "${expr}", "<el:expr>"],
            correct_option: 2,
            solution:
              "Expression Language in JSP is invoked using `${expr}` syntax.",
          },
          {
            id: 18,
            title: "Which symbol prevents EL evaluation in JSP?",
            options: ["\\", "#", "!", "%"],
            correct_option: 3,
            solution:
              'Using `<%@ page isELIgnored="true" %>` disables EL evaluation in JSP.',
          },
          {
            id: 19,
            title: "What is a custom tag in JSP?",
            options: [
              "User-defined HTML element",
              "Servlet alias",
              "Custom Java class for reusable logic",
              "JSP error handler",
            ],
            correct_option: 2,
            solution:
              "Custom tags are user-defined reusable components handled by tag handler classes.",
          },
          {
            id: 20,
            title: "What is the use of Tag Library Descriptor (TLD) in JSP?",
            options: [
              "Declares EL variables",
              "Defines JavaBeans",
              "Describes custom tag libraries",
              "Compiles JSP",
            ],
            correct_option: 2,
            solution:
              "TLD files describe custom tag libraries and are required to use custom tags in JSP.",
          },
          {
            id: 21,
            title:
              "Which tag is used to store a value in a variable using JSTL?",
            options: ["<c:out>", "<c:set>", "<c:store>", "<c:assign>"],
            correct_option: 1,
            solution: "<c:set> is used to assign values to variables in JSTL.",
          },
          {
            id: 22,
            title: "What is the function of <c:out> in JSTL?",
            options: [
              "Output HTML",
              "Escape and print values",
              "Set session attributes",
              "Call servlet",
            ],
            correct_option: 1,
            solution:
              "<c:out> is used to display values with XML/HTML escaping by default.",
          },
          {
            id: 23,
            title: "Which JSTL tag is used to iterate over collections?",
            options: ["<c:loop>", "<c:iterate>", "<c:repeat>", "<c:forEach>"],
            correct_option: 3,
            solution:
              "<c:forEach> is used for looping over arrays, collections, or maps.",
          },
          {
            id: 24,
            title:
              "Which tag is used to include content from another resource in JSTL?",
            options: ["<c:import>", "<c:include>", "<jsp:include>", "<c:get>"],
            correct_option: 0,
            solution:
              "<c:import> allows inclusion of content from local or external resources.",
          },
          {
            id: 25,
            title: "Which tag allows conditional execution in JSTL?",
            options: ["<c:check>", "<c:if>", "<c:condition>", "<c:when>"],
            correct_option: 1,
            solution: "<c:if> is used for evaluating a condition in JSTL.",
          },
          {
            id: 26,
            title: "How do you perform multiple condition checks in JSTL?",
            options: [
              "Using <c:when>",
              "Using <c:switch>",
              "Using <c:choose> with <c:when>",
              "Using <c:case>",
            ],
            correct_option: 2,
            solution:
              "<c:choose> is used with <c:when> and <c:otherwise> for multiple conditions.",
          },
          {
            id: 27,
            title: "What does the <c:remove> tag do?",
            options: [
              "Deletes files",
              "Removes JavaBeans",
              "Removes variables from scope",
              "Uninstalls JSTL",
            ],
            correct_option: 2,
            solution:
              "<c:remove> removes a scoped variable from specified scope.",
          },
          {
            id: 28,
            title: "Which JSTL tag is used for error handling?",
            options: ["<c:try>", "<c:catch>", "<c:throw>", "<c:error>"],
            correct_option: 1,
            solution:
              "<c:catch> is used to catch and handle exceptions within JSTL.",
          },
          {
            id: 29,
            title: "Which of the following is NOT a valid JSP implicit object?",
            options: ["application", "session", "context", "pageContext"],
            correct_option: 2,
            solution:
              "'context' is not a valid JSP implicit object. 'application' and 'pageContext' are valid.",
          },
          {
            id: 30,
            title:
              "What is the correct scope attribute value for a variable accessible throughout the session?",
            options: ["page", "request", "session", "application"],
            correct_option: 2,
            solution:
              "'session' scope means the variable is accessible across multiple requests by the same user.",
          },
          {
            id: 31,
            title: "Which tag library prefix is commonly used for JSTL core?",
            options: ["html", "jstl", "core", "c"],
            correct_option: 3,
            solution:
              "The JSTL core tags are typically prefixed with 'c', e.g., <c:out>, <c:forEach>.",
          },
          {
            id: 32,
            title:
              "Which JSTL tag is used to evaluate an expression and store the result?",
            options: ["<c:eval>", "<c:calculate>", "<c:set>", "<c:assign>"],
            correct_option: 2,
            solution:
              "<c:set> is used for evaluating and storing results in scoped variables.",
          },
          {
            id: 33,
            title:
              "Which expression language scope has the narrowest visibility?",
            options: ["application", "session", "request", "page"],
            correct_option: 3,
            solution:
              "Page scope is the narrowest; variables are available only within the current JSP page.",
          },
          {
            id: 34,
            title:
              "Which of the following tags is used for exception handling in JSTL?",
            options: ["<c:try>", "<c:catch>", "<c:handle>", "<c:exception>"],
            correct_option: 1,
            solution:
              "<c:catch> allows error handling by capturing exceptions in JSTL.",
          },
          {
            id: 35,
            title:
              "Which directive enables or disables EL evaluation in a JSP page?",
            options: [
              "<%@ taglib %>",
              '<%@ page isELIgnored="false" %>',
              "<%@ expression %>",
              "<%@ el %>",
            ],
            correct_option: 1,
            solution:
              '<%@ page isELIgnored="false" %> enables Expression Language evaluation.',
          },
          {
            id: 36,
            title:
              "What happens if a JavaBean property does not have a getter method?",
            options: [
              "It throws a runtime error",
              "It can still be read",
              "JSP ignores it",
              "Bean becomes abstract",
            ],
            correct_option: 0,
            solution:
              "If a getter is missing, accessing the property via <jsp:getProperty> causes a runtime error.",
          },
          {
            id: 37,
            title: "Where do you define a custom tag in a JSP application?",
            options: [
              "In the servlet",
              "In web.xml only",
              "In a TLD file",
              "In the JavaBean",
            ],
            correct_option: 2,
            solution:
              "Custom tags are defined and described using Tag Library Descriptor (TLD) files.",
          },
          {
            id: 38,
            title:
              "Which object can be used to set attributes that are visible to all JSPs in the application?",
            options: ["session", "request", "application", "page"],
            correct_option: 2,
            solution:
              "application scope allows sharing attributes across the entire web app.",
          },
          {
            id: 39,
            title:
              "Which of the following is a valid way to disable a JSTL core tag?",
            options: [
              "Remove taglib directive",
              "Use c:disable",
              "Use isELIgnored",
              "Use comments",
            ],
            correct_option: 0,
            solution:
              "Removing or not importing the taglib directive effectively disables JSTL usage in that JSP.",
          },
          {
            id: 40,
            title:
              "Which tag is used to terminate execution inside a <c:forEach> loop?",
            options: ["<c:break>", "<c:stop>", "<c:exit>", "None of these"],
            correct_option: 3,
            solution:
              "JSTL does not support breaking a loop with a tag like <c:break>; you must use conditions.",
          },
        ],
      },
      {
        id: 4,
        title: "Unit - 4: Java Web Services",
        key: "java-web-services",
        all_mcqs: [
          {
            id: 1,
            title: "What are web services?",
            options: [
              "Desktop applications",
              "Programs to browse internet",
              "Software systems for machine-to-machine interaction over a network",
              "Database management tools",
            ],
            correct_option: 2,
            solution:
              "Web services are standardized software systems that allow communication between machines over a network.",
          },
          {
            id: 2,
            title: "Which architecture pattern do web services follow?",
            options: [
              "Monolithic",
              "Service-Oriented Architecture",
              "Layered",
              "Peer-to-Peer",
            ],
            correct_option: 1,
            solution:
              "Web services are based on Service-Oriented Architecture (SOA), promoting interoperability.",
          },
          {
            id: 3,
            title: "Which of the following is a type of web service?",
            options: ["JSON", "JDBC", "SOAP", "Servlet"],
            correct_option: 2,
            solution:
              "SOAP (Simple Object Access Protocol) is a type of web service protocol.",
          },
          {
            id: 4,
            title: "What does REST stand for?",
            options: [
              "Remote Execution Simple Transfer",
              "Representational State Transfer",
              "Resource Service Transfer",
              "Remote Servlet Translator",
            ],
            correct_option: 1,
            solution:
              "REST stands for Representational State Transfer, a popular web service architectural style.",
          },
          {
            id: 5,
            title: "Which protocol is commonly used by SOAP web services?",
            options: ["FTP", "SMTP", "HTTP", "SSH"],
            correct_option: 2,
            solution:
              "SOAP web services most commonly use HTTP as their transport protocol.",
          },
          {
            id: 6,
            title: "What is one key feature of RESTful services?",
            options: [
              "Tightly coupled",
              "Requires WSDL",
              "Stateless communication",
              "Binary message format",
            ],
            correct_option: 2,
            solution:
              "RESTful services use stateless communication, meaning no client context is stored on the server.",
          },
          {
            id: 7,
            title:
              "Which of the following is a format used by REST web services?",
            options: ["HTML", "XML", "JSON", "Both XML and JSON"],
            correct_option: 3,
            solution:
              "REST can use multiple data formats, commonly XML and JSON.",
          },
          {
            id: 8,
            title:
              "SOAP web services require which of the following for service description?",
            options: ["XML schema", "WSDL", "JDBC", "UDDI"],
            correct_option: 1,
            solution:
              "SOAP services use WSDL (Web Services Description Language) to describe service interfaces.",
          },
          {
            id: 9,
            title:
              "Which framework is commonly used to build RESTful services in Java?",
            options: ["Hibernate", "Struts", "Jersey", "JSP"],
            correct_option: 2,
            solution:
              "Jersey is a popular open-source framework for building RESTful services in Java.",
          },
          {
            id: 10,
            title:
              "Which annotation is used in Jersey to map a URI to a method?",
            options: ["@GET", "@POST", "@Path", "@Resource"],
            correct_option: 2,
            solution:
              "@Path is used to define URI patterns in Jersey-based RESTful services.",
          },
          {
            id: 11,
            title:
              "Which annotation is used in JAX-RS to handle GET HTTP requests?",
            options: ["@POST", "@GET", "@PUT", "@DELETE"],
            correct_option: 1,
            solution: "@GET is used to handle HTTP GET requests in JAX-RS.",
          },
          {
            id: 12,
            title: "What does the @PathParam annotation do in JAX-RS?",
            options: [
              "Extract query string",
              "Extract form data",
              "Extract path parameter from URI",
              "Defines service URL",
            ],
            correct_option: 2,
            solution: "@PathParam is used to extract values from the URI path.",
          },
          {
            id: 13,
            title:
              "Which annotation extracts data from the query string in REST?",
            options: ["@PathParam", "@FormParam", "@QueryParam", "@Param"],
            correct_option: 2,
            solution:
              "@QueryParam extracts parameters passed in the query string of the URL.",
          },
          {
            id: 14,
            title: "Which annotation handles form data in RESTful services?",
            options: ["@FormParam", "@DataParam", "@FormField", "@POSTParam"],
            correct_option: 0,
            solution:
              "@FormParam is used to extract form fields submitted via POST.",
          },
          {
            id: 15,
            title: "Which HTTP method is typically used for retrieving data?",
            options: ["POST", "GET", "PUT", "DELETE"],
            correct_option: 1,
            solution:
              "GET is the standard method used to retrieve data in HTTP-based RESTful services.",
          },
          {
            id: 16,
            title: "Which HTTP method is used to delete a resource?",
            options: ["GET", "POST", "DELETE", "HEAD"],
            correct_option: 2,
            solution: "DELETE is used to remove a resource from the server.",
          },
          {
            id: 17,
            title: "Which HTTP method is idempotent?",
            options: ["POST", "GET", "PUT", "Both GET and PUT"],
            correct_option: 3,
            solution:
              "GET and PUT are idempotent, meaning multiple requests have the same effect as one.",
          },
          {
            id: 18,
            title: "What is the full form of JAX-RS?",
            options: [
              "Java API for RESTful Web Services",
              "Java Application for REST Services",
              "Java API for XML Requests",
              "Java Access for Resource Services",
            ],
            correct_option: 0,
            solution: "JAX-RS stands for Java API for RESTful Web Services.",
          },
          {
            id: 19,
            title:
              "Which component is used in JAX-RS to send HTTP requests from client side?",
            options: [
              "HttpServlet",
              "JAX-RS client API",
              "Java Bean",
              "ServletContext",
            ],
            correct_option: 1,
            solution:
              "JAX-RS provides a client API to send HTTP requests to RESTful services.",
          },
          {
            id: 20,
            title: "Which HTTP status code indicates successful request?",
            options: [
              "200 OK",
              "404 Not Found",
              "500 Internal Error",
              "403 Forbidden",
            ],
            correct_option: 0,
            solution: "HTTP 200 OK indicates a successful request.",
          },
          {
            id: 21,
            title: "Which of the following best describes SOAP?",
            options: [
              "Stateless and lightweight",
              "Protocol using JSON",
              "Strictly XML-based and heavy",
              "Always faster than REST",
            ],
            correct_option: 2,
            solution:
              "SOAP is a protocol that uses XML and is considered heavier than REST.",
          },
          {
            id: 22,
            title: "Which of the following statements about REST is false?",
            options: [
              "REST uses HTTP",
              "REST requires WSDL",
              "REST is stateless",
              "REST supports multiple formats",
            ],
            correct_option: 1,
            solution:
              "Unlike SOAP, REST does not use WSDL for service definition.",
          },
          {
            id: 23,
            title: "Which is true about REST URI structure?",
            options: [
              "It uses verbs in URI",
              "It uses nouns to represent resources",
              "It uses methods in path",
              "It uses Java methods in URI",
            ],
            correct_option: 1,
            solution:
              "RESTful URIs use nouns to identify resources, while actions are represented using HTTP methods.",
          },
          {
            id: 24,
            title:
              "Which file must be configured to use Jersey in a web application?",
            options: [
              "web.xml",
              "jersey.xml",
              "rest-config.xml",
              "services.xml",
            ],
            correct_option: 0,
            solution:
              "web.xml is used to configure Jersey servlets in Java web apps.",
          },
          {
            id: 25,
            title:
              "Which annotation is used to inject values from HTML forms in JAX-RS?",
            options: ["@FormData", "@FormInput", "@FormParam", "@HTMLParam"],
            correct_option: 2,
            solution:
              "@FormParam is used to extract form fields submitted through POST forms.",
          },
          {
            id: 26,
            title: "What is the purpose of HTTP response codes?",
            options: [
              "To authenticate users",
              "To track sessions",
              "To indicate request processing result",
              "To define service path",
            ],
            correct_option: 2,
            solution:
              "HTTP status codes inform the client about the outcome of a request.",
          },
          {
            id: 27,
            title: "What does HTTP 404 mean?",
            options: [
              "Unauthorized access",
              "Resource not found",
              "Success",
              "Bad request",
            ],
            correct_option: 1,
            solution:
              "404 Not Found means the requested resource doesn't exist on the server.",
          },
          {
            id: 28,
            title: "Which HTTP status code represents a bad request?",
            options: ["403", "400", "500", "302"],
            correct_option: 1,
            solution:
              "400 Bad Request means the server couldn't understand the request due to malformed syntax.",
          },
          {
            id: 29,
            title:
              "Which client API class is used to initiate a request in JAX-RS?",
            options: [
              "RestRequest",
              "RequestBuilder",
              "Client",
              "RestConnector",
            ],
            correct_option: 2,
            solution:
              "javax.ws.rs.client.Client is used to initiate requests in JAX-RS client API.",
          },
          {
            id: 30,
            title:
              "Which JAX-RS annotation is used to define the base URI of a resource?",
            options: ["@Base", "@Path", "@Resource", "@URI"],
            correct_option: 1,
            solution:
              "@Path defines the base URI for the resource class or method.",
          },
          {
            id: 31,
            title:
              "Which annotation is used to produce JSON output from a REST service?",
            options: [
              '@Produces("text/html")',
              '@Produces("application/json")',
              "@PathParam",
              "@JsonFormat",
            ],
            correct_option: 1,
            solution:
              '@Produces("application/json") tells the service to respond with JSON data.',
          },
          {
            id: 32,
            title: "What is the main transport protocol used by REST and SOAP?",
            options: ["SMTP", "HTTP", "FTP", "TCP"],
            correct_option: 1,
            solution:
              "Both REST and SOAP primarily use HTTP as the transport protocol.",
          },
          {
            id: 33,
            title: "Which annotation in JAX-RS is used to receive JSON input?",
            options: [
              '@Consumes("application/json")',
              '@Produces("application/json")',
              "@RequestBody",
              "@JsonInput",
            ],
            correct_option: 0,
            solution:
              '@Consumes("application/json") specifies that the service accepts JSON input.',
          },
          {
            id: 34,
            title: "Which HTTP method is used to update a resource?",
            options: ["POST", "GET", "PUT", "DELETE"],
            correct_option: 2,
            solution: "PUT is used to update an existing resource in REST.",
          },
          {
            id: 35,
            title: "Which HTTP status code indicates internal server error?",
            options: ["403", "404", "500", "503"],
            correct_option: 2,
            solution:
              "500 Internal Server Error indicates that the server encountered an unexpected condition.",
          },
          {
            id: 36,
            title: "Which media type is used to consume form-encoded data?",
            options: [
              "application/json",
              "text/plain",
              "application/x-www-form-urlencoded",
              "multipart/form-data",
            ],
            correct_option: 2,
            solution:
              "application/x-www-form-urlencoded is used for HTML form submission.",
          },
          {
            id: 37,
            title:
              "Which exception is thrown for a missing resource in JAX-RS?",
            options: [
              "ResourceException",
              "NotFoundException",
              "MissingResourceException",
              "BadRequestException",
            ],
            correct_option: 1,
            solution:
              "NotFoundException is thrown when a resource is not found in JAX-RS.",
          },
          {
            id: 38,
            title:
              "Which annotation specifies a method can consume form data in POST?",
            options: [
              '@Consumes("application/json")',
              '@Consumes("application/x-www-form-urlencoded")',
              "@FormInput",
              "@BodyParam",
            ],
            correct_option: 1,
            solution:
              '@Consumes("application/x-www-form-urlencoded") allows receiving form POST data.',
          },
          {
            id: 39,
            title:
              "What is the default behavior of JAX-RS if no exception handling is configured?",
            options: [
              "Return 200 OK",
              "Return 500 Internal Server Error",
              "Ignore exception",
              "Redirect to login",
            ],
            correct_option: 1,
            solution:
              "Unhandled exceptions in JAX-RS default to HTTP 500 Internal Server Error.",
          },
          {
            id: 40,
            title:
              "Which of the following libraries is used with Jersey to support REST client features?",
            options: ["Hibernate", "JSP", "JAX-RS Client", "Spring Boot"],
            correct_option: 2,
            solution:
              "JAX-RS Client API is used with Jersey to create HTTP clients for REST services.",
          },
        ],
      },
      {
        id: 5,
        title: "Unit - 5: Introduction to Spring and Hibernate",
        key: "introduction-to-spring-and-hibernate",
        all_mcqs: [
          {
            id: 1,
            title: "What is Spring MVC?",
            options: [
              "A programming language",
              "A Java framework for building web applications",
              "A database system",
              "A type of HTTP protocol",
            ],
            correct_option: 1,
            solution:
              "Spring MVC is a framework for building web applications in Java, following the Model-View-Controller design pattern.",
          },
          {
            id: 2,
            title: "Which of the following is an advantage of Spring MVC?",
            options: [
              "Provides better integration with Java EE",
              "Seamless integration with Hibernate",
              "Supports multiple view technologies",
              "All of the above",
            ],
            correct_option: 3,
            solution:
              "Spring MVC is highly flexible, allowing seamless integration with various technologies like Java EE and Hibernate.",
          },
          {
            id: 3,
            title: "Which architecture does Spring MVC follow?",
            options: [
              "Client-Server",
              "Model-View-Controller",
              "Layered",
              "Client-Model-Controller",
            ],
            correct_option: 1,
            solution:
              "Spring MVC is based on the Model-View-Controller architecture pattern.",
          },
          {
            id: 4,
            title:
              "Which component in Spring MVC is responsible for handling user requests?",
            options: [
              "Controller",
              "DispatcherServlet",
              "Model",
              "ViewResolver",
            ],
            correct_option: 1,
            solution:
              "In Spring MVC, the Controller handles user requests and controls the flow.",
          },
          {
            id: 5,
            title: "What does the DispatcherServlet do in Spring MVC?",
            options: [
              "Handles HTTP requests",
              "Manages session data",
              "Acts as a controller",
              "Routes requests to appropriate handlers",
            ],
            correct_option: 3,
            solution:
              "The DispatcherServlet is the front controller in Spring MVC, routing requests to the appropriate handler method.",
          },
          {
            id: 6,
            title:
              "Which module of the Spring Framework helps in integrating with Hibernate?",
            options: ["Spring Core", "Spring ORM", "Spring AOP", "Spring Web"],
            correct_option: 1,
            solution:
              "The Spring ORM module provides support for integrating with frameworks like Hibernate.",
          },
          {
            id: 7,
            title: "What is the role of the Model in Spring MVC?",
            options: [
              "To handle view rendering",
              "To manage application logic",
              "To pass data to the view",
              "To handle user inputs",
            ],
            correct_option: 2,
            solution:
              "In Spring MVC, the Model holds the data of the application that is passed to the view.",
          },
          {
            id: 8,
            title: "What is Hibernate in Java?",
            options: [
              "A web framework",
              "A data access framework",
              "A database system",
              "A JavaScript library",
            ],
            correct_option: 1,
            solution:
              "Hibernate is a data access framework for Java, providing ORM (Object-Relational Mapping).",
          },
          {
            id: 9,
            title: "What is ORM in Hibernate?",
            options: [
              "Object-Relation Mapping",
              "Object-Relational Model",
              "Open Resource Management",
              "Object Remote Management",
            ],
            correct_option: 0,
            solution:
              "ORM stands for Object-Relational Mapping, which is a technique used to map Java objects to database tables.",
          },
          {
            id: 10,
            title: "What is the main purpose of Hibernate?",
            options: [
              "To provide a framework for web applications",
              "To map Java objects to database tables",
              "To manage Java beans",
              "To handle database queries",
            ],
            correct_option: 1,
            solution:
              "Hibernate is used to simplify database operations by mapping Java objects to database tables.",
          },
          {
            id: 11,
            title:
              "Which component in Hibernate handles the database connection?",
            options: ["Session", "SessionFactory", "Transaction", "Query"],
            correct_option: 1,
            solution:
              "The SessionFactory is responsible for creating and managing sessions, which are used to interact with the database.",
          },
          {
            id: 12,
            title:
              "Which of the following is not a type of Hibernate association?",
            options: [
              "One-to-One",
              "One-to-Many",
              "Many-to-Many",
              "Many-to-Single",
            ],
            correct_option: 3,
            solution:
              "Hibernate supports One-to-One, One-to-Many, and Many-to-Many associations, but not Many-to-Single.",
          },
          {
            id: 13,
            title:
              "Which file is used to configure Hibernate in a Java project?",
            options: [
              "hibernate.cfg.xml",
              "hibernate.properties",
              "hibernate.xml",
              "hibernate.config",
            ],
            correct_option: 0,
            solution:
              "The hibernate.cfg.xml file is used to configure Hibernate settings, such as database connection details.",
          },
          {
            id: 14,
            title: "What is HQL in Hibernate?",
            options: [
              "Hibernate Query Language",
              "Hibernate Query Layer",
              "Hibernate Query List",
              "Hibernate Quick Language",
            ],
            correct_option: 0,
            solution:
              "HQL stands for Hibernate Query Language, a query language similar to SQL for querying the database in Hibernate.",
          },
          {
            id: 15,
            title: "What is the default fetch type in Hibernate?",
            options: ["Lazy", "Eager", "Immediate", "None"],
            correct_option: 0,
            solution:
              "By default, Hibernate uses lazy loading, where data is fetched only when it is accessed.",
          },
          {
            id: 16,
            title:
              "Which of the following annotations is used to define a Hibernate entity class?",
            options: ["@Entity", "@Table", "@Model", "@MappedSuperclass"],
            correct_option: 0,
            solution: "@Entity is used to mark a class as a Hibernate entity.",
          },
          {
            id: 17,
            title:
              "Which of the following is not a module of the Spring Framework?",
            options: [
              "Spring AOP",
              "Spring MVC",
              "Spring JDBC",
              "Spring ORM",
              "Spring Hibernate",
            ],
            correct_option: 4,
            solution:
              "Spring does not have a specific module called Spring Hibernate, though Hibernate support is provided under Spring ORM.",
          },
          {
            id: 18,
            title:
              "Which of the following is a Spring MVC annotation for handling HTTP POST requests?",
            options: [
              "@GetMapping",
              "@PostMapping",
              "@RequestMapping",
              "@PathVariable",
            ],
            correct_option: 1,
            solution:
              "@PostMapping is used in Spring MVC to handle HTTP POST requests.",
          },
          {
            id: 19,
            title: "In Hibernate, what does the Session object do?",
            options: [
              "It manages the transaction",
              "It represents the connection to the database",
              "It caches objects",
              "It creates database tables",
            ],
            correct_option: 1,
            solution:
              "The Session object represents a single unit of work and is used for interacting with the database.",
          },
          {
            id: 20,
            title: "What is the main purpose of the Spring MVC controller?",
            options: [
              "To manage session data",
              "To process user input and return a response",
              "To render views",
              "To configure database connections",
            ],
            correct_option: 1,
            solution:
              "The controller in Spring MVC is responsible for processing user inputs and returning an appropriate response.",
          },
          {
            id: 21,
            title:
              "What is the main advantage of using Spring MVC over traditional web frameworks?",
            options: [
              "It uses XML exclusively",
              "It decouples view and controller components",
              "It supports only JSP as the view technology",
              "It relies on a custom servlet container",
            ],
            correct_option: 1,
            solution:
              "Spring MVC provides a clear separation of concerns, decoupling the view and controller components.",
          },
          {
            id: 22,
            title:
              "Which Spring MVC component is responsible for resolving views?",
            options: [
              "ViewResolver",
              "Controller",
              "Model",
              "DispatcherServlet",
            ],
            correct_option: 0,
            solution:
              "The ViewResolver is responsible for resolving views based on logical names.",
          },
          {
            id: 23,
            title: "In Hibernate, what does a transaction represent?",
            options: [
              "A session object",
              "A unit of work with the database",
              "A connection pool",
              "A database table",
            ],
            correct_option: 1,
            solution:
              "A transaction in Hibernate represents a unit of work that can involve multiple database operations.",
          },
          {
            id: 24,
            title:
              "Which of the following is true about Spring’s dependency injection?",
            options: [
              "It is mandatory to use annotations",
              "It allows components to be loosely coupled",
              "It requires manual configuration for each bean",
              "It only works in web applications",
            ],
            correct_option: 1,
            solution:
              "Spring's dependency injection allows for loosely coupled components, making the system easier to maintain.",
          },
          {
            id: 25,
            title: "Which of the following is not a feature of Spring MVC?",
            options: [
              "Supports multiple view technologies",
              "In-built exception handling",
              "Custom tag libraries",
              "Built-in support for Hibernate",
            ],
            correct_option: 3,
            solution:
              "While Spring MVC integrates well with Hibernate, it does not provide built-in support for it, but uses the Spring ORM module.",
          },
          {
            id: 26,
            title:
              "Which annotation is used to map a controller method to a URL in Spring MVC?",
            options: [
              "@RequestMapping",
              "@GetMapping",
              "@RequestParam",
              "@PathVariable",
            ],
            correct_option: 0,
            solution:
              "@RequestMapping is used to map a controller method to a specific URL in Spring MVC.",
          },
          {
            id: 27,
            title:
              "Which of the following is a valid way to configure Hibernate with Spring?",
            options: [
              "Using XML-based configuration only",
              "Using Java-based configuration",
              "Using Spring Boot only",
              "Both XML and Java-based configurations",
            ],
            correct_option: 3,
            solution:
              "Hibernate can be configured with Spring using both XML-based and Java-based configuration methods.",
          },
          {
            id: 28,
            title: "What does the Spring AOP module provide?",
            options: [
              "Aspect-Oriented Programming features",
              "Data access support",
              "Transaction management",
              "Security management",
            ],
            correct_option: 0,
            solution:
              "Spring AOP provides features for Aspect-Oriented Programming, allowing for separation of concerns like logging or transaction management.",
          },
          {
            id: 29,
            title: "In Hibernate, how is data persisted?",
            options: [
              "Using SessionFactory",
              "Using EntityManager",
              "Using JPA",
              "Using Session objects",
            ],
            correct_option: 3,
            solution:
              "In Hibernate, data is persisted using Session objects that manage the interaction with the database.",
          },
          {
            id: 30,
            title:
              "Which annotation is used to automatically inject a dependency in Spring?",
            options: ["@Inject", "@Autowired", "@Resource", "@Bean"],
            correct_option: 1,
            solution:
              "@Autowired is used in Spring to automatically inject a dependency into a bean.",
          },
          {
            id: 31,
            title:
              "Which type of database operations can Hibernate automatically generate for the developer?",
            options: [
              "Database schema creation",
              "Database connection pooling",
              "Transaction management",
              "Session management",
            ],
            correct_option: 0,
            solution:
              "Hibernate can automatically generate the database schema from the entity classes.",
          },
          {
            id: 32,
            title: "What does the Hibernate Query Language (HQL) allow?",
            options: [
              "Executing native SQL queries",
              "Creating complex database schemas",
              "Querying the database using Java objects",
              "Mapping Java classes to database tables",
            ],
            correct_option: 2,
            solution:
              "HQL allows developers to write queries using Java objects rather than database tables.",
          },
          {
            id: 33,
            title:
              "Which of the following is a characteristic of Hibernate’s second-level cache?",
            options: [
              "Stores all objects in memory",
              "Caches objects across sessions",
              "Only caches queries",
              "Caches data at the database level",
            ],
            correct_option: 1,
            solution:
              "Hibernate’s second-level cache stores data across sessions to improve performance.",
          },
          {
            id: 34,
            title:
              "In Spring MVC, how can a controller handle HTTP GET and POST methods?",
            options: [
              "Using @GetMapping and @PostMapping annotations",
              "Using @RequestMapping annotation",
              "By writing separate methods for each",
              "By using multiple DispatcherServlets",
            ],
            correct_option: 0,
            solution:
              "Spring MVC uses @GetMapping and @PostMapping to handle HTTP GET and POST requests respectively.",
          },
          {
            id: 35,
            title:
              "Which method in Hibernate is used to save an object into the database?",
            options: ["save()", "insert()", "persist()", "create()"],
            correct_option: 0,
            solution:
              "In Hibernate, the save() method is used to persist an object into the database.",
          },
          {
            id: 36,
            title:
              "Which of the following is the default behavior for Hibernate when fetching associations?",
            options: [
              "Eager fetching",
              "Lazy fetching",
              "Deferred fetching",
              "Batch fetching",
            ],
            correct_option: 1,
            solution:
              "By default, Hibernate uses lazy fetching for associations, meaning data is loaded only when accessed.",
          },
          {
            id: 37,
            title:
              "Which of the following technologies is integrated by default into Spring MVC?",
            options: ["JDBC", "JSP", "Hibernate", "JSF"],
            correct_option: 1,
            solution:
              "Spring MVC supports JSP (JavaServer Pages) as a default view technology.",
          },
          {
            id: 38,
            title:
              "In Hibernate, which annotation is used to specify the table associated with an entity class?",
            options: ["@Entity", "@Table", "@Column", "@MappedSuperclass"],
            correct_option: 1,
            solution:
              "@Table is used to specify the table in the database that is associated with a Hibernate entity.",
          },
          {
            id: 39,
            title: "What does the Spring ORM module do?",
            options: [
              "Integrates Java with relational databases",
              "Provides support for Object-Relational Mapping",
              "Supports Aspect-Oriented Programming",
              "None of the above",
            ],
            correct_option: 1,
            solution:
              "The Spring ORM module provides integration with ORM frameworks like Hibernate for object-relational mapping.",
          },
          {
            id: 40,
            title:
              "Which annotation is used to inject a dependency into a Spring component?",
            options: ["@Inject", "@Autowired", "@Resource", "@Bean"],
            correct_option: 1,
            solution:
              "@Autowired is used to inject a dependency into a Spring component.",
          },
        ],
      },
    ],
  },
  {
    subject_name: "Computer Graphics",
    key: "computer-graphics",
    units: [
      {
        id: 1,
        title: "Unit - 1: Introduction and Basic Drawing Algorithms",
        key: "introduction-to-basic-drawing-algorithms",
        all_mcqs: [
          {
            id: 1,
            title: "What is the primary function of computer graphics?",
            options: [
              "To enhance image resolution",
              "To create and manipulate visual content",
              "To store images",
              "To convert digital images into analog format",
            ],
            correct_option: 1,
            solution:
              "Computer graphics is primarily used to create and manipulate visual content such as images, animations, and graphical representations.",
          },
          {
            id: 2,
            title:
              "Which of the following is an application of computer graphics?",
            options: [
              "Scientific visualization",
              "Medical imaging",
              "Computer-aided design",
              "All of the above",
            ],
            correct_option: 3,
            solution:
              "Computer graphics have numerous applications in fields such as scientific visualization, medical imaging, and computer-aided design (CAD).",
          },
          {
            id: 3,
            title: "What type of system is a Raster-scan system?",
            options: [
              "Vector-based",
              "Pixel-based",
              "Geometry-based",
              "Analog-based",
            ],
            correct_option: 1,
            solution:
              "A Raster-scan system is a pixel-based display system, where the screen is refreshed line by line.",
          },
          {
            id: 4,
            title:
              "What is the main difference between raster-scan and random-scan systems?",
            options: [
              "Raster-scan systems use pixels while random-scan systems use lines",
              "Raster-scan systems are more efficient",
              "Random-scan systems use pixels while raster-scan systems use lines",
              "There is no difference",
            ],
            correct_option: 0,
            solution:
              "Raster-scan systems use pixels to display images, while random-scan systems use lines to draw images directly.",
          },
          {
            id: 5,
            title: "Which of the following is a basic graphic primitive?",
            options: ["Line", "Circle", "Rectangle", "All of the above"],
            correct_option: 3,
            solution:
              "Basic graphic primitives include lines, circles, rectangles, and other simple shapes used in graphics creation.",
          },
          {
            id: 6,
            title:
              "What is the main advantage of the DDA (Digital Differential Analyzer) algorithm?",
            options: [
              "It is more efficient than Bresenham's algorithm",
              "It produces smoother lines",
              "It is simple to implement",
              "It works better for circles",
            ],
            correct_option: 2,
            solution:
              "The DDA algorithm is simple and easy to implement for line drawing but less efficient than Bresenham’s algorithm.",
          },
          {
            id: 7,
            title:
              "What is the key advantage of Bresenham's line algorithm over DDA?",
            options: [
              "It uses floating-point arithmetic",
              "It uses integer arithmetic",
              "It produces smoother lines",
              "It requires fewer computations",
            ],
            correct_option: 1,
            solution:
              "Bresenham's line algorithm uses integer arithmetic, making it more efficient and faster than DDA which uses floating-point arithmetic.",
          },
          {
            id: 8,
            title:
              "In the DDA algorithm, what does the increment of the error term depend on?",
            options: [
              "The length of the line",
              "The slope of the line",
              "The resolution of the screen",
              "The color of the line",
            ],
            correct_option: 1,
            solution:
              "In the DDA algorithm, the error term is incremented based on the slope of the line to determine the next pixel.",
          },
          {
            id: 9,
            title:
              "What is the basic function of a circle-generating algorithm in computer graphics?",
            options: [
              "To calculate the area of a circle",
              "To determine pixel locations for drawing a circle",
              "To smooth the circle’s edges",
              "To create a filled circle",
            ],
            correct_option: 1,
            solution:
              "Circle-generating algorithms determine the pixel locations needed to approximate a circle on a raster grid.",
          },
          {
            id: 10,
            title: "What is the midpoint circle algorithm used for?",
            options: [
              "Drawing a straight line",
              "Generating a circle",
              "Drawing a curve",
              "Rendering 3D objects",
            ],
            correct_option: 1,
            solution:
              "The midpoint circle algorithm is used to efficiently generate a circle on a raster display by selecting appropriate pixels.",
          },
          {
            id: 11,
            title: "What is the key feature of Bresenham’s circle algorithm?",
            options: [
              "It uses integer operations only",
              "It uses floating-point arithmetic",
              "It generates smoother circles",
              "It works only on straight lines",
            ],
            correct_option: 0,
            solution:
              "Bresenham’s circle algorithm uses integer arithmetic, making it efficient and faster than alternatives using floating-point operations.",
          },
          {
            id: 12,
            title:
              "What is the main function of the midpoint ellipse algorithm?",
            options: [
              "To generate an ellipse",
              "To determine the center of an ellipse",
              "To scale an ellipse",
              "To rotate an ellipse",
            ],
            correct_option: 0,
            solution:
              "The midpoint ellipse algorithm is used to generate an ellipse by determining pixel locations that best approximate the shape.",
          },
          {
            id: 13,
            title:
              "What is a key advantage of the midpoint algorithms (circle and ellipse) over traditional methods?",
            options: [
              "They are computationally expensive",
              "They are faster due to integer-only calculations",
              "They provide a more precise result",
              "They work with random-scan systems only",
            ],
            correct_option: 1,
            solution:
              "The midpoint algorithms use integer-only calculations, making them faster and more efficient than traditional floating-point methods.",
          },
          {
            id: 14,
            title:
              "In the context of drawing algorithms, what does 'scan conversion' refer to?",
            options: [
              "Converting a vector-based object to raster format",
              "Drawing only on the raster scan lines",
              "Generating 3D objects",
              "The process of filling shapes with color",
            ],
            correct_option: 0,
            solution:
              "Scan conversion refers to the process of converting vector-based shapes into a raster format, where pixels are used to represent the shape.",
          },
          {
            id: 15,
            title:
              "Which of the following is a drawback of the DDA line-drawing algorithm?",
            options: [
              "It requires high computational resources",
              "It uses integer arithmetic",
              "It does not work with all screen resolutions",
              "It produces jagged lines due to rounding errors",
            ],
            correct_option: 3,
            solution:
              "The DDA algorithm can produce jagged lines due to rounding errors when incrementing the coordinates.",
          },
          {
            id: 16,
            title:
              "What type of algorithm is used for circle generation in computer graphics?",
            options: [
              "Bezier curve algorithm",
              "Midpoint algorithm",
              "Lagrange interpolation",
              "Spline curve algorithm",
            ],
            correct_option: 1,
            solution:
              "The midpoint algorithm is commonly used for circle generation in computer graphics due to its efficiency.",
          },
          {
            id: 17,
            title:
              "Which of the following algorithms is used for drawing lines in computer graphics?",
            options: [
              "DDA algorithm",
              "Bezier curve",
              "Cohen-Sutherland algorithm",
              "Flood fill algorithm",
            ],
            correct_option: 0,
            solution:
              "The DDA algorithm is a popular method used for drawing lines in computer graphics.",
          },
          {
            id: 18,
            title: "What type of graphical system uses the random-scan method?",
            options: [
              "CRT displays",
              "LCD screens",
              "Vector displays",
              "Raster displays",
            ],
            correct_option: 2,
            solution:
              "Random-scan systems are typically used in vector displays, which draw lines directly instead of refreshing pixels.",
          },
          {
            id: 19,
            title:
              "Which algorithm uses incremental error calculation to determine the next pixel in line drawing?",
            options: ["DDA", "Bresenham", "Midpoint circle", "Flood fill"],
            correct_option: 1,
            solution:
              "Bresenham’s line algorithm uses incremental error calculation to determine the next pixel in the line-drawing process.",
          },
          {
            id: 20,
            title:
              "What is the main advantage of using integer arithmetic in line-drawing algorithms like Bresenham's?",
            options: [
              "It produces smoother results",
              "It requires fewer computational resources",
              "It is more accurate",
              "It works only with certain displays",
            ],
            correct_option: 1,
            solution:
              "Using integer arithmetic, as in Bresenham's algorithm, reduces computational complexity and makes the algorithm more efficient.",
          },
          {
            id: 21,
            title:
              "What does the term 'aliasing' refer to in computer graphics?",
            options: [
              "A smoothing technique",
              "The process of creating 3D models",
              "Distortion in images caused by insufficient resolution",
              "The process of color blending",
            ],
            correct_option: 2,
            solution:
              "Aliasing refers to distortion or jaggedness in images caused by insufficient resolution when representing digital images.",
          },
          {
            id: 22,
            title:
              "Which of the following is the simplest line-drawing algorithm?",
            options: [
              "Bresenham's algorithm",
              "DDA algorithm",
              "Cohen-Sutherland algorithm",
              "Midpoint algorithm",
            ],
            correct_option: 1,
            solution:
              "The DDA (Digital Differential Analyzer) algorithm is simple and easy to implement for line drawing.",
          },
          {
            id: 23,
            title:
              "What is the primary challenge in ellipse generation algorithms?",
            options: [
              "Integer overflow",
              "Choosing the correct midpoint",
              "Handling both major and minor axes",
              "Determining pixel density",
            ],
            correct_option: 2,
            solution:
              "In ellipse generation, handling both the major and minor axes correctly is the primary challenge.",
          },
          {
            id: 24,
            title:
              "Which algorithm is used for determining the center of an ellipse in computer graphics?",
            options: [
              "Midpoint ellipse algorithm",
              "Bezier curve",
              "Flood fill algorithm",
              "Spline interpolation",
            ],
            correct_option: 0,
            solution:
              "The midpoint ellipse algorithm is used for determining the pixel locations for the ellipse and its center.",
          },
          {
            id: 25,
            title:
              "Which of the following algorithms is based on plotting points in each quadrant of the circle?",
            options: [
              "Midpoint circle algorithm",
              "Bresenham’s circle algorithm",
              "DDA algorithm",
              "Elliptical boundary algorithm",
            ],
            correct_option: 0,
            solution:
              "The midpoint circle algorithm plots points in each of the four quadrants of the circle to complete the shape.",
          },
          {
            id: 26,
            title:
              "Which of the following is a disadvantage of using the DDA algorithm?",
            options: [
              "It uses only integer values",
              "It requires floating-point arithmetic",
              "It works only on straight lines",
              "It cannot handle circles",
            ],
            correct_option: 1,
            solution:
              "The DDA algorithm requires floating-point arithmetic, making it less efficient than Bresenham's algorithm, which uses integers.",
          },
          {
            id: 27,
            title: "What does the 'step size' refer to in the DDA algorithm?",
            options: [
              "The distance between consecutive pixels",
              "The angle of the line",
              "The number of iterations",
              "The error correction factor",
            ],
            correct_option: 0,
            solution:
              "The step size in the DDA algorithm refers to the distance between consecutive pixels along the line.",
          },
          {
            id: 28,
            title:
              "Which of the following algorithms uses a decision parameter to determine the next pixel in the circle generation process?",
            options: [
              "Midpoint circle algorithm",
              "Bresenham's circle algorithm",
              "DDA algorithm",
              "Flood fill algorithm",
            ],
            correct_option: 0,
            solution:
              "The midpoint circle algorithm uses a decision parameter to decide the next pixel to plot while generating a circle.",
          },
          {
            id: 29,
            title:
              "What does the term 'rasterization' mean in computer graphics?",
            options: [
              "Converting vector graphics to raster format",
              "Creating 3D models",
              "Applying textures to models",
              "Determining lighting effects on 3D objects",
            ],
            correct_option: 0,
            solution:
              "Rasterization refers to the process of converting vector-based graphics into a raster format for display on pixel-based screens.",
          },
          {
            id: 30,
            title:
              "In the context of Bresenham’s line algorithm, what does the error term represent?",
            options: [
              "The difference between the desired and actual pixel positions",
              "The time it takes to plot each pixel",
              "The accuracy of the line",
              "The number of steps in the algorithm",
            ],
            correct_option: 0,
            solution:
              "The error term in Bresenham’s line algorithm represents the difference between the desired and actual pixel positions.",
          },
        ],
      },
      {
        id: 2,
        title:
          "Unit - 2: Region Filling Algorithms and Two-Dimensional Geometric Transformations",
        key: "region-filling-algorithms-and-two-dimensional-geometric-transformations",
        all_mcqs: [
          {
            id: 1,
            title:
              "What is the main purpose of region filling algorithms in computer graphics?",
            options: [
              "To create 3D models",
              "To fill enclosed areas with color or patterns",
              "To rotate objects",
              "To apply textures to surfaces",
            ],
            correct_option: 1,
            solution:
              "Region filling algorithms are used to fill enclosed areas with color or patterns, such as filling a polygon or an object.",
          },
          {
            id: 2,
            title:
              "Which of the following is an attribute of output primitives in computer graphics?",
            options: [
              "Line style",
              "Colour and intensity",
              "Area",
              "All of the above",
            ],
            correct_option: 3,
            solution:
              "Attributes of output primitives include line style, colour and intensity, and area, all of which help define the appearance of graphical objects.",
          },
          {
            id: 3,
            title:
              "What is the primary function of the scan line filling algorithm?",
            options: [
              "To fill a polygon from its center",
              "To fill a polygon by scanning one line at a time",
              "To apply textures to polygons",
              "To outline the edges of polygons",
            ],
            correct_option: 1,
            solution:
              "The scan line algorithm fills a polygon by scanning one horizontal line at a time and determining which pixels are inside the polygon.",
          },
          {
            id: 4,
            title:
              "Which algorithm is used to fill a region by tracing its boundary and then filling the inside?",
            options: [
              "Flood fill algorithm",
              "Boundary fill algorithm",
              "Scan line algorithm",
              "Seed fill algorithm",
            ],
            correct_option: 1,
            solution:
              "The boundary fill algorithm works by tracing the boundary of the region and then filling the interior pixels.",
          },
          {
            id: 5,
            title: "What is the primary function of the flood fill algorithm?",
            options: [
              "To fill a region by expanding from a starting point",
              "To detect edges of polygons",
              "To rotate a geometric object",
              "To scale objects uniformly",
            ],
            correct_option: 0,
            solution:
              "The flood fill algorithm starts from a given point and fills the connected region with a specified color or pattern.",
          },
          {
            id: 6,
            title:
              "Which of the following is a key feature of antialiasing in computer graphics?",
            options: [
              "It increases the pixel density of an image",
              "It smooths jagged edges to reduce visual distortions",
              "It improves the color intensity of objects",
              "It creates a 3D effect for flat images",
            ],
            correct_option: 1,
            solution:
              "Antialiasing is a technique used to smooth jagged edges (aliasing) in rasterized images, creating a more visually appealing result.",
          },
          {
            id: 7,
            title:
              "What does the translation transformation do in 2D graphics?",
            options: [
              "Scales an object",
              "Rotates an object",
              "Moves an object to a new position",
              "Reflects an object across an axis",
            ],
            correct_option: 2,
            solution:
              "Translation moves an object from one location to another by changing its position along the x and y axes without altering its shape.",
          },
          {
            id: 8,
            title:
              "Which of the following transformations alters the size of an object?",
            options: ["Scaling", "Rotation", "Reflection", "Shearing"],
            correct_option: 0,
            solution:
              "Scaling alters the size of an object by uniformly increasing or decreasing its dimensions along one or both axes.",
          },
          {
            id: 9,
            title:
              "What is the effect of a reflection transformation in 2D graphics?",
            options: [
              "It changes the shape of the object",
              "It rotates the object",
              "It mirrors the object across a line",
              "It distorts the object",
            ],
            correct_option: 2,
            solution:
              "Reflection in 2D graphics mirrors an object across a specific axis or line, creating a mirrored copy of the original object.",
          },
          {
            id: 10,
            title:
              "Which transformation is used to distort the shape of an object by shifting its points in a non-uniform manner?",
            options: ["Shearing", "Scaling", "Translation", "Reflection"],
            correct_option: 0,
            solution:
              "Shearing is a transformation that distorts an object by shifting its points in a non-uniform manner, often along one axis.",
          },
          {
            id: 11,
            title: "What is a composite transformation in 2D graphics?",
            options: [
              "A combination of multiple transformations applied sequentially",
              "A transformation applied to the background only",
              "A transformation that combines rotation and scaling",
              "None of the above",
            ],
            correct_option: 0,
            solution:
              "A composite transformation combines multiple basic transformations (such as translation, scaling, and rotation) applied sequentially to an object.",
          },
          {
            id: 12,
            title:
              "What is the primary goal of character generation in 2D graphics?",
            options: [
              "To display text or symbols",
              "To animate characters in games",
              "To simulate real-world objects",
              "To create complex 3D models",
            ],
            correct_option: 0,
            solution:
              "Character generation is used to display text or symbols on a screen by converting character codes into pixel patterns.",
          },
          {
            id: 13,
            title: "Which of the following is NOT a type of 2D transformation?",
            options: ["Rotation", "Translation", "Reflection", "Scaling"],
            correct_option: 3,
            solution:
              "Scaling is a 2D transformation, while other transformations like translation, reflection, and rotation also belong to the category of 2D transformations.",
          },
          {
            id: 14,
            title:
              "Which of the following algorithms is used for boundary fill in computer graphics?",
            options: [
              "Flood fill algorithm",
              "Seed fill algorithm",
              "Boundary fill algorithm",
              "Line-drawing algorithm",
            ],
            correct_option: 2,
            solution:
              "The boundary fill algorithm is used to fill a region by tracing its boundary and filling the enclosed area.",
          },
          {
            id: 15,
            title: "In which situation would you use the flood fill algorithm?",
            options: [
              "When filling the area inside a closed boundary",
              "When drawing a line",
              "When rotating an object",
              "When scaling an object",
            ],
            correct_option: 0,
            solution:
              "Flood fill is used to fill the area inside a closed boundary, starting from a point inside the region.",
          },
          {
            id: 16,
            title: "What does the scaling transformation do?",
            options: [
              "Moves an object",
              "Changes the object's size",
              "Reflects the object",
              "Rotates the object",
            ],
            correct_option: 1,
            solution:
              "Scaling changes the size of an object, either enlarging or reducing it, based on a scaling factor.",
          },
          {
            id: 17,
            title:
              "Which of the following transformations would mirror an object across the y-axis?",
            options: ["Translation", "Rotation", "Reflection", "Scaling"],
            correct_option: 2,
            solution:
              "Reflection can mirror an object across a specified axis, such as the y-axis, creating a mirrored copy of the object.",
          },
          {
            id: 18,
            title:
              "What is the key difference between boundary fill and flood fill algorithms?",
            options: [
              "Boundary fill uses color boundaries, while flood fill expands from a point",
              "Flood fill traces boundaries, while boundary fill expands from a point",
              "There is no difference",
              "Boundary fill is used for circles, and flood fill is used for polygons",
            ],
            correct_option: 0,
            solution:
              "Boundary fill works by tracing the boundary of the region and filling inside, whereas flood fill expands from a given point to fill the region.",
          },
          {
            id: 19,
            title:
              "Which transformation can be used to change the size of an object by a constant factor in both axes?",
            options: ["Scaling", "Translation", "Rotation", "Shearing"],
            correct_option: 0,
            solution:
              "Scaling is the transformation used to change the size of an object by a constant factor along both axes.",
          },
          {
            id: 20,
            title: "What does a shear transformation do in computer graphics?",
            options: [
              "It rotates an object",
              "It scales an object",
              "It distorts an object by shifting its vertices",
              "It reflects an object",
            ],
            correct_option: 2,
            solution:
              "Shearing distorts an object by shifting its vertices in a non-uniform way, creating a slanting effect.",
          },
          {
            id: 21,
            title:
              "Which of the following is used to change the size of an object uniformly in all directions?",
            options: ["Scaling", "Shearing", "Rotation", "Translation"],
            correct_option: 0,
            solution:
              "Scaling uniformly changes the size of an object in all directions, keeping its shape intact.",
          },
          {
            id: 22,
            title:
              "Which of the following transformations is used to move an object from one location to another?",
            options: ["Translation", "Scaling", "Rotation", "Reflection"],
            correct_option: 0,
            solution:
              "Translation is used to move an object from one location to another without changing its shape or size.",
          },
          {
            id: 23,
            title:
              "In the boundary fill algorithm, what is used to identify the boundary?",
            options: [
              "A specific color",
              "A specific pattern",
              "A specific pixel density",
              "A specific point inside the boundary",
            ],
            correct_option: 0,
            solution:
              "In the boundary fill algorithm, a specific color is used to identify and trace the boundary of the region.",
          },
          {
            id: 24,
            title:
              "Which of the following is NOT a component of composite transformations?",
            options: ["Translation", "Scaling", "Rotation", "Color blending"],
            correct_option: 3,
            solution:
              "Composite transformations combine multiple transformations like translation, scaling, and rotation. Color blending is not part of composite transformations.",
          },
          {
            id: 25,
            title:
              "What does the term 'shear factor' refer to in shearing transformations?",
            options: [
              "The ratio of size change",
              "The amount of distortion applied to the object",
              "The speed of the transformation",
              "The direction of translation",
            ],
            correct_option: 1,
            solution:
              "The shear factor in shearing transformations determines the amount of distortion or shift applied to the object's vertices.",
          },
          {
            id: 26,
            title:
              "Which of the following transformations can be combined to create a composite transformation?",
            options: [
              "Translation and scaling",
              "Reflection and rotation",
              "Translation, scaling, and rotation",
              "All of the above",
            ],
            correct_option: 3,
            solution:
              "Composite transformations involve combining multiple transformations such as translation, scaling, and rotation.",
          },
          {
            id: 27,
            title:
              "What is the effect of rotating an object by 90 degrees in a clockwise direction?",
            options: [
              "The object is flipped horizontally",
              "The object is flipped vertically",
              "The object’s orientation changes by 90 degrees",
              "The object’s size changes",
            ],
            correct_option: 2,
            solution:
              "Rotation by 90 degrees clockwise changes the orientation of the object by 90 degrees without changing its size.",
          },
          {
            id: 28,
            title:
              "Which of the following statements about reflection transformations is true?",
            options: [
              "Reflection changes the object's position without changing its shape",
              "Reflection flips the object across a line",
              "Reflection enlarges the object",
              "Reflection distorts the object",
            ],
            correct_option: 1,
            solution:
              "Reflection flips the object across a specified line, creating a mirrored copy of the original object.",
          },
          {
            id: 29,
            title:
              "What transformation is typically used to resize an object in a non-uniform manner?",
            options: ["Scaling", "Shearing", "Rotation", "Translation"],
            correct_option: 1,
            solution:
              "Shearing can resize an object in a non-uniform manner by shifting its vertices along one axis.",
          },
          {
            id: 30,
            title:
              "Which of the following transformations is used to reduce the size of an object?",
            options: ["Scaling", "Shearing", "Translation", "Reflection"],
            correct_option: 0,
            solution:
              "Scaling can be used to reduce the size of an object by applying a scaling factor less than 1.",
          },
        ],
      },
      {
        id: 3,
        title: "Unit - 3: Viewing and Clipping",
        key: "viewing-and-clipping",
        all_mcqs: [
          {
            id: 1,
            title: "What is the purpose of clipping in computer graphics?",
            options: [
              "To create 3D models",
              "To restrict objects to the visible region of the screen",
              "To change the color of an object",
              "To apply texture mapping",
            ],
            correct_option: 1,
            solution:
              "Clipping is used to restrict objects to the visible region of the screen, ensuring that only parts of objects within the viewport are displayed.",
          },
          {
            id: 2,
            title:
              "What does the term 'window' refer to in the context of window-viewport transformation?",
            options: [
              "The region of the object in screen space",
              "The visible region of the world coordinates",
              "The region of the viewport on the screen",
              "None of the above",
            ],
            correct_option: 1,
            solution:
              "The 'window' refers to the region in world coordinates that needs to be mapped to the viewport in screen coordinates.",
          },
          {
            id: 3,
            title: "What is the purpose of viewport in computer graphics?",
            options: [
              "To define the region of the world coordinates",
              "To define the region of the screen where the window is displayed",
              "To apply lighting effects",
              "To store image data",
            ],
            correct_option: 1,
            solution:
              "The viewport is the region on the screen where the window's contents are displayed.",
          },
          {
            id: 4,
            title:
              "What is the Window-to-Viewport transformation in computer graphics?",
            options: [
              "A method for clipping objects",
              "A technique to map world coordinates to screen coordinates",
              "A way to rotate an object",
              "A transformation to change an object’s size",
            ],
            correct_option: 1,
            solution:
              "Window-to-Viewport transformation is a technique that maps the coordinates from a window in world space to the corresponding coordinates in viewport (screen) space.",
          },
          {
            id: 5,
            title:
              "Which of the following is the main idea behind the Cohen-Sutherland line clipping algorithm?",
            options: [
              "To divide the window into regions and test the line against them",
              "To draw the line incrementally",
              "To project the line into a 3D space",
              "To compute the intersection of the line with the window edges",
            ],
            correct_option: 0,
            solution:
              "The Cohen-Sutherland algorithm divides the window into regions and tests whether a line is inside, outside, or intersects the window boundaries.",
          },
          {
            id: 6,
            title:
              "In the Cohen-Sutherland line clipping algorithm, what does the outcode represent?",
            options: [
              "The intersection of the line with the window",
              "The region of the line outside the window",
              "The color of the clipped line",
              "The size of the line segment within the window",
            ],
            correct_option: 1,
            solution:
              "The outcode in the Cohen-Sutherland algorithm represents the region of the line that is outside the window, helping determine clipping.",
          },
          {
            id: 7,
            title:
              "Which of the following is a key feature of the Sutherland-Hodgman polygon clipping algorithm?",
            options: [
              "It clips polygons to the window by iteratively clipping each edge",
              "It only works with triangles",
              "It clips 3D objects in the viewport",
              "It uses line clipping algorithms to clip polygons",
            ],
            correct_option: 0,
            solution:
              "The Sutherland-Hodgman algorithm clips polygons to the window by iteratively clipping each edge of the polygon with the window boundaries.",
          },
          {
            id: 8,
            title: "What is the normalized view volume in 3D clipping?",
            options: [
              "The region where objects are mapped to in screen coordinates",
              "The volume where objects can be clipped and transformed in 3D space",
              "The region where objects are rotated",
              "The part of the scene where textures are applied",
            ],
            correct_option: 1,
            solution:
              "The normalized view volume is the region in 3D space that is mapped to a standard 3D coordinate system before the final clipping is done.",
          },
          {
            id: 9,
            title:
              "What is the purpose of viewport clipping in computer graphics?",
            options: [
              "To remove unnecessary objects outside the viewport",
              "To adjust colors of objects",
              "To convert world coordinates into screen coordinates",
              "To apply lighting effects to objects",
            ],
            correct_option: 0,
            solution:
              "Viewport clipping removes or trims the parts of objects that fall outside the viewport, ensuring only visible parts are displayed.",
          },
          {
            id: 10,
            title: "Which of the following describes homogeneous coordinates?",
            options: [
              "A method to simplify 3D transformations",
              "A technique for transforming 2D objects",
              "A coordinate system used to avoid division by zero",
              "A system for representing color values in graphics",
            ],
            correct_option: 2,
            solution:
              "Homogeneous coordinates extend the standard Cartesian coordinate system by introducing an extra dimension to avoid issues such as division by zero in transformations.",
          },
          {
            id: 11,
            title: "What is the key difference between 2D and 3D clipping?",
            options: [
              "3D clipping involves clipping objects against a 3D view volume",
              "2D clipping only works with polygons",
              "3D clipping does not require transformation",
              "There is no difference",
            ],
            correct_option: 0,
            solution:
              "In 3D clipping, objects are clipped against a 3D view volume, while 2D clipping works within a 2D window or viewport.",
          },
          {
            id: 12,
            title:
              "Which of the following is true about the Sutherland-Hodgman algorithm for polygon clipping?",
            options: [
              "It works on convex polygons only",
              "It clips polygons by clipping each vertex",
              "It clips the polygon by iteratively processing edges",
              "It only handles convex shapes",
            ],
            correct_option: 2,
            solution:
              "The Sutherland-Hodgman algorithm works by iteratively processing the edges of a polygon and clipping them against the window boundaries.",
          },
          {
            id: 13,
            title:
              "In the Cohen-Sutherland algorithm, what happens if the outcode of both endpoints of a line is zero?",
            options: [
              "The line is completely inside the window",
              "The line must be clipped",
              "The line is completely outside the window",
              "The line is not clipped",
            ],
            correct_option: 0,
            solution:
              "If the outcode of both endpoints is zero, it means the line is completely inside the window and does not need to be clipped.",
          },
          {
            id: 14,
            title:
              "Which of the following is a disadvantage of the Cohen-Sutherland line clipping algorithm?",
            options: [
              "It cannot handle clipping of polygons",
              "It can produce incorrect results with non-convex polygons",
              "It uses a complex outcode system",
              "It requires too much computational power for simple lines",
            ],
            correct_option: 1,
            solution:
              "The Cohen-Sutherland algorithm can sometimes produce incorrect results when clipping non-convex polygons, as it works best with convex regions.",
          },
          {
            id: 15,
            title:
              "What is the primary advantage of homogeneous coordinates in clipping algorithms?",
            options: [
              "They simplify transformations",
              "They can represent a 3D point with fewer dimensions",
              "They prevent overflows in computational operations",
              "They allow for simple clipping without checking conditions",
            ],
            correct_option: 0,
            solution:
              "Homogeneous coordinates simplify geometric transformations and allow easy implementation of clipping algorithms in computer graphics.",
          },
          {
            id: 16,
            title:
              "What does the term 'viewing coordinates' refer to in computer graphics?",
            options: [
              "Coordinates used to define the position of objects",
              "Coordinates used to display an object in the viewport",
              "Coordinates used to map the object’s view to a window",
              "Coordinates used to define the location of the observer's view",
            ],
            correct_option: 3,
            solution:
              "Viewing coordinates define the position and orientation of the observer in the world space, helping to map objects to the screen's view.",
          },
          {
            id: 17,
            title:
              "Which of the following best describes the purpose of the clipping operation?",
            options: [
              "To remove unnecessary background pixels",
              "To trim parts of objects that fall outside the viewable region",
              "To render the image in grayscale",
              "To add texture to objects",
            ],
            correct_option: 1,
            solution:
              "Clipping is used to remove parts of objects that are outside the viewable region, ensuring only the visible portion is displayed.",
          },
          {
            id: 18,
            title:
              "Which of the following is an example of a 3D clipping technique?",
            options: [
              "Sutherland-Hodgman",
              "Cohen-Sutherland",
              "Culling",
              "Homogeneous clipping",
            ],
            correct_option: 2,
            solution:
              "Culling is a 3D clipping technique that removes objects or parts of objects that are not visible in the camera's view, based on their orientation or position.",
          },
          {
            id: 19,
            title:
              "Which of the following describes a key benefit of viewport clipping?",
            options: [
              "It removes invisible objects outside the viewport",
              "It scales objects to fit within the screen",
              "It rotates objects",
              "It allows for better texture mapping",
            ],
            correct_option: 0,
            solution:
              "Viewport clipping ensures that only the parts of objects within the visible viewport are displayed, effectively trimming unnecessary portions.",
          },
          {
            id: 20,
            title:
              "Which algorithm is used to clip a polygon against a rectangular window?",
            options: [
              "Cohen-Sutherland",
              "Sutherland-Hodgman",
              "Liang-Barsky",
              "Weiler-Atherton",
            ],
            correct_option: 1,
            solution:
              "The Sutherland-Hodgman algorithm is used to clip polygons against a rectangular window by processing each polygon edge iteratively.",
          },
        ],
      },
      {
        id: 4,
        title: "Unit - 4: Illumination Model",
        key: "illumination-model",
        all_mcqs: [
          {
            id: 1,
            title:
              "Which of the following is the correct definition of diffuse reflection?",
            options: [
              "Reflection of light from a smooth surface",
              "Reflection of light from a rough surface",
              "Refraction of light through a surface",
              "Scattering of light in all directions",
            ],
            correct_option: 1,
            solution:
              "Diffuse reflection occurs when light strikes a rough surface, scattering light in multiple directions.",
          },
          {
            id: 2,
            title:
              "What is the primary purpose of an illumination model in computer graphics?",
            options: [
              "To simulate light and shadows",
              "To define the texture of an object",
              "To calculate the vertices of 3D models",
              "To create realistic color palettes",
            ],
            correct_option: 0,
            solution:
              "An illumination model simulates how light interacts with surfaces to create realistic lighting and shadow effects in 3D graphics.",
          },
          {
            id: 3,
            title:
              "Which of the following is a colour model used in television broadcasting?",
            options: ["RGB", "YIQ", "CMY", "HSV"],
            correct_option: 1,
            solution:
              "The YIQ colour model is used in television broadcasting to represent colour information in a way that is compatible with the human visual system.",
          },
          {
            id: 4,
            title: "In the RGB colour model, what does 'RGB' stand for?",
            options: [
              "Red, Green, Blue",
              "Red, Green, Black",
              "Rough, Green, Blue",
              "Reflection, Green, Black",
            ],
            correct_option: 0,
            solution:
              "RGB stands for Red, Green, and Blue, which are the primary colours used in the RGB colour model to create all other colours by mixing them in various proportions.",
          },
          {
            id: 5,
            title:
              "Which of the following colour models is used for print media?",
            options: ["RGB", "YIQ", "CMY", "HSV"],
            correct_option: 2,
            solution:
              "The CMY colour model, which uses cyan, magenta, and yellow as the primary colours, is widely used in print media for colour reproduction.",
          },
          {
            id: 6,
            title: "What does the 'V' in the HSV colour model represent?",
            options: ["Value", "Volume", "Vibrance", "Violet"],
            correct_option: 0,
            solution:
              "In the HSV colour model, 'V' stands for Value, which represents the brightness or intensity of the colour.",
          },
          {
            id: 7,
            title:
              "Which of the following 3D transformations is used to resize an object?",
            options: ["Translation", "Rotation", "Scaling", "Shearing"],
            correct_option: 2,
            solution:
              "Scaling is the 3D transformation used to resize an object by changing its size along one or more axes.",
          },
          {
            id: 8,
            title:
              "What is the main goal of composite transformation in 3D graphics?",
            options: [
              "To apply a sequence of transformations",
              "To change the texture of the object",
              "To simplify the object’s shape",
              "To rotate the object around an axis",
            ],
            correct_option: 0,
            solution:
              "Composite transformation combines multiple transformations (like translation, scaling, and rotation) into a single transformation to apply to an object.",
          },
          {
            id: 9,
            title:
              "Which of the following 3D transformations allows an object to be moved from one position to another?",
            options: ["Translation", "Scaling", "Rotation", "Reflection"],
            correct_option: 0,
            solution:
              "Translation is used to move an object from one position to another in the 3D space without altering its shape or orientation.",
          },
          {
            id: 10,
            title:
              "Which transformation is used to rotate an object around an arbitrary axis in 3D graphics?",
            options: [
              "Scaling",
              "Rotation about arbitrary axis",
              "Translation",
              "Shearing",
            ],
            correct_option: 1,
            solution:
              "Rotation about an arbitrary axis allows an object to be rotated around any given axis in 3D space.",
          },
          {
            id: 11,
            title:
              "What is the purpose of a parallel projection in 3D graphics?",
            options: [
              "To simulate realistic depth perception",
              "To map objects onto a 2D plane without distortion",
              "To remove hidden surfaces",
              "To enhance lighting effects",
            ],
            correct_option: 1,
            solution:
              "Parallel projection maps objects onto a 2D plane without perspective distortion, often used in technical drawings and architectural diagrams.",
          },
          {
            id: 12,
            title:
              "In which type of projection does the distance between the viewer and the object affect the size of the object?",
            options: [
              "Parallel projection",
              "Perspective projection",
              "Orthographic projection",
              "Isometric projection",
            ],
            correct_option: 1,
            solution:
              "In perspective projection, the size of the object decreases as it gets farther from the viewer, creating a sense of depth.",
          },
          {
            id: 13,
            title: "What is hidden surface removal in 3D rendering?",
            options: [
              "A method for removing surfaces not visible to the viewer",
              "A technique for simulating light reflections",
              "A method for calculating the color of an object",
              "A process for rotating objects in space",
            ],
            correct_option: 0,
            solution:
              "Hidden surface removal is a technique used to eliminate surfaces of objects that are not visible from the current viewpoint.",
          },
          {
            id: 14,
            title:
              "Which of the following methods is commonly used for hidden surface removal?",
            options: [
              "Depth buffer method",
              "Cohen-Sutherland",
              "Z-buffer method",
              "Midpoint circle algorithm",
            ],
            correct_option: 2,
            solution:
              "The Z-buffer method (or depth buffer) is a commonly used technique for hidden surface removal, where depth information is stored for each pixel.",
          },
          {
            id: 15,
            title: "What is back-face removal in 3D rendering?",
            options: [
              "A technique to remove hidden or non-visible parts of an object",
              "A method to remove the back of an object that faces away from the viewer",
              "A process to rotate an object in 3D",
              "A technique to enhance the object's texture",
            ],
            correct_option: 1,
            solution:
              "Back-face removal eliminates surfaces of an object that are facing away from the viewer, improving performance by not rendering these invisible surfaces.",
          },
          {
            id: 16,
            title:
              "Which of the following is true about perspective projection?",
            options: [
              "Objects appear smaller as they move farther from the viewer",
              "Objects appear larger as they move farther from the viewer",
              "Objects are projected using parallel lines",
              "All objects are the same size regardless of distance",
            ],
            correct_option: 0,
            solution:
              "In perspective projection, objects appear smaller as they move farther from the viewer, mimicking real-world depth perception.",
          },
          {
            id: 17,
            title:
              "Which of the following is the main feature of the depth buffer method?",
            options: [
              "It stores color information for each pixel",
              "It stores depth information for each pixel",
              "It removes the need for 3D transformations",
              "It adds texture to objects",
            ],
            correct_option: 1,
            solution:
              "The depth buffer method stores depth information for each pixel, which helps in removing hidden surfaces by comparing the depth values of different objects.",
          },
          {
            id: 18,
            title:
              "What is the main advantage of using perspective projection over parallel projection?",
            options: [
              "It provides a realistic representation of depth",
              "It avoids distortion in object sizes",
              "It simplifies calculations for distant objects",
              "It makes objects appear uniformly sized",
            ],
            correct_option: 0,
            solution:
              "Perspective projection creates a realistic representation of depth by making distant objects appear smaller than those close to the viewer.",
          },
          {
            id: 19,
            title:
              "Which of the following methods is used to remove hidden lines in 3D rendering?",
            options: [
              "Depth buffer method",
              "Scan-line method",
              "Back-face culling",
              "Hidden-line removal",
            ],
            correct_option: 3,
            solution:
              "Hidden-line removal techniques are used to remove lines that represent parts of an object not visible from a specific viewpoint.",
          },
          {
            id: 20,
            title:
              "Which of the following is NOT a commonly used projection technique?",
            options: [
              "Perspective projection",
              "Parallel projection",
              "Frustum projection",
              "Conical projection",
            ],
            correct_option: 3,
            solution:
              "Conical projection is not commonly used in 3D graphics, while perspective and parallel projections are widely used.",
          },
          {
            id: 21,
            title:
              "What is the main function of the depth buffer in hidden surface removal?",
            options: [
              "To store color values for each pixel",
              "To store depth values for each pixel",
              "To remove textures from the scene",
              "To calculate lighting effects",
            ],
            correct_option: 1,
            solution:
              "The depth buffer stores depth values for each pixel to determine which surfaces are visible and which are hidden behind other objects.",
          },
          {
            id: 22,
            title: "In 3D graphics, what does a back face refer to?",
            options: [
              "The part of the object facing towards the camera",
              "The part of the object facing away from the camera",
              "The surface with the highest depth value",
              "The surface closest to the camera",
            ],
            correct_option: 1,
            solution:
              "A back face refers to the part of the object that is facing away from the camera, often removed in back-face culling to optimize rendering.",
          },
          {
            id: 23,
            title: "What does the 'R' in the RGB colour model stand for?",
            options: ["Red", "Reflection", "Resolution", "Rotation"],
            correct_option: 0,
            solution:
              "In the RGB colour model, 'R' stands for Red, which is one of the three primary colours used to create a wide range of colours.",
          },
          {
            id: 24,
            title:
              "Which of the following statements is true about the YIQ colour model?",
            options: [
              "It is based on the human visual system",
              "It uses RGB for representing colour",
              "It is designed for digital images",
              "It is primarily used for print media",
            ],
            correct_option: 0,
            solution:
              "The YIQ colour model is based on the human visual system, where 'Y' represents brightness, and 'I' and 'Q' represent chrominance.",
          },
          {
            id: 25,
            title:
              "Which 3D transformation involves rotating an object around its own axis?",
            options: ["Scaling", "Translation", "Rotation", "Shearing"],
            correct_option: 2,
            solution:
              "Rotation is the 3D transformation that involves rotating an object around a specified axis or its own axis.",
          },
          {
            id: 26,
            title:
              "Which of the following 3D transformations changes the size of an object along one or more axes?",
            options: ["Translation", "Scaling", "Rotation", "Shearing"],
            correct_option: 1,
            solution:
              "Scaling changes the size of an object along one or more axes, either enlarging or shrinking it.",
          },
          {
            id: 27,
            title:
              "Which of the following colour models is primarily used in computer displays?",
            options: ["RGB", "CMY", "HSV", "YIQ"],
            correct_option: 0,
            solution:
              "The RGB colour model is primarily used in computer displays, where the primary colours are Red, Green, and Blue.",
          },
          {
            id: 28,
            title:
              "Which of the following projection methods does not cause distortion?",
            options: [
              "Perspective projection",
              "Parallel projection",
              "Orthographic projection",
              "Oblique projection",
            ],
            correct_option: 1,
            solution:
              "Parallel projection does not cause distortion, as it maintains the size and shape of objects regardless of distance from the viewer.",
          },
          {
            id: 29,
            title:
              "Which of the following is true about perspective projection?",
            options: [
              "It produces realistic depth perception",
              "It uses parallel lines for projection",
              "It maps objects to a fixed plane",
              "It does not account for vanishing points",
            ],
            correct_option: 0,
            solution:
              "Perspective projection produces realistic depth perception by making distant objects appear smaller, mimicking how the human eye perceives distance.",
          },
          {
            id: 30,
            title:
              "What is the role of the 'Sutherland-Hodgman algorithm' in 3D graphics?",
            options: [
              "It is used for hidden surface removal",
              "It is used for clipping polygons",
              "It is used for texture mapping",
              "It is used for depth calculations",
            ],
            correct_option: 1,
            solution:
              "The Sutherland-Hodgman algorithm is a polygon clipping algorithm used to clip polygons against a rectangular clipping window.",
          },
          {
            id: 31,
            title:
              "Which of the following colour models uses the components Hue, Saturation, and Value?",
            options: ["RGB", "CMYK", "HSV", "YUV"],
            correct_option: 2,
            solution:
              "The HSV colour model uses Hue, Saturation, and Value to describe colours in a way that is closer to human perception of colour.",
          },
          {
            id: 32,
            title:
              "Which of the following is NOT a characteristic of the RGB colour model?",
            options: [
              "It is additive",
              "It uses red, green, and blue as primary colours",
              "It is used for printing",
              "It is used for digital displays",
            ],
            correct_option: 2,
            solution:
              "The RGB colour model is an additive colour model used for digital displays, but it is not used for printing (which typically uses the CMYK model).",
          },
          {
            id: 33,
            title:
              "Which of the following projection types is used to simulate the effect of perspective?",
            options: [
              "Orthographic projection",
              "Perspective projection",
              "Parallel projection",
              "Isometric projection",
            ],
            correct_option: 1,
            solution:
              "Perspective projection simulates the effect of perspective, making objects appear smaller as they get farther from the viewer.",
          },
          {
            id: 34,
            title:
              "Which of the following is the primary characteristic of parallel projection?",
            options: [
              "Objects appear smaller with distance",
              "Objects remain the same size regardless of distance",
              "Objects are distorted by perspective",
              "Objects are shown with depth effects",
            ],
            correct_option: 1,
            solution:
              "In parallel projection, objects remain the same size regardless of their distance from the viewer, and there is no perspective distortion.",
          },
          {
            id: 35,
            title:
              "What is the main advantage of using a depth buffer for hidden surface removal?",
            options: [
              "It stores depth values for each pixel",
              "It removes textures from 3D objects",
              "It enhances lighting effects",
              "It reduces rendering time",
            ],
            correct_option: 0,
            solution:
              "A depth buffer stores depth values for each pixel, allowing the renderer to discard hidden surfaces by comparing depth information.",
          },
          {
            id: 36,
            title:
              "Which of the following algorithms is used for line clipping in 2D graphics?",
            options: [
              "Bresenham's algorithm",
              "Cohen-Sutherland algorithm",
              "Flood fill algorithm",
              "Scan line algorithm",
            ],
            correct_option: 1,
            solution:
              "The Cohen-Sutherland algorithm is a popular method used for line clipping in 2D graphics, determining which parts of a line are inside a rectangular clipping window.",
          },
          {
            id: 37,
            title: "What does the Z-buffer method store for each pixel?",
            options: [
              "Depth value",
              "Color value",
              "Texture value",
              "Brightness value",
            ],
            correct_option: 0,
            solution:
              "The Z-buffer method stores depth values for each pixel, helping to determine which surfaces are visible and which are hidden.",
          },
          {
            id: 38,
            title:
              "Which of the following 3D transformations is used to change the orientation of an object?",
            options: ["Translation", "Scaling", "Rotation", "Reflection"],
            correct_option: 2,
            solution:
              "Rotation is the transformation used to change the orientation of an object, often around a specific axis.",
          },
          {
            id: 39,
            title:
              "What is the main difference between parallel and perspective projection?",
            options: [
              "Parallel projection produces realistic depth",
              "Perspective projection uses parallel lines",
              "Parallel projection does not distort objects",
              "Perspective projection produces no distortion",
            ],
            correct_option: 2,
            solution:
              "Parallel projection does not distort objects, while perspective projection makes distant objects appear smaller to simulate depth.",
          },
          {
            id: 40,
            title:
              "What is the purpose of the Sutherland-Hodgman algorithm in computer graphics?",
            options: [
              "To perform line clipping",
              "To perform polygon clipping",
              "To perform texture mapping",
              "To perform hidden surface removal",
            ],
            correct_option: 1,
            solution:
              "The Sutherland-Hodgman algorithm is used for polygon clipping, particularly to clip polygons against a rectangular clipping window.",
          },
        ],
      },
      {
        id: 5,
        title: "Unit - 5: 2D and 3D Animation Tools – Flash I",
        key: "2d-and-3d-animation-tools-flash-I",
        all_mcqs: [
          {
            id: 1,
            title: "What is multimedia?",
            options: [
              "A combination of text, graphics, video, and sound",
              "A type of graphic design",
              "A video editing tool",
              "A programming language",
            ],
            correct_option: 0,
            solution:
              "Multimedia refers to the integration of text, graphics, audio, video, and animation to present information interactively.",
          },
          {
            id: 2,
            title:
              "Which tool in Flash allows you to select objects by clicking and dragging?",
            options: [
              "Selection Tool",
              "Subselection Tool",
              "Pen Tool",
              "Brush Tool",
            ],
            correct_option: 0,
            solution:
              "The Selection Tool allows users to select objects by clicking and dragging them.",
          },
          {
            id: 3,
            title: "What is the purpose of the Free Transform tool in Flash?",
            options: [
              "To move the object",
              "To resize and rotate objects",
              "To apply gradient fills",
              "To draw new shapes",
            ],
            correct_option: 1,
            solution:
              "The Free Transform tool allows users to resize, rotate, and distort objects in Flash.",
          },
          {
            id: 4,
            title:
              "Which of the following tools is used to create straight lines in Flash?",
            options: ["Line Tool", "Pen Tool", "Oval Tool", "Rectangle Tool"],
            correct_option: 0,
            solution: "The Line Tool is used to draw straight lines in Flash.",
          },
          {
            id: 5,
            title: "What is the purpose of the Eyedropper Tool in Flash?",
            options: [
              "To pick up colors from the Stage",
              "To draw freehand shapes",
              "To erase objects",
              "To select an area for transformation",
            ],
            correct_option: 0,
            solution:
              "The Eyedropper Tool is used to pick up colors from the Stage or other objects in Flash.",
          },
          {
            id: 6,
            title: "What is animation?",
            options: [
              "Creating a still image",
              "The art of creating motion images",
              "Changing the color of an object",
              "Editing a video clip",
            ],
            correct_option: 1,
            solution:
              "Animation is the process of creating moving images from still images or objects, often using various effects and techniques.",
          },
          {
            id: 7,
            title: "What is Frame by Frame animation in Flash?",
            options: [
              "The use of keyframes only",
              "Drawing each frame manually",
              "Using tweening for movement",
              "Drawing objects only once",
            ],
            correct_option: 1,
            solution:
              "Frame by Frame animation involves manually drawing each frame to create movement, providing full control over the animation.",
          },
          {
            id: 8,
            title: "What is motion tweening in Flash?",
            options: [
              "Changing the color of an object over time",
              "Animating a shape changing over time",
              "Moving an object from one place to another",
              "Changing an object's size and rotation in one step",
            ],
            correct_option: 2,
            solution:
              "Motion tweening in Flash animates an object by changing its position, size, rotation, and other properties between keyframes.",
          },
          {
            id: 9,
            title:
              "Which of the following is a characteristic of shape tweening in Flash?",
            options: [
              "It animates the position of an object",
              "It morphs one shape into another",
              "It moves an object from one place to another",
              "It animates the transparency of an object",
            ],
            correct_option: 1,
            solution:
              "Shape tweening in Flash animates the transformation of one shape into another, typically changing its size and outline.",
          },
          {
            id: 10,
            title: "What does the Pen Tool in Flash allow you to do?",
            options: [
              "Draw lines",
              "Create shapes",
              "Draw freeform curves",
              "Fill objects with color",
            ],
            correct_option: 2,
            solution:
              "The Pen Tool allows users to draw freeform curves and shapes by placing anchor points.",
          },
          {
            id: 11,
            title: "What does the Paint Bucket tool do in Flash?",
            options: [
              "Draws lines",
              "Applies colors to an object or area",
              "Erases parts of an object",
              "Resizes objects",
            ],
            correct_option: 1,
            solution:
              "The Paint Bucket Tool is used to apply fills or colors to objects or areas on the Stage in Flash.",
          },
          {
            id: 12,
            title:
              "What is the main advantage of using Tweening in Flash animation?",
            options: [
              "It reduces the amount of drawing required",
              "It adds sound effects automatically",
              "It provides full control over every frame",
              "It allows the creation of realistic 3D effects",
            ],
            correct_option: 0,
            solution:
              "Tweening in Flash helps reduce the amount of drawing needed by automating the in-between frames of an animation.",
          },
          {
            id: 13,
            title: "What is the function of the 'Masking' technique in Flash?",
            options: [
              "It adds a blur effect to an object",
              "It hides part of a layer based on another layer",
              "It changes the color of an object over time",
              "It adds text to the animation",
            ],
            correct_option: 1,
            solution:
              "Masking in Flash involves using one layer to hide parts of another layer, revealing specific areas of an animation.",
          },
          {
            id: 14,
            title: "What is the role of layers in Flash animation?",
            options: [
              "To control the speed of the animation",
              "To separate different elements of the animation",
              "To change the size of objects",
              "To add background music",
            ],
            correct_option: 1,
            solution:
              "Layers in Flash allow you to separate different elements of the animation, making it easier to organize and animate them.",
          },
          {
            id: 15,
            title: "Which tool is used to create oval shapes in Flash?",
            options: ["Pen Tool", "Rectangle Tool", "Oval Tool", "Line Tool"],
            correct_option: 2,
            solution:
              "The Oval Tool in Flash is used to create oval and circle shapes.",
          },
          {
            id: 16,
            title:
              "What is the purpose of the 'Stop' action in Flash scripting?",
            options: [
              "To stop an animation or sound",
              "To start a new frame",
              "To loop an animation",
              "To change the scene",
            ],
            correct_option: 0,
            solution:
              "The 'Stop' action in Flash scripting is used to stop an animation or sound from continuing.",
          },
          {
            id: 17,
            title: "What does the 'fscommand' in Flash do?",
            options: [
              "Stops the timeline",
              "Executes system-level commands",
              "Loads a new movie",
              "Controls the playback speed",
            ],
            correct_option: 1,
            solution:
              "The 'fscommand' in Flash is used to send system-level commands, such as quitting or switching to fullscreen mode.",
          },
          {
            id: 18,
            title:
              "Which of the following is true about the 'startDrag()' method in Flash scripting?",
            options: [
              "It starts the playback of a movie",
              "It allows an object to be dragged by the mouse",
              "It stops the movie playback",
              "It changes the position of an object instantly",
            ],
            correct_option: 1,
            solution:
              "'startDrag()' allows an object to be dragged by the mouse within the Flash animation.",
          },
          {
            id: 19,
            title:
              "Which scripting method is used to change the x-coordinate of an object in Flash?",
            options: ["setProperty()", "getProperty()", "x()", "y()"],
            correct_option: 0,
            solution:
              "The 'setProperty()' method is used to change the properties, including the x-coordinate of an object in Flash.",
          },
          {
            id: 20,
            title:
              "What is the use of the 'loadMovie()' function in Flash scripting?",
            options: [
              "It plays a movie",
              "It loads an external movie into the current movie",
              "It changes the scene",
              "It stops the current movie",
            ],
            correct_option: 1,
            solution:
              "'loadMovie()' is used to load an external movie into the current Flash movie.",
          },
          {
            id: 21,
            title: "How can you control sound playback in Flash?",
            options: [
              "Using the 'stop()' method",
              "Using the 'start()' method",
              "Using the 'soundControl()' method",
              "Using the 'stopAllSounds()' method",
            ],
            correct_option: 3,
            solution:
              "The 'stopAllSounds()' method can be used to stop all sounds in Flash.",
          },
          {
            id: 22,
            title: "Which action is used to set a property value in Flash?",
            options: [
              "setProperty()",
              "getProperty()",
              "setValue()",
              "getValue()",
            ],
            correct_option: 0,
            solution:
              "The 'setProperty()' action is used to set a property value for an object in Flash.",
          },
          {
            id: 23,
            title:
              "In Flash scripting, what does the 'getProperty()' function return?",
            options: [
              "A value to set the property",
              "The current property value of an object",
              "The next frame number",
              "The location of an object",
            ],
            correct_option: 1,
            solution:
              "The 'getProperty()' function retrieves the current property value of an object, such as its position or size.",
          },
          {
            id: 24,
            title: "What does the 'on()' function do in Flash scripting?",
            options: [
              "It plays a sound",
              "It initiates an animation",
              "It sets event listeners for interaction",
              "It stops a movie clip",
            ],
            correct_option: 2,
            solution:
              "'on()' is used to set event listeners in Flash, allowing objects to respond to user interactions like clicks or mouse movement.",
          },
          {
            id: 25,
            title: "What is the purpose of the 'fullscreen' command in Flash?",
            options: [
              "To enlarge the Flash window to fill the screen",
              "To stop the animation",
              "To change the background color",
              "To play a video in full-screen mode",
            ],
            correct_option: 0,
            solution:
              "The 'fullscreen' command is used to make the Flash window expand to cover the entire screen.",
          },
          {
            id: 26,
            title:
              "Which Flash tool is used to erase parts of an object or drawing?",
            options: ["Pencil Tool", "Eraser Tool", "Text Tool", "Brush Tool"],
            correct_option: 1,
            solution:
              "The Eraser Tool is used to erase parts of an object or drawing in Flash.",
          },
          {
            id: 27,
            title:
              "Which panel in Flash is used to manage and organize layers?",
            options: [
              "Properties Panel",
              "Timeline Panel",
              "Toolbox",
              "Layers Panel",
            ],
            correct_option: 3,
            solution:
              "The Layers Panel is used to manage and organize different layers of objects in Flash.",
          },
          {
            id: 28,
            title: "What is the role of the 'Timeline' in Flash animation?",
            options: [
              "It controls the size of the objects",
              "It organizes objects in layers",
              "It shows the sequence and timing of frames",
              "It controls the color of the background",
            ],
            correct_option: 2,
            solution:
              "The Timeline in Flash organizes the sequence and timing of frames, providing the basis for animation.",
          },
          {
            id: 29,
            title: "What is the function of the 'Subselection Tool' in Flash?",
            options: [
              "To select entire objects",
              "To select parts of an object",
              "To draw curves",
              "To erase shapes",
            ],
            correct_option: 1,
            solution:
              "The Subselection Tool allows you to select and manipulate individual points or segments of a shape.",
          },
          {
            id: 30,
            title: "What is the default file extension for Flash documents?",
            options: [".swf", ".flv", ".fla", ".html"],
            correct_option: 2,
            solution:
              "The default file extension for Flash documents is '.fla', which is the source file format.",
          },
        ],
      },
      {
        id: 6,
        title: "Unit - 6: Working with MatLab",
        key: "working-with-matlab",
        all_mcqs: [
          {
            id: 1,
            title: "What is MATLAB primarily used for?",
            options: [
              "Mathematical computations",
              "Web development",
              "Operating systems",
              "Gaming applications",
            ],
            correct_option: 0,
            solution:
              "MATLAB is primarily used for mathematical computations, simulations, and data analysis.",
          },
          {
            id: 2,
            title: "Which of the following is a feature of MATLAB?",
            options: [
              "It supports high-level programming",
              "It only supports numerical data",
              "It is only available on Windows",
              "It can only handle small datasets",
            ],
            correct_option: 0,
            solution:
              "MATLAB supports high-level programming and is used for a wide range of applications, including numerical analysis, algorithm development, and data visualization.",
          },
          {
            id: 3,
            title:
              "Which of the following commands is used to display variables in MATLAB?",
            options: ["disp()", "show()", "print()", "output()"],
            correct_option: 0,
            solution:
              "The 'disp()' function is used to display variables and values in MATLAB.",
          },
          {
            id: 4,
            title: "Which datatype is not available in MATLAB?",
            options: ["String", "Integer", "Object", "Character"],
            correct_option: 2,
            solution:
              "MATLAB does not have a specific 'Object' datatype, but it does support arrays, strings, integers, and characters.",
          },
          {
            id: 5,
            title: "What is the purpose of decision statements in MATLAB?",
            options: [
              "To control the flow of the program",
              "To perform mathematical operations",
              "To display text",
              "To create loops",
            ],
            correct_option: 0,
            solution:
              "Decision statements in MATLAB, such as 'if', 'else', and 'elseif', are used to control the flow of the program based on certain conditions.",
          },
          {
            id: 6,
            title:
              "Which looping structure is used to repeat a block of code a fixed number of times in MATLAB?",
            options: ["for loop", "while loop", "repeat loop", "loop()"],
            correct_option: 0,
            solution:
              "A 'for' loop in MATLAB is used to repeat a block of code a fixed number of times.",
          },
          {
            id: 7,
            title: "Which data type is used to store a matrix in MATLAB?",
            options: ["Vector", "Array", "Matrix", "List"],
            correct_option: 2,
            solution:
              "In MATLAB, matrices are the primary data type for storing data in a two-dimensional form.",
          },
          {
            id: 8,
            title: "How do you define a vector in MATLAB?",
            options: [
              "[1 2 3 4]",
              "[1, 2, 3, 4]",
              "1; 2; 3; 4",
              "vector(1, 2, 3, 4)",
            ],
            correct_option: 1,
            solution:
              "A vector is defined by enclosing the elements in square brackets and separating them with commas or spaces: [1, 2, 3, 4].",
          },
          {
            id: 9,
            title: "What function is used to read an image file into MATLAB?",
            options: ["read()", "imread()", "imshow()", "image()"],
            correct_option: 1,
            solution:
              "The 'imread()' function is used to read an image file into MATLAB.",
          },
          {
            id: 10,
            title: "Which function in MATLAB displays an image?",
            options: ["image()", "show()", "imshow()", "disp()"],
            correct_option: 2,
            solution:
              "The 'imshow()' function is used to display images in MATLAB.",
          },
          {
            id: 11,
            title: "How do you convert an image to grayscale in MATLAB?",
            options: ["rgb2bw()", "rgb2gray()", "gray2rgb()", "bw2rgb()"],
            correct_option: 1,
            solution:
              "The 'rgb2gray()' function is used to convert an image to grayscale in MATLAB.",
          },
          {
            id: 12,
            title: "What does the 'imhist()' function in MATLAB do?",
            options: [
              "Displays an image",
              "Creates an image histogram",
              "Changes the image contrast",
              "Resizes the image",
            ],
            correct_option: 1,
            solution:
              "'imhist()' generates a histogram of the image, showing the distribution of pixel intensities.",
          },
          {
            id: 13,
            title:
              "Which MATLAB function is used to adjust the contrast of an image?",
            options: ["imadjust()", "imrotate()", "edge()", "imcomplement()"],
            correct_option: 0,
            solution:
              "The 'imadjust()' function is used to adjust the contrast of an image in MATLAB.",
          },
          {
            id: 14,
            title: "How do you write an image to a file in MATLAB?",
            options: ["imwrite()", "writeimage()", "saveimage()", "save()"],
            correct_option: 0,
            solution:
              "The 'imwrite()' function is used to write an image to a file in MATLAB.",
          },
          {
            id: 15,
            title:
              "Which MATLAB function is used to rotate an image by a specified angle?",
            options: ["imrotate()", "rotate()", "flip()", "imresize()"],
            correct_option: 0,
            solution:
              "The 'imrotate()' function is used to rotate an image by a specified angle in MATLAB.",
          },
          {
            id: 16,
            title: "Which method is used for edge detection in MATLAB?",
            options: [
              "Canny method",
              "Gaussian method",
              "Median filter",
              "Sobel method",
            ],
            correct_option: 0,
            solution:
              "The Canny method is one of the edge detection techniques available in MATLAB.",
          },
          {
            id: 17,
            title:
              "What function can be used to apply a binary thresholding operation to an image in MATLAB?",
            options: ["im2bw()", "rgb2bw()", "bw2im()", "imthreshold()"],
            correct_option: 0,
            solution:
              "'im2bw()' is used to convert an image to binary by applying a threshold.",
          },
          {
            id: 18,
            title:
              "What is the purpose of the 'uigetfile()' function in MATLAB?",
            options: [
              "To open a file dialog box for selecting files",
              "To write files to disk",
              "To save an image",
              "To read image files",
            ],
            correct_option: 0,
            solution:
              "'uigetfile()' is used to open a file dialog box for selecting files in MATLAB.",
          },
          {
            id: 19,
            title: "What does the 'imcomplement()' function do in MATLAB?",
            options: [
              "Inverts the image",
              "Flips the image",
              "Rotates the image",
              "Adjusts the brightness",
            ],
            correct_option: 0,
            solution:
              "'imcomplement()' inverts the image, turning dark pixels to light and vice versa.",
          },
          {
            id: 20,
            title:
              "Which function is used for edge detection in MATLAB using the Sobel operator?",
            options: ["edge()", "sobel()", "canny()", "detect_edges()"],
            correct_option: 0,
            solution:
              "The 'edge()' function in MATLAB is used for edge detection, and you can specify the Sobel operator method.",
          },
          {
            id: 21,
            title: "How can you display a grayscale image in MATLAB?",
            options: [
              "imshow(gray_image)",
              "image(gray_image)",
              "display(gray_image)",
              "show(gray_image)",
            ],
            correct_option: 0,
            solution:
              "'imshow()' is used to display an image, including grayscale images, in MATLAB.",
          },
          {
            id: 22,
            title:
              "Which function in MATLAB is used to get the filename from a file dialog box?",
            options: [
              "uigetfile()",
              "filename()",
              "getfilename()",
              "openfile()",
            ],
            correct_option: 0,
            solution:
              "The 'uigetfile()' function is used to get the filename through a file dialog box.",
          },
          {
            id: 23,
            title:
              "Which of the following functions in MATLAB rotates an image by a specified angle?",
            options: ["imrotate()", "rotate()", "flip()", "translate()"],
            correct_option: 0,
            solution:
              "'imrotate()' rotates an image by a specified angle in MATLAB.",
          },
          {
            id: 24,
            title:
              "Which command in MATLAB is used to read an image from a URL?",
            options: ["urlread()", "imread()", "readimage()", "getimage()"],
            correct_option: 1,
            solution:
              "'imread()' is used to read an image from a file or a URL in MATLAB.",
          },
          {
            id: 25,
            title: "Which of the following is a valid MATLAB variable name?",
            options: ["3variable", "variable_name", "_variable", "var-name"],
            correct_option: 1,
            solution:
              "In MATLAB, a variable name must start with a letter and can contain letters, numbers, and underscores.",
          },
        ],
      },
    ],
  },
];
