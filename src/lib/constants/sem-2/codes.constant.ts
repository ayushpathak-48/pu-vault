export const sem2PracticalCodes = [
  // AI
  {
    subject_name: "Artificial Intelligence",
    key: "artificial-intelligence",
    specialization: "ai",
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

def check_win(board, player):
    win_conditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ]

    for condition in win_conditions:
        if board[condition[0]] == board[condition[1]] == board[condition[2]] == player:
            return True

    return False 


def is_board_full(board):
 return " " not in board


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


def is_board_full(board):
 return " " not in board



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
    
    current_player = "O" if current_player == "X" else "X"


if __name__ == "__main__":
 play_game()`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Welcome to Tic-Tac-Toe!


   |   |   
---+---+---
   |   |   
---+---+---
   |   |   


Player X, choose your position (1-9): 1


 X |   |   
---+---+---
   |   |   
---+---+---
   |   |   


Player O, choose your position (1-9): 3


 X |   | O 
---+---+---
   |   |   
---+---+---
   |   |   


Player X, choose your position (1-9): 5


 X |   | O 
---+---+---
   | X |   
---+---+---
   |   |   


Player O, choose your position (1-9): 6


 X |   | O 
---+---+---
   | X | O 
---+---+---
   |   |   


Player X, choose your position (1-9): 9


 X |   | O 
---+---+---
   | X | O 
---+---+---
   |   | X 


Player X wins!
`,
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
      //  p-5 tower-of-hanoi
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
      // p -6 prolog-family-tree
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
            value: `/* Facts */
male(hardik).
male(karan).
male(satish).
male(james).
male(simon).
male(harry).
female(helen).
female(sophie).
female(jess).
female(lily).

parent_of(jack,jess).
parent_of(jack,lily).
parent_of(helen, jess).
parent_of(helen, lily).
parent_of(oliver,james).
parent_of(sophie, james).
parent_of(jess, simon).
parent_of(ali, simon).
parent_of(lily, harry).
parent_of(james, harry).

/* Rules */
father_of(X,Y):- male(X),
    parent_of(X,Y).

mother_of(X,Y):- female(X),
    parent_of(X,Y).

grandfather_of(X,Y):- male(X),
    parent_of(X,Z),
    parent_of(Z,Y).

grandmother_of(X,Y):- female(X),
    parent_of(X,Z),
    parent_of(Z,Y).

sister_of(X,Y):- %(X,Y or Y,X)%
    female(X),
    father_of(F, Y), father_of(F,X),X \\= Y.

sister_of(X,Y):- female(X),
    mother_of(M, Y), mother_of(M,X),X \\= Y.

aunt_of(X,Y):- female(X),
    parent_of(Z,Y), sister_of(Z,X),!.

brother_of(X,Y):- %(X,Y or Y,X)%
    male(X),
    father_of(F, Y), father_of(F,X),X \\= Y.

brother_of(X,Y):- male(X),
    mother_of(M, Y), mother_of(M,X),X \\= Y.

uncle_of(X,Y):-
    parent_of(Z,Y), brother_of(Z,X).

ancestor_of(X,Y):- parent_of(X,Y).
ancestor_of(X,Y):- parent_of(X,Z),
    ancestor_of(Z,Y).

//The given statement is a Prolog rule that defines the relationship father_of(X, Y). Let's break it down:
//father_of(X, Y) :- male(X), parent_of(X, Y).
//Meaning:
//father_of(X, Y) is true if:
//X is male (male(X)).
//X is a parent of Y (parent_of(X, Y)).
//Meaning:
//father_of(X, Y) is true if:
// X is male (male(X)).
// X is a parent of Y (parent_of(X, Y)).`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `father_of(X, Y)
X = jack,   Y = jess ;
X = jack,   Y = lily ;
X = oliver, Y = james ;
X = ali,    Y = simon ;
X = james,  Y = harry ;
-------------------------------------------
mother_of(X, Y)
X = helen,  Y = jess ;
X = helen,  Y = lily ;
X = sophie, Y = james ;
X = jess,   Y = simon ;
X = lily,   Y = harry ;
-------------------------------------------
grandfather_of(X, Y)
X = jack,    Y = simon ;
X = oliver,  Y = harry ;
X = ali,     Y = harry ;
-------------------------------------------
grandmother_of(X, Y)
X = helen,   Y = simon ;
X = sophie,  Y = harry ;
X = jess,    Y = harry ;
-------------------------------------------
sister_of(X, Y)
X = lily, Y = jess ;
X = jess, Y = lily ;
aunt_of(X, Y)
X = lily,  Y = simon ;
X = jess,  Y = harry ;
-------------------------------------------
ancestor_of(X, Y)
X = jack,    Y = jess ;
X = jack,    Y = lily ;
X = jack,    Y = simon ;
X = jack,    Y = harry ;
X = helen,   Y = jess ;
X = helen,   Y = lily ;
X = helen,   Y = simon ;
X = helen,   Y = harry ;
X = oliver,  Y = james ;
X = oliver,  Y = harry ;
X = sophie,  Y = james ;
X = sophie,  Y = harry ;
X = jess,    Y = simon ;
X = jess,    Y = harry ;
X = ali,     Y = simon ;
X = ali,     Y = harry ;
X = lily,    Y = harry ;
X = james,   Y = harry ;`,
          },
        ],
      },
      //  p- 7 n-queens-using-prolog
      {
        key: "n-queens-using-prolog",
        name: "Practical - 7:  N-Queens problem using Prolog.",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 7 -  N-Queens problem using Prolog.",
          },
          {
            type: "code",
            fileName: "n-queens.pl",
            language: "prolog",
            value: `% N-Queens Problem in Prolog
% Entry point: solve the problem for N queens
n_queens(N, Solution) :-
    range(1, N, Ns),
    permutation(Ns, Solution),
    safe(Solution).

% Generate a list from Low to High
range(Low, High, [Low|Rest]) :-
    Low < High,
    Next is Low + 1,
    range(Next, High, Rest).
range(High, High, [High]).

% Check that no two queens attack each other
safe([]).
safe([Q|Others]) :-
    safe(Others),
    no_attack(Q, Others, 1).

% Check that a queen does not attack any others diagonally
no_attack(_, [], _).
no_attack(Q, [Q1|Others], D) :-
    Q =\\= Q1,
    abs(Q - Q1) =\\= D,
    D1 is D + 1,
    no_attack(Q, Others, D1).

% Permutation generator (built-in in some Prolog systems)
permutation([], []).
permutation(List, [H|Perm]) :-
    select(H, List, Rest),
    permutation(Rest, Perm).`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `n_queens(4, Solution).
Solution = [2, 4, 1, 3]
Solution = [3, 1, 4, 2]`,
          },
        ],
      },
      //  p-8 8-puzzleproblem-using-prolog
      {
        key: "8-puzzleproblem-using-prolog",
        name: "Practical - 8:  8 puzzle problem using Prolog.",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 8 -  8 puzzle problem using Prolog.",
          },
          {
            type: "code",
            fileName: "8-puzzle.pl",
            language: "prolog",
            value: `% 8-Puzzle Problem in Prolog

% Define possible moves (Left and Right)
move([X, 0, Z, A, B, C, D, E, F], [0, X, Z, A, B, C, D, E, F]). % move left
move([X, Z, 0, A, B, C, D, E, F], [X, 0, Z, A, B, C, D, E, F]).
move([A, B, C, X, 0, Z, D, E, F], [A, B, C, 0, X, Z, D, E, F]).
move([A, B, C, X, Z, 0, D, E, F], [A, B, C, X, 0, Z, D, E, F]).
move([A, B, C, D, E, F, X, 0, Z], [A, B, C, D, E, F, 0, X, Z]).
move([A, B, C, D, E, F, X, Z, 0], [A, B, C, D, E, F, X, 0, Z]).

% Right moves
move([0, X, Z, A, B, C, D, E, F], [X, 0, Z, A, B, C, D, E, F]).
move([X, 0, Z, A, B, C, D, E, F], [X, Z, 0, A, B, C, D, E, F]).
move([A, B, C, 0, X, Z, D, E, F], [A, B, C, X, 0, Z, D, E, F]).
move([A, B, C, X, 0, Z, D, E, F], [A, B, C, X, Z, 0, D, E, F]).
move([A, B, C, D, E, F, 0, X, Z], [A, B, C, D, E, F, X, 0, Z]).
move([A, B, C, D, E, F, X, 0, Z], [A, B, C, D, E, F, X, Z, 0]).

% Up moves
move([A, B, C, D, E, F, 0, X, Z], [A, B, C, 0, E, F, D, X, Z]).
move([A, B, C, D, E, F, X, 0, Z], [A, B, C, D, 0, F, X, E, Z]).
move([A, B, C, D, E, F, X, Z, 0], [A, B, C, D, E, 0, X, Z, F]).

% Down moves
move([0, B, C, A, E, F, D, H, I], [A, B, C, 0, E, F, D, H, I]).
move([A, 0, C, D, E, F, G, H, I], [A, E, C, D, 0, F, G, H, I]).
move([A, B, 0, D, E, F, G, H, I], [A, B, F, D, E, 0, G, H, I]).

% Solve function using depth-first search
solve(State, Goal) :-
    dfs([State], Goal, Path),
    write('Solution Path:'), nl,
    print_path(Path).

% Depth-First Search
dfs([Goal|Visited], Goal, [Goal|Visited]).
dfs([Current|Visited], Goal, Path) :-
    move(Current, Next),
    \\+ member(Next, Visited),
    dfs([Next, Current | Visited], Goal, Path).

% Print solution path
print_path([]).
print_path([H | T]) :-
    print_state(H),
    nl,
    print_path(T).

% Display board state in 3×3 format
print_state([A, B, C, D, E, F, G, H, I]) :-
    format('~w ~w ~w~n~w ~w ~w~n~w ~w ~w~n', [A, B, C, D, E, F, G, H, I]).`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `solve([1,2,3,4,0,5,6,7,8], [1,2,3,4,5,0,6,7,8]).
Solution Path:
1 2 3
4 5 0
6 7 8

1 2 3
4 0 5
6 7 8`,
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

@WebServlet("/AuthenticateServlet")
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
        response.addHeader("Custom-Header", "This is custom header");
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
import javax.servlet.annotation.WebServlet;

@WebServlet(urlPatterns = { "/RedirectServlet" })
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
        response.sendRedirect("https://www.google.com/search?q=" + location);
    }
}`,
          },
          {
            type: "code",
            language: "html",
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
            value: `
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.*;
import javax.servlet.http.HttpSession;

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
                response.sendRedirect("home.jsp");
            } else {
//session.setAttribute("flag", "Wrong Credentials");
                response.sendRedirect("index.html");
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

}
`,
          },
          {
            type: "code",
            fileName: "home.jsp",
            language: "html",
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
            language: "html",
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
            language: "html",
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
            language: "html",
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
            language: "html",
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
            language: "html",
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
            language: "html",
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
    <listener-class>UserCounterListener</listener-class>
</listener>`,
          },
        ],
      },
      //  pra - 11 web-service
      {
        key: "web-service",
        name: "Practical - 11: Simple RESTful Service ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 11- Simple RESTful Service",
          },
          {
            type: "code",
            fileName: "CurrencyServlet.java",
            value: `// Simple RESTful Service
// Develop a simple JAX-RS service that provides currency conversion.

package com.example;

import java.io.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.*;
import javax.servlet.http.*;

@WebServlet("/convert")
public class CurrencyServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String from = request.getParameter("from");
        String to = request.getParameter("to");
        double amount = Double.parseDouble(request.getParameter("amount"));

        double result = convert(from, to, amount);

        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();
        out.println("Converted Amount: " + result);
    }

    private double convert(String from, String to, double amount) {
        double usd = 83, inr = 1, eur = 90;

        double fromRate = from.equalsIgnoreCase("USD") ? usd :
                          from.equalsIgnoreCase("EUR") ? eur : inr;

        double toRate = to.equalsIgnoreCase("USD") ? usd :
                        to.equalsIgnoreCase("EUR") ? eur : inr;

        return (amount / fromRate) * toRate;
    }
}`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `http://localhost:8080/Practical_111/convert?from=USD&to=INR&amount=10

Converted Amount: 10.0`,
          },
        ],
      },
      //  pra - 12 data-driven-restful-service
      {
        key: "data-driven-restful-service",
        name: "Practical - 12: Data Driven RESTful Service",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 12 - Data Driven RESTful Service",
          },
          {
            type: "code",
            fileName: "Index.html",
            language: "html",
            value: `<!DOCTYPE html>
<html>
<head>
    <title>Student Registration</title>
</head>
<body>

<h2>Student Registration Form</h2>

<form action="http://localhost:8081/Practical_122/webapi/student/register" method="post">

    Name: <input type="text" name="name"><br><br>
    Email: <input type="email" name="email"><br><br>
    Course: <input type="text" name="course"><br><br>

    <input type="submit" value="Register">

</form>

</body>
</html>`,
          },
          {
            type: "code",
            fileName: "StudentService.java",
            value: `package com.example;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.FormParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/student")
public class StudentService {

    @POST
    @Path("/register")
    @Produces(MediaType.TEXT_PLAIN)
    public String registerStudent(
            @FormParam("name") String name,
            @FormParam("email") String email,
            @FormParam("course") String course) {

        return "Student Registered Successfully!\\n"
                + "Name: " + name
                + "\\nEmail: " + email
                + "\\nCourse: " + course;
    }
}`,
          },
          {
            type: "code",
            fileName: "MyApplication.java",
            value: `import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("/webapi")
public class MyApplication extends Application {
}`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Student Registered Successfully!
Name: Demo User
Email: demo@example.com
Course: MCA`,
          },
        ],
      },
      //  pra - 13 hibernate-crud
      {
        key: "hibernate-crud",
        name: "Practical - 13: Hibernate CRUD",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 13 - Hibernate CRUD",
          },
          {
            type: "code",
            fileName: "Student.java",
            value: `import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Student {
    @Id
    private int id;
    private String name;

    private String course;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCourse() {
      return course;
    }

    public void setCourse(String course) {
      this.course = course;
    }

    @Override
    public String toString() {
      return "Student{id=" + id + ", name='" + name + "', course='" + course + "'}";
    }
}`,
          },
          {
        type: "code",
        fileName: "HibernateUtil.java",
        value: `import org.hibernate.SessionFactory;
  import org.hibernate.cfg.Configuration;

  public class HibernateUtil {
    private static final SessionFactory sessionFactory = buildSessionFactory();

    private static SessionFactory buildSessionFactory() {
      try {
        return new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Student.class).buildSessionFactory();
      } catch (Throwable ex) {
        throw new ExceptionInInitializerError(ex);
      }
    }

    public static SessionFactory getSessionFactory() {
      return sessionFactory;
    }
  }`,
        },
        {
        type: "code",
        fileName: "StudentCrudDemo.java",
        value: `import org.hibernate.Session;
  import org.hibernate.Transaction;

  public class StudentCrudDemo {
    public static void main(String[] args) {
      // CREATE
      Session session = HibernateUtil.getSessionFactory().openSession();
      Transaction tx = session.beginTransaction();

      Student s = new Student();
      s.setId(101);
      s.setName("Aayush");
      s.setCourse("MCA");
      session.save(s);
      tx.commit();
      session.close();

      // READ
      session = HibernateUtil.getSessionFactory().openSession();
      Student fetched = session.get(Student.class, 101);
      System.out.println("Fetched: " + fetched);
      session.close();

      // UPDATE
      session = HibernateUtil.getSessionFactory().openSession();
      tx = session.beginTransaction();
      Student update = session.get(Student.class, 101);
      update.setCourse("MCA-AI");
      session.update(update);
      tx.commit();
      session.close();

      // DELETE
      session = HibernateUtil.getSessionFactory().openSession();
      tx = session.beginTransaction();
      Student delete = session.get(Student.class, 101);
      session.delete(delete);
      tx.commit();
      session.close();

      HibernateUtil.getSessionFactory().close();
    }
  }`,
        },
        {
        type: "code",
        fileName: "hibernate.cfg.xml",
        language: "html",
        value: `<?xml version='1.0' encoding='utf-8'?>
  <!DOCTYPE hibernate-configuration PUBLIC
      "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
      "http://hibernate.sourceforge.net/hibernate-configuration-3.0.dtd">
  <hibernate-configuration>
    <session-factory>
      <property name="hibernate.connection.driver_class">com.mysql.cj.jdbc.Driver</property>
      <property name="hibernate.connection.url">jdbc:mysql://localhost:3306/ajp</property>
      <property name="hibernate.connection.username">root</property>
      <property name="hibernate.connection.password"></property>

      <property name="hibernate.dialect">org.hibernate.dialect.MySQL8Dialect</property>
      <property name="hibernate.hbm2ddl.auto">update</property>
      <property name="hibernate.show_sql">true</property>

      <mapping class="Student"/>
    </session-factory>
  </hibernate-configuration>`,
        },
        {
        type: "code",
        language: "text",
        is_output: true,
        value: `Fetched: Student{id=101, name='Aayush', course='MCA'}
  Hibernate: update Student set course=? where id=?
  Hibernate: delete from Student where id=?`,
          },
        ],
      },
      //  pra - 14 jax-rs-client
      {
        key: "jax-rs-client",
        name: "Practical - 14: JAX-RS Client",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 14 - JAX-RS Client",
          },
          {
            type: "code",
            fileName: "index.jsp",
            language: "html",
            value: `<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>JAX-RS Client</title>
