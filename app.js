const lessons = [
  {
    id: "what-is-programming",
    title: "What Programming Is",
    subtitle: "Give step-by-step instructions",
    summary:
      "Programming means writing clear instructions that a computer can follow. Every language has its own style, but the basic ideas are shared across JavaScript, Groovy, Java, Python, and many others.",
    points: [
      "A program usually reads some input, does work, then produces output.",
      "Code runs in order unless you use decisions, loops, or functions to change the flow.",
      "Learning the core ideas first makes every language easier later."
    ],
    groovy: `// Groovy
def name = "Sam"
println "Hello, $name"

// Input: name
// Work: build a message
// Output: print the message`,
    javascript: `// JavaScript
const name = "Sam";
console.log("Hello, " + name);

// Input: name
// Work: build a message
// Output: print the message`,
    quiz: {
      question: "What is the best first thing to learn before choosing a language?",
      options: ["Programming basics", "Every Java keyword", "Advanced server setup"],
      answer: 0,
      feedback: "Right. Basics transfer from one language to the next."
    }
  },
  {
    id: "basic-values",
    title: "Basic Values",
    subtitle: "Text, numbers, and true or false",
    summary:
      "Most programs start with simple values. Text is stored as strings, counts and prices are numbers, and yes/no answers are booleans.",
    points: [
      "Strings are text values, usually wrapped in quotes.",
      "Numbers can be used for counting, totals, scores, and calculations.",
      "Booleans are true or false values that help programs make decisions."
    ],
    groovy: `def learner = "Sasi"
def lessonsDone = 1
def ready = lessonsDone > 0

println learner
println lessonsDone
println ready`,
    javascript: `const learner = "Sasi";
const lessonsDone = 1;
const ready = lessonsDone > 0;

console.log(learner);
console.log(lessonsDone);
console.log(ready);`,
    quiz: {
      question: "Which value is a boolean?",
      options: ["true", "\"hello\"", "42"],
      answer: 0,
      feedback: "Correct. true and false are boolean values."
    }
  },
  {
    id: "basic-decisions",
    title: "Decisions",
    subtitle: "Let code choose a path",
    summary:
      "Programs become useful when they can choose what to do. An if statement checks a condition and runs code only when that condition is true.",
    points: [
      "Use if when something should happen only in a certain situation.",
      "Use else for the fallback path.",
      "Conditions often compare values with operators like >, <, ==, and >=."
    ],
    groovy: `def score = 75

if (score >= 50) {
  println "Pass"
} else {
  println "Try again"
}`,
    javascript: `const score = 75;

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Try again");
}`,
    quiz: {
      question: "What does an if statement do?",
      options: ["Runs code only when a condition is true", "Creates a text value", "Installs a language"],
      answer: 0,
      feedback: "Yes. if is the basic tool for decisions."
    }
  },
  {
    id: "basic-loops",
    title: "Loops",
    subtitle: "Repeat useful work",
    summary:
      "Loops repeat the same action for multiple values. They are perfect for processing lists like names, files, prices, or tasks.",
    points: [
      "Use a loop when you catch yourself writing the same code again and again.",
      "Each loop pass is often called an iteration.",
      "Loops usually work together with lists or arrays."
    ],
    groovy: `def tasks = ["read", "practice", "review"]

tasks.each { task ->
  println task
}`,
    javascript: `const tasks = ["read", "practice", "review"];

tasks.forEach((task) => {
  console.log(task);
});`,
    quiz: {
      question: "When should you think about using a loop?",
      options: ["When repeating the same action", "When naming one value", "When changing the page title"],
      answer: 0,
      feedback: "Exactly. Loops save you from repeated code."
    }
  },
  {
    id: "basic-functions",
    title: "Functions",
    subtitle: "Name a reusable task",
    summary:
      "A function is a named block of code. It can receive input, do a job, and return a result. Functions keep programs organized.",
    points: [
      "Inputs to a function are called parameters or arguments.",
      "A return value is the answer a function gives back.",
      "Good functions have clear names like calculateTotal or greetUser."
    ],
    groovy: `def greet(name) {
  return "Hello, $name"
}

println greet("Sasi")`,
    javascript: `function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Sasi"));`,
    quiz: {
      question: "What is a function mainly for?",
      options: ["Reusing a task", "Making a file bigger", "Changing the computer clock"],
      answer: 0,
      feedback: "Right. Functions let you reuse a task with different inputs."
    }
  },
  {
    id: "basic-data",
    title: "Data Structures",
    subtitle: "Keep related values together",
    summary:
      "Real programs usually work with groups of data. Lists hold multiple values in order. Maps or objects store values with names.",
    points: [
      "Use a list or array for ordered items like scores or tasks.",
      "Use a map or object for named details like a user profile.",
      "Data structures help your code stay readable as information grows."
    ],
    groovy: `def scores = [80, 90, 100]
def user = [name: "Sasi", level: "beginner"]

println scores[0]
println user.name`,
    javascript: `const scores = [80, 90, 100];
const user = { name: "Sasi", level: "beginner" };

console.log(scores[0]);
console.log(user.name);`,
    quiz: {
      question: "Which structure is best for ordered items like scores?",
      options: ["List or array", "Boolean", "Single string"],
      answer: 0,
      feedback: "Correct. Lists and arrays are made for ordered groups."
    }
  },
  {
    id: "start",
    title: "Start With Real Scripts",
    subtitle: "Scripts are small programs",
    summary:
      "Once the basics make sense, Groovy and JavaScript scripts are a practical next step. Both let you write short files that run top to bottom.",
    points: [
      "A script can declare values, print output, make decisions, loop over data, and call functions.",
      "Groovy often appears in Jenkins pipelines, Gradle builds, and JVM automation.",
      "JavaScript runs in browsers, Node.js, build tools, and many app frameworks."
    ],
    groovy: `def name = "Sam"
println "Hello, $name"

def tasks = ["read", "practice", "review"]
tasks.each { task ->
  println "Today I will $task"
}`,
    javascript: `const name = "Sam";
console.log(\`Hello, \${name}\`);

const tasks = ["read", "practice", "review"];
tasks.forEach((task) => {
  console.log(\`Today I will \${task}\`);
});`,
    quiz: {
      question: "Where is Groovy commonly used?",
      options: ["Jenkins and Gradle automation", "Only inside web browsers", "Only for CSS styling"],
      answer: 0,
      feedback: "Right. Groovy is especially common around JVM tooling like Jenkins and Gradle."
    }
  },
  {
    id: "values",
    title: "Values and Variables",
    subtitle: "Store data with clear names",
    summary:
      "Variables hold information you can reuse. Groovy commonly uses def for flexible values, while modern JavaScript commonly uses const and let.",
    points: [
      "Use const in JavaScript when a binding should not be reassigned.",
      "Use let in JavaScript when a value changes over time.",
      "Groovy def lets the runtime infer the type, but you can also write explicit types like String or Integer."
    ],
    groovy: `def course = "Groovy"
int lessonsDone = 2
def isReady = lessonsDone >= 2

println "$course ready: $isReady"`,
    javascript: `const course = "JavaScript";
let lessonsDone = 2;
const isReady = lessonsDone >= 2;

console.log(\`\${course} ready: \${isReady}\`);`,
    quiz: {
      question: "Which JavaScript keyword should you prefer for a value that will not be reassigned?",
      options: ["const", "var", "def"],
      answer: 0,
      feedback: "Exactly. const communicates that the binding stays fixed."
    }
  },
  {
    id: "conditions",
    title: "Decisions",
    subtitle: "Branch with if statements",
    summary:
      "Conditionals choose which block of code runs. The syntax is similar in both languages, which makes this a comfortable place to compare them.",
    points: [
      "Use comparison operators like ==, !=, >, >=, <, and <=.",
      "Groovy has truthy and falsy behavior for empty strings, lists, maps, and null values.",
      "JavaScript also has truthy and falsy values, but strict equality with === avoids many surprises."
    ],
    groovy: `def score = 84

if (score >= 90) {
  println "Excellent"
} else if (score >= 70) {
  println "Solid pass"
} else {
  println "Keep practicing"
}`,
    javascript: `const score = 84;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Solid pass");
} else {
  console.log("Keep practicing");
}`,
    quiz: {
      question: "Why is === usually preferred in JavaScript?",
      options: ["It avoids automatic type conversion", "It creates a loop", "It prints a message"],
      answer: 0,
      feedback: "Yes. Strict equality checks value and type."
    }
  },
  {
    id: "collections",
    title: "Lists, Maps, and Objects",
    subtitle: "Group related data",
    summary:
      "Most useful scripts work with collections. Groovy has lists and maps. JavaScript has arrays and objects, plus Map for key-value data.",
    points: [
      "Groovy list syntax looks like [1, 2, 3]. JavaScript array syntax is also [1, 2, 3].",
      "Groovy map keys can be written compactly, like [name: 'Ava'].",
      "JavaScript object properties use a similar shape, like { name: 'Ava' }."
    ],
    groovy: `def user = [name: "Ava", role: "admin"]
def scores = [10, 20, 30]

println user.name
println scores.sum()`,
    javascript: `const user = { name: "Ava", role: "admin" };
const scores = [10, 20, 30];

console.log(user.name);
console.log(scores.reduce((total, score) => total + score, 0));`,
    quiz: {
      question: "Which JavaScript method can turn an array into one calculated value?",
      options: ["reduce", "println", "def"],
      answer: 0,
      feedback: "Correct. reduce is commonly used for totals and grouped calculations."
    }
  },
  {
    id: "functions",
    title: "Functions and Closures",
    subtitle: "Reuse behavior",
    summary:
      "Functions package a task so you can call it again. Groovy closures and JavaScript arrow functions are both common in compact scripts.",
    points: [
      "A function should do one clear thing and return a useful result.",
      "Groovy closures use braces and an arrow, such as { item -> item * 2 }.",
      "JavaScript arrow functions use parentheses and an arrow, such as (item) => item * 2."
    ],
    groovy: `def doubleIt = { number ->
  number * 2
}

println doubleIt(6)`,
    javascript: `const doubleIt = (number) => {
  return number * 2;
};

console.log(doubleIt(6));`,
    quiz: {
      question: "What is the main reason to write a function?",
      options: ["To reuse a named task", "To change the editor color", "To install Groovy"],
      answer: 0,
      feedback: "Nice. Functions make behavior reusable and easier to test."
    }
  }
];

