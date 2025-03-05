export const practicalCodes = [
  // AI
  {
    subject_name: "Artificial Intelligence",
    key: "artificial-intelligence",
    language: "python",
    practicals: [
      {
        key: "tic-tac-toe",
        name: "Practical - 1: Tic Tac Toe",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 1 - Tic Tac Toe",
          },
          {
            type: "code",
            fileName: "tic-tac-toe.py",
            value: `def print_board(board):
 print("\\n")
 print(f" {board[0]} | {board[1]} | {board[2]} ")
 print("---+---+---")
 print(f" {board[3]} | {board[4]} | {board[5]} ")
 print("---+---+---")
 print(f" {board[6]} | {board[7]} | {board[8]} ")
 print("\\n")
# Function to check if the current player has won
def check_win(board, player):
    win_conditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Vertical
        [0, 4, 8], [2, 4, 6]  # Diagonal
    ]

    for condition in win_conditions:
        if board[condition[0]] == board[condition[1]] == board[condition[2]] == player:
            return True  # If a winning condition is met, return True

    return False  # Return False only after checking all conditions


# Function to check if the board is full
def is_board_full(board):
 return " " not in board

# Function to handle player's move
def player_move(board, player):
 while True:
    try:
        move = int(input(f"Player {player}, choose your position (1-9): ")) - 1
        if board[move] == " ":
            board[move] = player
            break
        else:
             print("That position is already taken. Try again.")
    except (ValueError, IndexError):
         print("Invalid move. Please choose a number between 1 and 9.")

# Main function to play the game
def play_game():
 board = [" "] * 9
 current_player = "X"

 print("Welcome to Tic-Tac-Toe!")
 print_board(board)

 while True:
    player_move(board, current_player)
    print_board(board)
    if check_win(board, current_player):
        print(f"Player {current_player} wins!")
        break
    elif is_board_full(board):
        print("It's a tie!")
        break

# Function to check if the board is full
def is_board_full(board):
 return " " not in board


# Function to handle player's move
def player_move(board, player):
 while True:
    try:
        move = int(input(f"Player {player}, choose your position (1-9): ")) - 1
        if board[move] == " ":
            board[move] = player
            break
        else:
            print("That position is already taken. Try again.")
    except (ValueError, IndexError):
        print("Invalid move. Please choose a number between 1 and 9.")


# Main function to play the game
def play_game():
 board = [" "] * 9
 current_player = "X"

 print("Welcome to Tic-Tac-Toe!")
 print_board(board)

 while True:
    player_move(board, current_player)
    print_board(board)
    if check_win(board, current_player):
        print(f"Player {current_player} wins!")
        break
    elif is_board_full(board):
        print("It's a tie!")
        break
    # Switch player
    current_player = "O" if current_player == "X" else "X"

# Start the game
if __name__ == "__main__":
 play_game()`,
          },
        ],
      },
      {
        key: "bfs",
        name: "Practical - 2:  BFS",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 2 - BFS",
          },
          {
            type: "code",
            fileName: "bfs.py",
            value: `graph = {
    '5': ['3', '7'],
    '3': ['2', '4'],
    '7': ['8'],
    '2': [],
    '4': ['8'],
    '8': []
}

visited = []
queue = []

def bfs(visited,graph,node):
    visited.append(node)
    queue.append(node)

    while queue:
        m = queue.pop(0)
        print(m,end = " ")

        for neighbour  in graph[m]:
            if neighbour not in visited:
                visited.append(neighbour)
                queue.append(neighbour)

print("BFS")
bfs(visited,graph,'5')`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `BFS
5 3 7 2 4 8 `,
          },
        ],
      },
      {
        key: "water-jug-problem",
        name: "Practical - 3:  Water Jug Problem",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 3 - Water Jug Problem",
          },
          {
            type: "code",
            fileName: "water-jug-problem.py",
            value: `a = int(input("Enter Jug A Capacity : "))
b = int(input("Enter Jug B Capacity : "))
ai = int(input("Initially Water in Jug A : "))
bi = int(input("Initially Water in Jug B : "))
af = int(input("Final State of Jug A : "))
bf = int(input("Final State of Jug B : "))
print("List of Operations you can do: \\n")
print("1. Fill Jug A Completely")
print("2. Fill Jug B Completely")
print("3. Empty Jug A Completely")
print("4. Empty Jug B Completely")
print("5. Pour from Jug A till Jug B filled Completely or A become empty \\n")
print("6. Pour from Jug B till Jug A filled Completely or B become empty \\n")
print("7. Pour all Jug B till Jug A\\n")
print("8. Pour all Jug A till Jug B\\n")

while ((ai != af or bi != bf)):
    op = int(input("Enter the operation: "))
    if (op == 1):
        ai = a
    elif (op == 2):
        bi = b
    elif (op == 3):
        ai = 0
    elif (op == 4):
        bi = 0
    elif (op == 5):
        if (b - bi > ai):
            bi = ai + bi
            ai = 0
        else:
            ai = ai - (b - bi)
            bi = b
    elif (op == 6):
        if (a - ai > bi):
            ai = ai + bi
            bi = 0
        else:
            bi = bi - (a - ai)
            ai = a
    elif (op == 7):
        ai = ai + bi
        bi = 0

    elif (op == 8):
        bi = bi + ai
        ai = 0
    print(ai, bi)`,
          },
          {
            type: "code",
            is_output: true,
            language: "text",
            value: `Enter Jug A Capacity : 10
Enter Jug B Capacity : 10
Initially Water in Jug A : 5
Initially Water in Jug B : 5
Final State of Jug A : 10
Final State of Jug B : 10
List Of Operations You can Do:

1. Fill Jug A Completely 

2. Fill Jug B Completely 

3. Empty Jug A Completely 

4. Empty Jug B Completely 

5. Pour from Jug A till Jug B filled Completely or A become empty

6. Pour from Jug B till Jug A filled Completely or B become empty

7. Pour all Jug B till Jug A

8. Pour all Jug A till Jug B

Enter the Operation: 1
10 5
Enter the Operation: 2
10 10`,
          },
        ],
      },
      {
        key: "n-queens-problem",
        name: "Practical - 4: N Queens Problem",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 4 - N Queens Problem",
          },
          {
            type: "code",
            fileName: "n-queens-problem.py",
            value: `n = 4
board=[]

def getBoard():
    for i in range(n):
        nthList = []
        for j in range(n):
            nthList.append(0)
        board.append(nthList)

def printBoard():
    for i in range(n):
        for j in range(n):
            print(board[i][j], end=" ")
        print("")

def isSafe(row,col):
    for i in range(n):
        if board[row][i] == 1:
            return False
    for j in range(n):
        if board[j][col] == 1:
            return False
    i=row-1
    j=col-1
    while(i>=0 and j>=0):
        if board[i][j] == 1:
            return False
        i = i - 1
        j = j - 1

    i = row - 1
    j = col + 1

    while(i >= 0 and j < n):
        if board[i][j] == 1:
            return False

        i = i-1
        j = j+1

    i = row+1
    j = col-1

    while(i<n and j >=0):
        if board[i][j] == 1:
            return False
        i = i +1
        j = j+1
    i = row+1
    j=col+1
    while(i<n and j<n):
        if board[i][j] == 1:
            return False
        i = i + 1
        j = j + 1
    return True

def Put(n,count):
    if count == n:
        return True
    for i in range(n):
        for j in range(n):
            if isSafe(i,j):
                board[i][j] = 1
                count = count+1
                if Put(n,count) == True:
                    return True
                board[i][j] = 0
                count = count -1
    return False

getBoard()
Put(n,0)
printBoard()`,
          },
          {
            type: "code",
            is_output: true,
            language: "text",
            value: `0 1 0 0 
0 0 0 1 
1 0 0 0 
0 0 1 0 `,
          },
        ],
      },
      {
        key: "tower-of-hanoi",
        name: "Practical - 5: Tower of Hanoi",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 5 - Tower of Hanoi",
          },
          {
            type: "code",
            fileName: "tower-of-hanoi.py",
            value: `def tower_of_hanoi(n, A, B, C):
    if (n == 1):
        print(f"Move disc {n} from {A} to {C} ")
        return

    tower_of_hanoi(n - 1, A, C, B)
    print(f"Move disc {n} from {A} to {C} ")
    tower_of_hanoi(n - 1, B, A, C)


tower_of_hanoi(3, 'Red', 'Green', "Blue")`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Move disc 1 from Red to Blue 
Move disc 2 from Red to Green 
Move disc 1 from Blue to Green 
Move disc 3 from Red to Blue 
Move disc 1 from Green to Red 
Move disc 2 from Green to Blue 
Move disc 1 from Red to Blue `,
          },
        ],
      },
      {
        key: "family-tree",
        name: "Practical - 6: Family Tree - Prolog",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 6 - Family Tree - Prolog",
          },
          {
            type: "code",
            fileName: "family-tree.pl",
            language: "prolog",
            value: `female(pammi).
female(lizza).
female(patty).
female(annny).
male(jimmy).
male(bobby).
male(tomy).
male(pitter).
parent(pammi,bobby).
parent(tomy,bobby).
parent(tomy,lizza).
parent(bobby,annny).
parent(bobby,patty).
parent(patty,jimmy).
parent(bobby,pitter).
parent(pitter,jimmy).

mother(X,Y):- parent(X,Y), female(X).
father(X,Y):- parent(X,Y), male(X).
haschild(X):- parent(X,_).
sister(X,Y):- parent(Z,X),parent(Z,Y),female(X),X\==Y.
brother(X,Y):- parent(Z,X),parent(Z,Y),male(X),X\==Y.`,
          },
        ],
      },
    ],
  },
  //   AJP
  {
    subject_name: "Advance Java Programming",
    key: "advance-java-programming",
    language: "java",
    practicals: [
      // Pra-1 jdbc-connectivity
      {
        key: "jdbc-connectivity",
        name: "Practical - 1: JDBC Connectivity",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 1 - JDBC Connectivity",
          },
          {
            type: "code",
            fileName: "main.java",
            value: `import java.sql.*;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) throws ClassNotFoundException {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Username");
        String un = in.next();
        System.out.println("Enter Password");
        String pw = in.next();
        try {
//DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/db_name", "root", "");
            String query = "SELECT * FROM login WHERE user_name = ? AND pass = ?";
            PreparedStatement stmt = con.prepareStatement(query);
            stmt.setString(1, un);
            stmt.setString(2, pw);
            ResultSet rs = stmt.executeQuery();
            rs.next();
            if (rs.getRow()>0) {
                System.out.println("Login Successful ! "+rs.getString("user_name"));
            }
            else
            {
                System.out.println("Login Fail");
            }
            rs.close();
            stmt.close();
            con.close();
        }
        catch (SQLException e) {
            System.out.println(e);
        }
    }
}`,
          },
        ],
      },
      //   Pra - 2 crud-operations
      {
        key: "crud-operations",
        name: "Practical - 2: JDBC Connectivity & Crud Operations ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 2- JDBC Connectivity & Crud Operations",
          },
          {
            type: "code",
            fileName: "main.java",
            value: `import java.sql.*;
