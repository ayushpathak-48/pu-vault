export const flashCards = [
  {
    subject_name: "Artificial Intelligence",
    key: "artificial-intelligence",
    specialization: "ai",
    units: [
      {
        id: 1,
        title: "Unit-1: Introduction",
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
            back: "Certainty factors range from -1 (complete disbelief) to +1 (complete belief).",
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
    subject_name: "Advance Java Programming",
    key: "advance-java-programming",
    units: [
      {
        id: 1,
        title: "Unit -1: Java Database Connectivity",
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
    ],
  },
];