const lessonGuides = {
  "what-is-programming": {
    detail:
      "This is the mental model for everything else. Do not start by memorizing syntax. Start by asking: what information goes in, what should happen to it, and what result should come out?",
    prompt:
      "Write three plain English steps for making tea, then turn each step into a console.log line. This trains you to think like a programmer before worrying about syntax."
  },
  "basic-values": {
    detail:
      "Values are the nouns of programming. When you can name values clearly, your code becomes easier to read, test, and debug. Most beginner bugs happen because a value is missing, misspelled, or not the type you expected.",
    prompt:
      "Create a learner name, age, course name, and a true or false value called isPracticing. Print each one."
  },
  "basic-decisions": {
    detail:
      "Decisions are where code starts acting intelligently. A condition should read like a small question: is the score high enough, is the user logged in, is the list empty?",
    prompt:
      "Create a variable called temperature. Print Hot when it is over 30, Comfortable when it is 18 to 30, and Cold otherwise."
  },
  "basic-loops": {
    detail:
      "Loops are for repeated work. The important habit is to identify one item at a time. If you can describe what should happen to one item, a loop can usually do it for all items.",
    prompt:
      "Create a list of three daily tasks. Print each task with the text Task: before it."
  },
  "basic-functions": {
    detail:
      "Functions help you stop rewriting the same idea. A good function has a clear name, clear inputs, and one job. If a function is confusing, its name or responsibility is usually too broad.",
    prompt:
      "Write a function called addTax that receives a price and returns price plus 10 percent."
  },
  "basic-data": {
    detail:
      "Data structures are containers. Arrays/lists are good for many similar items. Objects/maps are good for one thing with named details. Choosing the right shape makes later code much simpler.",
    prompt:
      "Create a user object with name, role, and active. Then print a sentence using all three fields."
  },
  start: {
    detail:
      "A script is a practical program that usually solves one small job. The same basics still apply: define values, decide what should happen, loop when needed, and print or save the result.",
    prompt:
      "Write a script that stores your name and three learning goals, then prints a short study plan."
  },
  values: {
    detail:
      "Variables are labels for values. In JavaScript, prefer const first and use let only when reassignment is needed. In Groovy, def is convenient, but explicit types can make larger scripts clearer.",
    prompt:
      "Change the course, lessonsDone, and isReady values. Run the JavaScript and explain why the output changed."
  },
  conditions: {
    detail:
      "Debugging conditions means checking both the value and the comparison. If the wrong branch runs, print the value before the if statement and read the condition out loud.",
    prompt:
      "Add one more branch for a score below 40 that prints Needs revision."
  },
  collections: {
    detail:
      "Collections let one piece of code handle many values. The biggest beginner mistake is trying to access a field or index that does not exist yet.",
    prompt:
      "Add another score and another user field. Print the new values and calculate a new total."
  },
  functions: {
    detail:
      "Functions are also a debugging tool. When code is inside a function, you can test it with small inputs and compare the returned result with what you expected.",
    prompt:
      "Create a function called tripleIt. Test it with 3, 7, and 10."
  }
};

