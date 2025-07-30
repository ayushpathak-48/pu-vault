export const sem3PracticalCodes = [
  // AI
  {
    subject_name: "Artificial Intelligence II",
    key: "artificial-intelligence-II",
    specialization: "ai",
    language: "python",
    practicals: [
      {
        key: "guess-number",
        name: "Guess a number",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical - Guess a number",
          },
          {
            type: "code",
            fileName: "guess-number.py",
            value: `import random as rd

print("Guessing the number")
print("Range of Numbers")

start = int(input("enter starting point :"))
end = int(input("enter ending point :"))

think = rd.randint(start,end);

while True:
    guess = int(input("Guess the number :"))
    if guess > think:
        print("Guess a lower number :")
    elif guess < think:
        print("Guess a higher number :")
    else:
        print("You have guessed right number")
        break
`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Guessing the number
Range of Numbers
enter starting point :10
enter ending point :20
Guess the number :11
Guess a higher number :
Guess the number :13
Guess a higher number :
Guess the number :15
Guess a higher number :
Guess the number :19
Guess a lower number :
Guess the number :17
Guess a higher number :
Guess the number :18
You have guessed right number`,
          },
        ],
      },
      {
        key: "8-puzzle-problem",
        name: "8 Puzzle Problem",
        pageBlocks: [
          {
            type: "heading",
            value: "8 Puzzle Problem",
          },
          {
            type: "code",
            fileName: "8-puzzle-problem.py",
            value: `from copy import deepcopy

goal_state = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
]

moves = [(-1, 0), (1, 0), (0, -1), (0, 1)]

def find_zero(state):
    for i in range(3):
        for j in range(3):
            if state[i][j] == 0:
                return i, j

def is_goal(state):
    return state == goal_state

def get_neighbors(state):
    x, y = find_zero(state)
    neighbors = []
    for dx, dy in moves:
        nx, ny = x + dx, y + dy
        if 0 <= nx < 3 and 0 <= ny < 3:
            new_state = deepcopy(state)
            new_state[x][y], new_state[nx][ny] = new_state[nx][ny], new_state[x][y]
            neighbors.append(new_state)
    return neighbors

def dfs(start_state, max_depth=50):
    stack = [(start_state, [start_state])]
    visited = set()

    while stack:
        state, path = stack.pop()
        state_tuple = tuple(map(tuple, state))

        if state_tuple in visited:
            continue
        visited.add(state_tuple)

        if is_goal(state):
            return path

        if len(path) <= max_depth:
            for neighbor in get_neighbors(state):
                stack.append((neighbor, path + [neighbor]))

    return None

initial_state = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 5, 8]
]

solution = dfs(initial_state)

if solution:
    print(f"Solution found in {len(solution)-1} moves using DFS:")
    for step in solution:
        for row in step:
            print(row)
        print()
else:
    print("No solution found (may be due to depth limit).")
`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Solution found in 2 moves using DFS:
[1, 2, 3]
[4, 0, 6]
[7, 5, 8]

[1, 2, 3]
[4, 5, 6]
[7, 0, 8]

[1, 2, 3]
[4, 5, 6]
[7, 8, 0]`,
          },
        ],
      },
      {
        key: "bfs-water-jug",
        name: "BFS Water Jug Problem",
        pageBlocks: [
          {
            type: "heading",
            value: "BFS Water Jug Problem",
          },
          {
            type: "code",
            fileName: "bfs-water-jug.py",
            value: `from collections import deque

def is_valid(state, visited):
    return state not in visited

def bfs_water_jug(jug1_capacity, jug2_capacity, target):
    visited = set()
    parent = {}
    queue = deque()

    start = (0, 0)
    queue.append(start)
    visited.add(start)
    parent[start] = None

    while queue:
        x, y = queue.popleft()

        if x == target or y == target:
            path = []
            current = (x, y)
            while current is not None:
                path.append(current)
                current = parent[current]
            path.reverse()
            return path

        next_states = [
            (jug1_capacity, y),
            (x, jug2_capacity),
            (0, y),
            (x, 0),
            (0, x + y) if x + y <= jug2_capacity else (x - (jug2_capacity - y), jug2_capacity),
            (x + y, 0) if x + y <= jug1_capacity else (jug1_capacity, y - (jug1_capacity - x))
        ]

        for state in next_states:
            if is_valid(state, visited):
                visited.add(state)
                parent[state] = (x, y)
                queue.append(state)

    return None

jug1 = 4
jug2 = 3
target = 2
solution_path = bfs_water_jug(jug1, jug2, target)

if solution_path:
    print("Solution steps:")
    for step in solution_path:
        print(step)
else:
    print("No solution found.")
`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Solution steps:
(0, 0)
(0, 3)
(3, 0)
(3, 3)
(4, 2)`,
          },
        ],
      },
      {
        key: "dfs-water-jug-problem",
        name: "DFS Water Jug Problem",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical - DFS Water Jug Problem",
          },
          {
            type: "code",
            fileName: "dfs-water-jug.py",
            value: `from collections import deque


def solve_water(capacity_jug1,capacity_jug2,target):
    queue = deque([(0,0,[])])
    checkpoint = set()

    while queue:
        current_jug1,current_jug2,mark = queue.popleft()

        if current_jug1 == target or current_jug2 == target:
            return mark

        if(current_jug1,current_jug2) in checkpoint:
            continue

        checkpoint.add((current_jug1,current_jug2))

        actions = [
            ('fill jug 1',capacity_jug1,current_jug2),
            ('fill jug 2',current_jug1,capacity_jug2),
            ('empty jug 1',0,current_jug2),
            ('empty jug 2',current_jug1,0),
            ('pour jug 1 to jug 2',max(current_jug1 - (capacity_jug2 - current_jug2),0),min(current_jug1+current_jug2,capacity_jug2)),
            ('pour jug 2 to jug 1',min(current_jug1+current_jug2,capacity_jug1),max(current_jug2-(capacity_jug1-current_jug1),0))
        ]

        for action,new_jug_1,new_jug_2 in actions:
            queue.append((new_jug_1,new_jug_2,mark+[action]))

    return None


capacity_jug1 = 5
capacity_jug2 = 6
target = 2

output = solve_water(capacity_jug1,capacity_jug2,target)

if output:
    print("Solution Found")
    print("Steps:",len(output))
    print("Path:",output)
else:
    print("Solution not Found")`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Solution Found
Steps: 6
Path: ['fill jug 2', 'pour jug 2 to jug 1', 'empty jug 1', 'pour jug 2 to jug 1', 'fill jug 2', 'pour jug 2 to jug 1']`,
          },
        ],
      },
      // tic-tac-toe
      {
        key: "tic-tac",
        name: "Tic Tac Toe",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical - Tic Tac Toe",
          },
          {
            type: "code",
            fileName: "tic-tac-toe.py",
            value: `#Implementation of Two Player Tic-Tac-Toe game in Python.

''' We will make the board using dictionary 
    in which keys will be the location(i.e : top-left,mid-right,etc.)
    and initialliy it's values will be empty space and then after every move 
    we will change the value according to player's choice of move. '''

theBoard = {'7': ' ' , '8': ' ' , '9': ' ' ,
            '4': ' ' , '5': ' ' , '6': ' ' ,
            '1': ' ' , '2': ' ' , '3': ' ' }

board_keys = []

for key in theBoard:
    board_keys.append(key)

''' We will have to print the updated board after every move in the game and 
    thus we will make a function in which we'll define the printBoard function
    so that we can easily print the board everytime by calling this function. '''

def printBoard(board):
    print(board['7'] + '|' + board['8'] + '|' + board['9'])
    print('-+-+-')
    print(board['4'] + '|' + board['5'] + '|' + board['6'])
    print('-+-+-')
    print(board['1'] + '|' + board['2'] + '|' + board['3'])

# Now we'll write the main function which has all the gameplay functionality.
def game():

    turn = 'X'
    count = 0


    for i in range(10):
        printBoard(theBoard)
        print("It's your turn," + turn + ".Move to which place?")

        move = input()        

        if theBoard[move] == ' ':
            theBoard[move] = turn
            count += 1
        else:
            print("That place is already filled.\\nMove to which place?")
            continue

        # Now we will check if player X or O has won,for every move after 5 moves. 
        if count >= 5:
            if theBoard['7'] == theBoard['8'] == theBoard['9'] != ' ': # across the top
                printBoard(theBoard)
                print("\\nGame Over.\\n")                
                print(" **** " +turn + " won. ****")                
                break
            elif theBoard['4'] == theBoard['5'] == theBoard['6'] != ' ': # across the middle
                printBoard(theBoard)
                print("\\nGame Over.\\n")                
                print(" **** " +turn + " won. ****")
                break
            elif theBoard['1'] == theBoard['2'] == theBoard['3'] != ' ': # across the bottom
                printBoard(theBoard)
                print("\\nGame Over.\\n")                
                print(" **** " +turn + " won. ****")
                break
            elif theBoard['1'] == theBoard['4'] == theBoard['7'] != ' ': # down the left side
                printBoard(theBoard)
                print("\\nGame Over.\\n")                
                print(" **** " +turn + " won. ****")
                break
            elif theBoard['2'] == theBoard['5'] == theBoard['8'] != ' ': # down the middle
                printBoard(theBoard)
                print("\\nGame Over.\\n")                
                print(" **** " +turn + " won. ****")
                break
            elif theBoard['3'] == theBoard['6'] == theBoard['9'] != ' ': # down the right side
                printBoard(theBoard)
                print("\\nGame Over.\\n")                
                print(" **** " +turn + " won. ****")
                break 
            elif theBoard['7'] == theBoard['5'] == theBoard['3'] != ' ': # diagonal
                printBoard(theBoard)
                print("\\nGame Over.\\n")                
                print(" **** " +turn + " won. ****")
                break
            elif theBoard['1'] == theBoard['5'] == theBoard['9'] != ' ': # diagonal
                printBoard(theBoard)
                print("\\nGame Over.\\n")                
                print(" **** " +turn + " won. ****")
                break 

        # If neither X nor O wins and the board is full, we'll declare the result as 'tie'.
        if count == 9:
            print("\\nGame Over.\\n")                
            print("It's a Tie!!")

        # Now we have to change the player after every move.
        if turn =='X':
            turn = 'O'
        else:
            turn = 'X'        
    
    # Now we will ask if player wants to restart the game or not.
    restart = input("Do want to play Again?(y/n)")
    if restart == "y" or restart == "Y":  
        for key in board_keys:
            theBoard[key] = " "

        game()

if __name__ == "__main__":
    game()`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: ` | | 
-+-+-
 | | 
-+-+-
 | | 
It's your turn, X. Move to which place?`,
          },
        ],
      },
      // sales-man
      {
        key: "salesman",
        name: "Travelling Salesman Problem",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical - Travelling Salesman Problem",
          },
          {
            type: "code",
            fileName: "travelling-salesman.py",
            value: `import itertools


graph = [
    [0,10,15,20],
    [10,0,35,25],
    [15,35,0,30],
    [20,25,30,0],
]

city_names = ['A', 'B' , 'C', 'D']
num_cities = len(graph)

start = 0
cities = list(range(num_cities))

min_cost = float('inf')
best_paths = []

for perm in itertools.permutations(cities[1:]):
    path = [start] + list(perm) + [start]  # complete round-trip
    cost = 0
    for i in range(len(path) - 1):
        cost += graph[path[i]][path[i + 1]]
        
    name_path = [city_names[i] for i in path]
    print(f"Path: {'->'.join(name_path)},Cost:{cost}")
    
    if cost < min_cost:
        min_cost = cost
        best_paths = [path]
    elif cost == min_cost:
        best_paths.append(path)

# Print results
print("\nShortest Path(s):")

for path in best_paths:
    name_path = [city_names[i] for i in path]
    print(f'{'->'.join(name_path)}')`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Path: A->B->C->D->A,Cost:80
Path: A->B->D->C->A,Cost:95
Path: A->C->B->D->A,Cost:95
Path: A->C->D->B->A,Cost:80
Path: A->D->B->C->A,Cost:105
Path: A->D->C->B->A,Cost:95

Shortest Path(s):
A->B->C->D->A
A->C->D->B->A`,
          },
        ],
      },
    ],
  },
  // bda
  {
    subject_name: "Big Data Analytics - II",
    key: "big-data-anlytics-II",
    specialization: "bda",
    language: "python",
    practicals: [
      {
        key: "set-and-map",
        name: "Practical - 2: Set & Map",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 2 - Set & Map",
          },
          {
            type: "code",
            fileName: "set_map.py",
            value: `class Student:
    def _init_(self, name, rollno, m1, m2):
        self.name = name
        self.rollno = rollno
        self.m1 = m1
        self.m2 = m2

# Global list to store student objects
ls = []

def accept(name, rollno, marks1, marks2):
    ob = Student(name, rollno, marks1, marks2)
    ls.append(ob)

def display(ob):
    print("Name   :", ob.name)
    print("RollNo :", ob.rollno)
    print("Marks1 :", ob.m1)
    print("Marks2 :", ob.m2)
    print()

def search(rn):
    for i in range(len(ls)):
        if ls[i].rollno == rn:
            return i
    return -1

def delete(rn):
    i = search(rn)
    if i != -1:
        del ls[i]
    else:
        print("Student not found.")

def update(rn, new_rollno):
    i = search(rn)
    if i != -1:
        ls[i].rollno = new_rollno
    else:
        print("Student not found.")

# Main operations
print("\\nOperations Used:")
print("1. Accept Student details")
print("2. Display Student details")
print("3. Search Student by Roll No")
print("4. Delete Student by Roll No")
print("5. Update Student Roll No")
print("6. Exit")

# Accept student data
accept("A", 1, 100, 100)
accept("B", 2, 90, 90)
accept("C", 3, 80, 80)

# Display all students
print("\\nList of Students:\\n")
for i in range(len(ls)):
    display(ls[i])

# Search student
print("\\nSearching for student with RollNo 2...")
s = search(2)
if s != -1:
    print("Student Found:\\n")
    display(ls[s])
else:
    print("Student not found.\\n")

# Delete student
print("Deleting student with RollNo 2...")
delete(2)

# Display after deletion
print("\\nList after Deletion:\\n")
for i in range(len(ls)):
    display(ls[i])

# Update student
print("Updating RollNo of student with RollNo 3 to 2...")
update(3, 2)

# Display after update
print("\\nList after Updation:\\n")
for i in range(len(ls)):
    display(ls[i])

print("Thank You!")`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Operations Used:
1. Accept Student details
2. Display Student details
3. Search Student by Roll No
4. Delete Student by Roll No
5. Update Student Roll No
6. Exit

List of Students:

Name   : A
RollNo : 1
Marks1 : 100
Marks2 : 100

Name   : B
RollNo : 2
Marks1 : 90
Marks2 : 90

Name   : C
RollNo : 3
Marks1 : 80
Marks2 : 80


Searching for student with RollNo 2...
Student Found:

Name   : B
RollNo : 2
Marks1 : 90
Marks2 : 90

Deleting student with RollNo 2...

List after Deletion:

Name   : A
RollNo : 1
Marks1 : 100
Marks2 : 100

Name   : C
RollNo : 3
Marks1 : 80
Marks2 : 80

Updating RollNo of student with RollNo 3 to 2...

List after Updation:

Name   : A
RollNo : 1
Marks1 : 100
Marks2 : 100

Name   : C
RollNo : 2
Marks1 : 80
Marks2 : 80

Thank You!`,
          },
        ],
      },
    ],
  },
  // WAD
  {
    subject_name: "Web Application Development",
    key: "web-application-development",
    practicals: [
      {
        key: "welcome-to-asp",
        name: "Practical - 1: Display Welcome Message using Button Click",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 1 - Display Welcome Message using Button Click",
          },
          {
            type: "btn",
            title:
              "Download Project: Display Welcome Message using Button Click",
            value:
              "https://github.com/ayushpathak-48/DisplayMessageOnBtnClick/archive/refs/heads/master.zip",
          },
          {
            type: "code",
            language: "html",
            fileName: "Deafult.aspx",
            value: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WelcomeApp.Default" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>Welcome Application</title></head>
<body>
    <form id="form1" runat="server">
        <div style="text-align:center; margin-top:50px;">
            <asp:Button ID="btnWelcome" runat="server" Text="Click" OnClick="btnWelcome_Click" />
            <br /><br />
            <asp:Label ID="lblMessage" runat="server" Font-Size="Large" ForeColor="Green"></asp:Label>
        </div>
    </form>
</body>
</html>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "Deafult.aspx.cs",
            value: `using System;

namespace WelcomeApp
{
    public partial class Default : System.Web.UI.Page
    {
        protected void btnWelcome_Click(object sender, EventArgs e)
        {
            lblMessage.Text = "Welcome to the world of ASP.NET";
        }
    }
}`,
          },
          // {
          //   type: "code",
          //   language: "text",
          //   is_output: false,
          //   value: ``,
          // },
        ],
      },
      {
        key: "maksheet-using-web-controls",
        name: "Practical - 2: Student Marksheet using web controls",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 2 - Student Marksheet using web controls",
          },
          {
            type: "btn",
            title: "Download Project: Student Marksheet using web controls",
            value:
              "https://github.com/ayushpathak-48/StudentMarksheet/archive/refs/heads/master.zip",
          },
          {
            type: "code",
            fileName: "Deafult.aspx",
            language: "html",
            value: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="program23.WebForm1" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Marks Calculator</title>
</head>
<body>
    <form id="form1" runat="server">
        <table>
            <tr><td>Enrollment No:</td><td><asp:TextBox ID="txtEnroll" runat="server"></asp:TextBox></td></tr>
            <tr><td>Name:</td><td><asp:TextBox ID="txtName" runat="server"></asp:TextBox></td></tr>
            <tr><td>Subject 1:</td><td><asp:TextBox ID="txtSub1" runat="server"></asp:TextBox></td></tr>
            <tr><td>Subject 2:</td><td><asp:TextBox ID="txtSub2" runat="server"></asp:TextBox></td></tr>
            <tr><td>Subject 3:</td><td><asp:TextBox ID="txtSub3" runat="server"></asp:TextBox></td></tr>
            <tr><td>Subject 4:</td><td><asp:TextBox ID="txtSub4" runat="server"></asp:TextBox></td></tr>
            <tr><td>Subject 5:</td><td><asp:TextBox ID="txtSub5" runat="server"></asp:TextBox></td></tr>
            <tr><td colspan="2"><asp:Button ID="btnCalculate" runat="server" Text="Calculate" OnClick="btnCalculate_Click" /></td></tr>
        </table>
        <asp:Label ID="lblResult" runat="server" ForeColor="Blue"></asp:Label>
    </form>
</body>
</html>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "Deafult.aspx.cs",
            value: `using System;
using System.Web.UI;

namespace program23
{
    public partial class WebForm1 : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // Optional: Initialization logic
        }

        protected void btnCalculate_Click(object sender, EventArgs e)
        {
            try
            {
                int sub1 = int.Parse(txtSub1.Text);
                int sub2 = int.Parse(txtSub2.Text);
                int sub3 = int.Parse(txtSub3.Text);
                int sub4 = int.Parse(txtSub4.Text);
                int sub5 = int.Parse(txtSub5.Text);

                int total = sub1 + sub2 + sub3 + sub4 + sub5;
                double average = total / 5.0;

                lblResult.Text = $"Total Marks: {total}, Average: {average:F2}";
            }
            catch (Exception ex)
            {
                lblResult.Text = $"Error: {ex.Message}";
            }
        }
    }
}`,
          },
          // {
          //   type: "code",
          //   language: "text",
          //   is_output: false,
          //   value: ``,
          // },
        ],
      },
      {
        key: "enable-disable-button",
        name: "Practical - 3: Enable/Disable and Resize TextBox Programmatically",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 3 - Enable/Disable and Resize TextBox Programmatically",
          },

          {
            type: "btn",
            title:
              "Download Project: Enable/Disable and Resize TextBox Programmatically",
            value:
              "https://github.com/ayushpathak-48/TextboxControlDemo/archive/refs/heads/master.zip",
          },
          {
            type: "code",
            fileName: "Deafult.aspx",
            language: "html",
            value: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="TextboxControlDemo.Default" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>Textbox Control Demo</title></head>
<body>
    <form id="form1" runat="server">
        <div style="margin: 50px;">
            <asp:TextBox ID="txtDemo" runat="server" Width="200px"></asp:TextBox><br /><br />
            <asp:Button ID="btnEnable" runat="server" Text="Enable TextBox" OnClick="btnEnable_Click" />
            <asp:Button ID="btnDisable" runat="server" Text="Disable TextBox" OnClick="btnDisable_Click" />
            <asp:Button ID="btnResize" runat="server" Text="Change Width" OnClick="btnResize_Click" />
        </div>
    </form>
</body>
</html>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "Deafult.aspx.cs",
            value: `using System;

namespace TextboxControlDemo
{
    public partial class Default : System.Web.UI.Page
    {
        protected void btnEnable_Click(object sender, EventArgs e)
        {
            txtDemo.Enabled = true;
        }

        protected void btnDisable_Click(object sender, EventArgs e)
        {
            txtDemo.Enabled = false;
        }

        protected void btnResize_Click(object sender, EventArgs e)
        {
            txtDemo.Width = new System.Web.UI.WebControls.Unit(400);
        }
    }
}`,
          },
        ],
      },
      {
        key: "use-of-radio-button",
        name: "Practical - 4: Use of Radio Button",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 4 - Use of Radio Button",
          },
          {
            type: "btn",
            title: "Download Project: Use of Radio Button",
            value:
              "https://github.com/ayushpathak-48/GenderApp/archive/refs/heads/master.zip",
          },
          {
            type: "code",
            fileName: "Deafult.aspx",
            language: "html",
            value: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="GenderApp.Default" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Gender Selection</title>
</head>
<body>
    <form id="form1" runat="server">
        <h3>Select Gender:</h3>
        <asp:RadioButton ID="rbMale" runat="server" GroupName="Gender" Text="Male" />
        <asp:RadioButton ID="rbFemale" runat="server" GroupName="Gender" Text="Female" />
        <br /><br />
        <asp:Button ID="btnShowGender" runat="server" Text="Show Gender" OnClick="btnShowGender_Click" />
        <br /><br />
        <asp:Label ID="lblGender" runat="server" Font-Bold="True" ForeColor="Blue"></asp:Label>
    </form>
</body>
</html>`,
          },
          {
            type: "code",
            fileName: "Deafult.aspx.cs",
            language: "java",
            value: `using System;
namespace GenderApp
{
    public partial class Default : System.Web.UI.Page
    {
        protected void btnShowGender_Click(object sender, EventArgs e)
        {
            if (rbMale.Checked)
                lblGender.Text = "Selected Gender: Male";
            else if (rbFemale.Checked)
                lblGender.Text = "Selected Gender: Female";
            else
                lblGender.Text = "Please select a gender.";
        }
    }
}`,
          },
        ],
      },
      {
        key: "listbox-image-controls",
        name: "Practical - 5: ListBox and Image Controls",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 5 - ListBox and Image Controls",
          },
          {
            type: "btn",
            title: "Download Project: ListBox and Image Controls",
            value:
              "https://github.com/ayushpathak-48/FruitImageViewer/archive/refs/heads/master.zip",
          },
          {
            type: "code",
            fileName: "FruitViewer.aspx",
            language: "html",
            value: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FruitViewer.aspx.cs"
Inherits="FruitImageViewer.FruitViewer" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head runat="server">
    <title>Fruit Image Viewer</title>
  </head>
  <body>
    <form id="form1" runat="server">
      <div style="text-align: center; margin-top: 50px">
        <h2>Fruit Image Viewer</h2>

        <asp:ListBox
          ID="lstFruits"
          runat="server"
          AutoPostBack="True"
          OnSelectedIndexChanged="lstFruits_SelectedIndexChanged"
        >
          <asp:ListItem Text="Apple" Value="apple.jpg" />
          <asp:ListItem Text="Banana" Value="banana.jpg" />
          <asp:ListItem Text="Mango" Value="mango.jpg" />
          <asp:ListItem Text="Orange" Value="orange.jpg" />
        </asp:ListBox>

        <br /><br />

        <asp:Image ID="imgFruit" runat="server" Width="200px" Height="200px" />

        <br /><br />

        <asp:Label ID="lblMessage" runat="server" Font-Bold="true" />
      </div>
    </form>
  </body>
</html>`,
          },
          {
            type: "code",
            fileName: "FruitViewer.aspx.cs",
            language: "java",
            value: `using System;

namespace FruitImageViewer
{
    public partial class FruitViewer : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                lblMessage.Text = "Please select a fruit to view its image.";
            }
        }

        protected void lstFruits_SelectedIndexChanged(object sender, EventArgs e)
        {
            string selectedImage = lstFruits.SelectedValue;
            imgFruit.ImageUrl = "~/Images/" + selectedImage;
            lblMessage.Text = "You selected: " + lstFruits.SelectedItem.Text;
        }
    }
}`,
          },
        ],
      },
      //  p-6
      {
        key: "registration-form",
        name: "Practical - 6: Registration Form",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 6 - Registration Form",
          },
          {
            type: "code",
            fileName: "Registration.aspx",
            language: "html",
            value: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Registration.aspx.cs" Inherits="WebApplication1.Registration" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>User Registration</title>
</head>
<body>
    <form id="form1" runat="server">
        <div style="text-align:center; padding: 20px;">
            <h2>User Registration Form</h2>

            <asp:Label ID="lblName" runat="server" Text="Name:" AssociatedControlID="txtName" /><br />
            <asp:TextBox ID="txtName" runat="server" /><br /><br />

            <asp:Label ID="lblDOB" runat="server" Text="Date of Birth (MM/DD/YYYY):" AssociatedControlID="txtDOB" /><br />
            <asp:TextBox ID="txtDOB" runat="server" /><br /><br />

            <asp:Label ID="lblGender" runat="server" Text="Gender:" /><br />
            <asp:RadioButton ID="rdoMale" runat="server" GroupName="Gender" Text="Male" />
            <asp:RadioButton ID="rdoFemale" runat="server" GroupName="Gender" Text="Female" /><br /><br />

            <asp:Label ID="lblEmail" runat="server" Text="Email:" AssociatedControlID="txtEmail" /><br />
            <asp:TextBox ID="txtEmail" runat="server" /><br /><br />

            <asp:Label ID="lblContact" runat="server" Text="Contact No:" AssociatedControlID="txtContact" /><br />
            <asp:TextBox ID="txtContact" runat="server" /><br /><br />

            <asp:Button ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click" /><br /><br />

            <asp:Label ID="lblResult" runat="server" Font-Bold="true" ForeColor="Blue" />
        </div>
    </form>
</body>
</html>
`,
          },
          {
            type: "code",
            fileName: "Registration.aspx.cs",
            language: "java",
            value: `using System;

namespace WebApplication1
{
    public partial class Registration : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // Optional logic here
        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            string name = txtName.Text.Trim();
            string dob = txtDOB.Text.Trim();
            string gender = rdoMale.Checked ? "Male" : rdoFemale.Checked ? "Female" : "Not specified";
            string email = txtEmail.Text.Trim();
            string contact = txtContact.Text.Trim();

            lblResult.Text = "Registration Details:<br/>" +
                             $"Name: {name}<br/>" +
                             $"DOB: {dob}<br/>" +
                             $"Gender: {gender}<br/>" +
                             $"Email: {email}<br/>" +
                             $"Contact No: {contact}";
        }
    }
}`,
          },
        ],
      },
      //  p-7
      {
        key: "required-field-validation",
        name: "Practical - 7: Required Field Validation",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 7 - Required Field Validation",
          },
          {
            type: "code",
            fileName: "web.config",
            language: "xml",
            value: `
