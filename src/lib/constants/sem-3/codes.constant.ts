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
    print("Solution not Found")`
            },{
            type: "code",
            language: "text",
            is_output: true,
            value: `Solution Found
Steps: 6
Path: ['fill jug 2', 'pour jug 2 to jug 1', 'empty jug 1', 'pour jug 2 to jug 1', 'fill jug 2', 'pour jug 2 to jug 1']`}
          ]
        }
        ]
        }
  ];