const samples = [
  {
    label: "Basics: values",
    language: "javascript",
    code: `const learner = "Sasi";
const lessonsDone = 1;
const ready = lessonsDone > 0;

console.log("Learner:", learner);
console.log("Lessons done:", lessonsDone);
console.log("Ready:", ready);`
  },
  {
    label: "Basics: decisions",
    language: "javascript",
    code: `const score = 75;

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Try again");
}`
  },
  {
    label: "Basics: loops",
    language: "javascript",
    code: `const tasks = ["read", "practice", "review"];

tasks.forEach((task) => {
  console.log(task);
});`
  },
  {
    label: "Basics: functions",
    language: "javascript",
    code: `function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Sasi"));`
  },
  {
    label: "Find fault: missing quote",
    language: "javascript",
    code: `const name = "Sasi;
console.log("Hello " + name);`
  },
  {
    label: "Find fault: wrong variable",
    language: "javascript",
    code: `const lessonCount = 3;
console.log(lessonsCount);`
  },
  {
    label: "Find fault: missing bracket",
    language: "javascript",
    code: `const tasks = ["read", "practice", "review";

tasks.forEach((task) => {
  console.log(task);
});`
  },
  {
    label: "JavaScript: greet",
    language: "javascript",
    code: `const names = ["Mira", "Dev", "Lee"];

names.forEach((name) => {
  console.log("Hello " + name);
});`
  },
  {
    label: "JavaScript: total",
    language: "javascript",
    code: `const prices = [12, 8, 25];
const total = prices.reduce((sum, price) => sum + price, 0);

console.log("Total:", total);`
  },
  {
    label: "Groovy: greet",
    language: "groovy",
    code: `def names = ["Mira", "Dev", "Lee"]

names.each { name ->
  println "Hello $name"
}`
  },
  {
    label: "Groovy: total",
    language: "groovy",
    code: `def prices = [12, 8, 25]
def total = prices.sum()

println "Total: $total"`
  }
];

