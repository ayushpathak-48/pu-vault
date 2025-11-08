export const sem1PracticalCodes = [
  // JAVA
  {
    subject_name: "Java Programming",
    key: "java-programming",
    specialization: null,
    language: "java",
    practicals: [
      //  p-1 Basic datatype and looping
      {
        key: "basic-datatype-and-looping",
        name: "Practical - 1: Basic datatype and looping",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 1 - Basic datatype and looping",
          },
          {
            type: "code",
            fileName: "SwapAndFactorial.java",
            value: `import java.util.Scanner;

public class SwapAndFactorial {
    // Method to swap two numbers without using a third variable
    public static void swap(int a, int b) {
        System.out.println("Before swapping: a = " + a + ", b = " + b);
        // Swapping logic
        a = a + b; // a now contains the sum of both
        b = a - b; // b is now the original value of a
        a = a - b; // a is now the original value of b
        System.out.println("After swapping: a = " + a + ", b = " + b);
    }

    // Method to calculate factorial
    public static int factorial(int n) {
        if (n == 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Input for swapping
        System.out.print("Enter first number (a): ");
        int a = scanner.nextInt();
        System.out.print("Enter second number (b): ");
        int b = scanner.nextInt();
        // Perform swapping
        swap(a, b);
        // Input for factorial calculation
        System.out.print("Enter a number to calculate factorial: ");
        int number = scanner.nextInt();
        // Calculate and print factorial
        int fact = factorial(number);
        System.out.println("Factorial of " + number + " is: " + fact);
        scanner.close();
    }
}`,
          },
        ],
      },
      //  p2
      {
        key: "looping-and-control-structure",
        name: "Practical - 2: Looping and Control structure",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 2 - Looping and Control structure",
          },
          {
            type: "code",
            fileName: "PalindromeCheck.java",
            value: `import java.util.Scanner;

public class PalindromeCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Prompt the user to enter a number
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();
        // Check if the number is a palindrome
        if (isPalindrome(number)) {
            System.out.println(number + " is a palindrome.");
        } else {
            System.out.println(number + " is not a palindrome.");
        }
        scanner.close();
    }

    public static boolean isPalindrome(int num) {
        int originalNumber = num;
        int reversedNumber = 0;
        while (num != 0) {
            int digit = num % 10;
            reversedNumber = reversedNumber * 10 + digit;
            num /= 10;
        }
        return originalNumber == reversedNumber;
    }
}`,
          },
        ],
      },
      //  p3
      {
        key: "array",
        name: "Practical - 3: Array",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 3 - Array",
          },
          {
            type: "code",
            fileName: "PrimeNumbersInArray.java",
            value: `import java.util.Scanner;

public class PrimeNumbersInArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Prompt the user to enter the size of the array
        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt();
        int[] numbers = new int[size];
        // Prompt the user to enter the elements of the array
        System.out.println("Enter the elements of the array:");
        for (int i = 0; i < size; i++) {
            numbers[i] = scanner.nextInt();
        }
        // Find and display prime numbers in the array
        System.out.println("Prime numbers in the array:");
        for (int num : numbers) {
            if (isPrime(num)) {
                System.out.print(num + " ");
            }
        }
        scanner.close();
    }

    // Method to check if a number is prime
    public static boolean isPrime(int num) {
        if (num <= 1) {
            return false; // 1 and numbers less than 1 are not prime
        }
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false; // If divisible by any number other than 1 and itself, it's not prime
            }
        }
        return true;
    }
}`,
          },
        ],
      },
      // p4
      {
        key: "class",
        name: "Practical - 4: Class",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 4 - Class",
          },
          {
            type: "code",
            fileName: "StackDemo.java",
            value: `class Stack {
    private int[] stackArray;
    private int top;
    private static final int MAX_SIZE = 10;

    // Constructor to initialize the stack
    public Stack() {
        stackArray = new int[MAX_SIZE];
        top = -1; // Stack is initially empty
    }

    // Method to push an element onto the stack
    public void push(int value) {
        if (top >= MAX_SIZE - 1) {
            System.out.println("Stack Overflow! Unable to push " + value);
        } else {
            stackArray[++top] = value;
            System.out.println("Pushed " + value + " onto the stack.");
        }
    }

    // Method to pop an element from the stack
    public int pop() {
        if (top < 0) {
            System.out.println("Stack Underflow! No elements to pop.");
            return -1; // Returning -1 to indicate stack underflow
        } else {
            int poppedValue = stackArray[top--];
            System.out.println("Popped " + poppedValue + " from the stack.");
            return poppedValue;
        }
    }

    // Method to check if the stack is empty
    public boolean isEmpty() {
        return (top < 0);
    }

    // Method to check if the stack is full
    public boolean isFull() {
        return (top >= MAX_SIZE - 1);
    }

    // Method to display the stack elements
    public void display() {
        if (top < 0) {
            System.out.println("Stack is empty.");
        } else {
            System.out.print("Stack elements: ");
            for (int i = 0; i <= top; i++) {
                System.out.print(stackArray[i] + " ");
            }
            System.out.println();
        }
    }
}

public class StackDemo {
    public static void main(String[] args) {
        Stack stack = new Stack();
        // Perform stack operations
        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.display();
        stack.pop();
        stack.display();
        stack.push(40);
        stack.push(50);
        stack.push(60);
        stack.push(70);
        stack.push(80);
        stack.push(90);
        stack.push(100);
        stack.push(110); // This should cause a stack overflow
        stack.display();
        stack.pop();
        stack.pop();
        stack.display();
    }
}`,
          },
        ],
      },
      // p5
      {
        key: "inheritance",
        name: "Practical - 5: Inheritance",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 5 - Inheritance",
          },
          {
            type: "code",
            fileName: "Publisher.java",
            value: `import java.util.Scanner;

// Publisher class
class Publisher {
    String publisherName;
    int publisherId;

    // Method to get publisher data
    void getData() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter Publisher Name: ");
        publisherName = scanner.nextLine();
        System.out.print("Enter Publisher ID: ");
        publisherId = scanner.nextInt();
        scanner.nextLine(); // consume the newline
    }

    // Method to display publisher data
    void showData() {
        System.out.println("Publisher Name: " + publisherName);
        System.out.println("Publisher ID: " + publisherId);
    }
}

// Book class derived from Publisher
class Book extends Publisher {
    String bookName;
    int bookId;
    String authorName;

    // Method to get book data
    @Override
    void getData() {
        super.getData();
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter Book Name: ");
        bookName = scanner.nextLine();
        System.out.print("Enter Book ID: ");
        bookId = scanner.nextInt();
        scanner.nextLine(); // consume the newline
        System.out.print("Enter Author Name: ");
        authorName = scanner.nextLine();
    }

    // Method to display book data
    @Override
    void showData() {
        super.showData();
        System.out.println("Book Name: " + bookName);
        System.out.println("Book ID: " + bookId);
        System.out.println("Author Name: " + authorName);
    }
}

// Main class to test the functionality
public class Main {
    public static void main(String[] args) {
        Book book = new Book();
        book.getData();
        System.out.println("\\\\nDisplaying Book and Publisher Details:");
        book.showData();
    }
}`,
          },
        ],
      },
    ],
  },

  // Data Structure
  {
    subject_name: "Data Structure",
    key: "data-structures",
    specialization: null,
    language: "c",
    practicals: [
      //  p-1 stack using array
      {
        key: "stack",
        name: "Practical - 1: Write a program to perform various stack operations using array",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 1 - Stack Operations ",
          },
          {
            type: "code",
            fileName: "stack.c",
            value: `#include <stdio.h>

#include <stdlib.h>

#define SIZE 4

int top = -1, int_array[SIZE];
void push();
void pop();
void show();

int main()
{
    int choice;

    while (1)
    {
        printf("\\\nPerform operations on the stack:");
        printf("\\\n1.Push the element\\\n2.Pop the element\\\n3.Show\\\n4.End");
        printf("\\\n\\\nEnter the choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            push();
            break;
        case 2:
            pop();
            break;
        case 3:
            show();
            break;
        case 4:
            exit(0);

        default:
            printf("\\\nInvalid choice!!");
        }
    }
}

void push()
{
    int x;

    if (top == SIZE - 1)
    {
        printf("\\\nOverflow!!");
    }
    else
    {
        printf("\\\nEnter the element to be added onto the stack: ");
        scanf("%d", &x);
        top = top + 1;
        int_array[top] = x;
    }
}

void pop()
{
    if (top == -1)
    {
        printf("\\\nUnderflow!!");
    }
    else
    {
        printf("\\\nPopped element: %d", int_array[top]);
        top = top - 1;
    }
}

void show()
{
    if (top == -1)
    {
        printf("\\\nUnderflow!!");
    }
    else
    {
        printf("\\\nElements present in the stack: \\\n");
        for (int i = top; i >= 0; --i)
            printf("%d\\\n", int_array[i]);
    }
}`,
          },
        ],
      },
      // p-2 infix to pre and post
      {
        key: "infix-to-prefix-postfix",
        name: "Practical - 2: Write a program to convert infix expression to prefix and postfix expression using stack",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 2 - Infix to Prefix and Postfix",
          },
          {
            type: "code",
            fileName: "infix_to_prefix.c",
            value: `#include <stdio.h>
#include <ctype.h>
#define max 100

int top = -1, a[max];

// Function to push an element onto the stack
void push(char x) {
    a[++top] = x;
}

// Function to pop an element from the stack
char pop() {
    if (top == -1)
        return -1;
    else
        return a[top--];
}

// Function to determine the precedence of operators
int prcd(char c) {
    if (c == '(')
        return 0;
    else if (c == '+' || c == '-')
        return 1;
    else if (c == '*' || c == '/')
        return 2;
}

// Function to reverse a string
void reverse(char str[]) {
    int length = 0, i;
    while (str[length] != '\0')
        length++;

    for (i = 0; i < length / 2; i++) {
        char temp = str[i];
        str[i] = str[length - i - 1];
        str[length - i - 1] = temp;
    }
}

// Function to convert infix to postfix
void infixtopostfix(char infix[max], char postfix[max]) {
    char temp, x;
    int i = 0, j = 0;
    while (infix[i] != '\0') {
        temp = infix[i];
        if (isalnum(temp)) {
            postfix[j++] = temp;
        }
        else if (temp == '(') {
            push(temp);
        }
        else if (temp == ')') {
            while ((x = pop()) != '(') {
                postfix[j++] = x;
            }
        }
        else {
            while (top != -1 && prcd(a[top]) >= prcd(temp)) {
                postfix[j++] = pop();
            }
            push(temp);
        }
        i++;
    }

    while (top != -1)
        postfix[j++] = pop();
    postfix[j] = '\0';
}

// Function to convert infix to prefix
void infixtoprefix(char infix[max], char prefix[max]) {
    char postfix[max];
    int i;  // Declare 'i' here to fix the issue

    // Reverse the infix expression
    reverse(infix);

    // Modify the infix expression to change '(' to ')' and vice versa
    for (i = 0; infix[i] != '\0'; i++) {
        if (infix[i] == '(') {
            infix[i] = ')';
        }
        else if (infix[i] == ')') {
            infix[i] = '(';
        }
    }

    // Convert the reversed infix to postfix
    infixtopostfix(infix, postfix);

    // Reverse the postfix to get the prefix expression
    reverse(postfix);

    // Copy the postfix result to prefix
    for (i = 0; postfix[i] != '\0'; i++) {
        prefix[i] = postfix[i];
    }
    prefix[i] = '\0'; // Null terminate the prefix string
}

int main() {
    char infix[max], prefix[max];
    printf("Enter the infix expression:\\n");
    scanf("%s", infix);
    printf("The infix expression is: %s\\n", infix);
    infixtoprefix(infix, prefix);
    printf("The prefix expression is: %s\\n", prefix);
    return 0;
}
`,
          },
          {
            type: "code",
            fileName: "infix_to_postfix.c",
            value: `#include<stdio.h>
#include<ctype.h>
#define max 100

int top =-1, a[max];
void push(char x)
{
    a[++top]=x;
}
char pop()
{
    if(top==-1)
    return -1;
    else
    return a[top--];
}
int prcd(char c)
{
    if(c=='(')
    return 0;
    else if (c== '+'||c =='-')
    return 1;
    else if(c=='*'||c=='/')
    return 2;
}
int infixtopostfix(char infix[max],char postfix[max])
{
    char temp, x;
    int i = 0, j = 0;
    while(infix[i]!='\0')
    {
        temp=infix[i];
        if(isalnum(temp))
        {
            postfix[j++]=temp;
        }
        else if(temp=='(')
        push(temp);
        else if (temp=='(')
        {
            while ((x=pop())!='(')
            {
                postfix[j++]=x;
            }
        }
      else {
        while (prcd(a[top])>=prcd(temp)) 
        {
            postfix[j++]=pop();
        }
        push(temp);
      }
      i++;
    }
    
    while(top!=-1)
    postfix[j++]=pop();
    postfix[j]='\0';
}
void main()
{
    char infix[max],postfix[max];
    printf("Enter the infix expression:\\n ");
    scanf("%s", infix);
    printf("The infix expression is %s\\n", infix);
    infixtopostfix(infix,postfix);
    printf("The postfix expression is %s\\n", postfix);
}`,
          },
        ],
      },
      // p-3 queue op
      {
        key: "queue-op",
        name: "Practical - 3: Write a program to perform insert and remove operations on a) Simple b) Circular c) Priority Queue",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 3 - Queue Operations",
          },
          {
            type: "code",
            fileName: "simple_Q.c",
            value: `
#include<stdio.h>
#include<stdlib.h>
#define MAX 10
int arr[MAX];
int front = -1, rear = -1;

void addqueue(int item)
{
    if (rear == MAX - 1)
    {
        printf("Queue is full\\n");
        return;
    }
    arr[++rear] = item;

    if (front == -1)
        front = 0;
}
int dequeue()
{
    int data;

    if (front == -1) 
    {
        printf("Queue is empty\\n");
        return 0;
    }
    data = arr[front];
    arr[front] = 0;
    if (front == rear)
        front = rear = -1;
    else
    {
        front++;
    }
    return data;
}

void display()
{
    printf("\\n\t\t\tinformation in Queue\\n\\n");
    if (rear == -1)
    {
        printf("\t\t|");
        for (int i = 0; i < MAX; i++)
            printf("  |");
        printf("\\n\\n");
    }
    else
    {
        printf("\t\t|");
        for (int i = 0; i <= rear; i++) 
            printf("%d  |", arr[i]);
        printf("\\n\\n");
    }
}
void main()
{
    int item;
    int ch;
    
    do
    {
        printf("\\n\t\tPress 1 for insert item into Queue");
        printf("\\n\t\tPress 2 for Delete item from Queue");
        printf("\\n\t\tPress 3 for Display Data of Queue");
        printf("\\n\t\tPress 4 for EXIT");
        printf("\\n\t\t Enter Your Choice : ");
        scanf("%d", &ch);

        switch (ch)
        {
        case 1:
            printf("\\nEnter item to insert : ");
            scanf(" %d", &item); 
            addqueue(item);
            break;
        case 2:
            item = dequeue(); 
            printf("\\nitem %d is Deleted\\n", item);
            break;
        case 3:
            display();
            break;
        case 4:
           exit(0);
  break;
        default:
            printf("Invalid choice\\n");
        }
    }while(ch !=4);
    // getch();

}`,
          },
          {
            type: "code",
            fileName: "circular_Q.c",
            value: `#include <stdio.h>

#define SIZE 5

int items[SIZE];
int front = -1, rear = -1;

// check if the queue is full
int isFull() {
  if ((front == (rear + 1) % SIZE) || (front == 0 && rear == SIZE - 1)) return 1;
  return 0;
}

// check if the queue is empty
int isEmpty() {
  if (front == -1) return 1;
  return 0;
}

// adding an element
void enQueue(int element) {
  if (isFull())
    printf("\\n Queue is full!! \\n");
  else {
    if (front == -1) front = 0;
    rear = (rear + 1) % SIZE;
    items[rear] = element;
    printf("\\n Inserted -> %d", element);
  }
}

// removing an element
int deQueue() {
  int element;
  if (isEmpty()) {
    printf("\\n Queue is empty !! \\n");
    return (-1);
  } else {
    element = items[front];
    if (front == rear) {
      front = -1;
      rear = -1;
    } 
    else {
      front = (front + 1) % SIZE;
    }
    printf("\\n Deleted element -> %d \\n", element);
    return (element);
  }
}

// display the queue
void display() {
  int i;
  if (isEmpty())
    printf(" \\n Empty Queue\\n");
  else {
    printf("\\n Front -> %d ", front);
    printf("\\n Items -> ");
    for (i = front; i != rear; i = (i + 1) % SIZE) {
      printf("%d ", items[i]);
    }
    printf("%d ", items[i]);
    printf("\\n Rear -> %d \\n", rear);
  }
}

int main() {
  int choice, element;

  while (1) {
    printf("\\nQueue Operations:");
    printf("\\n1. Enqueue");
    printf("\\n2. Dequeue");
    printf("\\n3. Display Queue");
    printf("\\n4. Exit");
    printf("\\nEnter your choice: ");
    scanf("%d", &choice);

    switch (choice) {
      case 1:
        printf("\\nEnter element to enqueue: ");
        scanf("%d", &element);
        enQueue(element);
        break;

      case 2:
        deQueue();
        break;

      case 3:
        display();
        break;

      case 4:
        printf("\\nExiting program.\\n");
        return 0;

      default:
        printf("\\nInvalid choice! Please try again.\\n");
    }
  }
}`,
          },
          {
            type: "code",
            fileName: "piority_Q.c",
            value: `#include <stdio.h>

#define SIZE 5

struct PriorityQueue {
    int data;
    int priority;
};

struct PriorityQueue pq[SIZE];
int front = -1, rear = -1;

// Check if the priority queue is full
int isFull() {
    return (rear == SIZE - 1);
}

// Check if the priority queue is empty
int isEmpty() {
    return (front == -1);
}

// Insert an element into the priority queue
void insert(int element, int priority) {
    if (isFull()) {
        printf("\\nPriority Queue is full!\\n");
        return;
    }
    if (isEmpty()) {
        front = 0;
        rear = 0;
        pq[rear].data = element;
        pq[rear].priority = priority;
    } else {
        int i;
        for (i = rear; i >= front && pq[i].priority > priority; i--) {
            pq[i + 1] = pq[i];
        }
        pq[i + 1].data = element;
        pq[i + 1].priority = priority;
        rear++;
    }
    printf("\\nInserted %d with priority %d\\n", element, priority);
}

// Delete an element with the highest priority
void delete() {
    if (isEmpty()) {
        printf("\\nPriority Queue is empty!\\n");
        return;
    }
    printf("\\nDeleted element %d with priority %d\\n", pq[front].data, pq[front].priority);
    if (front == rear) {
        front = -1;
        rear = -1;
    } else {
        front++;
    }
}

// Display the priority queue
void display() {
    if (isEmpty()) {
        printf("\\nPriority Queue is empty!\\n");
        return;
    }
    printf("\\nPriority Queue elements are:\\n");
    for (int i = front; i <= rear; i++) {
        printf("Element: %d, Priority: %d\\n", pq[i].data, pq[i].priority);
    }
}

int main() {
    int choice, element, priority;
    while (1) {
        printf("\\nPriority Queue Operations:");
        printf("\\n1. Insert");
        printf("\\n2. Delete");
        printf("\\n3. Display Queue");
        printf("\\n4. Exit");
        printf("\\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("\\nEnter the element to insert: ");
                scanf("%d", &element);
                printf("\\nEnter the priority of the element: ");
                scanf("%d", &priority);
                insert(element, priority);
                break;
            case 2:
                delete();
                break;
            case 3:
                display();
                break;
            case 4:
                printf("\\nExiting program.\\n");
                return 0;
            default:
                printf("\\nInvalid choice! Please try again.\\n");
        }
    }
}`,
          },
        ],
      },
      // p-4 double ended queue
      {
        key: "double-queue-restricted",
        name: "Practical - 4: Write a program to perform Double Ended Queue [Input Restricted / Output Restricted]",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 4 - Double Ended Queue",
          },
          {
            type: "code",
            fileName: "double_ended_Q.c",
            value: `#include <stdio.h>
#define Size 5

int DQ[Size];
int front = -1;
int rear = -1;

// Function to insert at the rear
void insert_rear() {
    int add_item;
    if ((front == 0 && rear == Size - 1) || (front == rear + 1)) {
        printf("Queue is full\\n");
        return;
    }
    if (front == -1) {
        front = 0;
        rear = 0;
    } else if (rear == Size - 1)
        rear = rear + 1;

    printf("Input the element for adding in Queue : ");
    scanf("%d", &add_item);
    DQ[rear] = add_item;
}

// Function to insert at the front
void insert_front() {
    int add_item;
    if ((front == 0 && rear == Size - 1) || (front == rear + 1)) {
        printf("Queue is full\\n");
        return;
    }
    if (front == -1) {
        front = 0;
        rear = 0;
    } else if (front == 0)
        front = Size - 1;
    else
        front = front - 1;

    printf("Input the element for adding in queue : ");
    scanf("%d", &add_item);
    DQ[front] = add_item;
}

// Function to delete from the front
void delete_front() {
    if (front == -1) {
        printf("Queue Underflow\\n");
        return;
    }
    printf("Element deleted from queue is : %d\\n", DQ[front]);
    DQ[front] = 0;
    if (front == rear) {
        front = -1;
        rear = -1;
    } else if (front == Size - 1)
        front = 0;
    else
        front = front + 1;
}

// Function to delete from the rear
void delete_rear() {
    if (front == -1) {
        printf("Queue underflow\\n");
        return;
    }
    printf("Element deleted from queue is : %d\\n", DQ[rear]);
    DQ[rear] = 0;
    if (front == rear) {
        front = -1;
        rear = -1;
    } else if (rear == 0)
        rear = Size - 1;
    else
        rear = rear - 1;
}

// Function to display the queue
void display_queue() {
    int i;
    printf("\\n\t\t\tInformation in DQueue\\n\\n");
    if (rear == -1) {
        printf("\t\t|");
        for (i = 0; i < Size; i++)
            printf("  |");
        printf("\\n\\n");
    } else {
        printf("\t\t|");
        for (i = front; i <= rear; i++)
            printf("%d  |", DQ[i]);
        printf("\\n\\n");
    }
}

// Function for input restricted queue (insert only at the rear and delete from both ends)
void input_que() {
    int choice;
    do {
        printf("1. Insert at rear\\n");
        printf("2. Delete from front \\n");
        printf("3. Delete from rear\\n");
        printf("4. Display\\n");
        printf("5. Exit\\n");
        printf("Enter your choice: \\n");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                insert_rear();
                break;
            case 2:
                delete_front();
                break;
            case 3:
                delete_rear();
                break;
            case 4:
                display_queue();
                break;
            case 5:
                break;
            default:
                printf("Invalid choice\\n");
        }
    } while (choice != 5);
}

// Function for output restricted queue (insert only at the front and delete from both ends)
void output_queue() {
    int choice;
    do {
        printf("1. Insert at front\\n");
        printf("2. Delete from front\\n");
        printf("3. Delete from rear\\n");
        printf("4. Display\\n");
        printf("5. Exit\\n");
        printf("Enter your choice: \\n");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                insert_front();
                break;
            case 2:
                delete_front();
                break;
            case 3:
                delete_rear();
                break;
            case 4:
                display_queue();
                break;
            case 5:
                break;
            default:
                printf("Invalid choice\\n");
        }
    } while (choice != 5);
}

int main() {
    int choice;
    printf("1. Input restricted dequeue\\n");
    printf("2. Output restricted dequeue\\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            input_que();
            break;
        case 2:
            output_queue();
            break;
        default:
            printf("Invalid choice\\n");
    }
}`,
          },
        ],
      },
      // p-5 singly list
      {
        key: "singly-list-lifo-fifo",
        name: "Practical - 5: Write a program to create a singly link list in FIFO & LIFO form",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 5 - Singly Link List (Fifo-Lifo) ",
          },
          {
            type: "code",
            fileName: "singly_link_list_(fifo-lifo).c",
            value: `#include <stdio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *link;
} *start;
void Ins_LIFO(int item)
{
    struct node *first, *newnode;
    if (start == NULL)
    {
        first = (struct node *)malloc(sizeof(struct node));
        first->data = item;
        first->link = NULL;
        start = first;
    }
    else
    {
        first = start;
        while (first->link != NULL)
            first = first->link;
        newnode = (struct node *)malloc(sizeof(struct node));
        newnode->data = item;
        newnode->link = NULL;
        first->link = newnode;
    }
}
void Ins_FIFO(int item)
{
    struct node *first, *newnode;
    if (start == NULL)
    {
        first = (struct node *)malloc(sizeof(struct node));
        first->data = item;
        first->link = NULL;
        start = first;
    }
    else
    {
        newnode = (struct node *)malloc(sizeof(struct node));
        newnode->data = item;
        newnode->link = start;
        start = newnode;
    }
}
void Del_LIFO()
{
    struct node *first, *prev;
    if (start == NULL)
    {
        printf("\\nUNDERFLOW");
    }
    else if (start->link == NULL)
    {
        printf("\\nNode %d is deleted", start->data);
        start = NULL;
        free(start);
    }
    else
    {
        first = start;
        while (first->link != NULL)
        {
            prev = first;
            first = first->link;
        }
        printf("\\nNode %d is deleted", first->data);
        prev->link = NULL;
        free(first);
    }
}
void Del_FIFO()
{
    struct node *first;
    if (start == NULL)
    {
        printf("\\nUNDERFLOW");
    }
    else if (start->link == NULL)
    {
        printf("\\nNode %d is deleted", start->data);
        start = NULL;
        free(start);
    }
    else
    {
        printf("\\nNode %d is deleted", start->data);
        start = start->link;
    }
}
void Display()
{
    struct node *temp = start;
    printf("\\n\t\t\t ADD\t\t INFO\t\t\tLINK\\n");
    while (temp != NULL)
    {
        printf("\t\t%10u", temp);
        printf("\t%10d", temp->data);
        printf("\t\t%10u\\n", temp->link);
        temp = temp->link;
    }
}
int LIFO()
{
    int ch, item;
    do
    {
        printf("\\nPress 1 for Insertion");
        printf("\\nPress 2 for Deletion");
        printf("\\nPress 3 for Display");
        printf("\\nPress 4 for Exit: ");
        scanf("%d", &ch);
        switch (ch)
        {
        case 1:
            printf("Enter Item: ");
            scanf("%d", &item);
            Ins_LIFO(item);
            break;
        case 2:
            Del_LIFO();
            break;
        case 3:
            Display();
            break;
        case 4:
            break;
        default:
            printf("\\nInvalid Input");
        }
    } while (ch != 4);
    return 0;
}
int FIFO()
{
    int ch, item;
    do
    {
        printf("\\nPress 1 for Insertion");
        printf("\\nPress 2 for Deletion");
        printf("\\nPress 3 for Display");
        printf("\\nPress 4 for Exit: ");
        scanf("%d", &ch);
        switch (ch)
        {
        case 1:
            printf("Enter Item: ");
            scanf("%d", &item);
            Ins_LIFO(item);
            break;
        case 2:
            Del_LIFO();
            break;
        case 3:
            Display();
            break;
        case 4:
            break;
        default:
            printf("\\nInvalid Input");
        }
    } while (ch != 4);
    return 0;
}
int main()
{
    int ch;
    do
    {
        printf("\\nPress 1 for LIFO Procedure");
        printf("\\nPress 2 for FIFO Procedure");
        printf("\\nPress 3 for Exit: ");
        scanf("%d", &ch);
        switch (ch)
        {
        case 1:
            LIFO();
            break;
        case 2:
            FIFO();
            break;
        case 3:
            break;
        default:
            printf("\\nInvalid Input");
        }
    } while (ch != 3);
    return 0;
}`,
          },
        ],
      },
      // p-6 singly link list op
      {
        key: "singly-link-list-op",
        name: "Practical - 6: Write a program to perform following singly link list operations",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 6 - Singly Link List Op",
          },
          {
            type: "code",
            fileName: "singly_link_list.c",
            value: `#include <stdio.h>
#include <stdlib.h>
struct Node
{
    int data;
    struct Node *link;
} *start;
// Insert a new node at the end
void insert(int data)
{
    struct Node *first, *newnode;
    newnode = (struct Node *)malloc(sizeof(struct Node));
    newnode->data = data;
    newnode->link = NULL;
    if (start == NULL)
        start = newnode;
    else
    {
        first = start;
        while (first->link != NULL)
            first = first->link;
        first->link = newnode;
    }
}
// Delete a node with a given key
void delete(int key)
{
    struct Node *old, *temp;
    temp = start;
    while (temp != NULL)
    {
        if (temp->data == key)
        {
            if (temp == start)
                start = temp->link;
            else
                old->link = temp->link;
            free(temp);
            return;
        }
        else
        {
            old = temp;
            temp = temp->link;
        }
    }
    printf("\\n\\nElement %d not Found", key);
}
// Search for a node with a given key
int search(int key)
{
    struct Node *temp;
    temp = start;
    while (temp->link != NULL)
    {
        if (temp->data == key)
            return 1;
        temp = temp->link;
    }
    return 0;
}
// Reverse the list
void reverse()
{
    if (start == NULL)
    {
        printf("List is empty.\\n");
        return;
    }
    struct Node *temp = NULL;
    struct Node *current;
    current = start;
    struct Node *link = NULL;
    while (current != NULL)
    {
        link = current->link;
        current->link = temp;
        temp = current;
        current = link;
    }
    start = temp;
}
// Display the list
void display()
{
    struct Node *temp = start;
    printf("\\n\tINFO\tLINK\\n");
    while (temp != NULL)
    {
        printf("\t%d", temp->data);
        printf("\t%u\\n", temp->link);
        temp = temp->link;
    }
}
int main()
{
    int choice, data, key, found;
    do
    {
        printf("\\nDoubly Linked List Operations:\\n");
        printf("1. Insert\\n2. Delete\\n3. Search\\n4. Reverse\\n5. Display\\n6. Exit\\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("Enter data to insert: ");
            scanf("%d", &data);
            insert(data);
            break;
        case 2:
            printf("Enter data to delete: ");
            scanf("%d", &key);
            delete (key);
            break;
        case 3:
            printf("Enter data to search: ");
            scanf("%d", &key);
            found = search(key);
            if (found)
                printf("Element %d found in the list.\\n", key);
            else
                printf("Element %d not found in the list.\\n", key);
            break;
        case 4:
            reverse();
            printf("List reversed.\\n");
            break;
        case 5:
            printf("List contents: ");
            display();
            break;
        case 6:
            printf("Exiting...\\n");
            break;
        default:
            printf("Invalid choice. Try again.\\n");
        }
    } while (choice != 6);
    return 0;
}`,
          },
        ],
      },
      // p- 7 doubly link list in fifo lifo
      {
        key: "doubly-link-list-fifo-lifo",
        name: "Practical - 7: Write a program to create a doubly link list in FIFO & LIFO form",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 7 - Doubly Link List (FIFO - LIFO)",
          },
          {
            type: "code",
            fileName: "doubly_link_list_fifo_lifo.c",
            value: `#include <stdio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *prev;
    struct node *next;
} *start;
void Ins_LIFO(int item)
{
    struct node *first, *newnode;
    if (start == NULL)
    {
        first = (struct node *)malloc(sizeof(struct node));
        first->data = item;
        first->next = NULL;
        first->prev = NULL;
        start = first;
    }
    else
    {
        first = start;
        while (first->next != NULL)
            first = first->next;
        newnode = (struct node *)malloc(sizeof(struct node));
        newnode->data = item;
        newnode->next = NULL;
        newnode->prev = first;
        first->next = newnode;
    }
}
void Ins_FIFO(int item)
{
    struct node *first, *newnode;
    if (start == NULL)
    {
        first = (struct node *)malloc(sizeof(struct node));
        first->data = item;
        first->next = NULL;
        first->prev = NULL;
        start = first;
    }
    else
    {
        newnode = (struct node *)malloc(sizeof(struct node));
        newnode->data = item;
        newnode->next = start;
        newnode->prev = NULL;
        start->prev = newnode;
        start = newnode;
    }
}
void Del_LIFO()
{
    struct node *first;
    if (start == NULL)
    {
        printf("\\nUNDERFLOW");
    }
    else if (start->next == NULL)
    {
        printf("\\nNode %d is deleted", start->data);
        start = NULL;
        free(start);
    }
    else
    {
        first = start;
        while (first->next != NULL)
            first = first->next;
        printf("\\nNode %d is deleted", first->data);
        first->prev->next = NULL;
        free(first);
    }
}
void Del_FIFO()
{
    struct node *first;
    if (start == NULL)
    {
        printf("\\nUNDERFLOW");
    }
    else if (start->next == NULL)
    {
        printf("\\nNode %d is deleted", start->data);
        start = NULL;
        free(start);
    }
    else
    {
        first = start;
        printf("\\nNode %d is deleted", first->data);
        start = start->next;
        start->prev = NULL;
        free(first);
    }
}
void Display()
{
    struct node *temp = start;
    printf("\\n\t\t\tPREV\t\t\t ADD\t\t INFO\t\t\tNEXT\\n");
    while (temp != NULL)
    {
        printf("\t\t%10u", temp->prev);
        printf("\t\t%10u", temp);
        printf("\t%10d", temp->data);
        printf("\t\t%10u\\n", temp->next);
        temp = temp->next;
    }
}
int LIFO()
{
    int ch, item;
    do
    {
        printf("\\nPress 1 for Insertion");
        printf("\\nPress 2 for Deletion");
        printf("\\nPress 3 for Display");
        printf("\\nPress 4 for Exit: ");
        scanf("%d", &ch);
        switch (ch)
        {
        case 1:
            printf("Enter Item: ");
            scanf("%d", &item);
            Ins_LIFO(item);
            break;
        case 2:
            Del_LIFO();
            break;
        case 3:
            Display();
            break;
        case 4:
            break;
        default:
            printf("\\nInvalid Input");
        }
    } while (ch != 4);
    return 0;
}
int FIFO()
{
    int ch, item;
    do
    {
        printf("\\nPress 1 for Insertion");
        printf("\\nPress 2 for Deletion");
        printf("\\nPress 3 for Display");
        printf("\\nPress 4 for Exit: ");
        scanf("%d", &ch);
        switch (ch)
        {
        case 1:
            printf("Enter Item: ");
            scanf("%d", &item);
            Ins_LIFO(item);
            break;
        case 2:
            Del_LIFO();
            break;
        case 3:
            Display();
            break;
        case 4:
            break;
        default:
            printf("\\nInvalid Input");
        }
    } while (ch != 4);
    return 0;
}
int main()
{
    int ch;
    do
    {
        printf("\\nPress 1 for LIFO Procedure");
        printf("\\nPress 2 for FIFO Procedure");
        printf("\\nPress 3 for Exit: ");
        scanf("%d", &ch);
        switch (ch)
        {
        case 1:
            LIFO();
            break;
        case 2:
            FIFO();
            break;
        case 3:
            break;
        default:
            printf("\\nInvalid Input");
        }
    } while (ch != 3);
    return 0;
}`,
          },
        ],
      },
      // p-8 Write a program to perform following doubly link list operations
      {
        key: "doubly-link-link-op",
        name: "Practical - 8: Write a program to perform following doubly link list operations",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 8 - Doubly Link List Op",
          },
          {
            type: "code",
            fileName: "doubly_link_list.c",
            value: `#include <stdio.h>
#include <stdlib.h>
struct Node
{
    int data;
    struct Node *prev;
    struct Node *next;
} *start;
// Insert a new node at the end
void insert(int data)
{
    struct Node *first, *newnode;
    newnode = (struct Node *)malloc(sizeof(struct Node));
    newnode->data = data;
    newnode->next = NULL;
    newnode->prev = NULL;
    if (start == NULL)
        start = newnode;
    else
    {
        first = start;
        while (first->next != NULL)
            first = first->next;
        newnode->prev = first;
        first->next = newnode;
    }
}
// Delete a node with a given key
void delete(int key)
{
    struct Node *temp;
    if (start == NULL)
    {
        printf("List is empty.\\n");
        return;
    }
    temp = start;
    while (temp != NULL && temp->data != key)
        temp = temp->next;
    if (temp->data != key)
    {
        printf("Element %d not found.\\n", key);
        return;
    }
    if (temp->prev)
        temp->prev->next = temp->next;
    else
        start = temp->next;
    if (temp->next)
        temp->next->prev = temp->prev;
    printf("Element %d deleted.\\n", key);
}
// Search for a node with a given key
int search(int key)
{
    struct Node *temp;
    temp = start;
    while (temp->next != NULL)
    {
        if (temp->data == key)
            return 1;
        temp = temp->next;
    }
    return 0;
}
// Reverse the list
void reverse()
{
    if (start == NULL)
    {
        printf("List is empty.\\n");
        return;
    }
    struct Node *temp = NULL;
    struct Node *current;
    current = start;
    while (current)
    {
        temp = current->prev;
        current->prev = current->next;
        current->next = temp;
        current = current->prev;
    }
    if (temp)
        start = temp->prev;
}
// Display the list
void display()
{
    struct Node *temp = start;
    printf("\\n\t\t\tPREV\t\t\t ADD\t\t INFO\t\t\tNEXT\\n");
    while (temp != NULL)
    {
        printf("\t\t%10u", temp->prev);
        printf("\t\t%10u", temp);
        printf("\t%10d", temp->data);
        printf("\t\t%10u\\n", temp->next);
        temp = temp->next;
    }
}
int main()
{
    int choice, data, key, found;
    do
    {
        printf("\\nDoubly Linked List Operations:\\n");
        printf("1. Insert\\n2. Delete\\n3. Search\\n4. Reverse\\n5. Display\\n6. Exit\\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("Enter data to insert: ");
            scanf("%d", &data);
            insert(data);
            break;
        case 2:
            printf("Enter data to delete: ");
            scanf("%d", &key);
            delete (key);
            break;
        case 3:
            printf("Enter data to search: ");
            scanf("%d", &key);
            found = search(key);
            if (found)
                printf("Element %d found in the list.\\n", key);
            else
                printf("Element %d not found in the list.\\n", key);
            break;
        case 4:
            reverse();
            printf("List reversed.\\n");
            break;
        case 5:
            printf("List contents: ");
            display();
            break;
        case 6:
            printf("Exiting...\\n");
            break;
        default:
            printf("Invalid choice. Try again.\\n");
        }
    } while (choice != 6);
    return 0;
}`,
          },
        ],
      },
      // p- 9 polynomials
      {
        key: "polynomials",
        name: "Practical - 9: Write a program to add two polynomials",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 9 - Program to add Two Polynomials",
          },
          {
            type: "code",
            fileName: "polynomials.c",
            value: `#include <stdio.h>
#define MAX 100 // Maximum degree of the polynomial
void inputPolynomial(int poly[], int degree)
{
    for (int i = degree; i >= 0; i--)
    {
        printf("Enter coefficient for x^%d: ", i);
        scanf("%d", &poly[i]);
    }
}
void addPolynomials(int poly1[], int poly2[], int result[], int maxDegree)
{
    for (int i = 0; i <= maxDegree; i++)
        result[i] = poly1[i] + poly2[i];
}
void printPolynomial(int poly[], int degree)
{
    for (int i = degree; i >= 0; i--)
    {
        if (poly[i] != 0)
        {
            printf("%d", poly[i]);
            if (i > 0)
                printf("x^%d", i);
            if (i > 0 && poly[i - 1] > 0)
                printf(" + ");
        }
    }
    printf("\\n");
}
void main()
{
    int poly1[MAX] = {0}, poly2[MAX] = {0}, result[MAX] = {0};
    int degree1, degree2, maxDegree;
    // Input first polynomial
    printf("Enter degree of the first polynomial: ");
    scanf("%d", &degree1);
    printf("Enter coefficients for the first polynomial:\\n");
    inputPolynomial(poly1, degree1);
    // Input second polynomial
    printf("Enter degree of the second polynomial: ");
    scanf("%d", &degree2);
    printf("Enter coefficients for the second polynomial:\\n");
    inputPolynomial(poly2, degree2);
    // Determine maximum degree
    if (degree1 > degree2)
        maxDegree = degree1;
    else
        maxDegree = degree2;
    // Add the polynomials
    addPolynomials(poly1, poly2, result, maxDegree);
    // Print result
    printf("First polynomial is: ");
    printPolynomial(poly1, maxDegree);
    printf("Second polynomial is: ");
    printPolynomial(poly2, maxDegree);
    printf("Sum of the polynomials is: ");
    printPolynomial(result, maxDegree);
}`,
          },
        ],
      },
      // p -10 Circular Link List
      {
        key: "circular-link-list",
        name: "Practical - 10 : Write a program to perform following circular link list operations",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical  10 - Circular Link List",
          },
          {
            type: "code",
            fileName: "circular_link_list.c",
            value: `#include <stdio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *link;
} *start;
// Insert a new node at the end
void Insert(int data)
{
    struct node *first, *newnode;
    newnode = (struct node *)malloc(sizeof(struct node));
    newnode->data = data;
    if (start == NULL)
    {
        start = newnode;
        start->link = start;
    }
    else
    {
        first = start;
        while (first->link != start)
            first = first->link;
        first->link = newnode;
        newnode->link = start;
    }
}
// Delete a node with a given key
void Delete(int item)
{
    struct node *old, *temp;
    temp = start;
    do
    {
        if (temp->data == item)
        {
            while (temp->link != start)
                temp = temp->link;
            temp->link = start->link;
            start = start->link;
            return;
        }
        else
        {
            while (temp->link != start && temp->data != item)
            {
                old = temp;
                temp = temp->link;
            }
            if (temp->link == start && temp->data == item)
            {
                old->link = start;
                return;
            }
            else if (temp->data == item)
            {
                old->link = temp->link;
                return;
            }
            else
            {
                printf("\\n\\nElement %d not Found", item);
                return;
            }
        }
    } while (temp != start);
}
void Display()
{
    struct node *temp = start;
    printf("\\n\tADDRESS\t INFO\tLINK\\n");
    do
    {
        printf("\t%u", temp);
        printf("\t%d", temp->data);
        printf("\t%u\\n", temp->link);
        temp = temp->link;
    } while (temp != start);
}
int main()
{
    int choice, data, key, found;
    do
    {
        printf("\\nCircular Linked List Operations:\\n");
        printf("1. Insert\\n2. Delete\\n3. Display\\n4. Exit\\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("Enter data to insert: ");
            scanf("%d", &data);
            Insert(data);
            break;
        case 2:
            printf("Enter data to delete: ");
            scanf("%d", &key);
            Delete(key);
            break;
        case 3:
            printf("List contents: ");
            Display();
            break;
        case 4:
            printf("Exiting...\\n");
            break;
        default:
            printf("Invalid choice. Try again.\\n");
        }
    } while (choice != 4);
    return 0;
}`,
          },
        ],
      },
      // p -11 binary in, pre, post order
      {
        key: "binary-tree",
        name: "Practical - 11: Write a program to create a binary search tree and print its element in",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 11 - Binary Tree Inorder, Preorder & Postorder",
          },
          {
            type: "code",
            fileName: "in_pre_post_oreder.c",
            value: `#include <stdio.h>
#include <stdlib.h>
// Node structure for the binary search tree
struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
} Node;
// Function to create a new node
struct Node *createNode(int data)
{
    struct Node *newNode = (struct Node *)malloc(sizeof(Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}
// Function to insert a node into the binary search tree
struct Node *insertNode(struct Node *root, int data)
{
    if (root == NULL)
        return createNode(data);
    if (data < root->data)
        root->left = insertNode(root->left, data);
    else if (data > root->data)
        root->right = insertNode(root->right, data);
    return root;
}
// Function for inorder traversal (Left, Root, Right)
void inorderTraversal(struct Node *root)
{
    if (root != NULL)
    {
        inorderTraversal(root->left);
        printf("%d ", root->data);
        inorderTraversal(root->right);
    }
}
// Function for preorder traversal (Root, Left, Right)
void preorderTraversal(struct Node *root)
{
    if (root != NULL)
    {
        printf("%d ", root->data);
        preorderTraversal(root->left);
        preorderTraversal(root->right);
    }
}
// Function for postorder traversal (Left, Right, Root)
void postorderTraversal(struct Node *root)
{
    if (root != NULL)
    {
        postorderTraversal(root->left);
        postorderTraversal(root->right);
        printf("%d ", root->data);
    }
}
int main()
{
    struct Node *root = NULL;
    int choice, data;
    while (1)
    {
        printf("Binary Search Tree Operations\\n");
        printf("1. Insert Node\\n");
        printf("2. Inorder Traversal\\n");
        printf("3. Preorder Traversal\\n");
        printf("4. Postorder Traversal\\n");
        printf("5. Exit\\n");
        printf("\\nEnter your choice: ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("Enter the value to insert: ");
            scanf("%d", &data);
            root = insertNode(root, data);
            break;
        case 2:
            printf("Inorder Traversal: ");
            inorderTraversal(root);
            printf("\\n");
            break;
        case 3:
            printf("Preorder Traversal: ");
            preorderTraversal(root);
            printf("\\n");
            break;
        case 4:
            printf("Postorder Traversal: ");
            postorderTraversal(root);
            printf("\\n");
            break;
        case 5:
            printf("Exiting program.\\n");
            exit(0);
        default:
            printf("Invalid choice! Please try again.\\n");
        }
    }
    return 0;
}`,
          },
        ],
      },
      // p - 12 B/ B+ tree
      {
        key: "b-b+-tree",
        name: "Practical - 12: Write a program for insertion of a node in B tree / B+ tree",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 12 - B & B+ Tree ",
          },
          {
            type: "code",
            fileName: "b_trre.c",
            value: `#include <stdio.h>
#include <stdlib.h>
#define MAX 3         // Maximum number of keys in a node
#define MIN (MAX / 2) // Minimum degree of the tree
struct BTNode
{
    int keys[MAX];
    struct BTNode *children[MAX + 1];
    int n;    // Number of keys in the node
    int leaf; // 1 if leaf, 0 otherwise
} BTNode;
struct BTNode *createNode(int leaf)
{
    struct BTNode *New = (struct BTNode *)malloc(sizeof(BTNode));
    New->leaf = leaf;
    New->n = 0;
    for (int i = 0; i <= MAX; i++)
        New->children[i] = NULL;
    return New;
}
// Split a full child node
void splitChild(struct BTNode *parent, int i, struct BTNode *fullChild)
{
    struct BTNode *newChild = createNode(fullChild->leaf);
    newChild->n = MIN;
    // Move the second half of keys to the new child
    for (int j = 0; j < MIN; j++)
        newChild->keys[j] = fullChild->keys[j + MIN + 1];
    // Move children if not a leaf
    if (!fullChild->leaf)
    {
        for (int j = 0; j <= MIN; j++)
            newChild->children[j] = fullChild->children[j + MIN + 1];
    }
    fullChild->n = MIN;
    // Make space for the new child in the parent
    for (int j = parent->n; j >= i + 1; j--)
        parent->children[j + 1] = parent->children[j];
    parent->children[i + 1] = newChild;
    // Move the middle key of fullChild to the parent
    for (int j = parent->n - 1; j >= i; j--)
        parent->keys[j + 1] = parent->keys[j];
    parent->keys[i] = fullChild->keys[MIN];
    parent->n++;
}
// Insert non-full node
void insertNonFull(struct BTNode *node, int key)
{
    int i = node->n - 1;
    if (node->leaf)
    {
        // Insert the key into the correct position
        while (i >= 0 && key < node->keys[i])
        {
            node->keys[i + 1] = node->keys[i];
            i--;
        }
        node->keys[i + 1] = key;
        node->n++;
    }
    else
    {
        // Find the child to insert the key into
        while (i >= 0 && key < node->keys[i])
            i--;
        i++;
        // If the child is full, split it
        if (node->children[i]->n == MAX)
        {
            splitChild(node, i, node->children[i]);
            if (key > node->keys[i])
                i++;
        }
        insertNonFull(node->children[i], key);
    }
}
// Insert key into the B-tree
struct BTNode *insert(struct BTNode *root, int key)
{
    if (root->n == MAX)
    {
        // Root is full; split it
        struct BTNode *newRoot = createNode(0);
        newRoot->children[0] = root;
        splitChild(newRoot, 0, root);
        // Decide which child to insert into
        int i = (key > newRoot->keys[0]) ? 1 : 0;
        insertNonFull(newRoot->children[i], key);
        return newRoot;
    }
    else
    {
        insertNonFull(root, key);
        return root;
    }
}
// Utility function to print the B-tree
void printTree(struct BTNode *root, int level)
{
    if (root)
    {
        printf("Level %d: ", level);
        for (int i = 0; i < root->n; i++)
        {
            printf("%d ", root->keys[i]);
        }
        printf("\\n");
        for (int i = 0; i <= root->n; i++)
        {
            printTree(root->children[i], level + 1);
        }
    }
}
int main()
{
    struct BTNode *root = createNode(1); // Start with an empty tree
    // Insert keys into the B-tree
    int keys[] = {10, 20, 5, 6, 12, 30, 7, 17};
    int n = sizeof(keys) / sizeof(keys[0]);
    for (int i = 0; i < n; i++)
    {
        root = insert(root, keys[i]);
    }
    // Print the B-tree
    printf("B-tree structure:\\n");
    printTree(root, 0);
    return 0;
}`,
          },
          {
            type: "code",
            fileName: "b+_trre.c",
            value: `#include <stdio.h>
#include <stdlib.h>
#define MAX_KEYS 3              // Max number of keys in a node (order of the tree)
#define MIN_KEYS (MAX_KEYS / 2) // Minimum number of keys
struct Node
{
    int keys[MAX_KEYS + 1];              // Array to hold keys (1 extra for split)
    struct Node *children[MAX_KEYS + 2]; // Array of child pointers
    int isLeaf;                          // 1 if leaf, 0 otherwise
    int numKeys;                         // Current number of keys
    struct Node *next;                   // Pointer to the next leaf (for leaf nodes)
} Node;
// Function prototypes
struct Node *createNode(int isLeaf);
void insert(struct Node **root, int key);
void splitChild(struct Node *parent, int index, struct Node *child);
void insertNonFull(struct Node *node, int key);
void printTree(struct Node *root);
// Create a new node
struct Node *createNode(int isLeaf)
{
    struct Node *node = (struct Node *)malloc(sizeof(Node));
    node->isLeaf = isLeaf;
    node->numKeys = 0;
    for (int i = 0; i < MAX_KEYS + 2; i++)
        node->children[i] = NULL;
    node->next = NULL;
    return node;
}
// Insert a key into the B+ tree
void insert(struct Node **root, int key)
{
    struct Node *r = *root;
    if (r == NULL)
    {
        // Create a new root if the tree is empty
        *root = createNode(1);
        (*root)->keys[0] = key;
        (*root)->numKeys = 1;
    }
    else
    {
        if (r->numKeys == MAX_KEYS)
        {
            // Root is full; split
            struct Node *s = createNode(0); // New root
            s->children[0] = r;
            splitChild(s, 0, r);
            *root = s;
            insertNonFull(s, key);
        }
        else
            insertNonFull(r, key);
    }
}
// Split a child node
void splitChild(struct Node *parent, int index, struct Node *child)
{
    struct Node *newChild = createNode(child->isLeaf);
    newChild->numKeys = MIN_KEYS;
    // Move the second half of keys to the new child
    for (int i = 0; i < MIN_KEYS; i++)
        newChild->keys[i] = child->keys[i + MIN_KEYS + 1];
    if (!child->isLeaf)
    {
        for (int i = 0; i <= MIN_KEYS; i++)
            newChild->children[i] = child->children[i + MIN_KEYS + 1];
    }
    child->numKeys = MIN_KEYS;
    // Insert the new child into the parent
    for (int i = parent->numKeys; i > index; i--)
    {
        parent->children[i + 1] = parent->children[i];
        parent->keys[i] = parent->keys[i - 1];
    }
    parent->children[index + 1] = newChild;
    parent->keys[index] = child->keys[MIN_KEYS];
    parent->numKeys++;
}
// Insert a key into a non-full node
void insertNonFull(struct Node *node, int key)
{
    int i = node->numKeys - 1;
    if (node->isLeaf)
    {
        // Insert into the leaf
        while (i >= 0 && key < node->keys[i])
        {
            node->keys[i + 1] = node->keys[i];
            i--;
        }
        node->keys[i + 1] = key;
        node->numKeys++;
    }
    else
    {
        // Find the child to insert into
        while (i >= 0 && key < node->keys[i])
            i--;
        i++;
        if (node->children[i]->numKeys == MAX_KEYS)
        {
            splitChild(node, i, node->children[i]);
            if (key > node->keys[i])
                i++;
        }
        insertNonFull(node->children[i], key);
    }
}
// Print the B+ tree
void printTree(struct Node *root)
{
    if (root != NULL)
    {
        for (int i = 0; i < root->numKeys; i++)
            printf("%d ", root->keys[i]);
        printf("\\n");
        if (!root->isLeaf)
        {
            for (int i = 0; i <= root->numKeys; i++)
                printTree(root->children[i]);
        }
    }
}
// Main function
int main()
{
    struct Node *root = NULL;
    int keys[] = {10, 20, 5, 6, 12, 30, 7, 17};
    int n = sizeof(keys) / sizeof(keys[0]);
    for (int i = 0; i < n; i++)
        insert(&root, keys[i]);
    printf("B+ Tree:\\n");
    printTree(root);
    return 0;
}`,
          },
        ],
      },
      // p - 13 graph dfc/bfs
      {
        key: "graph-bfs-dfs",
        name: "Practical - 13: Write a program to create a graph in a adjacency list structure traverse it in",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical  13- Graph BFS / DFS",
          },
          {
            type: "code",
            fileName: "dfc_bfs.c",
            value: `// Program: 13 Write a program to create a graph in a adjacency list //structure traverse it in
// a. DFS b. BFS
#include <stdio.h>
#include <stdlib.h>
#define MAX_VERTICES 100
// Graph structure
struct Graph
{
    int numVertices;
    int adjList[MAX_VERTICES][MAX_VERTICES]; // Adjacency list //represented as an array
    int visited[MAX_VERTICES];
} Graph;
// Function prototypes
void createGraph(struct Graph *graph, int vertices);
void addEdge(struct Graph *graph, int src, int dest);
void DFS(struct Graph *graph, int vertex);
void BFS(struct Graph *graph, int startVertex);
void resetVisited(struct Graph *graph);
// Create a graph with the given number of vertices
void createGraph(struct Graph *graph, int vertices)
{
    graph->numVertices = vertices;
    for (int i = 0; i < vertices; i++)
    {
        for (int j = 0; j < vertices; j++)
            graph->adjList[i][j] = 0;
        graph->visited[i] = 0;
    }
}
// Add an edge to the graph
void addEdge(struct Graph *graph, int src, int dest)
{
    graph->adjList[src][dest] = 1;
    graph->adjList[dest][src] = 1; // For undirected graph
}
// Depth First Search (DFS)
void DFS(struct Graph *graph, int vertex)
{
    graph->visited[vertex] = 1;
    printf("%d ", vertex);
    for (int i = 0; i < graph->numVertices; i++)
    {
        if (graph->adjList[vertex][i] == 1 && !graph->visited[i])
            DFS(graph, i);
    }
}
// Breadth First Search (BFS)
void BFS(struct Graph *graph, int startVertex)
{
    int queue[MAX_VERTICES];
    int front = 0, rear = 0;
    graph->visited[startVertex] = 1;
    queue[rear++] = startVertex;
    while (front < rear)
    {
        int curVertex = queue[front++];
        printf("%d ", curVertex);
        for (int i = 0; i < graph->numVertices; i++)
        {
            if (graph->adjList[curVertex][i] == 1 && !graph->visited[i])
            {
                graph->visited[i] = 1;
                queue[rear++] = i;
            }
        }
    }
}
// Reset visited array for reuse
void resetVisited(struct Graph *graph)
{
    for (int i = 0; i < graph->numVertices; i++)
        graph->visited[i] = 0;
}
// Main function
int main()
{
    struct Graph graph;
    int vertices = 6; // Number of vertices
    createGraph(&graph, vertices);
    addEdge(&graph, 0, 1);
    addEdge(&graph, 0, 2);
    addEdge(&graph, 1, 3);
    addEdge(&graph, 1, 4);
    addEdge(&graph, 2, 4);
    addEdge(&graph, 3, 5);
    addEdge(&graph, 4, 5);
    printf("DFS traversal starting from vertex 0:\\n");
    DFS(&graph, 0);
    printf("\\n");
    resetVisited(&graph);
    printf("BFS traversal starting from vertex 0:\\n");
    BFS(&graph, 0);
    printf("\\n");
    return 0;
}`,
          },
        ],
      },
      // p - 14 sorting
      {
        key: "sorting",
        name: "Practical - 14: Write a program to perform following sort",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 14 - All Sorting",
          },
          {
            type: "code",
            fileName: "all_sorts.c",
            value: `#include <stdio.h>
#include <stdlib.h>
// Function prototypes
void bubbleSort(int arr[], int n);
void selectionSort(int arr[], int n);
void insertionSort(int arr[], int n);
void shellSort(int arr[], int n);
void quickSort(int arr[], int low, int high);
void heapSort(int arr[], int n);
void mergeSort(int arr[], int low, int high);
void radixSort(int arr[], int n);
// Helper functions
void swap(int *a, int *b);
int partition(int arr[], int low, int high);
void heapify(int arr[], int n, int i);
void merge(int arr[], int low, int mid, int high);
int getMax(int arr[], int n);
void countSort(int arr[], int n, int exp);
void printArray(int arr[], int n);
void main()
{
    int arr[100], n, choice, i;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    printf("Enter the elements of the array:\\n");
    for (i = 0; i < n; i++)
        scanf("%d", &arr[i]);
    printf("Choose a sorting algorithm:\\n");
    printf("1. Bubble Sort\\n2. Selection Sort\\n3. Insertion Sort\\n");
    printf("4. Shell Sort\\n5. Quick Sort\\n6. Heap Sort\\n");
    printf("7. Merge Sort\\n8. Radix Sort\\n");
    scanf("%d", &choice);
    switch (choice)
    {
    case 1:
        bubbleSort(arr, n);
        break;
    case 2:
        selectionSort(arr, n);
        break;
    case 3:
        insertionSort(arr, n);
        break;
    case 4:
        shellSort(arr, n);
        break;
    case 5:
        quickSort(arr, 0, n - 1);
        break;
    case 6:
        heapSort(arr, n);
        break;
    case 7:
        mergeSort(arr, 0, n - 1);
        break;
    case 8:
        radixSort(arr, n);
        break;
    default:
        printf("Invalid choice!\\n");
        // return 1;
    }
    printf("Sorted array:\\n");
    printArray(arr, n);
}
// Function definitions
void bubbleSort(int arr[], int n)
{
    int i, j;
    for (i = 0; i < n - 1; i++)
    {
        for (j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
                swap(&arr[j], &arr[j + 1]);
        }
    }
}
void selectionSort(int arr[], int n)
{
    int i, j, minIndex;
    for (int i = 0; i < n - 1; i++)
    {
        minIndex = i;
        for (j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }
        swap(&arr[i], &arr[minIndex]);
    }
}
void insertionSort(int arr[], int n)
{
    int key, j;
    for (int i = 1; i < n; i++)
    {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
void shellSort(int arr[], int n)
{
    int j, temp, gap;
    for (gap = n / 2; gap > 0; gap /= 2)
    {
        for (int i = gap; i < n; i++)
        {
            temp = arr[i];
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                arr[j] = arr[j - gap];
            arr[j] = temp;
        }
    }
}
void quickSort(int arr[], int low, int high)
{
    int pi;
    if (low < high)
    {
        pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
int partition(int arr[], int low, int high)
{
    int pivot = arr[high];
    int i = low = 1, j;
    for (int j = low; j < high; j++)
    {
        if (arr[j] <= pivot)
        {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return i + 1;
}
void heapSort(int arr[], int n)
{
    int i;
    for (i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (i = n - 1; i > 0; i--)
    {
        swap(&arr[0], &arr[i]);
        heapify(arr, i, 0);
    }
}
void heapify(int arr[], int n, int i)
{
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;
    if (largest != i)
    {
        swap(&arr[i], &arr[largest]);
        heapify(arr, n, largest);
    }
}
void mergeSort(int arr[], int low, int high)
{
    int mid;
    if (low < high)
    {
        mid = low + (high - low) / 2;
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }
}
void merge(int arr[], int low, int mid, int high)
{
    int n1 = mid - low + 1;
    int n2 = high - mid;
    int left[n1], right[n2];
    int i = 0, j = 0, k;
    for (int i = 0; i < n1; i++)
        left[i] = arr[low + i];
    for (int i = 0; i < n2; i++)
        right[i] = arr[mid + 1 + i];
    k = low;
    while (i < n1 && j < n2)
    {
        if (left[i] <= right[j])
            arr[k++] = left[i++];
        else
            arr[k++] = right[j++];
    }
    while (i < n1)
        arr[k++] = left[i++];
    while (j < n2)
        arr[k++] = right[j++];
}
void radixSort(int arr[], int n)
{
    int max = getMax(arr, n);
    for (int exp = 1; max / exp > 0; exp *= 10)
        countSort(arr, n, exp);
}
int getMax(int arr[], int n)
{
    int max = arr[0];
    for (int i = 1; i < n; i++)
    {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}
void countSort(int arr[], int n, int exp)
{
    int output[n];
    int count[10] = {0};
    for (int i = 0; i < n; i++)
        count[(arr[i] / exp) % 10]++;
    for (int i = 1; i < 10; i++)
        count[i] += count[i - 1];
    for (int i = n - 1; i >= 0; i--)
    {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }
    for (int i = 0; i < n; i++)
        arr[i] = output[i];
}
void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}
void printArray(int arr[], int n)
{
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\\n");
}`,
          },
        ],
      },
      // p - 15 searching
      {
        key: "searching",
        name: "Practical - 15:Write a program to search an element using",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 15 - Liner & Binary Search",
          },
          {
            type: "code",
            fileName: "liner_binary_search.c",
            value: `#include <stdio.h>
// Function prototypes
int linearSearch(int arr[], int n, int key);
int binarySearch(int arr[], int low, int high, int key);
// Helper function to sort the array (for binary search)
void bubbleSort(int arr[], int n);
void main()
{
    int arr[100], n, choice, key, result, i;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    printf("Enter the elements of the array:\\n");
    for (i = 0; i < n; i++)
        scanf("%d", &arr[i]);
    printf("Select any search method:\\n");
    printf("1. Linear Search\\n2. Binary Search\\n");
    scanf("%d", &choice);
    printf("Enter the element to search: ");
    scanf("%d", &key);
    if (choice == 1)
        result = linearSearch(arr, n, key);
    else if (choice == 2)
    {
        bubbleSort(arr, n);
        printf("Array sorted for Binary Search.\\n");
        result = binarySearch(arr, 0, n - 1, key);
    }
    else
    {
        printf("Invalid choice!\\n");
        // return 1;
    }
    if (result != -1)
        printf("Element found at index %d\\n", result);
    else
        printf("Element not found in the array.\\n");
}
// Linear Search function
int linearSearch(int arr[], int n, int key)
{
    int i;
    for (i = 0; i < n; i++)
    {
        if (arr[i] == key)
            return i;
    }
    return -1; // Means element not found
}
int binarySearch(int arr[], int low, int high, int key)
{
    int mid;
    while (low <= high)
    {
        mid = low + (high - low) / 2;
        if (arr[mid] == key)
            return mid; // Element found
        if (arr[mid] < key)
            low = mid + 1; // Search in the right half
        else
            high = mid - 1; // Search in the left half
    }
    return -1; // Element not found
}
// Bubble Sort function to sort the array for Binary Search
void bubbleSort(int arr[], int n)
{
    int temp, i, j;
    for (i = 0; i < n - 1; i++)
    {
        for (j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,
          },
        ],
      },
    ],
  },
  //   PHP
  {
    subject_name: "PHP",
    key: "php",
    specialization: null,
    language: "php",
    practicals: [
      //  p-1
      {
        key: "personal-profile-design",
        name: "Practical - 1: Personal Profile Design Using HTML & CSS",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 1 - Personal Profile Design Using HTML & CSS",
          },
          {
            type: "code",
            fileName: "personal_profile_design.php",
            value: `<?php
$name = "Ayush Gandhi";
$role = "Back-end Developer";
$email = "ayush@example.com";
$phone = "+91 98765 43210";
$edu = [
    ["BCA", "XYZ University", "2025"],
    ["12th", "ABC School", "2022"],
    ["10th", "ABC School", "2020"]
];
$pic = "profile.jpg";
$workspace = "http://localhost/workspace/";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Profile</title>
</head>
<body>
    <h2>Profile Page</h2>
    <img src="<?= $pic ?>" width="120"><br>
    <b>Name:</b> <?= $name ?><br>
    <b>Role:</b> <?= $role ?><br>
    <b>Email:</b> <?= $email ?><br>
    <b>Phone:</b> <?= $phone ?><br>

    <h3>Education</h3>
    <table border="1" cellpadding="5">
        <tr>
            <th>Degree</th>
            <th>College</th>
            <th>Year</th>
        </tr>
        <?php
        foreach ($edu as $e) {
            echo "<tr>
                    <td>{$e[0]}</td>
                    <td>{$e[1]}</td>
                    <td>{$e[2]}</td>
                  </tr>";
        }
        ?>
    </table>

    <h3>Workspace</h3>
    <a href="<?= $workspace ?>">My Workspace</a>
</body>
</html>
`,
          },
        ],
      },
      //  p-2
      {
        key: "web-page-design-with-css",
        name: "Practical - 2: Web Page Design Using CSS",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 2 - Web Page Design Using CSS",
          },
          {
            type: "code",
            fileName: "web_page_design.php",
            value: `<!DOCTYPE html>
<html>
<head>
    <title>My Styled PHP Page</title>
    <style>
        /* CSS Tags */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        h1, h2, h3 {
            color: #333;
            text-align: center;
        }

        /* CSS Class */
        .container {
            width: 80%;
            margin: auto;
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
        }

        .btn {
            display: inline-block;
            background: #007BFF;
            color: white;
            padding: 8px 15px;
            border-radius: 5px;
            text-decoration: none;
        }

        .btn:hover {
            background: #0056b3;
        }

        /* CSS Grouping */
        p, li {
            font-size: 16px;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1><?php echo "Welcome to My PHP Website"; ?></h1>
        <p>This page is styled using a general stylesheet (merged into this file).</p>

        <h2>Features</h2>
        <ul>
            <li>Reusable CSS classes</li>
            <li>Grouped selectors for efficiency</li>
            <li>Consistent design in one file</li>
        </ul>

        <a href="#" class="btn">Sample Button</a>
    </div>
</body>
</html>
`,
          },
        ],
      },
      //  p-3
      {
        key: "admission-registration-form",
        name: "Practical - 3: Admission Registration Form",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 3 - Admission Registration Form",
          },
          {
            type: "code",
            fileName: "registration_form.php",
            value: `<!DOCTYPE html>
<html>
<head>
    <title>Admission Registration Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
        }

        .container {
            width: 40%;
            margin: auto;
            background: white;
            padding: 20px;
            margin-top: 50px;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
        }

        h2 {
            text-align: center;
            color: #333;
        }

        input, select {
            width: 95%;
            padding: 8px;
            margin: 8px 0;
            border-radius: 5px;
            border: 1px solid #aaa;
        }

        .btn {
            background: #007BFF;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            width: 100%;
            border-radius: 5px;
        }

        .btn:hover {
            background: #0056b3;
        }

        .result {
            margin-top: 20px;
            padding: 15px;
            background: #eaf3ff;
            border-left: 4px solid #007BFF;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Admission Registration Form</h2>

        <form method="post">
            <label>Full Name:</label>
            <input type="text" name="name" required>

            <label>Email:</label>
            <input type="email" name="email" required>

            <label>Phone Number:</label>
            <input type="text" name="phone" required>

            <label>Course Applied:</label>
            <select name="course" required>
                <option value="">-- Select Course --</option>
                <option value="BCA">BCA</option>
                <option value="BSc CS">B.Sc Computer Science</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>
            </select>

            <label>Date of Birth:</label>
            <input type="date" name="dob" required>

            <input type="submit" class="btn" value="Register">
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $course = $_POST['course'];
            $dob = $_POST['dob'];

            echo "<div class='result'>";
            echo "<h3>Registration Successful!</h3>";
            echo "<p><strong>Name:</strong> $name</p>";
            echo "<p><strong>Email:</strong> $email</p>";
            echo "<p><strong>Phone:</strong> $phone</p>";
            echo "<p><strong>Course:</strong> $course</p>";
            echo "<p><strong>DOB:</strong> $dob</p>";
            echo "</div>";
        }
        ?>
    </div>
</body>
</html>
`,
          },
        ],
      },
      //  p-4
      {
        key: "type-conversion",
        name: "Practical - 4: Type Conversion through script",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 4 - Type Conversion through script",
          },
          {
            type: "code",
            fileName: "type_conversion.php",
            value: `<!DOCTYPE html>
<html>
<head>
    <title>Type Conversion</title>
    <style>
        table {
            border-collapse: collapse;
            width: 70%;
            margin: auto;
        }

        th, td {
            border: 1px solid black;
            padding: 6px;
            text-align: center;
        }

        th {
            background: #007BFF;
            color: white;
        }
    </style>
</head>
<body>
    <h2 style="text-align:center;">PHP Type Conversion</h2>

    <table>
        <tr>
            <th>Variable Name</th>
            <th>Variable Type</th>
            <th>Converted Type</th>
            <th>Converted Value</th>
        </tr>

        <?php
        $num = 100;     // integer
        $str = "250";   // string

        $vars = [
            "num" => $num,
            "str" => $str
        ];

        $types = ["integer", "double", "string", "boolean"];

        foreach ($vars as $name => $value) {
            $originalType = gettype($value);

            foreach ($types as $t) {
                $converted = $value;
                settype($converted, $t);

                echo "
                <tr>
                    <td>$name</td>
                    <td>$originalType</td>
                    <td>$t</td>
                    <td>" . var_export($converted, true) . "</td>
                </tr>";
            }
        }
        ?>
    </table>
</body>
</html>
`,
          },
        ],
      },
      //  p-5
      {
        key: "course-details-web-page",
        name: "Practical - 5: Course Details Web Page",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 5 - Course Details Web Page",
          },
          {
            type: "code",
            fileName: "course_details.php",
            value: `<!DOCTYPE html>
<html>
<head>
    <title>Course Details</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            text-align: center;
            margin-top: 50px;
        }

        h2 {
            color: #333;
        }

        .course {
            font-size: 20px;
            font-weight: bold;
            margin: 10px;
        }

        .c1 { color: red; }
        .c2 { color: green; }
        .c3 { color: blue; }
        .c4 { color: orange; }
        .c5 { color: purple; }
    </style>