</head>
<body>
<h2>Student Data</h2>
<pre>
\${data}
</pre>
</body>
</html>`,
          },
          {
            type: "code",
            fileName: "ClientServlet.java",
            value: `package com.servlet;

import com.client.MyClient;
import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/client")
public class ClientServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String result = MyClient.getData();

        request.setAttribute("data", result);

        request.getRequestDispatcher("index.jsp").forward(request, response);
    }
}`,
          },
          {
            type: "code",
            fileName: "MyApplication.java",
            value: `package com.api;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("/webapi")
public class ApplicationConfig extends Application {
}`,
          },
          {
            type: "code",
            fileName: "MyClient.java",
            value: `package com.client;

import javax.ws.rs.client.*;
import javax.ws.rs.core.MediaType;

public class MyClient {

    private static final String URL = "http://localhost:8080/Practical_14/webapi/students";

    public static String getData() {
        Client client = ClientBuilder.newClient();
        String response = client
                .target(URL)
                .request(MediaType.APPLICATION_JSON)
                .get(String.class);
        client.close();
        return response;
    }
}`,
          },
          {
            type: "code",
            fileName: "StudentResource.java",
            value: `package com.api;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/students")
public class StudentResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getStudents() {
        return "[{\\"id\\":1,\\"name\\":\\"Abc\\"},{\\"id\\":2,\\"name\\":\\"\\"}]";
    }
}`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `[
  {"id":1,"name":"Abc"},
  {"id":2,"name":""}
]`,
          },
        ],
      },
      //  pra - 15 auth-service-jax-rs-client
      {
        key: "auth-service-jax-rs-client",
        name: "Practical - 15: Authentication using JAX-RS Client",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 15 - Authentication using JAX-RS Client",
          },
          {
            type: "code",
            fileName: "index.jsp",
            language: "html",
            value: `<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Login Page</title>
</head>
<body>
<h2>Login Form</h2>
<form action="login" method="post">
    Username: <input type="text" name="username"><br><br>
    Password: <input type="password" name="password"><br><br>
    <input type="submit" value="Login">
</form>

<br>
<h3>
  \${message}
</h3>
</body>
</html>`,
          },
          {
            type: "code",
            fileName: "AuthClient.java",
            value: `package com.client;

import javax.ws.rs.client.*;
import javax.ws.rs.core.*;

public class AuthClient {
    private static final String URL = "http://localhost:8080/Practical_15/webapi/auth";

    public static String authenticate(String username, String password) {
        System.out.println("Calling API: " + URL);
        Client client = ClientBuilder.newClient();
        Form form = new Form();
        form.param("username", username);
        form.param("password", password);

        String response = client.target(URL)
                .request(MediaType.TEXT_PLAIN)
                .post(Entity.entity(form, MediaType.APPLICATION_FORM_URLENCODED), String.class);

        client.close();
        return response;
    }
}`,
          },
          {
            type: "code",
            fileName: "AuthResource.java",
            value: `package com.api;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/auth")
public class AuthResource {

    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.TEXT_PLAIN)
    public String login(@FormParam("username") String username,
                        @FormParam("password") String password) {
        System.out.println("API Called: " + username);
        if ("admin".equals(username) && "1234".equals(password)) {
            return "SUCCESS";
        } else {
            return "FAIL";
        }
    }
}`,
          },
          {
            type: "code",
            fileName: "LoginServlet.java",
            value: `package com.servlet;

import com.client.AuthClient;
import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        System.out.println("Servlet Received: " + username);
        String result = AuthClient.authenticate(username, password);

        if ("SUCCESS".equals(result)) {
            request.setAttribute("message", "Login Successful!");
        } else {
            request.setAttribute("message", "Invalid Credentials!");
        }

        request.getRequestDispatcher("index.jsp").forward(request, response);
    }
}`,
          },
          {
            type: "code",
            fileName: "MyApplication.java",
            value: `package com.api;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("/webapi")