const state = {
  currentLesson: lessons[0].id,
  completed: new Set(JSON.parse(localStorage.getItem("completedLessons") || "[]"))
};

const lessonNav = document.querySelector("#lessonNav");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonSubtitle = document.querySelector("#lessonSubtitle");
const lessonSummary = document.querySelector("#lessonSummary");
const lessonDetail = document.querySelector("#lessonDetail");
const practicePrompt = document.querySelector("#practicePrompt");
const keyPoints = document.querySelector("#keyPoints");
const groovyCode = document.querySelector("#groovyCode");
const javascriptCode = document.querySelector("#javascriptCode");
const completeLesson = document.querySelector("#completeLesson");
const progressLabel = document.querySelector("#progressLabel");
const progressBar = document.querySelector("#progressBar");
const resetProgress = document.querySelector("#resetProgress");
const samplePicker = document.querySelector("#samplePicker");
const practiceEditor = document.querySelector("#practiceEditor");
const outputBox = document.querySelector("#outputBox");
const runJavaScript = document.querySelector("#runJavaScript");
const debugCode = document.querySelector("#debugCode");
const findFaults = document.querySelector("#findFaults");
const explainCode = document.querySelector("#explainCode");
const loadGroovy = document.querySelector("#loadGroovy");
const quizQuestion = document.querySelector("#quizQuestion");
const quizOptions = document.querySelector("#quizOptions");
const quizFeedback = document.querySelector("#quizFeedback");