</head>
<body>
    <h2>Course Details</h2>

    <?php
    $courses = ["BCA", "B.Sc Computer Science", "MCA", "MBA", "B.Com"];
    $colors = ["c1", "c2", "c3", "c4", "c5"];

    foreach ($courses as $i => $course) {
        $class = $colors[$i % count($colors)];
        echo "<div class='course $class'>$course</div>";
    }
    ?>
</body>
</html>
`,
          },
        ],
      },
      //  p-6
      {
        key: "string-operations",
        name: "Practical - 6: String Operations",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 6 - String Operations",
          },
          {
            type: "code",
            fileName: "string_operations.php",
            value: `<!DOCTYPE html>
<html>
<head>
    <title>String Operations</title>
    <style>
        table {
            border-collapse: collapse;
            width: 80%;
            margin: auto;
            margin-top: 40px;
        }

        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
        }

        th {
            background: #007BFF;
            color: white;
        }

        form {
            text-align: center;
            margin-top: 30px;
        }

        input[type="text"] {
            padding: 8px;
            margin: 5px;
            border-radius: 5px;
            border: 1px solid #aaa;
            width: 200px;
        }

        input[type="submit"] {
            padding: 8px 15px;
            background: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>
    <h2 style="text-align:center;">PHP String Operations</h2>

    <form method="post">
        <input type="text" name="str1" placeholder="Enter String 1" required>
        <input type="text" name="str2" placeholder="Enter String 2" required>
        <input type="submit" value="Perform Operations">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $str1 = $_POST['str1'];
        $str2 = $_POST['str2'];

        echo "<table>
                <tr>
                    <th>String Value 1</th>
                    <th>String Value 2</th>
                    <th>Operation</th>
                    <th>Result</th>
                </tr>";

        echo "<tr>
                <td>$str1</td>
                <td>$str2</td>
                <td>Concatenation</td>
                <td>" . ($str1 . $str2) . "</td>
              </tr>";

        echo "<tr>
                <td>$str1</td>
                <td>-</td>
                <td>Length of String 1</td>
                <td>" . strlen($str1) . "</td>
              </tr>";

        echo "<tr>
                <td>$str2</td>
                <td>-</td>
                <td>Length of String 2</td>
                <td>" . strlen($str2) . "</td>
              </tr>";

        echo "<tr>
                <td>$str1</td>
                <td>$str2</td>
                <td>Comparison (strcmp)</td>
                <td>" . strcmp($str1, $str2) . "</td>
              </tr>";

        echo "<tr>
                <td>$str1</td>
                <td>-</td>
                <td>Uppercase (Str1)</td>
                <td>" . strtoupper($str1) . "</td>
              </tr>";

        echo "<tr>
                <td>$str2</td>
                <td>-</td>
                <td>Lowercase (Str2)</td>
                <td>" . strtolower($str2) . "</td>
              </tr>";

        echo "<tr>
                <td>$str1</td>
                <td>-</td>
                <td>Reverse (Str1)</td>
                <td>" . strrev($str1) . "</td>
              </tr>";

        echo "<tr>
                <td>$str2</td>
                <td>-</td>
                <td>Reverse (Str2)</td>
                <td>" . strrev($str2) . "</td>
              </tr>";

        echo "<tr>
                <td>$str1</td>
                <td>-</td>
                <td>Substring (first 3 chars)</td>
                <td>" . substr($str1, 0, 3) . "</td>
              </tr>";

        echo "<tr>
                <td>$str2</td>
                <td>-</td>
                <td>Substring (first 3 chars)</td>
                <td>" . substr($str2, 0, 3) . "</td>
              </tr>";

        echo "</table>";
    }
    ?>