public class ApplicationConfig extends Application {
}`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Username: admin
Password: 1234
Login Successful!`,
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
        name: `Practical - 5: A program to create a pipe and send ""Hello"" message.`,
        pageBlocks: [
          {
            type: "heading",
            value: `Practical 5- A program to create a pipe and send ""Hello"" message.`,
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
      // pra - 9 byte-stuffing
      {
        key: "byte-stuffing",
        name: "Practical - 9: Byte Stuffing ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 9 - Byte Stuffing",
          },
          {
            type: "code",
            fileName: "main.c",
            value: `#include <stdio.h>
#include <string.h>

int main() {
    char frame[50][50], str[50][50];
    char flag[10];
    strcpy(flag, "flag");
    char esc[10];
    strcpy(esc, "esc");
    int i, k = 0, n;
    strcpy(frame[k++], flag);
    printf("Enter length of String : \\n");
    scanf("%d", &n);
    printf("Enter the String: ");
    getchar(); // to clear the buffer
    for (i = 0; i < n; i++) {
        fgets(str[i], sizeof(str[i]), stdin);
        str[i][strcspn(str[i], "\\n")] = '\\0'; // remove newline character
    }
    printf("\\nYou entered :\\n");
    for (i = 0; i < n; i++) {
        puts(str[i]);
    }
    printf("\\n");
    for (i = 0; i < n; i++) {
        if (strcmp(str[i], flag) != 0 && strcmp(str[i], esc) != 0) {
            strcpy(frame[k++], str[i]);
        } else {
            strcpy(frame[k++], esc);
            strcpy(frame[k++], str[i]);
        }
    }
    strcpy(frame[k++], flag);
    printf("------------------------------\\n\\n");
    printf("Byte stuffing at sender side:\\n\\n");
    printf("------------------------------\\n\\n");
    for (i = 0; i < k; i++) {
        printf("%s\\t", frame[i]);
    }
    return 0;
}
`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Enter length of String : 
3
Enter the String: Hello
From
Pu-vault

You entered :
Hello
From
Pu-vault

------------------------------

Byte stuffing at sender side:

------------------------------

flag	Hello	From	Pu-vault	flag`,
          },
        ],
      },
      //  pra - 10 bit-stuffing
      {
        key: "bit-stuffing",
        name: "Practical - 10: Bit Stuffing ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 10 - Bit Stuffing",
          },
          {
            type: "code",
            fileName: "main.c",
            value: `#include <stdio.h>
#include <string.h>


int main() {
    char data[100], stuffedData[200];
    int i, count = 0, j = 0;
    
    printf("Enter the data: ");
    scanf("%s", data);
    
    for(i = 0; i < strlen(data); i++) {
        if(data[i] == '1') {
            count++;
            stuffedData[j++] = data[i];
        } else {
            count = 0;
            stuffedData[j++] = data[i];
        }
        
        if(count == 5) {
            count = 0;
            stuffedData[j++] = '0';
        }
    }
    
    stuffedData[j] = '\\0';
    
    printf("Data after bit stuffing: %s\\n", stuffedData);
    
    return 0;
}`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Enter the data: 11111110111111111
Data after bit stuffing: 1111101101111101111`,
          },
        ],
      },
      // pra - 11 error-detection-lrc-and-checksum
      {
        key: "error-detection-lrc-and-checksum",
        name: "Practical - 11: Error Detection: LRC and Checksum ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 11 - Error Detection: LRC and Checksum",
          },
          {
            type: "code",
            fileName: "main.c",
            value: `#include <stdio.h>

// Function to calculate LRC
unsigned char calculateLRC(unsigned char *data, int length) {
    unsigned char lrc = 0;
    for (int i = 0; i < length; i++) {
        lrc += data[i];
    }
    // Take the one's complement of the sum
    lrc = (~lrc) + 1;
    return lrc;
}

// Function to print a byte in binary format
void printBinary(unsigned char byte) {
    for (int i = 7; i >= 0; i--) {
        printf("%d", (byte >> i) & 1);
    }
}

int main() {
    // Example data to be sent (replace this with your actual data)
    unsigned char dataToSend[] = {0x41, 0x42, 0x43, 0x44}; // "ABCD" in ASCII
    int dataLength = sizeof(dataToSend) / sizeof(dataToSend[0]);

    // Calculate LRC for the data
    unsigned char lrc = calculateLRC(dataToSend, dataLength);

    // Append LRC to the data
    dataToSend[dataLength] = lrc;

    // Display the data with appended LRC in binary format
    printf("Data with appended LRC (in binary):\\n");
    for (int i = 0; i < dataLength + 1; i++) {
        printBinary(dataToSend[i]);
        printf(" ");
    }
    printf("\\n");

    return 0;
}`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Data with appended LRC (in binary):
01000001 01000010 01000011 01000100 11110110 `,
          },
        ],
      },
      //  pra - 12 error-detection-crc
      {
        key: "error-detection-crc",
        name: "Practical - 12: Error Detection: CRC ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 12 - Error Detection: CRC",
          },
          {
            type: "code",
            fileName: "main.c",
            value: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <sys/wait.h>  // ✅ Added this header to fix "implicit declaration of wait()"

#define FIFO_NAME "/tmp/crc_fifo"
#define MAX_SIZE 32  // Max length of binary divisor

// Function to check if divisor is valid
int is_valid_divisor(const char *divisor) {
    int len = strlen(divisor);

    // A valid CRC divisor must:
    // - Be at least 2 bits long
    // - Start and end with '1'
    if (len < 2 || divisor[0] != '1' || divisor[len - 1] != '1') {
        return 0;  // Invalid
    }
    return 1;  // Valid
}

int main() {
    int fd;
    char divisor[MAX_SIZE];
    pid_t pid;

    // Create FIFO (named pipe)
    mkfifo(FIFO_NAME, 0666);

    // Forking process to create sender and receiver
    pid = fork();

    if (pid < 0) {
        perror("Fork failed");
        exit(1);
    }

    // Child Process: Receiver
    if (pid == 0) {
        sleep(1);  // Small delay to ensure sender writes first
        printf("\\n[Receiver] Waiting for divisor...\\n");

        // Open FIFO for reading
        fd = open(FIFO_NAME, O_RDONLY);
        if (fd == -1) {
            perror("Error opening FIFO for reading");
            exit(1);
        }

        // Read divisor from FIFO
        read(fd, divisor, MAX_SIZE);
        close(fd);

        printf("[Receiver] Received divisor: %s\\n", divisor);

        // Validate divisor
        if (is_valid_divisor(divisor)) {
            printf("[Receiver] ✅ Valid CRC divisor.\\n");
        } else {
            printf("[Receiver] ❌ Invalid CRC divisor. (Must start and end with 1 and be at least 2 bits long)\\n");
        }

        // Remove FIFO
        unlink(FIFO_NAME);

    } 
    // Parent Process: Sender
    else {
        printf("[Sender] Enter CRC Divisor in binary format: ");
        scanf("%s", divisor);

        // Open FIFO for writing
        fd = open(FIFO_NAME, O_WRONLY);
        if (fd == -1) {
            perror("Error opening FIFO for writing");
            exit(1);
        }

        // Write divisor to FIFO
        write(fd, divisor, strlen(divisor) + 1);
        close(fd);

        printf("[Sender] Divisor sent to receiver.\\n");

        // ✅ Fix: Use wait() correctly
        wait(NULL);  // Wait for child process to complete
    }

    return 0;
}`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `[Sender] Enter CRC Divisor in binary format: 1111
[Sender] Divisor sent to receiver.
[Receiver] Waiting for divisor...
[Receiver] Received divisor: 1111
[Receiver] ✅ Valid CRC divisor.`,
          },
        ],
      },
      //  pra - 13 error-hamming
      {
        key: "error-hamming",
        name: "Practical - 13: Error Correction: Hamming Code ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 13 - Error Correction: Hamming Code",
          },
          {
            type: "code",
            fileName: "main.c",
            value: `#include <stdio.h>
#include <math.h>
int input[32];
int code[32];
int ham_calc(int, int);
void main()
{
    int n, i, p_n = 0, c_l, j, k;
    printf("Please enter the length of the Data Word: ");
    scanf("%d", &n);
    printf("Please enter the Data Word:\\n");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &input[i]);
    }

    i = 0;
    while (n > (int)pow(2, i) - (i + 1))
    {
        p_n++;
        i++;
    }

    c_l = p_n + n;

    j = k = 0;
    for (i = 0; i < c_l; i++)
    {

        if (i == ((int)pow(2, k) - 1))
        {
            code[i] = 0;
            k++;
        }
        else
        {
            code[i] = input[j];
            j++;
        }
    }
    for (i = 0; i < p_n; i++)
    {
        int position = (int)pow(2, i);
        int value = ham_calc(position, c_l);
        code[position - 1] = value;
    }
    printf("\\nThe calculated Code Word is: ");
    for (i = 0; i < c_l; i++)
        printf("%d", code[i]);
    printf("\\n");
    printf("Please enter the received Code Word:\\n");
    for (i = 0; i < c_l; i++)
        scanf("%d", &code[i]);

    int error_pos = 0;
    for (i = 0; i < p_n; i++)
    {
        int position = (int)pow(2, i);
        int value = ham_calc(position, c_l);
        if (value != 0)
            error_pos += position;
    }
    if (error_pos == 1)
        printf("The received Code Word is correct.\\n");
    else
        printf("Error at bit position: %d\\n", error_pos);
}
int ham_calc(int position, int c_l)
{
    int count = 0, i, j;
    i = position - 1;
    while (i < c_l)
    {
        for (j = i; j < i + position; j++)
        {
            if (code[j] == 1)
                count++;
        }
        i = i + 2 * position;
    }
    if (count % 2 == 0)
        return 0;
    else
        return 1;
}`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Please enter the length of the Data Word: 4
Please enter the Data Word:
1 0 1 1

The calculated Code Word is: 0110011
Please enter the received Code Word:
0110111
Error at bit position: 5`,
          },
        ],
      },
      //  pra - 14 leaky-bucket
      {
        key: "leaky-bucket",
        name: "Practical - 14: Congestion Control Protocols: Leaky Bucket ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 14 - Congestion Control Protocols: Leaky Bucket",
          },
          {
            type: "code",
            fileName: "main.c",
            value: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h> // For sleep function

int main()
{
    int i, packets[10], content = 0, newcontent, time, clk, bucket_size, output_rate;

    // Generate random packet sizes
    for (i = 0; i < 5; i++)
    {
        packets[i] = rand() % 10;
        if (packets[i] == 0)
            i--; // Regenerate if packet size is 0
    }

    printf("\\nEnter output rate of the bucket: ");
    scanf("%d", &output_rate);

    printf("\\nEnter Bucket size: ");
    scanf("%d", &bucket_size);

    for (i = 0; i < 5; ++i)
    {
        if ((packets[i] + content) > bucket_size)
        {
            if (packets[i] > bucket_size)
                printf("\\nIncoming packet size %d greater than the size of the bucket\\n", packets[i]);
            else
                printf("\\nBucket size exceeded\\n");
        }
        else
        {
            newcontent = packets[i];
            content += newcontent;
            printf("\\nIncoming Packet: %d\\n", newcontent);
            printf("Transmission left: %d\\n", content);
            time = rand() % 10;
            printf("Next packet will come at: %d\\n", time);

            for (clk = 0; clk < time && content > 0; ++clk)
            {
                printf("\\nLeft time: %d", (time - clk));
                sleep(1);

                if (content > 0)
                {
                    printf("\\nTransmitted\\n");
                    if (content < output_rate)
                        content = 0;
                    else
                        content -= output_rate;
                    printf("Bytes remaining: %d\\n", content);
                }
                else
                {
                    printf("\\nNo packets to send\\n");
                }
            }
        }
    }

    return 0;
}`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Enter output rate of the bucket: 4

Enter Bucket size: 10

Incoming Packet: 6
Transmission left: 6
Next packet will come at: 3

Left time: 3
Transmitted
Bytes remaining: 2

Left time: 2
Transmitted
Bytes remaining: 0

Left time: 1
No packets to send

Incoming Packet: 2
Transmission left: 2
Next packet will come at: 4

Left time: 4
Transmitted
Bytes remaining: 0

Left time: 3
No packets to send

Incoming Packet: 7
Transmission left: 7
Next packet will come at: 2

Left time: 2
Transmitted
Bytes remaining: 3

Left time: 1
Transmitted
Bytes remaining: 0

Incoming Packet: 3
Transmission left: 3
Next packet will come at: 6

Left time: 6
Transmitted
Bytes remaining: 0

Left time: 5
No packets to send

Incoming Packet: 5
Transmission left: 5
Next packet will come at: 1

Left time: 1
Transmitted
Bytes remaining: 1`,
          },
        ],
      },
      //  pra - 15 token-bucket
      {
        key: "token-bucket",
        name: "Practical - 15: Congestion Control Protocols: Token Bucket ",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 15 - Congestion Control Protocols: Token Bucket",
          },
          {
            type: "code",
            fileName: "main.c",
            value: `#include <stdio.h>
#include <stdbool.h>
#include <unistd.h> // for usleep function

int main()
{
    int bucket_size, output_rate;

    // User input for bucket size and output rate
    printf("Enter the bucket size: ");
    scanf("%d", &bucket_size);
    printf("Enter the output rate of the bucket: ");
    scanf("%d", &output_rate);

    int bucket = 0; // Current size of the bucket

    while (true)
    {
        // Generate some data, e.g., incoming packets
        int incoming_packets;
        printf("Enter the number of incoming packets: ");
        scanf("%d", &incoming_packets);

        // Add incoming packets to the bucket
        if (bucket + incoming_packets <= bucket_size)
        {
            bucket += incoming_packets;
        }
        else
        {
            printf("Bucket overflow! Dropping %d packets.\\n", incoming_packets + bucket - bucket_size);
            bucket = bucket_size; // Bucket is full
        }

        // Transmit data from the bucket
        if (bucket >= output_rate)
        {
            printf("%d packets transmitted.\\n", output_rate);
            bucket -= output_rate;
        }
        else
        {
            printf("Bucket empty.\\n");
        }

        // Wait for a second before the next iteration
        usleep(1000000); // Sleep for 1 second (1 million microseconds)
    }

    return 0;
}`,
          },
          {
            type: "code",
            fileName: "vrc.c",
            value: `
#include <stdio.h>

int main()
{
    int data[10], vrc = 0;

    // Input data
    printf("Enter 7 bits of data: ");
    for (int i = 0; i < 7; i++)
    {
        scanf("%d", &data[i]);
    }

    // Calculate VRC
    for (int i = 0; i < 7; i++)
    {
        vrc ^= data[i];
    }

    // Display VRC
    printf("VRC bit is: %d\\n", vrc);

    return 0;
}`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Enter the bucket size: 10
Enter the output rate of the bucket: 4

Enter the number of incoming packets: 5
4 packets transmitted.
Enter the number of incoming packets: 6
Bucket overflow! Dropping 1 packets.
4 packets transmitted.
Enter the number of incoming packets: 3
Bucket empty.
Enter the number of incoming packets: 4
4 packets transmitted.
Enter the number of incoming packets: 5
4 packets transmitted.
--------------------------------------------------------------
Enter 7 bits of data: 1 0 1 1 0 1 1
VRC bit is: 1`,
          },
        ],
      },
    ],
  },
  // FSW
  {
    subject_name: "Full Stack Web Development",
    key: "fswd",
    specialization: "fswd",
    language: "java",
    practicals: [
      // pra - 1 date-time
      {
        key: "date-time",
        name: `Practical - 1: Date & Time`,
        pageBlocks: [
          {
            type: "heading",
            value: `Practical - 1: Date & Time`,
          },
          {
            type: "code",
            fileName: "Clock.java",
            value: `
  // Clock Class Example - Creating an Instance of Clock

import java.time.Clock;

public class Clock {
    // Main method
    public static void main(String[] args) {
        // Creating a Clock instance using systemUTC() method
        Clock clock = Clock.systemUTC();
        // Getting the current instant defined by clock
        System.out.println("UTC time = " + clock.instant());
    }
}`,
          },
          {
            type: "code",
            fileName: "Clock1.java",
            value: `
 // Clock Class Example - Using systemDefaultZone() Method

import java.time.Clock;

public class Clock1 {
    // Main method
    public static void main(String[] args) {
        // Creating a Clock instance using systemDefaultZone() method
        Clock clock = Clock.systemDefaultZone();

        // Printing system clock details
        System.out.println(clock);

        // Printing the time zone of the clock instance
        System.out.println("Time Zone : " + clock.getZone());
    }
}`,
          },
          // Date Time Formater
          {
            type: "code",
            fileName: "DateAndTimeFormatter.java",
            value: `import java.time.LocalDateTime; // Import the LocalDateTime class
import java.time.format.DateTimeFormatter; // Import the DateTimeFormatter class

public class DateAndTimeFormatter {
    public static void main(String[] args) {
        LocalDateTime myDateObj = LocalDateTime.now();
        System.out.println("Before formatting: " + myDateObj);
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");

        String formattedDate = myDateObj.format(myFormatObj);
        System.out.println("After formatting: " + formattedDate);
    }
}
`,
          },
          // Local Time
          {
            type: "code",
            fileName: "LocalDateAndTime.java",
            value: `import java.time.LocalDateTime; // import the LocalDateTime class

public class LocalDateAndTime {
    public static void main(String[] args) {
        LocalDateTime myObj = LocalDateTime.now();
        System.out.println(myObj);
    }
}
`,
          },
          // Local Date
          {
            type: "code",
            fileName: "Date.java",
            value: `
// LocalDate example
import java.time.LocalDate; // import the LocalDate class

public class Date {
    public static void main(String[] args) {
        LocalDate myObj = LocalDate.now(); // Create a date object
        System.out.println(myObj); // Display the current date
    }
}
`,
          },
          {
            type: "code",
            fileName: "Date1.java",
            value: `import java.time.LocalDate;

public class Date1 {
    public static void main(String[] args) {
        // Using now() to get the current date
        LocalDate currentDate = LocalDate.now();
        // Printing the current date
        System.out.println("Current Date: " + currentDate);
    }
}`,
          },
          {
            type: "code",
            fileName: "Date2.java",
            value: `import java.time.LocalDate;

public class Date2 {
    public static void main(String[] args) {
        LocalDate date = LocalDate.now();
        LocalDate yesterday = date.minusDays(1);
        LocalDate tomorrow = yesterday.plusDays(2);
        System.out.println("Today date: " + date);
        System.out.println("Yesterday date: " + yesterday);
        System.out.println("Tomorrow date: " + tomorrow);
    }
}`,
          },
          {
            type: "code",
            fileName: "Date3.java",
            value: `import java.time.LocalDate;

public class Date3 {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.of(2017, 1, 13);
        System.out.println(date1.isLeapYear()); // Checking leap year for 2017

        LocalDate date2 = LocalDate.of(2016, 9, 23);
        System.out.println(date2.isLeapYear()); // Checking leap year for 2016
    }
}`,
          },

          //  Month Day
          {
            type: "code",
            fileName: "Month.java",
            value: `// MonthDay Class Example - Creating an Instance of MonthDay

import java.time.Month;
import java.time.MonthDay;

public class Example {
    // Main driver method
    public static void main(String[] args) {
        // Creating an object of MonthDay class
        MonthDay monthday = MonthDay.of(Month.MARCH, 14);
        // Print and display the value stored
        System.out.println(monthday);
    }
}`,
          },
          {
            type: "code",
            fileName: "Month1.java",
            value: `// MonthDay Class Example - Parsing a MonthDay from Text

import java.time.MonthDay;

public class Month1 {
    // Main driver method
    public static void main(String[] args) {
        // Store an instance of MonthDay from text --03-14
        MonthDay monthday = MonthDay.parse("--03-14");

        // Display the month using the instance of class
        System.out.println(monthday.getMonth());
    }
}`,
          },

          // Offset Time
          {
            type: "code",
            fileName: "OffSetTime1.java",
            value: `// OffsetTime Class Example - Using now() Method

import java.time.OffsetTime;
import java.time.temporal.ChronoField;

public class OffSetTime1 {

    // Main driver method
    public static void main(String[] args) {
        // Creating an object of OffsetTime class
        OffsetTime offset = OffsetTime.now();

        int h = offset.get(ChronoField.HOUR_OF_DAY); // Get hour of day
        System.out.println(h);

        int m = offset.get(ChronoField.MINUTE_OF_DAY); // Get minute of day
        System.out.println(m);

        int s = offset.get(ChronoField.SECOND_OF_DAY); // Get second of day
        System.out.println(s);
    }
}`,
          },
          {
            type: "code",
            fileName: "OffSetTime2.java",
            value: `// OffsetTime Class Example - Using getHour() Method

import java.time.OffsetTime;

public class OffSetTime2 {
    public static void main(String[] args) {
        // Creating an instance of OffsetTime class
        OffsetTime offset = OffsetTime.now();
        // Getting the hour of the day field
        int h = offset.getHour();
        // Print and display the hours
        System.out.println(h + " hours");
    }
}`,
          },
          {
            type: "code",
            fileName: "OffSetTime3.java",
            value: `// OffsetDateTime Class Example - Using format() Method

import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;

public class OffSetTime3 {
    public static void main(String[] args) {
        // Parse the date1
        OffsetDateTime date1 = OffsetDateTime.parse("2018-12-12T13:30:30+05:00");

        System.out.println("Date1: " + date1);

        // Using ISO_TIME formatter
        DateTimeFormatter formatter = DateTimeFormatter.ISO_TIME;
        System.out.println(formatter.format(date1));
    }
}`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `
Clock ->                 UTC time = 2025-03-06T17:02:17.199659857Z

Clock1 ->                SystemClock[GMT]
                         Time Zone : GMT

DateAndTimeFormatter ->  Before formatting: 2025-03-06T17:19:45.072476315
                         After formatting: 06-03-2025 17:19:45
                         
LocalDateAndTime ->      2025-03-06T17:22:55.041050549

Date ->                  2025-03-06

Date1 ->                 Current Date: 2025-03-06

Date2 ->                 Today date: 2025-03-06
                         Yesterday date: 2025-03-05
                         Tomorrow date: 2025-03-07

Date3 ->                 false
                         true

Month ->                 --03-14

Month1 ->                MARCH

OffSetTime1 ->           17
                         1063
                         63783

OffSetTime2 ->           17 hours

OffSetTime3 ->           Date1: 2018-12-12T13:30:30+05:00
                         13:30:30+05:00
`,
          },
        ],
      },
      // Practical -2
      {
        key: "type-conversion",
        name: `Practical - 2: Conversion`,
        pageBlocks: [
          {
            type: "heading",
            value: `Practical - 2: Conversion`,
          },
          {
            type: "code",
            fileName: "BinarytoDecimal.java",
            value: `
 public class BinarytoDecimal {
    public static void main(String[] args) {
        String binary = "1010";
        int decimal = Integer.parseInt(binary, 2);
        System.out.println("Binary to Decimal: " + decimal);
    }
}`,
          },
          {
            type: "code",
            fileName: "BooleantoString.java",
            value: `
public class BooleantoString {
    public static void main(String[] args) {
        boolean boolValue = true;
        String booleanToString = String.valueOf(boolValue);
        System.out.println("Boolean to String: " + booleanToString);
    }
}`,
          },
          {
            type: "code",
            fileName: "ChartoInt.java",
            value: `
public class ChartoInt {
    public static void main(String args[]) {
        char ch = 'A';
        int charToInt = (int) ch;

        System.out.println("Input Character: " + ch);
        System.out.println("Converted Integer: " + charToInt);
    }
}`,
          },
          {
            type: "code",
            fileName: "DatetoString.java",
            value: `
import java.text.SimpleDateFormat;
import java.util.Date;

public class DatetoString {
    public static void main(String[] args) {
        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        String dateStr = formatter.format(date);

        System.out.println("Input Date: " + date);
        System.out.println("Formatted Date String: " + dateStr);
    }
}`,
          },
          {
            type: "code",
            fileName: "DatetoTimeStamp.java",
            value: `
import java.util.Date;

public class DatetoTimeStamp {
    public static void main(String[] args) {
        Date date = new Date();
        long timestamp = date.getTime();
        System.out.println("Date to Timestamp: " + timestamp);
    }
}`,
          },
          {
            type: "code",
            fileName: "DecimaltoBinary.java",
            value: `
public class DecimaltoBinary {
    public static void main(String[] args) {
        int decimal = 10;
        // Decimal to Binary
        String binary = Integer.toBinaryString(decimal);
        System.out.println("Decimal to binary : " + binary);
        // decimal to Octal
        String octal = Integer.toOctalString(decimal);
        System.out.println("decimal to octal: " + octal);
        //  decimal to hex
         String hex = Integer.toHexString(decimal);
        System.out.println("Decimal to hex : " + hex);
    }
}`,
          },
          {
            type: "code",
            fileName: "DoubletoInt.java",
            value: `
public class DoubletoInt {
    public static void main(String args[]) {
        double dbl = 45.67;
        int num = (int) dbl;

        System.out.println("Input Double: " + dbl);
        System.out.println("Converted Integer: " + num);
    }
}`,
          },
          {
            type: "code",
            fileName: "DoubletoString.java",
            value: `
class DobletoString {
    public static void main(String[] args) {
        double num = 78.9;
        String str = Double.toString(num);

        System.out.println("Input Double: " + num);
        System.out.println("Converted String: " + str);
    }
}`,
          },
          {
            type: "code",
            fileName: "HextoDecimal.java",
            value: `
public class HextoDecimal {
    public static void main(String[] args) {
        String hex = "A";
        int decimal = Integer.parseInt(hex, 16);
        System.out.println("Hex to decimal : " + decimal);
    }
}`,
          },
          {
            type: "code",
            fileName: "InttoChar.java",
            value: `
class InttoChar {
    public static void main(String[] args) {
        int num = 65;
        char intToChar = (char) num;
        System.out.println("Int to Char: " + intToChar);
    }
}`,
          },
          {
            type: "code",
            fileName: "InttoDouble.java",
            value: `
public class InttoDouble {
    public static void main(String args[]) {
        int num = 25;
        double dbl = num;

        System.out.println("Input Integer: " + num);
        System.out.println("Converted Double: " + dbl);
    }
}`,
          },
          {
            type: "code",
            fileName: "InttoLong.java",
            value: `
public class InttoLong {
    public static void main(String args[]) {
        int num = 42;
        long lng = num;

        System.out.println("Input Integer: " + num);
        System.out.println("Converted Long: " + lng);
    }
}`,
          },
          {
            type: "code",
            fileName: "InttoString.java",
            value: `
class InttoString {
    public static void main(String[] args) {
        int num = 456;
        String str1 = String.valueOf(num);
        String str2 = Integer.toString(num);

        System.out.println("Input Integer: " + num);
        System.out.println("Using String.valueOf: " + str1);
        System.out.println("Using toString: " + str2);
    }
}`,
          },
          {
            type: "code",
            fileName: "LongtoInt.java",
            value: `
public class LongtoInt {
    public static void main(String args[]) {
        long lng = 123456L;
        int num = (int) lng;

        System.out.println("Input Long: " + lng);
        System.out.println("Converted Integer: " + num);
    }
}`,
          },
          {
            type: "code",
            fileName: "LongtoString.java",
            value: `
class LongtoString {
    public static void main(String[] args) {
        long num = 9876543210L;
        String str = Long.toString(num);

        System.out.println("Input Long: " + num);
        System.out.println("Converted String: " + str);
    }
}`,
          },
          {
            type: "code",
            fileName: "ObjecttoString.java",
            value: `
public class ObjecttoString {
    public static void main(String args[]) {
        Object obj = "Welcome to Java!";
        String str = obj.toString();

        System.out.println("Input Object: " + obj);
        System.out.println("Converted String: " + str);
    }
}`,
          },
          {
            type: "code",
            fileName: "OctaltoDecimal.java",
            value: `
public class OctaltoDecimal {
    public static void main(String[] args) {
        String octal = "12";
        int decimal = -Integer.parseInt(octal, 8);
        System.out.println("Octal to decimal : " + decimal);
    }
}`,
          },
          {
            type: "code",
            fileName: "StringtoBoolean.java",
            value: `
public class Main {
    public static void main(String[] args) {
        String str = "true";
        boolean stringToBoolean = Boolean.parseBoolean(str);
        System.out.println("String to Boolean: " + stringToBoolean);
    }
}`,
          },
          {
            type: "code",
            fileName: "StringtoCharacter.java",
            value: `
public class StringtoCharacter {
    public static void main(String[] args) {
        String str = "A";
        if (str.length() == 1) {
            char ch = str.charAt(0);
            System.out.println("input String :" + str);
            System.out.println("converted Character :" + ch);
        } else {
            System.out.println("input is not a Single character String");
        }
    }
}`,
          },
          {
            type: "code",
            fileName: "StringtoDate.java",
            value: `
import java.text.SimpleDateFormat;
import java.util.Date;

class StringtoDate {
    public static void main(String args[]) {
        String dateStr = "2025-01-17";
        try {
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            formatter.setLenient(false);
            Date date = formatter.parse(dateStr);
            System.out.println("Input String: " + dateStr);
            System.out.println("Converted Date: " + date);
        } catch (Exception e) {
            System.out.println("Invalid date format: " + e);
        }
    }
}`,
          },
          {
            type: "code",
            fileName: "StringtoDouble.java",
            value: `
class StringtoDouble {
    public static void main(String[] args) {
        String str = "45.67";
        double num = Double.parseDouble(str);

        System.out.println("Input String: " + str);
        System.out.println("Converted Double: " + num);
    }
}`,
          },
          {
            type: "code",
            fileName: "StringtoInteger.java",
            value: `
public class StringtoInteger {
    public static void main(String args[]) {
        String str = "123";
        int num1 = Integer.parseInt(str);
        int num2 = Integer.valueOf(str);

        System.out.println("Input string: " + str);
        System.out.println("Using parseInt: " + num1);
        System.out.println("Using valueOf: " + num2);
    }
}`,
          },
          {
            type: "code",
            fileName: "StringtoLong.java",
            value: `
class StringtoLong {
    public static void main(String[] args) {
        String str = "9876543210";
        long num = Long.parseLong(str);

        System.out.println("Input String: " + str);
        System.out.println("Converted Long: " + num);
    }
}`,
          },
          {
            type: "code",
            fileName: "StringtoObject.java",
            value: `
public class StringtoObject {
    public static void main(String args[]) {
        String str = "Hello World";
        Object obj = str;
        System.out.println("Input String: " + str);
        System.out.println("Converted Object: " + obj);
    }
}`,
          },
          {
            type: "code",
            fileName: "TimestamptoDate.java",
            value: `
import java.util.Date;

public class TimestamptoDate {
    public static void main(String[] args) {
        long timestamp = 1704068492345L;
        Date date = new Date(timestamp);
        System.out.println("Timestamp to Date: " + date);
    }
}`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `
BinarytoDecimal       ->  Binary to Decimal: 10

BooleantoString       ->  Boolean to String: true

ChartoInt             ->  Input Character: A
                          Converted Integer: 65

DatetoString          ->  Input Date: Thu Mar 06 17:56:37 GMT 2025
                          Formatted Date String: 2025-03-06

DatetoTimeStamp       ->  Date to Timestamp: 1741283903865

DecimaltoBinary       ->  Decimal to binary : 1010

DecimaltoOctal        ->  decimal to octal: 12

DecimaltoHex          ->  Decimal to hex : a

DoubletoInt           ->  Input Double: 45.67  Converted Int: 45.67

DobletoString         ->  Input Double: 78.9  Converted String: 78.9

HextoDecimal          ->  Hex to decimal : 10

InttoChar             ->  Int to Char: A

InttoDouble           ->  Input Integer: 25       Converted Double: 25.0

InttoLong             ->  Input Integer: 42       Converted Double: 42

InttoString           ->  Input Integer: 456      Using String.valueOf: 456  Using toString: 456

LongtoInt             ->  Input Long: 123456      Converted Integer: 123456

LongtoString          ->  Input Long: 9876543210  Converted String: 9876543210

ObjecttoString        ->  Input Object: Welcome to Java!   Converted String: Welcome to Java!

OctaltoDecimal        ->  Input Object: Welcome to Java!   Converted String: Welcome to Java!

StringtoBoolean       ->  String to Boolean: true

StringtoCharacter     ->  input String : A   converted Character : A

StringtoDate          ->  Input String: 2025-01-17   Converted Date: Fri Jan 17 00:00:00 GMT 2025

StringtoDouble        ->  Input String: 45.67   Converted Double: 45.67

StringtoInteger       ->  Input string: 123  Using parseInt: 123  Using valueOf: 123

StringtoLong          ->  Input String: 9876543210   Converted Long: 9876543210

StringtoObject        ->  Input String: Hello World  Converted Object: Hello World

TimestamptoDate       ->  Timestamp to Date: Mon Jan 01 00:21:32 GMT 2024`,
          },
        ],
      },
      // Practical -3
      {
        key: "object-json",
        name: `Practical - 3: WAP to implement JSON....`,
        pageBlocks: [
          {
            type: "heading",
            value: `Practical - 3: WAP to implemt JSON object and Array in JAVA`,
          },
          {
            type: "code",
            fileName: "Main.java",
            value: `
import org.json.JSONArray;
import org.json.JSONObject;

public class Main {
    public static void main(String[] args) {
        // Creating a JSON Object
        JSONObject student = new JSONObject();
        student.put("name", "Rahul");
        student.put("age", 21);
        student.put("course", "Computer Science");

        // Nested JSON Object for Marks
        JSONObject marks = new JSONObject();
        marks.put("math", 90);
        marks.put("science", 85);
        marks.put("english", 88);

        student.put("marks", marks);

        // Creating a JSON Array
        JSONArray studentsArray = new JSONArray();

        JSONObject student1 = new JSONObject();
        student1.put("name", "Rahul");
        student1.put("age", 21);
        student1.put("course", "CS");

        JSONObject student2 = new JSONObject();
        student2.put("name", "Aditi");
        student2.put("age", 22);
        student2.put("course", "IT");

        JSONObject student3 = new JSONObject();
        student3.put("name", "Rohan");
        student3.put("age", 20);
        student3.put("course", "ECE");

        studentsArray.put(student1);
        studentsArray.put(student2);
        studentsArray.put(student3);

        // Printing JSON Object and JSON Array
        System.out.println("JSON Object:");
        System.out.println(student.toString(4)); // Pretty print with 4 spaces

        System.out.println("\\nJSON Array:");
        System.out.println(studentsArray.toString(4));

        // Accessing values from JSON Object
        System.out.println("\\nStudent Name: " + student.getString("name"));

        // Accessing values from JSON Array
        System.out.println("First Student in Array: " + studentsArray.getJSONObject(0).getString("name"));
    }
}
`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `JSON Object:
{
    "name": "Rahul",
    "course": "Computer Science",
    "marks": {
        "science": 85,
        "english": 88,
        "math": 90
    },
    "age": 21
}

JSON Array:
[
    {
        "name": "Rahul",
        "course": "CS",
        "age": 21
    },
    {
        "name": "Aditi",
        "course": "IT",
        "age": 22
    },
    {
        "name": "Rohan",
        "course": "ECE",
        "age": 20
    }
]

Student Name: Rahul
First Student in Array: Rahul`,
          },
        ],
      },
      // Practical - 4
      {
        key: "bootstrap-components",
        name: `Practical - 4: Bootstrap Components`,
        pageBlocks: [
          {
            type: "heading",
            value: `Practical - 4: Bootstrap Components`,
          },
          {
            type: "code",
            language: "html",
            fileName: "Button.html",
            value: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Buttons</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>

  <body>
    <div class="container mt-4">
      <h3>Button Styles</h3>

      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-danger">Danger</button>
      <button class="btn btn-info">Info</button>
      <button class="btn btn-light">Light</button>
      <button class="btn btn-dark">Dark</button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>`,
          },
          //
          {
            type: "code",
            language: "html",
            fileName: "Label.html",
            value: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Badge Styles</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>

  <body>
    <div class="container mt-4">
      <h3>Badge Styles</h3>

      <span class="badge bg-primary">Primary</span>
      <span class="badge bg-secondary">Secondary</span>
      <span class="badge bg-success">Success</span>
      <span class="badge bg-danger">Danger</span>
      <span class="badge bg-warning text-dark">Warning</span>
      <span class="badge bg-info text-dark">Info</span>
      <span class="badge bg-light text-dark">Light</span>
      <span class="badge bg-dark">Dark</span>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>`,
          },
          //
          {
            type: "code",
            fileName: "Border.html",
            language: "html",
            value: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Border Styles</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>

  <body>
    <div class="container mt-4">
      <h3>Border Styles</h3>

      <div class="border border-primary p-3 mb-2">Primary Border</div>
      <div class="border border-secondary p-3 mb-2">Secondary Border</div>
      <div class="border border-success p-3 mb-2">Success Border</div>
      <div class="border border-warning p-3 mb-2">Warning Border</div>
      <div class="border border-info p-3 mb-2">Info Border</div>
      <div class="border border-dark p-3 mb-2">Dark Border</div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>`,
          },
          //
          {
            type: "code",
            fileName: "Background.html",
            language: "html",
            value: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Background Styles</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>

  <body>
    <div class="container mt-4">
      <h3>Background Styles</h3>

      <div class="bg-primary text-white p-3 mb-3">Primary Background</div>
      <div class="bg-success text-white p-3 mb-3">Success Background</div>
      <div class="bg-danger text-white p-3 mb-3">Danger Background</div>
      <div class="bg-warning text-dark p-3 mb-3">Warning Background</div>
      <div class="bg-info text-dark p-3 mb-3">Info Background</div>
      <div class="bg-light text-dark p-3 mb-3">Light Background</div>
      <div class="bg-dark text-white p-3 mb-3">Dark Background</div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>`,
          },

          // Outputs
          // {
          //   type: "code",
          //   language: "text",
          //   is_output: false,
          //   value: ``,
          // },
        ],
      },
      // Practical-5
      {
        key: "test-case-selenium",
        name: `Practical - 5: Test Case Using Selenium`,
        pageBlocks: [
          {
            type: "heading",
            value: `Practical - 5: Test Case Using Selenium`,
          },
          //
          {
            type: "code",
            // language: "html",
            fileName: "test.js",
            value: `const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('+2', function () {
  this.timeout(30000);
  let driver;
  let vars;

  beforeEach(async function () {
    driver = await new Builder().forBrowser('firefox').build();
    vars = {};
  });

  afterEach(async function () {
    await driver.quit();
  });

  it('+2', async function () {
    await driver.get("https://coway.com/zen-in/");
    await driver.manage().window().setRect({ width: 1995, height: 6873 });
    await driver.executeScript("window.scrollTo(0, 0);");

    await driver.findElement(By.linkText("Customer Service")).click();
    await driver.findElement(By.linkText("Amazon Prime")).click(); // Assuming this is the correct link text
  });
});`,
          },

          // Outputs
          // {
          //   type: "code",
          //   language: "text",
          //   is_output: false,
          //   value: ``,
          // },
        ],
      },
      //  Practical - 6
      {
        key: "create-a-nodejs-console-and-webapp",
        name: `Practical - 6: Create a NodeJS console and webapp`,
        pageBlocks: [
          {
            type: "heading",
            value: `Practical - 6: Create a NodeJS console and webapp`,
          },
          {
            type: "code",
            fileName: "1. Initialize Node.js Project",
            value: `npm init -y`,
          },
          //
          {
            type: "code",
            fileName: "first.js",
            value: `console.log("Welcome to my Node.js console app!");`,
          },
          //
          {
            type: "code",
            fileName: "second.js",
            value: `console.log("Welcome to my Node.js console app!");

process.stdout.write("Enter your name: ");
process.stdin.on("data", (data) => {
  const name = data.toString().trim();
  console.log(\`Hello, \${name}!\`);
  process.exit();
});
`,
          },
          {
            type: "code",
            fileName: "server.js",
            value: `var http = require("http");

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello, this is a simple Node.js web server!");
  res.end();
});

server.listen(3000, function () {
  console.log("Server is running at http://localhost:3000");
});`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `1. Initialize Node.js Project:-

{
  "name": "ndjs",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
-----------------------------------------------------------------------------------------------
first.js

Welcome to my Node.js console app!

-----------------------------------------------------------------------------------------------
second.js

Welcome to my Node.js console app!
Enter your name: John
Hello, John!

-----------------------------------------------------------------------------------------------
server.js

Server is running at http://localhost:3000

Hello, this is a simple Node.js web server!`,
          },
        ],
      },
      // Practical 7
      {
        key: "string-decoder",
        name: `Practical - 7: WAP to implement String Decoder`,
        pageBlocks: [
          {
            type: "heading",
            value: `Practical - 7: WAP to implement String Decoder`,
          },
          {
            type: "code",
            // language: "JavaScript",
            fileName: "decoder.js",
            value: `function decodeString(s) {
  let stack = [];
  for (let char of s) {
    if (char !== "]") {
      stack.push(char);
    } else {
      let decodedString = "";
      while (stack[stack.length - 1] !== "[") {
        decodedString = stack.pop() + decodedString;
      }
      stack.pop(); // remove '['
      let k = "";
      while (stack.length && !isNaN(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }
      stack.push(decodedString.repeat(parseInt(k)));
    }
  }
  return stack.join("");
}

// Example
console.log(decodeString("3[a2[b]]"));`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `abbabbabb`,
          },
        ],
      },
      //  Practical 8
      {
        key: "query-string",
        name: `Practical - 8: WAP to implement Query String`,
        pageBlocks: [
          {
            type: "heading",
            value: `Practical - 8: WAP to implement Query String`,
          },
          {
            type: "code",
            // language: "JavaScript",
            fileName: "querystring.js",
            value: `const querystring = require("querystring");

const query = "name=JohnDoe&age=30&city=NewYork";
const parsed = querystring.parse(query);

console.log(parsed);`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `{
  name: 'JohnDoe',
  age: '30',
  city: 'NewYork'
}`,
          },
        ],
      },
      // Practical 9
      {
        key: "events",
        name: `Practical - 9: WAP to implement events.`,
        pageBlocks: [
          {
            type: "heading",
            value: `Practical - 9: WAP to implement events.`,
          },
          {
            type: "code",
            // language: "JavaScript",
            fileName: "events.js",
            value: `const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("dataReceived", () => {
  console.log("Data received successfully!");
});

// Emit the event
myEmitter.emit("dataReceived");`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Data received successfully!`,
          },
        ],
      },
      //  Practical 10
      {
        key: "test-cases",
        name: `Practical - 10: WAP to implement various test cases.`,
        pageBlocks: [
          {
            type: "heading",
            value: `Practical - 10: WAP to implement various test cases.`,
          },
          {
            type: "code",
            // language: "JavaScript",
            fileName: "test.js",
            value: `const assert = require('chai').assert;
            
            function add(a, b) {
              return a + b;
            }
            
            describe("Addition function", function() {
              it("should return 5 when 2 and 3 are added", function() {
                assert.equal(add(2, 3), 5);
              });
            
              it("should return 0 when -1 and 1 are added", function() {
                assert.equal(add(-1, 1), 0);
              });
            });`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Addition function
          ✓ should return 5 when 2 and 3 are added
          ✓ should return 0 when -1 and 1 are added
      
        2 passing (XXms)`,
          },
        ],
      },
      //  Practical 11
      {
        key: "web-driver",
        name: `Practical - 11: WAP to implement various Web Driver.`,
        pageBlocks: [
          {
            type: "heading",
            value: `Practical - 11: WAP to implement various Web Driver.`,
          },
          {
            type: "code",
            // language: "JavaScript",
            fileName: "driver.js",
            value: `const { Builder, By, Key, until } = require('selenium-webdriver');
      
      (async function example() {
        let driver = await new Builder().forBrowser('firefox').build();
      
        try {
          await driver.get('http://www.google.com');
          await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
          await driver.wait(until.titleContains('Selenium'), 1000);
          const title = await driver.getTitle();
          console.log('Page title is:', title);
        } finally {
          await driver.quit();
        }
      })();`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Page title is: Selenium - Google Search`,
          },
        ],
      },
      //  Practical 12
      {
        key: "crud-op-mongo",
        name: `Practical - 12: CRUD Operation in Node JS with Mongo DB`,
        pageBlocks: [
          {
            type: "heading",
            value: `Practical - 12: CRUD Operation in Node JS with Mongo DB`,
          },
          {
            type: "code",
            // language: "JavaScript",
            fileName: "server.js",
            value: `const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3100;

app.use(express.json());

const MONGODB_URI =
  "Your Connection String";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

const Item = mongoose.model("Item", itemSchema);

// Create Item
app.post("/items", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Items
app.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Item by ID
app.get("/items/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Item by ID
app.put("/items/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Item by ID
app.delete("/items/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
});`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `*All CRUD operations (Create, Read, Update, and Delete) were successfully tested using the Postman application.*

1. Create
POST :- http://localhost:3100/items
body -> raw -> json

{
  "name": "Item 1",
  "description": "Iphone 16 pro max"
}
Output:-
{
    "name": "Item 1",
    "description": "Iphone 16 pro max",
    "_id": "6806527d61325311fee085f4",
    "createdAt": "2025-04-21T14:13:17.284Z",
    "__v": 0
}
----------------------------------------------------
2. Read
GET :- http://localhost:3100/items

Output:-
[
  {
      "_id": "6806527d61325311fee085f4",
      "name": "Item 1",
      "description": "Iphone 16 pro max",
      "createdAt": "2025-04-21T14:13:17.284Z",
      "__v": 0
  }
    {
        "_id": "68064f3e61325311fee085e5",
        "name": "Item 2",
        "description": "This is a description for Item 2",
        "createdAt": "2025-04-21T13:59:26.331Z",
        "__v": 0
    },
]
----------------------------------------------------
3. Update
PUT :- http://localhost:3100/items/6806527d61325311fee085f4
body -> raw -> json
{
  "name": "Mobile 1",
  "description": "Iphone 16 pro max"
}

Output:-
{
    "_id": "6806527d61325311fee085f4",
    "name": "Mobile 1",
    "description": "Iphone 16 pro max",
    "createdAt": "2025-04-21T14:13:17.284Z",
    "__v": 0
}
----------------------------------------------------
4. Delete

DELETE :- http://localhost:3100/items/68064f3e61325311fee085e5

Output:-
{
    "message": "Item deleted successfully"
}`,
          },
        ],
      },
    ],
  },
  // BDA
  {
    subject_name: "Big Data Analysis",
    key: "big-data-analysis",
    specialization: "bda",
    language: "python",
    practicals: [
      // Word Count
      {
        key: "word-count",
        name: "Practical - 3: Word Counting",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 3 - Word Counting",
          },
          // Solution 1
          {
            type: "code",
            fileName: "solution1.py",
            value: `from collections import defaultdict
import multiprocessing


# Mapper function
def mapper(chunk):
    word_count = defaultdict(int)
    for word in chunk.split():
        word_count[word] += 1
    return word_count


# Reducer function
def reducer(results):
    word_count = defaultdict(int)
    for wc in results:
        for word, count in wc.items():
            word_count[word] += count
    return word_count


# MapReduce function
def mapreduce(data, mapper, reducer, num_processes=2):
    with multiprocessing.Pool(processes=num_processes) as pool:
        mapped_data = pool.map(mapper, data)
        reduced_data = reducer(mapped_data)
    return reduced_data


if __name__ == "__main__":
    # Sample input data
    data = ["hello world", "world is beautiful", "hello beautiful world"]

    # Execute MapReduce
    word_counts = mapreduce(data, mapper, reducer)

    # Output results
    print("Word Counts:")
    for word, count in word_counts.items():
        print(f"{word}: {count}")`,
          },
          // Solution 2
          {
            type: "code",
            fileName: "solution2.py",
            value: `from collections import defaultdict
from multiprocessing import Pool


# Mapper function
def mapper(text):
    word_count = defaultdict(int)
    for word in text.split():
        word_count[word.lower()] += 1
    return word_count


# Reducer function
def reducer(count_dicts):
    word_count = defaultdict(int)
    for count_dict in count_dicts:
        for word, count in count_dict.items():
            word_count[word] += count
    return word_count


# Main function to orchestrate MapReduce process
def main():
    # Sample input data
    data = ["Hello world", "World is beautiful", "Hello beautiful world"]

    # Map phase
    with Pool() as pool:
        mapped_data = pool.map(mapper, data)

    # Reduce phase
    reduced_result = reducer(mapped_data)

    # Print the final word counts
    print("Word Counts:")
    for word, count in reduced_result.items():
        print(f"{word}: {count}")


if __name__ == "__main__":
    main()`,
          },
          // Solution 3
          {
            type: "code",
            fileName: "solution3.py",
            value: `import pandas as pd
import multiprocessing
from collections import defaultdict


def mapper(data):
    word_count = defaultdict(int)
    for row in data.itertuples():
        for word in str(
            row.Text
        ).split():  # Assuming the 'text' column contains the text data
            word_count[word] += 1
    return word_count


def reducer(word_counts):
    final_word_count = defaultdict(int)
    for word_count in word_counts:
        for word, count in word_count.items():
            final_word_count[word] += count
    return final_word_count


def mapreduce(data, num_workers=2):
    pool = multiprocessing.Pool(processes=num_workers)
    chunk_size = len(data) // num_workers
    chunks = [data[i : i + chunk_size] for i in range(0, len(data), chunk_size)]
    word_counts = pool.map(mapper, chunks)
    final_word_count = reducer(word_counts)
    pool.close()
    pool.join()
    return final_word_count


if __name__ == "__main__":
    # Ensure to provide the correct path to your Excel file
    df = pd.read_excel(
        "C:/Users/karan/Downloads/BDA1_pracsolution/my_data.xlsx"
    )  # Replace with the actual path
    result = mapreduce(df, num_workers=2)
    print(result)`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `
Word Counts:
hello: 2
world: 3
is: 1
beautiful: 2
`,
          },
        ],
      },
      // practical 4
      {
        key: "mrjob",
        name: "Practical - 4: Word Counting",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 4 - Word Counting",
          },
          // Solution 1
          {
            type: "code",
            fileName: "solution1.py",
            value: `import multiprocessing


class MapReduce:
    def __init__(self, num_processes=2):
        self.num_processes = num_processes

    def mapper(self, data):
        raise NotImplementedError("Subclasses must implement mapper method")

    def reducer(self, data):
        raise NotImplementedError("Subclasses must implement reducer method")

    def _map(self, data):
        # Ensure we are applying the mapper to a list of (key, value) tuples
        result = []
        for item in data:
            result.extend(
                self.mapper(item)
            )  # Ensure mapping generates a list of tuples
        return result

    def _reduce(self, data):
        reduced_data = {}
        for key, value in data:
            reduced_data.setdefault(key, []).append(value)
        return [(key, sum(values)) for key, values in reduced_data.items()]

    def run(self, data):
        pool = multiprocessing.Pool(processes=self.num_processes)
        # Split the data into chunks based on the number of processes
        chunk_size = len(data) // self.num_processes
        chunks = [data[i : i + chunk_size] for i in range(0, len(data), chunk_size)]
        mapped_data = pool.map(self._map, chunks)  # Mapping phase
        flattened_data = [
            item for sublist in mapped_data for item in sublist
        ]  # Flatten list of lists
        result = self._reduce(flattened_data)  # Reducing phase
        pool.close()
        pool.join()
        return result


# Example usage:
class WordCount(MapReduce):
    def mapper(self, data):
        key, value = data  # Unpack the (key, value) tuple
        result = []
        for word in value.split():
            result.append((word, 1))  # Collecting words with a count of 1
        return result

    def reducer(self, data):
        key, values = data  # Aggregate the values (sum the counts)
        return (key, sum(values))  # Summing up counts for each word


if __name__ == "__main__":
    # Input data: each tuple contains an ID and a string
    input_data = [(1, "apple banana"), (2, "banana orange"), (3, "orange apple")]

    # Create a WordCount MapReduce job
    word_count_job = WordCount()

    # Run the MapReduce job
    result = word_count_job.run(input_data)

    # Output the result
    for item in result:
        print(item)`,
          },
          // Solution 2
          {
            type: "code",
            fileName: "solution2.py",
            value: `import multiprocessing


class MapReduce:
    def __init__(self, num_processes=2):
        self.num_processes = num_processes

    def mapper(self, data):
        raise NotImplementedError("Subclasses must implement mapper method")

    def reducer(self, data):
        raise NotImplementedError("Subclasses must implement reducer method")

    def _map(self, data):
        # Ensure we are applying the mapper to a list of (key, value) tuples
        result = []
        for item in data:
            result.extend(
                self.mapper(item)
            )  # Ensure mapping generates a list of tuples
        return result

    def _reduce(self, data):
        reduced_data = {}
        for key, value in data:
            reduced_data.setdefault(key, []).append(value)
        return [(key, sum(values)) for key, values in reduced_data.items()]

    def run(self, data):
        pool = multiprocessing.Pool(processes=self.num_processes)
        # Split the data into chunks based on the number of processes
        chunk_size = len(data) // self.num_processes
        chunks = [data[i : i + chunk_size] for i in range(0, len(data), chunk_size)]
        mapped_data = pool.map(self._map, chunks)  # Mapping phase
        flattened_data = [
            item for sublist in mapped_data for item in sublist
        ]  # Flatten list of lists
        result = self._reduce(flattened_data)  # Reducing phase
        pool.close()
        pool.join()
        return result


# Example usage:
class WordCount(MapReduce):
    def mapper(self, data):
        key, value = data  # Unpack the (key, value) tuple
        result = []
        for word in value.split():
            result.append((word, 1))  # Collecting words with a count of 1
        return result

    def reducer(self, data):
        key, values = data  # Aggregate the values (sum the counts)
        return (key, sum(values))  # Summing up counts for each word


if __name__ == "__main__":
    # Input data: each tuple contains an ID and a string
    input_data = [(1, "apple banana"), (2, "banana orange"), (3, "orange apple")]

    # Create a WordCount MapReduce job
    word_count_job = WordCount()

    # Run the MapReduce job
    result = word_count_job.run(input_data)

    # Output the result
    for item in result:
        print(item)`,
          },
          // Solution 3
          {
            type: "code",
            fileName: "solution3.py",
            value: `from mrjob.job import MRJob
from mrjob.step import MRStep


class WordCount(MRJob):

    def steps(self):
        return [MRStep(mapper=self.mapper, reducer=self.reducer)]

    def mapper(self, _, line):
        """Tokenizes each line and emits (word, 1)"""
        for word in line.split():
            yield word.lower(), 1

    def reducer(self, word, counts):
        """Aggregates counts for each word"""
        yield word, sum(counts)


if __name__ == "__main__":
    WordCount.run()`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `('apple', 2)
('banana', 2)
('orange', 2)
`,
          },
        ],
      },
      //  Practical 5
      {
        key: "stop-word",
        name: "Practical - 5: Stop Word",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 5 - Stop Word",
          },
          // Solution 1
          {
            type: "code",
            fileName: "solution1.py",
            value: `def load_stop_words(stopwords_file):
    """Load stop words from a file into a set"""
    with open(stopwords_file, "r", encoding="utf-8") as file:
        stop_words = {line.strip().lower() for line in file}
    return stop_words


def remove_stop_words(input_file, stopwords_file, output_file):
    """Remove stop words from each line of the input file"""
    stop_words = load_stop_words(stopwords_file)

    with open(input_file, "r", encoding="utf-8") as infile, open(
        output_file, "w", encoding="utf-8"
    ) as outfile:
        for line in infile:
            filtered_words = [
                word for word in line.split() if word.lower() not in stop_words
            ]
            outfile.write(" ".join(filtered_words) + "\n")


if __name__ == "__main__":
    input_file = "input.txt"  # Large text file (one sentence per line)
    stopwords_file = "stopwords.txt"  # Stop words file (one per line)
    output_file = "output.txt"  # Processed file without stop words

    remove_stop_words(input_file, stopwords_file, output_file)
    print("Stop word elimination complete. Processed output saved in", output_file)`,
          },
          //
          {
            type: "code",
            fileName: "stopwords.txt",
            value: `the
is
a
am`,
          },
          //
          {
            type: "code",
            fileName: "input.txt",
            value: `This is a test sentence.
I am learning Python programming.
The quick brown fox jumps over the lazy dog.`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `This test sentence.
I learning Python programming.
quick brown fox jumps over lazy dog.`,
          },
        ],
      },
      //  Practical 6
      {
        key: "weather-data-mrjob",
        name: "Practical - 6: Weather Data",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 6 - Weather Data",
          },
          // Solution 1
          {
            type: "code",
            fileName: "weather_data_mrjob.py",
            value: `from mrjob.job import MRJob
from mrjob.step import MRStep


class WeatherDataStats(MRJob):

    def mapper(self, _, line):
        """Tokenizes each line and emits (word, 1)"""
        fields = line.split(",")
        if len(fields) == 3:
            # Extract year and temperature from the line
            year = fields[0].strip()
            temperature = float(fields[1].strip())
            yield year, temperature

    def reducer(self, year, temperatures):
        """Aggregates counts for each word"""
        temperatures = list(temperatures)
        avg_temp = sum(temperatures) / len(temperatures)
        max_temp = max(temperatures)
        min_temp = min(temperatures)
        yield year, (avg_temp, max_temp, min_temp)


class FilterTemperature(MRJob):

    def mapper(self, _, line):
        """Filters the data with temperature > 30"""
        fields = line.split(",")
        if len(fields) == 3:
            # Extract year, temperature, and other data
            year = fields[0].strip()
            temperature = float(fields[1].strip())
            other_data = fields[2].strip()

            # Yield the temperature if it's greater than 30
            if temperature > 30.0:
                yield year, (temperature, other_data)

    def reducer(self, year, readings):
        """Writes the filtered readings to a file"""
        with open(f"filtered_readings_{year}.txt", "w") as f:
            for reading in readings:
                f.write(f"{year}, {reading[0]}, {reading[1]}\n")


if __name__ == "__main__":
    # Configure the job to run with the local runner
    import sys

    if len(sys.argv) < 2:
        sys.argv.append("ncdc_data.txt")  # Provide your input file path here

    WeatherDataStats.run()
    FilterTemperature.run()`,
          },
          //
          {
            type: "code",
            fileName: "ncdc_data.txt",
            value: `2020, 23.4, Some location
2020, 30.5, Another location
2021, 33.7, Location X
2021, 28.9, Location Y`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `"2020" [26.95, 30.5, 23.4]
"2021" [31.3, 33.7,28.9]`,
          },
        ],
      },
      // Practical 7
      {
        key: "student-info-managment-using-collection-types",
        name: "Practical - 7: Student Info....",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 7 - Student Information Management using Collection Types",
          },
          // Solution 1
          {
            type: "code",
            fileName: "practical7.py",
            value: `# Using List to store student records
students_list = [
    {"roll_no": 101, "name": "Alice", "dob": "2002-05-14", "address": "New York"},
    {"roll_no": 102, "name": "Bob", "dob": "2001-09-23", "address": "Los Angeles"},
    {"roll_no": 103, "name": "Charlie", "dob": "2003-07-19", "address": "Chicago"},
]

# Using Set to store unique roll numbers
students_set = {101, 102, 103}

# Using Dictionary (Map) to store student details with roll_no as key
students_map = {
    101: {"name": "Alice", "dob": "2002-05-14", "address": "New York"},
    102: {"name": "Bob", "dob": "2001-09-23", "address": "Los Angeles"},
    103: {"name": "Charlie", "dob": "2003-07-19", "address": "Chicago"},
}


# Function to add a new student
def add_student(roll_no, name, dob, address):
    if roll_no in students_set:
        print(f"Student with Roll No {roll_no} already exists.")
        return
    students_list.append(
        {"roll_no": roll_no, "name": name, "dob": dob, "address": address}
    )
    students_set.add(roll_no)
    students_map[roll_no] = {"name": name, "dob": dob, "address": address}
    print(f"Student {name} added successfully.")


# Function to display all students
def display_students():
    print("\\nStudent Records:")
    for student in students_list:
        print(student)


# Function to find a student by roll number
def find_student(roll_no):
    if roll_no in students_map:
        print(f"\\nDetails of Roll No {roll_no}: {students_map[roll_no]}")
    else:
        print(f"Student with Roll No {roll_no} not found.")


# Adding a new student
add_student(104, "David", "2004-01-12", "Houston")

# Display all students
display_students()

# Find a student
find_student(102)`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Student David added successfully.

Student Records:
{'roll_no': 101, 'name': 'Alice', 'dob': '2002-05-14', 'address': 'New York'}
{'roll_no': 102, 'name': 'Bob', 'dob': '2001-09-23', 'address': 'Los Angeles'}
{'roll_no': 103, 'name': 'Charlie', 'dob': '2003-07-19', 'address': 'Chicago'}
{'roll_no': 104, 'name': 'David', 'dob': '2004-01-12', 'address': 'Houston'}

Details of Roll No 102: {'name': 'Bob', 'dob': '2001-09-23', 'address': 'Los Angeles'}`,
          },
        ],
      },
      //  Practical 8
      {
        key: "py-mongo",
        name: "Practical - 8: CRUD Operations using MongoDB",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 8 - CRUD Operations using MongoDB",
          },
          // Solution 1
          {
            type: "code",
            fileName: "practical8.py",
            value: `import pymongo

# Connect to the MongoDB server
client = pymongo.MongoClient("mongodb://localhost:27017/")

# Select the database
db = client["mydatabase"]

# Access an existing collection or create it if it doesn't exist
collection = db["students"]

# Insert a single document
student = {"name": "John", "age": 20, "grade": "A"}
collection.insert_one(student)

# Insert multiple documents
students = [
    {"name": "Alice", "age": 22, "grade": "B"},
    {"name": "Bob", "age": 21, "grade": "C"},
]
collection.insert_many(students)

# Find a single document
result = collection.find_one({"name": "John"})
print(result)

# Find all documents that match a query
results = collection.find({"grade": "A"})
for result in results:
    print(result)

# Update a single document
collection.update_one({"name": "John"}, {"$set": {"age": 21}})

# Update multiple documents
collection.update_many({"grade": "B"}, {"$set": {"grade": "A"}})

# Delete a single document
collection.delete_one({"name": "John"})

# Delete multiple documents
collection.delete_many({"grade": "C"})`,
          },

          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `_id: ObjectId('67bf2dccbd874ac73d462dfe')
name:"John"
age: 20
grade:"A"

_id: ObjectId('67bf2ef269dd55476bea6569')
name:"Alice"
age:22
grade:"B"

_id: ObjectId('67bf2ef269dd55476bea656a')
name:"Bob"
age:21
grade:"C"

'_id': ObjectId('67bf2dccbd874ac73d462dfe'), 'name': 'John', 'age': 20, 'grade': 'A')

_id: ObjectId('67bf2dccbd874ac73d462dfe')
name: "John"
age: 21
grade: "A"

_id: ObjectId('67bf2ef269dd55476bea6569')
name:"Alice"
age:22
grade:"A"`,
          },
        ],
      },
      // Pracitcl 9
      {
        key: "py-mongo-9",
        name: "Practical - 9: Basic MongoDB Queries for Student Collection",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 9 - Basic MongoDB Queries for Student Collection",
          },
          // Solution 1
          {
            type: "code",
            fileName: "practical9.py",
            value: `result = db.students.find()

result = db.students.find({"age": {"$gt": 20}})

result = db.students.find({}, {"name": 1, "age": 1})

result = db.students.find_one({"name": "John"})

result = db.students.find().limit(10)`,
          },
        ],
      },
      //  practical 10
      {
        key: "py-mongo-10",
        name: "Practical - 10 Retrieving Documents.....",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 10 - Retrieving Documents from MongoDB Students Collection",
          },
          // Solution 1
          {
            type: "code",
            fileName: "practical10.py",
            value: `from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient(
    "mongodb://localhost:27017/"
)  # Assuming MongoDB is running locally

# Select database and collection
db = client[
    "your_database_name"
]  # Replace 'your_database_name' with your actual database name
collection = db["Students"]

# Find all documents in the collection
cursor = collection.find()

# Iterate over the cursor to access the documents
for document in cursor:
    print(document)`,
          },
        ],
      },
      //  Practical 11
      {
        key: "word-count-11",
        name: "Practical - 11 Word Count",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 11 - Word Count",
          },
          // Solution 1
          {
            type: "code",
            fileName: "practical11.py",
            value: `from mrjob.job import MRJob


class WordCount(MRJob):
    def mapper(self, _, line):
        # Split the line into words
        words = line.split()
        for word in words:
            yield word, 1

    def reducer(self, word, counts):
        # Sum the counts for each word
        yield word, sum(counts)


if __name__ == "__main__":
    WordCount.run()`,
          },
          {
            type: "code",
            fileName: "input.txt",
            value: `hello world
hello mrjob
world of mrjob`,
          },
          // Outputs
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `"hello" 2
"mrjob" 2
"of"    1
"world" 2`,
          },
        ],
      },
      //  Practical 12
      {
        key: "hive-hdfs-12",
        name: "Practical - 12 Hive and HDFS Table Join",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 12 - Creating HDFS Tables and Joining in Hive",
          },
          // HDFS Commands
          {
            type: "code",
            fileName: "hdfs_commands.sh",
            value: `# Create directories in HDFS
hdfs dfs -mkdir -p /user/hive/warehouse/customers
hdfs dfs -mkdir -p /user/hive/warehouse/orders

# Put local files into HDFS
hdfs dfs -put customers.csv /user/hive/warehouse/customers/
hdfs dfs -put orders.csv /user/hive/warehouse/orders/`,
          },
          // Sample Input Files
          {
            type: "code",
            fileName: "customers.csv",
            value: `1,John Doe
2,Jane Smith
3,Bob Johnson`,
          },
          {
            type: "code",
            fileName: "orders.csv",
            value: `1,2024-01-15,250.50
2,2024-01-20,99.99
1,2024-02-10,180.75
3,2024-03-05,300.00`,
          },
          // Hive Table Creation
          {
            type: "code",
            fileName: "hive_create_tables.hql",
            value: `-- Create external table for customers
CREATE EXTERNAL TABLE IF NOT EXISTS customers (
  customer_id INT,
  name STRING
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
LOCATION '/user/hive/warehouse/customers';

-- Create external table for orders
CREATE EXTERNAL TABLE IF NOT EXISTS orders (
  customer_id INT,
  order_date STRING,
  amount DOUBLE
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
LOCATION '/user/hive/warehouse/orders';`,
          },
          // Hive Join Query
          {
            type: "code",
            fileName: "hive_join_query.hql",
            value: `-- Inner Join between customers and orders
SELECT 
  c.customer_id, 
  c.name, 
  o.order_date, 
  o.amount
FROM customers c
JOIN orders o
ON c.customer_id = o.customer_id;`,
          },
          // Expected Output
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `1\tJohn Doe\t2024-01-15\t250.5
1\tJohn Doe\t2024-02-10\t180.75
2\tJane Smith\t2024-01-20\t99.99
3\tBob Johnson\t2024-03-05\t300.0`,
          },
        ],
      },
    ],
  },
  //  Computer graphics
  {
    subject_name: "Computer Graphics",
    key: "computer-graphics",
    language: "javascript",
    practicals: [
      {
        key: "dda-line-drawing-algorithm",
        name: "Practical - 1: Implement and visualize a line using DDA algorithm",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 1 - Implement and visualize a line using the Digital Differential Analyzer (DDA) algorithm",
          },
          {
            type: "code",
            fileName: "dda_line.c",
            language: "c",
            value: `#include <GL/glut.h>
#include <math.h>

void drawDDA(int x1, int y1, int x2, int y2) {

 float dx = x2 - x1;
    float dy = y2 - y1;
    float steps = (fabs(dx) > fabs(dy)) ? fabs(dx) : fabs(dy);

    float Xinc = dx / steps;
    float Yinc = dy / steps;
    float x = x1, y = y1;

    glBegin(GL_POINTS);
    for (int i = 0; i < (int)steps; i++) {  // C99 fix applied
        glVertex2i(round(x), round(y));//2D vertex
        x += Xinc;
        y += Yinc;
    }
    glEnd();
    glFlush();
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT);//clear buffer

    // Draw a line from (50, 100) to (300, 250)
    drawDDA(50, 100, 300, 250);
}

void init() {
    glClearColor(0.0, 0.0, 0.0, 1.0);  // Set background color to black
    glMatrixMode(GL_PROJECTION);//which matrix is working // Controls viewing volume camera,clipping.
    gluOrtho2D(0, 500, 0, 500);  // Set coordinate system
}
int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("DDA Line Drawing Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}`,
          },
        ],
      },
      {
        key: "bresenham-line-drawing-algorithm",
        name: "Practical - 2: Implement Bresenham's line drawing algorithm",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 2 - Implement the Bresenham's line drawing algorithm to render an efficient line",
          },
          {
            type: "code",
            fileName: "bresenham_line.c",
            language: "c",
            value: `#include <GL/glut.h>
#include <math.h>

// Draw a single pixel
void drawPixel(int x, int y) {
glBegin(GL_POINTS);
glVertex2i(x, y);
glEnd();
}

// Bresenham's Line Drawing Algorithm
void drawLine(int x0, int y0, int x1, int y1) {
int dx = abs(x1 - x0);
int dy = abs(y1 - y0);
int sx = (x0 < x1) ? 1 : -1;
int sy = (y0 < y1) ? 1 : -1;
int err = dx - dy;
while (1) {
drawPixel(x0, y0);
if (x0 == x1 && y0 == y1)
break;
int e2 = 2 * err;
if (e2 > -dy) {
err -= dy;
x0 += sx;
}
if (e2 < dx) {
err += dx;
y0 += sy;
}
}
}

// Display callback
void display() {
glClear(GL_COLOR_BUFFER_BIT);
glColor3f(1.0, 1.0, 1.0); // White line
drawLine(50, 50, 300, 200);
glFlush();
}

// Initialize OpenGL
void init() {
glClearColor(0.0, 0.0, 0.0, 1.0); // Black background
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
gluOrtho2D(0, 400, 0, 400); // 2D coordinate system
}

// Main function
int main(int argc, char** argv) {
glutInit(&argc, argv);
glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
glutInitWindowSize(400, 400);
glutInitWindowPosition(100, 100);
glutCreateWindow("Bresenham Line Drawing - OpenGL");
init();
glutDisplayFunc(display);
glutMainLoop();
return 0;
}`,
          },
        ],
      },
      {
        key: "midpoint-circle-algorithm",
        name: "Practical - 3: Draw a circle using Midpoint Circle Algorithm",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 3 - Draw a circle using the Midpoint Circle Algorithm",
          },
          {
            type: "code",
            fileName: "midpoint_circle.c",
            language: "c",
            value: `#include <GL/glut.h>
#include <stdio.h>

int radius;

void plotcirclepoints(int xc,int yc,int x,int y)
{
    glBegin(GL_POINTS);
    glVertex2i(xc + x, yc + y);
    glVertex2i(xc - x, yc + y);
    glVertex2i(xc + x, yc - y);
    glVertex2i(xc - x, yc - y);
    glVertex2i(xc + y, yc + x);
    glVertex2i(xc - y, yc + x);
    glVertex2i(xc + y, yc - x);
    glVertex2i(xc - y, yc - x);
    glEnd();
}

void drawcircle(int xc, int yc, int r)
{
    int x = 0;
    int y = r;
    int d = 3 - 2 * r;

    plotcirclepoints(xc, yc, x, y);
    while (x <= y)
    {
        x++;
        if (d < 0)
        {
            d = d + 4 * x + 6;
        }
        else
        {
            y--;
            d = d + 4 * (x - y) + 10;
        }
        plotcirclepoints(xc, yc, x, y);
    }
}

void display()
{
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0);
    glPointSize(2.0);
    drawcircle(0, 0, radius);
    glFlush();
}

void init()
{
    glClearColor(0.0, 0.0, 0.0, 1.0);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(-200, 200, -200, 200);
}

int main(int argc, char **argv)
{
    printf("enter the radius of the circle");
    scanf("%d", &radius);

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Creating Circle Drawing Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}`,
          },
        ],
      },
      {
        key: "bresenham-circle-drawing-algorithm",
        name: "Practical - 4: Implement Bresenham's circle drawing algorithm",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 4 - Implement Bresenham's circle drawing algorithm to generate a circle",
          },
          {
            type: "code",
            fileName: "bresenham_circle.c",
            language: "c",
            value: `#include <GL/glut.h>
#include <stdio.h>

int radius;

/* Function to plot symmetric points */
void plotCirclePoints(int xc, int yc, int x, int y)
{
    glBegin(GL_POINTS);
    glVertex2i(xc + x, yc + y);
    glVertex2i(xc - x, yc + y);
    glVertex2i(xc + x, yc - y);
    glVertex2i(xc - x, yc - y);
    glVertex2i(xc + y, yc + x);
    glVertex2i(xc - y, yc + x);
    glVertex2i(xc + y, yc - x);
    glVertex2i(xc - y, yc - x);
    glEnd();
}

/* Bresenham's Circle Drawing Algorithm */
void drawCircle(int xc, int yc, int r)
{
    int x = 0;
    int y = r;
    int d = 3 - 2 * r;

    plotCirclePoints(xc, yc, x, y);
    while (x <= y)
    {
        x++;
        if (d < 0)
        {
            d = d + 4 * x + 6;
        }
        else
        {
            y--;
            d = d + 4 * (x - y) + 10;
        }
        plotCirclePoints(xc, yc, x, y);
    }
}

/* Display Function */
void display()
{
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0);   // Red color
    glPointSize(2.0);
    drawCircle(0, 0, radius);
    glFlush();
}

/* Initialization */
void init()
{
    glClearColor(0.0, 0.0, 0.0, 1.0); // Black background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(-200, 200, -200, 200);
}

/* Main Function */
int main(int argc, char** argv)
{
    printf("Enter the radius of the circle: ");
    scanf("%d", &radius);

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Bresenham Circle Drawing Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}`,
          },
        ],
      },
          {
          key: "midpoint-ellipse-algorithm",
          name: "Practical - 5: Draw an ellipse using Midpoint Ellipse Algorithm",
          pageBlocks: [
            {
            type: "heading",
            value: "Practical 5 - Draw an ellipse using the Midpoint Ellipse Algorithm",
            },
            {
            type: "code",
            fileName: "midpoint_ellipse.c",
            language: "c",
            value: `#include <GL/glut.h>
      #include <stdio.h>
      #include <math.h>

      int rx, ry, xc = 0, yc = 0;

      void plotPoints(int x, int y)
      {
        glBegin(GL_POINTS);
        glVertex2i(xc + x, yc + y);
        glVertex2i(xc - x, yc + y);
        glVertex2i(xc + x, yc - y);
        glVertex2i(xc - x, yc - y);
        glEnd();
      }

      void midpointEllipse()
      {
        float dx, dy, d1, d2;
        int x = 0;
        int y = ry;

        d1 = (ry * ry) - (rx * rx * ry) + (0.25 * rx * rx);
        dx = 2 * ry * ry * x;
        dy = 2 * rx * rx * y;

        while (dx < dy)
        {
          plotPoints(x, y);

          if (d1 < 0)
          {
            x++;
            dx = dx + (2 * ry * ry);
            d1 = d1 + dx + (ry * ry);
          }
          else
          {
            x++;
            y--;
            dx = dx + (2 * ry * ry);
            dy = dy - (2 * rx * rx);
            d1 = d1 + dx - dy + (ry * ry);
          }
        }

        d2 = ((ry * ry) * ((x + 0.5) * (x + 0.5))) +
           ((rx * rx) * ((y - 1) * (y - 1))) -
           (rx * rx * ry * ry);

        while (y >= 0)
        {
          plotPoints(x, y);

          if (d2 > 0)
          {
            y--;
            dy = dy - (2 * rx * rx);
            d2 = d2 + (rx * rx) - dy;
          }
          else
          {
            y--;
            x++;
            dx = dx + (2 * ry * ry);
            dy = dy - (2 * rx * rx);
            d2 = d2 + dx - dy + (rx * rx);
          }
        }
      }

      void display()
      {
        glClear(GL_COLOR_BUFFER_BIT);
        glColor3f(1.0, 1.0, 1.0);
        midpointEllipse();
        glFlush();
      }

      void init()
      {
        glClearColor(0.0, 0.0, 0.0, 1.0);
        gluOrtho2D(-500, 500, -500, 500);
      }

      int main(int argc, char** argv)
      {
        printf("Enter rx: ");
        scanf("%d", &rx);
        printf("Enter ry: ");
        scanf("%d", &ry);

        glutInit(&argc, argv);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutInitWindowSize(500, 500);
        glutInitWindowPosition(100, 100);
        glutCreateWindow("Midpoint Ellipse Algorithm - OpenGL");

        init();
        glutDisplayFunc(display);
        glutMainLoop();

        return 0;
      }`,
            },
          ],
          },
            {
            key: "scanline-and-boundary-fill-algorithms",
            name: "Practical - 6: Implement Scan-line and Boundary Fill algorithms",
            pageBlocks: [
              {
              type: "heading",
              value: "Practical 6 - Implement Scan-line and Boundary Fill algorithms for polygon filling",
              },
              {
              type: "code",
              fileName: "boundary_fill_4_connected.c",
              language: "c",
              value: `#include <GL/glut.h>
        #include <stdio.h>

        // Boundary color (Black)
        float boundaryColor[3] = {0.0, 0.0, 0.0};

        // Fill color (Red)
        float fillColor[3] = {1.0, 0.0, 0.0};

        // Function to set pixel
        void setPixel(int x, int y)
        {
          glColor3fv(fillColor);
          glBegin(GL_POINTS);
          glVertex2i(x, y);
          glEnd();
          glFlush();
        }

        // Function to get pixel color
        void getPixel(int x, int y, float color[3])
        {
          glReadPixels(x, y, 1, 1, GL_RGB, GL_FLOAT, color);
        }

        // Boundary Fill Function (4-connected)
        void boundaryFill(int x, int y)
        {
          float currentColor[3];

          getPixel(x, y, currentColor);

          // If current pixel is not boundary and not already filled
          if ((currentColor[0] != boundaryColor[0] ||
             currentColor[1] != boundaryColor[1] ||
             currentColor[2] != boundaryColor[2]) &&

            (currentColor[0] != fillColor[0] ||
             currentColor[1] != fillColor[1] ||
             currentColor[2] != fillColor[2]))
          {
            setPixel(x, y);

            // Recursive calls (4 directions)
            boundaryFill(x+1, y);
            boundaryFill(x-1, y);
            boundaryFill(x, y+1);
            boundaryFill(x, y-1);
          }
        }

        // Draw polygon boundary
        void drawPolygon()
        {
          glColor3fv(boundaryColor);

          glBegin(GL_LINE_LOOP);
            glVertex2i(150,150);
            glVertex2i(350,150);
            glVertex2i(350,350);
            glVertex2i(150,350);
          glEnd();

          glFlush();
        }

        // Mouse function to start filling
        void mouse(int button, int state, int x, int y)
        {
          if(button == GLUT_LEFT_BUTTON && state == GLUT_DOWN)
          {
            boundaryFill(x, 500 - y);  // Adjust y coordinate
          }
        }

        // Display function
        void display()
        {
          glClear(GL_COLOR_BUFFER_BIT);
          drawPolygon();
        }

        // Initialization
        void init()
        {
          glClearColor(1,1,1,1);  // White background
          gluOrtho2D(0,500,0,500);
        }

        // Main function
        int main(int argc, char** argv)
        {
          glutInit(&argc, argv);
          glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
          glutInitWindowSize(500,500);
          glutCreateWindow("Boundary Fill Algorithm - C");

          init();
          glutDisplayFunc(display);
          glutMouseFunc(mouse);
          glutMainLoop();

          return 0;
        }`,
              },
              {
              type: "code",
              fileName: "boundary_fill_8_connected.c",
              language: "c",
              value: `#include <GL/glut.h>
        #include <stdio.h>

        float boundaryColor[3] = {1.0, 0.0, 0.0}; // Red boundary
        float fillColor[3] = {0.0, 1.0, 0.0};     // Green fill

        void getPixel(int x, int y, float color[3]) {
          glReadPixels(x, y, 1, 1, GL_RGB, GL_FLOAT, color);
        }

        void setPixel(int x, int y) {
          glColor3fv(fillColor);
          glBegin(GL_POINTS);
          glVertex2i(x, y);
          glEnd();
          glFlush();
        }

        void boundaryFill8(int x, int y) {
          float currentColor[3];
          getPixel(x, y, currentColor);

          if ((currentColor[0] != boundaryColor[0] ||
             currentColor[1] != boundaryColor[1] ||
             currentColor[2] != boundaryColor[2]) &&
            (currentColor[0] != fillColor[0] ||
             currentColor[1] != fillColor[1] ||
             currentColor[2] != fillColor[2])) {

            setPixel(x, y);

            boundaryFill8(x+1, y);
            boundaryFill8(x-1, y);
            boundaryFill8(x, y+1);
            boundaryFill8(x, y-1);
            boundaryFill8(x+1, y+1);
            boundaryFill8(x-1, y+1);
            boundaryFill8(x+1, y-1);
            boundaryFill8(x-1, y-1);
          }
        }

        void display() {
          glClear(GL_COLOR_BUFFER_BIT);

          // Draw boundary (Square)
          glColor3f(1.0, 0.0, 0.0);
          glBegin(GL_LINE_LOOP);
          glVertex2i(100, 100);
          glVertex2i(200, 100);
          glVertex2i(200, 200);
          glVertex2i(100, 200);
          glEnd();

          glFlush();

          boundaryFill8(150, 150); // Seed point
        }

        void init() {
          glClearColor(1.0, 1.0, 1.0, 0.0);
          gluOrtho2D(0, 300, 0, 300);
        }

        int main(int argc, char** argv) {
          glutInit(&argc, argv);
          glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
          glutInitWindowSize(300, 300);
          glutCreateWindow("8-Connected Boundary Fill");
          init();
          glutDisplayFunc(display);
          glutMainLoop();
          return 0;
        }`,
              },
              {
              type: "code",
              fileName: "scanline_fill.c",
              language: "c",
              value: `#include <GL/glut.h>
        #include <stdio.h>
        #include <stdlib.h>

        int x[10], y[10];   // polygon vertices
        int n = 4;          // number of vertices

        // Function to draw a pixel
        void drawPixel(int px, int py)
        {
          glBegin(GL_POINTS);
          glVertex2i(px, py);
          glEnd();
        }

        // Scan-line filling function
        void scanline()
        {
          int i, j, k;
          int ymin = 500, ymax = 0;
          int interx[10];

          // Find ymin and ymax
          for(i = 0; i < n; i++)
          {
            if(y[i] < ymin)
              ymin = y[i];
            if(y[i] > ymax)
              ymax = y[i];
          }

          // Move scanline from ymin to ymax
          for(int scan = ymin; scan <= ymax; scan++)
          {
            k = 0;   // reset intersection counter

            // Check each edge
            for(i = 0; i < n; i++)
            {
              int next = (i + 1) % n;

              // Ignore horizontal edges
              if(y[i] == y[next])
                continue;

              // Check if scanline intersects edge
              if(scan >= (y[i] < y[next] ? y[i] : y[next]) &&
                 scan <  (y[i] > y[next] ? y[i] : y[next]))
              {
                interx[k] = x[i] + (scan - y[i]) *
                       (x[next] - x[i]) /
                       (y[next] - y[i]);
                k++;
              }
            }

            // Sort intersection points (simple bubble sort)
            for(i = 0; i < k-1; i++)
            {
              for(j = i+1; j < k; j++)
              {
                if(interx[i] > interx[j])
                {
                  int temp = interx[i];
                  interx[i] = interx[j];
                  interx[j] = temp;
                }
              }
            }

            // Fill between pairs
            for(i = 0; i < k; i += 2)
            {
              for(j = interx[i]; j <= interx[i+1]; j++)
              {
                drawPixel(j, scan);
              }
            }
          }
        }

        // Display function
        void display()
        {
          glClear(GL_COLOR_BUFFER_BIT);
          glColor3f(1, 0, 0);   // red fill color
          scanline();
          glFlush();
        }

        // Initialization
        void init()
        {
          glClearColor(1,1,1,1);
          gluOrtho2D(0, 500, 0, 500);
        }

        // Main function
        int main(int argc, char** argv)
        {
          // Define polygon vertices
          x[0] = 100; y[0] = 100;
          x[1] = 200; y[1] = 300;
          x[2] = 350; y[2] = 250;
          x[3] = 300; y[3] = 100;

          glutInit(&argc, argv);
          glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
          glutInitWindowSize(500, 500);
          glutCreateWindow("Scan Line Polygon Fill - C");

          init();
          glutDisplayFunc(display);
          glutMainLoop();

          return 0;
        }`,
              },
            ],
            },
          {
            key: "flood-fill-algorithm",
            name: "Practical - 7: Implement Flood Fill Algorithm",
            pageBlocks: [
              {
                type: "heading",
                value: "Practical 7 - Implement Flood Fill Algorithm to fill a closed shape with color",
              },
              {
                type: "code",
                fileName: "flood_fill.c",
                language: "c",
                value: `#include <GL/glut.h>
    #include <stdio.h>

    float fillColor[] = {1.0, 0.0, 0.0};
    float oldColor[]  = {1.0, 1.0, 1.0};

    void getPixel(int x, int y, float color[3])
    {
        glReadPixels(x, y, 1, 1, GL_RGB, GL_FLOAT, color);
    }

    void setPixel(int x, int y)
    {
        glColor3fv(fillColor);
        glBegin(GL_POINTS);
        glVertex2i(x, y);
        glEnd();
        glFlush();
    }

    void floodFill(int x, int y)
    {
        float current[3];
        getPixel(x, y, current);

        if (current[0] == oldColor[0] &&
            current[1] == oldColor[1] &&
            current[2] == oldColor[2])
        {
            setPixel(x, y);

            floodFill(x + 1, y);
            floodFill(x - 1, y);
            floodFill(x, y + 1);
            floodFill(x, y - 1);
        }
    }

    void display()
    {
        glClear(GL_COLOR_BUFFER_BIT);

        glColor3f(0.0, 0.0, 0.0);
        glBegin(GL_LINE_LOOP);
            glVertex2i(200, 200);
            glVertex2i(400, 200);
            glVertex2i(400, 400);
            glVertex2i(200, 400);
        glEnd();

        floodFill(300, 300);

        glFlush();
    }

    void init()
    {
        glClearColor(1.0, 1.0, 1.0, 1.0);
        gluOrtho2D(0, 500, 0, 500);
    }

    int main(int argc, char** argv)
    {
        glutInit(&argc, argv);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutInitWindowSize(500, 500);
        glutCreateWindow("Simple Flood Fill");

        init();
        glutDisplayFunc(display);

        glutMainLoop();
        return 0;
    }`,
              },
            ],
          },
          {
            key: "2d-transformations",
            name: "Practical - 8: Perform translation, scaling, rotation, reflection, and shearing on 2D objects",
            pageBlocks: [
              {
                type: "heading",
                value:
                  "Practical 8 - Perform translation, scaling, rotation, reflection, and shearing on 2D objects",
              },
              {
                type: "code",
                fileName: "2d_transformations.c",
                language: "c",
                value: `#include <GL/glut.h>
#include <math.h>

// Original triangle points
float x1 = 50, y1 = 50;
float x2 = 100, y2 = 50;
float x3 = 75, y3 = 100;

// Function to draw triangle
void drawTriangle(float a1, float b1, float a2, float b2, float a3, float b3) {
    glBegin(GL_TRIANGLES);
    glVertex2f(a1, b1);
    glVertex2f(a2, b2);
    glVertex2f(a3, b3);
    glEnd();
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    // Original
    glColor3f(1.0f, 0.0f, 0.0f);
    drawTriangle(x1, y1, x2, y2, x3, y3);

    // Translation
    glColor3f(0.0f, 1.0f, 0.0f);
    drawTriangle(x1 + 100, y1 + 50, x2 + 100, y2 + 50, x3 + 100, y3 + 50);

    // Scaling
    glColor3f(0.0f, 0.0f, 1.0f);
    drawTriangle(x1 * 1.5f, y1 * 1.5f, x2 * 1.5f, y2 * 1.5f, x3 * 1.5f, y3 * 1.5f);

    // Rotation
    float angle = 45.0f * 3.1416f / 180.0f;
    float rx1 = x1 * cos(angle) - y1 * sin(angle);
    float ry1 = x1 * sin(angle) + y1 * cos(angle);
    float rx2 = x2 * cos(angle) - y2 * sin(angle);
    float ry2 = x2 * sin(angle) + y2 * cos(angle);
    float rx3 = x3 * cos(angle) - y3 * sin(angle);
    float ry3 = x3 * sin(angle) + y3 * cos(angle);

    glColor3f(1.0f, 1.0f, 0.0f);
    drawTriangle(rx1, ry1, rx2, ry2, rx3, ry3);

    // Reflection (about X-axis)
    glColor3f(1.0f, 0.0f, 1.0f);
    drawTriangle(x1, -y1, x2, -y2, x3, -y3);

    // Shearing (X-direction)
    float shx = 1.0f;
    glColor3f(1.0f, 0.5f, 0.0f);
    drawTriangle(
        x1 + shx * y1, y1,
        x2 + shx * y2, y2,
        x3 + shx * y3, y3
    );

    glFlush();
}

void init() {
    glClearColor(1.0f, 1.0f, 1.0f, 1.0f);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(-300, 300, -300, 300);
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("All 2D Transformations");

    init();
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}`,
              },
            ],
          },
          {
            key: "cohen-sutherland-line-clipping",
            name: "Practical - 9: Implement the Cohen-Sutherland algorithm for line clipping within a viewport",
            pageBlocks: [
              {
                type: "heading",
                value:
                  "Practical 9 - Implement the Cohen-Sutherland algorithm for line clipping within a viewport",
              },
              {
                type: "code",
                fileName: "cohen_sutherland_clipping.c",
                language: "c",
                value: `#include <GL/glut.h>

// Clipping window
float xmin = 100, ymin = 100, xmax = 300, ymax = 300;

// Line points
float x1 = 50, y1 = 50, x2 = 350, y2 = 350;

// Region codes
int getCode(float x, float y) {
    int code = 0;

    if (x < xmin) code |= 1;   // LEFT
    if (x > xmax) code |= 2;   // RIGHT
    if (y < ymin) code |= 4;   // BOTTOM
    if (y > ymax) code |= 8;   // TOP

    return code;
}

void clipLine() {
    float lx1 = x1, ly1 = y1, lx2 = x2, ly2 = y2;
    int c1 = getCode(lx1, ly1);
    int c2 = getCode(lx2, ly2);
    float x, y;

    while (1) {
        if (c1 == 0 && c2 == 0) {
            break;
        }

        if (c1 & c2) {
            return;
        }

        int c = c1 ? c1 : c2;

        if (c & 8) {
            x = lx1 + (lx2 - lx1) * (ymax - ly1) / (ly2 - ly1);
            y = ymax;
        } else if (c & 4) {
            x = lx1 + (lx2 - lx1) * (ymin - ly1) / (ly2 - ly1);
            y = ymin;
        } else if (c & 2) {
            y = ly1 + (ly2 - ly1) * (xmax - lx1) / (lx2 - lx1);
            x = xmax;
        } else {
            y = ly1 + (ly2 - ly1) * (xmin - lx1) / (lx2 - lx1);
            x = xmin;
        }

        if (c == c1) {
            lx1 = x;
            ly1 = y;
            c1 = getCode(lx1, ly1);
        } else {
            lx2 = x;
            ly2 = y;
            c2 = getCode(lx2, ly2);
        }
    }

    glColor3f(0.0f, 1.0f, 0.0f);
    glBegin(GL_LINES);
    glVertex2f(lx1, ly1);
    glVertex2f(lx2, ly2);
    glEnd();
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    // Viewport
    glColor3f(1.0f, 1.0f, 1.0f);
    glBegin(GL_LINE_LOOP);
    glVertex2f(xmin, ymin);
    glVertex2f(xmax, ymin);
    glVertex2f(xmax, ymax);
    glVertex2f(xmin, ymax);
    glEnd();

    // Original line
    glColor3f(1.0f, 0.0f, 0.0f);
    glBegin(GL_LINES);
    glVertex2f(50, 50);
    glVertex2f(350, 350);
    glEnd();

    // Clipped line
    clipLine();

    glFlush();
}

void init() {
    glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0, 400, 0, 400);
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(400, 400);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Line Clipping");

    init();
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}`,
              },
            ],
          },
          {
            key: "sutherland-hodgman-polygon-clipping",
            name: "Practical - 10: Implement the Sutherland-Hodgman algorithm for polygon clipping",
            pageBlocks: [
              {
                type: "heading",
                value:
                  "Practical 10 - Implement the Sutherland-Hodgman algorithm for polygon clipping",
              },
              {
                type: "code",
                fileName: "sutherland_hodgman_clipping.c",
                language: "c",
                value: `#include <GL/glut.h>

typedef struct {
    float x, y;
} Point;

#define MAX 20

Point poly[MAX] = {
    {50, 150},
    {200, 50},
    {350, 150},
    {200, 300}
};
Point clipped[MAX];
int n = 4;

// Clipping window
float xmin = 100, ymin = 100, xmax = 300, ymax = 300;

void drawPolygon(Point p[], int count) {
    if (count <= 0) {
        return;
    }

    glBegin(GL_LINE_LOOP);
    for (int i = 0; i < count; i++) {
        glVertex2f(p[i].x, p[i].y);
    }
    glEnd();
}

int inside(Point p, int edge) {
    switch (edge) {
        case 0: return p.x >= xmin; // Left
        case 1: return p.x <= xmax; // Right
        case 2: return p.y >= ymin; // Bottom
        default: return p.y <= ymax; // Top
    }
}

Point intersect(Point s, Point e, int edge) {
    Point p;

    if (edge == 0 || edge == 1) {
        float xedge = (edge == 0) ? xmin : xmax;
        p.x = xedge;
        p.y = s.y + (e.y - s.y) * (xedge - s.x) / (e.x - s.x);
    } else {
        float yedge = (edge == 2) ? ymin : ymax;
        p.y = yedge;
        p.x = s.x + (e.x - s.x) * (yedge - s.y) / (e.y - s.y);
    }

    return p;
}

int clipWithEdge(Point input[], int inCount, Point output[], int edge) {
    if (inCount <= 0) {
        return 0;
    }

    int outCount = 0;
    Point s = input[inCount - 1];

    for (int i = 0; i < inCount; i++) {
        Point e = input[i];
        int sIn = inside(s, edge);
        int eIn = inside(e, edge);

        if (eIn) {
            if (!sIn) {
                output[outCount++] = intersect(s, e, edge);
            }
            output[outCount++] = e;
        } else if (sIn) {
            output[outCount++] = intersect(s, e, edge);
        }

        s = e;
    }

    return outCount;
}

int clipPolygon(Point input[], int inCount, Point output[]) {
    Point temp1[MAX], temp2[MAX];
    int count = inCount;

    for (int i = 0; i < inCount; i++) {
        temp1[i] = input[i];
    }

    count = clipWithEdge(temp1, count, temp2, 0);
    count = clipWithEdge(temp2, count, temp1, 1);
    count = clipWithEdge(temp1, count, temp2, 2);
    count = clipWithEdge(temp2, count, temp1, 3);

    for (int i = 0; i < count; i++) {
        output[i] = temp1[i];
    }

    return count;
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    // Clipping window
    glColor3f(1.0f, 1.0f, 1.0f);
    glBegin(GL_LINE_LOOP);
    glVertex2f(xmin, ymin);
    glVertex2f(xmax, ymin);
    glVertex2f(xmax, ymax);
    glVertex2f(xmin, ymax);
    glEnd();

    // Original polygon
    glColor3f(1.0f, 0.0f, 0.0f);
    drawPolygon(poly, n);

    // Clipped polygon
    int newn = clipPolygon(poly, n, clipped);
    glColor3f(0.0f, 1.0f, 0.0f);
    drawPolygon(clipped, newn);

    glFlush();
}

void init() {
    glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0, 500, 0, 500);
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutCreateWindow("Polygon Clipping");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

                return 0;
}`,
              },
            ],
          },
          {
            key: "3d-transformations",
            name: "Practical - 11: Perform 3D translation, scaling, rotation, reflection, and shearing",
            pageBlocks: [
              {
                type: "heading",
                value:
                  "Practical 11 - Perform 3D translation, scaling, rotation, reflection, and shearing",
              },
              {
                type: "code",
                fileName: "3d_transformations.c",
                language: "c",
                value: `#include <GL/glut.h>
#include <stdlib.h>

// Transformation variables
float tx = 0.0f, ty = 0.0f, tz = 0.0f;
float sx = 1.0f, sy = 1.0f, sz = 1.0f;
float angle = 0.0f;

int mode = 0;
// 1=translate, 2=scale, 3=rotate, 4=reflect, 5=shear

// Draw coordinate axes
void drawAxes() {
    glBegin(GL_LINES);

    // X axis (Red)
    glColor3f(1.0f, 0.0f, 0.0f);
    glVertex3f(0.0f, 0.0f, 0.0f);
    glVertex3f(3.0f, 0.0f, 0.0f);

    // Y axis (Green)
    glColor3f(0.0f, 1.0f, 0.0f);
    glVertex3f(0.0f, 0.0f, 0.0f);
    glVertex3f(0.0f, 3.0f, 0.0f);

    // Z axis (Blue)
    glColor3f(0.0f, 0.0f, 1.0f);
    glVertex3f(0.0f, 0.0f, 0.0f);
    glVertex3f(0.0f, 0.0f, 3.0f);

    glEnd();
}

// Apply 3D shear
void applyShear() {
    GLfloat shearMatrix[] = {
        1.0f, 0.5f, 0.0f, 0.0f,
        0.5f, 1.0f, 0.0f, 0.0f,
        0.0f, 0.0f, 1.0f, 0.0f,
        0.0f, 0.0f, 0.0f, 1.0f
    };
    glMultMatrixf(shearMatrix);
}

// Apply reflection across the YZ plane
void applyReflection() {
    GLfloat reflectMatrix[] = {
        -1.0f, 0.0f, 0.0f, 0.0f,
         0.0f, 1.0f, 0.0f, 0.0f,
         0.0f, 0.0f, 1.0f, 0.0f,
         0.0f, 0.0f, 0.0f, 1.0f
    };
    glMultMatrixf(reflectMatrix);
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
    gluLookAt(4.0, 4.0, 6.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);

    drawAxes();

    // Original object
    glPushMatrix();
    glTranslatef(1.5f, 0.0f, 0.0f);
    glColor3f(0.0f, 1.0f, 0.0f);
    glutWireCube(1.0);
    glPopMatrix();

    // Reflected object
    if (mode == 4) {
        glPushMatrix();
        applyReflection();
        glTranslatef(1.5f, 0.0f, 0.0f);
        glColor3f(1.0f, 0.0f, 0.0f);
        glutWireCube(1.0);
        glPopMatrix();
    }

    // Other transforms
    if (mode != 4) {
        glPushMatrix();
        glTranslatef(1.5f, 0.0f, 0.0f);

        if (mode == 1) {
            glTranslatef(tx, ty, tz);
        } else if (mode == 2) {
            glScalef(sx, sy, sz);
        } else if (mode == 3) {
            glRotatef(angle, 1.0f, 1.0f, 1.0f);
        } else if (mode == 5) {
            applyShear();
        }

        glColor3f(1.0f, 1.0f, 1.0f);
        glutWireCube(1.0);
        glPopMatrix();
    }

    glutSwapBuffers();
}

void keyboard(unsigned char key, int x, int y) {
    (void)x;
    (void)y;

    switch (key) {
        case 't':
            mode = 1;
            tx += 0.3f;
            break;
        case 's':
            mode = 2;
            sx += 0.2f;
            sy += 0.2f;
            sz += 0.2f;
            break;
        case 'r':
            mode = 3;
            angle += 10.0f;
            break;
        case 'f':
            mode = 4;
            break;
        case 'h':
            mode = 5;
            break;
        case 'c':
            tx = ty = tz = 0.0f;
            sx = sy = sz = 1.0f;
            angle = 0.0f;
            mode = 0;
            break;
        case 27:
            exit(0);
    }

    glutPostRedisplay();
}

void init() {
    glEnable(GL_DEPTH_TEST);
    glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
}

void reshape(int w, int h) {
    glViewport(0, 0, w, h);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluPerspective(60.0, (float)w / (float)h, 1.0, 100.0);
    glMatrixMode(GL_MODELVIEW);
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    glutInitWindowSize(800, 600);
    glutCreateWindow("3D Transformations - OpenGL");

    init();
    glutDisplayFunc(display);
    glutReshapeFunc(reshape);
    glutKeyboardFunc(keyboard);

    glutMainLoop();
    return 0;
}`,
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
