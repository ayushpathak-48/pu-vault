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
      // prolog-knowledge
      {
        key: "prolog-knowledge",
        name: "Prolog Knowledge Base and Query System",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical - Knowledge Base and Query System in Prolog",
          },
          {
            type: "code",
            fileName: "family-knowledge.pl",
            value: `% Facts about family relationships
parent(john, mary).
parent(john, steve).
parent(mary, alice).
parent(mary, bob).
parent(alice, carol).
parent(alice, david).
parent(bob, emily).
parent(bob, frank).

% Rules to derive additional relationships
grandparent(GP, GC) :-
    parent(GP, Parent),
    parent(Parent, GC).

sibling(X, Y) :-
    parent(P, X),
    parent(P, Y), 
    X \\= Y.

brother(X, Y) :-
    male(X),
    sibling(X, Y).

sister(X, Y) :-
    female(X),
    sibling(X, Y).

uncle(Uncle, NieceNephew) :-
    brother(Uncle, Parent),
    parent(Parent, NieceNephew).

aunt(Aunt, NieceNephew) :-
    sister(Aunt, Parent),
    parent(Parent, NieceNephew).

% Define genders
male(john).
male(steve).
male(bob).
male(carol).
male(david).
male(frank).

female(mary).
female(alice).
female(emily).

% Example queries:
% ?- grandparent(GP, emily).
% ?- uncle(Uncle, carol).
% ?- aunt(Aunt, david).


% Extended family tree
parent(a,b).
parent(a,c).
parent(b,d).
parent(b,e).
parent(d,f).
parent(d,g).
parent(c,h).
parent(c,i).
parent(i,j).
parent(i,k).

male(a).
male(b).
male(e).
male(f).
male(g).
male(h).
male(i).
male(k).

female(c).
female(d).
female(j).`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `?- grandparent(GP, emily).
GP = mary ;
GP = john.

?- uncle(Uncle, carol).
Uncle = steve ;
Uncle = bob.

?- aunt(Aunt, david).
Aunt = emily.`,
          },
        ],
      },
      // semantic-net
      {
        key: "semantic-net",
        name: "Semantic Net Representation from Prolog Knowledge",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical - Semantic Net (Converted from Prolog Knowledge Base)",
          },
          {
            type: "code",
            fileName: "semantic-net.py",
            value: `import networkx as nx
import matplotlib.pyplot as plt

# Create a directed graph
G = nx.DiGraph()

# --- Prolog Facts as Semantic Net ---

# Family relationships
relations = [
    ("john", "mary", "parent"),
    ("john", "steve", "parent"),
    ("mary", "alice", "parent"),
    ("mary", "bob", "parent"),
    ("alice", "carol", "parent"),
    ("alice", "david", "parent"),
    ("bob", "emily", "parent"),
    ("bob", "frank", "parent"),
]

# Genders
genders = [
    ("john", "male", "is-a"),
    ("steve", "male", "is-a"),
    ("bob", "male", "is-a"),
    ("carol", "male", "is-a"),
    ("david", "male", "is-a"),
    ("frank", "male", "is-a"),
    ("mary", "female", "is-a"),
    ("alice", "female", "is-a"),
    ("emily", "female", "is-a"),
]

# Add nodes & edges
for subj, obj, rel in relations + genders:
    G.add_edge(subj.capitalize(), obj.capitalize(), label=rel)

# Layout
pos = nx.spring_layout(G, k=0.8, seed=42)

# Draw graph
plt.figure(figsize=(10, 7))
nx.draw(
    G, pos,
    with_labels=True,
    node_size=3000,
    node_color="lightblue",
    font_size=9,
    font_weight="bold",
    arrowsize=15
)

# Edge labels
edge_labels = nx.get_edge_attributes(G, 'label')
nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels, font_color="red", font_size=9)

# Show Semantic Net
plt.title("Semantic Net from Prolog Knowledge Base", fontsize=12, fontweight="bold")
plt.show()`,
          },
          {
            type: "code",
            language: "text",
            is_output: true,
            value: `Semantic Net Visualization Generated:
- Parent relationships drawn as edges labeled 'parent'
- Gender represented as 'is-a' links (e.g., John → Male)
- Nodes are family members from Prolog facts`,
          },
        ],
      },
      {
        key: "travelling-salesman-prolog",
        name: "Travelling Salesman Problem using Prolog",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical - Travelling Salesman Problem using prolog",
          },
          {
            type: "code",
            fileName: "travelling-salesman-prolog.py",
            value: `% tsp.pl
% Simple exhaustive TSP for a small set of cities (symmetric distances)

% ----------- Distances (facts) -------------
distance(delhi, mumbai, 1400).
distance(delhi, kolkata, 1500).
distance(delhi, chennai, 2200).
distance(mumbai, kolkata, 2000).
distance(mumbai, chennai, 1300).
distance(kolkata, chennai, 1650).

% Make distances bidirectional (symmetric)
path(X, Y, D) :- distance(X, Y, D).
path(X, Y, D) :- distance(Y, X, D).

% ----------- Utility: total distance of a route -------------
% total_distance(ListOfCitiesIncludingReturn, TotalDistance)
total_distance([_], 0).  % single node -> 0 distance
total_distance([A,B|Rest], Total) :-
    path(A, B, D1),
    total_distance([B|Rest], D2),
    Total is D1 + D2.

% ----------- List of cities in problem -------------
cities([delhi, mumbai, kolkata, chennai]).

% ----------- TSP Main: find shortest cycle starting and ending at Start -------------
% tsp(Start, BestFullPath, MinDistance).
tsp(Start, BestFullPath, MinDistance) :-
    cities(Cities),
    % ensure Start is one of the cities
    member(Start, Cities),
    % remove Start from city list to permute the remaining cities
    select(Start, Cities, Others),
    % collect all complete cycles (Start + permutation + Start) with their distances
    findall(Dist-FullPath,
            ( permutation(Others, Perm),               % all permutations of the other cities
              append([Start|Perm], [Start], FullPath),% make cycle: Start...Start
              total_distance(FullPath, Dist)
            ),
            Pairs),
    % sort by distance (key) and pick minimum
    keysort(Pairs, Sorted),
    Sorted = [MinDistance-BestFullPath | _].`,
          },
          //           {
          //             type: "code",
          //             language: "text",
          //             is_output: true,
          //             value: `Semantic Net Visualization Generated:
          // - Parent relationships drawn as edges labeled 'parent'
          // - Gender represented as 'is-a' links (e.g., John → Male)
          // - Nodes are family members from Prolog facts`,
          //           },
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
    def __init__(self, name, rollno, m1, m2):
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
      // p-12
      {
        key: "cookies",
        name: "Practical - 12: Cookie's",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 12 - Cookie's",
          },

          {
            type: "code",
            fileName: "Default.aspx",
            language: "java",
            value: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CookieDemo.Default" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Cookie Example</title>
</head>
<body>
    <form id="form1" runat="server">
        <div style="font-family: Arial; padding:20px;">
            <h2>Cookie Demo</h2>

            <asp:Label ID="lblName" runat="server" Text="Enter your name: "></asp:Label>
            <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
            <asp:Button ID="btnSave" runat="server" Text="Save Cookie" OnClick="btnSave_Click" />
            <asp:Button ID="btnDelete" runat="server" Text="Delete Cookie" OnClick="btnDelete_Click" />

            <br /><br />
            <asp:Label ID="lblMessage" runat="server" ForeColor="Green"></asp:Label>

            <br /><br />
            <asp:HyperLink ID="hlNextPage" runat="server" NavigateUrl="~/Welcome.aspx">Go to Welcome Page</asp:HyperLink>
        </div>
    </form>
</body>
</html>`,
          },
          {
            type: "code",
            fileName: "Default.aspx.cs",
            language: "java",
            value: `using System;
using System.Web;

namespace CookieDemo
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Request.Cookies["UserName"] != null)
                {
                    txtName.Text = Request.Cookies["UserName"].Value;
                    lblMessage.Text = "Cookie loaded: " + txtName.Text;
                }
            }
        }

        protected void btnSave_Click(object sender, EventArgs e)
        {
            HttpCookie cookie = new HttpCookie("UserName");
            cookie.Value = txtName.Text;
            cookie.Expires = DateTime.Now.AddYears(1);
            Response.Cookies.Add(cookie);

            lblMessage.Text = "Cookie saved successfully!";
        }

        protected void btnDelete_Click(object sender, EventArgs e)
        {
            if (Request.Cookies["UserName"] != null)
            {
                Response.Cookies["UserName"].Expires = DateTime.Now.AddDays(-1);
                lblMessage.Text = "Cookie deleted!";
                txtName.Text = "";
            }
        }
    }
}`,
          },
          {
            type: "code",
            fileName: "Welcome.aspx",
            language: "java",
            value: `using System;
using System.Web;

namespace CookieDemo
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Request.Cookies["UserName"] != null)
                {
                    txtName.Text = Request.Cookies["UserName"].Value;
                    lblMessage.Text = "Cookie loaded: " + txtName.Text;
                }
            }
        }

        protected void btnSave_Click(object sender, EventArgs e)
        {
            HttpCookie cookie = new HttpCookie("UserName");
            cookie.Value = txtName.Text;
            cookie.Expires = DateTime.Now.AddYears(1);
            Response.Cookies.Add(cookie);

            lblMessage.Text = "Cookie saved successfully!";
        }

        protected void btnDelete_Click(object sender, EventArgs e)
        {
            if (Request.Cookies["UserName"] != null)
            {
                Response.Cookies["UserName"].Expires = DateTime.Now.AddDays(-1);
                lblMessage.Text = "Cookie deleted!";
                txtName.Text = "";
            }
        }
    }
}`,
          },
          {
            type: "code",
            fileName: "Welcome.aspx.cs",
            language: "java",
            value: `using System;

namespace CookieDemo
{
    public partial class Welcome : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.Cookies["UserName"] != null)
            {
                string userName = Request.Cookies["UserName"].Value;
                lblWelcome.Text = "Hello, " + userName + "! Welcome back.";
            }
            else
            {
                lblWelcome.Text = "Hello, Guest! (No cookie found)";
            }
        }
    }
}`,
          },
        ],
      },
      //  p- 13
      {
        key: "crud-ado",
        name: "Practical - 13 : CRUD Operations using ADO.NET",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 13 - CRUD Operations using ADO.NET",
          },
          {
            type: "code",
            fileName: "Web.config",
            language: "java",
            value: `<configuration>
  <connectionStrings>
    <add name="ConnectionString"
         connectionString="Data Source=YOUR_SERVER_NAME;Initial Catalog=StudentDB;Integrated Security=True"
         providerName="System.Data.SqlClient" />
  </connectionStrings>
  <system.web>
    <compilation debug="true" targetFramework="4.7.2" />
    <httpRuntime targetFramework="4.7.2" />
  </system.web>
