export const flashCards = [
  {
    subject_name: "Artificial Intelligence",
    key: "artificial-intelligence",
    specialization: "ai",
    units: [
      {
        id: 1,
        title: "Unit- 1: Introduction",
        key: "introduction",
        cards: [
          {
            id: 1,
            front: "What is Artificial Intelligence (AI)?",
            back: "Artificial Intelligence is the branch of computer science that aims to create machines that can mimic human intelligence, such as learning, reasoning, problem-solving, and understanding language.",
          },
          {
            id: 2,
            front: "What are the basic elements of AI?",
            back: "The basic elements of AI include Learning, Reasoning, Problem-solving, Perception, and Language Understanding.",
          },
          {
            id: 3,
            front: "What is learning in AI?",
            back: "Learning in AI refers to the ability of systems to improve performance based on experience or data.",
          },
          {
            id: 4,
            front: "What is reasoning in AI?",
            back: "Reasoning in AI is the process of drawing conclusions or making inferences from available data or knowledge.",
          },
          {
            id: 5,
            front: "What is problem-solving in AI?",
            back: "Problem-solving in AI involves identifying solutions for complex tasks by exploring possible actions and outcomes.",
          },
          {
            id: 6,
            front: "What is perception in AI?",
            back: "Perception in AI is the ability to interpret data from the environment using sensors, such as cameras or microphones.",
          },
          {
            id: 7,
            front: "What is language understanding in AI?",
            back: "Language understanding in AI is the capability of machines to understand and respond to human languages.",
          },
          {
            id: 8,
            front: "What are the applications of AI?",
            back: "Applications of AI include robotics, natural language processing, expert systems, computer vision, speech recognition, autonomous vehicles, and game playing.",
          },
          {
            id: 9,
            front: "How is AI used in robotics?",
            back: "In robotics, AI helps machines perceive their environment, make decisions, and perform tasks autonomously.",
          },
          {
            id: 10,
            front: "How is AI used in Natural Language Processing (NLP)?",
            back: "AI enables NLP systems to understand, interpret, and generate human languages for applications like chatbots and voice assistants.",
          },
          {
            id: 11,
            front: "How is AI used in expert systems?",
            back: "Expert systems use AI to simulate the decision-making ability of a human expert in specific domains.",
          },
          {
            id: 12,
            front: "How is AI used in computer vision?",
            back: "Computer vision uses AI to interpret and understand visual information from the world, such as images and videos.",
          },
          {
            id: 13,
            front: "How is AI used in autonomous vehicles?",
            back: "AI powers autonomous vehicles by enabling perception, path planning, and decision-making to drive safely.",
          },
          {
            id: 14,
            front: "What is the history of AI?",
            back: "The concept of AI dates back to ancient myths. The formal field started in the 1950s with the work of pioneers like Alan Turing, John McCarthy, and Marvin Minsky.",
          },
          {
            id: 15,
            front: "Who is considered the father of AI?",
            back: "John McCarthy is considered the father of AI and coined the term 'Artificial Intelligence' in 1956.",
          },
          {
            id: 16,
            front: "What was the Dartmouth Conference?",
            back: "The Dartmouth Conference held in 1956 is considered the birth of AI as a field. It was proposed by John McCarthy and others to explore ways machines could simulate intelligence.",
          },
          {
            id: 17,
            front: "What are AI techniques?",
            back: "AI techniques include search algorithms, knowledge representation, machine learning, neural networks, fuzzy logic, and genetic algorithms.",
          },
          {
            id: 18,
            front: "What is machine learning in AI?",
            back: "Machine learning is a technique where systems learn from data to make predictions or decisions without being explicitly programmed.",
          },
          {
            id: 19,
            front: "What is knowledge representation in AI?",
            back: "Knowledge representation involves storing information in a format that a computer system can utilize to solve complex tasks.",
          },
          {
            id: 20,
            front: "What is fuzzy logic in AI?",
            back: "Fuzzy logic is a technique that deals with reasoning that is approximate rather than fixed and exact, useful in uncertain or vague scenarios.",
          },
          {
            id: 21,
            front: "What are genetic algorithms in AI?",
            back: "Genetic algorithms are optimization techniques based on the principles of natural selection and genetics.",
          },
        ],
      },
      {
        id: 2,
        title: "Unit-2: Heuristic Search Techniques",
        key: "heuristic-search-techniques",
        cards: [
          {
            id: 22,
            front: "What is the Generate and Test method in AI?",
            back: "Generate and Test is a problem-solving strategy that involves generating possible solutions and testing each one to see if it satisfies the goal.",
          },
          {
            id: 23,
            front: "What is Hill Climbing in AI?",
            back: "Hill Climbing is a heuristic search technique that continually moves in the direction of increasing value (uphill) to find the peak or best solution.",
          },
          {
            id: 24,
            front: "What is a major drawback of Hill Climbing?",
            back: "Hill Climbing can get stuck in local maxima, plateaus, or ridges, failing to find the global optimum.",
          },
          {
            id: 25,
            front: "What is Best-First Search in AI?",
            back: "Best-First Search is a search algorithm that explores paths based on a given heuristic, expanding the most promising node first.",
          },
          {
            id: 26,
            front:
              "How does Best-First Search differ from Breadth-First Search?",
            back: "Best-First Search uses heuristics to prioritize node expansion, while Breadth-First Search expands all nodes at the same depth first without heuristics.",
          },
          {
            id: 27,
            front: "What is Problem Reduction in AI?",
            back: "Problem Reduction is an approach where a complex problem is divided into smaller subproblems which are solved individually to solve the overall problem.",
          },
          {
            id: 28,
            front: "What is a common technique used in Problem Reduction?",
            back: "AND-OR graphs are commonly used in Problem Reduction to represent subproblems and their dependencies.",
          },
          {
            id: 29,
            front: "What is Constraint Satisfaction in AI?",
            back: "Constraint Satisfaction is a technique where problems are solved by identifying values that satisfy a number of constraints or rules.",
          },
          {
            id: 30,
            front: "What are examples of Constraint Satisfaction Problems?",
            back: "Examples include Sudoku, Map Coloring, N-Queens problem, and Scheduling tasks.",
          },
          {
            id: 31,
            front: "What is Means-Ends Analysis in AI?",
            back: "Means-Ends Analysis is a problem-solving technique that reduces the difference between the current state and goal state by applying operations (means) that bring the state closer to the goal (end).",
          },
          {
            id: 32,
            front: "How does Means-Ends Analysis work?",
            back: "It identifies differences between current and goal states, selects an operator to reduce one difference, and applies it recursively to reach the goal.",
          },
        ],
      },
      {
        id: 3,
        title: "Unit-3: Problems, Problems Spaces and Search",
        key: "problems-problems-spaces-and-search",
        cards: [
          {
            id: 33,
            front: "What is a Production System in AI?",
            back: "A Production System consists of a set of rules (productions), a database (working memory), and a control strategy to apply the rules to solve problems.",
          },
          {
            id: 34,
            front: "What are the main components of a Production System?",
            back: "The main components are the rule base (productions), working memory (database), and control strategy (decision-making logic).",
          },
          {
            id: 35,
            front: "What are the characteristics of a Production System?",
            back: "Characteristics include simplicity, modularity, data-driven execution, and separation of knowledge and control.",
          },
          {
            id: 36,
            front:
              "What is a 'conflict resolution' strategy in Production Systems?",
            back: "Conflict resolution is the method used to choose one rule to apply when multiple rules are applicable at the same time.",
          },
          {
            id: 37,
            front: "What are problem characteristics in AI?",
            back: "Problem characteristics define the nature of a problem, such as whether it is decomposable, has a predictable environment, or requires a solution sequence.",
          },
          {
            id: 38,
            front: "What does it mean for a problem to be decomposable?",
            back: "A decomposable problem can be broken into smaller sub-problems that can be solved independently.",
          },
          {
            id: 39,
            front: "What is the importance of a well-defined problem in AI?",
            back: "A well-defined problem has clear initial and goal states, constraints, and rules, which makes it easier for AI to find solutions.",
          },
          {
            id: 40,
            front: "What are the design issues in search algorithms?",
            back: "Design issues include completeness, optimality, time complexity, space complexity, and the use of heuristics.",
          },
          {
            id: 41,
            front: "What is completeness in the context of search algorithms?",
            back: "Completeness refers to whether the algorithm is guaranteed to find a solution if one exists.",
          },
          {
            id: 42,
            front: "What is optimality in search algorithms?",
            back: "Optimality refers to whether the algorithm finds the best possible solution, usually the one with the lowest cost.",
          },
          {
            id: 43,
            front: "Why are heuristics used in AI search algorithms?",
            back: "Heuristics guide the search process by estimating how close a state is to the goal, making the search more efficient.",
          },
        ],
      },
      {
        id: 4,
        title: "Unit-4: Knowledge Representation",
        key: "knowledge-representation",
        cards: [
          {
            id: 44,
            front: "What is knowledge in AI?",
            back: "Knowledge in AI refers to the information, facts, and rules that an AI system uses to reason, learn, and make decisions.",
          },
          {
            id: 45,
            front: "Why is knowledge important in AI?",
            back: "Knowledge is crucial because it enables intelligent behavior in machines, such as reasoning, understanding, and learning from data or experience.",
          },
          {
            id: 46,
            front: "What are knowledge representation issues in AI?",
            back: "These are challenges in how to formally and efficiently represent knowledge so that a machine can use it effectively.",
          },
          {
            id: 47,
            front: "What are general concepts of knowledge representation?",
            back: "General concepts include symbols, relationships, logic, inference, reasoning, and the structure of knowledge storage and usage.",
          },
          {
            id: 48,
            front: "What is meant by representations and mappings in AI?",
            back: "Representations are structures used to store knowledge, and mappings are the links between real-world entities and their representations in the system.",
          },
          {
            id: 49,
            front: "What are the main approaches to knowledge representation?",
            back: "Main approaches include logic-based representation, semantic networks, frames, rules, and ontologies.",
          },
          {
            id: 50,
            front: "What is the frame problem in AI?",
            back: "The frame problem refers to the difficulty of representing what doesn't change in a dynamic system after an action is taken.",
          },
          {
            id: 51,
            front: "What is predicate knowledge in AI?",
            back: "Predicate knowledge refers to knowledge represented using predicate logic, where statements are expressed using predicates, functions, and variables.",
          },
          {
            id: 52,
            front:
              "How are instance relationships represented in predicate logic?",
            back: "Instance relationships are represented using predicates like 'InstanceOf(x, ClassName)' to denote that x is an instance of a class.",
          },
          {
            id: 53,
            front: "What is the Is-a relationship in AI?",
            back: "The Is-a relationship indicates inheritance or class membership, such as 'Dog is-a Animal', showing hierarchy or taxonomy.",
          },
          {
            id: 54,
            front: "What are computable functions in logic?",
            back: "Computable functions are those that can be evaluated algorithmically and are used to map inputs to outputs in logical reasoning.",
          },
          {
            id: 55,
            front: "What are predicates in AI?",
            back: "Predicates are logical statements that express properties of objects or relationships among objects, often returning true or false.",
          },
          {
            id: 56,
            front: "What is resolution in predicate logic?",
            back: "Resolution is a rule of inference used for automated theorem proving, based on refutation and combining clauses to eliminate variables.",
          },
          {
            id: 57,
            front: "What is natural deduction in logic?",
            back: "Natural deduction is a system of formal logic that uses inference rules to derive conclusions from premises in a way that mimics human reasoning.",
          },
        ],
      },
      {
        id: 5,
        title: "Unit-5: Representing Knowledge Using Rules",
        key: "representing-knowledge-using-rules",
        cards: [
          {
            id: 58,
            front: "What is procedural knowledge in AI?",
            back: "Procedural knowledge is the knowledge of how to perform tasks, represented as rules, scripts, or procedures. It tells *how* to do something.",
          },
          {
            id: 59,
            front: "What is declarative knowledge in AI?",
            back: "Declarative knowledge represents facts about the world. It tells *what is* without detailing how to achieve it.",
          },
          {
            id: 60,
            front:
              "What is the difference between procedural and declarative knowledge?",
            back: "Procedural knowledge focuses on processes and actions (how), while declarative knowledge focuses on facts and relationships (what).",
          },
          {
            id: 61,
            front: "What is logic programming in AI?",
            back: "Logic programming is a programming paradigm based on formal logic where programs are written as sets of logical statements, typically using languages like Prolog.",
          },
          {
            id: 62,
            front: "Which language is commonly used in logic programming?",
            back: "Prolog (Programming in Logic) is the most commonly used language for logic programming.",
          },
          {
            id: 63,
            front: "What is forward reasoning in AI?",
            back: "Forward reasoning (forward chaining) starts from known facts and applies inference rules to extract more facts until a goal is reached.",
          },
          {
            id: 64,
            front: "What is backward reasoning in AI?",
            back: "Backward reasoning (backward chaining) starts from the goal and works backward to determine what facts would support that goal.",
          },
          {
            id: 65,
            front:
              "What is the difference between forward and backward reasoning?",
            back: "Forward reasoning is data-driven, working from facts to conclusions. Backward reasoning is goal-driven, working from goals back to facts.",
          },
        ],
      },
      {
        id: 6,
        title: "Unit-6: Symbolic Reasoning Under Uncertainty",
        key: "symbolic-reasoning-under-uncertainity",
        cards: [
          {
            id: 66,
            front: "What is Nonmonotonic Reasoning?",
            back: "Nonmonotonic Reasoning is a logic system where conclusions can be withdrawn based on new information.",
          },
          {
            id: 67,
            front:
              "How does Nonmonotonic Reasoning differ from Classical Logic?",
            back: "In Classical Logic, conclusions once drawn remain valid; in Nonmonotonic Reasoning, they can change with new evidence.",
          },
          {
            id: 68,
            front: "Why is Nonmonotonic Reasoning useful in AI?",
            back: "It allows AI systems to act more human-like by handling incomplete or evolving knowledge.",
          },
          {
            id: 69,
            front: "Give an example of Nonmonotonic Reasoning.",
            back: "'Birds can fly' is a default rule, but when learning that a specific bird is a penguin, the AI retracts the assumption.",
          },
          {
            id: 70,
            front: "What causes reasoning to become nonmonotonic?",
            back: "The introduction of exceptions, changing environments, or new evidence can shift conclusions.",
          },
          {
            id: 71,
            front: "What is defeasible reasoning?",
            back: "Defeasible reasoning allows conclusions to be overturned when more convincing evidence appears.",
          },
          {
            id: 72,
            front: "How is uncertainty handled in Nonmonotonic Reasoning?",
            back: "By using assumptions and retracting them when contradictory facts are introduced.",
          },
          {
            id: 73,
            front: "Is Nonmonotonic Reasoning used in Expert Systems?",
            back: "Yes, especially where default assumptions and rule exceptions are common.",
          },
          {
            id: 74,
            front:
              "How does Nonmonotonic Reasoning relate to everyday human reasoning?",
            back: "Humans regularly revise beliefs when new information appears, which is mirrored in Nonmonotonic Reasoning.",
          },
          {
            id: 75,
            front: "What are common use cases of Nonmonotonic Reasoning?",
            back: "It is used in legal reasoning, diagnostic systems, autonomous agents, and belief revision systems.",
          },
          {
            id: 76,
            front: "What is Default Logic?",
            back: "A logic where defaults are assumed true unless contradicted by evidence.",
          },
          {
            id: 77,
            front: "What is Autoepistemic Logic?",
            back: "A logic allowing agents to reason about their own beliefs and knowledge.",
          },
          {
            id: 78,
            front: "What is Circumscription in AI?",
            back: "A form of logic that minimizes assumptions by limiting the extension of predicates.",
          },
          {
            id: 79,
            front: "What role does Modal Logic play in Nonmonotonic Reasoning?",
            back: "Modal logic expresses possibility and necessity, useful for modeling belief and knowledge changes.",
          },
          {
            id: 80,
            front: "What are Nonmonotonic Modal Logics?",
            back: "They extend modal logic to allow conclusions to be withdrawn as knowledge changes.",
          },
          {
            id: 81,
            front:
              "How does Logic Programming relate to Nonmonotonic Reasoning?",
            back: "Languages like Prolog use nonmonotonic approaches with negation-as-failure semantics.",
          },
          {
            id: 82,
            front: "What is negation as failure?",
            back: "It assumes something is false if it cannot be proven true — a key concept in logic programming.",
          },
          {
            id: 83,
            front: "What is a closed world assumption?",
            back: "It assumes that what is not known to be true is false — commonly used in Nonmonotonic Reasoning.",
          },
          {
            id: 84,
            front:
              "How is reasoning with exceptions modeled in Nonmonotonic Logics?",
            back: "By using rules with defaults and exceptions, allowing systems to override general knowledge.",
          },
          {
            id: 85,
            front: "What are some limitations of Nonmonotonic Logics?",
            back: "They can be computationally expensive and harder to formalize compared to classical logic.",
          },
        ],
      },
      {
        id: 7,
        title: "Unit-7: Statistical Reasoning",
        key: "statistical-reasoning",
        cards: [
          {
            id: 86,
            front: "What is probability in AI?",
            back: "Probability measures the likelihood of an event occurring, ranging from 0 (impossible) to 1 (certain).",
          },
          {
            id: 87,
            front: "What is the formula for Bayes' Theorem?",
            back: "Bayes' Theorem: P(A|B) = (P(B|A) * P(A)) / P(B)",
          },
          {
            id: 88,
            front: "Why is Bayes’ Theorem important in AI?",
            back: "It helps update probabilities based on new evidence, crucial for probabilistic reasoning and machine learning.",
          },
          {
            id: 89,
            front: "What is conditional probability?",
            back: "Conditional probability P(A|B) is the probability of event A occurring given that event B has occurred.",
          },
          {
            id: 90,
            front: "How does Bayes' Theorem relate to AI applications?",
            back: "It is widely used in spam filtering, medical diagnosis, machine learning, and predictive analytics.",
          },
          {
            id: 91,
            front: "What is prior probability in Bayes’ Theorem?",
            back: "Prior probability (P(A)) is the initial probability of an event before considering new evidence.",
          },
          {
            id: 92,
            front: "What is posterior probability in Bayes' Theorem?",
            back: "Posterior probability (P(A|B)) is the updated probability of an event after considering new evidence.",
          },
          {
            id: 93,
            front: "What is likelihood in Bayes' Theorem?",
            back: "Likelihood (P(B|A)) measures how probable the evidence (B) is given that the hypothesis (A) is true.",
          },
          {
            id: 94,
            front: "What is the law of total probability?",
            back: "The law states that the probability of an event is the sum of the probabilities of the event occurring under different conditions.",
          },
          {
            id: 95,
            front: "How does Naïve Bayes use Bayes' Theorem?",
            back: "Naïve Bayes assumes independence between features and applies Bayes’ Theorem for classification.",
          },
          {
            id: 96,
            front: "What is a certainty factor in AI?",
            back: "A certainty factor (CF) quantifies the degree of belief or disbelief in a hypothesis.",
          },
          {
            id: 97,
            front: "How are certainty factors used in expert systems?",
            back: "They help represent uncertain knowledge and modify belief in rules based on evidence.",
          },
          {
            id: 98,
            front: "What is the range of certainty factors?",
            back: "Certainty factors range from - 1 (complete disbelief) to +1 (complete belief).",
          },
          {
            id: 99,
            front: "What is a rule-based system in AI?",
            back: "A system that applies predefined 'if-then' rules to derive conclusions from given facts.",
          },
          {
            id: 100,
            front: "What is forward chaining in rule-based systems?",
            back: "A reasoning method that starts from known facts and applies rules to infer new facts until a goal is reached.",
          },
          {
            id: 101,
            front: "What is backward chaining in rule-based systems?",
            back: "A reasoning method that starts from a goal and works backward to check if facts support the goal.",
          },
          {
            id: 102,
            front: "What is an example of a rule-based system?",
            back: "MYCIN, an expert system used for medical diagnosis, which applies certainty factors to assess confidence in diagnoses.",
          },
          {
            id: 103,
            front:
              "How do certainty factors combine when multiple rules apply?",
            back: "They are combined using mathematical formulas that account for both belief and disbelief levels.",
          },
          {
            id: 104,
            front: "What are the limitations of certainty factor models?",
            back: "They require expert-defined certainty values, which may not always be accurate or consistent.",
          },
          {
            id: 105,
            front: "How do rule-based systems handle uncertainty?",
            back: "By assigning certainty factors to rules and updating beliefs based on available evidence.",
          },
          {
            id: 106,
            front: "What is a Bayesian Network?",
            back: "A Bayesian Network is a probabilistic graphical model representing variables and their conditional dependencies.",
          },
          {
            id: 107,
            front: "What are nodes and edges in a Bayesian Network?",
            back: "Nodes represent variables, and edges represent probabilistic dependencies between variables.",
          },
          {
            id: 108,
            front:
              "What is the role of Conditional Probability Tables (CPTs) in Bayesian Networks?",
            back: "CPTs define the probability of a variable given its parent nodes.",
          },
          {
            id: 109,
            front: "How does inference work in a Bayesian Network?",
            back: "Inference uses Bayes' Theorem to update beliefs based on observed data.",
          },
          {
            id: 110,
            front: "What is Markov Blanket in a Bayesian Network?",
            back: "A Markov Blanket of a node consists of its parents, children, and co-parents, which shield it from other variables.",
          },
          {
            id: 111,
            front: "What are the advantages of Bayesian Networks?",
            back: "They handle uncertainty, allow probabilistic inference, and can model complex relationships.",
          },
          {
            id: 112,
            front: "How are Bayesian Networks used in AI applications?",
            back: "They are used in medical diagnosis, fraud detection, speech recognition, and decision-making systems.",
          },
          {
            id: 113,
            front:
              "What is the difference between Bayesian Networks and Markov Networks?",
            back: "Bayesian Networks use directed acyclic graphs (DAGs), while Markov Networks use undirected graphs.",
          },
          {
            id: 114,
            front: "Can Bayesian Networks model time-dependent processes?",
            back: "Yes, Dynamic Bayesian Networks (DBNs) model sequential data over time.",
          },
          {
            id: 115,
            front: "What are some challenges of Bayesian Networks?",
            back: "They require extensive data for probability estimation and can be computationally expensive.",
          },
          {
            id: 116,
            front: "What is Dempster-Shafer Theory?",
            back: "A mathematical framework for reasoning with uncertainty, generalizing probability theory.",
          },
          {
            id: 117,
            front:
              "How does Dempster-Shafer Theory differ from Probability Theory?",
            back: "It allows uncertainty in probability assignments by supporting belief and plausibility functions.",
          },
          {
            id: 118,
            front: "What are belief functions in Dempster-Shafer Theory?",
            back: "Belief functions measure the support given to a proposition by evidence.",
          },
          {
            id: 119,
            front: "What are plausibility functions in Dempster-Shafer Theory?",
            back: "Plausibility represents how much a proposition is not contradicted by available evidence.",
          },
          {
            id: 120,
            front: "What is the combination rule in Dempster-Shafer Theory?",
            back: "Dempster’s rule of combination fuses multiple independent sources of evidence.",
          },
          {
            id: 121,
            front: "How is Dempster-Shafer Theory applied in AI?",
            back: "It is used in sensor fusion, expert systems, and decision-making under uncertainty.",
          },
          {
            id: 122,
            front: "What is the frame of discernment?",
            back: "The set of all possible outcomes in Dempster-Shafer Theory.",
          },
          {
            id: 123,
            front:
              "How does Dempster-Shafer Theory handle conflicting evidence?",
            back: "It assigns lower confidence to conflicting sources, reducing their impact on conclusions.",
          },
          {
            id: 124,
            front: "What is the advantage of Dempster-Shafer Theory?",
            back: "It provides a flexible approach to reasoning with incomplete or ambiguous data.",
          },
          {
            id: 125,
            front: "What are the limitations of Dempster-Shafer Theory?",
            back: "Computational complexity and difficulty in defining belief functions accurately.",
          },
        ],
      },
      {
        id: 8,
        title: "Unit-8: Prolog",
        key: "prolog",
        cards: [
          {
            id: 126,
            front: "What is Prolog?",
            back: "Prolog is a logic programming language used for artificial intelligence and symbolic reasoning.",
          },
          {
            id: 127,
            front: "What type of programming paradigm does Prolog follow?",
            back: "Prolog follows the declarative programming paradigm, where logic is expressed in terms of relations.",
          },
          {
            id: 128,
            front: "What is the basic unit of Prolog programs?",
            back: "The basic unit of Prolog programs is the fact, rule, or query.",
          },
          {
            id: 129,
            front: "How does Prolog process a query?",
            back: "Prolog uses a depth-first search strategy with backtracking to find a solution.",
          },
          {
            id: 130,
            front: "What is a fact in Prolog?",
            back: "A fact is a basic assertion about some world entity, written as a predicate with arguments.",
          },
          {
            id: 131,
            front: "What is a rule in Prolog?",
            back: "A rule is a logical implication that defines relationships between predicates.",
          },
          {
            id: 132,
            front: "How do you represent facts and rules in Prolog?",
            back: "Facts are written as `predicate(arguments).`, while rules are written as `head :- body.`",
          },
          {
            id: 133,
            front: "What is a query in Prolog?",
            back: "A query is a question asked to the Prolog system to check whether a given fact or rule holds.",
          },
          {
            id: 134,
            front:
              "What does it mean to convert English to facts and rules in Prolog?",
            back: "It involves translating natural language statements into Prolog predicates and logical rules.",
          },
          {
            id: 135,
            front:
              "Give an example of converting English to Prolog facts and rules.",
            back: "English: 'Tom is a father of Jerry.' Prolog: `father(tom, jerry).`",
          },
          {
            id: 136,
            front: "What are Prolog variables?",
            back: "Prolog variables are placeholders for values, starting with an uppercase letter or an underscore.",
          },
          {
            id: 137,
            front:
              "What is the difference between a variable and an atom in Prolog?",
            back: "Atoms are constant symbols (lowercase), while variables (uppercase) can take different values.",
          },
          {
            id: 138,
            front: "What are control structures in Prolog?",
            back: "Control structures define the execution flow, including conjunction (`,`), disjunction (`;`), and negation (`\\+`).",
          },
          {
            id: 139,
            front: "What are arithmetic operators in Prolog?",
            back: "Arithmetic operators include `+`, `-`, `*`, `/`, `mod`, and `is` for evaluating expressions.",
          },
          {
            id: 140,
            front: "What is matching in Prolog?",
            back: "Matching, or unification, is the process of making two terms identical by binding variables.",
          },
          {
            id: 141,
            front: "What is the role of the `=` operator in Prolog?",
            back: "`=` checks whether two terms can be unified.",
          },
          {
            id: 142,
            front: "What is the role of `is` in Prolog?",
            back: "`is` is used to evaluate arithmetic expressions.",
          },
          {
            id: 143,
            front: "What is backtracking in Prolog?",
            back: "Backtracking is Prolog’s mechanism for finding alternative solutions by undoing variable bindings.",
          },
          {
            id: 144,
            front: "How does Prolog handle failure in queries?",
            back: "If a query fails, Prolog backtracks to find other possible solutions.",
          },
          {
            id: 145,
            front: "What is the purpose of the `cut` (`!`) operator in Prolog?",
            back: "The `cut` operator prevents backtracking beyond a certain point, optimizing execution.",
          },
          {
            id: 146,
            front:
              "What is the difference between a green cut and a red cut in Prolog?",
            back: "A green cut optimizes performance without changing logic, while a red cut alters program behavior.",
          },
          {
            id: 147,
            front: "What is an example of using the cut (`!`) operator?",
            back: "Example: `max(X,Y,X) :- X > Y, !.` prevents checking other rules after finding a valid case.",
          },
          {
            id: 148,
            front: "What happens if a Prolog rule has no cut (`!`)?",
            back: "Prolog backtracks to find alternative solutions, which may lead to inefficiency.",
          },
          {
            id: 149,
            front: "How does Prolog execute multiple matching rules?",
            back: "Prolog tries rules in top-to-bottom order and backtracks if necessary.",
          },
          {
            id: 150,
            front: "What is the significance of recursive rules in Prolog?",
            back: "Recursive rules allow defining complex relationships, such as computing factorials or traversing trees.",
          },
          {
            id: 151,
            front: "How can Prolog be used in AI applications?",
            back: "Prolog is used in expert systems, natural language processing, theorem proving, and automated reasoning.",
          },
          {
            id: 152,
            front: "How does Prolog differ from imperative languages?",
            back: "Prolog specifies 'what' rather than 'how,' focusing on logic rather than step-by-step execution.",
          },
          {
            id: 153,
            front: "What is tail recursion in Prolog?",
            back: "Tail recursion is when the recursive call is the last operation, optimizing memory usage.",
          },
          {
            id: 154,
            front: "What is the role of lists in Prolog?",
            back: "Lists store ordered collections of elements and are commonly used for recursion and pattern matching.",
          },
          {
            id: 155,
            front: "How does Prolog handle negation?",
            back: "Prolog uses negation as failure (`\\+`), meaning a statement is false if it cannot be proven true.",
          },
          {
            id: 156,
            front: "What is the importance of declarative programming in AI?",
            back: "Declarative programming simplifies AI by focusing on logical relationships rather than control flow.",
          },
          {
            id: 157,
            front: "How does Prolog perform pattern matching?",
            back: "Prolog uses unification to match variables with structures, enabling flexible pattern-based queries.",
          },
          {
            id: 158,
            front: "What is an example of a simple Prolog query?",
            back: "Example: Query `?- parent(john, X).` finds all children of John based on defined facts.",
          },
          {
            id: 159,
            front: "What is an anonymous variable in Prolog?",
            back: "The underscore `_` represents an anonymous variable, which matches anything but does not store values.",
          },
          {
            id: 160,
            front: "How does Prolog search for solutions?",
            back: "Prolog uses a left-to-right, depth-first search strategy.",
          },
        ],
      },
      {
        id: 9,
        title: "Unit-9: Machine Learning",
        key: "machine-learning",
        cards: [
          {
            id: 161,
            front: "What is Machine Learning?",
            back: "Machine Learning (ML) is a subset of AI that enables systems to learn from data and improve their performance without being explicitly programmed.",
          },
          {
            id: 162,
            front: "What are the key features of Machine Learning?",
            back: "ML features include automation, data-driven decisions, self-improvement, adaptability, scalability, and predictive analysis.",
          },
          {
            id: 163,
            front: "What are the different types of learning in ML?",
            back: "The main types are Supervised Learning, Unsupervised Learning, Semi-Supervised Learning, and Reinforcement Learning.",
          },
          {
            id: 164,
            front: "Why is Machine Learning needed?",
            back: "ML is needed for handling complex data, automating tasks, detecting patterns, making predictions, and improving decision-making.",
          },
          {
            id: 165,
            front: "What is Supervised Learning?",
            back: "Supervised Learning is an ML technique where the model learns from labeled training data to make predictions.",
          },
          {
            id: 166,
            front: "What is Unsupervised Learning?",
            back: "Unsupervised Learning is an ML approach where the model finds patterns and structures in unlabeled data.",
          },
          {
            id: 167,
            front: "What is Semi-Supervised Learning?",
            back: "Semi-Supervised Learning combines labeled and unlabeled data to improve model accuracy and efficiency.",
          },
          {
            id: 168,
            front: "What is Reinforcement Learning?",
            back: "Reinforcement Learning is a trial-and-error learning approach where an agent learns by interacting with an environment to maximize rewards.",
          },
          {
            id: 169,
            front: "What are the applications of Machine Learning?",
            back: "ML is used in healthcare, finance, e-commerce, autonomous vehicles, NLP, recommendation systems, and cybersecurity.",
          },
          {
            id: 170,
            front: "What are some real-world examples of ML?",
            back: "Examples include spam filters, fraud detection, chatbots, virtual assistants, and facial recognition.",
          },
          {
            id: 171,
            front:
              "How does Machine Learning differ from traditional programming?",
            back: "Traditional programming follows explicit rules, whereas ML models learn from data and improve over time.",
          },
          {
            id: 172,
            front: "What are key algorithms used in Machine Learning?",
            back: "Common ML algorithms include Decision Trees, Neural Networks, K-Means, SVM, Naïve Bayes, and Random Forests.",
          },
          {
            id: 173,
            front: "What is Feature Engineering in ML?",
            back: "Feature Engineering involves selecting and transforming data variables to improve model performance.",
          },
          {
            id: 174,
            front: "What is Model Evaluation in ML?",
            back: "Model Evaluation assesses the performance of an ML model using metrics like accuracy, precision, recall, and F1-score.",
          },
          {
            id: 175,
            front: "What is Overfitting in ML?",
            back: "Overfitting occurs when a model learns noise from training data, reducing its ability to generalize to new data.",
          },
          {
            id: 176,
            front: "What is Underfitting in ML?",
            back: "Underfitting happens when a model is too simple and fails to capture underlying patterns in the data.",
          },
          {
            id: 177,
            front: "What is the role of data preprocessing in ML?",
            back: "Data preprocessing includes cleaning, normalizing, and transforming data to prepare it for ML models.",
          },
          {
            id: 178,
            front: "What is Dimensionality Reduction in ML?",
            back: "Dimensionality Reduction techniques, like PCA, reduce the number of input features while retaining important information.",
          },
          {
            id: 179,
            front: "What is a Training Set and a Test Set in ML?",
            back: "A training set is used to train a model, while a test set evaluates its performance on unseen data.",
          },
          {
            id: 180,
            front: "How does Deep Learning relate to Machine Learning?",
            back: "Deep Learning is a subset of ML that uses neural networks with multiple layers to model complex patterns.",
          },
          {
            id: 181,
            front:
              "What is the difference between Classification and Regression?",
            back: "Classification predicts categorical labels, while regression predicts continuous values.",
          },
          {
            id: 182,
            front: "What are some common challenges in Machine Learning?",
            back: "Challenges include data quality issues, overfitting, underfitting, model bias, and computational complexity.",
          },
          {
            id: 183,
            front: "What is a Neural Network?",
            back: "A Neural Network is a computational model inspired by the human brain, used in Deep Learning for pattern recognition.",
          },
          {
            id: 184,
            front: "What is the role of Gradient Descent in ML?",
            back: "Gradient Descent is an optimization algorithm used to minimize the loss function of a model.",
          },
          {
            id: 185,
            front: "What is Cross-Validation in ML?",
            back: "Cross-Validation is a technique to evaluate model performance by dividing data into multiple subsets.",
          },
          {
            id: 186,
            front: "What are Hyperparameters in ML?",
            back: "Hyperparameters are external settings (e.g., learning rate, batch size) that affect a model’s training process.",
          },
          {
            id: 187,
            front: "What is Transfer Learning?",
            back: "Transfer Learning reuses a pre-trained model on a new but related task to save training time and resources.",
          },
          {
            id: 188,
            front: "What is Reinforcement Learning used for?",
            back: "Reinforcement Learning is used in robotics, gaming (AlphaGo), self-driving cars, and automated trading.",
          },
          {
            id: 189,
            front: "What is Natural Language Processing (NLP)?",
            back: "NLP is an AI field that enables computers to understand, interpret, and generate human language.",
          },
          {
            id: 190,
            front: "What is Image Recognition in ML?",
            back: "Image Recognition uses ML to classify and detect objects in images and videos.",
          },
          {
            id: 191,
            front: "What is the importance of Data Augmentation in ML?",
            back: "Data Augmentation generates new data variations to improve model robustness and performance.",
          },
          {
            id: 192,
            front: "What is Clustering in ML?",
            back: "Clustering is an Unsupervised Learning technique that groups similar data points together.",
          },
          {
            id: 193,
            front: "What is Reinforcement Learning’s reward system?",
            back: "Reinforcement Learning assigns rewards or penalties to an agent based on its actions.",
          },
          {
            id: 194,
            front: "What is Bias-Variance Tradeoff?",
            back: "Bias-Variance Tradeoff balances underfitting (high bias) and overfitting (high variance) in ML models.",
          },
          {
            id: 195,
            front: "What is the role of Big Data in Machine Learning?",
            back: "Big Data provides the large datasets needed to train accurate and powerful ML models.",
          },
          {
            id: 196,
            front: "What is Explainable AI (XAI)?",
            back: "Explainable AI ensures ML models provide understandable and interpretable decisions.",
          },
        ],
      },
    ],
  },
  // BDA
  {
    subject_name: "Big Data Analytics",
    key: "big-data-analytics",
    specialization: "bda",
    units: [
      {
        id: 1,
        title: "Unit- 1: Overview of Big Data",
        key: "overview-of-big-data",
        cards: [
          {
            id: 1,
            front: "What is Big Data?",
            back: "Big Data refers to large, complex data sets that traditional data processing software cannot handle efficiently.",
          },
          {
            id: 2,
            front: "What are the 5 V's of Big Data?",
            back: "Volume, Velocity, Variety, Veracity, and Value.",
          },
          {
            id: 3,
            front: "What is the main goal of Big Data?",
            back: "To extract meaningful insights and knowledge from large and diverse datasets.",
          },
          {
            id: 4,
            front: "How did Big Data evolve?",
            back: "Big Data evolved due to the exponential growth of data from digital platforms, sensors, and IoT devices.",
          },
          {
            id: 5,
            front:
              "Which technologies contributed to the evolution of Big Data?",
            back: "Technologies like Hadoop, NoSQL databases, and cloud computing.",
          },
          {
            id: 6,
            front: "What is structured data?",
            back: "Structured data is organized in a defined format like rows and columns, typically found in relational databases.",
          },
          {
            id: 7,
            front: "What is unstructured data?",
            back: "Unstructured data lacks a predefined format, such as images, videos, and social media posts.",
          },
          {
            id: 8,
            front: "What is semi-structured data?",
            back: "Semi-structured data has some organizational properties but doesn't fit into a strict schema, like JSON or XML.",
          },
          {
            id: 9,
            front: "What are the fundamentals of Big Data?",
            back: "Fundamentals include data acquisition, storage, processing, analysis, and visualization.",
          },
          {
            id: 10,
            front: "What is Big Data Analytics?",
            back: "Big Data Analytics is the process of examining large data sets to uncover hidden patterns and insights.",
          },
          {
            id: 11,
            front: "What tools are used in Big Data Analytics?",
            back: "Tools like Hadoop, Spark, Hive, Pig, and Apache Flink are commonly used.",
          },
          {
            id: 12,
            front: "How is Big Data Analytics useful?",
            back: "It helps in decision-making, customer behavior prediction, fraud detection, and operational efficiency.",
          },
          {
            id: 13,
            front: "What skills are needed for a Big Data career?",
            back: "Skills in data analysis, programming (Python, Java), statistics, and tools like Hadoop and Spark.",
          },
          {
            id: 14,
            front: "What are some career roles in Big Data?",
            back: "Big Data Analyst, Data Engineer, Data Scientist, and Hadoop Developer.",
          },
          {
            id: 15,
            front: "What is the future of Big Data?",
            back: "It includes greater integration with AI, real-time analytics, and expansion into new industries.",
          },
          {
            id: 16,
            front: "Why is Big Data important in today's world?",
            back: "Because it enables organizations to make data-driven decisions and gain a competitive edge.",
          },
          {
            id: 17,
            front: "What is Hadoop in Big Data?",
            back: "Hadoop is an open-source framework that allows for distributed processing of large data sets.",
          },
          {
            id: 18,
            front: "What role does cloud computing play in Big Data?",
            back: "It provides scalable storage and computing power needed to handle massive data sets efficiently.",
          },
        ],
      },
      {
        id: 2,
        title: "Unit- 2: Discovering the Use of Big Data in Business Context",
        key: "discovering-the-use-of-big-data-in-business-context",
        cards: [
          {
            id: 1,
            front: "How is Big Data used in social networking?",
            back: "Big Data is used in social networking to analyze user behavior, recommend content, and personalize user experiences.",
          },
          {
            id: 2,
            front: "What role does Big Data play in social media analytics?",
            back: "It helps identify trending topics, measure engagement, and understand audience preferences in real-time.",
          },
          {
            id: 3,
            front:
              "Which platforms benefit from Big Data in social networking?",
            back: "Platforms like Facebook, Twitter, Instagram, and LinkedIn use Big Data for user insights and targeted advertising.",
          },
          {
            id: 4,
            front: "How does Big Data help prevent fraudulent activities?",
            back: "Big Data analyzes large volumes of transactional data to detect unusual patterns that may indicate fraud.",
          },
          {
            id: 5,
            front:
              "Which techniques are used in fraud prevention with Big Data?",
            back: "Techniques include machine learning, pattern recognition, and real-time monitoring.",
          },
          {
            id: 6,
            front: "What is the benefit of real-time fraud detection?",
            back: "It allows immediate action to prevent financial losses and protect user accounts.",
          },
          {
            id: 7,
            front: "How does Big Data help detect insurance fraud?",
            back: "It examines claims data, customer history, and external sources to uncover inconsistencies and suspicious behavior.",
          },
          {
            id: 8,
            front: "What tools are used to detect fraudulent insurance claims?",
            back: "Tools like predictive analytics, AI, and data mining help insurers flag potential fraud cases.",
          },
          {
            id: 9,
            front:
              "What kind of data is analyzed in insurance fraud detection?",
            back: "Data from claim forms, social media, location tracking, and historical claims.",
          },
          {
            id: 10,
            front: "How is Big Data transforming the retail industry?",
            back: "Big Data helps retailers understand customer behavior, optimize pricing, and personalize shopping experiences.",
          },
          {
            id: 11,
            front: "What are the benefits of using Big Data in retail?",
            back: "Improved inventory management, targeted marketing, and enhanced customer satisfaction.",
          },
          {
            id: 12,
            front: "Which retail companies use Big Data extensively?",
            back: "Companies like Amazon, Walmart, and Target use Big Data to improve operations and customer engagement.",
          },
          {
            id: 13,
            front: "What is recommendation engine in retail?",
            back: "It's a Big Data-driven system that suggests products to users based on their behavior and preferences.",
          },
          {
            id: 14,
            front: "How does Big Data aid in dynamic pricing in retail?",
            back: "Retailers use real-time data to adjust prices based on demand, competition, and customer behavior.",
          },
          {
            id: 15,
            front:
              "How is customer sentiment analyzed in retail using Big Data?",
            back: "Through social media mining, reviews, and feedback using natural language processing (NLP).",
          },
        ],
      },
      {
        id: 3,
        title: "Unit- 3: Technologies for Handling Big Data",
        key: "technologies-for-handling-big-data",
        cards: [
          {
            id: 1,
            front: "What is Distributed Computing in Big Data?",
            back: "Distributed Computing divides data and computation across multiple machines to process large-scale data efficiently.",
          },
          {
            id: 2,
            front: "What is Parallel Computing in Big Data?",
            back: "Parallel Computing executes multiple tasks simultaneously to speed up Big Data processing.",
          },
          {
            id: 3,
            front:
              "What are the benefits of Distributed and Parallel Computing?",
            back: "They improve processing speed, scalability, and fault tolerance in Big Data systems.",
          },
          {
            id: 4,
            front: "What is Hadoop?",
            back: "Hadoop is an open-source Big Data framework that enables distributed storage and processing using the MapReduce model.",
          },
          {
            id: 5,
            front: "What are the main components of Hadoop?",
            back: "Hadoop Distributed File System (HDFS) and MapReduce are the two core components.",
          },
          {
            id: 6,
            front: "What is the role of HDFS in Hadoop?",
            back: "HDFS stores large files across multiple machines with data replication for fault tolerance.",
          },
          {
            id: 7,
            front: "How does Cloud Computing support Big Data?",
            back: "Cloud Computing provides scalable infrastructure and services for storing, processing, and analyzing Big Data.",
          },
          {
            id: 8,
            front: "Which cloud platforms support Big Data processing?",
            back: "Platforms like AWS, Microsoft Azure, and Google Cloud offer Big Data services like EMR, HDInsight, and Dataproc.",
          },
          {
            id: 9,
            front: "What are the advantages of Cloud Computing in Big Data?",
            back: "Cost efficiency, on-demand scalability, and accessibility from anywhere.",
          },
          {
            id: 10,
            front: "What is In-Memory Computing?",
            back: "In-Memory Computing processes data stored in RAM instead of disk, offering much faster computation.",
          },
          {
            id: 11,
            front:
              "Which technologies are used for In-Memory Computing in Big Data?",
            back: "Technologies like Apache Spark and SAP HANA support in-memory data processing.",
          },
          {
            id: 12,
            front:
              "What is the advantage of using In-Memory Computing for Big Data?",
            back: "It significantly reduces latency and accelerates data processing tasks.",
          },
        ],
      },
      {
        id: 4,
        title: "Unit- 4: Understanding Hadoop Ecosystem",
        key: "understanding-hadoop-ecosystem",
        cards: [
          {
            id: 1,
            front: "What is the history of Hadoop?",
            back: "Hadoop was created by Doug Cutting and Mike Cafarella, inspired by Google's MapReduce and GFS papers. It was later adopted by Yahoo and became an Apache project.",
          },
          {
            id: 2,
            front: "Why was Hadoop developed?",
            back: "Hadoop was developed to process and store massive amounts of data efficiently using distributed computing.",
          },
          {
            id: 3,
            front:
              "Who contributed significantly to Hadoop's early development?",
            back: "Yahoo! played a major role in developing and scaling Hadoop in its early stages.",
          },
          {
            id: 4,
            front: "What is the Hadoop Ecosystem?",
            back: "The Hadoop Ecosystem includes tools and frameworks such as HDFS, MapReduce, Hive, Pig, HBase, Zookeeper, and Sqoop that support data processing and storage.",
          },
          {
            id: 5,
            front: "Name some components of the Hadoop Ecosystem.",
            back: "Hive, Pig, HBase, Sqoop, Flume, Zookeeper, and Oozie.",
          },
          {
            id: 6,
            front: "What is the role of Pig in Hadoop Ecosystem?",
            back: "Pig is a high-level platform for creating MapReduce programs using a scripting language called Pig Latin.",
          },
          {
            id: 7,
            front: "How can data be analyzed with Unix tools?",
            back: "Data can be analyzed using Unix tools like grep, awk, sed, cut, sort, and uniq to process text-based datasets.",
          },
          {
            id: 8,
            front: "Why use Unix tools for Big Data analysis?",
            back: "Unix tools are efficient for line-based text processing and can handle moderately large datasets quickly.",
          },
          {
            id: 9,
            front: "What limitations do Unix tools face in Big Data analysis?",
            back: "They struggle with massive datasets and distributed processing, which is where Hadoop excels.",
          },
          {
            id: 10,
            front: "How is data analyzed using Hadoop?",
            back: "Hadoop processes data through the MapReduce programming model, breaking it into chunks processed in parallel.",
          },
          {
            id: 11,
            front: "What is Hadoop Streaming?",
            back: "Hadoop Streaming is a utility that allows users to create and run MapReduce jobs with any executable or script as the mapper and/or reducer.",
          },
          {
            id: 12,
            front: "Which languages can be used with Hadoop Streaming?",
            back: "Any language that can read from standard input and write to standard output, such as Python, Perl, or Bash.",
          },
          {
            id: 13,
            front: "What is the IBM Big Data Strategy?",
            back: "IBM’s Big Data strategy involves integrating various tools and platforms to manage, analyze, and gain insights from massive datasets.",
          },
          {
            id: 14,
            front: "What is IBM Infosphere BigInsights?",
            back: "BigInsights is IBM’s platform based on Hadoop, designed for large-scale analytics and enterprise-grade features.",
          },
          {
            id: 15,
            front: "What are IBM BigSheets?",
            back: "BigSheets is a spreadsheet-like web tool that helps users analyze web-scale data without writing code.",
          },
        ],
      },
      {
        id: 5,
        title: "Unit- 5: HDFS(Hadoop Distributed File System)",
        key: "hadoop-distributed-file-system",
        cards: [
          {
            id: 1,
            front: "What is HDFS in Hadoop?",
            back: "HDFS (Hadoop Distributed File System) is the primary storage system of Hadoop that stores large files across multiple machines.",
          },
          {
            id: 2,
            front: "How is HDFS designed?",
            back: "HDFS is designed to store very large files with streaming data access, using a master/slave architecture with NameNode and DataNodes.",
          },
          {
            id: 3,
            front: "What are blocks in HDFS?",
            back: "Blocks are fixed-size chunks (default 128MB) into which files are split before storing across DataNodes.",
          },
          {
            id: 4,
            front: "What is the role of NameNode in HDFS?",
            back: "The NameNode manages metadata and file system namespace; it does not store actual data.",
          },
          {
            id: 5,
            front: "What are key HDFS concepts?",
            back: "Key concepts include NameNode, DataNode, block replication, fault tolerance, and scalability.",
          },
          {
            id: 6,
            front: "What is the HDFS replication factor?",
            back: "It is the number of copies of each block stored in the cluster for fault tolerance (default is 3).",
          },
          {
            id: 7,
            front: "What is the HDFS Command Line Interface (CLI)?",
            back: "The HDFS CLI allows users to interact with HDFS using commands like `hdfs dfs -ls`, `-put`, `-get`, etc.",
          },
          {
            id: 8,
            front: "How does Hadoop FileSystem interface work?",
            back: "Hadoop provides an abstract `FileSystem` API that can interface with local, HDFS, and other file systems uniformly.",
          },
          {
            id: 9,
            front: "What is the data flow in Hadoop?",
            back: "Data flows from client to HDFS blocks (replicated across DataNodes) and is processed by MapReduce jobs.",
          },
          {
            id: 10,
            front: "What is Flume in Hadoop?",
            back: "Flume is a tool used to efficiently collect, aggregate, and move large amounts of log data to HDFS.",
          },
          {
            id: 11,
            front: "What is Sqoop in Hadoop?",
            back: "Sqoop is a tool designed for efficiently transferring bulk data between Hadoop and relational databases.",
          },
          {
            id: 12,
            front: "What are Hadoop Archives (HAR)?",
            back: "HAR is a file archiving facility in Hadoop to pack many small files into a single archive for better performance.",
          },
          {
            id: 13,
            front: "What is Hadoop I/O?",
            back: "Hadoop I/O includes mechanisms for reading/writing data, serialization, compression, and file-based formats.",
          },
          {
            id: 14,
            front: "Why is compression used in Hadoop?",
            back: "Compression reduces disk space usage and speeds up data transfer, improving Hadoop performance.",
          },
          {
            id: 15,
            front: "What is Avro in Hadoop?",
            back: "Avro is a serialization framework that uses JSON for defining data schemas and supports compact, fast, binary serialization.",
          },
          {
            id: 16,
            front: "What are file-based data structures in Hadoop?",
            back: "File-based structures include SequenceFile, MapFile, and AvroFile, used for storing key-value pairs and complex data.",
          },
          {
            id: 17,
            front: "What is serialization in Hadoop?",
            back: "Serialization is the process of converting data into a byte stream for storage or transmission in Hadoop.",
          },
        ],
      },
      {
        id: 6,
        title: "Unit- 6 : MapReduce Fundamentals",
        key: "mapreduce-fundamentals",
        cards: [
          {
            id: 1,
            front: "What is the anatomy of a MapReduce job run?",
            back: "A MapReduce job consists of a Map phase, Shuffle and Sort phase, and a Reduce phase. It includes job submission, initialization, task assignment, execution, and completion.",
          },
          {
            id: 2,
            front: "What happens during the Map phase of a MapReduce job?",
            back: "In the Map phase, input data is split into key-value pairs which are processed independently to generate intermediate key-value pairs.",
          },
          {
            id: 3,
            front: "What is the Shuffle and Sort phase in MapReduce?",
            back: "Shuffle distributes the intermediate data to reducers, and Sort organizes the data by key before the Reduce phase.",
          },
          {
            id: 4,
            front: "What occurs during the Reduce phase of a MapReduce job?",
            back: "The Reduce phase aggregates the sorted intermediate key-value pairs and produces the final output.",
          },
          {
            id: 5,
            front: "What types of failures can occur in MapReduce?",
            back: "Failures can include task failure, node failure, job tracker failure, or data corruption.",
          },
          {
            id: 6,
            front: "How does MapReduce handle task failures?",
            back: "MapReduce automatically reschedules failed tasks on other nodes using the task tracker and heartbeat mechanism.",
          },
          {
            id: 7,
            front: "What is job scheduling in MapReduce?",
            back: "Job scheduling is the process of allocating resources and determining the order in which MapReduce jobs are executed.",
          },
          {
            id: 8,
            front: "What is FIFO scheduler in Hadoop?",
            back: "FIFO (First-In-First-Out) is the default scheduler in Hadoop that runs jobs in the order they are submitted.",
          },
          {
            id: 9,
            front: "What is task execution in MapReduce?",
            back: "Task execution involves running the assigned map or reduce task on the allocated node using task trackers.",
          },
          {
            id: 10,
            front: "What are MapReduce types and formats?",
            back: "MapReduce supports various input/output formats like TextInputFormat, KeyValueInputFormat, SequenceFileFormat.",
          },
          {
            id: 11,
            front: "What is TextInputFormat in MapReduce?",
            back: "TextInputFormat is the default format where each line of input is treated as a record with the key as the byte offset.",
          },
          {
            id: 12,
            front: "What is SequenceFileInputFormat?",
            back: "It is a format for reading binary key-value pairs from sequence files in MapReduce jobs.",
          },
          {
            id: 13,
            front: "What are the main features of MapReduce?",
            back: "Features include fault tolerance, scalability, data locality optimization, automatic parallelization, and ease of use.",
          },
          {
            id: 14,
            front: "What is speculative execution in MapReduce?",
            back: "Speculative execution runs duplicate copies of slow tasks to reduce overall job execution time.",
          },
          {
            id: 15,
            front: "What is a combiner in MapReduce?",
            back: "A combiner performs a mini-reduce process to reduce data transfer during the shuffle phase.",
          },
        ],
      },
      {
        id: 7,
        title:
          "Unit- 7 : Understanding Big Data Technology Foundations, Storing Data in Databases and Data Warehouses",
        key: "understanding-big-data-technology-foundations",
        cards: [
          {
            id: 1,
            front: "What is the Big Data stack?",
            back: "The Big Data stack is a layered architecture that includes data sources, storage, processing, analytics, and visualization tools used to handle big data workflows.",
          },
          {
            id: 2,
            front: "Why is understanding the Big Data stack important?",
            back: "Understanding the stack helps in designing scalable and efficient systems for collecting, storing, processing, and analyzing large volumes of data.",
          },
          {
            id: 3,
            front: "What are the layers in the Big Data stack?",
            back: "The layers include Data Sources, Data Storage, Data Processing, Data Analysis, and Data Visualization.",
          },
          {
            id: 4,
            front: "What is virtualization in Big Data?",
            back: "Virtualization is the creation of virtual resources such as servers and storage to improve scalability, flexibility, and efficiency in big data environments.",
          },
          {
            id: 5,
            front: "Name a key benefit of virtualization in Big Data.",
            back: "It enables resource abstraction, allowing better allocation and isolation of computing tasks.",
          },
          {
            id: 6,
            front: "What are two popular virtualization approaches?",
            back: "Hypervisor-based virtualization (e.g., VMware) and containerization (e.g., Docker).",
          },
          {
            id: 7,
            front: "How do containers benefit Big Data applications?",
            back: "Containers offer lightweight, portable environments that simplify deployment and scaling of big data tools.",
          },
          {
            id: 8,
            front: "What is the role of RDBMS in Big Data?",
            back: "RDBMS handles structured data and can be used in combination with big data systems for hybrid analytics.",
          },
          {
            id: 9,
            front: "What is a non-relational database?",
            back: "Also known as NoSQL databases, they handle unstructured or semi-structured data and provide horizontal scalability.",
          },
          {
            id: 10,
            front: "Give an example of a non-relational database.",
            back: "MongoDB, Cassandra, and CouchDB are common examples of NoSQL databases.",
          },
          {
            id: 11,
            front: "What is polyglot persistence?",
            back: "It is the use of different types of databases to handle different parts of an application's data needs.",
          },
          {
            id: 12,
            front: "Why use polyglot persistence?",
            back: "To leverage the strengths of different data storage technologies for varied data types and use cases.",
          },
          {
            id: 13,
            front:
              "How does Big Data integrate with traditional data warehouses?",
            back: "Through data pipelines, connectors, and ETL tools that enable structured and unstructured data integration.",
          },
          {
            id: 14,
            front:
              "What is a key challenge in integrating Big Data with traditional warehouses?",
            back: "Handling data variety and volume while maintaining performance and consistency.",
          },
          {
            id: 15,
            front: "What is the function of a data warehouse in Big Data?",
            back: "It stores historical structured data optimized for fast querying and business intelligence.",
          },
          {
            id: 16,
            front:
              "Name a Big Data analysis tool that integrates with data warehouses.",
            back: "Apache Hive can run SQL-like queries on big data stored in Hadoop, integrating with traditional BI tools.",
          },
          {
            id: 17,
            front: "What are changing deployment models in Big Data?",
            back: "Cloud computing, hybrid cloud, and on-demand platforms have replaced traditional on-premise setups.",
          },
          {
            id: 18,
            front: "Why is cloud deployment preferred for Big Data?",
            back: "It offers scalability, cost-efficiency, and flexibility for storing and processing large volumes of data.",
          },
          {
            id: 19,
            front: "What is the difference between RDBMS and Big Data systems?",
            back: "RDBMS are good for structured data and ACID compliance, while Big Data systems handle massive, diverse data with high velocity.",
          },
          {
            id: 20,
            front: "Give an example of a cloud-based Big Data platform.",
            back: "Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform offer Big Data solutions.",
          },
          {
            id: 21,
            front:
              "What is quick revision in the context of Big Data learning?",
            back: "A concise summary of key concepts and technologies that helps reinforce understanding and memory retention.",
          },
          {
            id: 22,
            front: "How does virtualization reduce hardware dependency?",
            back: "By abstracting hardware, it allows multiple virtual systems to run on a single physical machine, maximizing utilization.",
          },
          {
            id: 23,
            front:
              "What is a major limitation of traditional data warehouses in the Big Data era?",
            back: "Inability to handle high-volume, high-velocity unstructured data efficiently.",
          },
          {
            id: 24,
            front:
              "How can organizations future-proof their data infrastructure?",
            back: "By adopting flexible, cloud-based, and hybrid systems capable of integrating both RDBMS and Big Data tools.",
          },
          {
            id: 25,
            front:
              "Why is understanding deployment models crucial in Big Data?",
            back: "It helps choose the right infrastructure (on-premise, cloud, or hybrid) to meet performance and budget needs.",
          },
        ],
      },
      {
        id: 8,
        title: "Unit- 8 : Processing Your Data with MapReduce",
        key: "processing-your-data-with-mapreduce",
        cards: [
          {
            id: 1,
            front: "What is the MapReduce framework?",
            back: "MapReduce is a programming model for processing large data sets with a distributed algorithm on a cluster.",
          },
          {
            id: 2,
            front: "What are the two main functions in MapReduce?",
            back: "The two primary functions are 'Map', which processes input data into key-value pairs, and 'Reduce', which merges and processes those intermediate results.",
          },
          {
            id: 3,
            front: "How does the 'Map' function work in MapReduce?",
            back: "The Map function takes input data and transforms it into key-value pairs which are then grouped by key.",
          },
          {
            id: 4,
            front: "What does the 'Reduce' function do in MapReduce?",
            back: "The Reduce function processes grouped data by key and performs aggregation or summarization.",
          },
          {
            id: 5,
            front: "Give an example of a simple MapReduce application.",
            back: "A common example is Word Count, where Map emits (word, 1) and Reduce sums the counts for each word.",
          },
          {
            id: 6,
            front: "What is the purpose of a combiner in MapReduce?",
            back: "A combiner performs a local reduce task to minimize data transfer between Map and Reduce phases.",
          },
          {
            id: 7,
            front: "How is data distributed in a MapReduce framework?",
            back: "Input data is split into chunks, and each chunk is processed by a separate Mapper in parallel.",
          },
          {
            id: 8,
            front:
              "What is the role of the Hadoop Distributed File System (HDFS) in MapReduce?",
            back: "HDFS stores the input and output data of MapReduce jobs and ensures data replication across the cluster.",
          },
          {
            id: 9,
            front: "Name a Java class used to develop MapReduce applications.",
            back: "Classes like `Mapper`, `Reducer`, `Job`, and `Configuration` are commonly used in Java MapReduce applications.",
          },
          {
            id: 10,
            front:
              "Why is it important to design key-value pairs carefully in MapReduce?",
            back: "Efficient key-value pair design improves sorting, shuffling, and load balancing during job execution.",
          },
          {
            id: 11,
            front: "What is a 'shuffle and sort' phase in MapReduce?",
            back: "It is the phase between Map and Reduce that transfers and sorts intermediate data by keys to prepare for reduction.",
          },
          {
            id: 12,
            front:
              "What does it mean to design a MapReduce application for scalability?",
            back: "It means creating jobs that can handle increasing data volume and node count without performance degradation.",
          },
          {
            id: 13,
            front: "How does fault tolerance work in MapReduce?",
            back: "If a node fails, the job tracker reassigns the task to another node using redundant data in HDFS.",
          },
          {
            id: 14,
            front:
              "Why is monitoring memory and I/O usage important in MapReduce design?",
            back: "Because resource limits can cause task failures or inefficient performance; optimization ensures reliability.",
          },
          {
            id: 15,
            front:
              "What should be considered when choosing between multiple Reducers?",
            back: "Consider data distribution, reduce complexity, and whether parallelism will benefit result aggregation.",
          },
        ],
      },
    ],
  },
  // CC
  {
    subject_name: "Cloud Computing",
    key: "cloud-computing",
    specialization: "cc",
    units: [
      {
        id: 1,
        title: "Unit- 1 : Introduction",
        key: "introduction",
        cards: [
          {
            id: 1,
            front: "What is cloud computing?",
            back: "Cloud computing is the delivery of computing services like storage, processing, and software over the internet (the cloud) on a pay-as-you-go basis.",
          },
          {
            id: 2,
            front: "What are the main characteristics of cloud computing?",
            back: "The key characteristics include on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service.",
          },
          {
            id: 3,
            front: "What are the advantages of cloud computing?",
            back: "Advantages include cost efficiency, scalability, accessibility, disaster recovery, and automatic software updates.",
          },
          {
            id: 4,
            front: "What are some disadvantages of cloud computing?",
            back: "Disadvantages include security risks, internet dependency, limited control, and potential downtime.",
          },
          {
            id: 5,
            front: "How has cloud computing evolved over time?",
            back: "Cloud computing evolved from early mainframe and client-server models to today's distributed, internet-based computing platforms.",
          },
          {
            id: 6,
            front: "What is the nature of cloud computing?",
            back: "Cloud computing is virtualized, scalable, service-oriented, and network-based, enabling remote access to computing resources.",
          },
          {
            id: 7,
            front: "Name key technologies that support cloud computing.",
            back: "Key technologies include virtualization, distributed computing, grid computing, web services, and broadband internet.",
          },
          {
            id: 8,
            front: "What does migrating into the cloud involve?",
            back: "It involves moving data, applications, and services from on-premises infrastructure to cloud-based environments.",
          },
          {
            id: 9,
            front: "Give an example of a common cloud application.",
            back: "Google Workspace (Docs, Sheets, Drive) is a common cloud-based application suite used for collaboration and productivity.",
          },
          {
            id: 10,
            front: "How does cloud computing work?",
            back: "Cloud providers host data centers with resources accessed by clients via the internet, allocating resources dynamically based on demand.",
          },
          {
            id: 11,
            front: "What is SaaS in cloud computing?",
            back: "Software as a Service (SaaS) delivers software applications over the internet, eliminating the need for local installation.",
          },
          {
            id: 12,
            front: "What is IaaS in cloud computing?",
            back: "Infrastructure as a Service (IaaS) provides virtualized computing infrastructure over the internet, such as servers and storage.",
          },
          {
            id: 13,
            front: "What is PaaS in cloud computing?",
            back: "Platform as a Service (PaaS) offers hardware and software tools over the internet for application development.",
          },
          {
            id: 14,
            front: "What are some current trends in cloud computing?",
            back: "Trends include multi-cloud strategies, edge computing, serverless computing, AI integration, and enhanced security practices.",
          },
          {
            id: 15,
            front: "What is edge computing in the context of cloud trends?",
            back: "Edge computing processes data closer to the data source rather than in centralized cloud servers, reducing latency and improving performance.",
          },
        ],
      },
      {
        id: 2,
        title: "Unit- 2 : Cloud Computing Models",
        key: "cloud-computing-models",
        cards: [
          {
            id: 1,
            front: "What are the main types of cloud?",
            back: "The main types of cloud are Public Cloud, Private Cloud, Hybrid Cloud, and Community Cloud.",
          },
          {
            id: 2,
            front: "What is a Public Cloud?",
            back: "A Public Cloud is a cloud environment owned and operated by a third-party provider, offering services to multiple customers over the internet.",
          },
          {
            id: 3,
            front: "What is a Private Cloud?",
            back: "A Private Cloud is a cloud infrastructure operated solely for a single organization, either managed internally or by a third party.",
          },
          {
            id: 4,
            front: "What is a Hybrid Cloud?",
            back: "A Hybrid Cloud combines public and private clouds, allowing data and applications to move between them for greater flexibility.",
          },
          {
            id: 5,
            front: "What are the major Cloud Service Models?",
            back: "The major cloud service models are Software as a Service (SaaS), Platform as a Service (PaaS), and Infrastructure as a Service (IaaS).",
          },
          {
            id: 6,
            front: "What is SaaS?",
            back: "Software as a Service (SaaS) delivers software applications over the internet, managed by a service provider.",
          },
          {
            id: 7,
            front: "What is PaaS?",
            back: "Platform as a Service (PaaS) provides a platform allowing customers to develop, run, and manage applications without managing the infrastructure.",
          },
          {
            id: 8,
            front: "What is IaaS?",
            back: "Infrastructure as a Service (IaaS) provides virtualized computing resources like servers, storage, and networking on a pay-as-you-go basis.",
          },
          {
            id: 9,
            front:
              "What are other cloud services apart from SaaS, PaaS, and IaaS?",
            back: "Other services include Backend as a Service (BaaS), Function as a Service (FaaS), and Desktop as a Service (DaaS).",
          },
          {
            id: 10,
            front: "What are the main Cloud Deployment Models?",
            back: "The main deployment models are Public Cloud, Private Cloud, Hybrid Cloud, and Community Cloud.",
          },
          {
            id: 11,
            front: "What is Cloud Architecture?",
            back: "Cloud architecture refers to the components and subcomponents required for cloud computing, including front-end and back-end platforms, cloud-based delivery, and a network.",
          },
          {
            id: 12,
            front: "What is the Cloud Computing Reference Model?",
            back: "It’s a layered model defining how different cloud components like infrastructure, platforms, and applications interact in a cloud environment.",
          },
          {
            id: 13,
            front:
              "What is the benefit of using IaaS over traditional infrastructure?",
            back: "IaaS reduces capital expenses and provides scalability and flexibility by offering on-demand infrastructure.",
          },
          {
            id: 14,
            front: "How does SaaS benefit organizations?",
            back: "SaaS eliminates the need for software installation and maintenance, reducing IT workload and costs.",
          },
          {
            id: 15,
            front: "What makes PaaS ideal for developers?",
            back: "PaaS provides tools, libraries, and frameworks that simplify application development and deployment without worrying about infrastructure.",
          },
        ],
      },
      {
        id: 3,
        title: "Unit- 3 : Virtualization Concepts",
        key: "virtualization-concepts",
        cards: [
          {
            id: 1,
            front: "What is virtualization in cloud computing?",
            back: "Virtualization is the process of creating a virtual version of physical resources like servers, storage devices, and networks, enabling efficient utilization of hardware.",
          },
          {
            id: 2,
            front: "What is the architecture of virtualization?",
            back: "Virtualization architecture typically includes a host machine, a hypervisor, and guest virtual machines (VMs) that share the host's physical resources.",
          },
          {
            id: 3,
            front: "What is a hypervisor?",
            back: "A hypervisor is software that allows multiple operating systems to run on a single physical machine by abstracting the hardware.",
          },
          {
            id: 4,
            front: "Name two types of hypervisors.",
            back: "The two types are Type 1 (bare-metal) hypervisors and Type 2 (hosted) hypervisors.",
          },
          {
            id: 5,
            front: "What are some examples of virtualization software?",
            back: "Examples include VMware, Microsoft Hyper-V, Oracle VirtualBox, and KVM.",
          },
          {
            id: 6,
            front: "What are the applications of virtualization?",
            back: "Applications include server consolidation, testing and development, disaster recovery, and running legacy applications.",
          },
          {
            id: 7,
            front: "What is virtual clustering?",
            back: "Virtual clustering involves grouping multiple virtual machines to work together as a single system to improve performance and availability.",
          },
          {
            id: 8,
            front: "What is the anatomy of cloud infrastructure?",
            back: "Cloud infrastructure includes physical servers, storage, networking, virtualization software, and management tools that support cloud services.",
          },
          {
            id: 9,
            front: "What is virtual infrastructure?",
            back: "Virtual infrastructure is a collection of virtualized resources such as servers, storage, and networks that support IT operations without relying on physical hardware.",
          },
          {
            id: 10,
            front: "What is CPU virtualization?",
            back: "CPU virtualization allows multiple operating systems to share the CPU's physical resources efficiently through abstraction.",
          },
          {
            id: 11,
            front: "What is network virtualization?",
            back: "Network virtualization creates a virtual version of physical network resources, enabling multiple virtual networks to operate independently on the same hardware.",
          },
          {
            id: 12,
            front: "What is storage virtualization?",
            back: "Storage virtualization combines multiple physical storage devices into a single virtual storage pool that is easier to manage and scale.",
          },
          {
            id: 13,
            front: "How does virtualization support cloud computing?",
            back: "Virtualization provides scalability, resource efficiency, and flexibility, which are core features of cloud computing services.",
          },
          {
            id: 14,
            front: "What are the benefits of using virtual infrastructure?",
            back: "Benefits include cost savings, faster deployment, better resource utilization, and simplified disaster recovery.",
          },
          {
            id: 15,
            front: "What is the role of virtualization in disaster recovery?",
            back: "Virtualization allows for quick backup and recovery of systems by restoring virtual machines on different hardware in case of failures.",
          },
        ],
      },
      {
        id: 4,
        title: "Unit- 4 : Cloud Storage",
        key: "cloud-storage",
        cards: [
          {
            id: 1,
            front: "What is cloud data storage?",
            back: "Cloud data storage refers to storing digital data on remote servers that can be accessed over the internet.",
          },
          {
            id: 2,
            front: "What are the key benefits of cloud data storage?",
            back: "Benefits include scalability, cost efficiency, accessibility, data backup, and disaster recovery.",
          },
          {
            id: 3,
            front: "What are the common storage options in the cloud?",
            back: "Common options include object storage, block storage, and file storage.",
          },
          {
            id: 4,
            front: "What is object storage in the cloud?",
            back: "Object storage stores data as objects with metadata and unique identifiers, ideal for large unstructured data.",
          },
          {
            id: 5,
            front: "What is block storage in the cloud?",
            back: "Block storage divides data into blocks and stores them separately, suitable for databases and transactional apps.",
          },
          {
            id: 6,
            front: "What is file storage in the cloud?",
            back: "File storage organizes data in a hierarchical file system and is ideal for shared file access.",
          },
          {
            id: 7,
            front: "What is structured storage in cloud computing?",
            back: "Structured storage involves storing data in organized formats such as tables or databases, suitable for relational data.",
          },
          {
            id: 8,
            front: "What is unstructured storage in cloud computing?",
            back: "Unstructured storage handles formats like images, videos, and documents, which don’t follow a predefined model.",
          },
          {
            id: 9,
            front: "What are cloud storage services?",
            back: "Cloud storage services include platforms like Amazon S3, Google Cloud Storage, and Microsoft Azure Blob Storage.",
          },
          {
            id: 10,
            front: "What is data storage management in the cloud?",
            back: "It involves managing how and where data is stored, ensuring availability, security, and performance.",
          },
          {
            id: 11,
            front: "What are cloud data stores?",
            back: "Cloud data stores are managed storage systems like NoSQL databases or object storage systems used in the cloud.",
          },
          {
            id: 12,
            front: "What does provisioning cloud storage mean?",
            back: "Provisioning refers to allocating cloud storage resources based on user or application needs.",
          },
          {
            id: 13,
            front:
              "Name some data-intensive technologies used in cloud computing.",
            back: "Technologies include Hadoop, Spark, and big data platforms that process large datasets in the cloud.",
          },
          {
            id: 14,
            front:
              "What is the difference between LAN and WAN in cloud storage?",
            back: "LAN is a local area network for on-premise storage; WAN connects cloud storage over the internet for broader access.",
          },
          {
            id: 15,
            front: "What is distributed data storage in the cloud?",
            back: "It stores data across multiple physical locations, improving availability, redundancy, and performance.",
          },
          {
            id: 16,
            front: "Give examples of applications utilizing cloud storage.",
            back: "Examples include Google Drive, Dropbox, OneDrive, Netflix (for media streaming), and Salesforce (for CRM data).",
          },
          {
            id: 17,
            front:
              "How does the cloud ensure data durability and availability?",
            back: "By replicating data across multiple regions and using fault-tolerant infrastructure.",
          },
          {
            id: 18,
            front: "What is cold storage in cloud computing?",
            back: "Cold storage refers to storing infrequently accessed data at lower costs, such as Amazon Glacier.",
          },
          {
            id: 19,
            front: "How is cloud storage secured?",
            back: "Using encryption (in-transit and at-rest), access control policies, and authentication mechanisms.",
          },
          {
            id: 20,
            front: "What are some challenges in cloud data storage?",
            back: "Challenges include latency, data transfer costs, vendor lock-in, and regulatory compliance.",
          },
        ],
      },
      {
        id: 5,
        title: "Unit- 5 : Cloud Risks and Cloud Security",
        key: "cloud-risks-and-cloud-security",
        cards: [
          {
            id: 1,
            front: "What are the main risks associated with cloud computing?",
            back: "Risks include data breaches, loss of control over data, downtime, compliance issues, and vendor lock-in.",
          },
          {
            id: 2,
            front: "What is risk management in cloud computing?",
            back: "Risk management involves identifying, assessing, and mitigating potential risks to cloud services and data.",
          },
          {
            id: 3,
            front:
              "How does cloud computing impact enterprise risk management?",
            back: "It introduces new risk vectors like data exposure, requiring updated enterprise-wide strategies and tools.",
          },
          {
            id: 4,
            front: "Name some types of risks in cloud computing.",
            back: "Types include operational risk, compliance risk, data security risk, and reputational risk.",
          },
          {
            id: 5,
            front: "What is cloud data security?",
            back: "Cloud data security involves protecting digital data stored in cloud environments from unauthorized access and breaches.",
          },
          {
            id: 6,
            front: "What is a digital persona in cloud security?",
            back: "A digital persona refers to the identity and attributes of a user in a digital environment, critical for authentication and privacy.",
          },
          {
            id: 7,
            front: "What is content-level security in cloud computing?",
            back: "It refers to securing the actual content or data rather than just the system or infrastructure it's stored on.",
          },
          {
            id: 8,
            front: "What is the shared security model in cloud?",
            back: "It's a model where cloud providers handle infrastructure security while users are responsible for securing their data and applications.",
          },
          {
            id: 9,
            front: "What are some common cloud security services?",
            back: "Examples include identity and access management (IAM), encryption services, security monitoring, and DDoS protection.",
          },
          {
            id: 10,
            front: "What is authentication in cloud security?",
            back: "Authentication is the process of verifying the identity of users accessing cloud resources.",
          },
          {
            id: 11,
            front: "What is security authorization in cloud computing?",
            back: "Authorization determines what an authenticated user is allowed to access or perform in the cloud environment.",
          },
          {
            id: 12,
            front: "What are some major challenges in securing the cloud?",
            back: "Challenges include data breaches, insider threats, insecure APIs, and compliance with regulations.",
          },
          {
            id: 13,
            front: "What are the requirements for secure cloud software?",
            back: "They include secure coding practices, regular updates, vulnerability assessments, and compliance with security standards.",
          },
          {
            id: 14,
            front: "Why is software testing important for cloud security?",
            back: "It helps identify and fix vulnerabilities before deployment, ensuring the reliability and security of cloud-based applications.",
          },
          {
            id: 15,
            front: "What role does encryption play in cloud security?",
            back: "Encryption protects data by converting it into unreadable code, ensuring only authorized users can access it.",
          },
        ],
      },
      {
        id: 6,
        title: "Unit- 6 : Google Cloud Platform",
        key: "google-cloud-platform",
        cards: [
          {
            id: 1,
            front: "What is the GCP Console?",
            back: "The GCP Console is a web-based interface to manage Google Cloud resources and services.",
          },
          {
            id: 2,
            front: "What are GCP Projects?",
            back: "GCP Projects are containers for resources and settings in Google Cloud, enabling organization and billing separation.",
          },
          {
            id: 3,
            front: "How do you install the Google Cloud SDK?",
            back: "Download the SDK from the official site, then run the installer and initialize it using `gcloud init`.",
          },
          {
            id: 4,
            front: "What is Cloud Shell in GCP?",
            back: "Cloud Shell is a browser-based command-line tool for managing GCP resources without local installation.",
          },
          {
            id: 5,
            front: "What are GCP APIs used for?",
            back: "GCP APIs allow programmatic access to Google Cloud services like Compute Engine, Cloud Storage, and more.",
          },
          {
            id: 6,
            front: "What is the GCP Console Mobile App?",
            back: "The mobile app provides access to monitor and manage GCP resources on the go.",
          },
          {
            id: 7,
            front: "What compute options does GCP offer?",
            back: "GCP offers Compute Engine (VMs), App Engine (PaaS), Kubernetes Engine, and Cloud Functions.",
          },
          {
            id: 8,
            front: "What is Compute Engine in GCP?",
            back: "Compute Engine provides IaaS virtual machines with custom configurations and scalability.",
          },
          {
            id: 9,
            front: "What is IaaS in the context of GCP?",
            back: "Infrastructure as a Service (IaaS) allows users to run virtual machines and manage infrastructure without owning hardware.",
          },
          {
            id: 10,
            front: "How can GCP autoscale applications?",
            back: "GCP uses Managed Instance Groups with autoscaling policies to dynamically add or remove VM instances based on demand.",
          },
          {
            id: 11,
            front: "What is the purpose of the `gcloud` CLI?",
            back: "`gcloud` is a command-line interface to manage GCP services, resources, deployments, and configurations.",
          },
          {
            id: 12,
            front: "What are the steps to configure elastic apps in GCP?",
            back: "Use Managed Instance Groups, define autoscaling policies, set up load balancers, and monitor performance metrics.",
          },
          {
            id: 13,
            front: "Can you use Cloud Shell to deploy apps?",
            back: "Yes, Cloud Shell can be used to write, deploy, and manage applications directly in the browser.",
          },
          {
            id: 14,
            front: "What is the significance of billing in GCP Projects?",
            back: "Each GCP Project is associated with a billing account, allowing detailed cost tracking and resource management.",
          },
          {
            id: 15,
            front: "Why is it beneficial to use GCP APIs?",
            back: "GCP APIs allow automation, integration with other tools, and custom management of GCP services programmatically.",
          },
        ],
      },
    ],
  },
  // CSF
  {
    subject_name: "Cyber Security and Forensics",
    key: "cyber-secury-and-forensics",
    specialization: "csf",
    units: [
      {
        id: 1,
        title: "Unit- 1 : Security Principles and Practices",
        key: "security-principles-and-practices",
        cards: [
          {
            id: 1,
            front: "What is Information Security?",
            back: "Information security is the protection of information and systems from unauthorized access, disclosure, disruption, modification, or destruction.",
          },
          {
            id: 2,
            front: "What is the Network Security Model?",
            back: "The network security model ensures secure communication by protecting data during transmission using encryption, authentication, and firewalls.",
          },
          {
            id: 3,
            front: "What is Cryptography?",
            back: "Cryptography is the science of encoding and decoding information to protect it from unauthorized access.",
          },
          {
            id: 4,
            front: "Name common attacks on cryptosystems.",
            back: "Brute force attack, ciphertext-only attack, known-plaintext attack, chosen-plaintext attack, and man-in-the-middle attack.",
          },
          {
            id: 5,
            front: "What is Traditional Cryptography?",
            back: "Traditional cryptography refers to classical techniques like Caesar Cipher, Monoalphabetic Cipher, and Vigenère Cipher.",
          },
          {
            id: 6,
            front: "What is a Block Cipher?",
            back: "A block cipher encrypts data in fixed-size blocks (e.g., 64-bit or 128-bit blocks) using a symmetric key.",
          },
          {
            id: 7,
            front: "What is a Stream Cipher?",
            back: "A stream cipher encrypts data one bit or byte at a time, often using a keystream generator.",
          },
          {
            id: 8,
            front: "What is Symmetric Key Encryption?",
            back: "Symmetric key encryption uses the same key for both encryption and decryption.",
          },
          {
            id: 9,
            front: "What is Asymmetric Key Encryption?",
            back: "Asymmetric encryption uses a pair of keys: a public key for encryption and a private key for decryption.",
          },
          {
            id: 10,
            front: "What is a Feistel Cipher?",
            back: "A Feistel Cipher is a symmetric structure used in many block ciphers, including DES, involving repeated rounds of processing.",
          },
          {
            id: 11,
            front: "What is DES?",
            back: "DES (Data Encryption Standard) is a symmetric-key block cipher that encrypts data in 64-bit blocks using a 56-bit key.",
          },
          {
            id: 12,
            front: "What is 3DES?",
            back: "3DES (Triple DES) applies the DES algorithm three times with different keys to increase security.",
          },
          {
            id: 13,
            front: "What is AES?",
            back: "AES (Advanced Encryption Standard) is a symmetric block cipher that supports key sizes of 128, 192, and 256 bits for encrypting 128-bit blocks.",
          },
          {
            id: 14,
            front: "What are Block Cipher Modes of Operation?",
            back: "Examples include ECB (Electronic Codebook), CBC (Cipher Block Chaining), CFB (Cipher Feedback), OFB (Output Feedback), and CTR (Counter).",
          },
          {
            id: 15,
            front: "What is Public Key Encryption?",
            back: "Public Key Encryption uses a pair of keys: the public key for encryption and the private key for decryption.",
          },
          {
            id: 16,
            front: "What is a Public Key Infrastructure (PKI)?",
            back: "PKI is a framework that manages digital keys and certificates for secure communication using public key encryption.",
          },
          {
            id: 17,
            front: "What is the RSA Algorithm?",
            back: "RSA is a widely-used public key cryptosystem based on the difficulty of factoring large integers.",
          },
          {
            id: 18,
            front: "What is a Hash Function?",
            back: "A hash function generates a fixed-size output (hash) from an input, used for data integrity verification.",
          },
          {
            id: 19,
            front: "What is a Message Authentication Code (MAC)?",
            back: "MAC is a short piece of information used to authenticate a message and ensure its integrity and authenticity.",
          },
          {
            id: 20,
            front: "What is a Digital Signature?",
            back: "A digital signature is a cryptographic method to verify the authenticity and integrity of a message, document, or software.",
          },
        ],
      },
      {
        id: 2,
        title: "Unit- 2 : Security Threats",
        key: "security-threats",
        cards: [
          {
            id: 1,
            front: "What is a Worm?",
            back: "A worm is a type of malware that replicates itself and spreads to other computers without human interaction.",
          },
          {
            id: 2,
            front: "What is a Virus?",
            back: "A virus is malicious code that attaches itself to a host program and spreads when the infected program is executed.",
          },
          {
            id: 3,
            front: "What is a Trojan Horse?",
            back: "A Trojan horse is malware disguised as legitimate software, which once executed, can cause harm or steal data.",
          },
          {
            id: 4,
            front: "What is Malware?",
            back: "Malware is any software intentionally designed to cause damage to a computer system or network.",
          },
          {
            id: 5,
            front: "What is Malicious Spyware?",
            back: "Malicious spyware secretly gathers user information without consent and transmits it to third parties.",
          },
          {
            id: 6,
            front: "What is Adware?",
            back: "Adware displays unwanted advertisements and can track user behavior, often bundled with free software.",
          },
          {
            id: 7,
            front: "What is a Botnet?",
            back: "A botnet is a network of infected devices controlled remotely to perform malicious tasks like DDoS attacks.",
          },
          {
            id: 8,
            front: "What is Spam?",
            back: "Spam refers to unwanted or unsolicited messages, usually sent in bulk via email, often containing phishing or ads.",
          },
          {
            id: 9,
            front: "What is Phishing?",
            back: "Phishing is a cyber attack that tricks individuals into revealing sensitive information through fake websites or emails.",
          },
          {
            id: 10,
            front: "What is a Stack Overflow Attack?",
            back: "A stack overflow attack exploits the call stack memory by overflowing it with malicious code, often leading to execution of arbitrary code.",
          },
          {
            id: 11,
            front: "What is a Buffer Overflow Attack?",
            back: "Buffer overflow occurs when more data is written to a buffer than it can hold, which may allow attackers to overwrite adjacent memory.",
          },
        ],
      },
      {
        id: 3,
        title: "Unit- 3 : Operating System Security",
        key: "operating-system-security",
        cards: [
          {
            id: 1,
            front:
              "What is the role of operating systems in information systems applications?",
            back: "Operating systems manage hardware and software resources, providing a platform for information systems to run efficiently and securely.",
          },
          {
            id: 2,
            front:
              "How do operating systems support multitasking in information systems?",
            back: "Operating systems use process scheduling and resource allocation to allow multiple tasks to run concurrently.",
          },
          {
            id: 3,
            front:
              "Why is the OS important in managing information system applications?",
            back: "It ensures proper execution, security, resource management, and interface for application interaction.",
          },
          {
            id: 4,
            front: "What is operating system security?",
            back: "OS security refers to protecting the system's resources and data from unauthorized access and threats.",
          },
          {
            id: 5,
            front: "Name a few key components of OS security.",
            back: "User authentication, access control, auditing, and encryption.",
          },
          {
            id: 6,
            front: "What is a patched operating system?",
            back: "A patched OS is one that has received updates or fixes to correct security vulnerabilities and bugs.",
          },
          {
            id: 7,
            front: "Why is patching the OS critical for system security?",
            back: "It fixes known security flaws and prevents exploitation by attackers.",
          },
          {
            id: 8,
            front: "What are protected objects in an operating system?",
            back: "Protected objects include files, memory, I/O devices, and system processes that require controlled access.",
          },
          {
            id: 9,
            front: "Name some methods of protection used by operating systems.",
            back: "Access control lists, user permissions, role-based access, and sandboxing.",
          },
          {
            id: 10,
            front: "What is memory address protection?",
            back: "It prevents processes from accessing memory allocated to other processes, ensuring data integrity and isolation.",
          },
          {
            id: 11,
            front: "How does OS achieve memory address protection?",
            back: "Using techniques like virtual memory, segmentation, and paging.",
          },
          {
            id: 12,
            front: "What is file protection mechanism in OS?",
            back: "It controls access to files and directories through permissions, encryption, and secure access methods.",
          },
          {
            id: 13,
            front: "What are common file protection techniques?",
            back: "Read/write/execute permissions, encryption, and user authentication.",
          },
          {
            id: 14,
            front: "What is the significance of protected methods in OS?",
            back: "They help maintain system stability and confidentiality by restricting access to critical operations.",
          },
          {
            id: 15,
            front: "What is the principle of least privilege in OS security?",
            back: "It means users and processes should have the minimum level of access necessary to perform their tasks.",
          },
        ],
      },
      {
        id: 4,
        title: "Unit- 4 : Wireless Networks Security",
        key: "wireless-networks-security",
        cards: [
          {
            id: 1,
            front: "What is wireless technology?",
            back: "Wireless technology enables communication without physical cables, using electromagnetic waves for data transmission.",
          },
          {
            id: 2,
            front: "Name some common wireless technologies.",
            back: "Wi-Fi, Bluetooth, ZigBee, LTE, 5G, and infrared.",
          },
          {
            id: 3,
            front: "What are the advantages of wireless communication?",
            back: "Mobility, scalability, ease of installation, and cost-effectiveness.",
          },
          {
            id: 4,
            front: "What is Wired Equivalent Privacy (WEP)?",
            back: "WEP is an outdated security protocol for wireless networks that aimed to provide similar protection as wired networks.",
          },
          {
            id: 5,
            front: "What are the weaknesses of WEP?",
            back: "WEP uses static encryption keys and is vulnerable to brute-force and replay attacks.",
          },
          {
            id: 6,
            front: "What is Wi-Fi Protected Access (WPA)?",
            back: "WPA was developed as an improvement over WEP, offering dynamic key encryption and message integrity checks.",
          },
          {
            id: 7,
            front: "How does WPA differ from WPA2?",
            back: "WPA2 uses a stronger encryption standard (AES) compared to WPA (TKIP), making it more secure.",
          },
          {
            id: 8,
            front: "What is WPA2?",
            back: "WPA2 is a security protocol that uses AES encryption to provide robust protection for wireless networks.",
          },
          {
            id: 9,
            front: "What is an attack on a wireless network?",
            back: "It's an attempt to exploit vulnerabilities in wireless systems to gain unauthorized access or disrupt services.",
          },
          {
            id: 10,
            front: "What are some common attacks on wireless networks?",
            back: "Eavesdropping, rogue access points, denial of service (DoS), MAC spoofing, and man-in-the-middle (MitM) attacks.",
          },
          {
            id: 11,
            front: "How can wireless networks be secured?",
            back: "Using strong encryption protocols (like WPA2/WPA3), MAC filtering, firewalls, and secure authentication methods.",
          },
          {
            id: 12,
            front: "Why is WPA2 preferred over WEP and WPA?",
            back: "Because it provides stronger encryption (AES) and improved data integrity, reducing vulnerability to attacks.",
          },
          {
            id: 13,
            front: "What is a rogue access point?",
            back: "A rogue AP is an unauthorized wireless access point installed to bypass network security controls.",
          },
          {
            id: 14,
            front:
              "What is a denial-of-service (DoS) attack in wireless networks?",
            back: "It's an attack that overwhelms the network with traffic, making it unavailable to legitimate users.",
          },
          {
            id: 15,
            front: "What is MAC spoofing in wireless attacks?",
            back: "It's a technique where an attacker disguises their MAC address to impersonate a legitimate device on the network.",
          },
        ],
      },
      {
        id: 5,
        title: "Unit- 5 : Understanding Cyber Forensics",
        key: "understanding-cyber-forensics",
        cards: [
          {
            id: 1,
            front: "What is Computer Forensics?",
            back: "Computer Forensics is the application of investigative techniques to collect and analyze digital evidence from computers and storage devices.",
          },
          {
            id: 2,
            front: "Define Cyber Forensics.",
            back: "Cyber Forensics focuses on tracking, recording, and analyzing network events to discover the source of security attacks or other problem incidents.",
          },
          {
            id: 3,
            front: "What is Digital Evidence?",
            back: "Digital Evidence refers to information or data stored or transmitted in digital form that can be used in court.",
          },
          {
            id: 4,
            front: "What are the Rules of Evidence?",
            back: "Rules of Evidence are legal standards that determine what digital evidence is admissible in court, focusing on authenticity, integrity, and relevance.",
          },
          {
            id: 5,
            front: "What is RFC282?",
            back: "RFC282 (RFC 2822) defines the format for text messages sent via email, which is useful in forensic email analysis.",
          },
          {
            id: 6,
            front: "How is email analyzed in forensic investigations?",
            back: "Email forensics involves analyzing headers, content, and metadata to trace origins, detect tampering, or retrieve deleted messages.",
          },
          {
            id: 7,
            front: "What is the Digital Forensics Life Cycle?",
            back: "The life cycle includes Identification, Preservation, Collection, Examination, Analysis, Presentation, and Decision.",
          },
          {
            id: 8,
            front: "What is Chain of Custody in forensics?",
            back: "Chain of Custody is the documented process of maintaining and transferring evidence to ensure its integrity.",
          },
          {
            id: 9,
            front: "What is Network Forensics?",
            back: "Network Forensics is the analysis of network traffic data to investigate incidents and detect intrusions.",
          },
          {
            id: 10,
            front: "Why set up a Computer Forensics Lab?",
            back: "A forensic lab provides a secure environment with specialized tools for investigating and analyzing digital evidence.",
          },
          {
            id: 11,
            front: "What is Steganography in the context of forensics?",
            back: "Steganography is the practice of hiding data within other data, like images or audio, making detection and extraction key tasks in forensics.",
          },
          {
            id: 12,
            front: "What are Rootkits?",
            back: "Rootkits are malicious tools that enable unauthorized access while hiding their presence from detection software.",
          },
          {
            id: 13,
            front: "What is Information Hiding?",
            back: "It is the technique of embedding information within other content, often used in steganography and watermarking.",
          },
          {
            id: 14,
            front: "How does the OSI Model relate to Computer Forensics?",
            back: "Each OSI layer provides different forensic data points—e.g., IP addresses (Network Layer), data integrity (Transport Layer), etc.",
          },
          {
            id: 15,
            front:
              "What forensic challenges exist with social networking sites?",
            back: "Challenges include handling privacy settings, deleted content, encrypted data, and identifying the source of threats.",
          },
          {
            id: 16,
            front:
              "How do social networking sites relate to digital forensics?",
            back: "They are often sources of digital evidence in cybercrime cases involving harassment, data leakage, and identity theft.",
          },
        ],
      },
      {
        id: 6,
        title: "Unit- 6 : Challenges in Cyber Forensics",
        key: "challenges-in-cyber-forensics",
        cards: [
          {
            id: 1,
            front: "What are some technical challenges in computer forensics?",
            back: "Challenges include understanding raw data formats, diverse file systems, encryption, and recovering deleted or hidden files.",
          },
          {
            id: 2,
            front:
              "Why is understanding raw data structure important in forensics?",
            back: "Raw data must be correctly interpreted to recover evidence accurately without data corruption or loss.",
          },
          {
            id: 3,
            front: "What are the legal challenges in computer forensics?",
            back: "Legal challenges include data jurisdiction, chain of custody, obtaining proper warrants, and ensuring evidence admissibility in court.",
          },
          {
            id: 4,
            front: "What are common data privacy issues in digital forensics?",
            back: "Data privacy concerns involve accessing personal information without consent, potential data breaches, and violating regulations like GDPR.",
          },
          {
            id: 5,
            front: "What are some special digital forensics tools?",
            back: "Tools include EnCase, FTK (Forensic Toolkit), Autopsy, Wireshark, Sleuth Kit, and Volatility Framework.",
          },
          {
            id: 6,
            front: "What is the use of data mining in cyber forensics?",
            back: "Data mining helps discover patterns, detect anomalies, and analyze large datasets for investigative insights in cyber forensics.",
          },
          {
            id: 7,
            front: "What is forensic auditing?",
            back: "Forensic auditing is the examination of financial records using forensic techniques to detect fraud, embezzlement, or financial misconduct.",
          },
          {
            id: 8,
            front: "What is anti-forensics?",
            back: "Anti-forensics involves techniques used to obstruct forensic investigations by hiding, encrypting, or destroying digital evidence.",
          },
          {
            id: 9,
            front: "Name some anti-forensics techniques.",
            back: "Techniques include data wiping, steganography, encryption, timestamp manipulation, and using rootkits to conceal activities.",
          },
          {
            id: 10,
            front: "How can legal frameworks support forensic investigators?",
            back: "By defining data access rights, maintaining evidence admissibility, and establishing procedures to ensure proper handling of digital evidence.",
          },
        ],
      },
      {
        id: 7,
        title: "Unit- 7 : Forensics of Hand-Held Devices",
        key: "forensics-of-hand-held-devices",
        cards: [
          {
            id: 1,
            front:
              "What is digital forensics in the context of hand-held devices?",
            back: "It involves recovering, analyzing, and preserving digital data from mobile phones, PDAs, printers, scanners, smartphones, and other handheld devices.",
          },
          {
            id: 2,
            front:
              "Which devices are commonly included in hand-held digital forensics?",
            back: "Mobile phones, PDAs, printers, scanners, smartphones, and iPhones are commonly analyzed.",
          },
          {
            id: 3,
            front: "What is a Personal Digital Assistant (PDA)?",
            back: "A PDA is a mobile device used for managing contacts, appointments, and tasks, which can contain valuable digital evidence.",
          },
          {
            id: 4,
            front:
              "What are common forensic challenges with digital images from still cameras?",
            back: "Challenges include metadata analysis, image manipulation detection, and linking images to specific devices or users.",
          },
          {
            id: 5,
            front:
              "What are the forensic challenges specific to BlackBerry devices?",
            back: "Challenges include proprietary OS, encrypted communications, and secure enterprise-level messaging systems.",
          },
          {
            id: 6,
            front: "What is EnCase used for in handheld device forensics?",
            back: "EnCase is a forensic tool used to acquire, analyze, and report digital data from various devices, including mobile phones.",
          },
          {
            id: 7,
            front: "What does Device Seizure do?",
            back: "Device Seizure is a forensic tool used for extracting and analyzing data from mobile devices.",
          },
          {
            id: 8,
            front: "What is PDA Seizure?",
            back: "PDA Seizure is a tool for extracting forensic data from PDAs and smartphones.",
          },
          {
            id: 9,
            front: "What is Palm DD?",
            back: "Palm DD is a forensic acquisition tool used to extract data from Palm OS devices.",
          },
          {
            id: 10,
            front: "What is Cell Seizure used for?",
            back: "Cell Seizure is used to recover and examine data from cell phones, including messages, call logs, and contacts.",
          },
          {
            id: 11,
            front: "What is MOBILedit used for in forensics?",
            back: "MOBILedit is a tool used for phone content extraction and analysis in forensic investigations.",
          },
          {
            id: 12,
            front: "What is the Forensic SIM tool?",
            back: "Forensic SIM tools help in extracting and analyzing data from SIM cards, including contacts and SMS messages.",
          },
          {
            id: 13,
            front:
              "Why are organizational guidelines important for cell phone forensics?",
            back: "They ensure standard procedures are followed for data preservation, evidence integrity, and legal admissibility.",
          },
          {
            id: 14,
            front:
              "What is meant by hand-held forensics as a specialty domain?",
            back: "It refers to the focused field of digital forensics dealing specifically with mobile and portable digital devices in crime investigations.",
          },
          {
            id: 15,
            front: "What are common challenges in smartphone forensics?",
            back: "Challenges include data encryption, frequent OS updates, locked devices, and proprietary apps and formats.",
          },
        ],
      },
      {
        id: 8,
        title: "Unit- 8 : Concept of Virtualization",
        key: "concept-of-visualization",
        cards: [
          {
            id: 1,
            front: "What is Software Virtualization?",
            back: "Software virtualization allows multiple virtual environments to run on a single physical machine by abstracting the hardware through software.",
          },
          {
            id: 2,
            front: "What are the benefits of Software Virtualization?",
            back: "It improves resource utilization, provides environment isolation, and allows for easy testing and deployment of applications.",
          },
          {
            id: 3,
            front: "Give an example of Software Virtualization.",
            back: "VirtualBox or VMware Workstation is an example where virtual machines can run on a host OS.",
          },
          {
            id: 4,
            front: "What is Hardware Virtualization?",
            back: "Hardware virtualization is the abstraction of physical hardware by using a hypervisor to create and manage virtual machines.",
          },
          {
            id: 5,
            front:
              "What is the role of a hypervisor in Hardware Virtualization?",
            back: "A hypervisor manages multiple virtual machines and allocates resources like CPU and memory to each VM.",
          },
          {
            id: 6,
            front: "Name two types of hypervisors.",
            back: "Type 1 (bare-metal) and Type 2 (hosted) hypervisors.",
          },
          {
            id: 7,
            front: "What is OS Partitioning?",
            back: "OS partitioning divides a single operating system into isolated containers or environments that can run applications independently.",
          },
          {
            id: 8,
            front: "How is OS Partitioning different from Virtualization?",
            back: "OS partitioning shares a single OS kernel across partitions, while virtualization uses separate OS instances for each VM.",
          },
          {
            id: 9,
            front: "Give an example of OS Partitioning technology.",
            back: "Linux Containers (LXC) or Docker.",
          },
          {
            id: 10,
            front: "What is VMware?",
            back: "VMware is a virtualization platform that provides tools for creating and managing virtual machines on Windows and Linux systems.",
          },
          {
            id: 11,
            front: "Name two popular VMware products.",
            back: "VMware Workstation and VMware ESXi.",
          },
          {
            id: 12,
            front: "Can VMware be used on both Windows and Linux?",
            back: "Yes, VMware provides compatible virtualization tools for both Windows and Linux environments.",
          },
          {
            id: 13,
            front: "What is the role of Windows in virtualization?",
            back: "Windows can act as both a host and guest operating system in virtualization platforms like VMware and Hyper-V.",
          },
          {
            id: 14,
            front: "How does Linux support virtualization?",
            back: "Linux supports virtualization through tools like KVM (Kernel-based Virtual Machine) and containerization via Docker or LXC.",
          },
          {
            id: 15,
            front: "What is a virtual machine (VM)?",
            back: "A VM is a software emulation of a physical computer that runs an operating system and applications like a physical device.",
          },
        ],
      },
      {
        id: 9,
        title: "Unit- 9 : Introduction to kali linux / Santoku",
        key: "introduction-to-kali-linux-santoku",
        cards: [
          {
            id: 1,
            front: "What is Autopsy in digital forensics?",
            back: "Autopsy is a digital forensics platform and graphical interface to The Sleuth Kit, used to investigate hard drives and smartphones.",
          },
          {
            id: 2,
            front: "What are the features of Autopsy?",
            back: "Features include timeline analysis, keyword search, web artifacts, file metadata viewer, and hash filtering.",
          },
          {
            id: 3,
            front: "What types of investigations is Autopsy used for?",
            back: "It is used for law enforcement, corporate investigations, and incident response.",
          },
          {
            id: 4,
            front: "What is ADB in mobile forensics?",
            back: "ADB (Android Debug Bridge) is a command-line tool used to communicate with and control Android devices, often used in mobile forensic investigations.",
          },
          {
            id: 5,
            front: "How does ADB help in mobile forensics?",
            back: "ADB allows forensic experts to extract data, install applications like DIVA.apk, and interact with the file system of Android devices.",
          },
          {
            id: 6,
            front: "What is required to use ADB in forensics?",
            back: "USB debugging must be enabled on the Android device and proper authorization must be granted.",
          },
          {
            id: 7,
            front: "What is DIVA.apk in mobile forensics?",
            back: "DIVA (Damn Insecure and Vulnerable App) is a deliberately insecure Android application used for security training and testing forensic tools.",
          },
          {
            id: 8,
            front: "Why is DIVA.apk used in forensics?",
            back: "DIVA helps understand common vulnerabilities in Android apps and allows practitioners to simulate attacks and test forensics skills.",
          },
          {
            id: 9,
            front: "Can DIVA.apk be used in a real forensic case?",
            back: "No, it's used only for educational and training purposes to understand mobile vulnerabilities.",
          },
          {
            id: 10,
            front: "What are common use cases of mobile forensics?",
            back: "Recovering deleted data, analyzing app activity, retrieving call logs, messages, and geo-location data from mobile devices.",
          },
        ],
      },
    ],
  },
  // FSWD
  {
    subject_name: "Full Stack Web Development",
    key: "full-stack-web-development",
    specialization: "fswd",
    units: [
      {
        id: 1,
        title: "Unit- 1 : Java Date & Time",
        key: "java-date-and-time",
        cards: [
          {
            id: 1,
            front: "What is the Java Time API?",
            back: "Java Time API introduced in Java 8 provides a comprehensive model for date and time handling with immutability and thread-safety.",
          },
          {
            id: 2,
            front: "What does LocalDate represent?",
            back: "LocalDate represents a date without time or time zone, like 2025-04-04.",
          },
          {
            id: 3,
            front: "What does LocalTime represent?",
            back: "LocalTime represents a time without a date or time zone, like 14:30:00.",
          },
          {
            id: 4,
            front: "What is LocalDateTime in Java?",
            back: "LocalDateTime represents a date and time without a time zone, like 2025-04-04T14:30:00.",
          },
          {
            id: 5,
            front: "What is MonthDay used for?",
            back: "MonthDay represents a month and day without a year, useful for recurring events like birthdays.",
          },
          {
            id: 6,
            front: "What does OffsetTime represent?",
            back: "OffsetTime represents a time with an offset from UTC, like 14:30:00+02:00.",
          },
          {
            id: 7,
            front: "What is OffsetDateTime?",
            back: "OffsetDateTime includes a date, time, and offset from UTC, such as 2025-04-04T14:30:00+02:00.",
          },
          {
            id: 8,
            front: "What is Clock used for in the Java Time API?",
            back: "Clock provides access to the current instant, date, and time using a time-zone; useful for testing.",
          },
          {
            id: 9,
            front: "What does the Year class represent?",
            back: "The Year class represents a year, like 2025, and can be used for operations related to year-only values.",
          },
          {
            id: 10,
            front: "What is YearMonth used for?",
            back: "YearMonth represents a year and month without a day, like 2025-04.",
          },
          {
            id: 11,
            front: "What is a Period in Java Time API?",
            back: "Period represents a quantity of time in terms of years, months, and days, like 'P1Y2M3D'.",
          },
          {
            id: 12,
            front: "What is the Duration class used for?",
            back: "Duration represents a time-based amount of time, like 'PT3H15M' (3 hours and 15 minutes).",
          },
          {
            id: 13,
            front: "Is Java Time API thread-safe?",
            back: "Yes, all classes in the Java Time API are immutable and thread-safe.",
          },
          {
            id: 14,
            front: "How do you get the current date using Java Time API?",
            back: "Use `LocalDate.now()` to get the current system date.",
          },
          {
            id: 15,
            front: "How do you calculate the difference between two dates?",
            back: "Use `Period.between(date1, date2)` for date-based differences, or `Duration.between(time1, time2)` for time.",
          },
        ],
      },
      {
        id: 2,
        title: "Unit- 2 : Java Conversion",
        key: "java-conversion",
        cards: [
          {
            id: 1,
            front: "How to convert String to int in Java?",
            back: "Use `Integer.parseInt(str)`.",
          },
          {
            id: 2,
            front: "How to convert int to String in Java?",
            back: "Use `String.valueOf(num)` or `Integer.toString(num)`.",
          },
          {
            id: 3,
            front: "How to convert String to long?",
            back: "Use `Long.parseLong(str)`.",
          },
          {
            id: 4,
            front: "How to convert long to String?",
            back: "Use `String.valueOf(longVal)`.",
          },
          {
            id: 5,
            front: "How to convert String to double?",
            back: "Use `Double.parseDouble(str)`.",
          },
          {
            id: 6,
            front: "How to convert double to String?",
            back: "Use `String.valueOf(doubleVal)`.",
          },
          {
            id: 7,
            front: "How to convert String to Date in Java?",
            back: 'Use `SimpleDateFormat` to parse: `new SimpleDateFormat("yyyy-MM-dd").parse(str)`.',
          },
          {
            id: 8,
            front: "How to convert Date to String in Java?",
            back: "Use `SimpleDateFormat.format(date)`.",
          },
          {
            id: 9,
            front: "How to convert char to String?",
            back: "Use `String.valueOf(ch)` or `Character.toString(ch)`.",
          },
          {
            id: 10,
            front: "How to convert String to char?",
            back: "Use `str.charAt(0)`.",
          },
          {
            id: 11,
            front: "How to convert String to Object?",
            back: "Object obj = (Object) str; // String is already an Object.",
          },
          {
            id: 12,
            front: "How to convert Object to String?",
            back: "Use `obj.toString()` if not null.",
          },
          {
            id: 13,
            front: "How to convert int to long?",
            back: "Use casting: `long l = (long) i;`",
          },
          {
            id: 14,
            front: "How to convert long to int?",
            back: "Use casting: `int i = (int) l;` (may truncate)",
          },
          {
            id: 15,
            front: "How to convert int to double?",
            back: "Use casting: `double d = (double) i;`",
          },
          {
            id: 16,
            front: "How to convert double to int?",
            back: "Use casting: `int i = (int) d;` (decimal truncated)",
          },
          {
            id: 17,
            front: "How to convert char to int?",
            back: "Use casting: `int i = (int) c;` (gives ASCII)",
          },
          {
            id: 18,
            front: "How to convert int to char?",
            back: "Use casting: `char c = (char) i;`",
          },
          {
            id: 19,
            front: "How to convert String to Boolean?",
            back: "Use `Boolean.parseBoolean(str)`.",
          },
          {
            id: 20,
            front: "How to convert Boolean to String?",
            back: "Use `String.valueOf(bool)`.",
          },
          {
            id: 21,
            front: "How to convert Date to Timestamp?",
            back: "Use `new Timestamp(date.getTime())`.",
          },
          {
            id: 22,
            front: "How to convert Timestamp to Date?",
            back: "Use `new Date(timestamp.getTime())`.",
          },
          {
            id: 23,
            front: "How to convert binary to decimal?",
            back: "Use `Integer.parseInt(binaryString, 2)`.",
          },
          {
            id: 24,
            front: "How to convert decimal to binary?",
            back: "Use `Integer.toBinaryString(decimal)`.",
          },
          {
            id: 25,
            front: "How to convert hex to decimal?",
            back: "Use `Integer.parseInt(hexString, 16)`.",
          },
          {
            id: 26,
            front: "How to convert decimal to hex?",
            back: "Use `Integer.toHexString(decimal)`.",
          },
          {
            id: 27,
            front: "How to convert octal to decimal?",
            back: "Use `Integer.parseInt(octalString, 8)`.",
          },
          {
            id: 28,
            front: "How to convert decimal to octal?",
            back: "Use `Integer.toOctalString(decimal)`.",
          },
        ],
      },
      {
        id: 3,
        title: "Unit- 3 : Json",
        key: "json",
        cards: [
          {
            id: 1,
            front: "What is JSON?",
            back: "JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy to read and write for humans and easy to parse for machines.",
          },
          {
            id: 2,
            front: "What is the main difference between JSON and XML?",
            back: "JSON is more compact and easier to read than XML, while XML supports more complex features like attributes and namespaces.",
          },
          {
            id: 3,
            front: "Give a simple JSON example.",
            back: `{\n  "name": "John",\n  "age": 30,\n  "city": "New York"\n}`,
          },
          {
            id: 4,
            front: "What is a JSON Object?",
            back: 'A JSON Object is an unordered collection of key/value pairs enclosed in curly braces: `{ "key": "value" }`.',
          },
          {
            id: 5,
            front: "What is a JSON Array?",
            back: 'A JSON Array is an ordered list of values enclosed in square brackets: `[ "Apple", "Banana", "Cherry" ]`.',
          },
          {
            id: 6,
            front: "Can JSON have comments?",
            back: "No, JSON does not officially support comments. Any comment will cause a parsing error.",
          },
          {
            id: 7,
            front: "How to use JSON in PHP?",
            back: "Use `json_encode()` to convert PHP array to JSON and `json_decode()` to convert JSON to PHP.",
          },
          {
            id: 8,
            front: "JSON example using PHP",
            back: `<?php\n$data = [\"name\" => \"John\", \"age\" => 25];\necho json_encode($data);\n?>`,
          },
          {
            id: 9,
            front: "How to parse JSON in Java?",
            back: "Use libraries like `org.json`, `Gson`, or `Jackson` to parse JSON in Java.",
          },
          {
            id: 10,
            front: "JSON example using Java",
            back: `JSONObject obj = new JSONObject("{\\"name\\":\\"John\\",\\"age\\":30}");\nSystem.out.println(obj.getString(\"name\"));`,
          },
          {
            id: 11,
            front: "How to use JSON with AJAX?",
            back: "You can send and receive JSON using `XMLHttpRequest` or `fetch()` in AJAX.",
          },
          {
            id: 12,
            front: "JSON example using AJAX",
            back: `fetch(\"data.json\")\n.then(res => res.json())\n.then(data => console.log(data));`,
          },
        ],
      },
      {
        id: 4,
        title: "Unit- 4 : Bootstrap",
        key: "bootstrap",
        cards: [
          {
            id: 1,
            front: "What is Bootstrap?",
            back: "Bootstrap is a front-end framework for developing responsive and mobile-first websites using HTML, CSS, and JS.",
          },
          {
            id: 2,
            front: "Give an example of using Bootstrap.",
            back: "<button class='btn btn-primary'>Click Me</button>",
          },
          {
            id: 3,
            front: "What is a Bootstrap container?",
            back: "A container is a class used to center and pad the content within a fixed-width layout.",
          },
          {
            id: 4,
            front: "What is a jumbotron in Bootstrap?",
            back: "Jumbotron is a lightweight, flexible component for showcasing content, typically used for headers or key messages.",
          },
          {
            id: 5,
            front: "How to create a button in Bootstrap?",
            back: "<button class='btn btn-success'>Submit</button>",
          },
          {
            id: 6,
            front: "Explain Bootstrap grid system.",
            back: "The grid system uses containers, rows, and columns to layout and align content. It's based on 12 columns.",
          },
          {
            id: 7,
            front: "What is a Bootstrap table?",
            back: "Bootstrap provides classes like `.table` to style HTML tables with enhanced visual formatting.",
          },
          {
            id: 8,
            front: "What is a Bootstrap form?",
            back: "A Bootstrap form uses form-control and form-group classes to structure form inputs and layout.",
          },
          {
            id: 9,
            front: "How to show alerts in Bootstrap?",
            back: "<div class='alert alert-danger'>This is a danger alert!</div>",
          },
          {
            id: 10,
            front: "What are Bootstrap wells?",
            back: "Wells are used to add a rounded border around content, but are deprecated in newer versions of Bootstrap.",
          },
          {
            id: 11,
            front: "What is the use of badge & label in Bootstrap?",
            back: "Badges and labels are used to display counts or labels beside other elements like buttons or links.",
          },
          {
            id: 12,
            front: "What are Bootstrap panels?",
            back: "Panels are used to create boxed content blocks with optional headings. They are replaced by cards in Bootstrap 4+.",
          },
          {
            id: 13,
            front: "Explain Bootstrap pagination.",
            back: "Pagination creates a series of links for navigating through pages of content using `.pagination` class.",
          },
          {
            id: 14,
            front: "What is the pager in Bootstrap?",
            back: "Pager provides previous and next navigation links using `.pager` class. Deprecated in newer versions.",
          },
          {
            id: 15,
            front: "How to add responsive images in Bootstrap?",
            back: "Use the class `img-fluid` to make images scale with the parent element.",
          },
          {
            id: 16,
            front: "What is a progress bar in Bootstrap?",
            back: "Progress bars visually represent the progression of a task using `.progress` and `.progress-bar` classes.",
          },
          {
            id: 17,
            front: "What is a list group in Bootstrap?",
            back: "List groups are flexible components used to display lists of content with `.list-group` and `.list-group-item`.",
          },
          {
            id: 18,
            front: "How to create a dropdown in Bootstrap?",
            back: "Use the `.dropdown` class with a toggle button and menu list for dropdowns.",
          },
          {
            id: 19,
            front: "What is collapse in Bootstrap?",
            back: "Collapse is used to hide or show content using buttons or links.",
          },
          {
            id: 20,
            front: "Explain tabs and pills in Bootstrap.",
            back: "Tabs and pills are navigation components used to switch between content using `.nav-tabs` or `.nav-pills`.",
          },
          {
            id: 21,
            front: "What is a NavBar in Bootstrap?",
            back: "Navbar is a responsive navigation header with links, branding, toggler, and menus.",
          },
          {
            id: 22,
            front: "List some input types supported by Bootstrap.",
            back: "Text, Password, Email, Number, Checkbox, Radio, Date, Range, File, etc.",
          },
          {
            id: 23,
            front: "What are Bootstrap models?",
            back: "You might mean 'modals' — Modals are dialog boxes or pop-ups that appear over the current page.",
          },
        ],
      },
      {
        id: 5,
        title: "Unit- 5 : Bootstrap utilities",
        key: "bootstrap-utilities",
        cards: [
          {
            id: 1,
            front:
              "What is the purpose of the `border` utility in CSS/Bootstrap?",
            back: "The `border` utility is used to add borders to elements, such as `border`, `border-top`, `border-0`, etc., to control border appearance.",
          },
          {
            id: 2,
            front: "What does the `clearfix` class do?",
            back: "`clearfix` is used to clear floats, ensuring that a container properly wraps its floated child elements.",
          },
          {
            id: 3,
            front: "What are color icons?",
            back: "Color icons are icons that include or are styled with different colors for visual enhancement and usability.",
          },
          {
            id: 4,
            front: "What is image replacement in web design?",
            back: "Image replacement hides text visually and replaces it with an image while keeping the text available to screen readers and search engines.",
          },
          {
            id: 5,
            front: "How do you make content invisible but accessible?",
            back: "Use classes like `sr-only` or `visually-hidden` to hide content from view but keep it accessible to screen readers.",
          },
          {
            id: 6,
            front: "What does the `position` property in CSS control?",
            back: "The `position` property controls the positioning method of an element: static, relative, absolute, fixed, or sticky.",
          },
          {
            id: 7,
            front: "How does `relative` positioning work in CSS?",
            back: "`position: relative;` positions an element relative to its normal position, allowing offset using top, right, bottom, or left.",
          },
          {
            id: 8,
            front: "What is the role of screen readers in web accessibility?",
            back: "Screen readers read aloud text and UI elements on the screen, aiding visually impaired users to interact with websites.",
          },
          {
            id: 9,
            front: "How can you improve screen reader accessibility?",
            back: "Use semantic HTML, ARIA labels, and hidden accessible text (`sr-only`) to convey important information.",
          },
          {
            id: 10,
            front: "What is the `sizing` utility in CSS/Bootstrap?",
            back: "Sizing utilities allow you to set element width and height using classes like `w-25`, `h-50`, `mw-100`, etc.",
          },
          {
            id: 11,
            front: "What are `spacing` utilities in Bootstrap?",
            back: "Spacing utilities like `m-*` and `p-*` control margin and padding using shorthand notations and responsive classes.",
          },
          {
            id: 12,
            front: "Give an example of using spacing in Bootstrap.",
            back: "`class='mt-3 mb-2 px-4'` adds top margin, bottom margin, and horizontal padding.",
          },
          {
            id: 13,
            front: "What is a star rating system in UI design?",
            back: "A star rating system allows users to rate something (e.g., product, service) on a scale usually from 1 to 5 stars.",
          },
          {
            id: 14,
            front: "How is a star rating implemented in web design?",
            back: "It can be implemented using HTML radio buttons, SVG icons, or font icons styled with CSS/JS for interactivity.",
          },
        ],
      },
      {
        id: 6,
        title: "Unit- 6 : Selenium",
        key: "selenium",
        cards: [
          {
            id: 1,
            front: "What is Selenium?",
            back: "Selenium is an open-source automated testing framework used to validate web applications across different browsers and platforms.",
          },
          {
            id: 2,
            front: "List some key features of Selenium.",
            back: "Open-source, cross-browser compatibility, supports multiple languages (Java, Python, etc.), supports parallel test execution.",
          },
          {
            id: 3,
            front: "What are the limitations of Selenium?",
            back: "Does not support desktop applications, no built-in reporting, handling dynamic elements can be complex, no direct support for captcha or barcode readers.",
          },
          {
            id: 4,
            front: "Selenium vs QTP: Name one key difference.",
            back: "Selenium is open-source and supports only web apps, while QTP (now UFT) is commercial and supports desktop and web apps.",
          },
          {
            id: 5,
            front: "What are the components of the Selenium Tool Suite?",
            back: "Selenium IDE, Selenium WebDriver, Selenium Grid, Selenium RC (deprecated).",
          },
          {
            id: 6,
            front: "What is Selenium IDE?",
            back: "Selenium IDE is a Chrome/Firefox plugin that enables recording, editing, and debugging tests.",
          },
          {
            id: 7,
            front: "How do you install Selenium IDE?",
            back: "Install Selenium IDE as a browser extension from the Chrome Web Store or Firefox Add-ons site.",
          },
          {
            id: 8,
            front: "What are the main features of Selenium IDE?",
            back: "Record and playback, easy debugging, assertion support, export test cases to different languages.",
          },
          {
            id: 9,
            front: "How do you create a test case in Selenium IDE?",
            back: "Open Selenium IDE, click record, perform the test steps in the browser, stop recording, and save the test case.",
          },
          {
            id: 10,
            front: "What is a login test case in Selenium IDE?",
            back: "A test case that automates the steps to test the login functionality of a web application using recorded actions.",
          },
          {
            id: 11,
            front: "What are some basic commands in Selenium IDE?",
            back: "open, click, type, assertText, verifyElementPresent, waitForElementPresent, store.",
          },
          {
            id: 12,
            front: "How do you execute a Selenium IDE test case?",
            back: "Click the Run button in the Selenium IDE UI to execute the selected test case or all test cases in a suite.",
          },
        ],
      },
      {
        id: 7,
        title: "Unit- 7 : Selenium Web Driver",
        key: "selenium-web-driver",
        cards: [
          {
            id: 1,
            front: "What is Selenium WebDriver?",
            back: "Selenium WebDriver is a tool used to automate web application testing to verify that it works as expected. It interacts directly with the browser.",
          },
          {
            id: 2,
            front: "Selenium WebDriver vs Selenium RC: Key Difference?",
            back: "WebDriver communicates directly with the browser using its native compatibility, while RC requires a server to inject JavaScript for browser control.",
          },
          {
            id: 3,
            front: "How to install Selenium WebDriver in Java?",
            back: "Add Selenium WebDriver dependencies via Maven in `pom.xml` or download the Selenium JAR files and add them to the classpath.",
          },
          {
            id: 4,
            front: "How to run a Selenium WebDriver test on Chrome?",
            back: "Set up ChromeDriver executable path, initialize WebDriver with `new ChromeDriver()`, and run the test script.",
          },
          {
            id: 5,
            front: "How to run Selenium WebDriver test on Firefox?",
            back: "Set GeckoDriver path, initialize WebDriver with `new FirefoxDriver()`, and execute the test.",
          },
          {
            id: 6,
            front: "How to perform drag & drop using WebDriver?",
            back: "Use `Actions` class: `actions.dragAndDrop(source, target).build().perform();`",
          },
          {
            id: 7,
            front: "How to handle JavaScript alerts in Selenium WebDriver?",
            back: "Switch to alert using `driver.switchTo().alert()`, then use `accept()`, `dismiss()`, or `getText()` methods.",
          },
          {
            id: 8,
            front: "Give examples of browser commands in WebDriver.",
            back: "`driver.get()`, `driver.getTitle()`, `driver.getCurrentUrl()`, `driver.close()`, `driver.quit()`.",
          },
          {
            id: 9,
            front: "What are navigation commands in Selenium WebDriver?",
            back: "`driver.navigate().to()`, `driver.navigate().back()`, `driver.navigate().forward()`, `driver.navigate().refresh()`.",
          },
          {
            id: 10,
            front: "How to select a radio button in Selenium WebDriver?",
            back: "Locate the radio button element and use `element.click()` to select it.",
          },
          {
            id: 11,
            front: "How to handle checkboxes in Selenium WebDriver?",
            back: "Use `isSelected()` to verify status and `click()` to toggle the checkbox.",
          },
          {
            id: 12,
            front: "How to verify if a radio button is selected?",
            back: "Use `element.isSelected()` method; returns true if selected.",
          },
        ],
      },
      {
        id: 8,
        title: "Unit- 8 : Node JS",
        key: "node-js",
        cards: [
          {
            id: 1,
            front: "How to install Node.js on Windows?",
            back: "Download the installer from nodejs.org, run it, and follow the setup steps. It installs both Node.js and npm.",
          },
          {
            id: 2,
            front: "How to run a Node.js file from console?",
            back: "Use the command `node filename.js` in the terminal.",
          },
          {
            id: 3,
            front: "What is Node.js REPL?",
            back: "REPL stands for Read-Eval-Print Loop. It is an interactive shell to run Node.js commands.",
          },
          {
            id: 4,
            front: "What is NPM in Node.js?",
            back: "NPM is Node Package Manager used to install, update, and manage Node.js packages.",
          },
          {
            id: 5,
            front: "What are CLI options in Node.js?",
            back: "Node.js supports command-line options like `--inspect`, `--eval`, `--require`, and `--trace-warnings`.",
          },
          {
            id: 6,
            front: "What are some global objects in Node.js?",
            back: "`__dirname`, `__filename`, `global`, `process`, `module`, and `exports` are examples of global objects.",
          },
          {
            id: 7,
            front: "How to use timers in Node.js?",
            back: "Use functions like `setTimeout()`, `setInterval()`, and `setImmediate()` for timer-based operations.",
          },
          {
            id: 8,
            front: "How does Node.js handle errors?",
            back: "Errors are handled using try-catch blocks, and asynchronous errors use error-first callbacks or promises.",
          },
          {
            id: 9,
            front: "What is the `dns` module in Node.js?",
            back: "The `dns` module provides functions to do DNS lookups and name resolution.",
          },
          {
            id: 10,
            front: "What does the `net` module do?",
            back: "It provides an asynchronous network API for creating stream-based TCP or IPC servers and clients.",
          },
          {
            id: 11,
            front: "What is a buffer in Node.js?",
            back: "Buffer is a temporary memory allocated outside the V8 heap to handle binary data.",
          },
          {
            id: 12,
            front: "What are streams in Node.js?",
            back: "Streams are objects that let you read data from a source or write data to a destination in a continuous fashion.",
          },
          {
            id: 13,
            front: "What does the `fs` module provide?",
            back: "The `fs` (File System) module allows you to work with the file system: read, write, update, and delete files.",
          },
          {
            id: 14,
            front: "Purpose of the `path` module?",
            back: "The `path` module provides utilities for working with file and directory paths.",
          },
          {
            id: 15,
            front: "What is the `string_decoder` module?",
            back: "It provides a way to decode buffer streams into strings while preserving multi-byte characters.",
          },
          {
            id: 16,
            front: "How does `querystring` module work?",
            back: "It provides utilities for parsing and formatting URL query strings.",
          },
          {
            id: 17,
            front: "What is an EventEmitter in Node.js?",
            back: "`EventEmitter` is a class in the `events` module used to handle events via `.on()` and `.emit()` methods.",
          },
          {
            id: 18,
            front: "Example of using `fs.readFile`?",
            back: "`fs.readFile('file.txt', 'utf8', (err, data) => { console.log(data); });`",
          },
          {
            id: 19,
            front: "What is `setImmediate()` used for?",
            back: "It schedules a callback to execute after the current event loop completes.",
          },
          {
            id: 20,
            front: "Difference between `setTimeout()` and `setImmediate()`?",
            back: "`setTimeout()` waits at least the defined delay, `setImmediate()` executes after I/O events callbacks.",
          },
        ],
      },
      {
        id: 9,
        title: "Unit- 9 : Node JS with MySQL",
        key: "node-js-with-mysql",
        cards: [
          {
            id: 1,
            front: "How do you create a connection to a MySQL database in PHP?",
            back: "`$conn = new mysqli('localhost', 'username', 'password', 'database');`",
          },
          {
            id: 2,
            front: "SQL syntax to create a database named 'school'?",
            back: "`CREATE DATABASE school;`",
          },
          {
            id: 3,
            front:
              "How do you create a table named 'students' with id and name?",
            back: "`CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50));`",
          },
          {
            id: 4,
            front: "How to insert a record into the 'students' table?",
            back: "`INSERT INTO students (id, name) VALUES (1, 'Aayush');`",
          },
          {
            id: 5,
            front: "How to update a record in the 'students' table?",
            back: "`UPDATE students SET name = 'Aryan' WHERE id = 1;`",
          },
          {
            id: 6,
            front: "How to delete a record from the 'students' table?",
            back: "`DELETE FROM students WHERE id = 1;`",
          },
          {
            id: 7,
            front: "How to select all records from the 'students' table?",
            back: "`SELECT * FROM students;`",
          },
          {
            id: 8,
            front: "How to select unique names from the 'students' table?",
            back: "`SELECT DISTINCT name FROM students;`",
          },
          {
            id: 9,
            front: "How to drop a table named 'students'?",
            back: "`DROP TABLE students;`",
          },
          {
            id: 10,
            front: "How to drop a database named 'school'?",
            back: "`DROP DATABASE school;`",
          },
          {
            id: 11,
            front: "What function checks connection success in PHP?",
            back: "`$conn->connect_error` is used to check if the connection failed.",
          },
          {
            id: 12,
            front: "How to execute a query in PHP using MySQLi?",
            back: "`$conn->query('YOUR_SQL_QUERY');`",
          },
        ],
      },
    ],
  },
  {
    subject_name: "Advance Java Programming",
    key: "advance-java-programming",
    units: [
      {
        id: 1,
        title: "Unit - 1: Java Database Connectivity",
        key: "java-database-connectivity",
        cards: [
          {
            id: 1,
            front: "What is JDBC?",
            back: "JDBC (Java Database Connectivity) is an API that allows Java applications to interact with databases.",
          },
          {
            id: 2,
            front: "What is the purpose of JDBC?",
            back: "JDBC provides a standard way for Java applications to connect to relational databases, execute SQL queries, and process results.",
          },
          {
            id: 3,
            front: "What are the key components of JDBC architecture?",
            back: "JDBC architecture consists of DriverManager, Driver, Connection, Statement, ResultSet, and SQLException.",
          },
          {
            id: 4,
            front: "What is DriverManager in JDBC?",
            back: "DriverManager is a class that manages the JDBC drivers and establishes a connection with the database.",
          },
          {
            id: 5,
            front: "What is a JDBC Driver?",
            back: "A JDBC Driver is a software component that enables Java applications to interact with databases using JDBC.",
          },
          {
            id: 6,
            front: "What is a Connection in JDBC?",
            back: "A Connection represents a session between a Java application and a database.",
          },
          {
            id: 7,
            front: "What is a Statement in JDBC?",
            back: "A Statement is used to execute SQL queries against the database.",
          },
          {
            id: 8,
            front: "What is a ResultSet in JDBC?",
            back: "A ResultSet represents a table of data returned by executing a SQL query.",
          },
          {
            id: 9,
            front: "What is an SQLException in JDBC?",
            back: "SQLException is an exception class in JDBC that handles database access errors and issues.",
          },
          {
            id: 10,
            front: "What are the types of JDBC drivers?",
            back: "JDBC drivers are classified into four types: Type 1 (JDBC-ODBC Bridge), Type 2 (Native API), Type 3 (Network Protocol), and Type 4 (Thin Driver).",
          },
          {
            id: 11,
            front: "How do you establish a JDBC connection?",
            back: "By loading the JDBC driver, using DriverManager to get a connection, and providing database URL, username, and password.",
          },
          {
            id: 12,
            front: "How do you submit queries and obtain results in JDBC?",
            back: "By using a Statement or PreparedStatement to execute SQL queries and retrieving results through ResultSet.",
          },
          {
            id: 13,
            front: "What is the ResultSetMetadata interface in JDBC?",
            back: "ResultSetMetadata provides information about the types and properties of the columns in a ResultSet.",
          },
          {
            id: 14,
            front: "What is a PreparedStatement in JDBC?",
            back: "A PreparedStatement is a precompiled SQL statement that improves performance and prevents SQL injection.",
          },
          {
            id: 15,
            front: "What is a CallableStatement in JDBC?",
            back: "A CallableStatement is used to execute stored procedures in a database.",
          },
          {
            id: 16,
            front: "What are JDBC transactions?",
            back: "JDBC transactions allow multiple SQL statements to be executed as a single unit to maintain data integrity.",
          },
          {
            id: 17,
            front: "How do you manage transactions in JDBC?",
            back: "By using setAutoCommit(false) to disable auto-commit, executing SQL statements, and committing or rolling back transactions.",
          },
          {
            id: 18,
            front: "What is auto-commit in JDBC?",
            back: "Auto-commit is a mode where each SQL statement is treated as a transaction and is committed automatically.",
          },
          {
            id: 19,
            front: "How do you rollback a transaction in JDBC?",
            back: "By calling the rollback() method on the Connection object in case of an error.",
          },
          {
            id: 20,
            front: "Why should you use PreparedStatement instead of Statement?",
            back: "PreparedStatement improves performance, prevents SQL injection, and supports parameterized queries.",
          },
        ],
      },
      {
        id: 2,
        title: "Unit - 2: Java Servlets",
        key: "java-servlets",
        cards: [
          {
            id: 21,
            front:
              "What is required to configure a Java development environment?",
            back: "To configure a Java development environment, you need to install JDK, set environment variables, and use an IDE like Eclipse or NetBeans.",
          },
          {
            id: 22,
            front: "How do you download and configure Apache Tomcat?",
            back: "Download Tomcat from the official site, extract it, set environment variables (CATALINA_HOME), and configure it using the conf folder.",
          },
          {
            id: 23,
            front: "What is a servlet in Java?",
            back: "A servlet is a Java class used to handle requests and generate responses in a web application.",
          },
          {
            id: 24,
            front: "What are the stages in the servlet lifecycle?",
            back: "The servlet lifecycle consists of initialization (init), request handling (service), and destruction (destroy).",
          },
          {
            id: 25,
            front: "What is the Servlet API?",
            back: "The Servlet API provides interfaces and classes such as HttpServlet, ServletRequest, ServletResponse, and ServletConfig to build servlets.",
          },
          {
            id: 26,
            front: "What is the basic structure of a servlet?",
            back: "A servlet extends HttpServlet and overrides doGet() or doPost() to process requests and generate responses.",
          },
          {
            id: 27,
            front: "How do you handle client requests in a servlet?",
            back: "Client requests are handled using request objects like HttpServletRequest in doGet or doPost methods.",
          },
          {
            id: 28,
            front: "How is a response generated in a servlet?",
            back: "A servlet uses HttpServletResponse to write HTML or other content back to the client using PrintWriter.",
          },
          {
            id: 29,
            front: "What are cookies in servlets?",
            back: "Cookies are small data files stored on the client side, used for session tracking and storing user preferences.",
          },
          {
            id: 30,
            front: "How is session tracking done in servlets?",
            back: "Session tracking can be done using cookies, URL rewriting, hidden form fields, or HttpSession objects.",
          },
          {
            id: 31,
            front: "What is a servlet filter?",
            back: "A servlet filter is an object that intercepts requests and responses to perform filtering tasks like logging or authentication.",
          },
          {
            id: 32,
            front: "How do you create a custom servlet filter?",
            back: "Implement the Filter interface, override doFilter(), and configure it in web.xml or using annotations.",
          },
          {
            id: 33,
            front: "How do you map a filter to a servlet?",
            back: "Filters are mapped using <filter-mapping> tags in web.xml or @WebFilter annotations, specifying the servlet name.",
          },
          {
            id: 34,
            front: "How do you map a filter to a URL pattern?",
            back: "Filters can be mapped to specific URL patterns in web.xml or with annotations to apply them to matching requests.",
          },
          {
            id: 35,
            front: "What is the purpose of servlet filters?",
            back: "Filters are used for cross-cutting concerns such as logging, security, input validation, and compression.",
          },
          {
            id: 36,
            front: "Can multiple filters be applied to a servlet?",
            back: "Yes, multiple filters can be chained in a specified order to process a request or response.",
          },
          {
            id: 37,
            front: "What is the FilterChain in servlet filters?",
            back: "FilterChain is used to invoke the next filter or the target servlet in the filter sequence.",
          },
          {
            id: 38,
            front: "What is the init() method in a filter?",
            back: "The init() method is called by the container once when the filter is instantiated to perform any initialization.",
          },
          {
            id: 39,
            front: "What is the destroy() method in a filter?",
            back: "The destroy() method is called by the container to indicate that the filter is being taken out of service.",
          },
          {
            id: 40,
            front: "How do filters enhance security in web applications?",
            back: "Filters can validate user input, check authentication tokens, and block suspicious requests before reaching the servlet.",
          },
        ],
      },
      {
        id: 3,
        title: "Unit - 3: Java Server Pages",
        key: "java-server-pages",
        cards: [
          {
            id: 41,
            front: "What is JSP?",
            back: "JavaServer Pages (JSP) is a server-side technology that allows the creation of dynamic, platform-independent web content.",
          },
          {
            id: 42,
            front: "Why do we need JSP?",
            back: "JSP simplifies the process of creating dynamic web pages by embedding Java code directly into HTML pages.",
          },
          {
            id: 43,
            front: "What are the advantages of JSP over servlets?",
            back: "JSP is easier to write and maintain than servlets, allows for separation of HTML and Java logic, and supports reusable components.",
          },
          {
            id: 44,
            front: "What are the phases in the JSP life cycle?",
            back: "The JSP life cycle includes translation, compilation, loading, instantiation, initialization, request processing, and destruction.",
          },
          {
            id: 45,
            front: "What is a declaration tag in JSP?",
            back: "The declaration tag (<%! %>) is used to declare variables and methods that can be reused across multiple requests.",
          },
          {
            id: 46,
            front: "What is a scriptlet tag in JSP?",
            back: "The scriptlet tag (<% %>) is used to embed Java code that runs every time the page is requested.",
          },
          {
            id: 47,
            front: "What is an expression tag in JSP?",
            back: "The expression tag (<%= %>) is used to output the result of a Java expression directly into the HTML output.",
          },
          {
            id: 48,
            front: "What is the 'out' implicit object in JSP?",
            back: "'out' is used to send output to the client and is an instance of JspWriter.",
          },
          {
            id: 49,
            front: "What are implicit objects in JSP?",
            back: "Implicit objects are pre-defined variables available in JSP pages, such as request, response, session, application, and more.",
          },
          {
            id: 50,
            front: "What is the 'request' implicit object in JSP?",
            back: "'request' is an instance of HttpServletRequest that provides client request information.",
          },
          {
            id: 51,
            front: "What is the 'response' implicit object in JSP?",
            back: "'response' is an instance of HttpServletResponse used to control the response sent to the client.",
          },
          {
            id: 52,
            front: "What is the 'application' implicit object in JSP?",
            back: "'application' is an instance of ServletContext used for sharing data among all users.",
          },
          {
            id: 53,
            front: "What is the 'session' implicit object in JSP?",
            back: "'session' is an instance of HttpSession that tracks user session data.",
          },
          {
            id: 54,
            front: "What is the 'pageContext' implicit object in JSP?",
            back: "'pageContext' provides access to all the namespaces associated with a JSP page.",
          },
          {
            id: 55,
            front: "What is the 'page' implicit object in JSP?",
            back: "'page' is a reference to the current JSP page's servlet instance.",
          },
          {
            id: 56,
            front: "What is the 'exception' implicit object in JSP?",
            back: "'exception' is used in error pages to access uncaught exceptions.",
          },
          {
            id: 57,
            front: "What are JavaBeans in JSP?",
            back: "JavaBeans are reusable software components that follow specific conventions for property access and method naming.",
          },
          {
            id: 58,
            front: "How do you read and write JavaBean properties in JSP?",
            back: "Using <jsp:useBean>, <jsp:getProperty>, and <jsp:setProperty> tags to access and modify bean properties.",
          },
          {
            id: 59,
            front: "What is JSP Expression Language (EL)?",
            back: "EL is a feature in JSP 2.0 that simplifies access to data stored in JavaBeans, implicit objects, and scoped attributes.",
          },
          {
            id: 60,
            front: "How do you invoke Expression Language in JSP?",
            back: "By using the syntax ${expression}, such as ${user.name} to access properties.",
          },
          {
            id: 61,
            front: "How do you prevent EL evaluation in JSP?",
            back: "By using the escape syntax \\${expression} or disabling EL in the page directive.",
          },
          {
            id: 62,
            front: "How do you access scoped variables in EL?",
            back: "EL automatically searches for variables in page, request, session, and application scopes.",
          },
          {
            id: 63,
            front: "What are custom tag libraries in JSP?",
            back: "Custom tags are user-defined JSP tags used to encapsulate complex logic and enhance reusability.",
          },
          {
            id: 64,
            front: "What are tag handlers in JSP?",
            back: "Tag handlers are Java classes that implement the behavior of custom JSP tags.",
          },
          {
            id: 65,
            front: "What is a tag library descriptor (TLD)?",
            back: "A TLD is an XML file that describes the structure and behavior of custom tag libraries.",
          },
          {
            id: 66,
            front: "What is JSTL in JSP?",
            back: "JSTL (JSP Standard Tag Library) is a set of standard tags that simplify JSP development by providing common tasks.",
          },
          {
            id: 67,
            front: "How do you install JSTL in a web application?",
            back: "Download the JSTL JAR files and include them in the WEB-INF/lib folder of the project.",
          },
          {
            id: 68,
            front: "What is the purpose of the JSTL core tag <c:out>?",
            back: "It outputs the result of an expression, similar to <%= %> in JSP.",
          },
          {
            id: 69,
            front: "What is the JSTL <c:forEach> tag used for?",
            back: "It is used for iterating over collections like arrays, lists, and maps.",
          },
          {
            id: 70,
            front: "What does the JSTL <c:if> tag do?",
            back: "It performs conditional processing similar to an if statement.",
          },
          {
            id: 71,
            front: "What does the JSTL <c:choose> tag do?",
            back: "It is used with <c:when> and <c:otherwise> to implement switch-like logic.",
          },
          {
            id: 72,
            front: "What is the JSTL <c:set> tag used for?",
            back: "It sets the value of a variable in a given scope.",
          },
          {
            id: 73,
            front: "What is the purpose of JSTL <c:remove>?",
            back: "It removes a scoped variable from a specified scope.",
          },
          {
            id: 74,
            front: "How is JSTL <c:import> used?",
            back: "It is used to include content from external resources like files or URLs.",
          },
          {
            id: 75,
            front: "What does the JSTL <c:catch> tag do?",
            back: "It catches exceptions thrown during the execution of a tag body.",
          },
        ],
      },
      {
        id: 4,
        title: "Unit - 4: Java Web Services",
        key: "java-web-services",
        cards: [
          {
            id: 76,
            front: "What are web services?",
            back: "Web services are standardized ways of integrating web-based applications using open standards like HTTP, XML, and SOAP.",
          },
          {
            id: 77,
            front: "What is the architecture of web services?",
            back: "Web service architecture typically includes a service provider, service consumer, and a service registry for discovering services.",
          },
          {
            id: 78,
            front: "What are the types of web services?",
            back: "The two main types are SOAP web services and RESTful web services.",
          },
          {
            id: 79,
            front: "What is a SOAP web service?",
            back: "SOAP (Simple Object Access Protocol) web services use XML-based messaging protocol and are platform-independent.",
          },
          {
            id: 80,
            front: "What is a REST web service?",
            back: "REST (Representational State Transfer) web services use HTTP methods and are lightweight and stateless.",
          },
          {
            id: 81,
            front: "What is the difference between SOAP and REST?",
            back: "SOAP uses XML and has strict standards; REST is simpler, uses HTTP, and can return data in formats like JSON and XML.",
          },
          {
            id: 82,
            front: "What is the Jersey framework?",
            back: "Jersey is a framework used to build RESTful web services in Java using JAX-RS (Java API for RESTful Web Services).",
          },
          {
            id: 83,
            front: "How do you configure RESTful web services using Jersey?",
            back: "You configure Jersey by adding dependencies, creating resource classes, and mapping them in web.xml or using annotations.",
          },
          {
            id: 84,
            front: "What are RESTful architectural principles?",
            back: "They include statelessness, client-server architecture, cacheability, layered system, and uniform interface.",
          },
          {
            id: 85,
            front: "What is URI matching in REST?",
            back: "URI matching refers to mapping URLs to resource methods using annotations like @Path in JAX-RS.",
          },
          {
            id: 86,
            front: "What is HTTP method matching in REST?",
            back: "HTTP methods like GET, POST, PUT, and DELETE are matched to corresponding Java methods using JAX-RS annotations.",
          },
          {
            id: 87,
            front: "What is @PathParam in JAX-RS?",
            back: "@PathParam is used to extract values from the URI path in RESTful web services.",
          },
          {
            id: 88,
            front: "What is @QueryParam in JAX-RS?",
            back: "@QueryParam is used to extract query parameters from the URL in RESTful services.",
          },
          {
            id: 89,
            front: "What is @FormParam in JAX-RS?",
            back: "@FormParam is used to extract form data parameters in POST requests in RESTful services.",
          },
          {
            id: 90,
            front: "How do you handle server responses in JAX-RS?",
            back: "Server responses can be customized using the Response class and returned with status codes and entities.",
          },
          {
            id: 91,
            front: "How do you handle exceptions in JAX-RS?",
            back: "You can handle exceptions by creating custom exception mappers using @Provider and ExceptionMapper interface.",
          },
          {
            id: 92,
            front: "What is the JAX-RS client API?",
            back: "JAX-RS client API is used to call RESTful web services from Java applications using Client, WebTarget, and Response classes.",
          },
          {
            id: 93,
            front: "What is the purpose of the @Path annotation?",
            back: "@Path defines the URI path to which a resource class or method responds in a RESTful web service.",
          },
          {
            id: 94,
            front: "What is the use of @GET annotation in JAX-RS?",
            back: "@GET maps a Java method to an HTTP GET request in a RESTful web service.",
          },
          {
            id: 95,
            front: "What is the use of @POST annotation in JAX-RS?",
            back: "@POST maps a Java method to an HTTP POST request, typically used to create resources.",
          },
        ],
      },
      {
        id: 5,
        title: "Unit - 5: Introduction to Spring and Hibernate",
        key: "introduction-to-spring-and-hibernate",
        cards: [
          {
            id: 96,
            front: "What is Spring MVC Framework?",
            back: "Spring MVC is a Java framework used to build web applications by separating the roles of Model, View, and Controller.",
          },
          {
            id: 97,
            front: "What is the architecture of Spring MVC?",
            back: "Spring MVC architecture includes DispatcherServlet, Controllers, ViewResolvers, Models, and Views.",
          },
          {
            id: 98,
            front: "What are the components of Spring MVC?",
            back: "Key components include DispatcherServlet, HandlerMapping, Controller, ViewResolver, and Model.",
          },
          {
            id: 99,
            front: "What are the advantages of using Spring MVC?",
            back: "Spring MVC is flexible, easy to test, supports loose coupling, and integrates well with other technologies.",
          },
          {
            id: 100,
            front: "What are the main modules of Spring Framework?",
            back: "Core Container, AOP, Data Access/Integration, Web, and Test are major Spring modules.",
          },
          {
            id: 101,
            front: "What is a Spring application?",
            back: "A Spring application is a Java application that uses Spring Framework to manage objects through Dependency Injection and AOP.",
          },
          {
            id: 102,
            front: "What is Hibernate?",
            back: "Hibernate is an ORM (Object-Relational Mapping) tool for Java that maps Java objects to database tables.",
          },
          {
            id: 103,
            front: "What is the architecture of Hibernate?",
            back: "Hibernate architecture includes Configuration, SessionFactory, Session, Transaction, and Query interfaces.",
          },
          {
            id: 104,
            front: "What is Hibernate O/R mapping?",
            back: "Object-Relational Mapping in Hibernate is the process of mapping Java classes to database tables using XML or annotations.",
          },
          {
            id: 105,
            front: "How do you configure a Hibernate development environment?",
            back: "You set up Hibernate configuration file (hibernate.cfg.xml), mapping files, and required dependencies (JARs).",
          },
          {
            id: 106,
            front: "How is Hibernate O/R Mapping implemented?",
            back: "By using XML mapping files or annotations like @Entity, @Table, @Id, and @Column in Java classes.",
          },
          {
            id: 107,
            front: "What is HQL?",
            back: "HQL (Hibernate Query Language) is an object-oriented query language similar to SQL but works with Hibernate's objects.",
          },
          {
            id: 108,
            front: "How does Spring MVC handle a web request?",
            back: "DispatcherServlet receives the request, finds the appropriate controller, processes it, and returns the view.",
          },
          {
            id: 109,
            front: "What is DispatcherServlet in Spring MVC?",
            back: "DispatcherServlet is the front controller that handles all HTTP requests and responses in a Spring MVC application.",
          },
          {
            id: 110,
            front: "What is @Controller in Spring MVC?",
            back: "@Controller is a Spring annotation that marks a class as a web controller, capable of handling web requests.",
          },
          {
            id: 111,
            front: "What is SessionFactory in Hibernate?",
            back: "SessionFactory is a factory for Session objects and is responsible for creating and managing database sessions.",
          },
          {
            id: 112,
            front: "What is a Session in Hibernate?",
            back: "Session is a single-threaded, short-lived object used to interact with the database in Hibernate.",
          },
          {
            id: 113,
            front: "What is a Transaction in Hibernate?",
            back: "A Transaction represents a unit of work and is used to group multiple operations into a single atomic unit.",
          },
          {
            id: 114,
            front: "What are annotations commonly used in Hibernate?",
            back: "@Entity, @Table, @Id, @Column, and @GeneratedValue are commonly used Hibernate annotations.",
          },
          {
            id: 115,
            front: "How does Spring support Hibernate integration?",
            back: "Spring provides HibernateTemplate and integrates Hibernate through ORM modules and configuration.",
          },
        ],
      },
    ],
  },
  {
    subject_name: "Data Communication & Networking",
    key: "data-communication-and-networking",
    units: [
      {
        id: 1,
        title: "Week 1",
        key: "week-1",
        cards: [
          {
            id: 1,
            front: "What is a computer network?",
            back: "A collection of interconnected computers and devices to share resources and information.",
          },
          {
            id: 2,
            front: "What is ARPANET?",
            back: "The first operational packet switching network and a predecessor of the Internet, launched in 1969.",
          },
          {
            id: 3,
            front: "Who developed ARPANET?",
            back: "The United States Department of Defense's Advanced Research Projects Agency (ARPA).",
          },
          {
            id: 4,
            front: "Define Packet Switching.",
            back: "A method of grouping transmitted data into packets for efficient routing through a network.",
          },
          {
            id: 5,
            front: "What led to the development of the Internet?",
            back: "Research from ARPANET and advancements in packet switching technologies.",
          },
          {
            id: 6,
            front: "What is a Network Protocol Stack?",
            back: "A set of network protocol layers that work together to enable network communication.",
          },
          {
            id: 7,
            front: "What are the major protocol stacks?",
            back: "OSI model and TCP/IP model.",
          },
          {
            id: 8,
            front: "Name the 7 layers of the OSI model.",
            back: "Physical, Data Link, Network, Transport, Session, Presentation, Application.",
          },
          {
            id: 9,
            front: "Which layers are present in TCP/IP model?",
            back: "Application, Transport, Internet, Network Access (Link).",
          },
          {
            id: 10,
            front: "What does the Transport layer handle?",
            back: "End-to-end communication, error control, and flow control.",
          },
          {
            id: 11,
            front: "What does the Network layer handle?",
            back: "Routing and addressing of packets across the network.",
          },
          {
            id: 12,
            front: "Difference between Circuit Switching and Packet Switching?",
            back: "Circuit Switching establishes a dedicated path, Packet Switching divides data into packets and routes independently.",
          },
          {
            id: 13,
            front: "Give one example of Circuit Switching network.",
            back: "Traditional Telephone Network (PSTN).",
          },
          {
            id: 14,
            front: "Give one example of Packet Switching network.",
            back: "The Internet.",
          },
          {
            id: 15,
            front: "What is a benefit of Packet Switching?",
            back: "Efficient use of network resources and reduced transmission costs.",
          },
          {
            id: 16,
            front: "What service does the Application layer provide?",
            back: "Provides network services directly to user applications like email, file transfer.",
          },
          {
            id: 17,
            front: "Name a protocol at the Application layer.",
            back: "HTTP (Hypertext Transfer Protocol).",
          },
          {
            id: 18,
            front: "What is the role of the Presentation layer?",
            back: "Data translation, encryption, and compression.",
          },
          {
            id: 19,
            front: "What service is offered by the Transport layer?",
            back: "Reliable data transfer (e.g., TCP) or fast but unreliable transfer (e.g., UDP).",
          },
          {
            id: 20,
            front: "What does SMTP stand for?",
            back: "Simple Mail Transfer Protocol.",
          },
          {
            id: 21,
            front: "What is FTP used for?",
            back: "File Transfer Protocol is used for transferring files between client and server.",
          },
          {
            id: 22,
            front: "Purpose of DNS?",
            back: "Domain Name System translates domain names to IP addresses.",
          },
          {
            id: 23,
            front: "Name two types of services provided by Application Layer.",
            back: "File transfer and email services.",
          },
          {
            id: 24,
            front: "What is Telnet used for?",
            back: "A protocol used to remotely access another computer.",
          },
          {
            id: 25,
            front: "Which protocol is used for web browsing?",
            back: "HTTP (Hypertext Transfer Protocol).",
          },
          {
            id: 26,
            front: "Which protocol secures HTTP?",
            back: "HTTPS (HTTP Secure) using SSL/TLS.",
          },
          {
            id: 27,
            front: "What is the role of the Session layer?",
            back: "Manages sessions or connections between applications.",
          },
          {
            id: 28,
            front: "Name a protocol for remote login.",
            back: "SSH (Secure Shell).",
          },
          {
            id: 29,
            front: "What is the difference between HTTP and HTTPS?",
            back: "HTTPS encrypts data using SSL/TLS while HTTP does not.",
          },
          {
            id: 30,
            front:
              "Which application layer protocol is used for sending emails?",
            back: "SMTP (Simple Mail Transfer Protocol).",
          },
        ],
      },
      {
        id: 2,
        title: "Week 2",
        key: "week-2",
        cards: [
          {
            id: 1,
            front: "What is the purpose of DNS?",
            back: "Domain Name System (DNS) translates human-readable domain names into IP addresses.",
          },
          {
            id: 2,
            front: "What type of system is DNS?",
            back: "A hierarchical and decentralized naming system for computers and services on the Internet.",
          },
          {
            id: 3,
            front: "What are DNS servers?",
            back: "Servers that store DNS records and respond to DNS queries from clients.",
          },
          {
            id: 4,
            front: "What is a DNS resolver?",
            back: "A client-side service that resolves domain names into IP addresses.",
          },
          {
            id: 5,
            front: "Name the main types of DNS records.",
            back: "A record, CNAME record, MX record, NS record, PTR record, TXT record.",
          },
          {
            id: 6,
            front: "What is an A record in DNS?",
            back: "Maps a domain name to its corresponding IPv4 address.",
          },
          {
            id: 7,
            front: "What does CNAME record stand for?",
            back: "Canonical Name record - used to alias one domain name to another.",
          },
          {
            id: 8,
            front: "What is the Web?",
            back: "A system of interlinked hypertext documents accessed via the Internet.",
          },
          {
            id: 9,
            front: "What protocol does the Web primarily use?",
            back: "HTTP (Hypertext Transfer Protocol).",
          },
          {
            id: 10,
            front: "What is a URL?",
            back: "Uniform Resource Locator - the address used to access resources on the Web.",
          },
          {
            id: 11,
            front: "Name key components of a URL.",
            back: "Protocol, domain name, path, parameters.",
          },
          {
            id: 12,
            front: "What is HTTP?",
            back: "Hypertext Transfer Protocol - used for transferring web pages over the Internet.",
          },
          {
            id: 13,
            front: "Which port does HTTP typically use?",
            back: "Port 80.",
          },
          { id: 14, front: "Which port does HTTPS use?", back: "Port 443." },
          {
            id: 15,
            front: "Difference between HTTP and HTTPS?",
            back: "HTTPS encrypts communication using SSL/TLS, whereas HTTP does not.",
          },
          {
            id: 16,
            front: "What is a status code in HTTP?",
            back: "A code indicating the result of a client's request to the server.",
          },
          {
            id: 17,
            front: "Example of HTTP status code 200?",
            back: "OK - Request succeeded.",
          },
          {
            id: 18,
            front: "Example of HTTP status code 404?",
            back: "Not Found - The requested resource was not found.",
          },
          {
            id: 19,
            front: "What is Internet Mail Transfer Protocol (SMTP)?",
            back: "A protocol for sending email messages between servers.",
          },
          {
            id: 20,
            front: "Which port does SMTP commonly use?",
            back: "Port 25.",
          },
          {
            id: 21,
            front: "What protocol is used for receiving email?",
            back: "POP3 (Post Office Protocol) or IMAP (Internet Message Access Protocol).",
          },
          {
            id: 22,
            front: "Difference between POP3 and IMAP?",
            back: "POP3 downloads and deletes from server; IMAP syncs with server.",
          },
          {
            id: 23,
            front: "What is MIME?",
            back: "Multipurpose Internet Mail Extensions - extends email format to include attachments and non-text data.",
          },
          {
            id: 24,
            front: "What does FTP stand for?",
            back: "File Transfer Protocol.",
          },
          {
            id: 25,
            front: "Purpose of FTP?",
            back: "Transfer files between a client and server over a network.",
          },
          {
            id: 26,
            front: "Which ports are used by FTP?",
            back: "Port 20 (data transfer) and Port 21 (control commands).",
          },
          {
            id: 27,
            front: "Difference between active and passive FTP?",
            back: "Active FTP: server connects to client; Passive FTP: client connects to server.",
          },
          {
            id: 28,
            front: "What is an FTP client?",
            back: "A program that connects to an FTP server to upload or download files.",
          },
          {
            id: 29,
            front: "What is anonymous FTP?",
            back: "Allows users to log into an FTP server without a username or password.",
          },
          { id: 30, front: "Name a popular FTP client.", back: "FileZilla." },
        ],
      },
      {
        id: 3,
        title: "Week 3",
        key: "week-3",
        cards: [
          {
            id: 1,
            front: "What is the main purpose of the transport layer?",
            back: "To provide reliable data transfer services to the upper layers.",
          },
          {
            id: 2,
            front: "Name two important protocols at the transport layer.",
            back: "TCP (Transmission Control Protocol) and UDP (User Datagram Protocol).",
          },
          {
            id: 3,
            front: "What is multiplexing in the transport layer?",
            back: "Combining data from multiple applications into a single stream for transmission.",
          },
          {
            id: 4,
            front: "What is demultiplexing in the transport layer?",
            back: "Delivering received data to the correct application process.",
          },
          {
            id: 5,
            front: "What is a socket?",
            back: "An endpoint for sending or receiving data across a network.",
          },
          {
            id: 6,
            front: "What does TCP provide that UDP does not?",
            back: "Reliable, connection-oriented data transmission.",
          },
          {
            id: 7,
            front: "Define connection establishment in TCP.",
            back: "The process of creating a connection before data transfer using a three-way handshake.",
          },
          {
            id: 8,
            front: "What is the three-way handshake?",
            back: "SYN, SYN-ACK, and ACK packets exchanged to establish a TCP connection.",
          },
          {
            id: 9,
            front: "What is connection termination in TCP?",
            back: "Gracefully closing a connection using a four-step handshake (FIN, ACK).",
          },
          {
            id: 10,
            front: "What is flow control in TCP?",
            back: "Mechanism to prevent sender from overwhelming the receiver.",
          },
          {
            id: 11,
            front: "How is flow control implemented in TCP?",
            back: "Using a sliding window protocol.",
          },
          {
            id: 12,
            front: "What is congestion control?",
            back: "Mechanism to prevent network congestion by adjusting the sending rate.",
          },
          {
            id: 13,
            front: "Define reliable data transfer.",
            back: "Ensuring data is delivered accurately and in the correct sequence.",
          },
          {
            id: 14,
            front: "What is an acknowledgment (ACK)?",
            back: "A signal sent to confirm the receipt of data.",
          },
          {
            id: 15,
            front: "What is a timeout in TCP?",
            back: "A timer that triggers retransmission if acknowledgment is not received in time.",
          },
          {
            id: 16,
            front: "What is meant by retransmission?",
            back: "Resending data packets that were lost or corrupted.",
          },
          {
            id: 17,
            front:
              "What are the main types of errors handled in the transport layer?",
            back: "Packet loss, packet duplication, packet corruption, and out-of-order delivery.",
          },
          {
            id: 18,
            front: "What is a sliding window protocol?",
            back: "A flow control protocol where sender can send multiple frames before needing an acknowledgment.",
          },
          {
            id: 19,
            front: "What is Go-Back-N ARQ?",
            back: "A sliding window protocol where sender resends all frames from a lost frame onwards.",
          },
          {
            id: 20,
            front: "What is Selective Repeat ARQ?",
            back: "Only the lost or corrupted frames are retransmitted, not all frames after a lost one.",
          },
          {
            id: 21,
            front: "What is the window size in sliding window protocol?",
            back: "The maximum number of frames that can be sent without waiting for acknowledgment.",
          },
          {
            id: 22,
            front: "What happens if the receiver's window size is full?",
            back: "The sender must wait until the receiver acknowledges some frames.",
          },
          {
            id: 23,
            front: "Why is the sliding window protocol efficient?",
            back: "It allows continuous transmission without waiting for an acknowledgment after each frame.",
          },
          {
            id: 24,
            front: "What causes retransmissions in Go-Back-N ARQ?",
            back: "Loss or corruption of a frame.",
          },
          {
            id: 25,
            front: "What causes retransmissions in Selective Repeat ARQ?",
            back: "Only specific lost or corrupted frames are retransmitted individually.",
          },
          {
            id: 26,
            front: "What is cumulative acknowledgment?",
            back: "An acknowledgment that confirms receipt of all frames up to a certain point.",
          },
          {
            id: 27,
            front:
              "Which is better for high-error networks, Go-Back-N or Selective Repeat?",
            back: "Selective Repeat, as it minimizes retransmissions.",
          },
          {
            id: 28,
            front: "What is pipelining in TCP?",
            back: "Sending multiple packets without waiting for individual acknowledgments.",
          },
          {
            id: 29,
            front: "What does TCP use for reliability?",
            back: "Acknowledgments, sequence numbers, and retransmissions.",
          },
          {
            id: 30,
            front: "Why is connection management important?",
            back: "To establish, maintain, and terminate communication sessions reliably.",
          },
        ],
      },
      {
        id: 4,
        title: "Week 4",
        key: "week-4",
        cards: [
          {
            id: 1,
            front: "What factors affect transport layer performance?",
            back: "Delay, throughput, packet loss, and congestion.",
          },
          {
            id: 2,
            front: "What is throughput?",
            back: "The rate at which data is successfully delivered over a network channel.",
          },
          {
            id: 3,
            front: "What is end-to-end delay?",
            back: "Total time taken for a data packet to travel from sender to receiver.",
          },
          {
            id: 4,
            front: "What causes packet loss?",
            back: "Network congestion, faulty hardware, or poor signal strength.",
          },
          {
            id: 5,
            front: "What is buffer management in transport layer?",
            back: "Managing memory buffers where packets are stored during transmission or reception.",
          },
          {
            id: 6,
            front: "What happens when buffers overflow?",
            back: "Packets are dropped, leading to data loss.",
          },
          {
            id: 7,
            front: "How can buffer management improve performance?",
            back: "By optimizing memory usage and reducing packet loss.",
          },
          {
            id: 8,
            front: "What is congestion control?",
            back: "Mechanism to avoid excessive load on the network.",
          },
          {
            id: 9,
            front: "Name two congestion control strategies.",
            back: "Open-loop control and closed-loop control.",
          },
          {
            id: 10,
            front: "What is TCP slow start?",
            back: "A congestion control algorithm that gradually increases the sending rate to avoid congestion.",
          },
          {
            id: 11,
            front: "What is congestion window (cwnd) in TCP?",
            back: "A TCP state variable that limits the amount of data a sender can transmit.",
          },
          {
            id: 12,
            front: "What are primitives in transport layer?",
            back: "Basic operations provided to application layers, such as CONNECT, LISTEN, SEND, RECEIVE, and DISCONNECT.",
          },
          {
            id: 13,
            front: "What is the CONNECT primitive?",
            back: "It initiates a connection request to another host.",
          },
          {
            id: 14,
            front: "What is the LISTEN primitive?",
            back: "It waits for incoming connection requests from clients.",
          },
          {
            id: 15,
            front: "What is the SEND primitive?",
            back: "It sends data to a connected peer.",
          },
          {
            id: 16,
            front: "What is the RECEIVE primitive?",
            back: "It receives data from a connected peer.",
          },
          {
            id: 17,
            front: "What is the DISCONNECT primitive?",
            back: "It terminates a connection with a peer.",
          },
          {
            id: 18,
            front: "What is TCP?",
            back: "Transmission Control Protocol, a reliable, connection-oriented transport layer protocol.",
          },
          {
            id: 19,
            front: "How does TCP ensure reliability?",
            back: "Using sequence numbers, acknowledgments, and retransmissions.",
          },
          {
            id: 20,
            front: "What is the basic unit of data in TCP?",
            back: "A segment.",
          },
          {
            id: 21,
            front: "What is a TCP connection identified by?",
            back: "Source IP address, source port, destination IP address, and destination port.",
          },
          {
            id: 22,
            front: "What is the TCP three-way handshake?",
            back: "A process involving SYN, SYN-ACK, and ACK to establish a connection.",
          },
          {
            id: 23,
            front: "What are the TCP flags?",
            back: "SYN, ACK, FIN, RST, PSH, URG.",
          },
          {
            id: 24,
            front: "What does the SYN flag indicate?",
            back: "Request to establish a connection.",
          },
          {
            id: 25,
            front: "What does the FIN flag indicate?",
            back: "Request to terminate a connection.",
          },
          {
            id: 26,
            front: "What does the RST flag do?",
            back: "Resets the TCP connection.",
          },
          {
            id: 27,
            front: "What is TCP flow control?",
            back: "Managing the rate of data transmission between sender and receiver using the window size.",
          },
          {
            id: 28,
            front: "How is TCP connection closed?",
            back: "By exchanging FIN and ACK packets.",
          },
          {
            id: 29,
            front: "What happens if a TCP segment is lost?",
            back: "The sender retransmits the lost segment.",
          },
          {
            id: 30,
            front: "What does TCP use to detect segment loss?",
            back: "Timeouts and duplicate acknowledgments.",
          },
        ],
      },
      {
        id: 5,
        title: "Week 5",
        key: "week-5",
        cards: [
          {
            id: 1,
            front: "What is TCP flow control?",
            back: "Mechanism to prevent the sender from overwhelming the receiver's buffer.",
          },
          {
            id: 2,
            front: "Which field in TCP handles flow control?",
            back: "The window size field in the TCP header.",
          },
          {
            id: 3,
            front: "What is advertised window?",
            back: "It tells the sender how much data the receiver can accept.",
          },
          {
            id: 4,
            front: "What happens if the advertised window is 0?",
            back: "The sender must stop sending until it becomes non-zero.",
          },
          {
            id: 5,
            front: "Name a TCP flow control mechanism.",
            back: "Sliding Window Protocol.",
          },
          {
            id: 6,
            front: "What is TCP congestion control?",
            back: "Technique to prevent too much data from overwhelming the network.",
          },
          {
            id: 7,
            front: "Name four TCP congestion control phases.",
            back: "Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery.",
          },
          {
            id: 8,
            front: "What is the purpose of Slow Start in TCP?",
            back: "To gradually increase the congestion window to find network capacity.",
          },
          {
            id: 9,
            front: "When does TCP enter congestion avoidance?",
            back: "When congestion window reaches a threshold value.",
          },
          {
            id: 10,
            front: "What happens during TCP Fast Retransmit?",
            back: "Sender retransmits a segment without waiting for a timeout after receiving three duplicate ACKs.",
          },
          {
            id: 11,
            front: "What happens in TCP Fast Recovery?",
            back: "Sender reduces the congestion window and avoids slow start.",
          },
          {
            id: 12,
            front: "What is User Datagram Protocol (UDP)?",
            back: "A connectionless, lightweight transport layer protocol.",
          },
          {
            id: 13,
            front: "Is UDP reliable?",
            back: "No, it does not guarantee delivery, order, or duplicate protection.",
          },
          {
            id: 14,
            front: "Name some applications using UDP.",
            back: "DNS, video streaming, VoIP.",
          },
          {
            id: 15,
            front: "What is a UDP segment called?",
            back: "A datagram.",
          },
          {
            id: 16,
            front: "What fields are present in the UDP header?",
            back: "Source port, destination port, length, and checksum.",
          },
          {
            id: 17,
            front: "What is socket programming?",
            back: "Way of connecting two nodes on a network to communicate.",
          },
          {
            id: 18,
            front: "Which two endpoints are required for socket communication?",
            back: "IP address and port number.",
          },
          {
            id: 19,
            front: "Which libraries are used for socket programming in C?",
            back: "sys/socket.h, netinet/in.h, arpa/inet.h.",
          },
          {
            id: 20,
            front: "What function is used to create a socket?",
            back: "socket()",
          },
          {
            id: 21,
            front: "Which function binds a socket to an address?",
            back: "bind()",
          },
          {
            id: 22,
            front: "Which function listens for incoming connections?",
            back: "listen()",
          },
          {
            id: 23,
            front: "Which function accepts incoming connection requests?",
            back: "accept()",
          },
          {
            id: 24,
            front: "What function sends data through a socket?",
            back: "send()",
          },
          {
            id: 25,
            front: "What function receives data from a socket?",
            back: "recv()",
          },
          {
            id: 26,
            front: "What is the role of connect() function?",
            back: "It establishes a connection to a server from a client.",
          },
          {
            id: 27,
            front: "What is the purpose of close() in socket programming?",
            back: "To release the socket resource after communication ends.",
          },
          {
            id: 28,
            front: "What is blocking in socket programming?",
            back: "The function waits until it completes its operation, e.g., recv() waits until data arrives.",
          },
          {
            id: 29,
            front: "What is a non-blocking socket?",
            back: "The socket returns immediately if no operation can be performed.",
          },
          {
            id: 30,
            front: "What is TCP socket programming used for?",
            back: "Building reliable, connection-oriented applications like web servers and chat apps.",
          },
        ],
      },
      {
        id: 6,
        title: "Week 6",
        key: "week-6",
        cards: [
          {
            id: 1,
            front: "What is the main function of the network layer?",
            back: "To move packets from the source to the destination across multiple networks.",
          },
          {
            id: 2,
            front: "Name a key responsibility of the network layer.",
            back: "Routing and addressing.",
          },
          {
            id: 3,
            front: "What are two main types of network services?",
            back: "Connectionless and connection-oriented services.",
          },
          {
            id: 4,
            front: "What is IP addressing?",
            back: "Assigning unique addresses to devices on a network for identification and communication.",
          },
          {
            id: 5,
            front: "What is classful addressing?",
            back: "An IP addressing method where IP addresses are divided into five classes (A, B, C, D, E).",
          },
          {
            id: 6,
            front: "What is the range of Class A IP addresses?",
            back: "0.0.0.0 to 127.255.255.255.",
          },
          {
            id: 7,
            front: "What is the default subnet mask for Class B?",
            back: "255.255.0.0",
          },
          {
            id: 8,
            front: "What is the purpose of Class D addresses?",
            back: "Used for multicasting.",
          },
          {
            id: 9,
            front: "What is CIDR?",
            back: "Classless Inter-Domain Routing, a method for allocating IP addresses and IP routing.",
          },
          {
            id: 10,
            front: "What notation does CIDR use?",
            back: "Slash notation (e.g., 192.168.1.0/24).",
          },
          {
            id: 11,
            front: "How does CIDR improve IP address allocation?",
            back: "By allowing more efficient and flexible address distribution.",
          },
          {
            id: 12,
            front: "What is NAT?",
            back: "Network Address Translation, a technique that translates private IP addresses to a public IP address.",
          },
          {
            id: 13,
            front: "Why is NAT important?",
            back: "It conserves the number of public IP addresses and adds a layer of security.",
          },
          {
            id: 14,
            front: "What are the types of NAT?",
            back: "Static NAT, Dynamic NAT, and PAT (Port Address Translation).",
          },
          {
            id: 15,
            front: "What is Static NAT?",
            back: "One-to-one mapping between local and global addresses.",
          },
          {
            id: 16,
            front: "What is Dynamic NAT?",
            back: "Maps a local IP address to any available global IP address from a pool.",
          },
          {
            id: 17,
            front: "What is PAT?",
            back: "Port Address Translation allows multiple devices on a LAN to be mapped to a single public IP address but with different port numbers.",
          },
          {
            id: 18,
            front: "What is IPv6?",
            back: "Internet Protocol version 6, the successor to IPv4, designed to address IP address exhaustion.",
          },
          {
            id: 19,
            front: "What is the size of an IPv6 address?",
            back: "128 bits.",
          },
          {
            id: 20,
            front: "How are IPv6 addresses represented?",
            back: "Hexadecimal notation separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).",
          },
          {
            id: 21,
            front: "What is the main advantage of IPv6 over IPv4?",
            back: "Larger address space and improved routing efficiency.",
          },
          {
            id: 22,
            front: "What is Stateless Address Autoconfiguration (SLAAC)?",
            back: "A method in IPv6 that allows devices to configure themselves automatically.",
          },
          {
            id: 23,
            front: "What are IPv6 header improvements over IPv4?",
            back: "Simplified header structure with fewer fields.",
          },
          { id: 24, front: "What is an IPv6 loopback address?", back: "::1" },
          {
            id: 25,
            front: "What is an IPv6 link-local address?",
            back: "An address used for communication within a single network segment.",
          },
          {
            id: 26,
            front: "What is the prefix for IPv6 multicast addresses?",
            back: "FF00::/8",
          },
          {
            id: 27,
            front: "Can IPv6 and IPv4 coexist?",
            back: "Yes, using techniques like Dual Stack, Tunneling, and Translation.",
          },
          {
            id: 28,
            front: "What is Dual Stack?",
            back: "Running both IPv4 and IPv6 protocols on a device simultaneously.",
          },
          {
            id: 29,
            front: "What is Tunneling in IPv6?",
            back: "Encapsulating IPv6 packets inside IPv4 packets for transmission over IPv4 networks.",
          },
          {
            id: 30,
            front: "What is NAT64?",
            back: "A method for translating IPv6 packets to IPv4 packets and vice versa.",
          },
        ],
      },
      {
        id: 7,
        title: "Week 7",
        key: "week-7",
        cards: [
          {
            id: 1,
            front: "What does QoS stand for?",
            back: "Quality of Service.",
          },
          {
            id: 2,
            front: "What is the purpose of QoS in networking?",
            back: "To guarantee certain levels of performance to data flows.",
          },
          {
            id: 3,
            front: "Name three common metrics used to measure QoS.",
            back: "Bandwidth, delay (latency), and packet loss.",
          },
          {
            id: 4,
            front: "Why is QoS important for real-time applications?",
            back: "Because applications like VoIP and video streaming need low latency and minimal packet loss.",
          },
          {
            id: 5,
            front: "What is the Basic QoS Architecture?",
            back: "A structure that supports traffic classification, marking, policing, shaping, and scheduling.",
          },
          {
            id: 6,
            front: "What is traffic classification in QoS?",
            back: "Identifying and categorizing packets based on parameters like source address, destination address, and port numbers.",
          },
          {
            id: 7,
            front: "What is traffic policing?",
            back: "The process of monitoring traffic flows and dropping or remarking packets that exceed a traffic profile.",
          },
          {
            id: 8,
            front: "What is traffic shaping?",
            back: "Regulating the data flow rate to ensure a smooth traffic pattern that conforms to a traffic profile.",
          },
          {
            id: 9,
            front: "What is the difference between policing and shaping?",
            back: "Policing drops excess packets, shaping delays them to conform to traffic rates.",
          },
          {
            id: 10,
            front: "What is traffic scheduling?",
            back: "Determining the order in which packets are transmitted to manage congestion and meet QoS requirements.",
          },
          {
            id: 11,
            front: "Name some common traffic scheduling algorithms.",
            back: "FIFO, Priority Queuing, Weighted Fair Queuing (WFQ).",
          },
          {
            id: 12,
            front: "What is FIFO scheduling?",
            back: "First In First Out, where packets are processed in the order they arrive.",
          },
          {
            id: 13,
            front: "What is Priority Queuing?",
            back: "Packets are categorized into priority classes, and higher-priority traffic is sent first.",
          },
          {
            id: 14,
            front: "What is Weighted Fair Queuing (WFQ)?",
            back: "A scheduling algorithm that provides fair bandwidth distribution based on weights assigned to different flows.",
          },
          {
            id: 15,
            front: "What is the Integrated Services (IntServ) architecture?",
            back: "A QoS architecture that provides end-to-end guarantees by reserving resources along the data path.",
          },
          {
            id: 16,
            front: "What protocol is used in IntServ to reserve resources?",
            back: "RSVP (Resource Reservation Protocol).",
          },
          {
            id: 17,
            front:
              "What is the Differentiated Services (DiffServ) architecture?",
            back: "A scalable QoS architecture that classifies and manages network traffic and provides different levels of service.",
          },
          {
            id: 18,
            front: "What is a key component of DiffServ?",
            back: "Differentiated Services Code Point (DSCP) in IP headers.",
          },
          {
            id: 19,
            front: "How does DiffServ differ from IntServ?",
            back: "DiffServ provides QoS by classifying traffic at the network edge and does not require resource reservation per flow.",
          },
          {
            id: 20,
            front: "What is traffic marking?",
            back: "Assigning QoS markings to packets for differentiated treatment across the network.",
          },
          {
            id: 21,
            front: "What does RSVP stand for?",
            back: "Resource Reservation Protocol.",
          },
          {
            id: 22,
            front: "Which architecture (IntServ or DiffServ) is more scalable?",
            back: "DiffServ is more scalable.",
          },
          {
            id: 23,
            front: "What role does the network core play in DiffServ?",
            back: "The network core forwards packets based on their QoS markings without maintaining per-flow state.",
          },
          {
            id: 24,
            front: "What is the primary challenge of IntServ?",
            back: "Scalability due to maintaining state information for each flow in routers.",
          },
          {
            id: 25,
            front: "Which architecture uses per-hop behavior (PHB)?",
            back: "DiffServ.",
          },
          {
            id: 26,
            front: "What is Per-Hop Behavior (PHB)?",
            back: "A description of the treatment that packets receive at each network node under DiffServ.",
          },
          {
            id: 27,
            front: "What happens when traffic exceeds its profile in policing?",
            back: "Packets may be dropped or remarked to a lower priority.",
          },
          {
            id: 28,
            front: "What is a traffic profile?",
            back: "A set of rules defining acceptable traffic patterns (rate, burst size, etc.).",
          },
          {
            id: 29,
            front: "What is congestion in a network?",
            back: "A situation where demand for network resources exceeds capacity, causing packet loss and delays.",
          },
          {
            id: 30,
            front: "What is the goal of congestion control mechanisms in QoS?",
            back: "To prevent and manage congestion to maintain service quality.",
          },
        ],
      },
      {
        id: 8,
        title: "Week 8",
        key: "week-8",
        cards: [
          {
            id: 1,
            front: "What is QoS (Quality of Service)?",
            back: "QoS refers to the ability of a network to provide better service to selected network traffic.",
          },
          {
            id: 2,
            front: "Why is QoS important?",
            back: "QoS ensures the performance of critical applications, prioritizes traffic, and manages bandwidth.",
          },
          {
            id: 3,
            front: "What are key QoS parameters?",
            back: "Bandwidth, latency, jitter, and packet loss.",
          },
          {
            id: 4,
            front: "What is latency?",
            back: "The time it takes for a data packet to travel from the source to the destination.",
          },
          {
            id: 5,
            front: "What is jitter?",
            back: "The variation in packet arrival time.",
          },
          {
            id: 6,
            front: "What is the Basic QoS Architecture?",
            back: "It involves classifying traffic, marking packets, queuing, and scheduling.",
          },
          {
            id: 7,
            front: "What are the key functions in Basic QoS Architecture?",
            back: "Classification, policing, shaping, scheduling, and dropping.",
          },
          {
            id: 8,
            front: "What is traffic classification?",
            back: "Identifying and grouping packets based on specific criteria such as application or user.",
          },
          {
            id: 9,
            front: "What is traffic policing?",
            back: "Monitoring the traffic rate and dropping or marking packets that exceed the limit.",
          },
          {
            id: 10,
            front: "What is traffic shaping?",
            back: "Delaying excess packets to smooth traffic bursts.",
          },
          {
            id: 11,
            front: "What is the main difference between policing and shaping?",
            back: "Policing drops or marks packets; shaping delays them.",
          },
          {
            id: 12,
            front: "What is traffic scheduling?",
            back: "Deciding the order in which packets are transmitted.",
          },
          {
            id: 13,
            front: "Name a few traffic scheduling techniques.",
            back: "FIFO, Priority Queuing (PQ), Weighted Fair Queuing (WFQ).",
          },
          {
            id: 14,
            front: "What is FIFO scheduling?",
            back: "First In, First Out - packets are transmitted in the order they arrive.",
          },
          {
            id: 15,
            front: "What is Priority Queuing (PQ)?",
            back: "Packets are assigned to queues based on priority and served accordingly.",
          },
          {
            id: 16,
            front: "What is Weighted Fair Queuing (WFQ)?",
            back: "Queues are served fairly based on assigned weights.",
          },
          {
            id: 17,
            front: "What is Integrated Services (IntServ)?",
            back: "A QoS model that reserves resources for individual flows.",
          },
          {
            id: 18,
            front: "What protocol is used in IntServ for resource reservation?",
            back: "RSVP (Resource Reservation Protocol).",
          },
          {
            id: 19,
            front: "What is Differentiated Services (DiffServ)?",
            back: "A scalable QoS model that classifies and manages traffic in aggregates.",
          },
          {
            id: 20,
            front: "What does DiffServ use to classify packets?",
            back: "DSCP (Differentiated Services Code Point) field in the IP header.",
          },
          {
            id: 21,
            front: "What is the main advantage of DiffServ over IntServ?",
            back: "DiffServ is more scalable for large networks.",
          },
          {
            id: 22,
            front: "What is a Traffic Conditioner?",
            back: "A function in DiffServ that performs traffic metering, marking, policing, and shaping.",
          },
          {
            id: 23,
            front: "What is the role of the Per-Hop Behavior (PHB)?",
            back: "Defines how packets are treated at each network node in DiffServ.",
          },
          {
            id: 24,
            front: "Name an example of a PHB.",
            back: "Expedited Forwarding (EF) for low-loss, low-latency traffic.",
          },
          {
            id: 25,
            front: "What is Best Effort service in QoS?",
            back: "No guarantees for packet delivery, delay, or loss.",
          },
          {
            id: 26,
            front: "Which QoS model requires end-to-end reservation?",
            back: "Integrated Services (IntServ).",
          },
          {
            id: 27,
            front:
              "Which QoS model uses aggregate classification and is scalable?",
            back: "Differentiated Services (DiffServ).",
          },
          {
            id: 28,
            front: "How does RSVP work?",
            back: "It reserves resources across a network for a data flow by communicating with routers.",
          },
          {
            id: 29,
            front: "What does DSCP stand for?",
            back: "Differentiated Services Code Point.",
          },
          {
            id: 30,
            front: "What is the goal of QoS in networking?",
            back: "To provide predictable and measurable network service to applications and users.",
          },
        ],
      },
      {
        id: 9,
        title: "Week 9",
        key: "week-9",
        cards: [
          {
            id: 1,
            front: "What is an IP Router?",
            back: "An IP Router forwards packets between different networks based on IP addresses.",
          },
          {
            id: 2,
            front: "What is the primary function of a router?",
            back: "To determine the best path for forwarding packets to their destination.",
          },
          {
            id: 3,
            front: "What information is stored in a router's routing table?",
            back: "Network destinations, next-hop addresses, and associated metrics.",
          },
          {
            id: 4,
            front: "What is IP forwarding?",
            back: "The process of sending a packet from one network to another through routers.",
          },
          {
            id: 5,
            front: "Name common routing protocols.",
            back: "RIP, OSPF, BGP.",
          },
          {
            id: 6,
            front: "What is static routing?",
            back: "Routing that is manually configured and doesn't change automatically.",
          },
          {
            id: 7,
            front: "What is dynamic routing?",
            back: "Routing that automatically adjusts based on network topology changes.",
          },
          {
            id: 8,
            front: "What is shown in an IP Router Demo?",
            back: "Configuration of interfaces, setting up static routes, and observing packet forwarding.",
          },
          {
            id: 9,
            front: "What is Software Defined Networking (SDN)?",
            back: "An approach to networking that separates the control plane from the data plane.",
          },
          {
            id: 10,
            front: "What are the two planes in SDN?",
            back: "Control plane and data (forwarding) plane.",
          },
          {
            id: 11,
            front: "What is the main advantage of SDN?",
            back: "Centralized control and programmability of the network.",
          },
          {
            id: 12,
            front: "What is a controller in SDN?",
            back: "A software application that manages the flow control to switches/routers.",
          },
          {
            id: 13,
            front: "What is OpenFlow?",
            back: "A communication protocol that allows the controller to interact with the forwarding plane of switches and routers.",
          },
          {
            id: 14,
            front: "Which organization originally developed OpenFlow?",
            back: "Stanford University.",
          },
          {
            id: 15,
            front: "What does an OpenFlow switch consist of?",
            back: "A flow table that tells how to process incoming packets.",
          },
          {
            id: 16,
            front: "What is a Flow Entry in OpenFlow?",
            back: "A rule defining how packets matching specific criteria should be handled.",
          },
          {
            id: 17,
            front: "What is the purpose of flow tables?",
            back: "To match incoming packets against a set of rules and determine actions.",
          },
          {
            id: 18,
            front: "What is the role of an OpenFlow Controller?",
            back: "To update flow tables in switches dynamically based on network policies.",
          },
          {
            id: 19,
            front: "Name an example of an SDN controller.",
            back: "OpenDaylight, ONOS, Ryu.",
          },
          {
            id: 20,
            front: "What is shown in an SDN Demo?",
            back: "How a controller dynamically programs a switch and manages network flows.",
          },
          {
            id: 21,
            front: "How does SDN improve network management?",
            back: "By simplifying configuration, monitoring, and automation of network resources.",
          },
          {
            id: 22,
            front: "What is northbound API in SDN?",
            back: "Interface between the controller and applications.",
          },
          {
            id: 23,
            front: "What is southbound API in SDN?",
            back: "Interface between the controller and networking devices (e.g., switches).",
          },
          {
            id: 24,
            front: "What challenges does SDN solve?",
            back: "Complexity, lack of flexibility, and static nature of traditional networks.",
          },
          {
            id: 25,
            front: "What are the key components of SDN architecture?",
            back: "Application Layer, Control Layer, and Infrastructure Layer.",
          },
          {
            id: 26,
            front: "How does SDN support network virtualization?",
            back: "By abstracting the physical network and enabling multiple virtual networks.",
          },
          {
            id: 27,
            front: "What is flow-based forwarding?",
            back: "Routing based on defined flows instead of destination IP only.",
          },
          {
            id: 28,
            front: "What is the benefit of OpenFlow in SDN?",
            back: "Enables direct programming of the network path for packets.",
          },
          {
            id: 29,
            front: "What is centralized control in SDN?",
            back: "Network intelligence is moved to a central controller rather than being distributed.",
          },
          {
            id: 30,
            front: "What is programmability in networking?",
            back: "The ability to configure and manage networks using software dynamically.",
          },
        ],
      },
      {
        id: 10,
        title: "Week 10",
        key: "week-10",
        cards: [
          {
            id: 1,
            front: "What is the primary role of an IP Router?",
            back: "To forward packets between different networks based on their IP address.",
          },
          {
            id: 2,
            front: "What information does an IP Router use to forward packets?",
            back: "It uses the routing table to determine the best path for packet forwarding.",
          },
          {
            id: 3,
            front: "What is a routing table?",
            back: "A data table stored in a router that lists the routes to particular network destinations.",
          },
          {
            id: 4,
            front: "What is the purpose of the IP Router Demo?",
            back: "To demonstrate how packets are processed and forwarded in real time.",
          },
          {
            id: 5,
            front: "What key components are observed in an IP Router Demo?",
            back: "Packet reception, route lookup, packet forwarding, and interface selection.",
          },
          {
            id: 6,
            front: "What is Software Defined Networking (SDN)?",
            back: "An approach to networking that uses software-based controllers to direct network traffic.",
          },
          {
            id: 7,
            front: "What are the basic concepts of SDN?",
            back: "Separation of the control plane and data plane, centralized control, and programmability.",
          },
          {
            id: 8,
            front: "What are the main components of SDN architecture?",
            back: "Application layer, control layer, and infrastructure layer.",
          },
          {
            id: 9,
            front: "What is the control plane in SDN?",
            back: "The component that makes decisions about where traffic is sent.",
          },
          {
            id: 10,
            front: "What is the data plane in SDN?",
            back: "The component that actually forwards traffic according to the control plane decisions.",
          },
          {
            id: 11,
            front: "What protocol is most commonly associated with SDN?",
            back: "OpenFlow.",
          },
          {
            id: 12,
            front: "What is OpenFlow?",
            back: "A protocol that allows the controller to interact with the forwarding plane of network devices.",
          },
          {
            id: 13,
            front: "How does OpenFlow enable SDN?",
            back: "By allowing direct access and manipulation of the forwarding plane of network switches and routers.",
          },
          {
            id: 14,
            front: "What are Flow Tables in OpenFlow?",
            back: "Tables in switches that match incoming packets to actions determined by the controller.",
          },
          {
            id: 15,
            front: "What is a Controller in OpenFlow?",
            back: "A centralized software that manages the flow control to the network devices.",
          },
          {
            id: 16,
            front: "What is the benefit of centralized control in SDN?",
            back: "Simplified management and faster innovation by programming the network behavior.",
          },
          {
            id: 17,
            front: "What is SDN's impact on network management?",
            back: "It makes networks more agile, flexible, and efficient.",
          },
          {
            id: 18,
            front: "What was demonstrated in the SDN Demo?",
            back: "The real-time control and reprogramming of network traffic flows using SDN controllers.",
          },
          {
            id: 19,
            front: "What tools are commonly used for SDN demos?",
            back: "Mininet, Open vSwitch (OVS), and SDN controllers like ONOS or OpenDaylight.",
          },
          {
            id: 20,
            front: "How does SDN enhance network security?",
            back: "By enabling dynamic and programmable responses to network threats.",
          },
          {
            id: 21,
            front: "Name a popular open-source SDN controller.",
            back: "ONOS (Open Network Operating System).",
          },
          {
            id: 22,
            front:
              "What is the main advantage of SDN over traditional networking?",
            back: "Centralized control and flexibility in managing network resources.",
          },
          {
            id: 23,
            front: "What is network programmability in SDN?",
            back: "The ability to configure, manage, and optimize network resources using software.",
          },
          {
            id: 24,
            front: "What does Mininet simulate?",
            back: "A realistic virtual network for SDN experimentation.",
          },
          {
            id: 25,
            front: "Why is OpenFlow important in SDN?",
            back: "It standardizes communication between the control and data planes.",
          },
          {
            id: 26,
            front: "What is flow matching in OpenFlow?",
            back: "The process of matching incoming packets to flow rules defined by the controller.",
          },
          {
            id: 27,
            front:
              "What are the types of actions a switch can perform according to OpenFlow?",
            back: "Forward, drop, modify header, or send to controller.",
          },
          {
            id: 28,
            front: "What is southbound API in SDN?",
            back: "Interfaces between the control plane and data plane (e.g., OpenFlow).",
          },
          {
            id: 29,
            front: "What is northbound API in SDN?",
            back: "Interfaces between the control plane and applications for easier network programming.",
          },
          {
            id: 30,
            front: "How does SDN support rapid innovation?",
            back: "By allowing new network services to be developed quickly without changing hardware.",
          },
        ],
      },
      {
        id: 11,
        title: "Week 11",
        key: "week-11",
        cards: [
          {
            id: 1,
            front: "What does ARP stand for?",
            back: "Address Resolution Protocol.",
          },
          {
            id: 2,
            front: "What is the main function of ARP?",
            back: "To map an IP address to a MAC address.",
          },
          {
            id: 3,
            front: "What does RARP stand for?",
            back: "Reverse Address Resolution Protocol.",
          },
          {
            id: 4,
            front: "What is the main function of RARP?",
            back: "To map a MAC address to an IP address.",
          },
          {
            id: 5,
            front: "What does BOOTP stand for?",
            back: "Bootstrap Protocol.",
          },
          {
            id: 6,
            front: "What is the function of BOOTP?",
            back: "To assign IP addresses to devices on a network.",
          },
          {
            id: 7,
            front: "What does DHCP stand for?",
            back: "Dynamic Host Configuration Protocol.",
          },
          {
            id: 8,
            front: "What is the role of DHCP?",
            back: "To automatically assign IP addresses and other network configuration to devices.",
          },
          {
            id: 9,
            front: "How does DHCP work?",
            back: "It uses a client-server model to allocate IP addresses to devices on a network.",
          },
          {
            id: 10,
            front: "What is the difference between ARP and RARP?",
            back: "ARP maps IP to MAC, while RARP maps MAC to IP.",
          },
          {
            id: 11,
            front: "What is the purpose of the ARP table?",
            back: "It stores mappings between IP addresses and MAC addresses.",
          },
          {
            id: 12,
            front: "How does BOOTP differ from DHCP?",
            back: "BOOTP is a more basic protocol, while DHCP offers more features like dynamic IP address allocation.",
          },
          {
            id: 13,
            front: "What is a VLAN?",
            back: "A Virtual Local Area Network, which partitions a physical network into multiple logical networks.",
          },
          {
            id: 14,
            front: "What is the advantage of using VLANs?",
            back: "VLANs improve network management, security, and efficiency by segmenting traffic.",
          },
          {
            id: 15,
            front: "How does VLAN improve network security?",
            back: "By isolating broadcast domains, preventing unauthorized access between segments.",
          },
          {
            id: 16,
            front: "What is the role of a VLAN tag?",
            back: "To identify which VLAN a packet belongs to in a network.",
          },
          {
            id: 17,
            front:
              "What is the difference between a Layer 2 switch and a Layer 3 switch?",
            back: "Layer 2 switches handle MAC addresses, while Layer 3 switches perform routing based on IP addresses.",
          },
          {
            id: 18,
            front: "What is a trunk port in VLANs?",
            back: "A port that carries traffic for multiple VLANs between switches.",
          },
          {
            id: 19,
            front: "What is the function of a router in VLANs?",
            back: "A router allows communication between different VLANs.",
          },
          {
            id: 20,
            front: "What is the purpose of the DHCP Discover message?",
            back: "To request an IP address from a DHCP server.",
          },
          {
            id: 21,
            front: "What is the purpose of the DHCP Offer message?",
            back: "To respond to the DHCP Discover message with an available IP address.",
          },
          {
            id: 22,
            front: "What is the purpose of DHCP Request and DHCP Acknowledge?",
            back: "The client sends a DHCP Request to accept the offered IP, and the server acknowledges with DHCP Acknowledge.",
          },
          {
            id: 23,
            front: "How do VLANs affect broadcast traffic?",
            back: "VLANs limit the scope of broadcast traffic to within the VLAN, preventing unnecessary traffic on other segments.",
          },
          {
            id: 24,
            front: "What is the main purpose of wireless LANs?",
            back: "To provide network access over a wide area without using cables, typically through Wi-Fi.",
          },
          {
            id: 25,
            front: "What are the two main components of a wireless LAN?",
            back: "Access Points (APs) and client devices.",
          },
          {
            id: 26,
            front:
              "What is the role of an Access Point (AP) in a wireless LAN?",
            back: "To provide wireless connectivity to devices and act as a bridge between the wireless network and the wired network.",
          },
          {
            id: 27,
            front:
              "What security protocols are commonly used in wireless LANs?",
            back: "WEP, WPA, WPA2, and WPA3.",
          },
          {
            id: 28,
            front: "What is the purpose of SSID in a wireless LAN?",
            back: "The SSID (Service Set Identifier) is used to identify and distinguish one wireless network from another.",
          },
          {
            id: 29,
            front:
              "What is the difference between a closed and an open wireless network?",
            back: "A closed network requires authentication to join, while an open network does not.",
          },
          {
            id: 30,
            front: "What are the typical challenges of managing wireless LANs?",
            back: "Interference, security concerns, bandwidth limitations, and device compatibility.",
          },
        ],
      },
      {
        id: 12,
        title: "Week 12",
        key: "week-12",
        cards: [
          {
            id: 1,
            front: "What is the role of the Physical Layer?",
            back: "The Physical Layer is responsible for transmitting raw bits over a physical medium.",
          },
          {
            id: 2,
            front:
              "What are some examples of physical media used in the Physical Layer?",
            back: "Copper cables, fiber optics, and wireless signals.",
          },
          {
            id: 3,
            front: "What are the two main functions of the Physical Layer?",
            back: "Bit transmission and the definition of electrical and mechanical specifications for the transmission medium.",
          },
          {
            id: 4,
            front: "What is a protocol at the Physical Layer?",
            back: "It defines how data is transmitted over physical media, including voltage levels, timing, and pinouts.",
          },
          {
            id: 5,
            front: "What is data encoding?",
            back: "Data encoding is the process of converting data into a format suitable for transmission on a communication medium.",
          },
          {
            id: 6,
            front: "What are the different types of encoding techniques?",
            back: "Manchester encoding, NRZ encoding, and 4B/5B encoding.",
          },
          {
            id: 7,
            front:
              "What is the function of the Physical Layer in relation to the Data Link Layer?",
            back: "The Physical Layer provides the means to transmit data over a medium, while the Data Link Layer handles error detection and correction.",
          },
          {
            id: 8,
            front: "What is a transceiver?",
            back: "A transceiver is a device that both transmits and receives signals.",
          },
          {
            id: 9,
            front: "What is multiplexing?",
            back: "Multiplexing is the technique of combining multiple signals into one transmission medium to optimize the use of the medium.",
          },
          {
            id: 10,
            front:
              "What is the difference between analog and digital transmission?",
            back: "Analog transmission involves continuous signals, while digital transmission involves discrete signals.",
          },
          {
            id: 11,
            front:
              "What is the significance of the Physical Layer in network security?",
            back: "The Physical Layer can be vulnerable to interception and physical tampering, affecting overall security.",
          },
          {
            id: 12,
            front: "What is attenuation in the Physical Layer?",
            back: "Attenuation refers to the loss of signal strength as the signal travels over a medium.",
          },
          {
            id: 13,
            front: "What is the purpose of the Network Security Layer?",
            back: "The Network Security Layer protects data integrity, confidentiality, and availability during communication over a network.",
          },
          {
            id: 14,
            front: "What are some common threats to network security?",
            back: "Unauthorized access, data breaches, DoS attacks, and malware.",
          },
          {
            id: 15,
            front: "What is the concept of a firewall in network security?",
            back: "A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
          },
          {
            id: 16,
            front: "What is the purpose of encryption in network security?",
            back: "Encryption ensures that data transmitted over a network remains confidential and cannot be read by unauthorized parties.",
          },
          {
            id: 17,
            front:
              "What is the function of an Intrusion Detection System (IDS)?",
            back: "An IDS monitors network traffic for suspicious activity and potential security breaches.",
          },
          {
            id: 18,
            front: "What is a Denial of Service (DoS) attack?",
            back: "A DoS attack attempts to make a network resource unavailable to its intended users by overwhelming it with traffic.",
          },
          {
            id: 19,
            front: "What are TCP/IP security mechanisms?",
            back: "TCP/IP security mechanisms include encryption, authentication, firewalls, and intrusion detection systems.",
          },
          {
            id: 20,
            front: "What is IPsec?",
            back: "IPsec (Internet Protocol Security) is a suite of protocols used to secure Internet Protocol communications by authenticating and encrypting each IP packet.",
          },
          {
            id: 21,
            front: "What are the different modes of IPsec?",
            back: "Transport mode and Tunnel mode.",
          },
          {
            id: 22,
            front: "What is the role of the Network Layer in network security?",
            back: "The Network Layer provides mechanisms like routing, addressing, and forwarding, which must be secured to ensure safe communication.",
          },
          {
            id: 23,
            front: "What is the importance of SSL/TLS in network security?",
            back: "SSL/TLS provides secure communication channels over networks by encrypting data between clients and servers.",
          },
          {
            id: 24,
            front: "What are common types of network security protocols?",
            back: "SSL/TLS, IPsec, SSH, and Kerberos.",
          },
          {
            id: 25,
            front:
              "What is the difference between a public and private key in cryptography?",
            back: "A public key is shared with others for encryption, while a private key is kept secret for decryption.",
          },
          {
            id: 26,
            front:
              "What is the role of the Transport Layer in network security?",
            back: "The Transport Layer ensures data integrity and confidentiality, often using protocols like SSL/TLS.",
          },
          {
            id: 27,
            front: "How does the Transport Layer prevent unauthorized access?",
            back: "It uses encryption and authentication methods to secure data before it is transmitted.",
          },
          {
            id: 28,
            front: "What is a TCP handshake?",
            back: "The TCP handshake is a process used to establish a connection between a client and a server over a network.",
          },
          {
            id: 29,
            front:
              "What is the purpose of traffic analysis in network security?",
            back: "Traffic analysis involves monitoring network traffic patterns to detect potential attacks or security breaches.",
          },
          {
            id: 30,
            front: "What are some common network security vulnerabilities?",
            back: "Unpatched software, weak passwords, insufficient encryption, and open ports.",
          },
        ],
      },
    ],
  },
  {
    subject_name: "Computer Graphics",
    key: "computer-graphics",
    units: [
      {
        id: 1,
        title: "Unit - 1: Introduction and Basic Drawing Algorithms",
        key: "introduction-to-basic-drawing-algorithms",
        cards: [
          {
            id: 1,
            front: "What is Computer Graphics?",
            back: "Computer Graphics involves creating, manipulating, and displaying images using computers.",
          },
          {
            id: 2,
            front: "What are some applications of Computer Graphics?",
            back: "Applications include video games, simulations, CAD, virtual reality, animations, and medical imaging.",
          },
          {
            id: 3,
            front: "How does Computer Graphics impact modern technology?",
            back: "It enhances user interfaces, improves data visualization, and enables realistic simulations in various industries.",
          },
          {
            id: 4,
            front: "What is a Raster-scan system?",
            back: "A Raster-scan system plots pixels row by row from top to bottom, forming an image line-by-line.",
          },
          {
            id: 5,
            front: "How does a Raster-scan display work?",
            back: "It refreshes the entire screen several times per second using a scanning pattern.",
          },
          {
            id: 6,
            front: "What are the disadvantages of Raster-scan systems?",
            back: "They can suffer from aliasing and are less efficient for drawing vector graphics.",
          },
          {
            id: 7,
            front: "What is a Random-scan system?",
            back: "A Random-scan system, or vector display, draws images directly using lines instead of pixels.",
          },
          {
            id: 8,
            front: "What are the advantages of Random-scan systems?",
            back: "They provide smooth line drawings and are efficient for wireframe models.",
          },
          {
            id: 9,
            front: "What are the limitations of Random-scan systems?",
            back: "They are not suitable for displaying filled areas or complex images with many colors.",
          },
          {
            id: 10,
            front: "What are Graphics Primitives?",
            back: "Graphics primitives are the basic building blocks like points, lines, circles, and polygons used in graphics.",
          },
          {
            id: 11,
            front: "Why are Graphics Primitives important?",
            back: "They are essential for constructing complex shapes and images in computer graphics.",
          },
          {
            id: 12,
            front: "Give examples of Graphics Primitives.",
            back: "Examples include points, lines, circles, ellipses, and polygons.",
          },
          {
            id: 13,
            front: "What is the DDA Line Drawing Algorithm?",
            back: "The DDA algorithm plots a line by calculating intermediate points between two endpoints using floating point arithmetic.",
          },
          {
            id: 14,
            front: "What are the advantages of the DDA Algorithm?",
            back: "It's simple and easy to implement, producing accurate lines for all slopes.",
          },
          {
            id: 15,
            front: "What are the disadvantages of DDA?",
            back: "It uses floating point operations, which can be less efficient than integer arithmetic.",
          },
          {
            id: 16,
            front: "What is Bresenham's Line Algorithm?",
            back: "Bresenham's algorithm uses only integer calculations to draw lines, making it faster and more efficient.",
          },
          {
            id: 17,
            front: "What are the benefits of Bresenham’s algorithm?",
            back: "It’s efficient, fast, and eliminates the use of floating-point arithmetic.",
          },
          {
            id: 18,
            front: "How does Bresenham’s algorithm handle different slopes?",
            back: "It can be adapted for all line slopes using decision parameters.",
          },
          {
            id: 19,
            front: "What is the Midpoint Circle Algorithm?",
            back: "It's a circle drawing algorithm that calculates points in one-eighth of a circle and mirrors them to complete it.",
          },
          {
            id: 20,
            front: "Why is the Midpoint Circle Algorithm efficient?",
            back: "It uses only integer addition, subtraction, and multiplication by 2.",
          },
          {
            id: 21,
            front: "How does the Midpoint Circle Algorithm exploit symmetry?",
            back: "It calculates points in one octant and reflects them in the other seven for full-circle rendering.",
          },
          {
            id: 22,
            front: "What is Bresenham’s Circle Algorithm?",
            back: "It's an optimized circle drawing algorithm using integer arithmetic, similar to Bresenham’s line algorithm.",
          },
          {
            id: 23,
            front: "What are the advantages of Bresenham’s Circle Algorithm?",
            back: "It’s efficient and avoids floating-point calculations by using symmetry.",
          },
          {
            id: 24,
            front:
              "What is the decision parameter in Bresenham’s Circle Algorithm?",
            back: "The decision parameter determines whether the next point is directly east or southeast based on the midpoint.",
          },
          {
            id: 25,
            front: "What is the Midpoint Ellipse Algorithm?",
            back: "It’s a technique to draw ellipses using midpoint analysis and symmetry, breaking the process into two regions.",
          },
          {
            id: 26,
            front: "How does the Midpoint Ellipse Algorithm use symmetry?",
            back: "It calculates points in one quadrant and reflects them to complete the ellipse.",
          },
          {
            id: 27,
            front:
              "What is the role of the decision parameter in ellipse drawing?",
            back: "It determines which direction to move when plotting the next point based on the midpoint evaluation.",
          },
        ],
      },
      {
        id: 2,
        title:
          "Unit - 2: Region Filling Algorithms and Two-Dimensional Geometric Transformations",
        key: "region-filling-algorithms-and-two-dimensional-geometric-transformations",
        cards: [
          {
            id: 1,
            front: "What are attributes of output primitives?",
            back: "Attributes of output primitives define how basic graphic elements like lines and polygons appear, including color, style, and width.",
          },
          {
            id: 2,
            front: "What are some common attributes of output primitives?",
            back: "Common attributes include line type, color, width, fill style, and text font.",
          },
          {
            id: 3,
            front: "Why are output primitive attributes important?",
            back: "They control the visual appearance of graphics, improving clarity and user experience.",
          },
          {
            id: 4,
            front: "What is line style in computer graphics?",
            back: "Line style refers to the visual appearance of a line, such as solid, dashed, or dotted.",
          },
          {
            id: 5,
            front: "How are line styles implemented?",
            back: "Line styles are created by selectively displaying and skipping segments of the line.",
          },
          {
            id: 6,
            front: "Can different line styles be combined?",
            back: "Yes, different styles can be combined for effects like dash-dot or custom patterns.",
          },
          {
            id: 7,
            front: "What does color and intensity mean in computer graphics?",
            back: "Color refers to the hue used in graphics, while intensity refers to the brightness or darkness of that color.",
          },
          {
            id: 8,
            front: "What is RGB color model?",
            back: "The RGB model uses red, green, and blue components to create a broad array of colors.",
          },
          {
            id: 9,
            front: "How is color intensity controlled?",
            back: "By varying the values of RGB components or using shading techniques.",
          },
          {
            id: 10,
            front: "What is an area filling algorithm?",
            back: "An area filling algorithm determines how to fill a region with color or patterns.",
          },
          {
            id: 11,
            front: "What are the main types of area filling algorithms?",
            back: "They include scan-line, boundary fill, and flood fill algorithms.",
          },
          {
            id: 12,
            front: "What are the applications of area filling?",
            back: "Area filling is used in coloring shapes, highlighting regions, and drawing solid graphics.",
          },
          {
            id: 13,
            front: "What is the scan-line fill algorithm?",
            back: "It fills the area by moving across each scan line and identifying intersections with polygon edges.",
          },
          {
            id: 14,
            front: "What are the advantages of scan-line fill?",
            back: "It is efficient and suitable for filling complex polygons without recursion.",
          },
          {
            id: 15,
            front: "How does scan-line algorithm handle overlapping edges?",
            back: "It uses parity or active edge tables to correctly determine fill zones.",
          },
          {
            id: 16,
            front: "What is the boundary fill algorithm?",
            back: "It fills an area bounded by a particular color by recursively replacing pixels until a boundary is reached.",
          },
          {
            id: 17,
            front: "What are the two types of boundary fill algorithms?",
            back: "They are 4-connected and 8-connected boundary fill algorithms.",
          },
          {
            id: 18,
            front: "What is a major drawback of boundary fill?",
            back: "It may suffer from stack overflow due to deep recursion.",
          },
          {
            id: 19,
            front: "What is the flood fill algorithm?",
            back: "Flood fill replaces a region of the same color with a new color, starting from a seed point.",
          },
          {
            id: 20,
            front: "How is flood fill different from boundary fill?",
            back: "Flood fill doesn’t require a specific boundary color; it fills all adjacent pixels of the same color.",
          },
          {
            id: 21,
            front: "Where is flood fill commonly used?",
            back: "In paint programs and graphics applications for region coloring.",
          },
          {
            id: 22,
            front: "What is antialiasing in computer graphics?",
            back: "Antialiasing smooths jagged edges of lines and curves by blending colors at pixel boundaries.",
          },
          {
            id: 23,
            front: "How does antialiasing improve image quality?",
            back: "It reduces visual distortion and makes graphics appear smoother and more realistic.",
          },
          {
            id: 24,
            front: "What are common antialiasing techniques?",
            back: "Supersampling, multisampling, and post-processing filters are commonly used.",
          },
          {
            id: 25,
            front: "What is translation in 2D transformations?",
            back: "Translation shifts an object from one position to another by adding displacement values to its coordinates.",
          },
          {
            id: 26,
            front: "What is the translation matrix in 2D?",
            back: "It is a matrix used in homogeneous coordinates to move objects by specified distances in x and y directions.",
          },
          {
            id: 27,
            front: "What is the effect of translation?",
            back: "The object's shape and size remain unchanged; only its position changes.",
          },
          {
            id: 28,
            front: "What is scaling in 2D graphics?",
            back: "Scaling changes the size of an object either by enlarging or shrinking it along x and y axes.",
          },
          {
            id: 29,
            front: "What is the scaling matrix?",
            back: "It is a diagonal matrix that multiplies coordinates by scale factors.",
          },
          {
            id: 30,
            front: "What is uniform scaling?",
            back: "Uniform scaling applies the same scale factor in all directions, preserving proportions.",
          },
          {
            id: 31,
            front: "What is rotation in 2D transformations?",
            back: "Rotation turns an object about a fixed point (usually the origin) through a specified angle.",
          },
          {
            id: 32,
            front: "What is the rotation matrix?",
            back: "A matrix that uses sine and cosine functions to rotate points around the origin.",
          },
          {
            id: 33,
            front: "What is clockwise vs counter-clockwise rotation?",
            back: "Clockwise uses negative angle, counter-clockwise uses positive angle in the rotation matrix.",
          },
          {
            id: 34,
            front: "What is reflection in 2D transformations?",
            back: "Reflection flips an object over a specified axis or line, creating a mirror image.",
          },
          {
            id: 35,
            front: "What are the types of 2D reflection?",
            back: "Reflection about x-axis, y-axis, origin, and arbitrary line.",
          },
          {
            id: 36,
            front: "How is reflection represented using matrices?",
            back: "Reflection uses specific matrices with values of -1 and 1 to invert coordinate directions.",
          },
          {
            id: 37,
            front: "What is shearing in 2D transformations?",
            back: "Shearing shifts coordinate points in a single direction, distorting the shape of the object.",
          },
          {
            id: 38,
            front: "What are the types of shearing?",
            back: "X-shear and Y-shear distort the shape along the X and Y axis respectively.",
          },
          {
            id: 39,
            front: "How does shearing affect an object?",
            back: "It changes angles between edges, making rectangles into parallelograms.",
          },
          {
            id: 40,
            front: "What is composite transformation?",
            back: "Composite transformation combines multiple transformations into a single operation using matrix multiplication.",
          },
          {
            id: 41,
            front: "What is the order of applying composite transformations?",
            back: "The order matters—applying rotation before translation gives different results than the reverse.",
          },
          {
            id: 42,
            front: "How are composite transformations represented?",
            back: "By multiplying the individual transformation matrices together into one combined matrix.",
          },
          {
            id: 43,
            front: "What are transformation commands?",
            back: "Commands in graphics software or APIs used to apply transformations like scaling, rotation, and translation.",
          },
          {
            id: 44,
            front: "Where are transformation commands used?",
            back: "In CAD tools, graphics libraries, and animation tools to manipulate shapes and objects.",
          },
          {
            id: 45,
            front: "What is the purpose of transformation commands?",
            back: "To change the position, size, orientation, or shape of objects in a graphics environment.",
          },
          {
            id: 46,
            front: "What is character generation in graphics?",
            back: "Character generation is the process of displaying text characters on the screen using graphical techniques.",
          },
          {
            id: 47,
            front: "What methods are used for character generation?",
            back: "Bitmap fonts and stroke (vector) fonts are common methods.",
          },
          {
            id: 48,
            front: "What is the difference between bitmap and vector fonts?",
            back: "Bitmap fonts are pixel-based and resolution dependent, while vector fonts use strokes and scale better.",
          },
        ],
      },
      {
        id: 3,
        title: "Unit - 3: Viewing and Clipping",
        key: "viewing-and-clipping",
        cards: [
          {
            id: 1,
            front: "What are viewing coordinates in computer graphics?",
            back: "Viewing coordinates define a coordinate system used for displaying objects from a specific viewpoint, separate from world coordinates.",
          },
          {
            id: 2,
            front: "Why are viewing coordinates important?",
            back: "They allow transformation of objects from the world coordinate system into a viewing volume suitable for display.",
          },
          {
            id: 3,
            front: "How are viewing coordinates established?",
            back: "By specifying a viewing reference point, viewing direction, and a view-up vector.",
          },
          {
            id: 4,
            front: "What is a window in computer graphics?",
            back: "A window is a rectangular region in the world coordinate system selected for display.",
          },
          {
            id: 5,
            front: "What is a viewport in computer graphics?",
            back: "A viewport is a rectangular area on the display device where the contents of the window are mapped.",
          },
          {
            id: 6,
            front: "What is the window-viewport transformation?",
            back: "It maps the selected world coordinate window to the device coordinate viewport using scaling and translation.",
          },
          {
            id: 7,
            front: "What is clipping in computer graphics?",
            back: "Clipping is the process of removing parts of graphics that lie outside a designated region (like the viewport).",
          },
          {
            id: 8,
            front: "Why is clipping necessary?",
            back: "To improve performance and ensure that only the visible portion of objects is displayed.",
          },
          {
            id: 9,
            front: "What are the types of clipping?",
            back: "Line clipping, polygon clipping, curve clipping, text clipping, and 3D clipping.",
          },
          {
            id: 10,
            front:
              "What is the purpose of the window-to-viewport transformation?",
            back: "To map the contents of a defined window in world coordinates onto a viewport on the display device.",
          },
          {
            id: 11,
            front:
              "Which operations are used in window-to-viewport transformation?",
            back: "Scaling and translation operations are used to convert coordinates from window to viewport.",
          },
          {
            id: 12,
            front:
              "Does window-to-viewport transformation change the shape of objects?",
            back: "If aspect ratios differ, it may distort the shape unless corrected.",
          },
          {
            id: 13,
            front: "What is the Cohen-Sutherland line clipping algorithm?",
            back: "It is a line clipping algorithm that divides the 2D space into 9 regions and uses region codes to determine visibility.",
          },
          {
            id: 14,
            front: "What are region codes in Cohen-Sutherland?",
            back: "Each endpoint of a line is assigned a 4-bit code representing its position relative to the clipping window.",
          },
          {
            id: 15,
            front: "How does Cohen-Sutherland optimize clipping?",
            back: "It quickly identifies trivial accept/reject cases based on region codes, reducing computations.",
          },
          {
            id: 16,
            front: "What is polygon clipping?",
            back: "Polygon clipping is the process of removing portions of a polygon that lie outside a clipping region.",
          },
          {
            id: 17,
            front: "What is the Sutherland-Hodgman polygon clipping algorithm?",
            back: "It clips a polygon by processing each edge of the clipping window and building a new polygon with only visible parts.",
          },
          {
            id: 18,
            front: "What are the steps of Sutherland-Hodgman algorithm?",
            back: "Clip against each edge of the window in sequence, modifying vertices as needed.",
          },
          {
            id: 19,
            front: "What is 3D clipping in graphics?",
            back: "3D clipping involves removing parts of 3D objects that lie outside the viewing volume before rendering.",
          },
          {
            id: 20,
            front: "What is the normalized view volume?",
            back: "It is a canonical viewing volume, typically a cube from -1 to 1 in all axes, used for efficient 3D clipping.",
          },
          {
            id: 21,
            front: "What is the purpose of normalized view volume?",
            back: "To simplify the 3D clipping process and allow hardware acceleration.",
          },
          {
            id: 22,
            front: "What is viewport clipping?",
            back: "Viewport clipping ensures that only the graphics that fall within the viewport area are displayed on the screen.",
          },
          {
            id: 23,
            front: "When does viewport clipping occur?",
            back: "After the window-to-viewport transformation, right before rasterization or display.",
          },
          {
            id: 24,
            front: "What happens to primitives outside the viewport?",
            back: "They are either partially drawn (clipped) or entirely discarded depending on their intersection.",
          },
          {
            id: 25,
            front: "What are homogeneous coordinates in graphics?",
            back: "Homogeneous coordinates add an extra dimension to allow translation via matrix multiplication.",
          },
          {
            id: 26,
            front: "What is clipping in homogeneous coordinates?",
            back: "It allows clipping in 3D by converting coordinates to 4D space, simplifying transformations and visibility tests.",
          },
          {
            id: 27,
            front:
              "What is the benefit of using homogeneous coordinates for clipping?",
            back: "They allow all transformations and clipping to be performed uniformly using matrix operations.",
          },
        ],
      },
      {
        id: 4,
        title: "Unit - 4: Illumination Model",
        key: "illumination-model",
        cards: [
          {
            id: 1,
            front: "What are the types of light sources in computer graphics?",
            back: "Common light sources include ambient light, point light, directional light, and spotlights.",
          },
          {
            id: 2,
            front: "What is diffuse reflection in lighting?",
            back: "Diffuse reflection occurs when light hits a rough surface and scatters uniformly in all directions.",
          },
          {
            id: 3,
            front: "How is diffuse reflection calculated?",
            back: "Using Lambert’s cosine law: I = Il × Kd × cos(θ), where Il is the light intensity, Kd is the diffuse coefficient, and θ is the angle between the light and surface normal.",
          },
          {
            id: 4,
            front: "What is the RGB color model?",
            back: "The RGB model represents colors by combining Red, Green, and Blue values, commonly used in digital displays.",
          },
          {
            id: 5,
            front: "What is the YIQ color model?",
            back: "The YIQ model separates an image into luminance (Y) and chrominance (I and Q), used in NTSC TV systems.",
          },
          {
            id: 6,
            front: "What is the CMY color model used for?",
            back: "CMY (Cyan, Magenta, Yellow) is used in color printing, where colors are formed by subtracting RGB from white light.",
          },
          {
            id: 7,
            front: "What is HSV color model?",
            back: "HSV stands for Hue, Saturation, and Value; it is a cylindrical representation that aligns more closely with human perception of color.",
          },
          {
            id: 8,
            front: "What are basic 3D concepts in graphics?",
            back: "They include the x, y, and z axes, 3D object modeling, depth perception, and transformations.",
          },
          {
            id: 9,
            front: "What are 3D display techniques?",
            back: "Techniques include stereoscopic displays, anaglyphs, and autostereoscopic displays to simulate depth.",
          },
          {
            id: 10,
            front: "What are the main types of 3D representations?",
            back: "Wireframe models, surface models, and solid models are commonly used 3D representations.",
          },
          {
            id: 11,
            front: "What is 3D translation?",
            back: "It moves an object from one position to another in 3D space by adding displacement values to its coordinates.",
          },
          {
            id: 12,
            front: "How is 3D scaling performed?",
            back: "By multiplying the coordinates of an object by scale factors along the x, y, and z axes.",
          },
          {
            id: 13,
            front: "What is a composite transformation in 3D graphics?",
            back: "It combines multiple transformations like scaling, rotation, and translation into a single transformation matrix.",
          },
          {
            id: 14,
            front: "What is rotation about an arbitrary axis in 3D?",
            back: "It involves rotating an object around a custom axis using a combination of translations and rotation matrices.",
          },
          {
            id: 15,
            front: "What is a parallel projection in 3D graphics?",
            back: "In parallel projection, projection lines are parallel and do not converge, preserving the relative proportions of the object.",
          },
          {
            id: 16,
            front: "What is perspective projection?",
            back: "Perspective projection uses converging lines that simulate the appearance of depth, making distant objects appear smaller.",
          },
          {
            id: 17,
            front: "What is hidden surface removal?",
            back: "It is the process of removing surfaces that are not visible from a certain viewpoint in 3D rendering.",
          },
          {
            id: 18,
            front: "What is back-face removal?",
            back: "A technique to remove the polygons facing away from the camera, often using the dot product of the normal vector.",
          },
          {
            id: 19,
            front: "What is the depth buffer method?",
            back: "Also called Z-buffering, it stores depth information to determine which surfaces are in front and should be visible.",
          },
          {
            id: 20,
            front: "What is the scan-line method in hidden surface removal?",
            back: "It processes the image row by row, determining which surfaces are visible for each scan line.",
          },
        ],
      },
      {
        id: 5,
        title: "Unit - 5: 2D and 3D Animation Tools – Flash I",
        key: "2d-and-3d-animation-tools-flash-I",
        cards: [
          {
            id: 1,
            front: "What is Multimedia?",
            back: "Multimedia is the integration of text, graphics, audio, video, and animation into a single interactive platform.",
          },
          {
            id: 2,
            front: "What is the purpose of Multimedia?",
            back: "It enhances user interaction and engagement through the combination of multiple media types.",
          },
          {
            id: 3,
            front: "What is Animation in Multimedia?",
            back: "Animation is the process of creating motion and shape change illusions using a sequence of static images.",
          },
          {
            id: 4,
            front: "What is Adobe Flash?",
            back: "Flash is a multimedia software platform used for creating vector graphics, animation, and web applications.",
          },
          {
            id: 5,
            front: "What does the Selection tool in Flash do?",
            back: "The Selection tool allows users to select entire objects or groups for editing or moving.",
          },
          {
            id: 6,
            front: "What is the function of the Free Transform tool in Flash?",
            back: "The Free Transform tool lets users rotate, scale, skew, or distort selected objects.",
          },
          {
            id: 7,
            front: "What is the Gradient Transform tool used for in Flash?",
            back: "It adjusts the direction, size, and position of gradients applied to objects.",
          },
          {
            id: 8,
            front: "What is the purpose of the Eyedropper tool in Flash?",
            back: "The Eyedropper tool picks up color or style from one object and applies it to another.",
          },
          {
            id: 9,
            front: "What does the Paint Bucket tool do in Flash?",
            back: "It fills enclosed areas with a selected color or gradient.",
          },
          {
            id: 10,
            front: "What is the function of the Pen tool in Flash?",
            back: "The Pen tool creates precise paths and curves using anchor points.",
          },
          {
            id: 11,
            front: "What are Flash Toolbars?",
            back: "Flash Toolbars provide access to commonly used tools and functions for animation and design.",
          },
          {
            id: 12,
            front: "What is the Stage in Flash?",
            back: "The Stage is the main area where graphics and animations are composed and previewed.",
          },
          {
            id: 13,
            front: "What are Panels in Flash?",
            back: "Panels are dockable windows that provide controls for properties, libraries, and timelines.",
          },
          {
            id: 14,
            front: "What is Frame-by-Frame animation in Flash?",
            back: "It involves drawing each frame individually to create motion.",
          },
          {
            id: 15,
            front: "What is Motion Tweening in Flash?",
            back: "Motion Tweening automatically animates the movement of objects between keyframes.",
          },
          {
            id: 16,
            front: "What is Shape Tweening in Flash?",
            back: "Shape Tweening morphs one shape into another over time.",
          },
          {
            id: 17,
            front: "What is Character Tweening in Flash?",
            back: "Character Tweening animates text or character graphics across frames using tweens.",
          },
          {
            id: 18,
            front: "What is Masking in Flash animation?",
            back: "Masking hides or reveals parts of objects using a mask layer.",
          },
          {
            id: 19,
            front: "What is Layering in Flash?",
            back: "Layering organizes content in separate layers to control stacking and animation order.",
          },
          {
            id: 20,
            front: "How do you add sound in Flash?",
            back: "Sound can be added by importing an audio file and dragging it onto the timeline or stage.",
          },
          {
            id: 21,
            front: "How do you play and stop sound in Flash?",
            back: "Sound playback is controlled using timeline frames and ActionScript commands like play and stop.",
          },
          {
            id: 22,
            front: "How is sound imported into Flash?",
            back: "Using File > Import to Stage or Library to bring in sound files like MP3 or WAV.",
          },
          {
            id: 23,
            front: "What does the 'x' property represent in Flash scripting?",
            back: "It represents the current x-coordinate of an object.",
          },
          {
            id: 24,
            front: "What does the 'y' property represent in Flash scripting?",
            back: "It represents the current y-coordinate of an object.",
          },
          {
            id: 25,
            front: "What are Timeline Controls in Flash?",
            back: "Timeline controls include play, stop, goToAndPlay, goToAndStop, which control animation flow.",
          },
          {
            id: 26,
            front: "What is setProperty() in Flash?",
            back: "It sets a property (like x, y, alpha) of an object dynamically using scripting.",
          },
          {
            id: 27,
            front: "What is getProperty() in Flash?",
            back: "It retrieves the current value of an object's property.",
          },
          {
            id: 28,
            front: "What does startDrag() do in Flash?",
            back: "It enables the dragging of movie clips with the mouse.",
          },
          {
            id: 29,
            front: "What does stopDrag() do in Flash?",
            back: "It stops the dragging of movie clips that were previously started with startDrag().",
          },
          {
            id: 30,
            front: "What is the purpose of on() in Flash?",
            back: "It is an event handler used to specify actions when user interaction (like click) occurs.",
          },
          {
            id: 31,
            front: "What is fscommand in Flash scripting?",
            back: "fscommand sends commands from a Flash movie to the container application or browser, e.g., quit, fullscreen.",
          },
          {
            id: 32,
            front: "What does getURL() do in Flash?",
            back: "It opens a URL or sends data to a server from within a Flash application.",
          },
          {
            id: 33,
            front: "What is loadMovie() in Flash?",
            back: "It loads another Flash movie into a specified movie clip or level at runtime.",
          },
          {
            id: 34,
            front: "What does the fullscreen fscommand do?",
            back: "It toggles the Flash movie between fullscreen and normal screen modes.",
          },
        ],
      },
      {
        id: 6,
        title: "Unit - 6: Working with MatLab",
        key: "working-with-matlab",
        cards: [
          {
            id: 1,
            front: "What is MATLAB?",
            back: "MATLAB is a high-level programming environment used for numerical computation, visualization, and application development.",
          },
          {
            id: 2,
            front: "What are the main features of MATLAB?",
            back: "MATLAB offers features like built-in math functions, matrix manipulation, data visualization, and GUI development.",
          },
          {
            id: 3,
            front: "What are the uses of MATLAB?",
            back: "MATLAB is widely used in engineering, scientific research, signal processing, image processing, and control systems.",
          },
          {
            id: 4,
            front: "What is the MATLAB environment?",
            back: "The MATLAB environment includes the Command Window, Workspace, Command History, Editor, and Figure window.",
          },
          {
            id: 5,
            front: "What are variables in MATLAB?",
            back: "Variables in MATLAB are used to store data such as numbers, strings, or arrays.",
          },
          {
            id: 6,
            front: "What is MATLAB syntax?",
            back: "MATLAB syntax refers to the set of rules that define how MATLAB code is written, including function calls, indexing, and matrix operations.",
          },
          {
            id: 7,
            front: "What are naming conventions for variables in MATLAB?",
            back: "Variable names must start with a letter, followed by letters, digits, or underscores, and are case-sensitive.",
          },
          {
            id: 8,
            front: "What are some basic MATLAB commands?",
            back: "Common commands include `clc`, `clear`, `who`, `whos`, `disp`, and `help`.",
          },
          {
            id: 9,
            front: "What datatypes are available in MATLAB?",
            back: "MATLAB supports data types such as double, char, logical, int8, cell, struct, and function handles.",
          },
          {
            id: 10,
            front: "What are decision statements in MATLAB?",
            back: "Decision statements include `if`, `else`, `elseif`, and `switch` to control flow based on conditions.",
          },
          {
            id: 11,
            front: "What are the looping structures in MATLAB?",
            back: "Looping structures include `for`, `while`, and `break` for iterative execution of code.",
          },
          {
            id: 12,
            front: "What is a vector in MATLAB?",
            back: "A vector is a one-dimensional array that can store a sequence of numbers in a row or column format.",
          },
          {
            id: 13,
            front: "What is a matrix in MATLAB?",
            back: "A matrix is a two-dimensional array used to represent linear equations and data sets.",
          },
          {
            id: 14,
            front: "What is the difference between array and matrix in MATLAB?",
            back: "In MATLAB, arrays can be multi-dimensional, while matrices are specifically 2D arrays.",
          },
          {
            id: 15,
            front: "How are strings handled in MATLAB?",
            back: "Strings are handled using the `string` or `char` data types and can be manipulated using built-in functions.",
          },
          {
            id: 16,
            front: "How are functions defined in MATLAB?",
            back: "Functions are defined using the `function` keyword followed by output, function name, and input arguments.",
          },
          {
            id: 17,
            front: "What does `imread()` do in MATLAB?",
            back: "`imread()` reads an image file into MATLAB as a matrix.",
          },
          {
            id: 18,
            front: "What is the use of `imshow()`?",
            back: "`imshow()` displays an image in a MATLAB figure window.",
          },
          {
            id: 19,
            front: "What does `imwrite()` do?",
            back: "`imwrite()` saves an image matrix to a file.",
          },
          {
            id: 20,
            front: "What does `rgb2gray()` do in image processing?",
            back: "`rgb2gray()` converts a color image to a grayscale image.",
          },
          {
            id: 21,
            front: "What is the use of `imhist()` in MATLAB?",
            back: "`imhist()` displays the histogram of a grayscale image.",
          },
          {
            id: 22,
            front: "What does `imadjust()` do?",
            back: "`imadjust()` adjusts image intensity values to enhance contrast.",
          },
          {
            id: 23,
            front: "What is the function of `im2bw()`?",
            back: "`im2bw()` converts a grayscale image to a binary image (black and white).",
          },
          {
            id: 24,
            front: "What is the use of `uigetfile()`?",
            back: "`uigetfile()` opens a file selection dialog box and returns the selected file name.",
          },
          {
            id: 25,
            front: "What does `imcomplement()` do?",
            back: "`imcomplement()` returns the complement of the image (inverts pixel values).",
          },
          {
            id: 26,
            front: "What does `edge(filename, method)` perform?",
            back: "`edge()` detects edges in an image using specified methods like 'Canny', 'Sobel', or 'Prewitt'.",
          },
          {
            id: 27,
            front: "How do you rotate an image in MATLAB?",
            back: "Use `imrotate(image, angle)` to rotate an image by a given angle.",
          },
          {
            id: 28,
            front: "What is edge detection using the Canny method?",
            back: "Canny method detects edges by finding local maxima of the gradient of the image.",
          },
          {
            id: 29,
            front: "How to rotate an image clockwise in MATLAB?",
            back: "Use `imrotate(image, -90)` to rotate an image 90 degrees clockwise.",
          },
          {
            id: 30,
            front: "How to rotate an image anti-clockwise in MATLAB?",
            back: "Use `imrotate(image, 90)` to rotate an image 90 degrees anti-clockwise.",
          },
        ],
      },
    ],
  },
  {
    subject_name: "Comprehensive Assessment",
    key: "comprehensive-assessment",
    units: [
      {
        id: 1,
        title: "Unit - 1: Fundamentals of Computer Organization",
        key: "fundamentals-of-computer-organization",
        cards: [
          {
            id: 1,
            front: "What are the types of number systems?",
            back: "The main types are Binary, Decimal, Octal, and Hexadecimal number systems.",
          },
          {
            id: 2,
            front: "What is the binary number system?",
            back: "A number system that uses only two digits, 0 and 1, and is the basis of all binary code used in computers.",
          },
          {
            id: 3,
            front: "How is a hexadecimal number converted to binary?",
            back: "Each hexadecimal digit is replaced with its 4-bit binary equivalent.",
          },
          {
            id: 4,
            front: "What is Boolean algebra?",
            back: "Boolean algebra is a branch of algebra that deals with true or false values, using logic operations.",
          },
          {
            id: 5,
            front: "Name the basic operations of Boolean algebra.",
            back: "The basic operations are AND, OR, and NOT.",
          },
          {
            id: 6,
            front: "What is DeMorgan’s Theorem?",
            back: "It states: (A + B)' = A'·B' and (A·B)' = A' + B'",
          },
          {
            id: 7,
            front: "What is a flip-flop?",
            back: "A flip-flop is a digital memory circuit used to store one bit of data.",
          },
          {
            id: 8,
            front: "Name types of flip-flops.",
            back: "Common types include SR, JK, D, and T flip-flops.",
          },
          {
            id: 9,
            front: "What is the purpose of a D flip-flop?",
            back: "A D flip-flop captures the value of the data input (D) on the rising edge of the clock signal.",
          },
          {
            id: 10,
            front: "What is a half adder?",
            back: "A half adder is a circuit that adds two single binary digits and gives a sum and a carry output.",
          },
          {
            id: 11,
            front: "What is a full adder?",
            back: "A full adder adds three binary digits (including carry-in) and outputs a sum and a carry.",
          },
          {
            id: 12,
            front: "How is a full adder constructed?",
            back: "A full adder can be built using two half adders and an OR gate.",
          },
          {
            id: 13,
            front: "What is RAM?",
            back: "RAM (Random Access Memory) is a type of volatile memory used for temporary data storage during operation.",
          },
          {
            id: 14,
            front: "What are the types of RAM?",
            back: "RAM is mainly of two types: Static RAM (SRAM) and Dynamic RAM (DRAM).",
          },
          {
            id: 15,
            front: "Why is RAM called volatile memory?",
            back: "Because it loses its data when the power supply is turned off.",
          },
          {
            id: 16,
            front: "What is ROM?",
            back: "ROM (Read-Only Memory) is non-volatile memory that contains permanent instructions for booting a computer.",
          },
          {
            id: 17,
            front: "What are types of ROM?",
            back: "Types of ROM include PROM, EPROM, and EEPROM.",
          },
          {
            id: 18,
            front: "What is the primary function of ROM?",
            back: "ROM stores firmware, which is essential software permanently programmed into hardware.",
          },
          {
            id: 19,
            front: "What is cache memory?",
            back: "Cache memory is a small, high-speed memory located close to the CPU to store frequently accessed data.",
          },
          {
            id: 20,
            front: "What are the levels of cache memory?",
            back: "Typically, cache is divided into L1, L2, and L3 levels, where L1 is the fastest and smallest.",
          },
          {
            id: 21,
            front: "Why is cache memory important?",
            back: "It improves system performance by reducing access time to frequently used data.",
          },
          {
            id: 22,
            front: "What are buses in a computer system?",
            back: "Buses are communication systems that transfer data between components inside or outside a computer.",
          },
          {
            id: 23,
            front: "What are the types of buses?",
            back: "There are three main types: Data bus, Address bus, and Control bus.",
          },
          {
            id: 24,
            front: "What is the function of the data bus?",
            back: "The data bus transfers actual data between the processor, memory, and peripherals.",
          },
        ],
      },
      {
        id: 2,
        title: "Unit - 2: Fundamentals of Programming",
        key: "fundamentals-of-programming",
        cards: [
          {
            id: 1,
            front: "What are decision and control structures in C?",
            back: "They are constructs that allow branching in a program, such as if, if-else, switch-case statements.",
          },
          {
            id: 2,
            front: "What is the purpose of the 'if' statement in C?",
            back: "'if' evaluates a condition and executes the block of code if the condition is true.",
          },
          {
            id: 3,
            front: "How does a switch-case work in C?",
            back: "It compares the value of a variable to several cases and executes the matching block.",
          },
          {
            id: 4,
            front: "What are the types of loops in C?",
            back: "The types are for loop, while loop, and do-while loop.",
          },
          {
            id: 5,
            front: "When is a do-while loop preferred over a while loop?",
            back: "When the loop body must execute at least once regardless of the condition.",
          },
          {
            id: 6,
            front: "How does a for loop work?",
            back: "It has an initialization, condition, and increment/decrement for repeated execution of code.",
          },
          {
            id: 7,
            front: "What is an array in C?",
            back: "An array is a collection of elements of the same type stored in contiguous memory locations.",
          },
          {
            id: 8,
            front: "How are elements of an array accessed?",
            back: "Using the index, starting from 0 (e.g., arr[0], arr[1], ...).",
          },
          {
            id: 9,
            front: "Can arrays be multidimensional in C?",
            back: "Yes, arrays can be two-dimensional or more (e.g., int matrix[3][3]).",
          },
          {
            id: 10,
            front: "What is a function in C?",
            back: "A function is a block of code that performs a specific task and can be reused.",
          },
          {
            id: 11,
            front: "Why use functions in C?",
            back: "To break down large programs into smaller, manageable modules.",
          },
          {
            id: 12,
            front: "What is recursion in C?",
            back: "A function calling itself to solve a smaller instance of the same problem.",
          },
          {
            id: 13,
            front: "What is pass by value?",
            back: "A method where a copy of the variable is passed to a function, and changes don't affect the original.",
          },
          {
            id: 14,
            front: "Does pass by value affect the original variable?",
            back: "No, it does not modify the original variable.",
          },
          {
            id: 15,
            front: "What is the default parameter passing method in C?",
            back: "C uses pass by value by default.",
          },
          {
            id: 16,
            front: "What is pass by pointer?",
            back: "It involves passing the address of a variable so the function can modify the original variable.",
          },
          {
            id: 17,
            front: "When should pass by pointer be used?",
            back: "When you want a function to modify the actual value of a variable.",
          },
          {
            id: 18,
            front: "How is pass by pointer done in C?",
            back: "By passing the variable’s address using the & operator and accessing it using * inside the function.",
          },
          {
            id: 19,
            front: "What is a pointer?",
            back: "A pointer is a variable that stores the address of another variable.",
          },
          {
            id: 20,
            front: "How do you declare a pointer?",
            back: "Using an asterisk (*), e.g., int *ptr;",
          },
          {
            id: 21,
            front: "What is the use of pointers?",
            back: "They are used for dynamic memory allocation, arrays, functions, and data structures.",
          },
          {
            id: 22,
            front: "What is a structure in C?",
            back: "A structure is a user-defined data type that allows grouping variables of different types.",
          },
          {
            id: 23,
            front: "How do you access structure members?",
            back: "Using the dot operator (.) for variables and arrow operator (->) for pointers.",
          },
          {
            id: 24,
            front: "Can structures contain arrays?",
            back: "Yes, structures can contain arrays and even other structures.",
          },
          {
            id: 25,
            front: "What is a union in C?",
            back: "A union is like a structure but shares the same memory space for all members.",
          },
          {
            id: 26,
            front: "How is union different from structure?",
            back: "In union, only one member can contain a value at a time; in structure, all members can hold values.",
          },
          {
            id: 27,
            front: "When is a union useful?",
            back: "When memory efficiency is crucial and variables are used at different times.",
          },
          {
            id: 28,
            front: "What is file handling in C?",
            back: "File handling allows reading from and writing to files using functions like fopen, fread, fwrite, etc.",
          },
          {
            id: 29,
            front: "What are the modes for opening a file in C?",
            back: "Common modes include 'r', 'w', 'a', 'rb', 'wb', etc.",
          },
          {
            id: 30,
            front: "How do you write to a file in C?",
            back: "Using functions like fprintf() or fputs().",
          },
        ],
      },
      {
        id: 3,
        title: "Unit - 3: Fundamentals of Internet and Web Designing",
        key: "fundamentals-of-web-designing",
        cards: [
          {
            id: 1,
            front: "What is the purpose of HTML tags?",
            back: "HTML tags define the structure and content of a webpage using elements like <p>, <h1>, <div>, etc.",
          },
          {
            id: 2,
            front: "What does the <a> tag do in HTML?",
            back: "The <a> tag defines a hyperlink that links one page to another.",
          },
          {
            id: 3,
            front: "What is the difference between <div> and <span>?",
            back: "<div> is a block-level element, while <span> is inline and used for styling small parts of text.",
          },
          {
            id: 4,
            front: "How do you link an external document in HTML?",
            back: "Using the <a href='url'>link text</a> tag to reference another document or site.",
          },
          {
            id: 5,
            front: "What is the 'target' attribute in a link tag used for?",
            back: "It specifies where to open the linked document (_blank for new tab, _self for same tab, etc).",
          },
          {
            id: 6,
            front: "Can HTML link to internal sections within the same page?",
            back: "Yes, using an anchor like <a href='#section1'> and an id='section1'.",
          },
          {
            id: 7,
            front: "What are HTML frames used for?",
            back: "Frames allow displaying multiple web pages in one window using <frameset> and <frame>.",
          },
          {
            id: 8,
            front: "Are HTML frames still widely used?",
            back: "No, frames are deprecated in HTML5 and replaced with modern layouts using CSS or iframes.",
          },
          {
            id: 9,
            front: "What is an alternative to using frames in modern HTML?",
            back: "Using <iframe> or CSS Flex/Grid layouts for embedding and structuring content.",
          },
          {
            id: 10,
            front: "How do you add media elements like audio in HTML?",
            back: "Using the <audio> tag with <source> tags for different formats.",
          },
          {
            id: 11,
            front: "Which HTML tag is used to embed video files?",
            back: "The <video> tag is used, along with <source> for different formats (e.g., MP4, WebM).",
          },
          {
            id: 12,
            front: "Can you add fallback content for media in HTML?",
            back: "Yes, you can include text or a link between the opening and closing tags of <audio> or <video>.",
          },
          {
            id: 13,
            front: "What is an image map in HTML?",
            back: "An image map allows clickable areas on an image using the <map> and <area> tags.",
          },
          {
            id: 14,
            front: "How do you define a clickable area in an image map?",
            back: "Using the <area> tag with attributes like shape, coords, and href.",
          },
          {
            id: 15,
            front: "What attribute links an image to a map?",
            back: "The 'usemap' attribute in the <img> tag links it to a defined <map>.",
          },
          {
            id: 16,
            front: "What are CSS styles used for?",
            back: "CSS styles control the look and feel of HTML elements, such as color, layout, and fonts.",
          },
          {
            id: 17,
            front: "What are the types of CSS?",
            back: "Inline CSS, Internal CSS (in <style>), and External CSS (linked .css file).",
          },
          {
            id: 18,
            front: "How do you apply a CSS class to an element?",
            back: "Using the class attribute, e.g., <div class='myClass'>, and defining it in CSS with .myClass.",
          },
          {
            id: 19,
            front: "What is JavaScript used for in web development?",
            back: "JavaScript adds interactivity and dynamic behavior to web pages.",
          },
          {
            id: 20,
            front: "How do you add JavaScript to an HTML document?",
            back: "Using the <script> tag, either inline or by linking to an external .js file.",
          },
          {
            id: 21,
            front: "What is the DOM in JavaScript?",
            back: "DOM (Document Object Model) represents the structure of a web page that JavaScript can manipulate.",
          },
        ],
      },
      {
        id: 5,
        title: "Unit - 5: Object Oriented Concepts and Programming",
        key: "object-oriented-concepts-and-programming",
        cards: [
          {
            id: 1,
            front: "What is Object-Oriented Programming (OOP)?",
            back: "OOP is a programming paradigm based on the concept of 'objects', which contain data and methods.",
          },
          {
            id: 2,
            front: "What are the main principles of OOP?",
            back: "Encapsulation, Inheritance, Polymorphism, and Abstraction.",
          },
          {
            id: 3,
            front: "What is encapsulation in OOP?",
            back: "Encapsulation is the bundling of data and methods that operate on the data within one unit (class).",
          },
          {
            id: 4,
            front: "What are functions in OOP?",
            back: "Functions, or methods, are blocks of code defined in a class to perform specific tasks.",
          },
          {
            id: 5,
            front: "How is function overloading used in OOP?",
            back: "Function overloading allows multiple functions with the same name but different parameters.",
          },
          {
            id: 6,
            front: "What is a constructor?",
            back: "A constructor is a special function automatically called when an object is created.",
          },
          {
            id: 7,
            front: "What is the use of a destructor?",
            back: "A destructor is used to release resources or clean up when an object is destroyed.",
          },
          {
            id: 8,
            front: "Can a constructor be overloaded?",
            back: "Yes, constructors can be overloaded by having different parameter lists.",
          },
          {
            id: 9,
            front: "What is operator overloading?",
            back: "Operator overloading allows operators to be redefined to work with user-defined types (classes).",
          },
          {
            id: 10,
            front: "Which operator cannot be overloaded?",
            back: "The scope resolution (::), sizeof, member selector (.), and conditional (?:) operators cannot be overloaded.",
          },
          {
            id: 11,
            front: "What is inheritance in OOP?",
            back: "Inheritance allows a class to acquire the properties and methods of another class.",
          },
          {
            id: 12,
            front: "What are the types of inheritance?",
            back: "Single, Multiple, Multilevel, Hierarchical, and Hybrid inheritance.",
          },
          {
            id: 13,
            front: "What is runtime polymorphism?",
            back: "Runtime polymorphism allows method overriding where the method is resolved at runtime using virtual functions.",
          },
          {
            id: 14,
            front: "What is the role of a virtual function in polymorphism?",
            back: "Virtual functions enable dynamic dispatch to the appropriate function implementation at runtime.",
          },
          {
            id: 15,
            front: "What is exception handling?",
            back: "Exception handling is the process of responding to exceptions (errors) during program execution.",
          },
          {
            id: 16,
            front: "Which blocks are used in exception handling?",
            back: "`try`, `catch`, and `finally` (or `throw` in C++) blocks are used.",
          },
          {
            id: 17,
            front: "What is a try block?",
            back: "A try block contains code that might throw an exception.",
          },
          {
            id: 18,
            front: "What are IO operations?",
            back: "IO (Input/Output) operations involve reading from and writing to files, console, or other input/output streams.",
          },
          {
            id: 19,
            front: "Which header file is used for file IO in C++?",
            back: "<fstream> is used for file handling operations in C++.",
          },
          {
            id: 20,
            front: "What is the difference between ifstream and ofstream?",
            back: "`ifstream` is used for reading from files, while `ofstream` is used for writing to files.",
          },
          {
            id: 21,
            front: "What is abstraction in OOP?",
            back: "Abstraction hides internal implementation and shows only essential features to the user.",
          },
        ],
      },
      {
        id: 6,
        title: "Unit - 6: Operating Systems",
        key: "operating-systems",
        cards: [
          {
            id: 1,
            front: "What is an Operating System (OS)?",
            back: "An Operating System is system software that manages hardware and software resources and provides services for computer programs.",
          },
          {
            id: 2,
            front: "What are the main functions of an Operating System?",
            back: "Process management, memory management, file system management, I/O system management, and security.",
          },
          {
            id: 3,
            front: "What is a kernel in an Operating System?",
            back: "The kernel is the core component of an OS that manages system resources and communication between hardware and software.",
          },
          {
            id: 4,
            front: "What is process management?",
            back: "Process management involves creating, scheduling, and terminating processes.",
          },
          {
            id: 5,
            front: "What is a process?",
            back: "A process is an instance of a program in execution, including its code, data, and system resources.",
          },
          {
            id: 6,
            front: "What is the difference between a process and a thread?",
            back: "A process has its own memory space, while threads share memory within a process.",
          },
          {
            id: 7,
            front: "What are the states of a process?",
            back: "New, Ready, Running, Waiting, and Terminated.",
          },
          {
            id: 8,
            front: "What is context switching?",
            back: "Context switching is the process of saving the state of a process and loading the state of another.",
          },
          {
            id: 9,
            front: "What is memory management in OS?",
            back: "Memory management is the function of an OS that handles or manages primary memory.",
          },
          {
            id: 10,
            front: "What is virtual memory?",
            back: "Virtual memory is a memory management technique that provides an 'idealized abstraction' of storage.",
          },
          {
            id: 11,
            front: "What is paging?",
            back: "Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory.",
          },
          {
            id: 12,
            front: "What is segmentation in memory management?",
            back: "Segmentation divides the memory into different segments based on the logical divisions of a program.",
          },
          {
            id: 13,
            front: "What is inter-process communication (IPC)?",
            back: "IPC allows processes to communicate and synchronize their actions without sharing the same address space.",
          },
          {
            id: 14,
            front: "What are the common IPC mechanisms?",
            back: "Pipes, Message Queues, Shared Memory, and Semaphores.",
          },
          {
            id: 15,
            front: "What is synchronization in OS?",
            back: "Synchronization is the coordination of processes to ensure correct execution in a concurrent environment.",
          },
          {
            id: 16,
            front: "What is a semaphore?",
            back: "A semaphore is a synchronization tool used to control access to a common resource in a concurrent system.",
          },
          {
            id: 17,
            front: "What is a file system in OS?",
            back: "A file system organizes and stores files on storage devices and manages their retrieval and updating.",
          },
          {
            id: 18,
            front: "What is I/O management in OS?",
            back: "I/O management handles the communication between hardware devices and the system.",
          },
          {
            id: 19,
            front: "What is disk scheduling?",
            back: "Disk scheduling is an OS algorithm to decide the order in which disk I/O requests are to be serviced.",
          },
          {
            id: 20,
            front: "What are common disk scheduling algorithms?",
            back: "FCFS, SSTF, SCAN, C-SCAN, LOOK, and C-LOOK.",
          },
          {
            id: 21,
            front: "What is thrashing in memory management?",
            back: "Thrashing occurs when too much time is spent swapping pages in and out of memory, reducing performance.",
          },
        ],
      },
      {
        id: 7,
        title: "Unit - 7: Java Programming",
        key: "java-programming",
        cards: [
          {
            id: 1,
            front: "What is inheritance in Java?",
            back: "Inheritance is a mechanism where one class acquires the properties and behaviors of another class.",
          },
          {
            id: 2,
            front: "What are the types of inheritance in Java?",
            back: "Single, Multilevel, and Hierarchical. Note: Java does not support multiple inheritance with classes.",
          },
          {
            id: 3,
            front: "What keyword is used for inheritance in Java?",
            back: "The `extends` keyword is used for inheritance.",
          },
          {
            id: 4,
            front: "What is subclassing?",
            back: "Subclassing is the process of creating a new class (subclass) from an existing class (superclass).",
          },
          {
            id: 5,
            front: "How do you access superclass methods in a subclass?",
            back: "Using the `super` keyword.",
          },
          {
            id: 6,
            front: "What is a package in Java?",
            back: "A package is a namespace that organizes classes and interfaces in a logical manner.",
          },
          {
            id: 7,
            front: "How do you import a package in Java?",
            back: "Using the `import` statement, e.g., `import java.util.*;`",
          },
          {
            id: 8,
            front: "What is an exception in Java?",
            back: "An exception is an event that disrupts the normal flow of a program.",
          },
          {
            id: 9,
            front:
              "What is the difference between checked and unchecked exceptions?",
            back: "Checked exceptions are checked at compile-time; unchecked exceptions occur at runtime.",
          },
          {
            id: 10,
            front: "What is the use of try-catch block?",
            back: "To handle exceptions and allow the program to continue running.",
          },
          {
            id: 11,
            front: "What is the Collection Framework in Java?",
            back: "A unified architecture for storing and manipulating collections of objects.",
          },
          {
            id: 12,
            front: "What is an ArrayList in Java?",
            back: "ArrayList is a resizable array implementation of the List interface.",
          },
          {
            id: 13,
            front: "What is a Vector in Java?",
            back: "Vector is a synchronized, dynamic array similar to ArrayList.",
          },
          {
            id: 14,
            front: "What is a Set in Java?",
            back: "A Set is a collection that does not allow duplicate elements.",
          },
          {
            id: 15,
            front: "What is a Map in Java?",
            back: "A Map is a collection of key-value pairs, where keys are unique.",
          },
          {
            id: 16,
            front: "What interface does ArrayList implement?",
            back: "ArrayList implements the List interface.",
          },
          {
            id: 17,
            front: "What is I/O in Java?",
            back: "I/O (Input/Output) refers to reading data from and writing data to various sources like files, console, etc.",
          },
          {
            id: 18,
            front: "Which package contains Java I/O classes?",
            back: "`java.io` package.",
          },
          {
            id: 19,
            front: "What is multithreading in Java?",
            back: "Multithreading is the concurrent execution of two or more threads for maximum utilization of CPU.",
          },
          {
            id: 20,
            front: "How do you create a thread in Java?",
            back: "By extending the `Thread` class or implementing the `Runnable` interface.",
          },
          {
            id: 21,
            front: "What is the use of the `synchronized` keyword in Java?",
            back: "To prevent thread interference and ensure thread safety in concurrent programs.",
          },
        ],
      },
      {
        id: 9,
        title: "Unit - 9: Software Engineering",
        key: "software-engineering",
        cards: [
          {
            id: 1,
            front: "What is a software process?",
            back: "A software process is a set of related activities that lead to the production of a software product.",
          },
          {
            id: 2,
            front: "What are the main phases of a software process?",
            back: "Requirements gathering, design, implementation, testing, deployment, and maintenance.",
          },
          {
            id: 3,
            front: "What are common software process models?",
            back: "Waterfall, Agile, Spiral, and Iterative models.",
          },
          {
            id: 4,
            front: "What is requirements engineering?",
            back: "Requirements engineering is the process of defining, documenting, and maintaining software requirements.",
          },
          {
            id: 5,
            front: "What are the types of software requirements?",
            back: "Functional requirements and non-functional requirements.",
          },
          {
            id: 6,
            front: "What is the purpose of a data dictionary?",
            back: "A data dictionary provides details about data elements, their meaning, relationships, and usage in a system.",
          },
          {
            id: 7,
            front: "What kind of information is stored in a data dictionary?",
            back: "Data types, sizes, allowed values, default values, and constraints.",
          },
          {
            id: 8,
            front: "What is a class diagram?",
            back: "A class diagram is a UML diagram that shows the static structure of a system, including classes and their relationships.",
          },
          {
            id: 9,
            front: "What are the main components of a class diagram?",
            back: "Classes, attributes, methods, and relationships such as associations, generalizations, and dependencies.",
          },
          {
            id: 10,
            front: "What is a use case diagram?",
            back: "A use case diagram shows the interactions between users (actors) and the system through use cases.",
          },
          {
            id: 11,
            front: "What is the purpose of a use case diagram?",
            back: "To capture the functional requirements of a system and show how users interact with it.",
          },
          {
            id: 12,
            front: "What is an activity diagram?",
            back: "An activity diagram represents workflows of stepwise activities and actions with support for choice, iteration, and concurrency.",
          },
          {
            id: 13,
            front: "How does an activity diagram help in software design?",
            back: "It visualizes the dynamic aspects of a system and models the flow of control.",
          },
          {
            id: 14,
            front: "What are the basic elements of an activity diagram?",
            back: "Initial node, activities, decision nodes, merge nodes, and final node.",
          },
          {
            id: 15,
            front: "What is a sequence diagram?",
            back: "A sequence diagram shows how objects interact in a particular sequence of time.",
          },
          {
            id: 16,
            front: "What does a sequence diagram include?",
            back: "Lifelines, messages, activations, and the sequence of message exchange.",
          },
          {
            id: 17,
            front: "How does a sequence diagram differ from a class diagram?",
            back: "A class diagram shows static structure, while a sequence diagram shows dynamic interactions over time.",
          },
          {
            id: 18,
            front: "Why is requirements engineering important?",
            back: "It ensures the final software product meets the user's needs and avoids costly revisions.",
          },
          {
            id: 19,
            front: "What are functional requirements?",
            back: "Functional requirements describe what the system should do, like specific behaviors or functions.",
          },
          {
            id: 20,
            front: "What are non-functional requirements?",
            back: "Non-functional requirements define how the system performs a function, like performance, security, or usability.",
          },
          {
            id: 21,
            front: "What is a software process model?",
            back: "A structured framework that describes the activities and tasks involved in software development.",
          },
        ],
      },
      {
        id: 10,
        title: "Unit - 10: Advanced Database Management Systems",
        key: "advanced-database-management-systems",
        cards: [
          {
            id: 1,
            front: "What is an Object-Relational Database?",
            back: "An Object-Relational Database integrates object-oriented features into relational databases to handle complex data types.",
          },
          {
            id: 2,
            front: "What are some features of Object-Relational Databases?",
            back: "Support for custom data types, inheritance, polymorphism, and complex objects.",
          },
          {
            id: 3,
            front:
              "How do Object-Relational Databases differ from Relational Databases?",
            back: "They extend relational models with object-oriented capabilities like methods and user-defined types.",
          },
          {
            id: 4,
            front: "What is an Extended Relational Database?",
            back: "An Extended Relational Database adds additional features such as support for multimedia, spatial data, or procedural code.",
          },
          {
            id: 5,
            front:
              "What kind of extensions are seen in Extended Relational Databases?",
            back: "Stored procedures, triggers, complex data types, and enhanced indexing techniques.",
          },
          {
            id: 6,
            front: "What is PL/SQL?",
            back: "PL/SQL is Oracle's procedural extension to SQL that allows writing full programs to interact with the database.",
          },
          {
            id: 7,
            front: "What are the basic components of a PL/SQL block?",
            back: "DECLARE, BEGIN, EXCEPTION, and END.",
          },
          {
            id: 8,
            front: "What is a cursor in PL/SQL?",
            back: "A cursor is a pointer that allows traversal over the records in a result set.",
          },
          {
            id: 9,
            front: "What are the types of cursors in PL/SQL?",
            back: "Implicit cursors and explicit cursors.",
          },
          {
            id: 10,
            front: "What is a trigger in databases?",
            back: "A trigger is a stored procedure that is automatically executed in response to certain events on a table or view.",
          },
          {
            id: 11,
            front: "What are common trigger events?",
            back: "INSERT, UPDATE, DELETE.",
          },
          {
            id: 12,
            front: "What is a stored procedure?",
            back: "A stored procedure is a set of SQL statements that perform a specific task and are stored in the database.",
          },
          {
            id: 13,
            front: "Why use stored procedures?",
            back: "For reusability, performance, security, and ease of maintenance.",
          },
          {
            id: 14,
            front: "What is database tuning?",
            back: "Database tuning involves optimizing the performance of database queries and operations.",
          },
          {
            id: 15,
            front: "What are common techniques used in database tuning?",
            back: "Query optimization, indexing, schema design improvements, and configuration adjustments.",
          },
          {
            id: 16,
            front: "What is indexing in databases?",
            back: "Indexing improves the speed of data retrieval operations by creating a data structure for quick search.",
          },
          {
            id: 17,
            front: "How does indexing help in database performance?",
            back: "It reduces the number of records the system needs to examine during a query.",
          },
          {
            id: 18,
            front: "What is database security?",
            back: "Database security involves protecting data from unauthorized access, corruption, or loss.",
          },
          {
            id: 19,
            front: "What are some common security measures in databases?",
            back: "User authentication, encryption, access control, and auditing.",
          },
          {
            id: 20,
            front: "What is backup and recovery in databases?",
            back: "Backup is the process of saving data; recovery is restoring data after a failure or data loss.",
          },
          {
            id: 21,
            front: "What are different types of backups?",
            back: "Full backup, incremental backup, and differential backup.",
          },
          {
            id: 22,
            front: "What is the GRANT command in SQL?",
            back: "GRANT is used to give users access privileges to the database objects.",
          },
          {
            id: 23,
            front: "What is the REVOKE command in SQL?",
            back: "REVOKE is used to remove access privileges given to users.",
          },
          {
            id: 24,
            front: "Why is privilege management important in databases?",
            back: "It helps maintain data integrity and security by controlling access levels.",
          },
        ],
      },
      {
        id: 11,
        title: "Unit - 11: Open Source Technology using PHP",
        key: "open-source-technology-using-php",
        cards: [
          {
            id: 1,
            front: "What is open source software?",
            back: "Open source software is software with source code that anyone can inspect, modify, and enhance.",
          },
          {
            id: 2,
            front: "Name some popular open source web technologies.",
            back: "PHP, MySQL, Apache, Linux, WordPress.",
          },
          {
            id: 3,
            front: "Why is open source preferred in web development?",
            back: "It's cost-effective, customizable, and has strong community support.",
          },
          {
            id: 4,
            front: "What is the basic structure of a PHP script?",
            back: "A PHP script starts with <?php and ends with ?>.",
          },
          {
            id: 5,
            front: "How do you print output in PHP?",
            back: "Using echo or print statements.",
          },
          {
            id: 6,
            front: "What are variables in PHP?",
            back: "Variables in PHP start with a $ sign followed by the variable name and are used to store data.",
          },
          {
            id: 7,
            front: "What is a session in PHP?",
            back: "A session stores user information across multiple pages to maintain state.",
          },
          {
            id: 8,
            front: "How do you start a session in PHP?",
            back: "By using the function session_start().",
          },
          {
            id: 9,
            front: "What are cookies in PHP?",
            back: "Cookies are small files stored on the client-side to store user preferences.",
          },
          {
            id: 10,
            front: "How do you set a cookie in PHP?",
            back: "Using the setcookie() function.",
          },
          {
            id: 11,
            front: "How do you connect to a MySQL database using PHP?",
            back: "Using mysqli_connect() or PDO.",
          },
          {
            id: 12,
            front: "How do you execute a query in PHP using MySQLi?",
            back: "Using mysqli_query().",
          },
          {
            id: 13,
            front:
              "How can you retrieve user data from a MySQL database in PHP?",
            back: "By executing a SELECT query and fetching results with mysqli_fetch_assoc() or similar functions.",
          },
          {
            id: 14,
            front: "What is error handling in PHP?",
            back: "Error handling is the process of responding to and managing run-time errors in your scripts.",
          },
          {
            id: 15,
            front: "How do you handle errors in PHP?",
            back: "Using try-catch blocks, custom error handlers, or functions like error_reporting() and set_error_handler().",
          },
          {
            id: 16,
            front: "What are superglobals in PHP?",
            back: "Superglobals are built-in variables like $_POST, $_GET, $_SESSION, $_COOKIE that are always accessible.",
          },
          {
            id: 17,
            front: "What is the difference between $_GET and $_POST?",
            back: "$_GET sends data via URL, visible to users; $_POST sends data in the body, more secure.",
          },
          {
            id: 18,
            front: "How do you prevent SQL injection in PHP?",
            back: "By using prepared statements and input validation.",
          },
        ],
      },
      {
        id: 12,
        title: "Unit - 12: Analysis and Design of Algorithm",
        key: "analysis-and-design-of-algorithm",
        cards: [
          {
            id: 1,
            front: "What is algorithm analysis?",
            back: "Algorithm analysis is the process of determining the computational complexity of algorithms, focusing on time and space usage.",
          },
          {
            id: 2,
            front: "What is time complexity?",
            back: "Time complexity refers to the amount of time an algorithm takes to complete as a function of the input size.",
          },
          {
            id: 3,
            front: "What is space complexity?",
            back: "Space complexity is the amount of memory an algorithm uses in terms of the input size.",
          },
          {
            id: 4,
            front: "What is the divide and conquer strategy?",
            back: "Divide and conquer breaks a problem into smaller subproblems, solves them recursively, and combines the results.",
          },
          {
            id: 5,
            front: "Give an example of a divide and conquer algorithm.",
            back: "Merge Sort and Quick Sort are common divide and conquer algorithms.",
          },
          {
            id: 6,
            front: "What is graph traversal?",
            back: "Graph traversal is the process of visiting all the nodes in a graph in a systematic way, like BFS or DFS.",
          },
          {
            id: 7,
            front: "What is the difference between BFS and DFS?",
            back: "BFS uses a queue to explore neighbors first; DFS uses a stack or recursion to go deep into the graph.",
          },
          {
            id: 8,
            front: "What is the branch and bound technique?",
            back: "Branch and bound is used to solve optimization problems by eliminating suboptimal solutions using bounds.",
          },
          {
            id: 9,
            front: "Where is branch and bound commonly used?",
            back: "It's used in problems like the Travelling Salesman Problem (TSP) and Knapsack Problem.",
          },
          {
            id: 10,
            front: "What is dynamic programming?",
            back: "Dynamic programming solves problems by breaking them into subproblems and storing the solutions to avoid recomputation.",
          },
          {
            id: 11,
            front: "Give an example of a dynamic programming problem.",
            back: "Fibonacci series, Longest Common Subsequence (LCS), and Knapsack problem.",
          },
          {
            id: 12,
            front: "What is backtracking?",
            back: "Backtracking is a technique to solve problems recursively by trying all possible solutions and discarding invalid ones.",
          },
          {
            id: 13,
            front: "Which problems are best solved using backtracking?",
            back: "N-Queens, Sudoku solver, and permutation generation.",
          },
          {
            id: 14,
            front: "What are asymptotic notations?",
            back: "Asymptotic notations describe the running time of algorithms in terms of input size using notations like Big O, Omega, and Theta.",
          },
          {
            id: 15,
            front: "What is Big O notation?",
            back: "Big O notation represents the worst-case time complexity of an algorithm.",
          },
          {
            id: 16,
            front: "What is the difference between Theta and Omega notation?",
            back: "Theta gives the average-case time complexity; Omega gives the best-case time complexity.",
          },
          {
            id: 17,
            front: "What is the time complexity of binary search?",
            back: "O(log n)",
          },
          {
            id: 18,
            front: "What is the space complexity of recursive algorithms?",
            back: "It includes the space used by variables and the function call stack, depending on recursion depth.",
          },
        ],
      },
    ],
  },
];
