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
        name: "Practical : Guess a number",
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
        key: "dfs-water-jug-problem",
        name: "Practical : DFS Water Jug Problem",
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
            fileName: "guess-number.py",
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
    ],
  },
];
