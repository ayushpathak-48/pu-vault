  export const sem3PracticalCodes = [
    {
      subject_name: "Artificial Intelligence",
      key: "artificial-intelligence",
      specialization: "ai",
      language: "python",
      practicals: [
        {
          key: "guess-number",
          name: "Practical - 1: Guess a number",
          pageBlocks: [
            {
              type: "heading",
              value: "Practical 1 - Guess a number",
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
`
            }
          ]
        },
{
          key: "dfs-water-jug-problem",
          name: "Practical - 2: DFS Water Jug Problem",
          pageBlocks: [
            {
              type: "heading",
              value: "Practical 2 - DFS Water Jug Problem",
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
            continue`
            }
          ]
        }
        ]
        }
  ];