</body>
</html>
`,
          },
        ],
      },
      //  p-7
      {
        key: "login-and-signup-page",
        name: "Practical - 7: Login and Signup Page",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 7 - Login and Signup Page",
          },
          {
            type: "code",
            fileName: "login_signup.php",
            value: `<?php
session_start();

$page = $_GET['page'] ?? 'home';

if ($page == "login" && $_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_POST['username'] == "admin" && $_POST['password'] == "123") {
        $_SESSION['user'] = $_POST['username'];
        $page = "profile";
    } else {
        $error = "Invalid Login!";
    }
}

if ($page == "signup" && $_SERVER["REQUEST_METHOD"] == "POST") {
    $_SESSION['signup'] = $_POST['username'];
    $page = "registration";
}

if ($page == "logout") {
    session_destroy();
    header("Location:?page=home");
    exit();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login & Signup System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 40px;
            background: #f7f7f7;
        }

        form {
            display: inline-block;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        input {
            margin: 6px;
            padding: 8px;
            width: 200px;
        }

        input[type="submit"] {
            background: #007BFF;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 4px;
        }

        input[type="submit"]:hover {
            background: #0056b3;
        }

        a {
            color: #007BFF;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        p.error {
            color: red;
        }
    </style>
</head>
<body>
    <?php if ($page == "home"): ?>
        <h2>Welcome</h2>
        <a href="?page=login">Login</a> | <a href="?page=signup">Sign Up</a>

    <?php elseif ($page == "login"): ?>
        <h2>Login</h2>
        <form method="post">
            <input type="text" name="username" placeholder="Username" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <input type="submit" value="Login">
        </form>
        <p class="error"><?= $error ?? "" ?></p>
        <a href="?page=home">Back</a>

    <?php elseif ($page == "signup"): ?>
        <h2>Sign Up</h2>
        <form method="post">
            <input type="text" name="username" placeholder="Username" required><br>
            <input type="email" name="email" placeholder="Email" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <input type="submit" value="Sign Up">
        </form>
        <a href="?page=home">Back</a>

    <?php elseif ($page == "profile" && isset($_SESSION['user'])): ?>
        <h2>Welcome, <?= htmlspecialchars($_SESSION['user']) ?>!</h2>
        <p>This is your Profile Page.</p>
        <a href="?page=logout">Logout</a>

    <?php elseif ($page == "registration" && isset($_SESSION['signup'])): ?>
        <h2>Registration Page</h2>
        <p>Signup Successful for <b><?= htmlspecialchars($_SESSION['signup']) ?></b>. Complete registration:</p>
        <form>
            <input type="text" placeholder="Full Name"><br>
            <input type="text" placeholder="Course"><br>
            <input type="submit" value="Submit">
        </form>
        <a href="?page=home">Back</a>

    <?php else: ?>
        <h2>Access Denied</h2>
        <a href="?page=home">Home</a>
    <?php endif; ?>
</body>
</html>
`,
          },
        ],
      },
      //  p-8
      {
        key: "result-generator",
        name: "Practical - 8: Student Result Generation System",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 8 - Student Result Generation System",
          },
          {
            type: "code",
            fileName: "result_generator.php",
            value: `<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <title>Student Result System</title>
</head>
<body style="text-align:center;">
    <h2>Student Result Generation System</h2>
    <form method="post">
        <h3>Student Detail Entry</h3>
        Name: <input type="text" name="name" required>
        Roll: <input type="text" name="roll" required>
        Class: <input type="text" name="class" required><br><br>

        <h3>Marks Entry</h3>
        English: <input type="number" name="eng" required>
        Maths: <input type="number" name="math" required>
        Science: <input type="number" name="sci" required>
        Computer: <input type="number" name="comp" required><br><br>

        <input type="submit" name="submit" value="Generate Result">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $roll = $_POST['roll'];
        $class = $_POST['class'];

        $marks = [
            "English" => $_POST['eng'],
            "Maths" => $_POST['math'],
            "Science" => $_POST['sci'],
            "Computer" => $_POST['comp']
        ];

        $total = array_sum($marks);
        $per = $total / 4;

        echo "<h3>Marksheet</h3>
        Name: $name | Roll: $roll | Class: $class <br><br>
        <table border='1' cellpadding='5'>
            <tr><th>Subject</th><th>Marks</th></tr>";

        foreach ($marks as $sub => $m) {
            echo "<tr><td>$sub</td><td>$m</td></tr>";
        }

        echo "</table><br>Total: $total | Percentage: $per%<br>";

        if ($per >= 60) $res = "First Division";
        elseif ($per >= 45) $res = "Second Division";
        elseif ($per >= 33) $res = "Pass";
        else $res = "Fail";

        echo "Result: <b>$res</b><br><br>";
        echo "<h3>Result Analysis</h3>";
        echo "Highest: " . max($marks) . " | Lowest: " . min($marks) . " | Average: " . ($total / 4);
    }
    ?>
