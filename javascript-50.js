const javascript50Questions = [
  {
    category: "JavaScript",
    question: "What is the reduce() method in JavaScript?",
    answer: "reduce() processes array elements and returns a single accumulated result.",
    hindi: "reduce() Array के सभी Elements को Process करके एक Final Result देता है।",
    example: "const total = [1, 2, 3].reduce((sum, n) => sum + n, 0); // 6"
  },
  {
    category: "JavaScript",
    question: "What is the sort() method in JavaScript?",
    answer: "sort() sorts the elements of an array and modifies the original array.",
    hindi: "sort() Array के Elements को क्रम में लगाता है और Original Array को बदल देता है।",
    example: "const nums = [10, 2, 5]; nums.sort((a, b) => a - b);"
  },
  {
    category: "JavaScript",
    question: "What is setTimeout() in JavaScript?",
    answer: "setTimeout() executes a function once after a specified delay.",
    hindi: "setTimeout() किसी Function को तय समय के बाद एक बार चलाता है।",
    example: "setTimeout(() => console.log('Hello'), 2000);"
  },
  {
    category: "JavaScript",
    question: "What is setInterval() in JavaScript?",
    answer: "setInterval() repeatedly executes a function after a specified time interval.",
    hindi: "setInterval() किसी Function को तय समय के अंतराल पर बार-बार चलाता है।",
    example: "const timer = setInterval(() => console.log('Hi'), 1000);"
  },
  {
    category: "JavaScript",
    question: "What is a Callback Function?",
    answer: "A callback is a function passed to another function to be executed later.",
    hindi: "Callback ऐसा Function है जिसे दूसरे Function में Argument के रूप में भेजा जाता है।",
    example: "function greet(fn) { fn(); } greet(() => console.log('Hello'));"
  },
  {
    category: "JavaScript",
    question: "What is a Promise in JavaScript?",
    answer: "A Promise represents the eventual success or failure of an asynchronous operation.",
    hindi: "Promise किसी Asynchronous काम के भविष्य में पूरा होने या Fail होने को दर्शाता है।",
    example: "const promise = Promise.resolve('Success');"
  },
  {
    category: "JavaScript",
    question: "What are the states of a Promise?",
    answer: "A Promise can be pending, fulfilled, or rejected.",
    hindi: "Promise की तीन States होती हैं: Pending, Fulfilled और Rejected।",
    example: "Promise.resolve(10); // Fulfilled promise"
  },
  {
    category: "JavaScript",
    question: "What is async in JavaScript?",
    answer: "The async keyword declares an asynchronous function that always returns a Promise.",
    hindi: "async Keyword से बना Function हमेशा Promise Return करता है।",
    example: "async function getData() { return 10; }"
  },
  {
    category: "JavaScript",
    question: "What is await in JavaScript?",
    answer: "await pauses the execution of an async function until a Promise settles.",
    hindi: "await किसी Promise का Result आने तक Async Function के आगे के Execution को रोकता है।",
    example: "async function run() { const result = await Promise.resolve(5); }"
  },
  {
    category: "JavaScript",
    question: "What is the difference between synchronous and asynchronous JavaScript?",
    answer: "Synchronous code executes in sequence, while asynchronous operations can complete later without blocking all other work.",
    hindi: "Synchronous Code क्रम से चलता है, जबकि Asynchronous काम का Result बाद में आ सकता है।",
    example: "console.log('First'); setTimeout(() => console.log('Later'), 1000);"
  },
  {
    category: "JavaScript",
    question: "What is try...catch in JavaScript?",
    answer: "try...catch handles errors that occur while executing code.",
    hindi: "try...catch का उपयोग Code चलाते समय आने वाली Errors को Handle करने के लिए होता है।",
    example: "try { JSON.parse('{'); } catch (error) { console.log(error.message); }"
  },
  {
    category: "JavaScript",
    question: "What is the finally block?",
    answer: "The finally block executes after try and catch, whether an error occurs or not.",
    hindi: "finally Block Error आए या न आए, दोनों स्थितियों में चलता है।",
    example: "try { console.log('Try'); } finally { console.log('Done'); }"
  },
  {
    category: "JavaScript",
    question: "What is the throw keyword?",
    answer: "throw is used to create and raise an exception manually.",
    hindi: "throw Keyword से हम अपनी तरफ से Error Generate कर सकते हैं।",
    example: "throw new Error('Invalid input');"
  },
  {
    category: "JavaScript",
    question: "What is JSON in JavaScript?",
    answer: "JSON is a text format commonly used to exchange structured data.",
    hindi: "JSON एक Text Format है जिसका उपयोग Structured Data भेजने और प्राप्त करने में होता है।",
    example: "{\"name\":\"Aman\",\"role\":\"QA\"}"
  },
  {
    category: "JavaScript",
    question: "What is JSON.stringify()?",
    answer: "JSON.stringify() converts a JavaScript value into a JSON string.",
    hindi: "JSON.stringify() JavaScript Value को JSON String में बदलता है।",
    example: "JSON.stringify({ name: 'Aman' });"
  },
  {
    category: "JavaScript",
    question: "What is JSON.parse()?",
    answer: "JSON.parse() converts valid JSON text into a JavaScript value.",
    hindi: "JSON.parse() JSON Text को JavaScript Value या Object में बदलता है।",
    example: "JSON.parse('{\"age\":20}');"
  },
  {
    category: "JavaScript",
    question: "What is NaN in JavaScript?",
    answer: "NaN means Not-a-Number and represents an invalid numeric result.",
    hindi: "NaN का मतलब Not-a-Number है। यह Invalid Numeric Result को दर्शाता है।",
    example: "Number('hello'); // NaN"
  },
  {
    category: "JavaScript",
    question: "What is the difference between null and undefined?",
    answer: "undefined usually indicates a missing assigned value, while null is an intentional empty value.",
    hindi: "undefined आमतौर पर Value Assign न होने को बताता है, जबकि null जानबूझकर Empty Value रखने के लिए होता है।",
    example: "let a; let b = null;"
  },
  {
    category: "JavaScript",
    question: "What is type coercion in JavaScript?",
    answer: "Type coercion is the automatic conversion of a value from one data type to another.",
    hindi: "Type Coercion में JavaScript जरूरत पड़ने पर Value का Data Type अपने आप बदल देती है।",
    example: "'5' + 2; // '52'"
  },
  {
    category: "JavaScript",
    question: "What is the Number() function?",
    answer: "Number() attempts to convert a value into a number.",
    hindi: "Number() किसी Value को Number में बदलने की कोशिश करता है।",
    example: "Number('25'); // 25"
  },
  {
    category: "JavaScript",
    question: "What is the String() function?",
    answer: "String() converts a value into its string representation.",
    hindi: "String() किसी Value को String में बदलता है।",
    example: "String(100); // '100'"
  },
  {
    category: "JavaScript",
    question: "What is the Boolean() function?",
    answer: "Boolean() converts a value into true or false according to JavaScript truthiness rules.",
    hindi: "Boolean() किसी Value को JavaScript के नियमों के अनुसार true या false में बदलता है।",
    example: "Boolean(0); // false"
  },
  {
    category: "JavaScript",
    question: "What are truthy and falsy values?",
    answer: "Truthy values behave like true in conditions, while falsy values behave like false.",
    hindi: "Condition में Truthy Values true और Falsy Values false की तरह काम करती हैं।",
    example: "Boolean('Hello'); // true | Boolean(''); // false"
  },
  {
    category: "JavaScript",
    question: "What is the ternary operator?",
    answer: "The ternary operator provides a short conditional expression using condition ? value1 : value2.",
    hindi: "Ternary Operator Condition के आधार पर दो Values में से एक चुनने का छोटा तरीका है।",
    example: "const result = age >= 18 ? 'Adult' : 'Minor';"
  },
  {
    category: "JavaScript",
    question: "What is the switch statement?",
    answer: "switch selects a code block to execute based on matching case values.",
    hindi: "switch किसी Value के अनुसार अलग-अलग Case का Code चलाता है।",
    example: "switch (day) { case 1: console.log('Monday'); break; default: console.log('Other'); }"
  },
  {
    category: "JavaScript",
    question: "What is the logical AND operator?",
    answer: "The && operator returns its first falsy operand or the last operand if all are truthy.",
    hindi: "&& Operator Conditions को जोड़ने के लिए उपयोग होता है। सभी Conditions Truthy होने पर ही पूरा Check Truthy होता है।",
    example: "age >= 18 && hasID"
  },
  {
    category: "JavaScript",
    question: "What is the logical OR operator?",
    answer: "The || operator returns the first truthy operand, or the last operand if none is truthy.",
    hindi: "|| Operator में कम-से-कम एक Condition Truthy होने पर पूरा Check Truthy होता है।",
    example: "isAdmin || isEditor"
  },
  {
    category: "JavaScript",
    question: "What is the NOT operator in JavaScript?",
    answer: "The ! operator converts a value to a Boolean and reverses it.",
    hindi: "! Operator किसी Value की Boolean स्थिति को उलट देता है।",
    example: "!true; // false"
  },
  {
    category: "JavaScript",
    question: "What is the nullish coalescing operator?",
    answer: "The ?? operator provides a fallback value only when the left operand is null or undefined.",
    hindi: "?? Operator तभी Default Value देता है जब बाईं तरफ की Value null या undefined हो।",
    example: "const name = username ?? 'Guest';"
  },
  {
    category: "JavaScript",
    question: "What is optional chaining in JavaScript?",
    answer: "Optional chaining (?.) safely accesses a property when an intermediate value may be null or undefined.",
    hindi: "Optional Chaining (?.) से Missing Object या Property को Access करते समय Error से बच सकते हैं।",
    example: "const city = user?.address?.city;"
  },
  {
    category: "JavaScript",
    question: "What is a default parameter?",
    answer: "A default parameter provides a value when an argument is missing or undefined.",
    hindi: "Default Parameter तब उपयोग होता है जब Function में Argument न दिया जाए या undefined हो।",
    example: "function greet(name = 'Guest') { return name; }"
  },
  {
    category: "JavaScript",
    question: "What is a rest parameter?",
    answer: "A rest parameter collects remaining function arguments into an array.",
    hindi: "Rest Parameter (...) बाकी Arguments को एक Array में इकट्ठा करता है।",
    example: "function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }"
  },
  {
    category: "JavaScript",
    question: "What is scope in JavaScript?",
    answer: "Scope determines where a variable can be accessed in a program.",
    hindi: "Scope तय करता है कि किसी Variable को Code में कहाँ Access किया जा सकता है।",
    example: "function test() { let x = 10; } // x is local"
  },
  {
    category: "JavaScript",
    question: "What is block scope?",
    answer: "Block scope limits a variable declared with let or const to its surrounding block.",
    hindi: "Block Scope में let या const से बना Variable केवल अपने Curly Braces वाले Block में उपलब्ध होता है।",
    example: "if (true) { let x = 5; }"
  },
  {
    category: "JavaScript",
    question: "What is global scope?",
    answer: "A globally scoped variable can be accessed from other parts of its applicable program environment.",
    hindi: "Global Scope में बना Variable Program के दूसरे हिस्सों से Access किया जा सकता है।",
    example: "const course = 'JavaScript'; function show() { console.log(course); }"
  },
  {
    category: "JavaScript",
    question: "What is hoisting in JavaScript?",
    answer: "Hoisting describes how declarations are processed before code execution reaches their position.",
    hindi: "Hoisting में JavaScript Code Execute करने से पहले Declarations को Process करती है।",
    example: "sayHi(); function sayHi() { console.log('Hi'); }"
  },
  {
    category: "JavaScript",
    question: "What is a closure in JavaScript?",
    answer: "A closure allows a function to access variables from its outer lexical scope even after the outer function returns.",
    hindi: "Closure की मदद से Inner Function अपने Outer Function के Variables को बाद में भी Access कर सकता है।",
    example: "function outer() { let n = 0; return () => ++n; } const count = outer();"
  },
  {
    category: "JavaScript",
    question: "What is lexical scope?",
    answer: "Lexical scope means variable access is determined by where functions and blocks are written in the source code.",
    hindi: "Lexical Scope में Variable की उपलब्धता Code में Function या Block लिखे जाने की जगह से तय होती है।",
    example: "function outer() { const x = 5; function inner() { return x; } return inner(); }"
  },
  {
    category: "JavaScript",
    question: "What is an IIFE in JavaScript?",
    answer: "An IIFE is a function expression that runs immediately after it is created.",
    hindi: "IIFE ऐसा Function Expression है जो बनते ही Execute हो जाता है।",
    example: "(() => { console.log('Running'); })();"
  },
  {
    category: "JavaScript",
    question: "What is recursion in JavaScript?",
    answer: "Recursion occurs when a function calls itself to solve a smaller part of a problem.",
    hindi: "Recursion में Function किसी Problem को हल करने के लिए खुद को Call करता है।",
    example: "function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }"
  },
  {
    category: "JavaScript",
    question: "What is the every() method?",
    answer: "every() returns true if all array elements satisfy the given condition.",
    hindi: "every() तभी true Return करता है जब Array के सभी Elements Condition पूरी करते हों।",
    example: "[2, 4, 6].every(n => n % 2 === 0); // true"
  },
  {
    category: "JavaScript",
    question: "What is the some() method?",
    answer: "some() returns true if at least one array element satisfies the given condition.",
    hindi: "some() तब true Return करता है जब कम-से-कम एक Element Condition पूरी करता हो।",
    example: "[1, 3, 4].some(n => n % 2 === 0); // true"
  },
  {
    category: "JavaScript",
    question: "What is the join() method?",
    answer: "join() combines array elements into a string using a specified separator.",
    hindi: "join() Array के Elements को जोड़कर एक String बनाता है।",
    example: "['QA', 'Testing'].join(' '); // 'QA Testing'"
  },
  {
    category: "JavaScript",
    question: "What is the split() method?",
    answer: "split() divides a string into an array using a specified separator.",
    hindi: "split() किसी String को Separator के आधार पर Array में बदलता है।",
    example: "'QA,API,SQL'.split(',');"
  },
  {
    category: "JavaScript",
    question: "What is the trim() method?",
    answer: "trim() removes whitespace from both ends of a string.",
    hindi: "trim() String की शुरुआत और अंत की Extra Spaces हटाता है।",
    example: "'  Hello  '.trim(); // 'Hello'"
  },
  {
    category: "JavaScript",
    question: "What is the replace() method?",
    answer: "replace() returns a new string with the first matching occurrence replaced, or matches according to a supplied regular expression.",
    hindi: "replace() String में Match होने वाले Text को बदलकर नई String देता है।",
    example: "'Hello QA'.replace('QA', 'JavaScript');"
  },
  {
    category: "JavaScript",
    question: "What is the startsWith() method?",
    answer: "startsWith() checks whether a string begins with specified characters.",
    hindi: "startsWith() जाँचता है कि String किसी खास Text से शुरू होती है या नहीं।",
    example: "'JavaScript'.startsWith('Java'); // true"
  },
  {
    category: "JavaScript",
    question: "What is the endsWith() method?",
    answer: "endsWith() checks whether a string ends with specified characters.",
    hindi: "endsWith() जाँचता है कि String किसी खास Text पर खत्म होती है या नहीं।",
    example: "'test.js'.endsWith('.js'); // true"
  },
  {
    category: "JavaScript",
    question: "What is Math.random() in JavaScript?",
    answer: "Math.random() returns a pseudorandom number greater than or equal to 0 and less than 1.",
    hindi: "Math.random() 0 से लेकर 1 से छोटी एक Random Number Value देता है।",
    example: "const num = Math.random();"
  },
  {
    category: "JavaScript",
    question: "What is Math.floor() in JavaScript?",
    answer: "Math.floor() rounds a number down to the nearest integer.",
    hindi: "Math.floor() Number को नीचे की ओर सबसे नजदीकी Integer में बदलता है।",
    example: "Math.floor(4.9); // 4"
  },
  {
    category: "JavaScript",
    question: "What is DOM in JavaScript?",
    answer: "DOM stands for Document Object Model. It represents an HTML document as a tree of objects.",
    hindi: "DOM HTML Page को Objects की Tree के रूप में दर्शाता है।",
    example: "document.title"
  },
  {
    category: "JavaScript",
    question: "What is document.getElementById()?",
    answer: "It selects an HTML element using its unique ID.",
    hindi: "यह HTML Element को उसकी ID से Select करता है।",
    example: "document.getElementById('loginBtn');"
  },
  {
    category: "JavaScript",
    question: "What is querySelector()?",
    answer: "It returns the first element matching a CSS selector.",
    hindi: "यह CSS Selector से Match होने वाला पहला Element देता है।",
    example: "document.querySelector('.card');"
  },
  {
    category: "JavaScript",
    question: "What is querySelectorAll()?",
    answer: "It returns a static NodeList containing all matching elements.",
    hindi: "यह दिए गए Selector से Match होने वाले सभी Elements की Static NodeList देता है।",
    example: "document.querySelectorAll('.question');"
  },
  {
    category: "JavaScript",
    question: "What is innerHTML?",
    answer: "innerHTML gets or sets the HTML markup inside an element.",
    hindi: "innerHTML किसी Element के अंदर HTML Content पढ़ने या बदलने के लिए होता है।",
    example: "document.getElementById('demo').innerHTML = '<b>Hello</b>';"
  },
  {
    category: "JavaScript",
    question: "What is textContent?",
    answer: "textContent gets or sets the text content of a node and its descendants.",
    hindi: "textContent किसी Element के Text को पढ़ने या बदलने के लिए उपयोग होता है।",
    example: "document.getElementById('demo').textContent = 'Hello';"
  },
  {
    category: "JavaScript",
    question: "What is createElement()?",
    answer: "It creates a new HTML element.",
    hindi: "createElement() नया HTML Element बनाता है।",
    example: "const div = document.createElement('div');"
  },
  {
    category: "JavaScript",
    question: "What is appendChild()?",
    answer: "It adds a node as the last child of another node.",
    hindi: "appendChild() किसी Parent Element में नया Child Node जोड़ता है।",
    example: "document.body.appendChild(div);"
  },
  {
    category: "JavaScript",
    question: "What is remove() in DOM?",
    answer: "The remove() method removes an element from the DOM.",
    hindi: "remove() किसी Element को DOM से हटाता है।",
    example: "document.getElementById('demo').remove();"
  },
  {
    category: "JavaScript",
    question: "What is classList in JavaScript?",
    answer: "classList provides methods to manage an element's CSS classes.",
    hindi: "classList से CSS Classes को Add, Remove या Toggle कर सकते हैं।",
    example: "element.classList.add('active');"
  },
  {
    category: "JavaScript",
    question: "What is an Event in JavaScript?",
    answer: "An event is an action or occurrence detected by JavaScript.",
    hindi: "Event किसी Action को कहते हैं, जैसे Click करना या Keyboard दबाना।",
    example: "button.onclick = () => console.log('Clicked');"
  },
  {
    category: "JavaScript",
    question: "What is addEventListener()?",
    answer: "It attaches an event handler to an element.",
    hindi: "addEventListener() किसी Element पर Event Handler जोड़ता है।",
    example: "button.addEventListener('click', () => console.log('Hello'));"
  },
  {
    category: "JavaScript",
    question: "What is removeEventListener()?",
    answer: "It removes a previously registered event listener when the matching arguments are provided.",
    hindi: "यह पहले से जुड़े Event Listener को हटाने के लिए उपयोग होता है।",
    example: "button.removeEventListener('click', handleClick);"
  },
  {
    category: "JavaScript",
    question: "What is the click event?",
    answer: "The click event occurs when a user activates an element using a pointing device or equivalent interaction.",
    hindi: "जब User किसी Element पर Click करता है, तब Click Event Trigger होता है।",
    example: "button.addEventListener('click', handleClick);"
  },
  {
    category: "JavaScript",
    question: "What is the change event?",
    answer: "The change event occurs when a user commits a change to an input value.",
    hindi: "Input की Value बदलकर Commit करने पर Change Event Trigger होता है।",
    example: "input.addEventListener('change', handleChange);"
  },
  {
    category: "JavaScript",
    question: "What is the input event?",
    answer: "The input event fires when a user changes the value of an input element.",
    hindi: "User द्वारा Input Value बदलने पर Input Event चलता है।",
    example: "input.addEventListener('input', handleInput);"
  },
  {
    category: "JavaScript",
    question: "What is preventDefault()?",
    answer: "It prevents the browser's default action for a cancelable event.",
    hindi: "preventDefault() Browser के Default Action को रोकने के लिए होता है।",
    example: "event.preventDefault();"
  },
  {
    category: "JavaScript",
    question: "What is stopPropagation()?",
    answer: "It prevents an event from propagating further through the DOM.",
    hindi: "यह Event को DOM में आगे Propagate होने से रोकता है।",
    example: "event.stopPropagation();"
  },
  {
    category: "JavaScript",
    question: "What is Event Bubbling?",
    answer: "Event bubbling is the process where an event propagates from a target element toward its ancestors.",
    hindi: "Event Bubbling में Event Child Element से Parent Elements की ओर जाता है।",
    example: "Child click event can bubble to its parent."
  },
  {
    category: "JavaScript",
    question: "What is Event Capturing?",
    answer: "Event capturing is the phase where an event travels from outer ancestors toward its target.",
    hindi: "Event Capturing में Event Outer Parent से Target Element की ओर जाता है।",
    example: "element.addEventListener('click', handler, true);"
  },
  {
    category: "JavaScript",
    question: "What is Event Delegation?",
    answer: "Event delegation handles events on child elements through a listener attached to an ancestor.",
    hindi: "Event Delegation में Parent Element पर Listener लगाकर Child Elements के Events Handle करते हैं।",
    example: "list.addEventListener('click', event => console.log(event.target));"
  },
  {
    category: "JavaScript",
    question: "What is localStorage?",
    answer: "localStorage stores key-value string data in the browser without an automatic expiration time.",
    hindi: "localStorage Browser में Data Save करता है, जो सामान्यतः Browser बंद होने के बाद भी रहता है।",
    example: "localStorage.setItem('course', 'JavaScript');"
  },
  {
    category: "JavaScript",
    question: "What is sessionStorage?",
    answer: "sessionStorage stores key-value data for the duration of a page session.",
    hindi: "sessionStorage में Data एक Page Session तक उपलब्ध रहता है।",
    example: "sessionStorage.setItem('user', 'QA');"
  },
  {
    category: "JavaScript",
    question: "What is the difference between localStorage and sessionStorage?",
    answer: "localStorage persists across browser sessions, while sessionStorage is cleared when its page session ends.",
    hindi: "localStorage में Data लंबे समय तक रहता है, जबकि sessionStorage का Data Session खत्म होने पर हट जाता है।",
    example: "localStorage.setItem('a', '1'); sessionStorage.setItem('b', '2');"
  },
  {
    category: "JavaScript",
    question: "What is the fetch() API?",
    answer: "fetch() is used to make HTTP requests and returns a Promise.",
    hindi: "fetch() का उपयोग Server या API से Data Request करने के लिए होता है।",
    example: "fetch('/api/users').then(response => response.json());"
  },
  {
    category: "JavaScript",
    question: "What is an HTTP GET request?",
    answer: "A GET request retrieves a representation of a resource from a server.",
    hindi: "GET Request का उपयोग Server से Data प्राप्त करने के लिए होता है।",
    example: "fetch('/api/products');"
  },
  {
    category: "JavaScript",
    question: "What is an HTTP POST request?",
    answer: "A POST request sends data to a server for processing.",
    hindi: "POST Request का उपयोग Server को Data भेजने के लिए होता है।",
    example: "fetch('/api/users', { method: 'POST', body: JSON.stringify({name:'QA'}) });"
  },
  {
    category: "JavaScript",
    question: "What is the Event Loop?",
    answer: "The Event Loop coordinates JavaScript execution and schedules queued callbacks when execution can continue.",
    hindi: "Event Loop JavaScript में Asynchronous Tasks और उनके Callbacks को Manage करने में मदद करता है।",
    example: "console.log('A'); setTimeout(() => console.log('B'), 0); console.log('C');"
  },
  {
    category: "JavaScript",
    question: "What is the Call Stack?",
    answer: "The Call Stack tracks currently executing function calls.",
    hindi: "Call Stack यह Track करता है कि कौन-सा Function Execute हो रहा है।",
    example: "function a() { b(); } function b() { console.log('Hi'); }"
  },
  {
    category: "JavaScript",
    question: "What is a Microtask in JavaScript?",
    answer: "A microtask is a high-priority queued task, such as a Promise reaction callback.",
    hindi: "Microtask Queue में Promise Callbacks जैसे Tasks रखे जाते हैं।",
    example: "Promise.resolve().then(() => console.log('Microtask'));"
  },
  {
    category: "JavaScript",
    question: "What is Promise.all()?",
    answer: "Promise.all() fulfills when all input Promises fulfill and rejects if any input Promise rejects.",
    hindi: "Promise.all() सभी Promises सफल होने पर उनका Result देता है। कोई एक Reject होने पर यह Reject हो जाता है।",
    example: "Promise.all([Promise.resolve(1), Promise.resolve(2)]);"
  },
  {
    category: "JavaScript",
    question: "What is Promise.race()?",
    answer: "Promise.race() settles with the result of the first input Promise that settles.",
    hindi: "Promise.race() सबसे पहले Settle होने वाले Promise का Result देता है।",
    example: "Promise.race([promise1, promise2]);"
  },
  {
    category: "JavaScript",
    question: "What is Promise.allSettled()?",
    answer: "Promise.allSettled() waits until all input Promises have settled and returns their outcomes.",
    hindi: "Promise.allSettled() सभी Promises के Fulfilled या Rejected होने के बाद उनके Results देता है।",
    example: "Promise.allSettled([Promise.resolve(1), Promise.reject('Error')]);"
  },
  {
    category: "JavaScript",
    question: "What is Promise.any()?",
    answer: "Promise.any() fulfills with the first fulfilled Promise and rejects if all input Promises reject.",
    hindi: "Promise.any() पहला सफल Promise Return करता है। सभी Reject होने पर यह Reject होता है।",
    example: "Promise.any([Promise.reject('No'), Promise.resolve('Yes')]);"
  },
  {
    category: "JavaScript",
    question: "What is the this keyword?",
    answer: "The this keyword refers to a value determined by how a function is invoked, except in arrow functions.",
    hindi: "this की Value Function को Call करने के तरीके पर निर्भर करती है। Arrow Function में यह Outer Scope से मिलती है।",
    example: "const user = {name:'QA', show(){ return this.name; }};"
  },
  {
    category: "JavaScript",
    question: "What is the call() method?",
    answer: "call() invokes a function with a specified this value and individual arguments.",
    hindi: "call() से Function को तय this Value के साथ Execute कर सकते हैं।",
    example: "greet.call(user, 'Hello');"
  },
  {
    category: "JavaScript",
    question: "What is the apply() method?",
    answer: "apply() invokes a function with a specified this value and arguments supplied as an array-like object.",
    hindi: "apply() Function को Arguments की Array जैसी List के साथ Call करता है।",
    example: "greet.apply(user, ['Hello']);"
  },
  {
    category: "JavaScript",
    question: "What is the bind() method?",
    answer: "bind() creates a new function with a specified this value and optionally preset arguments.",
    hindi: "bind() एक नया Function बनाता है जिसमें this Value पहले से तय की जा सकती है।",
    example: "const newGreet = greet.bind(user);"
  },
  {
    category: "JavaScript",
    question: "What is a JavaScript Class?",
    answer: "A class is a template for creating objects with shared methods and initialization logic.",
    hindi: "Class एक Template है जिसकी मदद से Objects बनाए जाते हैं।",
    example: "class User { constructor(name) { this.name = name; } }"
  },
  {
    category: "JavaScript",
    question: "What is a Constructor in JavaScript?",
    answer: "A constructor initializes a new object when a class instance is created.",
    hindi: "Constructor नया Object बनते समय उसकी Initial Values Set करता है।",
    example: "class Student { constructor(name) { this.name = name; } }"
  },
  {
    category: "JavaScript",
    question: "What is Inheritance in JavaScript?",
    answer: "Inheritance allows an object or class to reuse behavior from another through the prototype chain.",
    hindi: "Inheritance की मदद से एक Class दूसरी Class की Properties और Methods उपयोग कर सकती है।",
    example: "class Dog extends Animal {}"
  },
  {
    category: "JavaScript",
    question: "What is the super keyword?",
    answer: "super is used to access parent class methods or call its constructor.",
    hindi: "super का उपयोग Parent Class के Constructor या Methods को Access करने के लिए होता है।",
    example: "class Dog extends Animal { constructor() { super(); } }"
  },
  {
    category: "JavaScript",
    question: "What is a Static Method?",
    answer: "A static method belongs to a class itself rather than its instances.",
    hindi: "Static Method को Object बनाए बिना सीधे Class से Call कर सकते हैं।",
    example: "class MathTool { static add(a,b) { return a+b; } }"
  },
  {
    category: "JavaScript",
    question: "What is a Prototype in JavaScript?",
    answer: "A prototype is an object from which another object can inherit properties and methods.",
    hindi: "Prototype के माध्यम से JavaScript Objects दूसरे Objects की Properties और Methods Access कर सकते हैं।",
    example: "Object.getPrototypeOf([]);"
  },
  {
    category: "JavaScript",
    question: "What is a Shallow Copy?",
    answer: "A shallow copy creates a new outer object while nested object references remain shared.",
    hindi: "Shallow Copy में Outer Object नया होता है, लेकिन Nested Objects के References Share हो सकते हैं।",
    example: "const copy = {...original};"
  },
  {
    category: "JavaScript",
    question: "What is a Deep Copy?",
    answer: "A deep copy duplicates an object and its nested data without sharing the copied nested references.",
    hindi: "Deep Copy में Nested Data की भी अलग Copy बनती है।",
    example: "const copy = structuredClone(original);"
  },
  {
    category: "JavaScript",
    question: "What is Object.keys()?",
    answer: "Object.keys() returns an array containing an object's own enumerable string property names.",
    hindi: "Object.keys() किसी Object की अपनी Enumerable String Keys का Array देता है।",
    example: "Object.keys({name:'QA', age:25});"
  },
  {
    category: "JavaScript",
    question: "What is Object.values()?",
    answer: "Object.values() returns an array of an object's own enumerable string-keyed property values.",
    hindi: "Object.values() Object की अपनी Enumerable String-Keyed Properties की Values देता है।",
    example: "Object.values({name:'QA', age:25});"
  },
  {
    category: "JavaScript",
    question: "What is Object.entries()?",
    answer: "Object.entries() returns an array of an object's own enumerable string-keyed property pairs.",
    hindi: "Object.entries() Object की Keys और Values को Pairs के रूप में Return करता है।",
    example: "Object.entries({name:'QA', age:25});"
  },
  {
    category: "JavaScript",
    question: "What is Object.freeze()?",
    answer: "Object.freeze() prevents adding, removing or changing an object's own properties at the top level.",
    hindi: "Object.freeze() Object की Top-Level Properties में बदलाव रोकता है। यह Deep Freeze नहीं करता।",
    example: "const user = Object.freeze({name:'QA'});"
  },
  {
    category: "JavaScript",
    question: "Why is JavaScript important for QA Automation?",
    answer: "JavaScript is used to write automated tests, interact with web applications, validate results and work with testing frameworks such as Playwright.",
    hindi: "JavaScript की मदद से QA Engineer Automated Test Scripts लिख सकता है और Web Application को Test कर सकता है।",
    example: "const expectedTitle = 'Login';"
  },
  {
    category: "JavaScript",
    question: "What is Playwright?",
    answer: "Playwright is an end-to-end testing framework that supports browser automation.",
    hindi: "Playwright एक Automation Testing Framework है जिससे Web Applications की Testing की जाती है।",
    example: "import { test, expect } from '@playwright/test';"
  },
  {
    category: "JavaScript",
    question: "What is an assertion in automation testing?",
    answer: "An assertion checks whether the actual result matches an expected condition.",
    hindi: "Assertion की मदद से Actual Result और Expected Result को Verify करते हैं।",
    example: "expect(actualResult).toBe(expectedResult);"
  },
  {
    category: "JavaScript",
    question: "What is the purpose of test() in Playwright?",
    answer: "The test() function defines an individual automated test case.",
    hindi: "Playwright में test() का उपयोग नया Automated Test Case बनाने के लिए होता है।",
    example: "test('Login page test', async ({ page }) => {});"
  },
  {
    category: "JavaScript",
    question: "What is the page object in Playwright?",
    answer: "The page object represents a browser tab and provides methods to interact with its content.",
    hindi: "Playwright का page Object Browser Tab को Represent करता है।",
    example: "await page.goto('https://example.com');"
  },
  {
    category: "JavaScript",
    question: "What is page.goto()?",
    answer: "page.goto() navigates the browser page to a specified URL.",
    hindi: "page.goto() का उपयोग Browser में किसी URL को Open करने के लिए होता है।",
    example: "await page.goto('https://example.com');"
  },
  {
    category: "JavaScript",
    question: "What is a Locator in Playwright?",
    answer: "A Locator identifies elements on a page and supports actions and assertions.",
    hindi: "Locator की मदद से Web Page पर किसी Element को Identify करके उस पर Action कर सकते हैं।",
    example: "const loginButton = page.locator('#login');"
  },
  {
    category: "JavaScript",
    question: "What is page.locator()?",
    answer: "page.locator() creates a Locator using a selector.",
    hindi: "page.locator() किसी Selector की मदद से Element का Locator बनाता है।",
    example: "page.locator('.submit-button');"
  },
  {
    category: "JavaScript",
    question: "What is getByRole() in Playwright?",
    answer: "getByRole() locates elements by their accessibility role and optionally their accessible name.",
    hindi: "getByRole() से Element को उसके Role और Name के आधार पर Locate कर सकते हैं।",
    example: "page.getByRole('button', { name: 'Login' });"
  },
  {
    category: "JavaScript",
    question: "What is getByText() in Playwright?",
    answer: "getByText() locates an element using its text content.",
    hindi: "getByText() किसी Element को उसके दिखाई देने वाले Text से Locate करता है।",
    example: "page.getByText('Welcome');"
  },
  {
    category: "JavaScript",
    question: "What is getByPlaceholder()?",
    answer: "getByPlaceholder() locates an input element using its placeholder text.",
    hindi: "यह Input Field को उसके Placeholder Text से Locate करता है।",
    example: "page.getByPlaceholder('Enter email');"
  },
  {
    category: "JavaScript",
    question: "What is getByTestId()?",
    answer: "getByTestId() locates elements using a configured test ID attribute, which defaults to data-testid.",
    hindi: "getByTestId() Testing के लिए दिए गए Test ID से Element को Locate करता है।",
    example: "page.getByTestId('submit-button');"
  },
  {
    category: "JavaScript",
    question: "How do you click a button in Playwright?",
    answer: "Use the click() method on a Locator.",
    hindi: "Playwright में Button Click करने के लिए Locator के साथ click() Method उपयोग करते हैं।",
    example: "await page.getByRole('button', { name: 'Login' }).click();"
  },
  {
    category: "JavaScript",
    question: "How do you enter text into an input field in Playwright?",
    answer: "Use the fill() method to replace an input field's value with the specified text.",
    hindi: "Input Field में Text भरने के लिए fill() Method का उपयोग करते हैं।",
    example: "await page.locator('#username').fill('aman');"
  },
  {
    category: "JavaScript",
    question: "What is the difference between fill() and press()?",
    answer: "fill() sets an input value, while press() simulates a keyboard key press.",
    hindi: "fill() Field में Value भरता है, जबकि press() Keyboard की Key Press करता है।",
    example: "await page.locator('#search').fill('QA'); await page.locator('#search').press('Enter');"
  },
  {
    category: "JavaScript",
    question: "How do you verify an element is visible in Playwright?",
    answer: "Use the toBeVisible() assertion on a Locator.",
    hindi: "Element दिखाई दे रहा है या नहीं, यह Check करने के लिए toBeVisible() उपयोग करते हैं।",
    example: "await expect(page.locator('#message')).toBeVisible();"
  },
  {
    category: "JavaScript",
    question: "How do you verify text in Playwright?",
    answer: "Use toHaveText() to verify an element's text content.",
    hindi: "किसी Element का Text Verify करने के लिए toHaveText() Assertion उपयोग करते हैं।",
    example: "await expect(page.locator('h1')).toHaveText('Welcome');"
  },
  {
    category: "JavaScript",
    question: "What is toHaveURL() in Playwright?",
    answer: "toHaveURL() verifies that a page has the expected URL.",
    hindi: "toHaveURL() से Browser Page का URL Verify करते हैं।",
    example: "await expect(page).toHaveURL('https://example.com/dashboard');"
  },
  {
    category: "JavaScript",
    question: "What is toHaveTitle() in Playwright?",
    answer: "toHaveTitle() verifies the title of a browser page.",
    hindi: "toHaveTitle() का उपयोग Web Page का Title Verify करने के लिए होता है।",
    example: "await expect(page).toHaveTitle('Dashboard');"
  },
  {
    category: "JavaScript",
    question: "What is Auto-Waiting in Playwright?",
    answer: "Playwright automatically waits for relevant actionability conditions before performing many actions.",
    hindi: "Playwright कई Actions करने से पहले Element के Ready होने का Automatically Wait करता है।",
    example: "await page.getByRole('button', { name: 'Submit' }).click();"
  },
  {
    category: "JavaScript",
    question: "Why should hard waits be avoided in automation?",
    answer: "Hard waits can make tests unnecessarily slow and unreliable because application response times vary.",
    hindi: "Fixed Wait लगाने से Test Slow या Unstable हो सकता है। बेहतर है सही Condition का Wait करें।",
    example: "await expect(page.locator('#result')).toBeVisible();"
  },
  {
    category: "JavaScript",
    question: "What is beforeEach() in Playwright?",
    answer: "beforeEach() defines a hook that runs before every test in its scope.",
    hindi: "beforeEach() हर Test से पहले Common Setup चलाने के लिए उपयोग होता है।",
    example: "test.beforeEach(async ({ page }) => { await page.goto('https://example.com'); });"
  },
  {
    category: "JavaScript",
    question: "What is afterEach() in Playwright?",
    answer: "afterEach() defines a hook that runs after every test in its scope.",
    hindi: "afterEach() हर Test के बाद Cleanup या अन्य जरूरी Action करने के लिए होता है।",
    example: "test.afterEach(async () => { console.log('Test finished'); });"
  },
  {
    category: "JavaScript",
    question: "What is beforeAll() in Playwright?",
    answer: "beforeAll() runs setup once before the tests in its scope for each applicable worker.",
    hindi: "beforeAll() संबंधित Tests शुरू होने से पहले Shared Setup चलाने के लिए होता है।",
    example: "test.beforeAll(async () => { console.log('Setup'); });"
  },
  {
    category: "JavaScript",
    question: "What is afterAll() in Playwright?",
    answer: "afterAll() runs teardown after the tests in its scope for each applicable worker.",
    hindi: "afterAll() संबंधित Tests पूरे होने के बाद Cleanup के लिए उपयोग होता है।",
    example: "test.afterAll(async () => { console.log('Cleanup'); });"
  },
  {
    category: "JavaScript",
    question: "What is test.describe()?",
    answer: "test.describe() groups related test cases into a test suite.",
    hindi: "test.describe() का उपयोग संबंधित Test Cases को एक Group में रखने के लिए होता है।",
    example: "test.describe('Login Tests', () => { /* tests */ });"
  },
  {
    category: "JavaScript",
    question: "What is test.skip()?",
    answer: "test.skip() marks a test as skipped.",
    hindi: "test.skip() किसी Test को Execute होने से Skip करने के लिए होता है।",
    example: "test.skip('Feature not ready', async ({ page }) => {});"
  },
  {
    category: "JavaScript",
    question: "What is test.only()?",
    answer: "test.only() marks a test as focused so only focused tests run.",
    hindi: "test.only() से किसी विशेष Test को Focus करके Run कर सकते हैं। इसे गलती से Code में छोड़ना नहीं चाहिए।",
    example: "test.only('Check login', async ({ page }) => {});"
  },
  {
    category: "JavaScript",
    question: "What is a Page Object Model?",
    answer: "Page Object Model is a design pattern that organizes page locators and interactions into reusable classes or objects.",
    hindi: "Page Object Model में Page के Locators और Actions को अलग Class में रखकर Reusable बनाया जाता है।",
    example: "class LoginPage { constructor(page) { this.page = page; } }"
  },
  {
    category: "JavaScript",
    question: "What is a Test Fixture in Playwright?",
    answer: "A fixture provides the setup, resources and teardown required by a test.",
    hindi: "Fixture Test के लिए जरूरी Resources और Setup उपलब्ध कराता है।",
    example: "test('Example', async ({ page }) => { await page.goto('https://example.com'); });"
  },
  {
    category: "JavaScript",
    question: "What is a Browser Context in Playwright?",
    answer: "A Browser Context is an isolated browser session with its own cookies and storage.",
    hindi: "Browser Context अलग Browser Session देता है, जिसमें Cookies और Storage Isolated रहते हैं।",
    example: "const context = await browser.newContext();"
  },
  {
    category: "JavaScript",
    question: "How do you take a screenshot in Playwright?",
    answer: "Use page.screenshot() to capture a screenshot of the page.",
    hindi: "page.screenshot() से Web Page का Screenshot लिया जाता है।",
    example: "await page.screenshot({ path: 'screenshot.png' });"
  },
  {
    category: "JavaScript",
    question: "How do you select an option from a dropdown in Playwright?",
    answer: "Use selectOption() on a native HTML select element.",
    hindi: "HTML Dropdown से Option Select करने के लिए selectOption() उपयोग करते हैं।",
    example: "await page.locator('#country').selectOption('IN');"
  },
  {
    category: "JavaScript",
    question: "How do you check a checkbox in Playwright?",
    answer: "Use the check() method to ensure a checkbox is checked.",
    hindi: "Checkbox को Checked करने के लिए check() Method उपयोग करते हैं।",
    example: "await page.locator('#terms').check();"
  },
  {
    category: "JavaScript",
    question: "How do you uncheck a checkbox in Playwright?",
    answer: "Use the uncheck() method to ensure a checkbox is unchecked.",
    hindi: "Checkbox को Unchecked करने के लिए uncheck() Method उपयोग करते हैं।",
    example: "await page.locator('#terms').uncheck();"
  },
  {
    category: "JavaScript",
    question: "How do you handle a browser alert in Playwright?",
    answer: "Register a dialog event handler and accept or dismiss the dialog as needed.",
    hindi: "Browser Alert Handle करने के लिए dialog Event Listener उपयोग करते हैं।",
    example: "page.on('dialog', dialog => dialog.accept());"
  },
  {
    category: "JavaScript",
    question: "How do you handle a new tab in Playwright?",
    answer: "Wait for the popup event while performing the action that opens the new tab.",
    hindi: "नया Tab Open होने पर popup Event से उसका Page Object प्राप्त कर सकते हैं।",
    example: "const popupPromise = page.waitForEvent('popup'); await page.locator('#open').click(); const popup = await popupPromise;"
  },
  {
    category: "JavaScript",
    question: "How do you upload a file in Playwright?",
    answer: "Use setInputFiles() on a file input element.",
    hindi: "File Upload करने के लिए setInputFiles() Method उपयोग करते हैं।",
    example: "await page.locator('input[type=file]').setInputFiles('sample.txt');"
  },
  {
    category: "JavaScript",
    question: "What is API Testing?",
    answer: "API Testing verifies the behavior, responses and reliability of application programming interfaces.",
    hindi: "API Testing में API के Response, Status Code और Data को Verify किया जाता है।",
    example: "const response = await request.get('/api/users');"
  },
  {
    category: "JavaScript",
    question: "How do you verify an API status code in Playwright?",
    answer: "Use the response.status() method and compare it with the expected status code.",
    hindi: "API का Status Code Verify करने के लिए response.status() उपयोग करते हैं।",
    example: "expect(response.status()).toBe(200);"
  },
  {
    category: "JavaScript",
    question: "What does HTTP status code 200 mean?",
    answer: "HTTP 200 OK means the request succeeded.",
    hindi: "Status Code 200 का मतलब है कि Request Successfully Complete हुई।",
    example: "expect(response.status()).toBe(200);"
  },
  {
    category: "JavaScript",
    question: "What does HTTP status code 404 mean?",
    answer: "HTTP 404 Not Found means the server cannot find the requested resource.",
    hindi: "404 का मतलब है कि Requested Resource Server पर नहीं मिला।",
    example: "expect(response.status()).toBe(404);"
  },
  {
    category: "JavaScript",
    question: "What does HTTP status code 500 mean?",
    answer: "HTTP 500 Internal Server Error indicates an unexpected server-side problem.",
    hindi: "500 Status Code Server की Internal Error को दर्शाता है।",
    example: "console.log(response.status());"
  },
  {
    category: "JavaScript",
    question: "What is Test Data in Automation?",
    answer: "Test data is the input information used to execute and validate test scenarios.",
    hindi: "Test Data वह Input होता है जिसकी मदद से अलग-अलग Test Scenarios Verify किए जाते हैं।",
    example: "const testUser = { username: 'qauser', password: 'samplePassword' };"
  },
  {
    category: "JavaScript",
    question: "What is Data-Driven Testing?",
    answer: "Data-driven testing runs similar test logic using multiple sets of input data.",
    hindi: "Data-Driven Testing में एक ही Test Logic को अलग-अलग Test Data के साथ Execute करते हैं।",
    example: "for (const user of users) { test(`Login: ${user.name}`, async ({ page }) => {}); }"
  },
  {
    category: "JavaScript",
    question: "What is a Flaky Test?",
    answer: "A flaky test produces inconsistent results without a corresponding change in the application code.",
    hindi: "Flaky Test कभी Pass और कभी Fail होता है, जबकि Application में कोई संबंधित बदलाव नहीं हुआ होता।",
    example: "A test may fail intermittently because of timing issues."
  },
  {
    category: "JavaScript",
    question: "What is Test Isolation?",
    answer: "Test isolation means keeping tests independent so one test does not unintentionally affect another.",
    hindi: "Test Isolation का मतलब है कि एक Test का Data या State दूसरे Test को प्रभावित न करे।",
    example: "Each test uses a separate browser context."
  },
  {
    category: "JavaScript",
    question: "What is a Headless Browser?",
    answer: "A headless browser runs without displaying a visible browser window.",
    hindi: "Headless Mode में Browser बिना Visible Window के चलता है।",
    example: "use: { headless: true }"
  },
  {
    category: "JavaScript",
    question: "What is a Headed Browser?",
    answer: "A headed browser runs with a visible browser window.",
    hindi: "Headed Mode में Browser की Window दिखाई देती है, जिससे Test Execution देख सकते हैं।",
    example: "use: { headless: false }"
  },
  {
    category: "JavaScript",
    question: "What is a Test Report?",
    answer: "A test report summarizes test execution results, including passed, failed and skipped tests.",
    hindi: "Test Report में Test Execution का Result दिखाई देता है, जैसे कितने Tests Pass, Fail या Skip हुए।",
    example: "npx playwright show-report"
  },{
    category: "JavaScript",
    question: "What is the difference between toBeVisible() and toBeHidden() in Playwright?",
    answer: "toBeVisible() verifies that an element is visible, while toBeHidden() verifies that it is hidden or does not exist.",
    hindi: "toBeVisible() Element दिखाई देने की जाँच करता है, जबकि toBeHidden() उसके छिपे होने या मौजूद न होने की जाँच करता है।",
    example: "await expect(page.locator('#loader')).toBeHidden();"
  },
  {
    category: "JavaScript",
    question: "What is toHaveCount() in Playwright?",
    answer: "toHaveCount() verifies the number of elements matching a Locator.",
    hindi: "toHaveCount() से Match होने वाले Elements की संख्या Verify करते हैं।",
    example: "await expect(page.locator('.product')).toHaveCount(5);"
  },
  {
    category: "JavaScript",
    question: "What is toBeEnabled() in Playwright?",
    answer: "toBeEnabled() verifies that an element is enabled.",
    hindi: "यह Check करता है कि Element Enabled है या नहीं।",
    example: "await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();"
  },
  {
    category: "JavaScript",
    question: "What is toBeDisabled() in Playwright?",
    answer: "toBeDisabled() verifies that an element is disabled.",
    hindi: "यह Check करता है कि Element Disabled है या नहीं।",
    example: "await expect(page.locator('#submit')).toBeDisabled();"
  },
  {
    category: "JavaScript",
    question: "What is toHaveValue() in Playwright?",
    answer: "toHaveValue() verifies the current value of an input element.",
    hindi: "Input Field में भरी हुई Value Verify करने के लिए इसका उपयोग होता है।",
    example: "await expect(page.locator('#email')).toHaveValue('qa@example.com');"
  },
  {
    category: "JavaScript",
    question: "What is toBeChecked() in Playwright?",
    answer: "toBeChecked() verifies that a checkbox or radio button is selected.",
    hindi: "Checkbox या Radio Button Selected है या नहीं, यह Verify करता है।",
    example: "await expect(page.locator('#terms')).toBeChecked();"
  },
  {
    category: "JavaScript",
    question: "How do you hover over an element in Playwright?",
    answer: "Use the hover() method on a Locator.",
    hindi: "किसी Element पर Mouse ले जाने के लिए hover() Method उपयोग करते हैं।",
    example: "await page.locator('#menu').hover();"
  },
  {
    category: "JavaScript",
    question: "How do you double-click an element in Playwright?",
    answer: "Use the dblclick() method.",
    hindi: "Element पर Double Click करने के लिए dblclick() उपयोग करते हैं।",
    example: "await page.locator('#item').dblclick();"
  },
  {
    category: "JavaScript",
    question: "How do you perform drag and drop in Playwright?",
    answer: "Use dragTo() to drag a source element onto a target element.",
    hindi: "एक Element को दूसरे Element पर Drag और Drop करने के लिए dragTo() उपयोग करते हैं।",
    example: "await page.locator('#source').dragTo(page.locator('#target'));"
  },
  {
    category: "JavaScript",
    question: "How do you handle an iframe in Playwright?",
    answer: "Use frameLocator() to locate elements inside an iframe.",
    hindi: "iframe के अंदर मौजूद Elements को Locate करने के लिए frameLocator() उपयोग करते हैं।",
    example: "await page.frameLocator('#payment-frame').getByRole('button', { name: 'Pay' }).click();"
  },
  {
    category: "JavaScript",
    question: "What is a timeout in automation testing?",
    answer: "A timeout is the maximum allowed waiting time for an operation or test.",
    hindi: "Timeout वह अधिकतम समय है जिसके अंदर Operation पूरा होना चाहिए।",
    example: "test.setTimeout(30000);"
  },
  {
    category: "JavaScript",
    question: "What are retries in Playwright?",
    answer: "Retries allow failed tests to run again according to the configured retry count.",
    hindi: "Retries की मदद से Failed Tests को दोबारा Execute किया जा सकता है।",
    example: "export default defineConfig({ retries: 2 });"
  },
  {
    category: "JavaScript",
    question: "What is parallel execution in Playwright?",
    answer: "Parallel execution allows multiple tests to run concurrently using separate workers.",
    hindi: "Parallel Execution में कई Tests अलग Workers पर एक साथ चल सकते हैं।",
    example: "export default defineConfig({ workers: 4 });"
  },
  {
    category: "JavaScript",
    question: "What is a Playwright Trace?",
    answer: "A trace records debugging information about test execution, such as actions and snapshots.",
    hindi: "Trace में Test Execution की जानकारी Record होती है जिससे Failure Debug करना आसान होता है।",
    example: "use: { trace: 'on-first-retry' }"
  },
  {
    category: "JavaScript",
    question: "What is Playwright Codegen?",
    answer: "Codegen is a tool that records browser interactions and generates automation code.",
    hindi: "Codegen Browser Actions को Record करके Automation Code Generate करने में मदद करता है।",
    example: "npx playwright codegen https://example.com"
  },
  {
    category: "JavaScript",
    question: "What is a test configuration file in Playwright?",
    answer: "A configuration file defines settings such as test directories, retries, reporters and browser options.",
    hindi: "Configuration File में Automation Project की Common Settings रखी जाती हैं।",
    example: "playwright.config.js"
  },
  {
    category: "JavaScript",
    question: "What is baseURL in Playwright?",
    answer: "baseURL defines a common base address used when navigating to relative URLs.",
    hindi: "baseURL Common Website Address रखने के लिए होता है ताकि हर Test में पूरा URL न लिखना पड़े।",
    example: "use: { baseURL: 'https://example.com' }"
  },
  {
    category: "JavaScript",
    question: "What is a Playwright Project?",
    answer: "A Playwright Project is a named test configuration that can specify a browser, device or environment.",
    hindi: "Playwright Project से अलग Browsers या Environments के लिए Test Configuration बना सकते हैं।",
    example: "projects: [{ name: 'chromium', use: { browserName: 'chromium' } }]"
  },
  {
    category: "JavaScript",
    question: "What is cross-browser testing?",
    answer: "Cross-browser testing checks whether an application works correctly across different browsers.",
    hindi: "Cross-Browser Testing में Application को अलग-अलग Browsers पर Verify किया जाता है।",
    example: "Run the same test in Chromium, Firefox and WebKit."
  },
  {
    category: "JavaScript",
    question: "What is responsive testing?",
    answer: "Responsive testing verifies that an application's layout and behavior work across different viewport sizes.",
    hindi: "Responsive Testing में अलग-अलग Screen Sizes पर Website का Layout और Functionality Check करते हैं।",
    example: "await page.setViewportSize({ width: 375, height: 812 });"
  },
  {
    category: "JavaScript",
    question: "What is API response body validation?",
    answer: "It verifies that an API response contains the expected data and structure.",
    hindi: "API Response Body Validation में Returned Data और उसकी Structure Verify करते हैं।",
    example: "const body = await response.json(); expect(body.name).toBe('Aman');"
  },
  {
    category: "JavaScript",
    question: "What is API response header validation?",
    answer: "It checks whether response headers contain expected values.",
    hindi: "API Response Headers में Expected Values हैं या नहीं, यह Check किया जाता है।",
    example: "expect(response.headers()['content-type']).toContain('application/json');"
  },
  {
    category: "JavaScript",
    question: "What is HTTP PUT?",
    answer: "PUT is an HTTP method commonly used to create or replace the state of a resource at a specified URI.",
    hindi: "PUT Method का उपयोग Resource की State Create या Replace करने के लिए किया जाता है।",
    example: "await request.put('/api/users/1', { data: { name: 'Aman' } });"
  },
  {
    category: "JavaScript",
    question: "What is HTTP PATCH?",
    answer: "PATCH is an HTTP method used to apply partial modifications to a resource.",
    hindi: "PATCH Method का उपयोग Resource में Partial Changes करने के लिए होता है।",
    example: "await request.patch('/api/users/1', { data: { name: 'QA' } });"
  },
  {
    category: "JavaScript",
    question: "What is HTTP DELETE?",
    answer: "DELETE is an HTTP method used to request removal of a specified resource.",
    hindi: "DELETE Method से Server पर मौजूद Resource हटाने की Request भेजते हैं।",
    example: "await request.delete('/api/users/1');"
  },
  {
    category: "JavaScript",
    question: "What does HTTP status code 201 mean?",
    answer: "HTTP 201 Created indicates that a request succeeded and created one or more resources.",
    hindi: "201 Status Code का मतलब है कि Request सफल हुई और नया Resource Create हुआ।",
    example: "expect(response.status()).toBe(201);"
  },
  {
    category: "JavaScript",
    question: "What does HTTP status code 400 mean?",
    answer: "HTTP 400 Bad Request indicates that the server cannot process the request because of a client-side request problem.",
    hindi: "400 Status Code बताता है कि Request में Client की तरफ से कोई समस्या है।",
    example: "expect(response.status()).toBe(400);"
  },
  {
    category: "JavaScript",
    question: "What does HTTP status code 401 mean?",
    answer: "HTTP 401 Unauthorized indicates that valid authentication credentials are required.",
    hindi: "401 का मतलब है कि Request के लिए सही Authentication Credentials जरूरी हैं।",
    example: "expect(response.status()).toBe(401);"
  },
  {
    category: "JavaScript",
    question: "What does HTTP status code 403 mean?",
    answer: "HTTP 403 Forbidden means the server understood the request but refuses to fulfill it.",
    hindi: "403 का मतलब है कि Server ने Request समझ ली, लेकिन उसे पूरा करने की अनुमति नहीं दे रहा।",
    example: "expect(response.status()).toBe(403);"
  },
  {
    category: "JavaScript",
    question: "What is an API endpoint?",
    answer: "An API endpoint is an address through which a client accesses a particular API resource or operation.",
    hindi: "API Endpoint वह Address होता है जहाँ Client API Request भेजता है।",
    example: "/api/users"
  },
  {
    category: "JavaScript",
    question: "What is a query parameter?",
    answer: "A query parameter is a key-value parameter included in the query portion of a URL.",
    hindi: "Query Parameter URL में अतिरिक्त जानकारी भेजने के लिए उपयोग होता है।",
    example: "/api/products?page=2"
  },
  {
    category: "JavaScript",
    question: "What is a path parameter?",
    answer: "A path parameter identifies a variable part of a URL path, often representing a specific resource.",
    hindi: "Path Parameter URL के Path में किसी Specific Resource को Identify करता है।",
    example: "/api/users/15"
  },
  {
    category: "JavaScript",
    question: "What is API authentication?",
    answer: "API authentication verifies the identity of a client making an API request.",
    hindi: "API Authentication यह Verify करता है कि Request भेजने वाला Client कौन है।",
    example: "headers: { Authorization: 'Bearer example-token' }"
  },
  {
    category: "JavaScript",
    question: "What is a Bearer Token?",
    answer: "A Bearer Token is an access credential that a client presents to access protected resources.",
    hindi: "Bearer Token एक Access Credential है जिसका उपयोग Protected API को Access करने में होता है।",
    example: "Authorization: Bearer <token>"
  },
  {
    category: "JavaScript",
    question: "What is API mocking in testing?",
    answer: "API mocking replaces a real API response with a controlled response for testing.",
    hindi: "API Mocking में Real API की जगह Controlled Response देकर Application Test करते हैं।",
    example: "await page.route('**/api/users', route => route.fulfill({ json: [] }));"
  },
  {
    category: "JavaScript",
    question: "What is network interception in Playwright?",
    answer: "Network interception allows tests to inspect, modify or mock matching network requests.",
    hindi: "Network Interception से Test के दौरान Network Requests को Monitor या Modify कर सकते हैं।",
    example: "await page.route('**/api/data', route => route.continue());"
  },
  {
    category: "JavaScript",
    question: "What is page.waitForResponse()?",
    answer: "page.waitForResponse() waits for a network response matching a specified condition.",
    hindi: "यह किसी Specific Network Response का Wait करने के लिए उपयोग होता है।",
    example: "const responsePromise = page.waitForResponse(r => r.url().includes('/api/users'));"
  },
  {
    category: "JavaScript",
    question: "What is page.evaluate()?",
    answer: "page.evaluate() executes JavaScript in the browser page context and returns its result.",
    hindi: "page.evaluate() Browser Page के Context में JavaScript Execute करता है।",
    example: "const title = await page.evaluate(() => document.title);"
  },
  {
    category: "JavaScript",
    question: "How do you reverse a string in JavaScript?",
    answer: "For a simple string, split it into an array, reverse the array and join it again.",
    hindi: "Simple String को Reverse करने के लिए split(), reverse() और join() उपयोग कर सकते हैं।",
    example: "'hello'.split('').reverse().join('');"
  },
  {
    category: "JavaScript",
    question: "How do you find the largest number in an array?",
    answer: "Use Math.max() with the spread operator for a suitable numeric array.",
    hindi: "Array में सबसे बड़ा Number निकालने के लिए Math.max() उपयोग कर सकते हैं।",
    example: "Math.max(...[10, 25, 5]);"
  },
  {
    category: "JavaScript",
    question: "How do you remove duplicate primitive values from an array?",
    answer: "Use a Set and convert it back into an array.",
    hindi: "Primitive Values के Duplicates हटाने के लिए Set उपयोग कर सकते हैं।",
    example: "[...new Set([1, 2, 2, 3, 3])];"
  },
  {
    category: "JavaScript",
    question: "How do you check whether a string is a palindrome?",
    answer: "A basic palindrome check compares a normalized string with its reversed version.",
    hindi: "Palindrome वह String है जो आगे और पीछे से समान पढ़ी जाती है।",
    example: "const s = 'madam'; const result = s === s.split('').reverse().join('');"
  },
  {
    category: "JavaScript",
    question: "How do you calculate factorial using JavaScript?",
    answer: "Factorial is the product of all positive integers up to a given non-negative integer.",
    hindi: "Factorial में दिए गए Non-Negative Number तक सभी Positive Integers को Multiply करते हैं।",
    example: "function factorial(n) { let result = 1; for (let i = 2; i <= n; i++) result *= i; return result; }"
  },
  {
    category: "JavaScript",
    question: "How do you count vowels in a string?",
    answer: "Use a regular expression to match vowel characters and count the matches.",
    hindi: "String में Vowels की संख्या निकालने के लिए Regular Expression उपयोग कर सकते हैं।",
    example: "const count = ('automation'.match(/[aeiou]/gi) || []).length;"
  },
  {
    category: "JavaScript",
    question: "How do you find the sum of numbers in an array?",
    answer: "Use reduce() to accumulate the numeric values.",
    hindi: "Array के सभी Numbers का Sum निकालने के लिए reduce() उपयोग कर सकते हैं।",
    example: "[10, 20, 30].reduce((sum, num) => sum + num, 0);"
  },
  {
    category: "JavaScript",
    question: "How do you check whether an array contains a value?",
    answer: "Use includes() to check whether an array contains a specified value.",
    hindi: "Array में कोई Value मौजूद है या नहीं, यह Check करने के लिए includes() उपयोग करते हैं।",
    example: "[10, 20, 30].includes(20);"
  },
  {
    category: "JavaScript",
    question: "What is console.log() used for?",
    answer: "console.log() outputs information to the console and is commonly used during debugging.",
    hindi: "console.log() का उपयोग Debugging के दौरान Values और Messages देखने के लिए होता है।",
    example: "console.log('Test started');"
  },
  {
    category: "JavaScript",
    question: "What is a breakpoint in JavaScript debugging?",
    answer: "A breakpoint pauses code execution at a selected location so developers can inspect program state.",
    hindi: "Breakpoint लगाकर Code Execution को किसी Line पर रोक सकते हैं और Variables Check कर सकते हैं।",
    example: "debugger;"
  },
  {
    category: "JavaScript",
    question: "What is the difference between syntax errors and runtime errors?",
    answer: "Syntax errors occur when code violates language grammar, while runtime errors occur during execution.",
    hindi: "Syntax Error गलत Code Structure से आती है, जबकि Runtime Error Code Execute होते समय आती है।",
    example: "Calling an undefined function can produce a runtime error."
  },
  {
    category: "JavaScript",
    question: "Why is reusable code important in test automation?",
    answer: "Reusable code reduces duplication and makes automated tests easier to maintain and update.",
    hindi: "Reusable Code से बार-बार एक जैसा Code लिखने की जरूरत कम होती है और Maintenance आसान होता है।",
    example: "async function login(page, username, password) { await page.locator('#username').fill(username); await page.locator('#password').fill(password); }"
  },
  {
    category: "JavaScript",
    question: "What is the difference between map() and forEach()?",
    answer: "map() creates a new array using the returned values, while forEach() executes a function for each element and returns undefined.",
    hindi: "map() नया Array बनाता है, जबकि forEach() हर Element पर Function चलाता है और नया Array Return नहीं करता।",
    example: "const result = [1, 2, 3].map(n => n * 2);"
  },
  {
    category: "JavaScript",
    question: "What is the find() method in JavaScript?",
    answer: "find() returns the first array element that satisfies a given condition, or undefined if none matches.",
    hindi: "find() Condition पूरी करने वाला पहला Element Return करता है।",
    example: "const result = [10, 20, 30].find(n => n > 15);"
  },
  {
    category: "JavaScript",
    question: "What is findIndex()?",
    answer: "findIndex() returns the index of the first matching array element, or -1 if none matches.",
    hindi: "findIndex() Condition पूरी करने वाले पहले Element का Index देता है।",
    example: "[10, 20, 30].findIndex(n => n > 15);"
  },
  {
    category: "JavaScript",
    question: "What is flat() in JavaScript?",
    answer: "flat() creates a new array with nested array elements flattened up to a specified depth.",
    hindi: "flat() Nested Array को दी गई Depth तक Flatten करता है।",
    example: "[1, [2, 3], [4]].flat();"
  },
  {
    category: "JavaScript",
    question: "What is flatMap()?",
    answer: "flatMap() maps each element and then flattens the resulting array by one level.",
    hindi: "flatMap() पहले Mapping करता है और फिर Result को एक Level Flatten करता है।",
    example: "[1, 2].flatMap(n => [n, n * 2]);"
  },
  {
    category: "JavaScript",
    question: "What is Array.from()?",
    answer: "Array.from() creates an array from an iterable or array-like object.",
    hindi: "Array.from() Iterable या Array-like Object को Array में Convert करता है।",
    example: "Array.from('QA');"
  },
  {
    category: "JavaScript",
    question: "What is Array.isArray()?",
    answer: "Array.isArray() checks whether a value is an array.",
    hindi: "Array.isArray() से Check करते हैं कि दी गई Value Array है या नहीं।",
    example: "Array.isArray([1, 2, 3]);"
  },
  {
    category: "JavaScript",
    question: "What is the difference between slice() and splice()?",
    answer: "slice() returns a selected portion without modifying the original array, while splice() can add, remove or replace elements in the original array.",
    hindi: "slice() Original Array नहीं बदलता, जबकि splice() Original Array में बदलाव कर सकता है।",
    example: "const a = [1, 2, 3]; a.slice(0, 2); a.splice(1, 1);"
  },
  {
    category: "JavaScript",
    question: "What is the indexOf() method?",
    answer: "indexOf() returns the first index of a specified value, or -1 if the value is not found.",
    hindi: "indexOf() किसी Value का पहला Index देता है। Value न मिलने पर -1 देता है।",
    example: "['QA', 'Dev', 'QA'].indexOf('QA');"
  },
  {
    category: "JavaScript",
    question: "What is the lastIndexOf() method?",
    answer: "lastIndexOf() returns the last index of a specified value, or -1 if it is not found.",
    hindi: "lastIndexOf() किसी Value का आखिरी Index Return करता है।",
    example: "['QA', 'Dev', 'QA'].lastIndexOf('QA');"
  },
  {
    category: "JavaScript",
    question: "What is a Regular Expression in JavaScript?",
    answer: "A Regular Expression is a pattern used to search, match or replace text.",
    hindi: "Regular Expression यानी Regex का उपयोग Text में Pattern Search या Match करने के लिए होता है।",
    example: "const pattern = /test/i;"
  },
  {
    category: "JavaScript",
    question: "What is the test() method in Regular Expressions?",
    answer: "The RegExp test() method checks whether a pattern matches a string and returns a Boolean.",
    hindi: "Regex का test() Method Check करता है कि String में Pattern Match होता है या नहीं।",
    example: "/qa/i.test('QA Automation');"
  },
  {
    category: "JavaScript",
    question: "What is the match() method in JavaScript?",
    answer: "String match() retrieves the result of matching a string against a Regular Expression.",
    hindi: "match() String में Regex से Match होने वाला Result देता है।",
    example: "'QA123'.match(/\\d+/);"
  },
  {
    category: "JavaScript",
    question: "What does the g flag mean in Regex?",
    answer: "The g flag enables global matching so a search can find multiple matches.",
    hindi: "Regex में g Flag का मतलब Global Matching है।",
    example: "'a1b2'.match(/\\d/g);"
  },
  {
    category: "JavaScript",
    question: "What does the i flag mean in Regex?",
    answer: "The i flag enables case-insensitive matching.",
    hindi: "i Flag लगाने से Capital और Small Letters का अंतर Ignore होता है।",
    example: "/javascript/i.test('JavaScript');"
  },
  {
    category: "JavaScript",
    question: "How do you validate a simple email format using JavaScript?",
    answer: "A Regular Expression can check a basic email pattern, although complete email validation may require additional checks.",
    hindi: "Basic Email Format Check करने के लिए Regex उपयोग कर सकते हैं।",
    example: "const valid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test('qa@example.com');"
  },
  {
    category: "JavaScript",
    question: "How do you capitalize the first letter of a string?",
    answer: "Use charAt(), toUpperCase() and slice() to capitalize the first character.",
    hindi: "String का पहला Letter Capital करने के लिए charAt(), toUpperCase() और slice() उपयोग कर सकते हैं।",
    example: "const s = 'automation'; const result = s.charAt(0).toUpperCase() + s.slice(1);"
  },
  {
    category: "JavaScript",
    question: "How do you swap two variables without a temporary variable?",
    answer: "Use array destructuring assignment to exchange their values.",
    hindi: "Destructuring की मदद से दो Variables की Values Swap कर सकते हैं।",
    example: "let a = 10, b = 20; [a, b] = [b, a];"
  },
  {
    category: "JavaScript",
    question: "How do you find even numbers in an array?",
    answer: "Use filter() with the remainder operator to select numbers divisible by two.",
    hindi: "Even Numbers निकालने के लिए filter() और Modulus Operator उपयोग कर सकते हैं।",
    example: "[1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0);"
  },
  {
    category: "JavaScript",
    question: "How do you find odd numbers in an array?",
    answer: "Use filter() to select numbers whose remainder when divided by two is not zero.",
    hindi: "Odd Numbers निकालने के लिए filter() उपयोग कर सकते हैं।",
    example: "[1, 2, 3, 4, 5].filter(n => n % 2 !== 0);"
  },
  {
    category: "JavaScript",
    question: "How do you find the second-largest distinct number in an array?",
    answer: "Remove duplicates, sort the numbers in descending order and select the second element.",
    hindi: "Duplicates हटाकर Numbers को Descending Order में Sort करें और दूसरा Number निकालें।",
    example: "const second = [...new Set([10, 30, 20, 30])].sort((a, b) => b - a)[1];"
  },
  {
    category: "JavaScript",
    question: "How do you count occurrences of values in an array?",
    answer: "Use reduce() to build an object that stores the frequency of each value.",
    hindi: "Array में हर Value कितनी बार आई है, यह Count करने के लिए reduce() उपयोग कर सकते हैं।",
    example: "const counts = ['a', 'b', 'a'].reduce((obj, x) => { obj[x] = (obj[x] || 0) + 1; return obj; }, {});"
  },
  {
    category: "JavaScript",
    question: "What is destructuring assignment?",
    answer: "Destructuring extracts values from arrays or properties from objects into variables.",
    hindi: "Destructuring से Array या Object की Values को आसानी से Variables में निकाल सकते हैं।",
    example: "const { name, age } = { name: 'Aman', age: 25 };"
  },
  {
    category: "JavaScript",
    question: "What is the spread operator in JavaScript?",
    answer: "Spread syntax expands an iterable into individual values or copies enumerable properties into an object.",
    hindi: "Spread Syntax (...) से Array या Object की Values को Expand किया जा सकता है।",
    example: "const combined = [...[1, 2], ...[3, 4]];"
  },
  {
    category: "JavaScript",
    question: "What is Object.assign()?",
    answer: "Object.assign() copies enumerable own properties from source objects to a target object.",
    hindi: "Object.assign() Source Object की Properties को Target Object में Copy करता है।",
    example: "const result = Object.assign({}, { name: 'QA' });"
  },
  {
    category: "JavaScript",
    question: "What is a Map object in JavaScript?",
    answer: "Map stores key-value pairs and allows keys of any JavaScript value.",
    hindi: "Map में Key-Value Pairs Store होते हैं और Keys अलग-अलग Data Types की हो सकती हैं।",
    example: "const map = new Map(); map.set('course', 'QA');"
  },
  {
    category: "JavaScript",
    question: "What is a Set object in JavaScript?",
    answer: "Set stores unique values using JavaScript's value equality rules.",
    hindi: "Set में Duplicate Primitive Values एक से अधिक बार Store नहीं होतीं।",
    example: "const unique = new Set([1, 2, 2, 3]);"
  },
  {
    category: "JavaScript",
    question: "What is a WeakMap?",
    answer: "WeakMap stores key-value pairs where keys must be objects or non-registered symbols and does not prevent eligible keys from being garbage-collected.",
    hindi: "WeakMap में विशेष प्रकार की Keys के साथ Data Store किया जाता है और यह Keys को Garbage Collection से नहीं रोकता।",
    example: "const wm = new WeakMap(); const key = {}; wm.set(key, 'data');"
  },
  {
    category: "JavaScript",
    question: "What is a Symbol in JavaScript?",
    answer: "Symbol is a primitive data type used to create unique identifiers.",
    hindi: "Symbol एक Primitive Data Type है जिससे Unique Identifiers बनाए जाते हैं।",
    example: "const id = Symbol('id');"
  },
  {
    category: "JavaScript",
    question: "What is BigInt in JavaScript?",
    answer: "BigInt represents integer values beyond the safe integer range of the Number type.",
    hindi: "BigInt का उपयोग बहुत बड़े Integer Numbers को Represent करने के लिए होता है।",
    example: "const big = 9007199254740993n;"
  },
  {
    category: "JavaScript",
    question: "What is debouncing in JavaScript?",
    answer: "Debouncing delays a function call until a specified period has passed without another triggering event.",
    hindi: "Debouncing में लगातार Events आने पर Function को तब चलाते हैं जब कुछ समय तक नया Event न आए।",
    example: "A search box can wait briefly after typing stops before searching."
  },
  {
    category: "JavaScript",
    question: "What is throttling in JavaScript?",
    answer: "Throttling limits how frequently a function can execute during repeated events.",
    hindi: "Throttling किसी Function को बार-बार Trigger होने पर भी सीमित Frequency से Execute करता है।",
    example: "A scroll handler can be limited to run at most once every 200 ms."
  },
  {
    category: "JavaScript",
    question: "What is memoization?",
    answer: "Memoization is an optimization technique that caches results of previous function calls for reuse.",
    hindi: "Memoization में पहले Calculate किए गए Results को Store करके दोबारा उपयोग किया जाता है।",
    example: "const cache = new Map();"
  },
  {
    category: "JavaScript",
    question: "What is a pure function?",
    answer: "A pure function produces the same output for the same inputs and has no observable side effects.",
    hindi: "Pure Function समान Input पर समान Output देता है और बाहरी State को नहीं बदलता।",
    example: "const add = (a, b) => a + b;"
  },
  {
    category: "JavaScript",
    question: "What is a higher-order function?",
    answer: "A higher-order function accepts another function as an argument or returns a function.",
    hindi: "Higher-Order Function किसी Function को Argument के रूप में लेता है या Function Return करता है।",
    example: "const double = numbers => numbers.map(n => n * 2);"
  },
  {
    category: "JavaScript",
    question: "What is currying in JavaScript?",
    answer: "Currying transforms a function with multiple arguments into a sequence of functions that each accept an argument.",
    hindi: "Currying में Multiple Arguments वाले Function को छोटे Functions की Chain में बदलते हैं।",
    example: "const add = a => b => a + b; add(5)(3);"
  },
  {
    category: "JavaScript",
    question: "What is a generator function?",
    answer: "A generator function can pause and resume execution using yield and returns a Generator object.",
    hindi: "Generator Function yield की मदद से Execution को Pause और Resume कर सकता है।",
    example: "function* numbers() { yield 1; yield 2; }"
  },
  {
    category: "JavaScript",
    question: "What is the yield keyword?",
    answer: "yield pauses a generator function and provides a value to its caller.",
    hindi: "yield Generator Function को Pause करके एक Value Return करने में मदद करता है।",
    example: "function* demo() { yield 'QA'; }"
  },
  {
    category: "JavaScript",
    question: "What is an iterator in JavaScript?",
    answer: "An iterator is an object with a next() method that returns iteration results.",
    hindi: "Iterator एक Object है जो next() Method से क्रमवार Values उपलब्ध कराता है।",
    example: "const iterator = [10, 20][Symbol.iterator](); iterator.next();"
  },
  {
    category: "JavaScript",
    question: "What is optional catch binding?",
    answer: "Optional catch binding allows a catch block to omit the error parameter when it is not needed.",
    hindi: "जब Error Object की जरूरत न हो, तब catch के साथ Parameter लिखना जरूरी नहीं है।",
    example: "try { JSON.parse('invalid'); } catch { console.log('Invalid JSON'); }"
  },
  {
    category: "JavaScript",
    question: "What is a custom Error in JavaScript?",
    answer: "A custom Error is an error object or subclass created to represent an application-specific failure.",
    hindi: "Custom Error से Application की किसी Specific Problem को स्पष्ट तरीके से Represent कर सकते हैं।",
    example: "class ValidationError extends Error {}"
  },
  {
    category: "JavaScript",
    question: "What is the difference between == and ===?",
    answer: "== compares values with type coercion, while === compares without type coercion.",
    hindi: "== Comparison में Type Conversion हो सकता है, जबकि === Type Conversion नहीं करता।",
    example: "5 == '5'; // true | 5 === '5'; // false"
  },
  {
    category: "JavaScript",
    question: "What is the difference between let, const and var?",
    answer: "let and const are block-scoped, while var is function-scoped. const prevents reassignment of its binding.",
    hindi: "let और const Block-Scoped होते हैं, जबकि var Function-Scoped होता है। const Variable को Reassign नहीं कर सकते।",
    example: "let count = 1; const course = 'QA'; var status = 'active';"
  },
  {
    category: "JavaScript",
    question: "What is the Temporal Dead Zone?",
    answer: "The Temporal Dead Zone is the period from entering a scope until a let or const binding is initialized, during which accessing it throws a ReferenceError.",
    hindi: "let या const Variable Initialize होने से पहले उसे Access करने पर ReferenceError आता है। इस अवधि को Temporal Dead Zone कहते हैं।",
    example: "// console.log(a); // ReferenceError\nlet a = 10;"
  },
  {
    category: "JavaScript",
    question: "What is the difference between null and NaN?",
    answer: "null represents an intentional absence of a value, while NaN is a numeric value indicating an invalid or unrepresentable numeric result.",
    hindi: "null जानबूझकर Value न होने को दर्शाता है, जबकि NaN Invalid Numeric Result को दर्शाता है।",
    example: "const a = null; const b = Number('hello');"
  },
  {
    category: "JavaScript",
    question: "What is Number.isNaN()?",
    answer: "Number.isNaN() checks whether a value is the numeric NaN value without converting its type.",
    hindi: "Number.isNaN() बिना Type Conversion किए Check करता है कि Value वास्तव में NaN है या नहीं।",
    example: "Number.isNaN(Number('abc'));"
  },
  {
    category: "JavaScript",
    question: "What is Number.isInteger()?",
    answer: "Number.isInteger() determines whether a value is a Number that represents an integer.",
    hindi: "Number.isInteger() Check करता है कि दी गई Number Value Integer है या नहीं।",
    example: "Number.isInteger(10);"
  },
  {
    category: "JavaScript",
    question: "What is encodeURIComponent()?",
    answer: "encodeURIComponent() encodes a string for safe use as an individual URI component.",
    hindi: "encodeURIComponent() URL के किसी Individual Component में Special Characters Encode करता है।",
    example: "encodeURIComponent('QA Automation & Testing');"
  },
  {
    category: "JavaScript",
    question: "What is decodeURIComponent()?",
    answer: "decodeURIComponent() decodes a URI component previously encoded with percent-encoding.",
    hindi: "decodeURIComponent() Encoded URI Component को वापस Readable String में बदलता है।",
    example: "decodeURIComponent('QA%20Automation');"
  },
  {
    category: "JavaScript",
    question: "What is the difference between console.log() and console.error()?",
    answer: "console.log() outputs general information, while console.error() outputs error messages.",
    hindi: "console.log() सामान्य Messages के लिए और console.error() Errors दिखाने के लिए उपयोग होता है।",
    example: "console.log('Test started'); console.error('Test failed');"
  }
];