import java.util.Scanner;
public class Main {
    // Database connection setup
    private static final String URL = "jdbc:mysql://localhost:3306/StudentDB";
    private static final String USER = "root";
    private static final String PASSWORD = "";
    public static void main(String[] args) {
        try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD)) {
            Scanner scanner = new Scanner(System.in);
            int choice;
            do {
                System.out.println("\\n--- Student Information System ---");
                System.out.println("1. Insert Student");
                System.out.println("2. Update Student");
                System.out.println("3. Delete Student");
                System.out.println("4. Display All Students");
                System.out.println("5. Exit");
                System.out.print("Enter your choice: ");
                choice = scanner.nextInt();
                switch (choice) {
                    case 1:
                        insertStudent(connection, scanner);
                        break;
                    case 2:
                        updateStudent(connection, scanner);
                        break;
                    case 3:
                        deleteStudent(connection, scanner);
                        break;
                    case 4:
                        displayStudents(connection);
                        break;
                    case 5:
                        System.out.println("Exiting...");
                        break;
                    default:
                        System.out.println("Invalid choice! Please try again.");
                }
            } while (choice != 5);
            scanner.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    private static void insertStudent(Connection connection, Scanner scanner) {
        try {
            System.out.print("Enter Student ID: ");
            int id = scanner.nextInt();
            scanner.nextLine();
            System.out.print("Enter Name: ");
            String name = scanner.nextLine();
            System.out.print("Enter Age: ");
            int age = scanner.nextInt();
            scanner.nextLine();
            System.out.print("Enter Course: ");
            String course = scanner.nextLine();
            String sql = "INSERT INTO student (student_id, name, age, course) VALUES (?, ?, ?, ?)";
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                statement.setInt(1, id);
                statement.setString(2, name);
                statement.setInt(3, age);
                statement.setString(4, course);
                int rows = statement.executeUpdate();
                if (rows > 0) {
                    System.out.println("Student inserted successfully!");
                }
            }
        } catch (SQLException e) {
            System.out.println("Error inserting student: " + e.getMessage());
        }
    }
    private static void updateStudent(Connection connection, Scanner scanner) {
        try {
            System.out.print("Enter Student ID to Update: ");
            int id = scanner.nextInt();
            scanner.nextLine(); // Consume newline
            System.out.print("Enter New Name: ");
            String name = scanner.nextLine();
            System.out.print("Enter New Age: ");
            int age = scanner.nextInt();
            scanner.nextLine(); // Consume newline
            System.out.print("Enter New Course: ");
            String course = scanner.nextLine();
            String sql = "UPDATE student SET name = ?, age = ?, course = ? WHERE student_id = ?";
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                statement.setString(1, name);
                statement.setInt(2, age);
                statement.setString(3, course);
                statement.setInt(4, id);
                int rows = statement.executeUpdate();
                if (rows > 0) {
                    System.out.println("Student updated successfully!");
                } else {
                    System.out.println("Student ID not found.");
                }
            }
        } catch (SQLException e) {
            System.out.println("Error updating student: " + e.getMessage());
        }
    }
    private static void deleteStudent(Connection connection, Scanner scanner) {
        try {
            System.out.print("Enter Student ID to Delete: ");
            int id = scanner.nextInt();
            String sql = "DELETE FROM student WHERE student_id = ?";
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                statement.setInt(1, id);
                int rows = statement.executeUpdate();
                if (rows > 0) {
                    System.out.println("Student deleted successfully!");
                } else {
                    System.out.println("Student ID not found.");
                }
            }
        } catch (SQLException e) {
            System.out.println("Error deleting student: " + e.getMessage());
        }
    }
    private static void displayStudents(Connection connection) {
        try {
            String sql = "SELECT * FROM student";
            try (Statement statement = connection.createStatement();
                 ResultSet resultSet = statement.executeQuery(sql)) {
                System.out.println("\\n--- Student Records ---");
                while (resultSet.next()) {
                    int id = resultSet.getInt("student_id");
                    String name = resultSet.getString("name");
                    int age = resultSet.getInt("age");
                    String course = resultSet.getString("course");
                    System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age + ", Course: " + course);
                }
            }
        } catch (SQLException e) {
            System.out.println("Error displaying students: " + e.getMessage());
        }
    }
}`,
          },
        ],
      },
      //   Prac -3 data-driven-gui-app
      {
        key: "data-driven-gui-app",
        name: "Practical - 3: Data Driven GUI Application ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 3- Data Driven GUI Application",
          },
          {
            type: "code",
            fileName: "registration.html",
            language: "html",
            value: `<!DOCTYPE html>
