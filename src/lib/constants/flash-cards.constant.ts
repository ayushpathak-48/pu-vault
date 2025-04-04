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
  {
    subject_name: "Big Data Analytics",
    key: "big-data-analytics",
    specialization: "bda",
    units: [
      {
        id: 1,
        title: "Unit- 1: Introduction",
        key: "introduction",
        cards: [],
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