<!-- Add this code in <configuration tag in web.config file  -->            
<appSettings>
	<add key="ValidationSettings:UnobtrusiveValidationMode" value="None" />
</appSettings>`,
          },
          {
            type: "code",
            fileName: "RequiredValidation.aspx",
            language: "html",
            value: `<%@ Page Language="C#" AutoEventWireup="true" CodeFile="RequiredValidation.aspx.cs" Inherits="RequiredValidation" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Required Field Validation</title>
</head>
<body>
    <form id="form1" runat="server">
        <div style="text-align:center">
            <h2>Required Field Validator Example</h2>

            Enter Name: <asp:TextBox ID="txtName" runat="server" /><br />
            <asp:RequiredFieldValidator ID="rfvName" runat="server" 
                ControlToValidate="txtName"
                ErrorMessage="Name is required!" ForeColor="Red" /><br /><br />

            <asp:Button ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click" /><br /><br />

            <asp:Label ID="lblMessage" runat="server" Font-Bold="true" ForeColor="Green" />
        </div>
    </form>
</body>
</html>`,
          },
          {
            type: "code",
            fileName: "RequiredValidation.aspx.cs",
            language: "java",
            value: ` protected void btnSubmit_Click(object sender, EventArgs e)
    {
        if (Page.IsValid)
        {
            lblMessage.Text = "Hello, " + txtName.Text + "!";
        }
    }`,
          },
        ],
      },
      //  p-8
      {
        key: "regitration-page-wid-validation",
        name: "Practical - 8: Registration Page with Validation",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 8 - Registration Page with Validation",
          },
          {
            type: "code",
            fileName: "web.config",
            language: "xml",
            value: `