<html>
  <head>
    <title>User Registration</title>
  </head>
  <body>
    <h1>Registration Form</h1>
    <form action="RegisterUser" method="post">
      <label for="name">Name:</label>
      <input type="text" name="name" required /><br /><br />
      <label for="birthdate">DOB:</label>
      <input type="date" name="birthdate" required /><br /><br />
      <label for="email">Email ID:</label>
      <input type="email" name="email" required /><br /><br />
      <label for="phone_no">Phone Number:</label>
      <input type="text" name="phone_no" required /><br /><br />
      <button type="submit">Submit</button>
    </form>
  </body>
</html>`,
          },
          //
          {
            type: "code",
            fileName: "RegisterUser.java",
            value: `
import java.io.IOException;
import java.sql.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import jakarta.servlet.http.HttpServlet;

@WebServlet("/RegisterUser")
public class RegisterUser extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String name = request.getParameter("name");
        String birthdate = request.getParameter("birthdate");
        String email = request.getParameter("email");
        String phone_no = request.getParameter("phone_no");
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/servlets", "root", "");
            String sql = "INSERT INTO users (name, birthdate, email, phone_no) VALUES (?, ?, ?, ?)";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1, name);
            statement.setString(2, birthdate);
            statement.setString(3, email);
            statement.setString(4, phone_no);
            
            int rowsInserted = statement.executeUpdate();
            if (rowsInserted > 0) {
                System.out.println("A new user was inserted successfully.");
            } else {
                System.out.println("No rows inserted.");
            }

            // Use contextPath to handle correct redirection
            response.sendRedirect(request.getContextPath() + "/DisplayUsers");

        } catch (Exception e) {
            e.printStackTrace();
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "An error occurred while processing your request.");
        }
    }
}`,
          },
          //
          {
            type: "code",
            fileName: "DisplayUsers.java",
            value: `
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