</body>
</html>
`,
          },
        ],
      },
      //  p-9
      {
        key: "date-and-time-functions",
        name: "Practical - 9: Date and Time Functions",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 9 - Date and Time Functions",
          },
          {
            type: "code",
            fileName: "date_time_functions.php",
            value: `<!DOCTYPE html>
<html>
<head>
    <title>Date & Time Functions</title>
    <style>
        table {
            border-collapse: collapse;
            width: 70%;
            margin: auto;
            margin-top: 40px;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
        }
        th {
            background: #007BFF;
            color: white;
        }
    </style>
</head>
<body>
    <h2 style="text-align:center;">PHP Date & Time Functions</h2>
    <table>
        <tr>
            <th>Given Date/Time</th>
            <th>Operation</th>
            <th>Result</th>
        </tr>
        <?php
        $now = date("Y-m-d H:i:s");
        echo "<tr><td>$now</td><td>Current Date & Time</td><td>$now</td></tr>";
        echo "<tr><td>$now</td><td>Current Date</td><td>" . date("d-m-Y") . "</td></tr>";
        echo "<tr><td>$now</td><td>Current Time</td><td>" . date("h:i:s A") . "</td></tr>";
        echo "<tr><td>$now</td><td>Day of Week</td><td>" . date("l") . "</td></tr>";
        echo "<tr><td>$now</td><td>Month</td><td>" . date("F") . "</td></tr>";
        echo "<tr><td>$now</td><td>Timestamp</td><td>" . time() . "</td></tr>";

        $future = strtotime("+7 days");
        echo "<tr><td>$now</td><td>Date after 7 Days</td><td>" . date("d-m-Y", $future) . "</td></tr>";

        $past = strtotime("-1 month");
        echo "<tr><td>$now</td><td>Date before 1 Month</td><td>" . date("d-m-Y", $past) . "</td></tr>";

        $custom = mktime(0, 0, 0, 12, 25, 2025);
        echo "<tr><td>25-Dec-2025</td><td>Custom Date</td><td>" . date("l, d F Y", $custom) . "</td></tr>";
        ?>
    </table>