<!-- Add this code in <configuration tag in web.config file  -->            
<appSettings>
	<add key="ValidationSettings:UnobtrusiveValidationMode" value="None" />
</appSettings>`,
          },
          {
            type: "code",
            fileName: "Default.aspx",
            language: "html",
            value: `<asp:Label ID="lblName" runat="server" Text="Name:"></asp:Label>
<asp:TextBox ID="txtName" runat="server"></asp:TextBox>
<asp:RequiredFieldValidator ID="rfvName" runat="server" ControlToValidate="txtName" ErrorMessage="Name is required." ForeColor="Red">*</asp:RequiredFieldValidator>
<br />

<asp:Label ID="lblEmail" runat="server" Text="Email:"></asp:Label>
<asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
<asp:RegularExpressionValidator ID="revEmail" runat="server" ControlToValidate="txtEmail"
    ValidationExpression="\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}" ErrorMessage="Invalid Email Format." ForeColor="Red">*</asp:RegularExpressionValidator>
<br />

<asp:Label ID="lblPassword" runat="server" Text="Password:"></asp:Label>
<asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>
<asp:RequiredFieldValidator ID="rfvPassword" runat="server" ControlToValidate="txtPassword" ErrorMessage="Password is required." ForeColor="Red">*</asp:RequiredFieldValidator>
<br />