function currentLesson() {
  return lessons.find((lesson) => lesson.id === state.currentLesson) || lessons[0];
}

function saveProgress() {
  localStorage.setItem("completedLessons", JSON.stringify([...state.completed]));
}

function renderNav() {
  lessonNav.innerHTML = "";

  lessons.forEach((lesson, index) => {
    const button = document.createElement("button");
    button.className = "nav-button";
    button.type = "button";
    button.dataset.lessonId = lesson.id;
    button.innerHTML = `<span>${index + 1}. ${lesson.title}</span><span class="check">OK</span>`;

    if (lesson.id === state.currentLesson) {
      button.classList.add("active");
    }

    if (state.completed.has(lesson.id)) {
      button.classList.add("done");
    }

    button.addEventListener("click", () => {
      state.currentLesson = lesson.id;
      render();
    });

    lessonNav.appendChild(button);
  });
}

function renderLesson() {
  const lesson = currentLesson();
  lessonTitle.textContent = lesson.title;
  lessonSubtitle.textContent = lesson.subtitle;
  lessonSummary.textContent = lesson.summary;
  lessonDetail.textContent = lessonGuides[lesson.id]?.detail || "Read the example slowly, run it, change one value, then run it again. That small loop is how programming starts to become familiar.";
  practicePrompt.textContent = lessonGuides[lesson.id]?.prompt || "Change one line in each example and predict the output before you run it.";
  groovyCode.textContent = lesson.groovy;
  javascriptCode.textContent = lesson.javascript;

  keyPoints.innerHTML = "";
  lesson.points.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    keyPoints.appendChild(item);
  });

  completeLesson.textContent = state.completed.has(lesson.id)
    ? "Lesson complete"
    : "Mark lesson complete";
}

function renderProgress() {
  const percent = Math.round((state.completed.size / lessons.length) * 100);
  progressLabel.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
}

function renderSamples() {
  samplePicker.innerHTML = "";

  samples.forEach((sample, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = sample.label;
    samplePicker.appendChild(option);
  });

  if (!practiceEditor.value.trim()) {
    practiceEditor.value = samples[0].code;
  }
}

function renderQuiz() {
  const lesson = currentLesson();
  quizQuestion.textContent = lesson.quiz.question;
  quizFeedback.textContent = "";
  quizOptions.innerHTML = "";

  lesson.quiz.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.textContent = option;

    button.addEventListener("click", () => {
      [...quizOptions.children].forEach((child) => {
        child.disabled = true;
      });

      if (index === lesson.quiz.answer) {
        button.classList.add("correct");
        quizFeedback.textContent = lesson.quiz.feedback;
        state.completed.add(lesson.id);
        saveProgress();
        renderNav();
        renderProgress();
        renderLesson();
      } else {
        button.classList.add("incorrect");
        quizFeedback.textContent = "Close. Try the lesson example again, then reopen this lesson to retry.";
      }
    });

    quizOptions.appendChild(button);
  });
}

function render() {
  renderNav();
  renderLesson();
  renderProgress();
  renderQuiz();
}