</body>
</html>
`,
          },
        ],
      },
      //  p-10
      {
        key: "server-side-validation",
        name: "Practical - 10: Server Side Validation",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 10 -Server Side Validation",
          },
          {
            type: "code",
            fileName: "date_time_functions.php",
            value: `<?php
$nameErr = $emailErr = $phoneErr = $rollErr = "";
$name = $email = $phone = $roll = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!preg_match("/^[a-zA-Z ]+$/", $_POST['name']))
        $nameErr = "Only letters allowed!";
    else
        $name = $_POST['name'];

    if (!preg_match("/^[\w\.-]+@[\w\.-]+\.\w{2,6}$/", $_POST['email']))
        $emailErr = "Invalid email!";
    else
        $email = $_POST['email'];

    if (!preg_match("/^[0-9]{10}$/", $_POST['phone']))
        $phoneErr = "Enter 10 digit number!";
    else
        $phone = $_POST['phone'];

    if (!preg_match("/^[A-Za-z0-9]+$/", $_POST['roll']))
        $rollErr = "Only letters & digits!";
    else
        $roll = $_POST['roll'];
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Placement Registration</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
        }
        .error {
            color: red;
        }
    </style>
</head>
<body>
    <h2>Online Placement Registration Form</h2>
    <form method="post">
        Name: <input type="text" name="name" value="<?= $name ?>">
        <span class="error"><?= $nameErr ?></span><br><br>

        Email: <input type="text" name="email" value="<?= $email ?>">
        <span class="error"><?= $emailErr ?></span><br><br>

        Phone: <input type="text" name="phone" value="<?= $phone ?>">
        <span class="error"><?= $phoneErr ?></span><br><br>

        Roll No: <input type="text" name="roll" value="<?= $roll ?>">
        <span class="error"><?= $rollErr ?></span><br><br>

        <input type="submit" value="Register">
    </form>

    <?php
    if ($name && $email && $phone && $roll) {
        echo "<h3 style='color:green;'>Registration Successful!</h3>";
        echo "Name: $name <br>Email: $email <br>Phone: $phone <br>Roll No: $roll";
    }
    ?>