<asp:Label ID="lblConfirmPassword" runat="server" Text="Confirm Password:"></asp:Label>
<asp:TextBox ID="txtConfirmPassword" runat="server" TextMode="Password"></asp:TextBox>
<asp:CompareValidator ID="cvPassword" runat="server" ControlToCompare="txtPassword" ControlToValidate="txtConfirmPassword"
    ErrorMessage="Passwords do not match." ForeColor="Red">*</asp:CompareValidator>
<br />

<asp:Button ID="btnSubmit" runat="server" Text="Register" OnClick="btnSubmit_Click" />
<asp:ValidationSummary ID="vsSummary" runat="server" ForeColor="Red" />`,
          },
          {
            type: "code",
            fileName: "Default.aspx.cs",
            language: "java",
            value: `protected void btnSubmit_Click(object sender, EventArgs e)
{
    string name = txtName.Text;
    string email = txtEmail.Text;
    string password = txtPassword.Text;

    Response.Write("Registration Successful!<br/>");
    Response.Write("Name: " + name + "<br/>");
    Response.Write("Email: " + email + "<br/>");
}`,
          },
        ],
      },
      //  p-9
      {
        key: "custom-validation",
        name: "Practical - 9: Custom Validation",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 9 - Custom Validation",
          },
          {
            type: "code",
            fileName: "web.config",
            language: "xml",
            value: `
<!-- Add this code in <configuration tag in web.config file  -->            
<appSettings>
	<add key="ValidationSettings:UnobtrusiveValidationMode" value="None" />
</appSettings>`,
          },
          {
            type: "code",
            fileName: "Default.aspx",
            language: "html",
            value: `<asp:Label ID="lblInput" runat="server" Text="Enter Username:"></asp:Label>
<asp:TextBox ID="txtUsername" runat="server"></asp:TextBox>
<asp:CustomValidator ID="cvUsername" runat="server" ControlToValidate="txtUsername"
    ErrorMessage="Username must be at least 5 characters long." OnServerValidate="cvUsername_ServerValidate" ForeColor="Red">*</asp:CustomValidator>
