export const practicalCodes = [
  {
    subject_name: "Artificial Intelligence",
    key: "artificial-intelligence",
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
            value: `theBoard = {
    "7": " ",
    "8": " ",
    "9": " ",
    "4": " ",
    "5": " ",
    "6": " ",
    "1": " ",
    "2": " ",
    "3": " ",
}

board_keys = []

for key in theBoard:
    board_keys.append(key)




def printBoard(board):
    print(board["7"] + "|" + board["8"] + "|" + board["9"])
    print("-+-+-")
    print(board["4"] + "|" + board["5"] + "|" + board["6"])
    print("-+-+-")
    print(board["1"] + "|" + board["2"] + "|" + board["3"])



def game():

    turn = "X"
    count = 0

    for i in range(10):
        printBoard(theBoard)
        print("It's your turn," + turn + ".Move to which place?")

        move = input()

        if theBoard[move] == " ":
            theBoard[move] = turn
            count += 1
        else:
            print("That place is already filled.\nMove to which place?")
            continue

        
        if count >= 5:
            if theBoard["7"] == theBoard["8"] == theBoard["9"] != " ":  
                printBoard(theBoard)
                print("\nGame Over.\n")
                print(" **** " + turn + " won. ****")
                break
            elif (
                theBoard["4"] == theBoard["5"] == theBoard["6"] != " "):  # across the middle
                printBoard(theBoard)
                print("\nGame Over.\n")
                print(" **** " + turn + " won. ****")
                break
            elif (
                theBoard["1"] == theBoard["2"] == theBoard["3"] != " "):  # across the bottom
                printBoard(theBoard)
                print("\nGame Over.\n")
                print(" **** " + turn + " won. ****")
                break
            elif (
                theBoard["1"] == theBoard["4"] == theBoard["7"] != " "):  # down the left side
                printBoard(theBoard)
                print("\nGame Over.\n")
                print(" **** " + turn + " won. ****")
                break
            elif (
                theBoard["2"] == theBoard["5"] == theBoard["8"] != " "):  # down the middle
                printBoard(theBoard)
                print("\nGame Over.\n")
                print(" **** " + turn + " won. ****")
                break
            elif (
                theBoard["3"] == theBoard["6"] == theBoard["9"] != " "):  # down the right side
                printBoard(theBoard)
                print("\nGame Over.\n")
                print(" **** " + turn + " won. ****")
                break
            elif theBoard["7"] == theBoard["5"] == theBoard["3"] != " ":  # diagonal
                printBoard(theBoard)
                print("\nGame Over.\n")
                print(" **** " + turn + " won. ****")
                break
            elif theBoard["1"] == theBoard["5"] == theBoard["9"] != " ":  # diagonal
                printBoard(theBoard)
                print("\nGame Over.\n")
                print(" **** " + turn + " won. ****")
                break

        # If neither X nor O wins and the board is full, we'll declare the result as 'tie'.
        if count == 9:
            print("\nGame Over.\n")
            print("It's a Tie!!")

        # Now we have to change the player after every move.
        if turn == "X":
            turn = "O"
        else:
            turn = "X"

    # Now we will ask if player wants to restart the game or not.
    restart = input("Do want to play Again?(y/n)")
    if restart == "y" or restart == "Y":
        for key in board_keys:
            theBoard[key] = " "

        game()


if _name_ == "_main_":
    game()`,
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
print("List of Operations you can do: \n")
print("1. Fill Jug A Completely")
print("2. Fill Jug B Completely")
print("3. Empty Jug A Completely")
print("4. Empty Jug B Completely")
print("5. Pour from Jug A till Jug B filled Completely or A become empty \n")
print("6. Pour from Jug B till Jug A filled Completely or B become empty \n")
print("7. Pour all Jug B till Jug A\n")
print("8. Pour all Jug A till Jug B\n")

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
        ],
      },
    ],
  },
];