</body>
</html>
`,
          },
        ],
      },
    ],
  },
  //   ADBMS
  {
    subject_name: "ADBMS",
    key: "adbms",
    specialization: null,
    language: "sql",
    practicals: [
      //  p-1
      {
        key: "practical-1",
        name: "Practical - 1: Basic SQL Commands",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 1 - Basic SQL Commands",
          },
          {
            type: "description",
            value: "CREATE TABLE Command",
          },
          {
            type: "code",
            value: `CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    BirthDate DATE,
    HireDate DATE,
    Salary DECIMAL(10, 2)
);
`,
          },
          {
            type: "description",
            value: "ALTER TABLE Command: Add a new column:",
          },
          {
            type: "code",
            value: `ALTER TABLE Employees
ADD Email VARCHAR(100);`,
          },
          {
            type: "description",
            value: "ALTER TABLE Command: Remove a column:",
          },
          {
            type: "code",
            value: `ALTER TABLE Employees
DROP COLUMN Email;`,
          },
          {
            type: "description",
            value: "INSERT TABLE Command",
          },
          {
            type: "code",
            value: `INSERT INTO Employees VALUES 
    (100, 'John', 'Doe', '05-15-2000', '01-01-2024', 60000.00);`,
          },
          {
            type: "description",
            value: "Display all records command",
          },
          {
            type: "code",
            value: `SELECT * FROM Employees;`,
          },
          {
            type: "description",
            value: "UPDATE TABLE Command",
          },
          {
            type: "code",
            value: `UPDATE Employees