<br /><br />
<asp:Button ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click" />`,
          },
          {
            type: "code",
            fileName: "Default.aspx.cs",
            language: "java",
            value: `protected void cvUsername_ServerValidate(object source, ServerValidateEventArgs args)
{
    if (args.Value.Length >= 5)
    {
        args.IsValid = true;
    }
    else
    {
        args.IsValid = false;
    }
}

protected void btnSubmit_Click(object sender, EventArgs e)
{
    if (Page.IsValid)
    {
        Response.Write("Validation Successful! Username: " + txtUsername.Text);
    }
}`,
          },
        ],
      },
      //  p-10
      {
        key: "master-page",
        name: "Practical - 10: Introduction to Master Page",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 10 - Introduction to Master Page",
          },
          {
            type: "code",
            fileName: "Site.master",
            language: "html",
            value: `<!DOCTYPE html>
<html>
<head runat="server">
    <title>Master Page Demo</title>
</head>
<body>
    <form id="form1" runat="server">
        <div style="background-color:lightgray; padding:10px;">
            <h2>My Website</h2>
            <a href="Home.aspx">Home</a> |
            <a href="About.aspx">About Us</a> |
            <a href="Contact.aspx">Contact</a>
        </div>
        <asp:ContentPlaceHolder ID="MainContent" runat="server">
        </asp:ContentPlaceHolder>
    </form>
</body>
</html>`,
          },
          {
            type: "code",
            fileName: "Home.aspx",
            language: "java",
            value: `<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <h3>Welcome to the Home Page</h3>
    <p>This is the default content for the home page.</p>
</asp:Content>`,
          },
        ],
      },
      //  p-11
      {
        key: "use-of-master-page",
        name: "Practical - 11: Use of Master Page and Session",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 11 - Use of Master Page and Session",
          },
          {
            type: "code",
            fileName: "Site.master",
            language: "html",
            value: `<%@ Master Language="C#" AutoEventWireup="true" CodeFile="Site.master.cs" Inherits="WebApplication2.Site" %>

<!DOCTYPE html>
<html>
<head runat="server">
    <title>Simple ASP.NET App</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:HyperLink ID="lnkLogin" runat="server" NavigateUrl="~/Login.aspx">Login</asp:HyperLink> |
            <asp:HyperLink ID="lnkWelcome" runat="server" NavigateUrl="~/Welcome.aspx">Welcome</asp:HyperLink>
            <hr />
            <asp:ContentPlaceHolder ID="MainContent" runat="server" />

        </div>
    </form>
</body>
</html>`,
          },
          {
            type: "code",
            fileName: "Site.master.cs",
            language: "html",
            value: `using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication2
{
    public partial class Site : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
    }
}`,
          },
          {
            type: "code",
            fileName: "Login.aspx",
            language: "java",
            value: `<%@ Page Title="Login" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="WebApplication2.Login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Login</h2>
    <asp:Label ID="lblMessage" runat="server" ForeColor="Red"></asp:Label><br />
    Username: <asp:TextBox ID="txtUsername" runat="server"></asp:TextBox><br />
    Password: <asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox><br />
    <asp:Button ID="btnLogin" runat="server" Text="Login" OnClick="btnLogin_Click" />
</asp:Content>`,
          },
          {
            type: "code",
            fileName: "Login.aspx.cs",
            language: "java",
            value: `using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication2
{
    public partial class Login : System.Web.UI.Page
    {
        protected void btnLogin_Click(object sender, EventArgs e)
        {
            if (txtUsername.Text == "admin" && txtPassword.Text == "1234")
            {
                Session["User"] = txtUsername.Text;
                Response.Redirect("Welcome.aspx");
            }
            else
            {
                lblMessage.Text = "Invalid login credentials.";
            }
        }

    }`,
          },
          {
            type: "code",
            fileName: "Welcome.aspx",
            language: "java",
            value: `<%@ Page Title="Welcome" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="Welcome.aspx.cs" Inherits="WebApplication2.Welcome" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Welcome</h2>
    <asp:Label ID="lblWelcome" runat="server" Font-Bold="True"></asp:Label>
</asp:Content>`,
          },
          {
            type: "code",
            fileName: "Welcome.aspx.cs",
            language: "java",
            value: `using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication2
{
    public partial class Welcome : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["User"] != null)
            {
                lblWelcome.Text = "Welcome, " + Session["User"].ToString();
            }
            else
            {
                Response.Redirect("Login.aspx");
            }
        }

    }
}`,
          },
        ],
      },
    ],
  },
  // MAD
  {
    subject_name: "Mobile Apps Development",
    key: "mobile-apps-development",
    practicals: [
      {
        key: "message-view",
        name: "Practical - 1: Message View",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 1 -  Message View",
          },
          {
            type: "btn",
            title: "Download Project: Message View",
            value:
              "https://github.com/ayushpathak-48/mad-message-view/archive/refs/heads/main.zip",
          },
          {
            type: "code",
            language: "html",
            fileName: "activity_main.xml",
            value: `<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#A9A9A9">

    <TextView
        android:id="@+id/name"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Name: John Doe"
        android:textColor="#FF0000"
        android:layout_marginTop="50dp"
        android:layout_centerHorizontal="true" />

    <TextView
        android:id="@+id/qualification"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Qualification: B.Sc Computer Science"
        android:textColor="#00FF00"
        android:layout_below="@id/name"
        android:layout_marginTop="20dp"
        android:layout_centerHorizontal="true" />

    <TextView
        android:id="@+id/contact"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Contact: 123-456-7890"
        android:textColor="#0000FF"
        android:layout_below="@id/qualification"
        android:layout_marginTop="20dp"
        android:layout_centerHorizontal="true" />

    <TextView
        android:id="@+id/email"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Email: john.doe@example.com"
        android:textColor="#FFA500"
        android:layout_below="@id/contact"
        android:layout_marginTop="20dp"
        android:layout_centerHorizontal="true" />

    <TextView
        android:id="@+id/address"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Address: 123 Main St, City, Country"
        android:textColor="#800080"
        android:layout_below="@id/email"
        android:layout_marginTop="20dp"
        android:layout_centerHorizontal="true" />
</RelativeLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.myinfo;

import android.graphics.Color;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        findViewById(R.id.name).setBackgroundColor(Color.RED);
        findViewById(R.id.qualification).setBackgroundColor(Color.GREEN);
        findViewById(R.id.contact).setBackgroundColor(Color.BLUE);
        findViewById(R.id.email).setBackgroundColor(Color.YELLOW);
        findViewById(R.id.address).setBackgroundColor(Color.MAGENTA);
    }
}
`,
          },
          // {
          //   type: "code",
          //   language: "text",
          //   is_output: false,
          //   value: ``,
          // },
        ],
      },
      {
        key: "login-check",
        name: "Practical - 2: Login Check",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 2 - Login Check",
          },
          {
            type: "btn",
            title: "Download Project: Login Check",
            value:
              "https://github.com/ayushpathak-48/mad-auth-login-redirect/archive/refs/heads/main.zip",
          },
          {
            type: "code",
            language: "html",
            fileName: "activity_main.xml",
            value: `<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="16dp">

    <EditText
        android:id="@+id/username"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Username" />

    <EditText
        android:id="@+id/password"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Password"
        android:layout_below="@id/username"
        android:layout_marginTop="10dp"
        android:inputType="textPassword" />

    <Button
        android:id="@+id/loginButton"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Login"
        android:layout_below="@id/password"
        android:layout_marginTop="20dp" />
</RelativeLayout>`,
          },
          {
            type: "code",
            language: "html",
            fileName: "activity_home.xml",
            value: `<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#A9A9A9">

    <TextView
        android:id="@+id/welcomeText"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="50dp"
        android:layout_centerHorizontal="true" />
</RelativeLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.loginmodule;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    EditText username, password;
    Button loginButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        username = findViewById(R.id.username);
        password = findViewById(R.id.password);
        Button loginButton = findViewById(R.id.loginButton);

        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String user = username.getText().toString();
                String pass = password.getText().toString();

                if (user.equals("admin") && pass.equals("1234")) {
                    Intent intent = new Intent(MainActivity.this, HomeActivity.class);
                    intent.putExtra("USERNAME", user);
                    startActivity(intent);
                } else {
                    Toast.makeText(MainActivity.this, "Invalid Username or Password", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}`,
          },
          {
            type: "code",
            language: "java",
            fileName: "HomeActivity.java",
            value: `package com.example.loginmodule;

import android.os.Bundle;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class HomeActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        TextView welcomeText = findViewById(R.id.welcomeText);
        String username = getIntent().getStringExtra("USERNAME");
        welcomeText.setText("Welcome, " + username + "!");
    }
}
`,
          },
          // {
          //   type: "code",
          //   language: "text",
          //   is_output: false,
          //   value: ``,
          // },
        ],
      },
      {
        key: "email-auth",
        name: "Practical - 3: Email Auth",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 3 - Email Auth",
          },
          {
            type: "btn",
            title: "Download Project: Email Auth",
            value:
              "https://github.com/ayushpathak-48/mad-email-auth/archive/refs/heads/main.zip",
          },
          {
            type: "code",
            language: "html",
            fileName: "activity_main.xml",
            value: `<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="16dp">

    <EditText
        android:id="@+id/email"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Email"
        android:inputType="textEmailAddress" />

    <EditText
        android:id="@+id/password"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Password"
        android:layout_below="@id/email"
        android:layout_marginTop="10dp"
        android:inputType="textPassword" />

    <Button
        android:id="@+id/loginButton"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Login"
        android:layout_below="@id/password"
        android:layout_marginTop="20dp"
        android:enabled="false" />
</RelativeLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.emailvalidationlogin;

import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    EditText email, password;
    Button loginButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        email = findViewById(R.id.email);
        password = findViewById(R.id.password);
        loginButton = findViewById(R.id.loginButton);

        TextWatcher textWatcher = new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {
            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                validateInputs();
            }

            @Override
            public void afterTextChanged(Editable s) {
            }
        };

        email.addTextChangedListener(textWatcher);
        password.addTextChangedListener(textWatcher);

        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this, "Login Successful", Toast.LENGTH_SHORT).show();
            }
        });
    }

    private void validateInputs() {
        String emailInput = email.getText().toString().trim();
        String passwordInput = password.getText().toString().trim();

        if (Patterns.EMAIL_ADDRESS.matcher(emailInput).matches() && passwordInput.length() >= 4) {
            loginButton.setEnabled(true);
        } else {
            loginButton.setEnabled(false);
        }
    }
}`,
          },
          // {
          //   type: "code",
          //   language: "text",
          //   is_output: false,
          //   value: ``,
          // },
        ],
      },
      {
        key: "color-menu",
        name: "Practical - 4: Color Menu",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 4 - Color Menu",
          },
          {
            type: "btn",
            title: "Download Project: Color Menu",
            value:
              "https://github.com/ayushpathak-48/mad-bg-color-changer/archive/refs/heads/main.zip",
          },
          {
            type: "code",
            language: "html",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/root_layout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="16dp">

    <TextView
        android:id="@+id/color_text"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Select a color from the menu"
        android:textSize="18sp"
        android:layout_centerInParent="true" />

</RelativeLayout>`,
          },
          {
            type: "code",
            language: "html",
            fileName: "options_menu.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:id="@+id/color_red" android:title="Red" />
    <item android:id="@+id/color_green" android:title="Green" />
    <item android:id="@+id/color_blue" android:title="Blue" />
    <item android:id="@+id/color_yellow" android:title="Yellow" />
</menu>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.bgcolorchanger;

import android.graphics.Color;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.RelativeLayout;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    RelativeLayout rootLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        rootLayout = findViewById(R.id.root_layout);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.options_menu, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.color_red:
                rootLayout.setBackgroundColor(Color.RED);
                return true;
            case R.id.color_green:
                rootLayout.setBackgroundColor(Color.GREEN);
                return true;
            case R.id.color_blue:
                rootLayout.setBackgroundColor(Color.BLUE);
                return true;
            case R.id.color_yellow:
                rootLayout.setBackgroundColor(Color.YELLOW);
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }
}
`,
          },
          // {
          //   type: "code",
          //   language: "text",
          //   is_output: false,
          //   value: ``,
          // },
        ],
      },
      // p -5
      {
        key: "handler-based-counter-app",
        name: "Practical - 5: Handler-Based Counter App",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 5 - Handler-Based Counter App",
          },
          // {
          //   type: "btn",
          //   title: "Download Project: Color Menu",
          //   value:
          //     "https://github.com/ayushpathak-48/mad-bg-color-changer/archive/refs/heads/main.zip",
          // },
          {
            type: "code",
            language: "html",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    android:padding="16dp">

    <TextView
        android:id="@+id/textViewCounter"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="0"
        android:textSize="48sp"
        android:layout_marginBottom="24dp"
        android:textStyle="bold"/>

    <Button
        android:id="@+id/btnStart"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Start"
        android:layout_marginBottom="16dp"/>

    <Button
        android:id="@+id/btnStop"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Stop"/>
</LinearLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.myapplication;

import android.os.Bundle;
import android.os.Handler;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private TextView textViewCounter;
    private Button btnStart, btnStop;

    private int counter = 0;
    private boolean isRunning = false;
    private Handler handler = new Handler();
    private Runnable runnable;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Initialize UI components
        textViewCounter = findViewById(R.id.textViewCounter);
        btnStart = findViewById(R.id.btnStart);
        btnStop = findViewById(R.id.btnStop);

        // Define what happens every second
        runnable = new Runnable() {
            @Override
            public void run() {
                if (isRunning) {
                    counter++;
                    textViewCounter.setText(String.valueOf(counter));
                    handler.postDelayed(this, 1000); // Repeat every 1 second
                }
            }
        };

        // Start button logic
        btnStart.setOnClickListener(v -> {
            if (!isRunning) {
                isRunning = true;
                handler.post(runnable); // Start the counter
            }
        });

        // Stop button logic
        btnStop.setOnClickListener(v -> {
            isRunning = false;
            handler.removeCallbacks(runnable); // Stop the counter
        });
    }
}`,
          },
          // {
          //   type: "code",
          //   language: "text",
          //   is_output: false,
          //   value: ``,
          // },
        ],
      },
      //  p-7
      {
        key: "message-service-with-start-stop",
        name: "Practical - 7: Message Service with Start/Stop",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 7 - Message Service with Start/Stop",
          },
          // {
          //   type: "btn",
          //   title: "Download Project: Color Menu",
          //   value:
          //     "https://github.com/ayushpathak-48/mad-bg-color-changer/archive/refs/heads/main.zip",
          // },
          {
            type: "code",
            language: "html",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    android:padding="20dp">

    <Button
        android:id="@+id/btnPlay"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Play Music" />

    <Button
        android:id="@+id/btnStop"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Stop Music"
        android:layout_marginTop="20dp" />
</LinearLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.myapplication;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    Button btnPlay, btnStop;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnPlay = findViewById(R.id.btnPlay);
        btnStop = findViewById(R.id.btnStop);

        btnPlay.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startService(new Intent(MainActivity.this, MyMusicService.class));
            }
        });

        btnStop.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                stopService(new Intent(MainActivity.this, MyMusicService.class));
            }
        });
    }
}
`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MyMusicService.java",
            value: `package com.example.myapplication;

import android.app.Service;
import android.content.Intent;
import android.media.MediaPlayer;
import android.os.IBinder;

public class MyMusicService extends Service {

    MediaPlayer player;

    @Override
    public void onCreate() {
        super.onCreate();
        player = MediaPlayer.create(this, R.raw.music); // Your music file
        player.setLooping(true);
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        player.start();
        return START_STICKY;
    }

    @Override
    public void onDestroy() {
        player.stop();
        player.release();
        super.onDestroy();
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}`,
          },

          // {
          //   type: "code",
          //   language: "text",
          //   is_output: false,
          //   value: ``,
          // },
        ],
      },
    ],
  },
  // MscIt ADV-(ReactJs)
  {
    subject_name: "Advanced Web Development Using React-js",
    key: "advance-web-application-development-using-reactjs",
    practicals: [
      {
        key: "practical-1",
        name: "Practical - 1: Designing webpages with React.js components",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 1 - Designing webpages with React.js components",
          },
          {
            type: "description",
            value: "Step: 1 - Run Below Command in terminal",
          },
          {
            type: "code",
            language: "cmd",
            value: `npx create-react-app my-react-app`,
          },
          {
            type: "description",
            value: "Step: 2 - Replace App.js file",
          },
          {
            type: "code",
            language: "jsx",
            fileName: "App.js",
            value: `import "./App.css";
import MyComponent from "./MyComponent";
function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}
export default App;`,
          },
          {
            type: "description",
            value:
              "Step: 3 - Create MyComponent.js file in src folder and replace file with below content",
          },
          {
            type: "code",
            language: "jsx",
            fileName: "MyComponent.js",
            value: `import React from "react";
const MyComponent = () => {
  return (
    <div>
      <h1>Hello this is my First React Component</h1>
    </div>
  );
};
export default MyComponent;`,
          },
          {
            type: "description",
            value:
              "Step: 5 - Launch the development server with the following command:",
          },
          {
            type: "code",
            language: "cmd",
            value: `npm start`,
          },
          // {
          //   type: "code",
          //   language: "text",
          //   is_output: false,
          //   value: ``,
          // },
        ],
      },
      {
        key: "practical-2",
        name: "Practical - 2: TODO app using React.js",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 2 - TODO app using React.js",
          },
          {
            type: "description",
            value:
              "Step: 1 - Open your terminal and navigate to your preferred directory. Run the following command to generate a new React app. Replace “todo-app” with your desired project name:",
          },
          {
            type: "code",
            language: "cmd",
            value: `npx create-react-app todo-app`,
          },
          {
            type: "description",
            value:
              "Step: 2 - Change your working directory to the “todo-app” folder:",
          },
          {
            type: "code",
            language: "cmd",
            value: `cd todo-app`,
          },
          {
            type: "description",
            value: "Step: 3 - Install the bootstrap and react-bootstrap module",
          },
          {
            type: "code",
            language: "cmd",
            value: `npm install bootstrap react-bootstrap`,
          },
          {
            type: "description",
            value:
              "Step: 4 - Write the below code in App.js file in the src directory",
          },
          {
            type: "code",
            language: "jsx",
            fileName: "App.js",
            value: `import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }
  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }
  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        value: this.state.userInput,
      };
      const list = [...this.state.list];
      list.push(userInput);
      this.setState({
        list,
        userInput: "",
      });
    }
  }
  deleteItem(key) {
    const list = [...this.state.list];
    const updateList = list.filter((item) => item.id !== key);
    this.setState({
      list: updateList,
    });
  }
  editItem = (index) => {
    const todos = [...this.state.list];
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatedTodos = [...todos];
      updatedTodos[index].value = editedTodo;
      this.setState({
        list: updatedTodos,
      });
    }
  };
  render() {
    return (
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: "bolder",
          }}
        >
          TODO LIST
        </Row>
        <hr />
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="add item . . . "
                size="lg"
                value={this.state.userInput}
                onChange={(item) => this.updateInput(item.target.value)}
                aria-label="add something"
                aria-describedby="basic-addon2"
              />
              <InputGroup>
                <Button
                  variant="dark"
                  className="mt-2"
                  onClick={() => this.addItem()}
                >
                  ADD
                </Button>
              </InputGroup>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <ListGroup>
              {this.state.list.map((item, index) => {
                return (
                  <div key={index}>
                    <ListGroup.Item
                      variant="dark"
                      action
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {item.value}
                      <span>
                        <Button
                          style={{ marginRight: "10px" }}
                          variant="light"
                          onClick={() => this.deleteItem(item.id)}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="light"
                          onClick={() => this.editItem(index)}
                        >
                          Edit
                        </Button>
                      </span>
                    </ListGroup.Item>
                  </div>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
`,
          },
          {
            type: "description",
            value:
              "Step: 5 - Launch the development server with the following command:",
          },
          {
            type: "code",
            language: "cmd",
            value: `npm start`,
          },
        ],
      },
      {
        key: "practical-3",
        name: "Practical - 3: Quiz app using React.js",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 3 - Quiz app using React.js",
          },
          {
            type: "description",
            value: "Step: 1 - Create the project file using the command",
          },
          {
            type: "code",
            language: "cmd",
            value: `npx create-react-app quiz`,
          },
          {
            type: "description",
            value: "Step: 2 - Navigate to the folder using the command",
          },
          {
            type: "code",
            language: "cmd",
            value: `cd quiz`,
          },
          {
            type: "description",
            value: "Step: 3 - Install the required module using the command",
          },
          {
            type: "code",
            language: "cmd",
            value: `npm i bootstrap`,
          },
          {
            type: "description",
            value:
              "Step: 4 - Create a folder named components in src folder and create these new files: Option.js, Question.js, QuestionBank.js, and Score.js",
          },
          {
            type: "description",
            value: "Step: 5 - Replace App.css file with below code",
          },
          {
            type: "code",
            language: "css",
            fileName: "App.css",
            value: `body {
 background-color: #292b2e;
 color: #ffffff;
}
.app-title {
 color: #ffffff;
 margin-top: 2rem;
}`,
          },
          {
            type: "description",
            value: "Step: 6 - Replace App.js file with below code",
          },
          {
            type: "code",
            language: "jsx",
            fileName: "App.js",
            value: `import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import qBank from "./Components/QuestionBank";
import Score from "./Components/Score";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
    };
  }
  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion();
  };
  checkAnswer = () => {
    const { questionBank, currentQuestion, selectedOption } = this.state;
    if (selectedOption === questionBank[currentQuestion].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
  };
  handleNextQuestion = () => {
    const { questionBank, currentQuestion } = this.state;
    if (currentQuestion + 1 < questionBank.length) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: "",
      }));
    } else {
      this.setState({
        quizEnd: true,
      });
    }
  };
  render() {
    const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
      this.state;
    return (
      <div
        className="App d-flex flex-column align-items-center
justify-content-center"
      >
        <h1 className="app-title">QUIZ APP</h1>
        {!quizEnd ? (
          <Question
            question={questionBank[currentQuestion]}
            selectedOption={selectedOption}
            onOptionChange={this.handleOptionChange}
            onSubmit={this.handleFormSubmit}
          />
        ) : (
          <Score
            score={score}
            onNextQuestion={this.handleNextQuestion}
            className="score"
          />
        )}
      </div>
    );
  }
}
export default App;
`,
          },
          {
            type: "description",
            value: "Step: 7 - Replace Question.js file with below code",
          },
          {
            type: "code",
            language: "jsx",
            fileName: "Question.js",
            value: `import React, { Component } from "react";
import Options from "./Option";
class Question extends Component {
  render() {
    const { question, selectedOption, onOptionChange, onSubmit } = this.props;
    return (
      <div className="">
        <h3>Question {question.id}</h3>
        <h5 className="mt-2">{question.question}</h5>
        <form onSubmit={onSubmit} className="mt-2 mb-2">
          <Options
            options={question.options}
            selectedOption={selectedOption}
            onOptionChange={onOptionChange}
          />
          <button
            type="submit"
            className="btn btn-primary
mt-2"
          >
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}
export default Question;
`,
          },
          {
            type: "description",
            value: "Step: 8 - Replace Option.js file with below code",
          },
          {
            type: "code",
            language: "jsx",
            fileName: "Option.js",
            value: `import React, { Component } from "react";
class Options extends Component {
  render() {
    const { options, selectedOption, onOptionChange } = this.props;
    return (
      <div className="options">
        {options.map((option, index) => (
          <div key={index} className="form-check">
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={onOptionChange}
              className="form-check-input"
            />
            <label className="form-check-label">{option}</label>
          </div>
        ))}
      </div>
    );
  }
}
export default Options;
`,
          },
          {
            type: "description",
            value: "Step: 9 - Replace Score.js file with below code",
          },
          {
            type: "code",
            language: "jsx",
            fileName: "Score.js",
            value: `import React, { Component } from "react";
import "../App.css";
class Score extends Component {
  render() {
    const { score, onNextQuestion } = this.props;
    return (
      <div>
        <h2>Results</h2>
        <h4>Your score: {score}</h4>
      </div>
    );
  }
}
export default Score;
`,
          },
          {
            type: "description",
            value: "Step: 9 - Replace QuestionBank.js file with below code",
          },
          {
            type: "code",
            language: "jsx",
            fileName: "QuestionBank.js",
            value: `const QuestionBank = [
  {
    id: 1,
    question: "What is the purpose of the 'useState' hook in React?",
    options: [
      "To manage side effects",
      "To create a new component",
      "To manage local state in a functional component",
      "To fetch data from an API",
    ],
    answer: "To manage local state in a functional component",
  },
  {
    id: 2,
    question:
      "Which method is used to pass data from a parent component to a child component?",
    options: ["State", "Props", "Context", "Hooks"],
    answer: "Props",
  },
  {
    id: 3,
    question:
      "What will happen if you call 'setState' in a functional component without using a hook?",
    options: [
      "It will update the state",
      "It will cause an error",
      "It will refresh the component",
      "Nothing will happen",
    ],
    answer: "It will cause an error",
  },
  {
    id: 4,
    question:
      "Which of the following hooks is used to perform side effects in a component?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    answer: "useEffect",
  },
  {
    id: 5,
    question: "What is JSX?",
    options: [
      "A JavaScript XML syntax extension",
      "A data fetching library",
      "A CSS-in-JS solution",
      "A browser API",
    ],
    answer: "A JavaScript XML syntax extension",
  },
];

export default QuestionBank;
`,
          },
          {
            type: "description",
            value:
              "Step: 5 - Launch the development server with the following command:",
          },
          {
            type: "code",
            language: "cmd",
            value: `npm start`,
          },
        ],
      },
      {
        key: "practical-4",
        name: "Practical - 4: Coin Flipping app - React.js",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 4 - Coin Flipping app - React.js",
          },
          {
            type: "description",
            value: "Step: 1 - Create the project file using the command",
          },
          {
            type: "code",
            language: "cmd",
            value: `npx create-react-app flip`,
          },
          {
            type: "description",
            value: "Step: 2 - Navigate to the folder using the command",
          },
          {
            type: "code",
            language: "cmd",
            value: `cd flip`,
          },
          {
            type: "description",
            value:
              "Step: 3 - Create the folder components and inside the folder create two files FlipCoin.js and Coin.js",
          },
          {
            type: "description",
            value: "Step: 4 - Replace App.js file",
          },
          {
            type: "code",
            language: "jsx",
            fileName: "App.js",
            value: `import React from "react";
import FlipCoin from "./components/FlipCoin";
const App = () => {
  return (
    <div className="App">
      <FlipCoin />
    </div>
  );
};
export default App;
`,
          },
          {
            type: "description",
            value: "Step: 5 - Replace Coin.js file",
          },
          {
            type: "code",
            fileName: "Coin.js",
            language: "jsx",
            value: `import React, { Component } from "react";
class Coin extends Component {
  render() {
    return (
      <div class="Coin">
        <img
          style={{ width: "200px", height: "200px" }}
          src={this.props.info.imgSrc}
        />
      </div>
    );
  }
}
export default Coin;`,
          },
          {
            type: "description",
            value: "Step: 6 - Replace FlipCoin.js file",
          },
          {
            type: "code",
            fileName: "FlipCoin.js",
            language: "jsx",
            value: `import React, { Component } from "react";
import Coin from "./Coin";

class FlipCoin extends Component {
  static defaultProps = {
    coins: [
      {
        side: "head",
        imgSrc:
          "https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg",
      },
      {
        side: "tail",
        imgSrc:
          "https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      currFace: null,
      totalFlips: 0,
      heads: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  choice(arr) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
  }

  flipCoin() {
    const newFace = this.choice(this.props.coins);
    this.setState((curState) => {
      const heads = curState.heads + (newFace.side === "head" ? 1 : 0);
      return {
        currFace: newFace,
        totalFlips: curState.totalFlips + 1,
        heads: heads,
      };
    });
  }
  handleClick() {
    this.flipCoin();
  }
  render() {
    const { currFace, totalFlips, heads } = this.state;
    return (
      <div>
        <h2>Let's flip a coin</h2>
        {currFace && <Coin info={currFace} />}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {totalFlips} flips, there have been
          {heads} heads and {totalFlips - heads} tails
        </p>
      </div>
    );
  }
}

export default FlipCoin;
`,
          },
          {
            type: "description",
            value:
              "Step: 7 - Launch the development server with the following command:",
          },
          {
            type: "code",
            language: "cmd",
            value: `npm start`,
          },
        ],
      },
    ],
  },
  // fswd
  {
    subject_name: "Full Stack Web Development - II",
    key: "full-stack-web-development-II",
    specialization: "fswd",
    language: "java",
    practicals: [
      // P-1
      {
        key: "set-and-map",
        name: "Practical - 1: WAP to implement connection",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 1 - WAP to implement connection between client and server using socket programming",
          },
          {
            type: "code",
            fileName: "EchoClient.java",
            value: `import java.io.*;
import java.net.*;

public class EchoClient {
    public static void main(String[] args) {
        String host = "localhost";
        int port = 3333;

        try (Socket socket = new Socket(host, port);
             BufferedReader userIn = new BufferedReader(new InputStreamReader(System.in));
             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true)
        ) {
            System.out.println("Connected to server. Type messages, 'stop' to end.");

            String userLine;
            while ((userLine = userIn.readLine()) != null) {
                out.println(userLine);
                if ("stop".equalsIgnoreCase(userLine.trim())) break;
                String reply = in.readLine();
                System.out.println("Server replied: " + reply);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("Client terminated.");
    }
}`,
          },
          {
            type: "code",
            fileName: "EchoServer.java",
            value: `import java.io.*;
import java.net.*;

public class EchoServer {
    public static void main(String[] args) {
        int port = 3333; // Choose your port
        System.out.println("Server starting on port " + port);

        try (ServerSocket serverSocket = new ServerSocket(port)) {
            Socket clientSocket = serverSocket.accept();
            System.out.println("Client connected from " + clientSocket.getRemoteSocketAddress());

            try (
                BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
            ) {
                String line;
                while ((line = in.readLine()) != null) {
                    if ("stop".equalsIgnoreCase(line.trim())) break;
                    System.out.println("Received from client: " + line);
                    out.println("Echo: " + line);
                }
            }

            System.out.println("Closing connection with client.");
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("Server shutting down.");
    }
}`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Connected to server. Type messages, 'stop' to end.
Hello      
Server replied: Echo: Hello
stop
Client terminated.


Server starting on port 3333
Client connected from /127.0.0.1:60459
Received from client: Hello
Closing connection with client.
Server shutting down.`,
          },
        ],
      },
      // P-2
      {
        key: "implement-rmi",
        name: "Practical - 2: WAP to implement RMI",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 2 - WAP to implement RMI",
          },
          {
            type: "code",
            fileName: "Addl.java",
            value: `import java.rmi.Remote;

public interface AddI extends Remote {
    public int add(int x, int y) throws Exception;
}`,
          },
          {
            type: "code",
            fileName: "Client.java",
            value: `import java.rmi.*;

public class Client {
    public static void main(String a[]) throws Exception {
        AddI obj = (AddI) Naming.lookup("ADD");
        int n = obj.add(5, 4);
        System.out.println("addition is:" + n);
    }

} `,
          },
          {
            type: "code",
            fileName: "Server.java",
            value: `import java.rmi.*;

public class Server {
    public static void main(String a[]) throws Exception {
        AddC obj = new AddC();
        Naming.rebind("ADD", obj);
        System.out.println("Server Started");
    }
}`,
          },
          {
            type: "code",
            fileName: "AddC.java",
            value: `import java.rmi.server.*;

public class AddC extends UnicastRemoteObject implements AddI {
    public AddC() throws Exception {
        super();
    }

    public int add(int x, int y) {
        return x + y;
    }
} `,
          },
          // {
          //   type: "code",
          //   language: "text",
          //   is_output: true,
          //   value: ``,
          // },
        ],
      },
      //  p-3
      {
        key: "fx-shapes",
        name: "Practical - 3: 2D object Using JAVA FX",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 3 - WAP to implement 2D object Using JAVA FX",
          },
          {
            type: "code",
            fileName: "TwoDShapes.java",
            value: `import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.scene.paint.Color;
import javafx.scene.shape.*;
import javafx.stage.Stage;

public class TwoDShapes extends Application {
    public void start(Stage primaryStage) {
        Pane pane = new Pane();

        Rectangle rect = new Rectangle(50, 50, 120, 80);
        rect.setFill(Color.LIGHTBLUE);
        rect.setStroke(Color.BLACK);

        Circle circle = new Circle(250, 90, 40);
        circle.setFill(Color.LIGHTGREEN);
        circle.setStroke(Color.BLACK);

        Ellipse el = new Ellipse(400, 90, 70, 40);
        el.setFill(Color.LIGHTPINK);
        el.setStroke(Color.BLACK);

        Line l = new Line(50, 200, 450, 200);
        l.setStroke(Color.RED);
        l.setStrokeWidth(3);

        pane.getChildren().addAll(rect, circle, el, l);

        Scene scene = new Scene(pane, 500, 300);
        primaryStage.setTitle("JavaFX 2D Shapes");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}

// Then give 2 commands in terminal
//  Check your javafx path once

// Compile :-

// javac --module-path "C:\\javafx-sdk-24.0.2\\lib" --add-modules javafx.controls TwoDShapes.java

// Run :-
// java --module-path "C:\\javafx-sdk-24.0.2\\lib" --add-modules javafx.controls TwoDShapes`,
          },
          {
            type: "code",
            fileName: "launch.json",
            value: `{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "java",
            "name": "Run TwoDShapes (JavaFX)",
            "request": "launch",
            "mainClass": "TwoDShapes",
            "projectName": "MyJavaFXProject_b91ac860",
            "vmArgs": "--module-path C:/javafx-sdk-24.0.2/lib --add-modules javafx.controls,javafx.graphics"
        },
        {
            "type": "java",
            "name": "Run ThreeDObjects (JavaFX 3D)",
            "request": "launch",
            "mainClass": "ThreeDObjects",
            "projectName": "MyJavaFXProject_b91ac860",
            "vmArgs": "--module-path C:/javafx-sdk-24.0.2/lib --add-modules javafx.controls,javafx.graphics"
        }
    ]
}`,
          },
          // {
          //   type: "code",
          //   language: "text",
          //   is_output: true,
          //   value: ``,
          // },
        ],
      },
      //  p-4
      {
        key: "fx-objects",
        name: "Practical - 4: 3D object Using JAVA FX",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 4 - WAP to implement 3D object Using JAVA FX",
          },
          {
            type: "code",
            fileName: "ThreeDObjects.java",
            value: `import javafx.application.Application;
import javafx.scene.*;
import javafx.scene.paint.Color;
import javafx.scene.paint.PhongMaterial;
import javafx.scene.shape.Box;
import javafx.scene.shape.Cylinder;
import javafx.scene.shape.Sphere;
import javafx.scene.transform.Rotate;
import javafx.stage.Stage;

public class ThreeDObjects extends Application {

    @Override
    public void start(Stage primaryStage) {
        // Create Box
        Box box = new Box(100, 100, 100);
        PhongMaterial boxMaterial = new PhongMaterial(Color.BLUE);
        box.setMaterial(boxMaterial);
        box.setTranslateX(150);
        box.setTranslateY(150);
        box.setTranslateZ(400);

        // Create Sphere
        Sphere sphere = new Sphere(50);
        PhongMaterial sphereMaterial = new PhongMaterial(Color.ORANGE);
        sphere.setMaterial(sphereMaterial);
        sphere.setTranslateX(350);
        sphere.setTranslateY(150);
        sphere.setTranslateZ(400);

        // Create Cylinder
        Cylinder cylinder = new Cylinder(40, 100);
        PhongMaterial cylinderMaterial = new PhongMaterial(Color.PALEVIOLETRED);
        cylinder.setMaterial(cylinderMaterial);
        cylinder.setTranslateX(250);
        cylinder.setTranslateY(300);
        cylinder.setTranslateZ(400);

        // Create Point Light
        PointLight pointLight = new PointLight(Color.WHITE);
        pointLight.setTranslateX(250);
        pointLight.setTranslateY(100);
        pointLight.setTranslateZ(200);

        // Create Ambient Light
        AmbientLight ambientLight = new AmbientLight(Color.rgb(100, 100, 100));

        // Group all nodes
        Group root = new Group(box, sphere, cylinder, pointLight, ambientLight);

        // Create and position camera
        PerspectiveCamera camera = new PerspectiveCamera(true);
        camera.setTranslateZ(-1000);
        camera.setNearClip(0.1);
        camera.setFarClip(2000.0);
        camera.setFieldOfView(35);

        // Create scene with depth buffer enabled
        Scene scene = new Scene(root, 600, 400, true);
        scene.setFill(Color.GRAY);
        scene.setCamera(camera);

        // Apply rotations to the whole group
        Rotate rotateX = new Rotate(20, Rotate.X_AXIS);
        Rotate rotateY = new Rotate(30, Rotate.Y_AXIS);
        root.getTransforms().addAll(rotateX, rotateY);

        // Setup stage
        primaryStage.setTitle("JavaFX 3D Objects");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}

// Then give 2 commands in terminal

// Compile :-

// javac --module-path "C:\\javafx-sdk-24.0.2\\lib" --add-modules javafx.controls,javafx.graphics ThreeDObjects.java



// Run :-

// java --module-path "C:\\javafx-sdk-24.0.2\\lib" --add-modules javafx.controls,javafx.graphics ThreeDObjects`,
          },
          {
            type: "code",
            fileName: "launch.json",
            value: `{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "java",
            "name": "Run TwoDShapes (JavaFX)",
            "request": "launch",
            "mainClass": "TwoDShapes",
            "projectName": "MyJavaFXProject_b91ac860",
            "vmArgs": "--module-path C:/javafx-sdk-24.0.2/lib --add-modules javafx.controls,javafx.graphics"
        },
        {
            "type": "java",
            "name": "Run ThreeDObjects (JavaFX 3D)",
            "request": "launch",
            "mainClass": "ThreeDObjects",
            "projectName": "MyJavaFXProject_b91ac860",
            "vmArgs": "--module-path C:/javafx-sdk-24.0.2/lib --add-modules javafx.controls,javafx.graphics"
        }
    ]
}`,
          },
          // {
          //   type: "code",
          //   language: "text",
          //   is_output: true,
          //   value: ``,
          // },
        ],
      },
    ],
  },
];