</configuration>`,
          },
          {
            type: "code",
            fileName: "Default.aspx",
            language: "java",
            value: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication11._Default" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>CRUD Operations using ADO.NET</title>
    <style>
        .auto-style1 { width: 137px; }
        table { margin: 20px; }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table>
                <tr>
                    <td colspan="2"><h3>Student Login Info</h3></td>
                </tr>
                <tr>
                    <td class="auto-style1">Enter Id</td>
                    <td><asp:TextBox ID="txtId" runat="server"></asp:TextBox></td>
                </tr>
                <tr>
                    <td class="auto-style1">Enter Name</td>
                    <td><asp:TextBox ID="txtName" runat="server"></asp:TextBox></td>
                </tr>
                <tr>
                    <td class="auto-style1">Enter Password</td>
                    <td><asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <asp:Button ID="btnInsert" runat="server" Text="Insert" OnClick="btnInsert_Click" />
                        <asp:Button ID="btnFind" runat="server" Text="Find" OnClick="btnFind_Click" />
                        <asp:Button ID="btnUpdate" runat="server" Text="Update" OnClick="btnUpdate_Click" />
                        <asp:Button ID="btnDelete" runat="server" Text="Delete" OnClick="btnDelete_Click" />
                    </td>
                </tr>
            </table>
        </div>

        <hr />

        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="true" BorderWidth="1" CellPadding="5"></asp:GridView>
    </form>
</body>
</html>`,
          },
          {
            type: "code",
            fileName: "Default.aspx.cs",
            language: "java",
            value: `using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.UI;

namespace WebApplication11
{
    public partial class _Default : Page
    {
        string cs = ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                LoadData();
            }
        }

        private void LoadData()
        {
            using (SqlConnection conn = new SqlConnection(cs))
            {
                SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM info", conn);
                DataTable dt = new DataTable();
                da.Fill(dt);
                GridView1.DataSource = dt;
                GridView1.DataBind();
            }
        }

        protected void btnInsert_Click(object sender, EventArgs e)
        {
            using (SqlConnection conn = new SqlConnection(cs))
            {
                string sql = "INSERT INTO info (Name, Password) VALUES (@Name, @Password)";
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.Parameters.AddWithValue("@Name", txtName.Text);
                cmd.Parameters.AddWithValue("@Password", txtPassword.Text);
                conn.Open();
                cmd.ExecuteNonQuery();
            }
            Clear();
            Response.Write("<script>alert('Record Inserted Successfully');</script>");
            LoadData();
        }

        protected void btnFind_Click(object sender, EventArgs e)
        {
            using (SqlConnection conn = new SqlConnection(cs))
            {
                string sql = "SELECT * FROM info WHERE Id=@Id";
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.Parameters.AddWithValue("@Id", txtId.Text);
                conn.Open();
                SqlDataReader dr = cmd.ExecuteReader();
                if (dr.Read())
                {
                    txtName.Text = dr["Name"].ToString();
                    txtPassword.Text = dr["Password"].ToString();
                }
                else
                {
                    Response.Write("<script>alert('Record Not Found');</script>");
                }
            }
        }

        protected void btnUpdate_Click(object sender, EventArgs e)
        {
            using (SqlConnection conn = new SqlConnection(cs))
            {
                string sql = "UPDATE info SET Name=@Name, Password=@Password WHERE Id=@Id";
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.Parameters.AddWithValue("@Id", txtId.Text);
                cmd.Parameters.AddWithValue("@Name", txtName.Text);
                cmd.Parameters.AddWithValue("@Password", txtPassword.Text);
                conn.Open();
                cmd.ExecuteNonQuery();
            }
            Clear();
            Response.Write("<script>alert('Record Updated Successfully');</script>");
            LoadData();
        }

        protected void btnDelete_Click(object sender, EventArgs e)
        {
            using (SqlConnection conn = new SqlConnection(cs))
            {
                string sql = "DELETE FROM info WHERE Id=@Id";
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.Parameters.AddWithValue("@Id", txtId.Text);
                conn.Open();
                cmd.ExecuteNonQuery();
            }
            Clear();
            Response.Write("<script>alert('Record Deleted Successfully');</script>");
            LoadData();
        }

        private void Clear()
        {
            txtId.Text = "";
            txtName.Text = "";
            txtPassword.Text = "";
        }
    }
}`,
          },
        ],
      },
      //  p- 16
      {
        key: "train-crud",
        name: "Practical - 16 : LINQ to SQL & Stored Procedures",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 16 - LINQ to SQL & Stored Procedures",
          },
          {
            type: "code",
            fileName: "traindata.aspx",
            language: "java",
            value: `<%@ Page Language="C#" AutoEventWireup="true" CodeFile="traindata.aspx.cs"
Inherits="traindata" %>
<!DOCTYPE html>
<html>
  <body>
    <form runat="server">
      Train ID: <asp:TextBox ID="txtID" runat="server" ReadOnly="true" /><br />
      Name: <asp:TextBox ID="txtName" runat="server" /><br />
      Type: <asp:TextBox ID="txtType" runat="server" /><br />
      Arrival: <asp:TextBox ID="txtArrival" runat="server" /><br />
      Departure: <asp:TextBox ID="txtDeparture" runat="server" /><br />
      Start: <asp:TextBox ID="txtStart" runat="server" /><br />
      End: <asp:TextBox ID="txtEnd" runat="server" /><br />

      <asp:Button
        ID="btnInsert"
        runat="server"
        Text="Insert"
        OnClick="btnInsert_Click"
      />
      <asp:Button
        ID="btnUpdate"
        runat="server"
        Text="Update"
        OnClick="btnUpdate_Click"
      />
      <asp:Button
        ID="btnDelete"
        runat="server"
        Text="Delete"
        OnClick="btnDelete_Click"
      />
      <asp:TextBox ID="txtSearch" runat="server" />
      <asp:Button
        ID="btnSearch"
        runat="server"
        Text="Search"
        OnClick="btnSearch_Click"
      />
      <asp:Button
        ID="btnShow"
        runat="server"
        Text="Show All"
        OnClick="btnShow_Click"
      />

      <br /><asp:GridView
        ID="GridView1"
        runat="server"
        AutoGenerateColumns="true"
      />
    </form>
  </body>
</html>`,
          },
          {
            type: "code",
            fileName: "traindata.aspx.cs",
            language: "java",
            value: `using System;
using System.Linq;

public partial class traindata : System.Web.UI.Page
{
    TrainDataDataContext db = new TrainDataDataContext();

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack) ShowAll();
    }

    void ShowAll()
    {
        GridView1.DataSource = db.sp_GetTrains();
        GridView1.DataBind();
    }

    protected void btnInsert_Click(object sender, EventArgs e)
    {
        db.sp_InsertTrain(txtName.Text, txtType.Text, TimeSpan.Parse(txtArrival.Text),
                          TimeSpan.Parse(txtDeparture.Text), txtStart.Text, txtEnd.Text);
        ShowAll();
    }

    protected void btnUpdate_Click(object sender, EventArgs e)
    {
        db.sp_UpdateTrain(int.Parse(txtID.Text), txtName.Text, txtType.Text,
                          TimeSpan.Parse(txtArrival.Text), TimeSpan.Parse(txtDeparture.Text),
                          txtStart.Text, txtEnd.Text);
        ShowAll();
    }

    protected void btnDelete_Click(object sender, EventArgs e)
    {
        db.sp_DeleteTrain(int.Parse(txtID.Text));
        ShowAll();
    }

    protected void btnSearch_Click(object sender, EventArgs e)
    {
        GridView1.DataSource = db.sp_SearchTrain(txtSearch.Text);
        GridView1.DataBind();
    }

    protected void btnShow_Click(object sender, EventArgs e)
    {
        ShowAll();
    }
}`,
          },
          {
            type: "code",
            fileName: "train_master.sql",
            language: "sql",
            value: `CREATE DATABASE train_master;
GO
USE train_master;
GO

CREATE TABLE train_info (
    train_id INT IDENTITY(1,1) PRIMARY KEY,
    train_name NVARCHAR(100),
    train_type NVARCHAR(50),
    arrival_time TIME,
    departure_time TIME,
    start_location NVARCHAR(100),
    end_location NVARCHAR(100)
);
GO

-- Insert
CREATE PROC sp_InsertTrain
 @train_name NVARCHAR(100), @train_type NVARCHAR(50),
 @arrival_time TIME, @departure_time TIME,
 @start_location NVARCHAR(100), @end_location NVARCHAR(100)
AS
INSERT INTO train_info VALUES(@train_name,@train_type,@arrival_time,@departure_time,@start_location,@end_location);
GO

-- Update
CREATE PROC sp_UpdateTrain
 @train_id INT, @train_name NVARCHAR(100), @train_type NVARCHAR(50),
 @arrival_time TIME, @departure_time TIME,
 @start_location NVARCHAR(100), @end_location NVARCHAR(100)
AS
UPDATE train_info SET train_name=@train_name, train_type=@train_type,
 arrival_time=@arrival_time, departure_time=@departure_time,
 start_location=@start_location, end_location=@end_location
WHERE train_id=@train_id;
GO

-- Delete
CREATE PROC sp_DeleteTrain @train_id INT
AS DELETE FROM train_info WHERE train_id=@train_id;
GO

-- View
CREATE PROC sp_GetTrains AS SELECT * FROM train_info;
GO

-- Search
CREATE PROC sp_SearchTrain @keyword NVARCHAR(100)
AS
SELECT * FROM train_info 
WHERE train_name LIKE '%'+@keyword+'%' OR train_type LIKE '%'+@keyword+'%';
GO`,
          },
        ],
      },

      //  p- 17
      {
        key: "calendar-ajax",
        name: "Practical - 17 : Calendar Navigation using Ajax Calendar Extender",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 17 - Calendar Navigation using Ajax Calendar Extender",
          },
          {
            type: "code",
            fileName: "CalendarDemo.aspx",
            language: "java",
            value: `<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CalendarDemo.aspx.cs"
Inherits="CalendarDemo" %> 
<%@ Register Assembly="AjaxControlToolkit"
Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<!DOCTYPE html>
<html>
  <head runat="server">
    <title>Calendar Navigation using Ajax Calendar Extender</title>
  </head>
  <body>
    <form id="form1" runat="server">
      <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>

      <div>
        <h3>Select Date:</h3>
        <asp:TextBox ID="txtDate" runat="server" Width="150px"></asp:TextBox>

        <!-- CalendarExtender from AjaxControlToolkit -->
        <asp:CalendarExtender
          ID="CalendarExtender1"
          runat="server"
          TargetControlID="txtDate"
          Format="dd-MM-yyyy"
        >
        </asp:CalendarExtender>

        <br /><br />
        <asp:Button
          ID="btnSubmit"
          runat="server"
          Text="Show Selected Date"
          OnClick="btnSubmit_Click"
        />
        <br /><br />
        <asp:Label ID="lblResult" runat="server" Text=""></asp:Label>
      </div>
    </form>
  </body>
</html>`,
          },
          {
            type: "code",
            fileName: "CalendarDemo.aspx.cs",
            language: "java",
            value: `using System;

public partial class CalendarDemo : System.Web.UI.Page
{
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        lblResult.Text = "You selected: " + txtDate.Text;
    }
}`,
          },
        ],
      },

      //  p- 18
      {
        key: "xml-read-write",
        name: "Practical - 18 : XML Read and Write Demo",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 18 - XML Read and Write Demo",
          },
          {
            type: "code",
            fileName: "Default.aspx",
            language: "java",
            value: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs"
Inherits="WebApplication17.Default" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head runat="server">
    <title>XML Read and Write Demo</title>
  </head>
  <body>
    <form id="form1" runat="server">
      <div style="margin: 20px">
        <h3>Enter Student Details</h3>

        <asp:TextBox
          ID="txtName"
          runat="server"
          Placeholder="Enter Name"
        ></asp:TextBox>
        <br /><br />

        <asp:TextBox
          ID="txtAge"
          runat="server"
          Placeholder="Enter Age"
        ></asp:TextBox>
        <br /><br />

        <asp:Button
          ID="btnWrite"
          Text="Write to XML"
          runat="server"
          OnClick="btnWrite_Click"
        />
        <br /><br />

        <asp:Button
          ID="btnRead"
          Text="Read from XML"
          runat="server"
          OnClick="btnRead_Click"
        />
        <br /><br />

        <asp:Label ID="lblOutput" runat="server" ForeColor="Green"></asp:Label>
      </div>
    </form>
  </body>
</html>`,
          },
          {
            type: "code",
            fileName: "Default.aspx.cs",
            language: "java",
            value: `using System;
using System.Data;
using System.Xml;

public partial class _Default : System.Web.UI.Page
{
    string path = @"D:\\student.xml"; // XML file path

    protected void btnWrite_Click(object sender, EventArgs e)
    {
        XmlDocument doc = new XmlDocument();
        doc.Load(path);

        XmlElement student = doc.CreateElement("Student");

        XmlElement name = doc.CreateElement("Name");
        name.InnerText = txtName.Text;

        XmlElement age = doc.CreateElement("Age");
        age.InnerText = txtAge.Text;

        student.AppendChild(name);
        student.AppendChild(age);

        doc.DocumentElement.AppendChild(student);
        doc.Save(path);

        lblOutput.Text = "Data written successfully!";
    }

    protected void btnRead_Click(object sender, EventArgs e)
    {
        DataSet ds = new DataSet();
        ds.ReadXml(path);

        lblOutput.Text = "Students:<br/>";
        foreach (DataRow row in ds.Tables[0].Rows)
        {
            lblOutput.Text += row["Name"] + " - " + row["Age"] + "<br/>";
        }
    }
}`,
          },
          {
            type: "code",
            fileName: "student.xml",
            language: "xml",
            value: `<Students>
    <Student>
        <Name>Rahul</Name>
        <Age>21</Age>
    </Student>
</Students>`,
          },
        ],
      },
      //  p- 19
      {
        key: "mvc-book-crud",
        name: "Practical - 19 : ASP.NET MVC CRUD using Entity Framework (Book Management)",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 19 - ASP.NET MVC CRUD using Entity Framework (Book Management)",
          },
          {
            type: "code",
            fileName: "Book.cs",
            language: "csharp",
            value: `using System.ComponentModel.DataAnnotations;

public class Book
{
    public int book_id { get; set; }

    [Required(ErrorMessage = "Book name is required")]
    public string book_name { get; set; }

    [Required(ErrorMessage = "Author is required")]
    public string author { get; set; }

    [Range(1, 9999, ErrorMessage = "Enter valid price")]
    public decimal price { get; set; }
}`,
          },
          {
            type: "code",
            fileName: "BookController.cs",
            language: "csharp",
            value: `using System.Linq;
using System.Web.Mvc;

public class BookController : Controller
{
    BookDBContext db = new BookDBContext();

    // View All
    public ActionResult Index()
    {
        return View(db.Books.ToList());
    }

    // Insert
    public ActionResult Create() => View();

    [HttpPost]
    public ActionResult Create(Book b)
    {
        if (ModelState.IsValid)
        {
            db.Books.Add(b);
            db.SaveChanges();
            return RedirectToAction("Index");
        }
        return View(b);
    }

    // Search
    public ActionResult Search(string name)
    {
        var result = db.Books.Where(x => x.book_name.Contains(name)).ToList();
        return View("Index", result);
    }

    // Update
    public ActionResult Edit(int id)
    {
        return View(db.Books.Find(id));
    }

    [HttpPost]
    public ActionResult Edit(Book b)
    {
        if (ModelState.IsValid)
        {
            db.Entry(b).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("Index");
        }
        return View(b);
    }

    // Delete
    public ActionResult Delete(int id)
    {
        var b = db.Books.Find(id);
        db.Books.Remove(b);
        db.SaveChanges();
        return RedirectToAction("Index");
    }
}`,
          },
          {
            type: "code",
            fileName: "Index.cshtml",
            language: "html",
            value: `@model IEnumerable<Book>
<h2>Book List</h2>

<form method="get" action="/Book/Search">
    <input type="text" name="name" placeholder="Search by name" />
    <input type="submit" value="Search" />
</form>

<table border="1">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Author</th>
        <th>Price</th>
        <th>Action</th>
    </tr>
    @foreach (var item in Model)
    {
        <tr>
            <td>@item.book_id</td>
            <td>@item.book_name</td>
            <td>@item.author</td>
            <td>@item.price</td>
            <td>
                <a href="/Book/Edit/@item.book_id">Edit</a> |
                <a href="/Book/Delete/@item.book_id">Delete</a>
            </td>
        </tr>
    }
</table>
<a href="/Book/Create">Add New Book</a>`,
          },
          {
            type: "code",
            fileName: "book_master.sql",
            language: "sql",
            value: `CREATE DATABASE book_master;
USE book_master;

CREATE TABLE book_info (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    book_name VARCHAR(100),
    author VARCHAR(100),
    price DECIMAL(10,2)
);`,
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
          {
            type: "btn",
            title: "Download Project: Handler-Based Counter App",
            value:
              "https://github.com/ayushpathak-48/mad-handler-based-counter-app/archive/refs/heads/main.zip",
          },
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
      //  p-6
      {
        key: "progress-bar",
        name: "Practical:6 Progress Bar",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical:6 Progress Bar",
          },
          {
            type: "btn",
            title: "Download Project: Progress Bar practical code",
            value:
              "https://github.com/ayushpathak-48/mad-p6-progress-bar/archive/refs/heads/main.zip",
          },
          {
            type: "code",
            language: "html",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical"
    android:padding="20dp">

    <Button
        android:id="@+id/btnStart"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Start Progress" />

    <ProgressBar
        android:id="@+id/progressBar"
        style="@android:style/Widget.ProgressBar.Horizontal"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:max="100"
        android:progress="0"
        android:layout_marginTop="20dp" />

    <TextView
        android:id="@+id/txtProgress"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Progress: 0%"
        android:layout_marginTop="10dp" />

    <TextView
        android:id="@+id/txtMessage"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text=""
        android:textStyle="bold"
        android:layout_marginTop="20dp" />
</LinearLayout>
`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.progressbar;

import android.os.AsyncTask;
import android.os.Bundle;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

import com.example.progressbar.R;

public class MainActivity extends AppCompatActivity {

    Button btnStart;
    ProgressBar progressBar;
    TextView txtProgress, txtMessage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnStart = findViewById(R.id.btnStart);
        progressBar = findViewById(R.id.progressBar);
        txtProgress = findViewById(R.id.txtProgress);
        txtMessage = findViewById(R.id.txtMessage);

        btnStart.setOnClickListener(v -> {
            new ProgressTask().execute();
        });
    }

    private class ProgressTask extends AsyncTask<Void, Integer, String> {

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
            progressBar.setProgress(0);
            txtProgress.setText("Progress: 0%");
            txtMessage.setText("");
        }

        @Override
        protected String doInBackground(Void... voids) {
            int progress = 0;
            while (progress <= 100) {
                try {
                    Thread.sleep(50); // simulate time-consuming task
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                publishProgress(progress);
                progress++;
            }
            return "✅ Task Completed Successfully!";
        }

        @Override
        protected void onProgressUpdate(Integer... values) {
            int value = values[0];
            progressBar.setProgress(value);
            txtProgress.setText("Progress: " + value + "%");
        }

        @Override
        protected void onPostExecute(String result) {
            txtMessage.setText(result);
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
      //  p-7
      {
        key: "music-service-with-start-stop",
        name: "Practical - 7: Music Service with Start/Stop",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical - 7: Music Service with Start/Stop",
          },
          {
            type: "btn",
            title: "Download Project: Music Service Project",
            value:
              "https://github.com/ayushpathak-48/services-project/archive/refs/heads/main.zip",
          },
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
      // p-8
      {
        key: "simple-notification",
        name: "Practical-8:Simple Notification Example",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical-8:Simple Notification Example",
          },
          // {
          //   type: "btn",
          //   title: "Download Project: Simple Notification Example",
          //   value: "https://github.com/your-repo-link.zip",
          // },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/white"
    tools:context=".MainActivity">

    <Button
        android:id="@+id/btn"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Send Notification"
        android:backgroundTint="@android:color/black"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_after_notification.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:background="@color/white"
    tools:context=".AfterNotification">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Welcome To Parul University"
        android:textSize="15sp"
        android:textStyle="bold" />
</LinearLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.myapplication;
import android.Manifest;
import android.annotation.SuppressLint;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
public class MainActivity extends AppCompatActivity {
    private final String channelId = "i.apps.notifications";
    private final String description = "Test notification";
    private final int notificationId = 1234;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn = findViewById(R.id.btn);

        createNotificationChannel();

        btn.setOnClickListener(v -> {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                if (ActivityCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS)
                        != PackageManager.PERMISSION_GRANTED) {
                    ActivityCompat.requestPermissions(
                            this,
                            new String[]{Manifest.permission.POST_NOTIFICATIONS},
                            101
                    );
                    return;
                }
            }
            sendNotification();
        });
    }

    private void createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel notificationChannel = new NotificationChannel(
                    channelId,
                    description,
                    NotificationManager.IMPORTANCE_HIGH
            );
            notificationChannel.enableLights(true);
            notificationChannel.setLightColor(Color.GREEN);
            notificationChannel.enableVibration(true);
            NotificationManager notificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
            if (notificationManager != null) {
                notificationManager.createNotificationChannel(notificationChannel);
            }
        }
    }

    @SuppressLint("MissingPermission")
    private void sendNotification() {
        Intent intent = new Intent(this, AfterNotification.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
        PendingIntent pendingIntent = PendingIntent.getActivity(
                this, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        NotificationCompat.Builder builder = new NotificationCompat.Builder(this, channelId)
                .setSmallIcon(R.drawable.ic_launcher_foreground)
                .setContentTitle("Hello")
                .setContentText("Welcome to Parul University!!")
                .setContentIntent(pendingIntent)
                .setAutoCancel(true)
                .setPriority(NotificationCompat.PRIORITY_HIGH);

        NotificationManagerCompat notificationManager = NotificationManagerCompat.from(this);
        notificationManager.notify(notificationId, builder.build());
    }
}`,
          },
          {
            type: "code",
            language: "java",
            fileName: "AfterNotification.java",
            value: `package com.example.myapplication;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class AfterNotification extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_after_notification);
    }
}`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "AndroidManifest.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.MyApplication">
        
        <activity android:name=".AfterNotification" />
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>
    </application>
</manifest>`,
          },
        ],
      },
      {
        key: "prime-number-notification",
        name: "Prime Number Notification",
        pageBlocks: [
          {
            type: "heading",
            value: "Prime Number Notification",
          },
          {
            type: "btn",
            title: "Download Project: Prime Number Notification",
            value:
              "https://github.com/ayushpathak-48/mad-p8-notification-app/archive/refs/heads/main.zip",
          },
          {
            type: "code",
            language: "html",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:padding="16dp"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center">

    <EditText
        android:id="@+id/lowerBound"
        android:hint="Enter lower bound"
        android:inputType="number"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />

    <EditText
        android:id="@+id/upperBound"
        android:hint="Enter upper bound"
        android:inputType="number"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />

    <Button
        android:id="@+id/findButton"
        android:text="Find Primes"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />

    <TextView
        android:id="@+id/resultTextView"
        android:text="Results will appear here"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:paddingTop="16dp" />
</LinearLayout>
`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.notificationsapp;

import android.Manifest;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.app.NotificationCompat;

public class MainActivity extends AppCompatActivity {
    private EditText lowerBoundEditText, upperBoundEditText;
    private TextView resultTextView;
    private static final String CHANNEL_ID = "prime_channel";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        checkNotificationPermission();

        lowerBoundEditText = findViewById(R.id.lowerBound);
        upperBoundEditText = findViewById(R.id.upperBound);
        resultTextView = findViewById(R.id.resultTextView);
        Button findButton = findViewById(R.id.findButton);

        createNotificationChannel();

        findButton.setOnClickListener(v -> {
            int lower = Integer.parseInt(lowerBoundEditText.getText().toString());
            int upper = Integer.parseInt(upperBoundEditText.getText().toString());

            new Thread(() -> {
                StringBuilder primes = new StringBuilder();
                for (int i = lower; i <= upper; i++) {
                    if (isPrime(i)) primes.append(i).append(" ");
                }

                String result = primes.toString();
                new Handler(Looper.getMainLooper()).post(() -> {
                    resultTextView.setText(result);
                    showNotification("Prime Numbers :", result + "are the prime numbers between " + lower + " and " + upper + ".");
                });
            }).start();
        });
    }
    private boolean isPrime(int num) {
        if (num < 2) return false;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    }
    private void showNotification(String title, String message) {
        NotificationCompat.Builder builder = new NotificationCompat.Builder(this, CHANNEL_ID)
                .setSmallIcon(R.drawable.ic_launcher_foreground)
                .setContentTitle(title)
                .setContentText(message)
                .setPriority(NotificationCompat.PRIORITY_DEFAULT);

        NotificationManager manager = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);
        manager.notify(1, builder.build());
    }
    private void createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            CharSequence name = "Prime Channel";
            String description = "Shows when prime calculation completes";
            int importance = NotificationManager.IMPORTANCE_DEFAULT;
            NotificationChannel channel = new NotificationChannel(CHANNEL_ID, name, importance);
            channel.setDescription(description);
            NotificationManager manager = getSystemService(NotificationManager.class);
            manager.createNotificationChannel(channel);
        }
    }
    private void checkNotificationPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            if (ActivityCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS)
                    != PackageManager.PERMISSION_GRANTED) {
                ActivityCompat.requestPermissions(this,
                        new String[]{Manifest.permission.POST_NOTIFICATIONS}, 1);
            }
        }
    }
}

`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "AndroidManifest.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:exported="true"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.NotificationsApp">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

    </application>

</manifest>`,
          },
          {
            type: "code",
            language: "text",
            fileName: "build.gradle",
            value: `dependencies {
    ...
    implementation 'androidx.localbroadcastmanager:localbroadcastmanager:1.1.0'
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
      //  p-9
      {
        key: "read-contacts",
        name: "Practical-9:Read Contacts",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical-9:Read Contacts",
          },
          // {
          //   type: "btn",
          //   title: "Download Project: Read Contacts",
          //   value: "https://github.com/your-repo-link.zip",
          // },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <ListView
        android:id="@+id/listView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:dividerHeight="1dp"/>
</LinearLayout>`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "AndroidManifest.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.READ_CONTACTS" />

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Readcontacts"
        tools:targetApi="31">
        
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.readcontacts;

import android.Manifest;
import android.content.ContentResolver;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    private static final int REQUEST_CODE_READ_CONTACTS = 1;
    ListView listView;
    ArrayList<String> contactsList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        listView = findViewById(R.id.listView);
        contactsList = new ArrayList<>();

        // Check permission
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.READ_CONTACTS)
                != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this,
                    new String[]{Manifest.permission.READ_CONTACTS}, REQUEST_CODE_READ_CONTACTS);
        } else {
            loadContacts();
        }
    }

    private void loadContacts() {
        ContentResolver contentResolver = getContentResolver();
        Cursor cursor = contentResolver.query(
                ContactsContract.CommonDataKinds.Phone.CONTENT_URI,
                null,
                null,
                null,
                ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME + " ASC");

        if (cursor != null && cursor.getCount() > 0) {
            while (cursor.moveToNext()) {
                String name = cursor.getString(
                        cursor.getColumnIndexOrThrow(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME));
                String phoneNumber = cursor.getString(
                        cursor.getColumnIndexOrThrow(ContactsContract.CommonDataKinds.Phone.NUMBER));

                contactsList.add(name + " : " + phoneNumber);
            }
            cursor.close();
        }

        // Display in ListView
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this,
                android.R.layout.simple_list_item_1, contactsList);
        listView.setAdapter(adapter);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions,
                                           @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);

        if (requestCode == REQUEST_CODE_READ_CONTACTS) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                loadContacts();
            } else {
                Toast.makeText(this, "Permission Denied!", Toast.LENGTH_SHORT).show();
            }
        }
    }
}`,
          },
        ],
      },

      //  p-10
      //  p-10
      {
        key: "generate-list",
        name: "Practical-10: Generate Dynamic List",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical-10: Generate Dynamic List",
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical"
    android:padding="20dp">

    <EditText
        android:id="@+id/etNumber"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Enter a number"
        android:inputType="number" />

    <Button
        android:id="@+id/btnGenerate"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Generate List" />

</LinearLayout>`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_second.xml",
            value: `<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <LinearLayout
        android:id="@+id/container"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="16dp" />

</ScrollView>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.practical10;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    EditText etNumber;
    Button btnGenerate;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        etNumber = findViewById(R.id.etNumber);
        btnGenerate = findViewById(R.id.btnGenerate);

        btnGenerate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String numStr = etNumber.getText().toString().trim();
                if (!numStr.isEmpty()) {
                    int num = Integer.parseInt(numStr);

                    Intent intent = new Intent(MainActivity.this, SecondActivity.class);
                    intent.putExtra("count", num);
                    startActivity(intent);
                }
            }
        });
    }
}`,
          },
          {
            type: "code",
            language: "java",
            fileName: "SecondActivity.java",
            value: `package com.example.practical10;