SET Salary = 65000.00
WHERE EmployeeID = 100;`,
          },
          {
            type: "description",
            value: "RENAME TABLE Command",
          },
          {
            type: "code",
            value: `ALTER TABLE Employees RENAME TO Staff;`,
          },
          {
            type: "description",
            value: "DELETE Command",
          },
          {
            type: "code",
            value: `DELETE FROM Employees WHERE EmployeeID = 100;`,
          },
          {
            type: "description",
            value: "DROP Command",
          },
          {
            type: "code",
            value: `DROP TABLE Employees;`,
          },
        ],
      },
      //  p-2
      {
        key: "practical-2",
        name: "Practical - 2: Basic SQL Commands - Part 2",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 2 - Basic SQL Commands - Part 2",
          },
          {
            type: "description",
            value:
              "Write an SQL query to retrieve all columns and rows from the Employees table.",
          },
          {
            type: "code",
            value: `SELECT * FROM Employees;`,
          },
          {
            type: "description",
            value:
              "Write an SQL query to find all customers whose last name is 'Doe'.",
          },
          {
            type: "code",
            value: `SELECT * FROM Employees WHERE LastName = 'Doe';`,
          },
          {
            type: "description",
            value:
              "Write an SQL query to list all books from the Books table, ordered by publication year in descending order.",
          },
          {
            type: "code",
            value: `SELECT * FROM Books ORDER BY publication_year DESC;`,
          },
          {
            type: "description",
            value:
              "Write an SQL query to find the total number of orders in the Orders table",
          },
          {
            type: "code",
            value: `SELECT COUNT(*) AS total_orders FROM Orders;`,
          },
          {
            type: "description",
            value:
              "Write an SQL query to find the average salary of employees in each department. Assume you have the Employees table with columns EmployeeID, FirstName, LastName, Salary, and DepartmentID.",
          },
          {
            type: "code",
            value: `SELECT DepartmentID, AVG(Salary) AS average_salary FROM Employees GROUP BY DepartmentID;`,
          },
          {
            type: "description",
            value:
              "Write an SQL query to list all unique job titles from the Employees table.",
          },
          {
            type: "code",
            value: `SELECT DISTINCT JobTitle FROM Employees;`,
          },
          {
            type: "description",
            value:
              "Write an SQL query to find all products from the Products table where the product name contains the word 'Laptop'.",
          },
          {
            type: "code",
            value: `SELECT * FROM Products WHERE  ProductName LIKE '%Laptop%';`,
          },
          {
            type: "description",
            value:
              "Write an SQL query to find the names of employees who have a salary greater than the average salary of all employees.",
          },
          {
            type: "code",
            value: `SELECT FirstName, LastName FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);`,
          },
          {
            type: "description",
            value:
              "Write an SQL query to find the union of all product names from the Products table and all customer names from the Customers table.",
          },
          {
            type: "code",
            value: `SELECT ProductName AS Name FROM Products UNION ALL SELECT FirstName AS Name FROM Customers;`,
          },
        ],
      },
      //  p-3
      {
        key: "practical-3",
        name: "Practical - 3: Joins",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 3 - Joins",
          },
          {
            type: "description",
            value:
              "Write an SQL query to find the names of customers and their associated orders. Assume you have two tables: Customers and Orders. Customers has columns CustomerID and CustomerName, and Orders has columns OrderID, CustomerID, and OrderDate.",
          },
          {
            type: "code",
            value: `SELECT
    Customers.CustomerName,
    Orders.OrderID,
    Orders.OrderDate