function loadSelectedSample() {
  const sample = samples[Number(samplePicker.value)];
  practiceEditor.value = sample.code;
  outputBox.textContent = sample.language === "groovy"
    ? "Groovy sample loaded. Run it with your local Groovy command-line tool."
    : "JavaScript sample loaded. Press Run JavaScript.";
}

function runCurrentJavaScript() {
  const source = practiceEditor.value;
  const logs = [];
  const fakeConsole = {
    log: (...items) => logs.push(items.map(String).join(" "))
  };

  try {
    const execute = new Function("console", `"use strict";\n${source}`);
    execute(fakeConsole);
    outputBox.textContent = logs.length ? logs.join("\n") : "Finished with no console output.";
  } catch (error) {
    outputBox.textContent = `${error.name}: ${error.message}`;
  }
}

function countMatches(source, pattern) {
  return (source.match(pattern) || []).length;
}

function distanceBetweenWords(first, second) {
  const rows = Array.from({ length: first.length + 1 }, () => []);

  for (let row = 0; row <= first.length; row += 1) {
    rows[row][0] = row;
  }

  for (let column = 0; column <= second.length; column += 1) {
    rows[0][column] = column;
  }

  for (let row = 1; row <= first.length; row += 1) {
    for (let column = 1; column <= second.length; column += 1) {
      const cost = first[row - 1] === second[column - 1] ? 0 : 1;
      rows[row][column] = Math.min(
        rows[row - 1][column] + 1,
        rows[row][column - 1] + 1,
        rows[row - 1][column - 1] + cost
      );
    }
  }

  return rows[first.length][second.length];
}

