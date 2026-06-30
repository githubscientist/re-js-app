## Prompt Engineering

First, let's understand what is prompt.

prompt is a set of instructions or input given to a language model (like GPT-3 or GPT-4) to generate a desired output. 

prompt engineering is the process of designing and refining prompts to achieve specific results from a language model. It involves crafting prompts that are clear, concise, and structured in a way that guides the model to produce the desired output.

### Writing Effective Prompts

Why we need to write effective prompts?

- To get accurate and relevant responses from the language model.
- To reduce ambiguity and confusion in the model's output.
- To save time and resources by minimizing the need for multiple iterations of prompts.
- To improve the overall user experience when interacting with the model.

Example Prompt:

explain react.

This prompt is:

- too broad or vague, which may lead to a generic response.
- no levels mentioned, which may lead to a response that is too complex or too simple for the user's needs.
- no output format specified, which may lead to a response that is not structured or organized in a way that is useful for the user.
- no goal mentioned, which may lead to a response that does not address the user's specific needs or objectives.
- no context provided, which may lead to a response that is not relevant or applicable to the user's situation.
- no examples provided, which may lead to a response that is not clear or easy to understand.
- no constraints mentioned, which may lead to a response that is too long or too short for the user's needs.

A good prompt usually contains five parts:

1. Task: Clearly state what you want the model to do. For example, "Explain the concept of React in simple terms."
2. Context: Provide any relevant background information or context that will help the model understand the task. For example, "I am a beginner in web development and want to learn about React."
3. Role: Specify the role or perspective you want the model to take. For example, "You are a web development instructor."
4. Output Format: Indicate the desired format of the response. For example, "Please provide a step-by-step explanation with examples."
5. Constraints: Mention any limitations or requirements for the response. For example, "Keep the explanation under 200 words and avoid technical jargon."

Simple formula: 

Act as [role].
Your task is to [task].
Use the following context: [context].
Follow these constraints: [rules].
Give the output in this format: [format].

#### Rules and Examples

##### Rule 1: Be specific.

Poor Prompt: Create a login page.

Better Prompt: 

Create a responsive login page using React and CSS.

Requirements:

- Email input
- Password input
- Login button
- Basic validation
- Show error message if fields are empty
- Use functional components
- Do not use external UI libraries
- Keep the code beginner-friendly

##### Rule 2: Mention the Audience.

Poor Prompt: Explain useEffect.

Better Prompt: 

Explain useEffect in React for Students who already know useState but are new to lifecycle behaviour.

Use: 
- Simple Explanation
- One diagram-like explanation in text
- One beginner example
- One common mistake

##### Rule 3: Give the goal.

Poor prompt:

Teach Node.js.

Better prompt:

Prepare a 45-minute beginner-friendly lecture plan on Node.js for full-stack students.

Goal:
By the end of the lecture, students should understand:
1. What Node.js is
2. Why JavaScript can run outside the browser
3. How to create a simple server
4. How request and response work

##### Rule 4: Add Constraints.

Example:

Explain SQL joins.

Constraints:
- Use only 2 tables: students and courses
- Use simple sample data
- Explain INNER JOIN, LEFT JOIN, and RIGHT JOIN
- Do not explain advanced joins
- Keep it suitable for beginners

##### Rule 5: Ask for Examples.

Example:

Explain JavaScript map, filter, and reduce.

For each method:
1. Give meaning
2. Give syntax
3. Give one simple example
4. Give one practical use case
5. Mention one common mistake