import static com.example.practical10.R.layout.activity_second;

import android.os.Bundle;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class SecondActivity extends AppCompatActivity {
    LinearLayout container;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(activity_second);

        container = findViewById(R.id.container);

        // Get number from intent
        int count = getIntent().getIntExtra("count", 0);

        // Dynamically generate TextViews
        for (int i = 1; i <= count; i++) {
            TextView tv = new TextView(this);
            tv.setText("Item " + i);
            tv.setTextSize(18f);
            tv.setPadding(10, 10, 10, 10);
            container.addView(tv);
        }
    }
}`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "AndroidManifest.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Practical10"
        tools:targetApi="31">

        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <activity android:name=".SecondActivity"></activity>
    </application>

</manifest>`,
          },
        ],
      },
      //  p-11
      {
        key: "practical-11",
        name: "Practical-11: Phone Dialer App",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical-11: Phone Dialer App",
          },
          {
            type: "code",
            language: "xml",
            fileName: "AndroidManifest.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.CALL_PHONE"
        tools:ignore="PermissionImpliesUnsupportedChromeOsHardware" />

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Dialerapp"
        tools:targetApi="31">

        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

    </application>
</manifest>`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:gravity="center"
    android:padding="20dp"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <EditText
        android:id="@+id/editTextNumber"
        android:hint="Enter Mobile Number"
        android:inputType="phone"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"/>

    <Button
        android:id="@+id/btnCall"
        android:text="Make Call"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="20dp"/>
</LinearLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.dialerapp;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText editTextNumber;
    Button btnCall;
    private static final int REQUEST_CALL = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editTextNumber = findViewById(R.id.editTextNumber);
        btnCall = findViewById(R.id.btnCall);

        btnCall.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                makePhoneCall();
            }
        });
    }

    private void makePhoneCall() {
        String number = editTextNumber.getText().toString();

        if (number.trim().length() > 0) {
            if (ContextCompat.checkSelfPermission(MainActivity.this,
                    Manifest.permission.CALL_PHONE) != PackageManager.PERMISSION_GRANTED) {
                ActivityCompat.requestPermissions(MainActivity.this,
                        new String[]{Manifest.permission.CALL_PHONE}, REQUEST_CALL);
            } else {
                String dial = "tel:" + number;
                startActivity(new Intent(Intent.ACTION_CALL, Uri.parse(dial)));
            }
        } else {
            Toast.makeText(this, "Enter a valid phone number", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if (requestCode == REQUEST_CALL) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                makePhoneCall();
            } else {
                Toast.makeText(this, "Permission DENIED", Toast.LENGTH_SHORT).show();
            }
        }
    }
}`,
          },
        ],
      },

      {
        key: "practical-12",
        name: "Practical-12: SMS Manager App",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical-12: SMS Manager App",
          },
          {
            type: "code",
            language: "xml",
            fileName: "AndroidManifest.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.READ_SMS"/>
    <uses-permission android:name="android.permission.SEND_SMS"/>
    <uses-permission android:name="android.permission.RECEIVE_SMS"/>
    <uses-permission android:name="android.permission.READ_PHONE_STATE"/>
    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Smsmanager"
        tools:targetApi="31">

        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:padding="16dp"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:text="Inbox Messages:"
        android:textSize="18sp"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"/>

    <ListView
        android:id="@+id/listViewMessages"
        android:layout_width="match_parent"
        android:layout_height="300dp"
        android:dividerHeight="1dp"/>

    <EditText
        android:id="@+id/editTextNumber"
        android:hint="Enter phone number"
        android:inputType="phone"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"/>

    <EditText
        android:id="@+id/editTextMessage"
        android:hint="Enter message"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"/>

    <Button
        android:id="@+id/btnSend"
        android:text="Send SMS"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dp"/>
</LinearLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.smsmanager;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.content.ContentResolver;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.net.Uri;
import android.os.Bundle;
import android.telephony.SmsManager;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    ListView listViewMessages;
    EditText editTextNumber, editTextMessage;
    Button btnSend;

    private static final int REQUEST_SMS_PERMISSION = 123;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        listViewMessages = findViewById(R.id.listViewMessages);
        editTextNumber = findViewById(R.id.editTextNumber);
        editTextMessage = findViewById(R.id.editTextMessage);
        btnSend = findViewById(R.id.btnSend);

        // Request SMS permissions
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.READ_SMS) != PackageManager.PERMISSION_GRANTED
                || ContextCompat.checkSelfPermission(this, Manifest.permission.SEND_SMS) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this,
                    new String[]{Manifest.permission.READ_SMS, Manifest.permission.SEND_SMS},
                    REQUEST_SMS_PERMISSION);
        } else {
            loadInboxMessages();
        }

        // Send SMS button click
        btnSend.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                sendSmsMessage();
            }
        });
    }

    // Load Inbox Messages
    private void loadInboxMessages() {
        ArrayList<String> smsList = new ArrayList<>();
        Uri uriSms = Uri.parse("content://sms/inbox");
        ContentResolver cr = getContentResolver();

        Cursor cursor = cr.query(uriSms, null, null, null, null);

        if (cursor != null && cursor.moveToFirst()) {
            do {
                String address = cursor.getString(cursor.getColumnIndexOrThrow("address"));
                String body = cursor.getString(cursor.getColumnIndexOrThrow("body"));
                smsList.add("From: " + address + "\\nMessage: " + body);
            } while (cursor.moveToNext());
            cursor.close();
        }

        ArrayAdapter<String> adapter = new ArrayAdapter<>(this,
                android.R.layout.simple_list_item_1, smsList);
        listViewMessages.setAdapter(adapter);
    }

    // Send SMS Message
    private void sendSmsMessage() {
        String phone = editTextNumber.getText().toString();
        String message = editTextMessage.getText().toString();

        if (phone.isEmpty() || message.isEmpty()) {
            Toast.makeText(this, "Please enter number and message", Toast.LENGTH_SHORT).show();
            return;
        }

        try {
            SmsManager smsManager = SmsManager.getDefault();
            smsManager.sendTextMessage(phone, null, message, null, null);
            Toast.makeText(this, "SMS Sent!", Toast.LENGTH_SHORT).show();
            editTextMessage.setText("");
        } catch (Exception e) {
            Toast.makeText(this, "Failed to send SMS: " + e.getMessage(), Toast.LENGTH_LONG).show();
        }
    }

    // Handle permission result
    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if (requestCode == REQUEST_SMS_PERMISSION) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                loadInboxMessages();
            } else {
                Toast.makeText(this, "Permission Denied", Toast.LENGTH_SHORT).show();
            }
        }
    }
}`,
          },
        ],
      },
      //  p - 13
      {
        key: "practical-13",
        name: "Practical-13: User Registration App",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical-13: User Registration App",
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:padding="20dp"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <EditText
        android:id="@+id/editTextName"
        android:hint="Enter Name"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"/>

    <EditText
        android:id="@+id/editTextEmail"
        android:hint="Enter Email"
        android:inputType="textEmailAddress"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"/>

    <EditText
        android:id="@+id/editTextPassword"
        android:hint="Enter Password"
        android:inputType="textPassword"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"/>

    <Button
        android:id="@+id/btnRegister"
        android:text="Register"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dp"/>

    <TextView
        android:text="Registered Users:"
        android:textSize="18sp"
        android:layout_marginTop="20dp"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"/>

    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/recyclerViewUsers"
        android:layout_width="match_parent"
        android:layout_height="match_parent"/>
</LinearLayout>`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "user_item.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:padding="10dp"
    android:background="#EEEEEE"
    android:layout_margin="5dp"
    android:layout_width="match_parent"
    android:layout_height="wrap_content">

    <TextView
        android:id="@+id/txtName"
        android:text="Name"
        android:textSize="16sp"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"/>

    <TextView
        android:id="@+id/txtEmail"
        android:text="Email"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"/>

    <TextView
        android:id="@+id/txtPassword"
        android:text="Password"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"/>

    <LinearLayout
        android:orientation="horizontal"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content">

        <Button
            android:id="@+id/btnEdit"
            android:text="Edit"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"/>

        <Button
            android:id="@+id/btnDelete"
            android:text="Delete"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginStart="10dp"/>
    </LinearLayout>
</LinearLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.userregistration;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import android.os.Bundle;
import android.view.View;
import android.widget.*;
import java.io.*;
import java.util.ArrayList;

public class MainActivity extends AppCompatActivity implements UserAdapter.UserActionListener {

    EditText editTextName, editTextEmail, editTextPassword;
    Button btnRegister;
    RecyclerView recyclerViewUsers;

    String fileName = "user_data.txt";
    ArrayList<User> usersList;
    UserAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editTextName = findViewById(R.id.editTextName);
        editTextEmail = findViewById(R.id.editTextEmail);
        editTextPassword = findViewById(R.id.editTextPassword);
        btnRegister = findViewById(R.id.btnRegister);
        recyclerViewUsers = findViewById(R.id.recyclerViewUsers);

        usersList = new ArrayList<>();
        adapter = new UserAdapter(this, usersList, this);
        recyclerViewUsers.setLayoutManager(new LinearLayoutManager(this));
        recyclerViewUsers.setAdapter(adapter);

        loadUsersFromFile();

        btnRegister.setOnClickListener(v -> saveUserData());
    }

    private void saveUserData() {
        String name = editTextName.getText().toString().trim();
        String email = editTextEmail.getText().toString().trim();
        String password = editTextPassword.getText().toString().trim();

        if (name.isEmpty() || email.isEmpty() || password.isEmpty()) {
            Toast.makeText(this, "Please fill all fields", Toast.LENGTH_SHORT).show();
            return;
        }

        User newUser = new User(name, email, password);
        usersList.add(newUser);
        adapter.notifyDataSetChanged();
        saveAllUsersToFile();

        editTextName.setText("");
        editTextEmail.setText("");
        editTextPassword.setText("");

        Toast.makeText(this, "User registered successfully!", Toast.LENGTH_SHORT).show();
    }

    private void saveAllUsersToFile() {
        try {
            FileOutputStream fos = openFileOutput(fileName, MODE_PRIVATE);
            OutputStreamWriter osw = new OutputStreamWriter(fos);

            for (User u : usersList) {
                osw.write(u.toString() + "\\n");
            }
            osw.close();
        } catch (Exception e) {
            Toast.makeText(this, "Error saving file", Toast.LENGTH_SHORT).show();
        }
    }

    private void loadUsersFromFile() {
        try {
            FileInputStream fis = openFileInput(fileName);
            BufferedReader br = new BufferedReader(new InputStreamReader(fis));
            String line;
            while ((line = br.readLine()) != null) {
                User user = User.fromString(line);
                if (user != null) usersList.add(user);
            }
            br.close();
            adapter.notifyDataSetChanged();
        } catch (FileNotFoundException e) {
            // First time, ignore
        } catch (IOException e) {
            Toast.makeText(this, "Error reading file", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onDelete(User user) {
        usersList.remove(user);
        adapter.notifyDataSetChanged();
        saveAllUsersToFile();
        Toast.makeText(this, "User deleted", Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onEdit(User user, int position) {
        editTextName.setText(user.name);
        editTextEmail.setText(user.email);
        editTextPassword.setText(user.password);

        // Remove old entry (it will be added again after update)
        usersList.remove(position);
        adapter.notifyDataSetChanged();
        saveAllUsersToFile();
    }
}`,
          },
          {
            type: "code",
            language: "java",
            fileName: "User.java",
            value: `package com.example.userregistration;

public class User {
    String name;
    String email;
    String password;

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    @Override
    public String toString() {
        return name + "," + email + "," + password;
    }

    public static User fromString(String line) {
        String[] parts = line.split(",");
        if (parts.length == 3) {
            return new User(parts[0], parts[1], parts[2]);
        }
        return null;
    }
}`,
          },
          {
            type: "code",
            language: "java",
            fileName: "UserAdapter.java",
            value: `package com.example.userregistration;

import android.app.AlertDialog;
import android.content.Context;
import android.view.*;
import android.widget.*;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;

public class UserAdapter extends RecyclerView.Adapter<UserAdapter.UserViewHolder> {

    Context context;
    ArrayList<User> userList;
    UserActionListener listener;

    public interface UserActionListener {
        void onDelete(User user);
        void onEdit(User user, int position);
    }

    public UserAdapter(Context context, ArrayList<User> userList, UserActionListener listener) {
        this.context = context;
        this.userList = userList;
        this.listener = listener;
    }

    @NonNull
    @Override
    public UserViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(context).inflate(R.layout.user_item, parent, false);
        return new UserViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull UserViewHolder holder, int position) {
        User user = userList.get(position);
        holder.txtName.setText(user.name);
        holder.txtEmail.setText(user.email);
        holder.txtPassword.setText(user.password);

        holder.btnDelete.setOnClickListener(v -> {
            new AlertDialog.Builder(context)
                    .setTitle("Delete User")
                    .setMessage("Are you sure you want to delete this user?")
                    .setPositiveButton("Yes", (dialog, which) -> {
                        listener.onDelete(user);
                    })
                    .setNegativeButton("No", null)
                    .show();
        });

        holder.btnEdit.setOnClickListener(v -> {
            listener.onEdit(user, position);
        });
    }

    @Override
    public int getItemCount() {
        return userList.size();
    }

    public static class UserViewHolder extends RecyclerView.ViewHolder {
        TextView txtName, txtEmail, txtPassword;
        Button btnDelete, btnEdit;

        public UserViewHolder(@NonNull View itemView) {
            super(itemView);
            txtName = itemView.findViewById(R.id.txtName);
            txtEmail = itemView.findViewById(R.id.txtEmail);
            txtPassword = itemView.findViewById(R.id.txtPassword);
            btnDelete = itemView.findViewById(R.id.btnDelete);
            btnEdit = itemView.findViewById(R.id.btnEdit);
        }
    }
}`,
          },
        ],
      },
      //  p - 14
      {
        key: "practical-14",
        name: "Practical-14: SharedPreferences App",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical-14: SharedPreferences App (Background Color Changer)",
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/mainLayout"
    android:orientation="vertical"
    android:gravity="center"
    android:padding="20dp"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:text="Select Background Color"
        android:textSize="20sp"
        android:layout_marginBottom="20dp"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"/>

    <Button
        android:id="@+id/btnRed"
        android:text="Red"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"/>

    <Button
        android:id="@+id/btnGreen"
        android:text="Green"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dp"/>

    <Button
        android:id="@+id/btnBlue"
        android:text="Blue"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dp"/>
</LinearLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.sharedpreferencesapp;

import androidx.appcompat.app.AppCompatActivity;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.Bundle;
import android.widget.Button;
import android.widget.LinearLayout;

public class MainActivity extends AppCompatActivity {

    LinearLayout mainLayout;
    Button btnRed, btnGreen, btnBlue;

    SharedPreferences sharedPreferences;
    String PREF_NAME = "ColorPref";
    String KEY_COLOR = "backgroundColor";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mainLayout = findViewById(R.id.mainLayout);
        btnRed = findViewById(R.id.btnRed);
        btnGreen = findViewById(R.id.btnGreen);
        btnBlue = findViewById(R.id.btnBlue);

        // Load SharedPreferences
        sharedPreferences = getSharedPreferences(PREF_NAME, MODE_PRIVATE);
        String savedColor = sharedPreferences.getString(KEY_COLOR, "WHITE"); // default White

        // Apply saved color
        applyColor(savedColor);

        // Button Listeners
        btnRed.setOnClickListener(v -> saveAndApplyColor("RED"));
        btnGreen.setOnClickListener(v -> saveAndApplyColor("GREEN"));
        btnBlue.setOnClickListener(v -> saveAndApplyColor("BLUE"));
    }

    private void saveAndApplyColor(String color) {
        // Save in SharedPreferences
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString(KEY_COLOR, color);
        editor.apply();

        // Apply color immediately
        applyColor(color);
    }

    private void applyColor(String color) {
        switch (color) {
            case "RED":
                mainLayout.setBackgroundColor(Color.RED);
                break;
            case "GREEN":
                mainLayout.setBackgroundColor(Color.GREEN);
                break;
            case "BLUE":
                mainLayout.setBackgroundColor(Color.BLUE);
                break;
            default:
                mainLayout.setBackgroundColor(Color.WHITE);
        }
    }
}`,
          },
        ],
      },
      //   p - 15
      {
        key: "practical-15",
        name: "Practical-15: SQLite User CRUD App",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical-15: SQLite User CRUD App",
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:padding="16dp"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <EditText
        android:id="@+id/etId"
        android:hint="User ID (AutoFill)"
        android:inputType="number"
        android:enabled="false"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"/>

    <EditText
        android:id="@+id/etName"
        android:hint="Name"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"/>

    <EditText
        android:id="@+id/etAddress"
        android:hint="Address"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"/>

    <EditText
        android:id="@+id/etContact"
        android:hint="Contact"
        android:inputType="phone"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"/>

    <LinearLayout
        android:orientation="horizontal"
        android:gravity="center"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dp">

        <Button
            android:id="@+id/btnAdd"
            android:text="Add"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"/>

        <Button
            android:id="@+id/btnUpdate"
            android:text="Update"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginLeft="10dp"/>

        <Button
            android:id="@+id/btnDelete"
            android:text="Delete"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginLeft="10dp"/>
    </LinearLayout>

    <Button
        android:id="@+id/btnList"
        android:text="List Users"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dp"/>

    <ListView
        android:id="@+id/listViewUsers"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="20dp"/>
</LinearLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.usercrudapp;

import androidx.appcompat.app.AppCompatActivity;
import android.database.Cursor;
import android.os.Bundle;
import android.widget.*;
import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    EditText etId, etName, etAddress, etContact;
    Button btnAdd, btnUpdate, btnDelete, btnList;
    ListView listViewUsers;
    DBHelper dbHelper;
    ArrayAdapter<String> adapter;
    ArrayList<String> userList;
    ArrayList<Integer> userIdList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        etId = findViewById(R.id.etId);
        etName = findViewById(R.id.etName);
        etAddress = findViewById(R.id.etAddress);
        etContact = findViewById(R.id.etContact);
        btnAdd = findViewById(R.id.btnAdd);
        btnUpdate = findViewById(R.id.btnUpdate);
        btnDelete = findViewById(R.id.btnDelete);
        btnList = findViewById(R.id.btnList);
        listViewUsers = findViewById(R.id.listViewUsers);

        dbHelper = new DBHelper(this);
        userList = new ArrayList<>();
        userIdList = new ArrayList<>();

        // ADD
        btnAdd.setOnClickListener(v -> {
            boolean inserted = dbHelper.insertUser(
                    etName.getText().toString(),
                    etAddress.getText().toString(),
                    etContact.getText().toString()
            );
            if (inserted) {
                Toast.makeText(this, "User Added", Toast.LENGTH_SHORT).show();
                clearFields();
                loadUsers();
            } else {
                Toast.makeText(this, "Error Adding User", Toast.LENGTH_SHORT).show();
            }
        });

        // UPDATE
        btnUpdate.setOnClickListener(v -> {
            boolean updated = dbHelper.updateUser(
                    etId.getText().toString(),
                    etName.getText().toString(),
                    etAddress.getText().toString(),
                    etContact.getText().toString()
            );
            if (updated) {
                Toast.makeText(this, "User Updated", Toast.LENGTH_SHORT).show();
                clearFields();
                loadUsers();
            } else {
                Toast.makeText(this, "Error Updating User", Toast.LENGTH_SHORT).show();
            }
        });

        // DELETE
        btnDelete.setOnClickListener(v -> {
            boolean deleted = dbHelper.deleteUser(etId.getText().toString());
            if (deleted) {
                Toast.makeText(this, "User Deleted", Toast.LENGTH_SHORT).show();
                clearFields();
                loadUsers();
            } else {
                Toast.makeText(this, "Error Deleting User", Toast.LENGTH_SHORT).show();
            }
        });

        // LIST USERS
        btnList.setOnClickListener(v -> loadUsers());

        // CLICK ITEM → SHOW IN EDITTEXT
        listViewUsers.setOnItemClickListener((parent, view, position, id) -> {
            int userId = userIdList.get(position);

            Cursor cursor = dbHelper.getAllUsers();
            if (cursor != null) {
                while (cursor.moveToNext()) {
                    if (cursor.getInt(0) == userId) {
                        etId.setText(String.valueOf(cursor.getInt(0)));
                        etName.setText(cursor.getString(1));
                        etAddress.setText(cursor.getString(2));
                        etContact.setText(cursor.getString(3));
                        break;
                    }
                }
                cursor.close();
            }
        });
    }

    private void loadUsers() {
        userList.clear();
        userIdList.clear();
        Cursor cursor = dbHelper.getAllUsers();
        if (cursor != null) {
            while (cursor.moveToNext()) {
                int id = cursor.getInt(0);
                String name = cursor.getString(1);
                String address = cursor.getString(2);
                String contact = cursor.getString(3);

                userList.add(id + " - " + name + " - " + contact);
                userIdList.add(id);
            }
            cursor.close();
        }
        adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, userList);
        listViewUsers.setAdapter(adapter);
    }

    private void clearFields() {
        etId.setText("");
        etName.setText("");
        etAddress.setText("");
        etContact.setText("");
    }
}`,
          },
          {
            type: "code",
            language: "java",
            fileName: "DBHelper.java",
            value: `package com.example.usercrudapp;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class DBHelper extends SQLiteOpenHelper {

    public static final String DATABASE_NAME = "UserDB.db";
    public static final String TABLE_NAME = "users";
    public static final String COL_ID = "id";
    public static final String COL_NAME = "name";
    public static final String COL_ADDRESS = "address";
    public static final String COL_CONTACT = "contact";

    public DBHelper(Context context) {
        super(context, DATABASE_NAME, null, 1);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        db.execSQL("CREATE TABLE " + TABLE_NAME + " (" +
                COL_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
                COL_NAME + " TEXT, " +
                COL_ADDRESS + " TEXT, " +
                COL_CONTACT + " TEXT)");
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_NAME);
        onCreate(db);
    }

    public boolean insertUser(String name, String address, String contact) {
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues cv = new ContentValues();
        cv.put(COL_NAME, name);
        cv.put(COL_ADDRESS, address);
        cv.put(COL_CONTACT, contact);
        long result = db.insert(TABLE_NAME, null, cv);
        return result != -1;
    }

    public boolean updateUser(String id, String name, String address, String contact) {
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues cv = new ContentValues();
        cv.put(COL_NAME, name);
        cv.put(COL_ADDRESS, address);
        cv.put(COL_CONTACT, contact);
        int result = db.update(TABLE_NAME, cv, COL_ID + "=?", new String[]{id});
        return result > 0;
    }

    public boolean deleteUser(String id) {
        SQLiteDatabase db = this.getWritableDatabase();
        int result = db.delete(TABLE_NAME, COL_ID + "=?", new String[]{id});
        return result > 0;
    }

    public Cursor getAllUsers() {
        SQLiteDatabase db = this.getReadableDatabase();
        return db.rawQuery("SELECT * FROM " + TABLE_NAME, null);
    }
}`,
          },
        ],
      },
      //  p -16
      //   p - 16
      {
        key: "practical-16",
        name: "Practical-16: SQLite Authentication App (Login & Register)",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical-16: SQLite Authentication App (Login & Register)",
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:padding="20dp"
    android:gravity="center"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <EditText
        android:id="@+id/etUserId"
        android:hint="User ID"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"/>

    <EditText
        android:id="@+id/etPassword"
        android:hint="Password"
        android:inputType="textPassword"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dp"/>

    <Button
        android:id="@+id/btnLogin"
        android:text="Login"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="20dp"/>

    <Button
        android:id="@+id/btnRegister"
        android:text="Register"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dp"/>

    <TextView
        android:id="@+id/tvResult"
        android:text=""
        android:textSize="18sp"
        android:textColor="@android:color/holo_blue_dark"
        android:layout_marginTop="20dp"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"/>
</LinearLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "DBHelper.java",
            value: `package com.example.authapp;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class DBHelper extends SQLiteOpenHelper {

    private static final String DATABASE_NAME = "AuthDB";
    private static final int DATABASE_VERSION = 1;
    private static final String TABLE_USERS = "users";

    public DBHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        String createTable = "CREATE TABLE " + TABLE_USERS + " (" +
                "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                "userid TEXT UNIQUE, " +
                "password TEXT)";
        db.execSQL(createTable);

        // Insert default user (for testing)
        ContentValues values = new ContentValues();
        values.put("userid", "admin");
        values.put("password", "1234");
        db.insert(TABLE_USERS, null, values);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_USERS);
        onCreate(db);
    }

    // Insert new user
    public boolean insertUser(String userid, String password) {
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues values = new ContentValues();
        values.put("userid", userid);
        values.put("password", password);
        long result = db.insert(TABLE_USERS, null, values);
        return result != -1;
    }

    // Check login credentials
    public boolean checkUser(String userid, String password) {
        SQLiteDatabase db = this.getReadableDatabase();
        Cursor cursor = db.rawQuery("SELECT * FROM " + TABLE_USERS + " WHERE userid=? AND password=?",
                new String[]{userid, password});
        boolean exists = cursor.getCount() > 0;
        cursor.close();
        return exists;
    }
}`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.authapp;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.*;

public class MainActivity extends AppCompatActivity {

    EditText etUserId, etPassword;
    Button btnLogin, btnRegister;
    TextView tvResult;
    DBHelper dbHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        etUserId = findViewById(R.id.etUserId);
        etPassword = findViewById(R.id.etPassword);
        btnLogin = findViewById(R.id.btnLogin);
        btnRegister = findViewById(R.id.btnRegister);
        tvResult = findViewById(R.id.tvResult);

        dbHelper = new DBHelper(this);

        // LOGIN
        btnLogin.setOnClickListener(v -> {
            String userid = etUserId.getText().toString();
            String password = etPassword.getText().toString();

            if (dbHelper.checkUser(userid, password)) {
                tvResult.setText("✅ Login Successful! Welcome " + userid);
            } else {
                tvResult.setText("❌ Invalid Credentials");
            }
        });

        // REGISTER
        btnRegister.setOnClickListener(v -> {
            String userid = etUserId.getText().toString();
            String password = etPassword.getText().toString();

            boolean inserted = dbHelper.insertUser(userid, password);
            if (inserted) {
                tvResult.setText("✅ User Registered Successfully!");
            } else {
                tvResult.setText("❌ Registration Failed (UserID already exists)");
            }
        });
    }
}`,
          },
        ],
      },
      // p -17
      //   p - 17
      {
        key: "practical-17",
        name: "Practical-17: Android View Animations (Rotate, Fade, Zoom)",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical-17: Android View Animations (Rotate, Fade, Zoom)",
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical"
    android:padding="20dp">

    <Spinner
        android:id="@+id/spinnerAnimations"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />

    <ImageView
        android:id="@+id/imageView"
        android:layout_width="209dp"
        android:layout_height="259dp"
        android:layout_marginTop="30dp"
        android:src="@drawable/dm" />
</LinearLayout>`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "fade.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<alpha xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromAlpha="1.0"
    android:toAlpha="0.0"
    android:duration="1000"
    android:repeatCount="infinite"
    android:repeatMode="reverse"/>`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "rotate.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<rotate xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromDegrees="0"
    android:toDegrees="360"
    android:pivotX="50%"
    android:pivotY="50%"
    android:duration="1000"
    android:repeatCount="infinite"/>`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "zoom.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<scale xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromXScale="1.0"
    android:toXScale="2.0"
    android:fromYScale="1.0"
    android:toYScale="2.0"
    android:pivotX="50%"
    android:pivotY="50%"
    android:duration="1000"
    android:repeatCount="infinite"
    android:repeatMode="reverse"/>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.animationapp;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.*;

public class MainActivity extends AppCompatActivity {

    Spinner spinner;
    ImageView imageView;

    String[] animations = {"Rotate", "Fade", "Zoom"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        spinner = findViewById(R.id.spinnerAnimations);
        imageView = findViewById(R.id.imageView);

        ArrayAdapter<String> adapter = new ArrayAdapter<>(this,
                android.R.layout.simple_spinner_item, animations);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(adapter);

        spinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, android.view.View view, int position, long id) {
                Animation anim = null;

                switch (animations[position]) {
                    case "Rotate":
                        anim = AnimationUtils.loadAnimation(getApplicationContext(), R.anim.rotate);
                        break;
                    case "Fade":
                        anim = AnimationUtils.loadAnimation(getApplicationContext(), R.anim.fade);
                        break;
                    case "Zoom":
                        anim = AnimationUtils.loadAnimation(getApplicationContext(), R.anim.zoom);
                        break;
                }

                if (anim != null) {
                    imageView.startAnimation(anim);
                }
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {
                // Do nothing
            }
        });
    }
}`,
          },
        ],
      },
      //   p - 18
      {
        key: "practical-18",
        name: "Practical-18: Simple Audio Player (Play, Pause/Resume, Stop)",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical-18: Simple Audio Player (Play, Pause/Resume, Stop)",
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    android:padding="20dp">

    <TextView
        android:id="@+id/tvTitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Simple Audio Player"
        android:textSize="20sp"
        android:layout_marginBottom="30dp"/>

    <Button
        android:id="@+id/btnPlay"
        android:backgroundTint="@android:color/holo_blue_light"
        android:textColor="@android:color/black"
        android:layout_width="200dp"
        android:layout_height="wrap_content"
        android:text="Play"/>

    <Button
        android:id="@+id/btnPause"
        android:backgroundTint="@android:color/holo_blue_light"
        android:textColor="@android:color/black"
        android:layout_width="200dp"
        android:layout_height="wrap_content"
        android:text="Pause"
        android:layout_marginTop="20dp"/>

    <Button
        android:id="@+id/btnStop"
        android:backgroundTint="@android:color/holo_blue_light"
        android:textColor="@android:color/black"
        android:layout_width="200dp"
        android:layout_height="wrap_content"
        android:text="Stop"
        android:layout_marginTop="20dp"/>
</LinearLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.audioplayer;

import androidx.appcompat.app.AppCompatActivity;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    Button btnPlay, btnPause, btnStop;
    MediaPlayer mediaPlayer;
    boolean isPaused = false; // to track pause state

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnPlay = findViewById(R.id.btnPlay);
        btnPause = findViewById(R.id.btnPause);
        btnStop = findViewById(R.id.btnStop);

        // Load audio file from raw folder
        mediaPlayer = MediaPlayer.create(this, R.raw.doremon);

        // Play Button
        btnPlay.setOnClickListener(v -> {
            if (!mediaPlayer.isPlaying()) {
                mediaPlayer.start();
                isPaused = false;
                btnPause.setText("Pause"); // reset button text
                Toast.makeText(this, "Playing Audio", Toast.LENGTH_SHORT).show();
            }
        });

        // Pause/Resume Button
        btnPause.setOnClickListener(v -> {
            if (mediaPlayer.isPlaying()) {
                mediaPlayer.pause();
                isPaused = true;
                btnPause.setText("Resume"); // change text
                Toast.makeText(this, "Audio Paused", Toast.LENGTH_SHORT).show();
            } else if (isPaused) {
                mediaPlayer.start();
                isPaused = false;
                btnPause.setText("Pause"); // change back
                Toast.makeText(this, "Audio Resumed", Toast.LENGTH_SHORT).show();
            }
        });

        // Stop Button
        btnStop.setOnClickListener(v -> {
            if (mediaPlayer.isPlaying() || isPaused) {
                mediaPlayer.stop();
                mediaPlayer = MediaPlayer.create(this, R.raw.doremon); // Reset
                isPaused = false;
                btnPause.setText("Pause"); // reset text
                Toast.makeText(this, "Audio Stopped", Toast.LENGTH_SHORT).show();
            }
        });
    }

    @Override
    protected void onDestroy() {
        if (mediaPlayer != null) {
            mediaPlayer.release();
            mediaPlayer = null;
        }
        super.onDestroy();
    }
}`,
          },
        ],
      },
      //   p - 19
      {
        key: "practical-19",
        name: "Practical-19: Simple Video Player using VideoView",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical-19: Simple Video Player using VideoView",
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    android:padding="20dp">

    <TextView
        android:id="@+id/tvTitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Simple Video Player"
        android:textSize="20sp"
        android:layout_marginBottom="20dp"/>

    <VideoView
        android:id="@+id/videoView"
        android:layout_width="match_parent"
        android:layout_height="300dp"
        android:layout_marginBottom="20dp"/>

    <Button
        android:id="@+id/btnPlay"
        android:layout_width="200dp"
        android:layout_height="wrap_content"
        android:text="Play"
        android:backgroundTint="@android:color/holo_blue_light"
        android:textColor="@android:color/black"/>

    <Button
        android:id="@+id/btnPause"
        android:layout_width="200dp"
        android:layout_height="wrap_content"
        android:text="Pause"
        android:layout_marginTop="15dp"
        android:backgroundTint="@android:color/holo_blue_light"
        android:textColor="@android:color/black"/>

    <Button
        android:id="@+id/btnStop"
        android:layout_width="200dp"
        android:layout_height="wrap_content"
        android:text="Stop"
        android:layout_marginTop="15dp"
        android:backgroundTint="@android:color/holo_blue_light"
        android:textColor="@android:color/black"/>
</LinearLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.videoplayer;

import androidx.appcompat.app.AppCompatActivity;
import android.net.Uri;
import android.os.Bundle;
import android.widget.Button;
import android.widget.MediaController;
import android.widget.Toast;
import android.widget.VideoView;

public class MainActivity extends AppCompatActivity {

    VideoView videoView;
    Button btnPlay, btnPause, btnStop;
    MediaController mediaController;
    boolean isPaused = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        videoView = findViewById(R.id.videoView);
        btnPlay = findViewById(R.id.btnPlay);
        btnPause = findViewById(R.id.btnPause);
        btnStop = findViewById(R.id.btnStop);

        // Load video from raw folder
        Uri videoUri = Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.samplevideo);
        videoView.setVideoURI(videoUri);

        // Media Controller
        mediaController = new MediaController(this);
        mediaController.setAnchorView(videoView);
        videoView.setMediaController(mediaController);

        // Play
        btnPlay.setOnClickListener(v -> {
            if (!videoView.isPlaying()) {
                videoView.start();
                isPaused = false;
                btnPause.setText("Pause");
                Toast.makeText(this, "Video Playing", Toast.LENGTH_SHORT).show();
            }
        });

        // Pause/Resume
        btnPause.setOnClickListener(v -> {
            if (videoView.isPlaying()) {
                videoView.pause();
                isPaused = true;
                btnPause.setText("Resume");
                Toast.makeText(this, "Video Paused", Toast.LENGTH_SHORT).show();
            } else if (isPaused) {
                videoView.start();
                isPaused = false;
                btnPause.setText("Pause");
                Toast.makeText(this, "Video Resumed", Toast.LENGTH_SHORT).show();
            }
        });

        // Stop
        btnStop.setOnClickListener(v -> {
            if (videoView.isPlaying() || isPaused) {
                videoView.stopPlayback();
                videoView.setVideoURI(videoUri); // reset
                isPaused = false;
                btnPause.setText("Pause");
                Toast.makeText(this, "Video Stopped", Toast.LENGTH_SHORT).show();
            }
        });
    }
}`,
          },
        ],
      },
      //   p - 20
      {
        key: "practical-20",
        name: "Practical-20: Fetch Current Location using FusedLocationProviderClient",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical-20: Fetch Current Location using FusedLocationProviderClient",
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:padding="16dp"
    android:gravity="center"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:id="@+id/locationText"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Fetching location..."
        android:textSize="18sp"
        android:padding="16dp"
        android:textStyle="bold" />

    <Button
        android:id="@+id/btnGetLocation"
        android:text="Get Location"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:padding="12dp"
        android:layout_marginTop="20dp"/>
</LinearLayout>`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.locationapp;

import android.Manifest;
import android.content.pm.PackageManager;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.os.Bundle;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;

import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.tasks.OnSuccessListener;

import java.io.IOException;
import java.util.List;
import java.util.Locale;

public class MainActivity extends AppCompatActivity {

    private static final int REQUEST_CODE = 101;
    private FusedLocationProviderClient fusedLocationClient;
    private TextView locationText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        locationText = findViewById(R.id.locationText);
        fusedLocationClient = LocationServices.getFusedLocationProviderClient(this);

        getLastLocation();
    }

    private void getLastLocation() {
        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED &&
                ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, REQUEST_CODE);
            return;
        }

        fusedLocationClient.getLastLocation().addOnSuccessListener(this, new OnSuccessListener<Location>() {
            @Override
            public void onSuccess(Location location) {
                if (location != null) {
                    double lat = location.getLatitude();
                    double lon = location.getLongitude();

                    // Default lat/lon display
                    String locText = getString(R.string.location_text, lat, lon);

                    // Now get address
                    Geocoder geocoder = new Geocoder(MainActivity.this, Locale.getDefault());
                    try {
                        List<Address> addresses = geocoder.getFromLocation(lat, lon, 1);
                        if (addresses != null && !addresses.isEmpty()) {
                            Address address = addresses.get(0);
                            String fullAddress = address.getAddressLine(0);
                            locText += "\\nAddress: " + fullAddress;
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                        Toast.makeText(MainActivity.this, "Unable to get address", Toast.LENGTH_SHORT).show();
                    }

                    locationText.setText(locText);

                } else {
                    Toast.makeText(MainActivity.this, getString(R.string.location_not_found), Toast.LENGTH_SHORT).show();
                }
            }
        });
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == REQUEST_CODE && grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            getLastLocation();
        } else {
            Toast.makeText(this, getString(R.string.permission_denied), Toast.LENGTH_SHORT).show();
        }
    }
}`,
          },
        ],
      },

      {
        key: "saved-instance-state",
        name: "SavedInstanceState App",
        pageBlocks: [
          {
            type: "heading",
            value: "SavedInstanceState App",
          },
          {
            type: "btn",
            title: "Download Project: SavedInstanceState App",
            value:
              "https://github.com/ayushpathak-48/savedinstancestate-practical/archive/refs/heads/main.zip",
          },
          {
            type: "code",
            language: "html",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center">

    <EditText
        android:id="@+id/editText"
        android:textSize="20sp"
        android:gravity="center"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Enter some text" />

    <Button
        android:id="@+id/button"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Save"
        style="bold"
        android:textSize="20sp"
        android:layout_below="@id/editText" />

</RelativeLayout>
`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.savedinstancestatepractical;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private EditText editText;
    private Button button;
    private static final String TEXT_KEY = "saved_text";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editText = findViewById(R.id.editText);
        button = findViewById(R.id.button);

        // Restore the saved instance state
        if (savedInstanceState != null) {
            String savedText = savedInstanceState.getString(TEXT_KEY);
            editText.setText(savedText);
        }

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Save the text when the button is clicked
                String textToSave = editText.getText().toString();
                // You can save it to a database or shared preferences if needed
            }
        });
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        // Save the current text in the EditText
        outState.putString(TEXT_KEY, editText.getText().toString());
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
      // Practical- 14
      {
        key: "shared-preferences-app",
        name: "Practical:14 SharedPreference App",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical:14 SharedPreference App",
          },
          {
            type: "btn",
            title: "Download Project: SharedPreference App",
            value:
              "https://github.com/ayushpathak-48/mad-sharedpreference/archive/refs/heads/main.zip",
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingHorizontal="16dp"
    android:paddingTop="50dp">

    <EditText
        android:id="@+id/name_input"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Enter your name" />

    <Button
        android:id="@+id/save_button"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="SAVE" />

    <Button
        android:id="@+id/load_button"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="LOAD" />

    <TextView
        android:id="@+id/saved_name_display"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Saved name will appear here"
        android:layout_marginTop="16dp"/>
</LinearLayout>

`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.sharedpreference;
import androidx.appcompat.app.AppCompatActivity;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.widget.TextView;
import android.widget.EditText;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {
    private EditText nameInput;
    private TextView savedNameDisplay;
    private Button saveButton, loadButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        nameInput = findViewById(R.id.name_input);
        savedNameDisplay = findViewById(R.id.saved_name_display);
        saveButton = findViewById(R.id.save_button);
        loadButton = findViewById(R.id.load_button);

        // Load saved name when the app starts
        loadSavedName();

        saveButton.setOnClickListener(view -> saveName());
        loadButton.setOnClickListener(view -> loadSavedName());
    }

    private void saveName() {
        SharedPreferences sharedPreferences = getSharedPreferences("MyPreferences", MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString("name", nameInput.getText().toString());
        editor.apply();
    }

    private void loadSavedName() {
        SharedPreferences sharedPreferences = getSharedPreferences("MyPreferences", MODE_PRIVATE);
        String savedName = sharedPreferences.getString("name", "Saved name will appear here");
        savedNameDisplay.setText(savedName);
    }
}

`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "AndroidManifest.xml",
            value: `<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.sharedpreference">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.AppCompat.Light.NoActionBar">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>

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
      // Tab Host Practical
      {
        key: "tab-host-practical",
        name: "Tab Host Practical",
        pageBlocks: [
          {
            type: "heading",
            value: "Tab Host Practical",
          },
          {
            type: "btn",
            title: "Download Project: Tab Host App",
            value:
              "https://github.com/ayushpathak-48/mad-tab-host/archive/refs/heads/main.zip",
          },
          {
            type: "code",
            language: "xml",
            fileName: "activity_main.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<TabHost xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@android:id/tabhost"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingTop="20dp">

    <LinearLayout
        android:orientation="vertical"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:padding="10dp">

        <TabWidget
            android:id="@android:id/tabs"
            android:layout_width="match_parent"
            android:layout_height="wrap_content" />

        <FrameLayout
            android:id="@android:id/tabcontent"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:paddingTop="10dp">

            <include layout="@layout/tab1"/>
            <include layout="@layout/tab2"/>
            <include layout="@layout/tab3"/>

        </FrameLayout>
    </LinearLayout>
</TabHost>

`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "tab1.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/tab1"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:text="You're viewing Tab 1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"/>
</LinearLayout>
`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "tab2.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/tab2"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:text="This is Tab 2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"/>
</LinearLayout>
`,
          },
          {
            type: "code",
            language: "xml",
            fileName: "tab3.xml",
            value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/tab3"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:text="This is Tab 3"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"/>
</LinearLayout>
`,
          },
          {
            type: "code",
            language: "java",
            fileName: "MainActivity.java",
            value: `package com.example.tabhost;

import android.os.Bundle;
import android.widget.TabHost;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    TabHost tabHost;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        tabHost = findViewById(android.R.id.tabhost);
        tabHost.setup();

        // Tab 1
        TabHost.TabSpec spec1 = tabHost.newTabSpec("Tab One");
        spec1.setContent(R.id.tab1);
        spec1.setIndicator("Home");
        tabHost.addTab(spec1);

        // Tab 2
        TabHost.TabSpec spec2 = tabHost.newTabSpec("Tab Two");
        spec2.setContent(R.id.tab2);
        spec2.setIndicator("Profile");
        tabHost.addTab(spec2);

        // Tab 3
        TabHost.TabSpec spec3 = tabHost.newTabSpec("Tab Three");
        spec3.setContent(R.id.tab3);
        spec3.setIndicator("Settings");
        tabHost.addTab(spec3);
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

      //  p-5
      {
        key: "angular-mvc-students",
        name: "Practical - 5: AngularJS MVC - Student List",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 5 - WAP to implement MVC using AngularJS (Student Management System)",
          },
          {
            type: "code",
            fileName: "app.js",
            value: `// Define AngularJS module
var app = angular.module("studentApp", []);

// Define Controller
app.controller("StudentController", function ($scope) {
  // Model: initial data
  $scope.students = [
    { name: "Rahul", branch: "CSE" },
    { name: "Priya", branch: "IT" },
    { name: "Amit", branch: "ECE" },
  ];

  // Add Student (Controller logic)
  $scope.addStudent = function () {
    if (
      $scope.newStudent &&
      $scope.newStudent.name &&
      $scope.newStudent.branch
    ) {
      $scope.students.push({
        name: $scope.newStudent.name,
        branch: $scope.newStudent.branch,
      });
      $scope.newStudent = {}; // clear input fields
    }
  };
});`,
          },
          {
            type: "code",
            fileName: "index.html",
            value: `<!DOCTYPE html>
<html ng-app="studentApp">
  <head>
    <title>AngularJS MVC - Student List</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body ng-controller="StudentController">
    <h2>📘 Student Management</h2>

    <!-- Form to add a student -->
    <label>Name:</label>
    <input type="text" ng-model="newStudent.name" placeholder="Enter name" />
    <label>Branch:</label>
    <input type="text" ng-model="newStudent.branch" placeholder="Enter branch" />
    <button ng-click="addStudent()">Add Student</button>

    <hr />

    <!-- View: Student List -->
    <h3>Student List</h3>
    <table border="1" cellpadding="8">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Branch</th>
      </tr>
      <tr ng-repeat="s in students track by $index">
        <td>{{$index + 1}}</td>
        <td>{{s.name}}</td>
        <td>{{s.branch}}</td>
      </tr>
    </table>
  </body>
  <script src="app.js"></script>
</html>`,
          },
        ],
      },
      //  p-6
      //  p-6
      {
        key: "angular-data-binding",
        name: "Practical - 6: AngularJS Data Binding (One-way & Two-way)",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 6 - WAP to implement Data Binding (One-way and Two-way) using AngularJS",
          },
          {
            type: "code",
            fileName: "oneWayBinding.html",
            value: `<!-- To implement Data binding using Angular JS -->
<!DOCTYPE html>
<html lang="en" ng-app="oneWayApp">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>One-way Data Binding Example</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body ng-controller="OneWayController">
    <h2>AngularJS One-way Binding</h2>

    <!-- Using Interpolation -->
    <p>Student Name: {{student.name}}</p>
    <p>Branch: {{student.branch}}</p>

    <!-- Using ng-bind -->
    <p ng-bind="student.email"></p>

    <script>
      var app = angular.module("oneWayApp", []);
      app.controller("OneWayController", function ($scope) {
        $scope.student = {
          name: "John",
          branch: "MCA",
          email: "john@gmail.com",
        };
      });
    </script>
  </body>
</html>`,
          },
          {
            type: "code",
            fileName: "twoWayBinding.html",
            value: `<!DOCTYPE html>
<html ng-app="myApp">
  <head>
    <title>AngularJS Data Binding Example</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body ng-controller="BindingController">
    <h2>Angular JS Two-Way Binding</h2>

    <h3>2. Two-way binding (MVC)</h3>
    <label>Enter Your Name: </label>
    <input type="text" ng-model="studentName" />
    <p>Hello <b>{{studentName}}</b>, nice to meet you!</p>

    <script>
      var app = angular.module("myApp", []);
      app.controller("BindingController", function ($scope) {
        $scope.studentName = "tara";
      });
    </script>
  </body>
</html>`,
          },
        ],
      },
      //  p- 7
      {
        key: "practical-7",
        name: "Practical - 7: AngularJS Animations",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 7 - WAP to implement Multiple Animations using AngularJS",
          },
          {
            type: "code",
            fileName: "animations.html",
            value: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Multiple Animations Example</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular-animate.min.js"></script>
    <style>
      .box {
        background: #333;
        color: #fff;
        padding: 20px;
        margin-bottom: 20px;
        transition: all linear 0.5s;
        font-size: 16px;
      }
      .box.bigger {
        font-size: 30px;
      }
      .box.light-theme {
        background: #eee;
        color: #333;
      }

      .animated-element {
        background-color: green;
        height: 50px;
        width: 50px;
        border-radius: 10px;
        margin: 20px 0;
      }
      .bounce {
        animation: bounce 1s;
      }
      .spin {
        animation: spin 1s;
      }
      @keyframes bounce {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-50px);
        }
        100% {
          transform: translateY(0);
        }
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    </style>
  </head>
  <body ng-app="myApp" ng-controller="mainCtrl">
    <div
      class="box"
      ng-class="{
        'bigger': state.bigger,
        'light-theme': state.lightTheme
      }"
    >
      Animate me with ng-class!
    </div>
    <button ng-click="toggleBigger()">Toggle Bigger</button>
    <button ng-click="toggleTheme()">Toggle Theme</button>

    <div class="animated-element"></div>
    <button ng-click="runBounceSpin()">Bounce, then Spin</button>

    <script>
      angular
        .module("myApp", ["ngAnimate"])
        .controller("mainCtrl", function ($scope, $animate) {
          $scope.state = { bigger: false, lightTheme: false };

          $scope.toggleBigger = function () {
            $scope.state.bigger = !$scope.state.bigger;
          };
          $scope.toggleTheme = function () {
            $scope.state.lightTheme = !$scope.state.lightTheme;
          };
          $scope.runBounceSpin = function () {
            var elem = angular.element(
              document.querySelector(".animated-element")
            );
            $animate
              .addClass(elem, "bounce")
              .then(function () {
                return $animate.addClass(elem, "spin");
              })
              .then(function () {
                $animate.removeClass(elem, "bounce spin");
              });
          };
        });
    </script>
  </body>
</html>`,
          },
        ],
      },
      //  p- 8
      {
        key: "practical-8",
        name: "Practical - 8: AngularJS CRUD Operations",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 8 - WAP to implement CRUD operations using AngularJS",
          },
          {
            type: "code",
            fileName: "angularCrud.js",
            value: `var app = angular.module("crudApp", []);

app.controller("myCtrl", function ($scope) {
  $scope.students = [];
  $scope.newStudent = {};
  $scope.editingId = null;

  function resetNew() {
    $scope.newStudent = {};
    $scope.editingId = null;
  }

  $scope.saveRecord = function () {
    if ($scope.editingId === null) {
      var nextId = $scope.students.length
        ? Math.max(...$scope.students.map((s) => s.id)) + 1
        : 1;
      $scope.newStudent.id = nextId;
      $scope.students.push(angular.copy($scope.newStudent));
    } else {
      var idx = $scope.students.findIndex((s) => s.id === $scope.editingId);
      if (idx !== -1) {
        $scope.students[idx] = angular.copy($scope.newStudent);
      }
    }
    resetNew();
  };

  $scope.edit = function (id) {
    var student = $scope.students.find((s) => s.id === id);
    if (student) {
      $scope.newStudent = angular.copy(student);
      $scope.editingId = id;
    }
  };

  $scope.delete = function (id) {
    var idx = $scope.students.findIndex((s) => s.id === id);
    if (idx !== -1) $scope.students.splice(idx, 1);
    if ($scope.editingId === id) resetNew();
  };

  $scope.reset = resetNew;
});`,
          },
          {
            type: "code",
            fileName: "index.html",
            value: `<!DOCTYPE html>
<html ng-app="crudApp">
  <head>
    <meta charset="utf-8" />
    <title>AngularJS CRUD Example</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
    <script src="angularCrud.js"></script>
  </head>
  <body ng-controller="myCtrl">
    <h2>Student Management</h2>

    <form ng-submit="saveRecord()">
      <input
        type="text"
        ng-model="newStudent.name"
        placeholder="Name"
        required
      />
      <input
        type="text"
        ng-model="newStudent.address"
        placeholder="Address"
        required
      />
      <input
        type="text"
        ng-model="newStudent.dept"
        placeholder="Department"
        required
      />
      <button type="submit">{{ editingId === null ? 'Add' : 'Update' }}</button>
      <button type="button" ng-click="reset()">Cancel</button>
    </form>

    <table border="1">
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Dept</th>
        <th>Action</th>
      </tr>
      <tr ng-repeat="s in students">
        <td>{{s.name}}</td>
        <td>{{s.address}}</td>
        <td>{{s.dept}}</td>
        <td>
          <button ng-click="edit(s.id)">Edit</button>
          <button ng-click="delete(s.id)">Delete</button>
        </td>
      </tr>
    </table>
  </body>
</html>`,
          },
        ],
      },
      //  p- 9
      {
        key: "practical-9",
        name: "Practical - 9: MongoDB Installation",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 9 - Steps to Install MongoDB on Different Operating Systems",
          },
          {
            type: "paragraph",
            value: `This practical demonstrates how to install MongoDB on Windows, Linux (Ubuntu/Debian), and macOS systems.`,
          },
          {
            type: "subheading",
            value: "1. Install MongoDB on Windows",
          },
          // {
          //   type: "list",
          //   value: [
          //     "Go to the MongoDB official website: https://www.mongodb.com/try/download/community",
          //     "Download the latest MongoDB Community Server (MSI file).",
          //     "Run the downloaded .msi file and choose Complete setup.",
          //     "Check the option “Install MongoDB as a Service” and click Next.",
          //     "Finish the installation. MongoDB service will start automatically.",
          //   ],
          // },
          {
            type: "subheading",
            value: "Verify Installation (Windows)",
          },
          {
            type: "code",
            fileName: "cmd",
            value: `mongod --version`,
          },
          {
            type: "paragraph",
            value:
              "If it displays the version information, MongoDB is installed successfully.",
          },
          {
            type: "subheading",
            value: "MongoDB Compass (GUI Tool)",
          },
          {
            type: "paragraph",
            value:
              "If selected during installation, MongoDB Compass can be used to manage databases through a graphical interface.",
          },
          // {
          //   type: "divider",
          // },
          {
            type: "subheading",
            value: "2. Install MongoDB on Linux (Ubuntu/Debian)",
          },
          {
            type: "code",
            fileName: "linux-install.sh",
            value: `# 1. Import MongoDB GPG Key
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \\
sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg --dearmor

# 2. Add MongoDB Repository
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] \\
https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | \\
sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# 3. Update & Install
sudo apt update
sudo apt install -y mongodb-org

# 4. Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# 5. Check Status
sudo systemctl status mongod`,
          },
          // {
          //   type: "divider",
          // },
          {
            type: "subheading",
            value: "3. Install MongoDB on macOS (with Homebrew)",
          },
          {
            type: "code",
            fileName: "mac-install.sh",
            value: `# 1. Update Homebrew
brew update

# 2. Install MongoDB
brew tap mongodb/brew
brew install mongodb-community@6.0

# 3. Start MongoDB Service
brew services start mongodb-community@6.0

# 4. Verify Installation
mongosh   # Opens the MongoDB shell`,
          },
        ],
      },
      //  p- 10
      {
        key: "practical-10",
        name: "Practical - 10: Database Connectivity using MongoDB",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 10 - WAP to Implement Database Connectivity using MongoDB",
          },
          {
            type: "paragraph",
            value:
              "This practical demonstrates how to connect a Java program to MongoDB, perform basic database operations, and verify the connection.",
          },
          {
            type: "subheading",
            value: "1. Install MongoDB",
          },
          {
            type: "paragraph",
            value:
              "Ensure MongoDB is installed and running locally or use a cloud-hosted MongoDB instance (e.g., MongoDB Atlas).",
          },
          {
            type: "subheading",
            value: "2. Add MongoDB Java Driver",
          },
          {
            type: "paragraph",
            value:
              "You can add the MongoDB driver using Maven or by manually adding the JAR file to your Java project.",
          },
          {
            type: "subheading",
            value: "🔧 Maven Dependency",
          },
          {
            type: "code",
            fileName: "pom.xml",
            value: `<dependency>
  <groupId>org.mongodb</groupId>
  <artifactId>mongodb-driver-sync</artifactId>
  <version>4.11.1</version> <!-- Use latest version -->
</dependency>`,
          },
          {
            type: "subheading",
            value: "3. Java Program: MongoDBConnectionExample.java",
          },
          {
            type: "code",
            fileName: "MongoDBConnectionExample.java",
            value: `import com.mongodb.client.*;
import com.mongodb.client.model.Filters;
import org.bson.Document;
import static com.mongodb.client.model.Filters.eq;

public class MongoDBConnectionExample {
    public static void main(String[] args) {
        // 1. Connect to MongoDB
        String uri = "mongodb://localhost:27017";
        try (MongoClient mongoClient = MongoClients.create(uri)) {

            // 2. Access database
            MongoDatabase database = mongoClient.getDatabase("testdb");

            // 3. Access collection
            MongoCollection<Document> collection = database.getCollection("users");

            // 4. Insert a document
            Document doc = new Document("name", "Alice")
                    .append("email", "alice@example.com")
                    .append("age", 30);
            collection.insertOne(doc);
            System.out.println("Document inserted");

            // 5. Read documents
            FindIterable<Document> users = collection.find();
            System.out.println("Users in database:");
            for (Document user : users) {
                System.out.println(user.toJson());
            }

        } catch (Exception e) {
            System.err.println("MongoDB connection failed: " + e.getMessage());
        }
    }
}`,
          },
          {
            type: "subheading",
            value: "4. Output Example",
          },
          {
            type: "code",
            fileName: "output",
            value: `Document inserted
Users in database:
{"_id": {"$oid": "652e9b1a9f1c9b1f7c0a1234"}, "name": "Alice", "email": "alice@example.com", "age": 30}`,
          },
          {
            type: "paragraph",
            value:
              "✅ This program connects to MongoDB, inserts a sample document into the 'users' collection, and retrieves all user records.",
          },
        ],
      },
      //  p- 11
      {
        key: "practical-11",
        name: "Practical - 11: CRUD Operations using MongoDB",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 11 - WAP to Implement CRUD Operations using MongoDB",
          },
          {
            type: "paragraph",
            value:
              "This practical demonstrates how to perform Create, Read, Update, and Delete (CRUD) operations on a MongoDB database using Java.",
          },
          {
            type: "subheading",
            value: "1. Add MongoDB Java Driver",
          },
          {
            type: "paragraph",
            value:
              "You can add the MongoDB Java driver via Maven or by manually downloading the JAR file and adding it to your project classpath.",
          },
          {
            type: "subheading",
            value: "🔧 Maven Dependency (if using Maven)",
          },
          {
            type: "code",
            fileName: "pom.xml",
            value: `<dependency>
  <groupId>org.mongodb</groupId>
  <artifactId>mongodb-driver-sync</artifactId>
  <version>4.11.1</version> <!-- Use latest version -->
</dependency>`,
          },
          {
            type: "subheading",
            value: "2. Java Program: MongoCRUDExample.java",
          },
          {
            type: "code",
            fileName: "MongoCRUDExample.java",
            value: `import com.mongodb.client.*;
import org.bson.Document;
import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Updates.set;

public class MongoCRUDExample {
    public static void main(String[] args) {
        String uri = "mongodb://localhost:27017";

        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase database = mongoClient.getDatabase("testdb");
            MongoCollection<Document> collection = database.getCollection("users");

            // 1️ CREATE
            Document user = new Document("name", "John Doe")
                    .append("email", "john@example.com")
                    .append("age", 28);
            collection.insertOne(user);
            System.out.println("Inserted: " + user.toJson());

            // 2️ READ
            System.out.println("All users:");
            FindIterable<Document> users = collection.find();
            for (Document doc : users) {
                System.out.println(doc.toJson());
            }

            // 3️ UPDATE
            collection.updateOne(eq("name", "John Doe"), set("age", 30));
            System.out.println("Updated John's age to 30");

            // Read again to verify update
            Document updatedUser = collection.find(eq("name", "John Doe")).first();
            System.out.println("After update: " + updatedUser.toJson());

            // 4️ DELETE
            collection.deleteOne(eq("name", "John Doe"));
            System.out.println("Deleted user 'John Doe'");

        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}`,
          },
          {
            type: "subheading",
            value: "3. How to Run",
          },
          // {
          //   type: "list",
          //   value: [
          //     "Ensure MongoDB is running on `localhost:27017`.",
          //     "Add the MongoDB driver JAR file to your classpath (or use Maven).",
          //     "Compile the Java file:",
          //     "javac -cp .:mongodb-driver-sync-4.11.1.jar MongoCRUDExample.java",
          //     "Run the program:",
          //     "java -cp .:mongodb-driver-sync-4.11.1.jar MongoCRUDExample",
          //   ],
          // },
          {
            type: "subheading",
            value: "4. Expected Output",
          },
          {
            type: "code",
            fileName: "output",
            value: `Inserted: {"_id": {"$oid": "652ea2b89f1c9b1f7c0a1234"}, "name": "John Doe", "email": "john@example.com", "age": 28}
All users:
{"_id": {"$oid": "652ea2b89f1c9b1f7c0a1234"}, "name": "John Doe", "email": "john@example.com", "age": 28}
Updated John's age to 30
After update: {"_id": {"$oid": "652ea2b89f1c9b1f7c0a1234"}, "name": "John Doe", "email": "john@example.com", "age": 30}
Deleted user 'John Doe'`,
          },
          {
            type: "paragraph",
            value:
              "✅ This program demonstrates all four CRUD operations (Create, Read, Update, Delete) using the MongoDB Java driver.",
          },
        ],
      },
      //  p- 12
      {
        key: "practical-12",
        name: "Practical - 12: Implement Node.js with MongoDB",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 12 - WAP to Implement Node.js with MongoDB",
          },
          {
            type: "paragraph",
            value:
              "This practical demonstrates how to connect a Node.js application to MongoDB using Mongoose and perform CRUD operations (Create, Read, Update, Delete).",
          },
          {
            type: "subheading",
            value: "Step 1: Project Setup",
          },
          // {
          //   type: "list",
          //   value: [
          //     "Create a new folder and navigate into it:",
          //     "`mkdir node-mongo-crud`",
          //     "`cd node-mongo-crud`",
          //     "Initialize a new Node.js project:",
          //     "`npm init -y`",
          //     "Install dependencies:",
          //     "`npm install mongoose`",
          //   ],
          // },
          {
            type: "subheading",
            value: "Step 2: index.js – Node.js + MongoDB Script",
          },
          {
            type: "code",
            fileName: "index.js",
            value: `const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Connection error:', err));

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create model
const User = mongoose.model('User', userSchema);

// CRUD Operations
async function runCRUD() {
  // 1. CREATE
  const user = new User({
    name: 'Alice',
    email: 'alice@example.com',
    age: 24
  });

  await user.save();
  console.log('User added:', user);

  // 2. READ
  const users = await User.find();
  console.log('Users in DB:', users);

  // 3. UPDATE
  const updatedUser = await User.findOneAndUpdate(
    { name: 'Alice' },
    { age: 25 },
    { new: true }
  );
  console.log('User updated:', updatedUser);

  // 4. DELETE
  const deletedUser = await User.findOneAndDelete({ name: 'Alice' });
  console.log('User deleted:', deletedUser);

  mongoose.connection.close();
}

runCRUD();`,
          },
          {
            type: "subheading",
            value: "How to Run",
          },
          // {
          //   type: "list",
          //   value: [
          //     "Ensure MongoDB is running on `localhost:27017`.",
          //     "Run the script using Node.js:",
          //     "`node index.js`",
          //   ],
          // },
          {
            type: "subheading",
            value: "Output Example",
          },
          {
            type: "code",
            fileName: "output",
            value: `Connected to MongoDB
User added: { name: 'Alice', email: 'alice@example.com', age: 24 }
Users in DB: [ { _id: ObjectId('652eabcd1234...'), name: 'Alice', email: 'alice@example.com', age: 24 } ]
User updated: { name: 'Alice', email: 'alice@example.com', age: 25 }
User deleted: { name: 'Alice', email: 'alice@example.com', age: 25 }`,
          },
          {
            type: "paragraph",
            value:
              "✅ This Node.js program connects to MongoDB using Mongoose, performs CRUD operations, and then closes the connection.",
          },
        ],
      },
    ],
  },
  // ostf
  {
    subject_name: "OSTF Python Practicals",
    key: "ostf-python",
    language: "python",
    practicals: [
      // P-1
      {
        key: "ostf-practicals",
        name: "OSTF Python Practicals",
        pageBlocks: [
          {
            type: "heading",
            value: "Program 1: Create and Display Elements of a List",
          },
          {
            type: "code",
            fileName: "program-1.py",
            value: `# Program to create and display elements of a list
my_list = [10, 20, 30, 40, 50]
print("The list is:", my_list)
`,
          },
          {
            type: "heading",
            value: "Program 2: Add, Update, and Remove Elements from a List",
          },
          {
            type: "code",
            fileName: "program-2.py",
            value: `my_list = [1, 2, 3]
my_list.append(4) # Add
my_list[1] = 20 # Update index 1
my_list.remove(3) # Remove element 3
print("Updated list:", my_list)
`,
          },
          {
            type: "heading",
            value: "Program 3: Sort a List in Ascending and Descending Order",
          },
          {
            type: "code",
            fileName: "program-3.py",
            value: `numbers = [5, 2, 9, 1, 7]
numbers.sort()
print("Ascending:", numbers)
numbers.sort(reverse=True)
print("Descending:", numbers)
`,
          },
          {
            type: "heading",
            value: "Program 4: Find the Maximum and Minimum Element in a List",
          },
          {
            type: "code",
            fileName: "program-4.py",
            value: `numbers = [10, 25, 5, 75, 30]
print("Max:", max(numbers))
print("Min:", min(numbers))
`,
          },
          {
            type: "heading",
            value: "Program 5: Count Frequency of Each Element in a List",
          },
          {
            type: "code",
            fileName: "program-5.py",
            value: `items = [1, 2, 2, 3, 3, 3, 4]
frequency = {}

for item in items:
    if item in frequency:
        frequency[item] += 1
    else:
        frequency[item] = 1

print("Frequency of elements:", frequency)
`,
          },
          {
            type: "heading",
            value: "Program 6: Remove Duplicates from a List",
          },
          {
            type: "code",
            fileName: "program-6.py",
            value: `my_list = [1, 2, 2, 3, 4, 4, 5]
unique_list = list(set(my_list))
print("List without duplicates:", unique_list)
`,
          },
          {
            type: "heading",
            value: "Program 7: Find the Sum and Average of List Elements",
          },
          {
            type: "code",
            fileName: "program-7.py",
            value: `numbers = [10, 20, 30, 40]
total = sum(numbers)
average = total / len(numbers)
print("Sum:", total)
print("Average:", average)
`,
          },
          {
            type: "heading",
            value: "Program 8: Merge Two Lists into One",
          },
          {
            type: "code",
            fileName: "program-8.py",
            value: `list1 = [1, 2, 3]
list2 = [4, 5, 6]
merged = list1 + list2
print("Merged list:", merged)
`,
          },
          {
            type: "heading",
            value: "Program 9: Search an Element in a List",
          },
          {
            type: "code",
            fileName: "program-9.py",
            value: `my_list = [10, 20, 30, 40, 50]
element = 30
if element in my_list:
 print(f"{element} found at index {my_list.index(element)}")
else:
 print(f"{element} not found")
`,
          },
          {
            type: "heading",
            value: "Program 10: Create and Display a Tuple",
          },
          {
            type: "code",
            fileName: "program-10.py",
            value: `my_tuple = (10, 20, 30)
print("Tuple elements:", my_tuple)
`,
          },
          {
            type: "heading",
            value: "Program 11: Access Elements Using Indexing",
          },
          {
            type: "code",
            fileName: "program-11.py",
            value: `my_tuple = (5, 10, 15, 20)
print("First element:", my_tuple[0])
print("Last element:", my_tuple[-1])
`,
          },
          {
            type: "heading",
            value: "Program 12: Slice a Tuple",
          },
          {
            type: "code",
            fileName: "program-12.py",
            value: `my_tuple = (1, 2, 3, 4, 5)
print("Sliced Tuple (index 1 to 3):", my_tuple[1:4])
`,
          },
          {
            type: "heading",
            value: "Program 13: Find the Length, Max, and Min in a Tuple",
          },
          {
            type: "code",
            fileName: "program-13.py",
            value: `my_tuple = (8, 2, 10, 4)
print("Length:", len(my_tuple))
print("Max:", max(my_tuple))
print("Min:", min(my_tuple))
`,
          },
          {
            type: "heading",
            value: "Program 14: Convert List to Tuple and Vice Versa",
          },
          {
            type: "code",
            fileName: "program-14.py",
            value: `list1 = [1, 2, 3]
tuple1 = tuple(list1)
print("Tuple:", tuple1)
new_list = list(tuple1)
print("List again:", new_list)
`,
          },
          {
            type: "heading",
            value: "Program 15: Create and Display a Dictionary",
          },
          {
            type: "code",
            fileName: "program-15.py",
            value: `student = {"name": "Alice", "age": 20, "grade": "A"}
print("Student Dictionary:", student)
`,
          },
          {
            type: "heading",
            value: "Program 16: Add, Update, and Delete Dictionary Elements",
          },
          {
            type: "code",
            fileName: "program-16.py",
            value: `student = {"name": "Bob"}
student["age"] = 21 # Add
student["name"] = "Robert" # Update
del student["age"] # Delete
print("Updated dictionary:", student)
`,
          },
          {
            type: "heading",
            value: "Program 17: Access Dictionary Values Using Keys",
          },
          {
            type: "code",
            fileName: "program-17.py",
            value: `person = {"name": "John", "city": "New York"}
print("Name:", person.get("name"))
print("City:", person["city"])
`,
          },
          {
            type: "heading",
            value: "Program 18: Iterate Through a Dictionary",
          },
          {
            type: "code",
            fileName: "program-18.py",
            value: `fruits = {"apple": 2, "banana": 3, "cherry": 5}
for key, value in fruits.items():
 print(key, ":", value)
`,
          },
          {
            type: "heading",
            value: "Program 19: Merge Two Dictionaries",
          },
          {
            type: "code",
            fileName: "program-19.py",
            value: `dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}
merged = {**dict1, **dict2}
print("Merged Dictionary:", merged)
`,
          },
          {
            type: "heading",
            value: "Program 20: Check if a Number is Palindrome",
          },
          {
            type: "code",
            fileName: "program-20.py",
            value: `num = 121
if str(num) == str(num)[::-1]:
 print("Palindrome")
else:
 print("Not a palindrome")
`,
          },
          {
            type: "heading",
            value: "Program 21: Reverse a Number",
          },
          {
            type: "code",
            fileName: "program-21.py",
            value: `num = 1234
rev = 0
while num > 0:
 rev = rev * 10 + num % 10
 num //= 10
print("Reversed Number:", rev)
`,
          },
          {
            type: "heading",
            value: "Program 22: Check Prime Number",
          },
          {
            type: "code",
            fileName: "program-22.py",
            value: `num = 7

if num > 1:
    for i in range(2, num):
        if num % i == 0:
            print("Not Prime")
            break
    else:
        print("Prime")
else:
    print("Not Prime")
`,
          },
          {
            type: "heading",
            value: "Program 23: Generate Fibonacci Series",
          },
          {
            type: "code",
            fileName: "program-23.py",
            value: `n = 10
a, b = 0, 1
print("Fibonacci Series:")
for _ in range(n):
 print(a, end=" ")
 a, b = b, a + b
`,
          },
          {
            type: "heading",
            value: "Program 24: Factorial Using Loop",
          },
          {
            type: "code",
            fileName: "program-24.py",
            value: `num = 5
fact = 1
for i in range(1, num + 1):
 fact *= i
print("Factorial:", fact)
`,
          },
          {
            type: "heading",
            value: "Program 25: Check Armstrong Number",
          },
          {
            type: "code",
            fileName: "program-25.py",
            value: `num = 153
sum = 0
temp = num
while temp > 0:
 digit = temp % 10
 sum += digit ** 3
 temp //= 10
if num == sum:
 print("Armstrong Number")
else:
 print("Not Armstrong")
`,
          },
          {
            type: "heading",
            value: "Program 26: Count Vowels in a String",
          },
          {
            type: "code",
            fileName: "program-26.py",
            value: `string = "Hello World"
vowels = "aeiouAEIOU"
count = sum(1 for ch in string if ch in vowels)
print("Vowel Count:", count)
`,
          },
          {
            type: "heading",
            value:
              "Program 27: Find the Largest Element in a List Without max()",
          },
          {
            type: "code",
            fileName: "program-27.py",
            value: `numbers = [10, 25, 5, 75, 30]
largest = numbers[0]

for num in numbers[1:]:
    if num > largest:
        largest = num

print("Largest element:", largest)
`,
          },
          {
            type: "heading",
            value: "Program 28: Find Common Elements Between Two Lists",
          },
          {
            type: "code",
            fileName: "program-28.py",
            value: `list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]
common = list(set(list1) & set(list2))
print("Common Elements:", common)
`,
          },
          {
            type: "heading",
            value: "Program 29: Find Even and Odd Numbers in a List",
          },
          {
            type: "code",
            fileName: "program-29.py",
            value: `numbers = [1, 2, 3, 4, 5, 6]
even = [num for num in numbers if num % 2 == 0]
odd = [num for num in numbers if num % 2 != 0]
print("Even:", even)
print("Odd:", odd)
`,
          },
          {
            type: "heading",
            value: "Program 30: Count Positive, Negative, and Zero in a List",
          },
          {
            type: "code",
            fileName: "program-30.py",
            value: `nums = [0, -1, 2, -3, 4, 0]
pos = neg = zero = 0

for num in nums:
    if num > 0:
        pos += 1
    elif num < 0:
        neg += 1
    else:
        zero += 1

print("Positive:", pos)
print("Negative:", neg)
print("Zero:", zero)
`,
          },
        ],
      },
    ],
  },
];