@WebServlet("/DisplayUsers")
public class DisplayUsers extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/servlets", "root", "");
            String sql = "SELECT * FROM users";
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(sql);
            out.println("<h1>Registered Users</h1>");
            out.println("<table border='1'>");
            out.println("<tr><th>ID</th><th>Name</th><th>Birthdate</th><th>Email</th><th>Phone Number</th></tr>");
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                Date birthdate = resultSet.getDate("birthdate");
                String email = resultSet.getString("email");
                String phone_no = resultSet.getString("phone_no");
                out.println("<tr>");
                out.println("<td>" + id + "</td>");
                out.println("<td>" + name + "</td>");
                out.println("<td>" + birthdate + "</td>");
                out.println("<td>" + email + "</td>");
                out.println("<td>" + phone_no + "</td>");
                out.println("</tr>");
            }
            out.println("</table>");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`,
          },
        ],
      },
      //   Pra -4 data-driven-servlet-application
      {
        key: "data-driven-servlet-application",
        name: "Practical - 4: A Data Driven Servlet Application ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 4- A Data Driven Servlet Application",
          },
          {
            type: "code",
            fileName: "index.html",
            language: "html",
            value: `<!DOCTYPE html>
<html>
<body>
<h2>Login Form</h2>
<form action="AuthenticateServlet" method="post">
<label for="username">Username:</label>
<input type="text" id="username" name="username" required><br>
<label for="password">Password:</label>
<input type="password" id="password" name="password" required><br>
<button type="submit">Login</button>
</form>
</body>
</html>`,
          },
          //
          {
            type: "code",
            fileName: "AuthenticateServlet.java",
            value: `import java.io.*;
import java.sql.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

@WebServlet("/Authenticate")
public class AuthenticateServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        boolean isAuthenticated = false;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/servlets", "root", "");
            String sql = "SELECT * FROM users WHERE username = ? AND password = ?";
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, username);
            pstmt.setString(2, password);
            ResultSet rs = pstmt.executeQuery();
            isAuthenticated = rs.next();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (isAuthenticated) {
            out.println("<h1>Welcome, " + username + "!</h1>");
        } else {
            out.println("<h1>Invalid username or password!</h1>");
        }
        out.println("<h2>Request Headers:</h2>");
        request.getHeaderNames().asIterator().forEachRemaining(headerName -> {
            out.println(headerName + ": " + request.getHeader(headerName) + "<br>");
        });
        response.addHeader("Custom-Header", "This is Karan and i am your header");
        out.println("<h2>Response Headers:</h2>");
        response.getHeaderNames().forEach(headerName -> {
            out.println(headerName + ": " + response.getHeader(headerName) + "<br>");
        });
        out.close();
    }
}`,
          },
        ],
      },
      //    pra - 5 servlet-session-management
      {
        key: "servlet-session-management",
        name: "Practical - 5: Servlet - Session Management ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 5- Servlet - Session Management",
          },
          {
            type: "code",
            fileName: "index.html",
            language: "html",
            value: `<!DOCTYPE html>
<html>
  <head>
    <title>Lab-5</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <form action="examInfo">
      <div>
        <input type="text" name="name" placeholder="Enter Name" /><br />
        <input type="text" name="id" placeholder="Enter Id" /><br />
        <input
          type="text"
          name="department"
          placeholder="Enter Department"
        /><br />

        <input type="Submit" value="Next" name="btn_next" />
      </div>
    </form>
  </body>
