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
      {
        key: "listbox-image-controls",
        name: "Practical - 5: ListBox and Image Controls",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 5 - ListBox and Image Controls",
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
    ],
  },
];