FROM
    Customers
INNER JOIN Orders
    ON Customers.CustomerID = Orders.CustomerID;`,
          },
          {
            type: "description",
            value:
              "Question: Write an SQL query to list all customers and any orders they may have. Include customers who do not have any orders. Use the same Customers and Orders tables.",
          },
          {
            type: "code",
            value: `SELECT
    Customersu.CustomerName,
    Orders.OrderID,
    Orders.OrderDate
FROM
    Customersu
LEFT JOIN Orders
    ON Customersu.CustomerID = Orders.CustomerID;`,
          },
          {
            type: "description",
            value:
              "RIGHT JOIN (RIGHT OUTER JOIN) Question:Write an SQL query to list all orders and any associated customer details. Include orders that do not have an  associated customer. Use the Customers and Orders tables. ",
          },
          {
            type: "code",
            value: `SELECT
    Orders.OrderID,
    Orders.OrderDate,
    Customersu.CustomerName
FROM
    Orders
RIGHT JOIN Customersu
    ON Orders.CustomerID = Customersu.CustomerID;`,
          },
          {
            type: "description",
            value:
              "SELF JOIN: Write an SQL query to find pairs of employees who work in the same department. Assume you have an Employees table with columns EmployeeID, EmployeeName, and DepartmentID",
          },
          {
            type: "code",
            value: `SELECT e1.EmployeeID AS Employee1_ID, 
       e1.EmployeeName AS Employee1_Name,
       e2.EmployeeID AS Employee2_ID, 
       e2.EmployeeName AS Employee2_Name,
       e1.DepartmentID
FROM Employees e1
JOIN Employees e2
  ON e1.DepartmentID = e2.DepartmentID
  AND e1.EmployeeID < e2.EmployeeID
ORDER BY e1.DepartmentID, e1.EmployeeID, e2.EmployeeID;`,
          },
          {
            type: "description",
            value: "CROSS JOIN",
          },
          {
            type: "code",
            value: `SELECT p.ProductID, 
       p.ProductName, 
       c.CategoryID, 
       c.CategoryName
FROM Products p
CROSS JOIN Categories c;`,
          },
        ],
      },
      //  p-4
      {
        key: "practical-4",
        name: "Practical - 4: PL/SQL program to find total and average of 4 subjects and display the grade",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 4 - PL/SQL program to find total and average of 4 subjects and display the grade",
          },
          {
            type: "description",
            value: "Create a Table to Store Student Marks",
          },
          {
            type: "code",
            value: `CREATE TABLE student_marks (
    student_id NUMBER PRIMARY KEY,
    subject1_marks NUMBER,
    subject2_marks NUMBER,
    subject3_marks NUMBER,
    subject4_marks NUMBER
);`,
          },
          {
            type: "description",
            value: "Insert Some Sample Data into the Table",
          },
          {
            type: "code",
            value: `INSERT INTO student_marks (student_id, subject1_marks, subject2_marks, subject3_marks, subject4_marks)
VALUES (1, 85, 90, 78, 92);

INSERT INTO student_marks (student_id, subject1_marks, subject2_marks, subject3_marks, subject4_marks)
VALUES (2, 70, 75, 80, 88);

INSERT INTO student_marks (student_id, subject1_marks, subject2_marks, subject3_marks, subject4_marks)
VALUES (3, 60, 65, 72, 58);`,
          },
          {
            type: "description",
            value: "PL/SQL Block to Calculate Total, Average, and Grade",
          },
          {
            type: "code",
            value: `DECLARE
    -- Declare variables for total, average, and grade
    v_total NUMBER;
    v_avg   NUMBER;
    v_grade CHAR(1);

    -- Cursor to fetch student data
    CURSOR student_cursor IS
        SELECT student_id,
               subject1_marks,
               subject2_marks,
               subject3_marks,
               subject4_marks
        FROM student_marks;
BEGIN
    -- Loop through each student record
    FOR student IN student_cursor LOOP
        -- Calculate total and average
        v_total := student.subject1_marks
                 + student.subject2_marks
                 + student.subject3_marks
                 + student.subject4_marks;

        v_avg := v_total / 4;

        -- Assign grade based on average
        IF v_avg >= 90 THEN
            v_grade := 'A';
        ELSIF v_avg >= 75 THEN
            v_grade := 'B';
        ELSIF v_avg >= 60 THEN
            v_grade := 'C';
        ELSE
            v_grade := 'D';
        END IF;

        -- Output the results
        DBMS_OUTPUT.PUT_LINE('Student ID   : ' || student.student_id);
        DBMS_OUTPUT.PUT_LINE('Total Marks  : ' || v_total);
        DBMS_OUTPUT.PUT_LINE('Average Marks: ' || v_avg);
        DBMS_OUTPUT.PUT_LINE('Grade        : ' || v_grade);
        DBMS_OUTPUT.PUT_LINE('----------------------------------');
    END LOOP;
END;
/`,
          },
          {
            type: "description",
            value: "Sample Output in Table Format:",
          },
          {
            type: "code",
            value: `SELECT student_id, 
       (subject1_marks + subject2_marks + subject3_marks + subject4_marks) AS total_marks,
       ((subject1_marks + subject2_marks + subject3_marks + subject4_marks) / 4) AS average_marks,
       CASE
           WHEN ((subject1_marks + subject2_marks + subject3_marks + subject4_marks) / 4) >= 90 THEN 'A'
           WHEN ((subject1_marks + subject2_marks + subject3_marks + subject4_marks) / 4) >= 75 THEN 'B'
           WHEN ((subject1_marks + subject2_marks + subject3_marks + subject4_marks) / 4) >= 60 THEN 'C'
           ELSE 'D'
       END AS grade
FROM student_marks;`,
          },
        ],
      },
      //  p-5
      {
        key: "practical-5",
        name: "Practical - 5: PL/SQL Factorial program using functions",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 5  - PL/SQL Factorial program using functions",
          },

          {
            type: "code",
            value: `--Creating a function to calculate factorial
 CREATE OR REPLACE FUNCTION factorial (n IN NUMBER) 
RETURN NUMBER 
IS
 result NUMBER := 1;
 BEGIN
 -- Loop to calculate factorial and display intermediate steps
 FOR i IN 1..n LOOP
 result := result * i;
 -- Displaying each step in tabular format 
DBMS_OUTPUT.PUT_LINE('Step ' || i || ': ' || i || ' x ‘ || (result / i) || ' = ' || result);
 END LOOP; 
RETURN result;
 END;
 / 
`,
          },
          {
            type: "code",
            value: `--Using a fixed value for num (e.g., num = 5)
 DECLARE
 num NUMBER := 5; -- Hardcoded value
 fact NUMBER;
 BEGIN
 -- Displaying the header for the table
 DBMS_OUTPUT.PUT_LINE('-----------------------------------------');
 DBMS_OUTPUT.PUT_LINE('Step | Multiplier | Previous Result | Current Result'); 
 DBMS_OUTPUT.PUT_LINE('-----------------------------------------');
 -- Calling the factorial function
 fact := factorial(num); 
--Displaying the factorial result
 DBMS_OUTPUT.PUT_LINE('-----------------------------------------');
 DBMS_OUTPUT.PUT_LINE('The factorial of ' || num || ' is: ' || fact);
 END;
 / 
`,
          },
        ],
      },
      //  p-6
      {
        key: "practical-6",
        name: "Practical - 6: PL/SQL program to generate Fibonacci series using functions",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 6 - PL/SQL program to generate Fibonacci series using functions",
          },
          {
            type: "code",
            value: `-- Create a function to calculate the nth Fibonacci number
CREATE OR REPLACE FUNCTION fibonacci (n IN NUMBER) 
RETURN NUMBER 
IS
   -- Declare variables for Fibonacci calculation
   a NUMBER := 0;
   b NUMBER := 1;
   c NUMBER := 0;
BEGIN
   -- Special case for 1st term (Fibonacci number at position 1)
   IF n = 1 THEN
      RETURN a;
   ELSIF n = 2 THEN
      RETURN b;
   ELSE
      -- Loop to calculate Fibonacci numbers for positions greater than 2
      FOR i IN 3..n LOOP
         c := a + b;      -- Fibonacci relation: F(n) = F(n-1) + F(n-2)
         a := b;          -- Move a to the next position
         b := c;          -- Move b to the next position
      END LOOP;
      RETURN c;           -- Return the Fibonacci number at position n
   END IF;
END;
/
`,
          },
          {
            type: "code",
            value: `-- Anonymous PL/SQL Block to generate Fibonacci series
DECLARE
   num_terms NUMBER := 10;  -- Set the number of terms to generate
   i NUMBER;
   fib NUMBER;
BEGIN
   -- Displaying the Fibonacci series header
   DBMS_OUTPUT.PUT_LINE('Fibonacci Series:');
   DBMS_OUTPUT.PUT_LINE('------------------');
   
   -- Loop to call the Fibonacci function and display the series
   FOR i IN 1..num_terms LOOP
      fib := fibonacci(i); -- Get the Fibonacci number at position i
      DBMS_OUTPUT.PUT_LINE('Term ' || i || ': ' || fib); -- Print each term
   END LOOP;
END;
/
`,
          },
        ],
      },
      //  p-7
      {
        key: "practical-7",
        name: "Practical - 7: Create Procedure to check number is prime or not",
        pageBlocks: [
          {
            type: "heading",
            value:
              "Practical 7 - Create Procedure to check number is prime or not",
          },
          {
            type: "code",
            value: `CREATE OR REPLACE PROCEDURE check_prime (num IN NUMBER) IS 
   -- Declare a variable to check for divisibility 
   is_prime BOOLEAN := TRUE; 
BEGIN 
   -- Special case: Numbers less than 2 are not prime 
   IF num <= 1 THEN 
      is_prime := FALSE; 
   ELSIF num = 2 THEN 
      -- 2 is a prime number 
      is_prime := TRUE; 
   ELSE 
 -- Loop to check divisibility from 2 to sqrt(num) 
      FOR i IN 2..TRUNC(SQRT(num)) LOOP 
         IF num MOD i = 0 THEN 
            is_prime := FALSE;  -- If divisible by i, then it's not prime 
            EXIT;  -- Exit the loop early as we found a divisor 
         END IF; 
      END LOOP; 
   END IF;
 -- Display the result based on whether the number is prime or not 
   IF is_prime THEN 
      DBMS_OUTPUT.PUT_LINE(num || ' is a prime number.'); 
   ELSE   
 DBMS_OUTPUT.PUT_LINE(num || ' is not a prime number.'); 
   END IF; 
END; 
/  
DECLARE 
   num NUMBER := 29;  -- You can change this number to test other values 
BEGIN 
   -- Call the procedure to check if the number is prime 
   check_prime(num); 
END; 
/`,
          },
        ],
      },
      //  p-8
      {
        key: "practical-8",
        name: "Practical - 8: PL/SQL program to print Armstrong numbers",
        pageBlocks: [
          {
            type: "heading",
            value: "Practical 8 - PL/SQL program to print Armstrong numbers",
          },
          {
            type: "code",
            value: `DECLARE
    num           NUMBER;        -- Current number to check
    temp_num      NUMBER;        -- Copy of the number for manipulation
    original_num  NUMBER;        -- Original number for comparison
    sum           NUMBER := 0;   -- Sum of powers of digits
    remainder     NUMBER;
    num_digits    NUMBER;
BEGIN
    -- Loop through numbers from 1 to 999
    FOR num IN 1..999 LOOP
        original_num := num;
        temp_num := num;
        sum := 0;

        -- Calculate number of digits
        num_digits := LENGTH(TO_CHAR(num));

        -- Calculate the sum of each digit raised to the power of num_digits
        WHILE temp_num > 0 LOOP
            remainder := MOD(temp_num, 10);
            sum := sum + POWER(remainder, num_digits);
            temp_num := TRUNC(temp_num / 10);
        END LOOP;

        -- Check if the number is an Armstrong number
        IF sum = original_num THEN
            DBMS_OUTPUT.PUT_LINE(original_num || ' is an Armstrong number.');
        END IF;
    END LOOP;
END;
/

`,
          },
        ],
      },
    ],
  },
];