</html>`,
          },
          {
            type: "code",
            fileName: "examInfo.java",
            value: `import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = { "/examInfo" })
public class examInfo extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String nm, id, department;
        try (PrintWriter out = response.getWriter()) {

            nm = request.getParameter("name");
            id = request.getParameter("id");
            department = request.getParameter("department");
            Cookie c1, c2, c3;
            c1 = new Cookie("nm", nm);

            c2 = new Cookie("id", id);
            c3 = new Cookie("dept", department);

            response.addCookie(c1);
            response.addCookie(c2);
            response.addCookie(c3);

            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>ExamInfo</title>");
            out.println("</head>");
            out.println("<body><form action=\\"examResult\\">");
            out.println("<h1>Student : " + nm + "</h1><br><hr>");
            out.println("<center><b>Enter ,marks for six subjects [out of 100]</b></center><br>");
            out.println("Enter marks for subject1 <input type=\\"text\\" name=\\"subj1\\"><br><br>");
            out.println("Enter marks for subject2 <input type=\\"text\\" name=\\"subj2\\"><br><br>");
            out.println("Enter marks for subject3 <input type=\\"text\\" name=\\"subj3\\" ><br><br>");
            out.println("Enter marks for subject4 <input type=\\"text\\" name=\\"subj4\\" ><br><br>");
            out.println("Enter marks for subject5 <input type=\\"text\\" name=\\"subj5\\" ><br><br>");
            out.println("Enter marks for subject6 <input type=\\"text\\" name=\\"subj6\\" ><br><br>");
            out.println("<input type=\\"Submit\\" value=\\"Generate Result\\">");
            out.println("</form></body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}`,
          },
          {
            type: "code",
            fileName: "examResult.java",
            value: `import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = { "/examResult" })
public class examResult extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            int m1, m2, m3, m4, m5, m6;
            float avg;
            m1 = Integer.parseInt(request.getParameter("subj1"));
            m2 = Integer.parseInt(request.getParameter("subj2"));
            m3 = Integer.parseInt(request.getParameter("subj3"));
            m4 = Integer.parseInt(request.getParameter("subj4"));
            m5 = Integer.parseInt(request.getParameter("subj5"));
            m6 = Integer.parseInt(request.getParameter("subj6"));
            avg = (float) (m1 + m2 + m3 + m4 + m5 + m6) / 6;

            char grade;
            if (avg >= 90) {
                grade = 'A';
            } else if (avg >= 70) {
                grade = 'B';
            } else if (avg >= 60) {
                grade = 'C';
            } else {

                grade = 'F';
            }

            Cookie[] c = request.getCookies();

            out.println("<br>Name :" + c[0].getValue());
            out.println("<br>Id :" + c[1].getValue());
            out.println("<br>Department :" + c[2].getValue());

            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>ExamResult</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Exam Result :" + grade + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);

    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}`,
          },
        ],
      },
      //    pra -6 servlet-request-redirection
      {
        key: "servlet-request-redirection",
        name: "Practical - 6: Servlet - Request Redirection ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 6- Servlet - Request Redirection",
          },
          {
            type: "code",
            fileName: "RedirectServlet.java",
            value: `import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.*;
import java.util.regex.*;

public class RedirectServlet extends HttpServlet {

    // Handle both GET and POST requests
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Same logic as POST method for handling GET requests
        handleRedirect(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Handle the POST method (which will be used when form is submitted)
        handleRedirect(request, response);
    }

    // Common logic to handle redirect for both GET and POST requests
    private void handleRedirect(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Retrieve the URL entered by the user
        String location = request.getParameter("location");

        // Validate if the URL is empty or not
        if (location == null || location.isEmpty()) {
            response.getWriter().println("URL cannot be empty!");
            return;
        }

        // Basic URL validation using regex (ensure it starts with http:// or https://)
        String regex = "^(https?|ftp)://.*$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(location);

        if (matcher.matches()) {
            // If the URL is valid, perform the redirection
            response.sendRedirect(location);
        } else {
            // If the URL is invalid, show an error message
            response.getWriter().println("Invalid URL! Please enter a valid URL starting with http:// or https://");
        }
    }
}`,
          },
          {
            type: "code",
            fileName: "redirectForm.jsp",
            value: `<!DOCTYPE html>
<html>
  <head>
    <title>Request Redirection</title>
  </head>
  <body>
    <h2>Enter the URL to redirect to:</h2>
    <!-- Use POST method for submitting form data -->
    <form action="RedirectServlet" method="POST">
      <label for="location">URL: </label>
      <input
        type="text"
        id="location"
        name="location"
        placeholder="Enter the URL"
        required
      />
      <input type="submit" value="Go" />
    </form>
  </body>
</html>`,
          },
        ],
      },
      //   pra - 7 jsp-user-authentication
      {
        key: "jsp-user-authentication",
        name: "Practical - 7: JSP - User Authentication ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 7- JSP - User Authentication",
          },
          {
            type: "code",
            fileName: "index.html",
            language: "html",
            value: `<!DOCTYPE html>
<html>
<head>
<title>TODO supply a title</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<form action="NewServlet">
Username<input type="text" name="uname">
Password<input type="password" name="pwd">
<input type="submit" value="login">
</form>
</body>
</html>`,
          },
          {
            type: "code",
            fileName: "NewServlet.java",
            value: `import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.sql.*;
import jakarta.servlet.http.HttpSession;

@WebServlet(urlPatterns = {"/NewServlet"})
public class NewServlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String u, p;
        u = request.getParameter("uname").trim();
        p = request.getParameter("pwd").trim();
        Connection c;
        try {
// PrintWriter out = response.getWriter();
/* TODO output your page here. You may use following sample code. */
            Class.forName("com.mysql.cj.jdbc.Driver");
            c = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/userdb",
                    "root", "");

            Statement s = c.createStatement();
            ResultSet rs = s.executeQuery(
                    "select * from users where username='" + u + "' AND password='" + p + "'");
            HttpSession session = request.getSession();
            System.out.println("Record fetched");
            if (rs.next()) {
                session.setAttribute("un", u);
                response.sendRedirect("/Practical-7/home.jsp");
            } else {
//session.setAttribute("flag", "Wrong Credentials");
                response.sendRedirect("/Practical-7/index.html");
            }

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}`,
          },
          {
            type: "code",
            fileName: "home.jsp",
            value: `<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>JSP Page</title>
</head>
<body>
<%
String un = (String)session.getAttribute("un");

%>
<h2>Welcome <%= un %></h2>
</body>
</html>`,
          },
        ],
      },
      //    pra - 8 jsp-java-beans
      {
        key: "jsp-java-beans",
        name: "Practical - 8: JSP - Java Beans ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 8- JSP - Java Beans",
          },
          {
            type: "code",
            fileName: "index.jsp",
            value: `<%@ page language="java" import="beans.BankAccount" %>
<jsp:useBean id="account" class="beans.BankAccount" scope="session" />
<jsp:setProperty name="account" property="accountHolder" param="name" />
<html>
  <head>
    <title>Bank Account</title>
  </head>
  <body>
    <h2>
      Welcome, <jsp:getProperty name="account" property="accountHolder" />
    </h2>
    <p>
      Current Balance: <jsp:getProperty name="account" property="balance" />
    </p>
    <form action="process.jsp" method="post">
      <label>Deposit Amount:</label>
      <input type="text" name="depositAmount" />
      <input type="submit" name="action" value="Deposit" />
    </form>
    <form action="process.jsp" method="post">
      <label>Withdraw Amount:</label>
      <input type="text" name="withdrawAmount" />
      <input type="submit" name="action" value="Withdraw" />
    </form>
  </body>
</html>`,
          },
          {
            type: "code",
            fileName: "process.jsp",
            value: `
<%@ page language="java" import="beans.BankAccount" %>
<jsp:useBean id="account" class="beans.BankAccount" scope="session" />

<%
    String action = request.getParameter("action");

    if ("Deposit".equals(action)) {
        double depositAmount = Double.parseDouble(request.getParameter("depositAmount"));
        account.deposit(depositAmount);
        out.println("<script>alert('Deposit Successful!');</script>");
    }
    
    else if ("Withdraw".equals(action)) {
        double withdrawAmount = Double.parseDouble(request.getParameter("withdrawAmount"));
        if (!account.withdraw(withdrawAmount)) {
            out.println("<script>alert('Insufficient Balance!');</script>");
        } else {
            out.println("<script>alert('Withdrawal Successful!');</script>");
        }
    }

    response.sendRedirect("index.jsp");
%>`,
          },
          {
            type: "code",
            fileName: "BankAccount.java",
            value: `package beans;

import java.io.Serializable;

public class BankAccount implements Serializable {
    private String accountHolder;
    private double balance;

    public BankAccount() {
        this.accountHolder = "Karan";
        this.balance = 0.0;
    }

    public String getAccountHolder() {
        return accountHolder;
    }

    public void setAccountHolder(String accountHolder) {
        this.accountHolder = accountHolder;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
}`,
          },
        ],
      },
      //  pra - 9 jsp-custom-tags
      {
        key: "jsp-custom-tags",
        name: "Practical - 9: JSP - Custom Tags ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 9- JSP - Custom Tags",
          },
          {
            type: "code",
            fileName: "index.jsp",
            value: `<%@ taglib prefix="c" uri="/WEB-INF/tlds/sortNumbers.tld" %>
<html>
  <head>
    <title>Sort Numbers Custom Tag</title>
  </head>
  <body>
    <h2>Enter 10 Numbers (comma-separated)</h2>
    <form method="post">
      <input type="text" name="numbers" required />
      <select name="order">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <input type="submit" value="Sort" />
    </form>
    <% String numbers = request.getParameter("numbers"); String order =
    request.getParameter("order"); if (numbers != null && !numbers.isEmpty()) {
    %>
    <h3>Sorted Numbers:</h3>
    <c:sortNumbers numbers="<%= numbers%>" order="<%= order%>" />
    <% }%>
  </body>
</html>`,
          },
          {
            type: "code",
            fileName: "SortNumbersTag.java",
            value: `
package customtags;

import java.io.IOException;
import java.util.Arrays;
import jakarta.servlet.jsp.tagext.TagSupport;
import jakarta.servlet.jsp.JspException;
import jakarta.servlet.jsp.JspWriter;

public class SortNumbersTag extends TagSupport {

    private String numbers; // Input numbers as a comma-separated string
    private String order; // Sorting order: "asc" or "desc"
// Setter methods

    public void setNumbers(String numbers) {
        this.numbers = numbers;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    @Override
    public int doStartTag() throws JspException {
        if (numbers == null || numbers.trim().isEmpty()) {
            return SKIP_BODY;
        }
        String[] numArray = numbers.split(",");
        int[] intArray = new int[numArray.length];
        try {
            for (int i = 0; i < numArray.length; i++) {
                intArray[i] = Integer.parseInt(numArray[i].trim());
            }
        } catch (NumberFormatException e) {
            throw new JspException("Invalid number format!", e);
        }
// Sorting logic
        Arrays.sort(intArray);
        if ("desc".equalsIgnoreCase(order)) {
            for (int i = 0; i < intArray.length / 2; i++) {
                int temp = intArray[i];
                intArray[i] = intArray[intArray.length - 1 - i];
                intArray[intArray.length - 1 - i] = temp;
            }
        }
// Output sorted numbers
        JspWriter out = pageContext.getOut();
        try {
            out.print(Arrays.toString(intArray));
        } catch (IOException e) {
            throw new JspException("Error in SortNumbersTag", e);
        }
        return SKIP_BODY; // No body content required
    }
}`,
          },
          {
            type: "code",
            fileName: "sortNumbers.tld",
            value: `<?xml version="1.0" encoding="UTF-8"?>
<taglib version="2.1" xmlns="http://java.sun.com/xml/ns/javaee"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-jsptaglibrary_2_1.xsd">
    <tlib-version>1.0</tlib-version>
    <tag>
        <name>sortNumbers</name>
        <tag-class>customtags.SortNumbersTag</tag-class>
        <body-content>empty</body-content>
        <attribute>
            <name>numbers</name>
            <required>true</required>
            <rtexprvalue>true</rtexprvalue>
        </attribute>
        <attribute>
            <name>order</name>
            <required>false</required>
            <rtexprvalue>true</rtexprvalue>
        </attribute>
    </tag>
</taglib>`,
          },
        ],
      },
      //    pra - 10 jsp-application-context
      {
        key: "jsp-application-context",
        name: "Practical - 10: JSP - Application Context ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 10- JSP - Application Context",
          },
          {
            type: "code",
            fileName: "UserCounterListener.java",
            value: `import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.util.concurrent.atomic.AtomicInteger;

public class UserCounterListener implements HttpSessionListener {

    private static final int MAX_USERS = 3; // Maximum allowed users
    private static AtomicInteger activeUsers = new AtomicInteger(0);

    @Override
    public void sessionCreated(HttpSessionEvent event) {
        int count = activeUsers.incrementAndGet();
        ServletContext context = event.getSession().getServletContext();
        context.setAttribute("activeUsers", count);
        System.out.println("Session Created. Active Users: " + count);
    }

    @Override
    public void sessionDestroyed(HttpSessionEvent event) {
        int count = activeUsers.decrementAndGet();
        ServletContext context = event.getSession().getServletContext();
        context.setAttribute("activeUsers", count);
        System.out.println("Session Destroyed. Active Users: " + count);
    }
}`,
          },
          {
            type: "code",
            fileName: "error.jsp",
            value: `<html>
  <head>
    <title>Access Denied</title>
  </head>
  <body>
    <h2>Access Denied</h2>
    <p>Sorry, the application is full. Please try again later.</p>
  </body>
</html>`,
          },
          {
            type: "code",
            fileName: "index.jsp",
            value: `<%@ page import="jakarta.servlet.ServletContext" %> <% ServletContext context =
request.getServletContext(); Integer activeUsers = (Integer)
context.getAttribute("activeUsers"); if (activeUsers == null) { activeUsers = 0;
} if (activeUsers > 3) { response.sendRedirect("error.jsp"); return; } %>
<html>
  <head>
    <title>Welcome</title>
  </head>
  <body>
    <h2>Welcome to the Application</h2>
    <p>Active Users: <%= activeUsers%></p>
    <p><a href="logout.jsp">Logout</a></p>
  </body>
</html>`,
          },
          {
            type: "code",
            fileName: "logout.jsp",
            value: `<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Logout</title>
  </head>
  <body>
    <% session.invalidate(); response.sendRedirect("index.jsp"); %>
  </body>
</html>`,
          },
          {
            type: "code",
            fileName: "web.xml",
            value: `<listener>
    <listener-class>com.example.UserCounterListener</listener-class>
</listener>`,
          },
        ],
      },
    ],
  },
  //   DCN
  {
    subject_name: "Data Communication and Networking",
    key: "data-communication-and-networking",
    language: "c",
    practicals: [
      // pra - 5 pipe
      {
        key: "pipe",
        name: `Practical - 5: A program to create a pipe and ssend ""Hello"" message.`,
        pageBlocks: [
          {
            type: "heading",
            value: `Practical 5- A program to create a pipe and ssend ""Hello"" message.`,
          },
          {
            type: "code",
            fileName: "pipe_program.c",
            value: `
  #include <stdio.h>
  #include <stdlib.h>
  #include <unistd.h>
  #include <string.h>
  int main()
  {
      int pipefd[2];
      char buffer[20];
      const char *message = "Hello";
      if (pipe(pipefd) == -1)
      {
          perror("pipe");
          exit(EXIT_FAILURE);
      }
      printf("Writing message to pipe...\\n");
      write(pipefd[1], message, strlen(message) + 1);
  
      printf("Reading message from pipe...\\n");
      read(pipefd[0], buffer, sizeof(buffer));
      printf("Received message: %s\\n", buffer);
      close(pipefd[0]);
      close(pipefd[1]);
      return 0;
  }`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Writing message to pipe...
Reading message from pipe...
Received message: Hello`,
          },
        ],
      },
      //    pra - 6
      {
        key: "character-count",
        name: "Practical - 6: Character Count ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 6- Character Count",
          },
          {
            type: "code",
            fileName: "main.c",
            value: `
  #include <stdio.h>
  #include <ctype.h>
  
  int main()
  {
      char text[1000]; // Buffer to store input text
      int char_count = 0;
      int alphabets = 0;
      int digits = 0;
      int spaces = 0;
      int special_chars = 0;
  
      printf("Enter text to analyze: ");
      fgets(text, sizeof(text), stdin);
  
      // Process each character until we hit null terminator
      for (int i = 0; text[i] != '\\0'; i++)
      {
          if (text[i] == '\\n')
          {
              continue; // Skip newline character from fgets
          }
  
          char_count++; // Increment total character count
  
          if (isalpha(text[i]))
          {
              alphabets++;
          }
          else if (isdigit(text[i]))
          {
              digits++;
          }
          else if (isspace(text[i]))
          {
              spaces++;
          }
  
          else
          {
              special_chars++;
          }
      }
  
      // Print results
      printf("\\nCharacter Analysis Results:\\n");
      printf("-------------------------\\n");
      printf("Total Characters: %d\\n", char_count);
      printf("Alphabets: %d\\n", alphabets);
      printf("Digits: %d\\n", digits);
      printf("Spaces: %d\\n", spaces);
      printf("Special Characters: %d\\n", special_chars);
  
      return 0;
  }`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Enter text to analyze: Hello From Pu-Vault !!!

Character Analysis Results:
-------------------------
Total Characters: 23
Alphabets: 16
Digits: 0
Spaces: 3
Special Characters: 4`,
          },
        ],
      },
      //   pra -7 bit-count
      {
        key: "bit-count",
        name: "Practical - 7: Bit Count ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 7- Bit Count",
          },
          {
            type: "code",
            fileName: "main.c",
            value: `
  #include <stdio.h>
  int countSetBits(int n)
  {
      int count = 0;
      while (n > 0)
      {
          if (n % 2 == 1)
          {
              count++;
          }
          n = n / 2;
      }
      return count;
  }
  int main()
  {
      int num;
      printf("Enter an integer: ");
      scanf("%d", &num);
  
      int result = countSetBits(num);
      printf("Number of set bits in %d: %d\\n", num, result);
      return 0;
  }`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Enter an integer: 1200
Number of set bits in 1200: 4`,
          },
        ],
      },
      //   pra - 8 frame-length
      {
        key: "frame-length",
        name: "Practical - 8: Frame Length ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 8- Frame Length",
          },
          {
            type: "code",
            fileName: "main.c",
            value: `
  #include <stdio.h>
  #include <string.h>
  
  #define MAX_MESSAGE_LENGTH 1000
  
  void generateFrames(char *message, int frameLength)
  {
      int messageLength = strlen(message);
      int numFrames = (messageLength + frameLength - 1) / frameLength; // Calculate the number of frames needed
      int i, j;
      printf("Frames:\\n");
  
      for (i = 0; i < numFrames; i++)
      {
          printf("Frame %d: ", i + 1);
          for (j = 0; j < frameLength && (i * frameLength + j) < messageLength; j++)
          {
              printf("%c", message[i * frameLength + j]);
          }
          printf("\\n");
      }
  }
  int main()
  {
      char message[MAX_MESSAGE_LENGTH];
      int frameLength;
  
      printf("Enter the message: ");
      fgets(message, sizeof(message), stdin);
  
      message[strcspn(message, "\\n")] = '\\0'; // Remove trailing newline
  
      printf("Enter the frame length: ");
      scanf("%d", &frameLength);
  
      generateFrames(message, frameLength);
  
      return 0;
  }`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Enter the message: Hello From PU-Vault
Enter the frame length: 4
Frames:
Frame 1: Hell
Frame 2: o Fr
Frame 3: om P
Frame 4: U-Va
Frame 5: ult`,
          },
        ],
      },
    ],
  },
];

// Example Empty box
// {
//     key: "crud-operations",
//     name: "Practical - 2: JDBC Connectivity & Crud Operations ",
//     pageBlocks: [
//       {
//         type: "heading",
//         value: "Practical 2- JDBC Connectivity & Crud Operations",
//       },
//       {
//         type: "code",
//         fileName: "main.java",
//         value: ``,
//       },
//     ],
//   },

//   {
//     type: "code",
//     fileName: "registration.html",
//     value: ``,
//   },
