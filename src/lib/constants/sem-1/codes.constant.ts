export const sem1PracticalCodes = [
  // JAVA
  {
    subject_name: "Java Programming",
    key: "java-programming",
    // specialization: "ai",
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
        System.out.println("\\nDisplaying Book and Publisher Details:");
        book.showData();
    }
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