function findCommonFaults(source) {
  const faults = [];
  const lines = source.split("\n");
  const openCurly = countMatches(source, /\{/g);
  const closeCurly = countMatches(source, /\}/g);
  const openRound = countMatches(source, /\(/g);
  const closeRound = countMatches(source, /\)/g);
  const openSquare = countMatches(source, /\[/g);
  const closeSquare = countMatches(source, /\]/g);
  const doubleQuotes = countMatches(source.replace(/\\"/g, ""), /"/g);
  const singleQuotes = countMatches(source.replace(/\\'/g, ""), /'/g);
  const declared = [...source.matchAll(/\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)/g)].map((match) => match[1]);
  const safeSource = source
    .replace(/(["'`])(?:\\.|(?!\1).)*\1/g, "")
    .replace(/\/\/.*$/gm, "");
  const reserved = new Set([
    "const", "let", "var", "if", "else", "for", "while", "function", "return",
    "true", "false", "console", "log", "forEach", "reduce"
  ]);
  const used = [...safeSource.matchAll(/\b[A-Za-z_$][\w$]*\b/g)]
    .map((match) => match[0])
    .filter((word) => !reserved.has(word));

  if (openCurly !== closeCurly) {
    faults.push(`Curly braces do not match. Found ${openCurly} opening and ${closeCurly} closing.`);
  }

  if (openRound !== closeRound) {
    faults.push(`Parentheses do not match. Found ${openRound} opening and ${closeRound} closing.`);
  }

  if (openSquare !== closeSquare) {
    faults.push(`Square brackets do not match. Found ${openSquare} opening and ${closeSquare} closing.`);
  }

  if (doubleQuotes % 2 !== 0 || singleQuotes % 2 !== 0) {
    faults.push("A string quote looks unfinished. Check that every opening quote has a closing quote.");
  }

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (/^(const|let|var)\s+[A-Za-z_$][\w$]*\s*=/.test(trimmed) && !/[;{]$/.test(trimmed)) {
      faults.push(`Line ${index + 1}: this variable statement may need a semicolon.`);
    }

    if (/console\.log\([^)]*$/.test(trimmed)) {
      faults.push(`Line ${index + 1}: console.log may be missing a closing parenthesis.`);
    }
  });

  declared.forEach((name) => {
    const similarUse = new RegExp(`\\b${name}s\\b|\\b${name.slice(0, -1)}\\b`);
    if (name.length > 3 && similarUse.test(source) && !source.includes(`const ${name}s`) && !source.includes(`let ${name}s`)) {
      faults.push(`Possible typo near ${name}. Variable names must match exactly, including plural letters.`);
    }
  });

  used.forEach((word) => {
    if (declared.includes(word)) {
      return;
    }

    const closeName = declared.find((name) => (
      name.length > 3 &&
      word.length > 3 &&
      distanceBetweenWords(word.toLowerCase(), name.toLowerCase()) <= 2
    ));

    if (closeName) {
      faults.push(`Possible misspelled variable: ${word}. Did you mean ${closeName}?`);
    }
  });

  try {
    new Function(`"use strict";\n${source}`);
  } catch (error) {
    faults.push(`JavaScript parser says: ${error.name}: ${error.message}`);
  }

  return [...new Set(faults)];
}

function explainCurrentCode() {
  const source = practiceEditor.value.trim();
  const notes = [];

  if (!source) {
    outputBox.textContent = "The editor is empty. Load a sample or type a few lines first.";
    return;
  }

  if (/\b(const|let|var)\b/.test(source)) {
    notes.push("Variables: the code creates named values so later lines can reuse them.");
  }

  if (/\bif\s*\(/.test(source)) {
    notes.push("Decision: the if statement checks a condition and chooses which block should run.");
  }

  if (/\bforEach\s*\(|\bfor\s*\(|\bwhile\s*\(/.test(source)) {
    notes.push("Loop: the code repeats work for multiple values.");
  }

  if (/\bfunction\b|=>/.test(source)) {
    notes.push("Function: the code defines reusable behavior that can receive input and produce a result.");
  }

  if (/console\.log/.test(source)) {
    notes.push("Output: console.log prints information so you can see what the program is doing.");
  }

  outputBox.textContent = notes.length
    ? `Code explanation:\n- ${notes.join("\n- ")}\n\nStudy move: change one value, predict the new output, then run it.`
    : "I do not see common beginner structures yet. Try adding a variable, console.log, if statement, loop, or function.";
}

function debugCurrentCode() {
  const source = practiceEditor.value;
  const faults = findCommonFaults(source);
  const debugSteps = [
    "Debug checklist:",
    "1. Read the first error message, not the last one.",
    "2. Check the line above the error too.",
    "3. Confirm quotes, brackets, and parentheses are paired.",
    "4. Print important values with console.log.",
    "5. Change one thing at a time, then run again."
  ];

  outputBox.textContent = faults.length
    ? `${debugSteps.join("\n")}\n\nLikely faults:\n- ${faults.join("\n- ")}`
    : `${debugSteps.join("\n")}\n\nNo obvious syntax faults found. Try running it and compare the output with what you expected.`;
}

function findFaultsInCurrentCode() {
  const faults = findCommonFaults(practiceEditor.value);
  outputBox.textContent = faults.length
    ? `Fault finder result:\n- ${faults.join("\n- ")}\n\nFix the first fault, then press Find Faults again.`
    : "Fault finder result: no obvious beginner faults found.";
}

document.querySelectorAll(".toggle-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".toggle-button").forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    document.body.classList.remove("focus-groovy", "focus-javascript");

    if (button.dataset.focus !== "both") {
      document.body.classList.add(`focus-${button.dataset.focus}`);
    }
  });
});

completeLesson.addEventListener("click", () => {
  state.completed.add(currentLesson().id);
  saveProgress();
  render();
});

resetProgress.addEventListener("click", () => {
  state.completed.clear();
  saveProgress();
  render();
});

samplePicker.addEventListener("change", loadSelectedSample);
runJavaScript.addEventListener("click", runCurrentJavaScript);
debugCode.addEventListener("click", debugCurrentCode);
findFaults.addEventListener("click", findFaultsInCurrentCode);
explainCode.addEventListener("click", explainCurrentCode);
loadGroovy.addEventListener("click", () => {
  const groovySampleIndex = samples.findIndex((sample) => sample.language === "groovy");
  samplePicker.value = String(groovySampleIndex);
  loadSelectedSample();
});

renderSamples();
render();
