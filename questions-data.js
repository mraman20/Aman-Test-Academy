/* Aman QA Academy
   Manual Testing - Chapter 1
   Software Testing Fundamentals
*/

const chapter1Questions = [
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "What is Software Testing?",
        answer: "Software Testing is the process of verifying and validating software to check whether it meets specified requirements and works as expected.",
        hindi: "Software Testing में हम जाँचते हैं कि Software Requirements के अनुसार सही काम कर रहा है या नहीं।",
        example: "Check whether a user can log in with valid credentials."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "Why is Software Testing important?",
        answer: "Software Testing helps identify defects, improve product quality, reduce risks and build confidence in the application.",
        hindi: "Testing से Bugs जल्दी मिलते हैं, Quality बेहतर होती है और Users को कम Problems आती हैं।",
        example: "Testing a payment page before release can identify transaction-related defects."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "What is the difference between Verification and Validation?",
        answer: "Verification checks whether work products meet specifications. Validation checks whether the final product meets user needs.",
        hindi: "Verification में Documents और Design जैसी चीजें जाँचते हैं। Validation में देखते हैं कि बना हुआ Product User की जरूरत पूरी करता है या नहीं।",
        example: "Reviewing a requirement document is Verification; testing the working login page is Validation."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "What is a Bug?",
        answer: "A Bug is a defect in software that causes incorrect or unexpected behavior.",
        hindi: "जब Software Expected Result के अनुसार काम नहीं करता, तो उसे Bug या Defect कहते हैं।",
        example: "The Login button does nothing even after valid credentials are entered."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "What is the difference between Error, Defect and Failure?",
        answer: "An Error is a human mistake. A Defect is a flaw in a work product. A Failure occurs when software does not perform a required function during execution.",
        hindi: "Error इंसान की गलती है, Defect Software या Document में कमी है और Failure तब होता है जब चलते समय System गलत व्यवहार करता है।",
        example: "A developer writes an incorrect condition, creating a defect that causes login failure."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "What is Quality Assurance (QA)?",
        answer: "Quality Assurance focuses on improving processes to help prevent defects and ensure quality standards are followed.",
        hindi: "QA का मुख्य ध्यान Process बेहतर बनाने और Defects को रोकने पर होता है।",
        example: "Defining coding standards and review processes."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "What is Quality Control (QC)?",
        answer: "Quality Control focuses on evaluating work products to identify defects and verify that quality requirements are met.",
        hindi: "QC में बने हुए Product को जाँचकर Defects खोजते हैं।",
        example: "Executing test cases against a completed feature."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "What is Manual Testing?",
        answer: "Manual Testing is the process of executing test activities through human interaction without using automation scripts to perform the test steps.",
        hindi: "Manual Testing में Tester खुद Application पर Steps Perform करके Actual और Expected Results Compare करता है।",
        example: "Manually entering data into a registration form and checking the result."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "What is Automation Testing?",
        answer: "Automation Testing uses tools and scripts to execute tests and compare actual outcomes with expected results.",
        hindi: "Automation Testing में Scripts और Tools की मदद से Tests Automatically चलाए जाते हैं।",
        example: "Using Playwright to test a login flow."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "What is the difference between Manual and Automation Testing?",
        answer: "Manual Testing relies on human execution, while Automation Testing uses scripts and tools. Both approaches are useful depending on the testing objective.",
        hindi: "Manual Testing में Tester खुद Steps करता है। Automation में Script Steps चलाती है। दोनों की अपनी उपयोगिता है।",
        example: "Exploratory testing may be manual, while repeated regression checks may be automated."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "What is a Test Scenario?",
        answer: "A Test Scenario describes a high-level functionality or situation that needs to be tested.",
        hindi: "Test Scenario बताता है कि किस Feature या Situation को Test करना है।",
        example: "Verify the Login functionality."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "What is a Test Case?",
        answer: "A Test Case contains test conditions, inputs, steps and expected results used to verify a specific behavior.",
        hindi: "Test Case में Test करने के Steps, Input और Expected Result लिखते हैं।",
        example: "Enter valid credentials, click Login and verify that the Dashboard opens."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "What is Test Data?",
        answer: "Test Data is the input information used while executing test cases.",
        hindi: "Testing के दौरान इस्तेमाल होने वाले Input को Test Data कहते हैं।",
        example: "A sample email address and password used for login testing."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "What is an Expected Result?",
        answer: "An Expected Result describes the behavior that should occur when a test is executed.",
        hindi: "Expected Result वह Output है जो Requirement के अनुसार मिलना चाहिए।",
        example: "After successful login, the Dashboard should appear."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 1: Fundamentals",
        question: "What is an Actual Result?",
        answer: "An Actual Result is the behavior observed when a test is executed.",
        hindi: "Test चलाने के बाद वास्तव में जो Output मिलता है, वह Actual Result है।",
        example: "After clicking Login, an error message appears."
    }
];
/* Manual Testing - Chapter 2: SDLC */

const chapter2Questions = [
    {
        category: "Manual Testing",
        chapter: "Chapter 2: SDLC",
        question: "What is SDLC?",
        answer: "SDLC stands for Software Development Life Cycle. It is a structured process used to plan, design, develop, test, deploy and maintain software.",
        hindi: "SDLC एक प्रक्रिया है जिसके अनुसार Software को Plan करने से लेकर Develop, Test और Maintain करने तक का काम होता है।",
        example: "Developing an online shopping application by following defined development phases."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 2: SDLC",
        question: "What are the main phases of SDLC?",
        answer: "Common SDLC phases include requirement analysis, planning, design, development, testing, deployment and maintenance.",
        hindi: "SDLC के मुख्य चरण Requirement Analysis, Planning, Design, Development, Testing, Deployment और Maintenance हैं।",
        example: "First gather login requirements, then design, develop, test and release the login feature."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 2: SDLC",
        question: "What is the Waterfall Model?",
        answer: "The Waterfall Model is a sequential development approach in which project activities progress through defined phases.",
        hindi: "Waterfall Model में Development का काम एक निश्चित क्रम में आगे बढ़ता है।",
        example: "A project with stable and clearly documented requirements."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 2: SDLC",
        question: "What is the V-Model?",
        answer: "The V-Model is a development model that associates development activities with corresponding testing activities.",
        hindi: "V-Model में Development के अलग-अलग चरणों के साथ उनसे संबंधित Testing Activities की Planning की जाती है।",
        example: "System requirements are associated with system testing."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 2: SDLC",
        question: "What is Agile?",
        answer: "Agile is an iterative and incremental approach that emphasizes collaboration, feedback and adapting to change.",
        hindi: "Agile में Software छोटे-छोटे हिस्सों में बनाया जाता है और Feedback के अनुसार सुधार किया जाता है।",
        example: "A team delivers a small set of features during each Sprint."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 2: SDLC",
        question: "What is a Sprint?",
        answer: "In Scrum, a Sprint is a fixed-length event during which the team works toward a Sprint Goal and creates a usable Increment.",
        hindi: "Scrum में Sprint एक निश्चित समय की अवधि होती है जिसमें Team अपने तय Goal पर काम करती है।",
        example: "A two-week Sprint focused on completing the registration feature."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 2: SDLC",
        question: "What is the role of a QA Tester in SDLC?",
        answer: "A QA Tester helps review requirements, identify risks, design and execute tests, report defects and provide feedback on product quality.",
        hindi: "QA Tester Requirements समझता है, Test Cases बनाता है, Testing करता है और Bugs Report करता है।",
        example: "Reviewing login requirements before development and testing the completed feature."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 2: SDLC",
        question: "What is the difference between SDLC and STLC?",
        answer: "SDLC covers the overall software development process, while STLC focuses specifically on software testing activities.",
        hindi: "SDLC पूरे Software Development की प्रक्रिया है, जबकि STLC केवल Testing से जुड़ी प्रक्रिया है।",
        example: "SDLC includes coding and deployment; STLC includes test planning and test execution."
    }
];
/* Manual Testing - Chapter 3: STLC */

const chapter3Questions = [
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What is STLC?",
        answer: "STLC stands for Software Testing Life Cycle. It is a structured sequence of activities performed during the software testing process.",
        hindi: "STLC एक प्रक्रिया है जिसमें Testing के सभी काम एक निर्धारित क्रम में किए जाते हैं।",
        example: "A QA team analyzes requirements, prepares test cases, executes tests and closes testing activities."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What are the main phases of STLC?",
        answer: "Common STLC phases include Requirement Analysis, Test Planning, Test Case Development, Test Environment Setup, Test Execution and Test Cycle Closure.",
        hindi: "STLC के मुख्य Phases हैं: Requirement Analysis, Test Planning, Test Case Development, Environment Setup, Test Execution और Test Closure।",
        example: "A tester first understands login requirements, writes test cases and then executes them."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What is Requirement Analysis in STLC?",
        answer: "Requirement Analysis is the phase in which testers study requirements to identify testable conditions, clarify doubts and understand testing needs.",
        hindi: "इस Phase में Tester Requirements पढ़कर समझता है कि क्या-क्या Test करना है।",
        example: "Checking whether the login requirement defines behavior for incorrect passwords."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What is Test Planning?",
        answer: "Test Planning defines the testing scope, objectives, approach, resources, schedule, risks and deliverables.",
        hindi: "Test Planning में तय करते हैं कि क्या Test करना है, कैसे करना है, कौन करेगा और कितना समय लगेगा।",
        example: "Preparing a plan for testing an e-commerce website."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What is a Test Plan?",
        answer: "A Test Plan is a document describing the objectives, scope, approach, resources and schedule of testing activities.",
        hindi: "Test Plan एक Document है जिसमें पूरी Testing की Planning लिखी होती है।",
        example: "A plan defining the scope and schedule for checkout testing."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What is Test Case Development?",
        answer: "Test Case Development involves designing and reviewing test cases, preparing test data and defining expected results.",
        hindi: "इस Phase में Tester Test Cases, Test Data और Expected Results तैयार करता है।",
        example: "Writing positive and negative test cases for a registration form."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What is Test Environment Setup?",
        answer: "Test Environment Setup involves preparing the hardware, software, configurations, accounts and other resources needed for testing.",
        hindi: "Testing करने के लिए जरूरी Browser, Application, Database, Accounts और दूसरी चीजें तैयार करना Environment Setup है।",
        example: "Setting up a test server and test user accounts."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What is Test Execution?",
        answer: "Test Execution is the activity of running test cases, comparing actual results with expected results and recording outcomes.",
        hindi: "Test Execution में Test Cases चलाकर Actual और Expected Results की तुलना करते हैं।",
        example: "Executing login test cases and marking them Pass or Fail."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What are Entry Criteria?",
        answer: "Entry Criteria are conditions that should be satisfied before starting a particular testing activity or phase.",
        hindi: "किसी Testing Phase को शुरू करने से पहले पूरी होने वाली Conditions को Entry Criteria कहते हैं।",
        example: "The test environment is available and required test data is ready."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What are Exit Criteria?",
        answer: "Exit Criteria are conditions used to determine whether a testing activity or phase can be completed.",
        hindi: "किसी Testing Phase को पूरा मानने के लिए तय की गई Conditions को Exit Criteria कहते हैं।",
        example: "Required test coverage is achieved and remaining risks are reviewed."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What is Defect Reporting?",
        answer: "Defect Reporting is the process of documenting and communicating identified defects to the relevant team members.",
        hindi: "Testing में मिलने वाले Bugs को सही जानकारी के साथ Report करना Defect Reporting है।",
        example: "Reporting a failed login with reproduction steps and expected results."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What is Test Cycle Closure?",
        answer: "Test Cycle Closure involves evaluating testing outcomes, preparing summaries, reviewing lessons learned and completing testing deliverables.",
        hindi: "Testing खत्म होने पर Results, Reports और सीखी गई बातों की समीक्षा करना Test Closure है।",
        example: "Preparing a final test summary report before release."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What is a Test Summary Report?",
        answer: "A Test Summary Report presents the results of testing, including execution status, defect information, coverage and remaining risks.",
        hindi: "Test Summary Report में पूरी Testing का Result, Pass-Fail Status और बाकी Risks लिखे जाते हैं।",
        example: "A report showing 90 passed tests, 5 failed tests and 5 blocked tests."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What is a Requirement Traceability Matrix (RTM)?",
        answer: "An RTM maps requirements to related test cases to help track test coverage.",
        hindi: "RTM से पता चलता है कि कौन-सी Requirement के लिए कौन-से Test Cases बनाए गए हैं।",
        example: "Requirement LOGIN-01 is mapped to test cases TC-01, TC-02 and TC-03."
    },
    {
        category: "Manual Testing",
        chapter: "Chapter 3: STLC",
        question: "What is the difference between Test Planning and Test Execution?",
        answer: "Test Planning defines how testing will be performed, while Test Execution involves performing tests and recording their results.",
        hindi: "Test Planning में Testing की योजना बनती है, जबकि Test Execution में वास्तव में Tests चलाए जाते हैं।",
        example: "Planning 50 login tests versus running those 50 tests and recording results."
    }
];
// Chapter 4: Test Case Design & Test Scenarios

const chapter4Questions = [
  {
    category: "Manual Testing",
    question: "What is a Test Scenario?",
    answer: "A Test Scenario describes what functionality needs to be tested.",
    hindi: "Test Scenario बताता है कि हमें Application की कौन-सी Functionality Test करनी है।",
    example: "Verify the Login functionality."
  },
  {
    category: "Manual Testing",
    question: "What is a Test Case?",
    answer: "A Test Case contains steps, test data, expected results, and actual results used to verify a functionality.",
    hindi: "Test Case में किसी Functionality को Check करने के लिए Steps, Test Data और Expected Result लिखे जाते हैं।",
    example: "Enter a valid username and password, click Login, and verify that the dashboard opens."
  },
  {
    category: "Manual Testing",
    question: "What is the difference between Test Scenario and Test Case?",
    answer: "A Test Scenario explains what to test, while a Test Case explains how to test it.",
    hindi: "Test Scenario बताता है क्या Test करना है, जबकि Test Case बताता है कि उसे कैसे Test करना है।",
    example: "Scenario: Verify Login. Test Case: Verify Login using valid credentials."
  }
,
{
  category: "Manual Testing",
  question: "What is Positive Testing?",
  answer: "Positive Testing verifies whether an application works correctly with valid input data.",
  hindi: "Positive Testing में हम सही Data देकर Check करते हैं कि Application सही काम कर रही है या नहीं।",
  example: "Login using a valid username and password."
},
{
  category: "Manual Testing",
  question: "What is Negative Testing?",
  answer: "Negative Testing verifies how an application behaves when invalid or unexpected input is provided.",
  hindi: "Negative Testing में गलत Data देकर Application का Behavior Check किया जाता है।",
  example: "Try logging in using an incorrect password."
},
{
  category: "Manual Testing",
  question: "What is Test Data?",
  answer: "Test Data is the input information used to execute test cases.",
  hindi: "Test Data वह जानकारी होती है जिसे Test Case Execute करते समय इस्तेमाल करते हैं।",
  example: "Username: testuser and Password: Test@123."
},
{
  category: "Manual Testing",
  question: "What are Test Steps?",
  answer: "Test Steps are sequential instructions followed to execute a test case.",
  hindi: "Test Steps वे Instructions हैं जिनकी मदद से हम Test Case Execute करते हैं।",
  example: "Open Login Page, enter credentials, and click Login."
},
{
  category: "Manual Testing",
  question: "What is an Expected Result?",
  answer: "An Expected Result describes how the application should behave after executing test steps.",
  hindi: "Expected Result बताता है कि Test Steps Execute करने के बाद Application में क्या होना चाहिए।",
  example: "The user should successfully navigate to the dashboard."
},
{
  category: "Manual Testing",
  question: "What is an Actual Result?",
  answer: "An Actual Result describes the behavior observed during test execution.",
  hindi: "Actual Result वह होता है जो Test Execute करने पर वास्तव में दिखाई देता है।",
  example: "The application displays an invalid password message."
},
{
  category: "Manual Testing",
  question: "What is Test Case Execution?",
  answer: "Test Case Execution is the process of running test steps and comparing actual results with expected results.",
  hindi: "Test Case Execution में Steps Follow करके Actual और Expected Result को Compare करते हैं।",
  example: "Execute a Login Test Case and verify the displayed result."
},
{
  category: "Manual Testing",
  question: "What is Test Case Status?",
  answer: "Test Case Status indicates the current execution result of a test case.",
  hindi: "Test Case Status बताता है कि Test Case का Result क्या है।",
  example: "Pass, Fail, Blocked, or Not Run."
},
{
  category: "Manual Testing",
  question: "What is a Passed Test Case?",
  answer: "A test case is marked as Passed when the actual result matches the expected result.",
  hindi: "जब Actual Result और Expected Result एक जैसे होते हैं, तब Test Case Pass होता है।",
  example: "Login succeeds using valid credentials."
},
{
  category: "Manual Testing",
  question: "What is a Failed Test Case?",
  answer: "A test case is marked as Failed when the actual result does not match the expected result.",
  hindi: "जब Actual Result, Expected Result से अलग होता है, तब Test Case Fail होता है।",
  example: "A user cannot log in despite entering valid credentials."
},
{
  category: "Manual Testing",
  question: "What is a Blocked Test Case?",
  answer: "A Blocked Test Case cannot be executed because of an issue or unmet dependency.",
  hindi: "जब किसी समस्या या Dependency की वजह से Test Case Execute नहीं हो पाता, तब उसे Blocked कहते हैं।",
  example: "Login Testing is blocked because the Login Page is unavailable."
},
{
  category: "Manual Testing",
  question: "What is Boundary Value Analysis?",
  answer: "Boundary Value Analysis is a test design technique that checks values at and around input boundaries.",
  hindi: "इस Technique में Input की Minimum और Maximum Limit के आसपास की Values Test की जाती हैं।",
  example: "For an allowed age range of 18 to 60, test 17, 18, 19, 59, 60, and 61."
},
{
  category: "Manual Testing",
  question: "What is Equivalence Partitioning?",
  answer: "Equivalence Partitioning divides input data into groups expected to behave similarly, allowing representative values to be tested.",
  hindi: "इस Technique में Input Data को समान Behavior वाले Groups में बाँटकर हर Group से कुछ Values Test करते हैं।",
  example: "For an age field accepting 18 to 60, test a value below 18, one within the range, and one above 60."
},
{
  category: "Manual Testing",
  question: "What is Decision Table Testing?",
  answer: "Decision Table Testing verifies system behavior for different combinations of conditions and actions.",
  hindi: "इस Technique में अलग-अलग Conditions के Combination के आधार पर Application का Result Check करते हैं।",
  example: "Check Login behavior for combinations of valid and invalid username and password."
},
{
  category: "Manual Testing",
  question: "What is State Transition Testing?",
  answer: "State Transition Testing verifies how an application changes from one state to another after an event.",
  hindi: "इसमें Check करते हैं कि किसी Event के बाद Application एक State से दूसरी State में सही तरीके से जाती है या नहीं।",
  example: "An account becomes locked after the configured number of failed Login attempts."
},
{
  category: "Manual Testing",
  question: "What is Error Guessing?",
  answer: "Error Guessing is a testing technique in which testers use experience and knowledge to identify likely defects.",
  hindi: "इसमें Tester अपने Experience के आधार पर अनुमान लगाता है कि कहाँ Bug मिल सकता है।",
  example: "Try submitting an empty Registration Form."
},
{
  category: "Manual Testing",
  question: "What is a Test Case ID?",
  answer: "A Test Case ID is a unique identifier assigned to a test case for tracking and management.",
  hindi: "Test Case ID एक Unique Number या Code होता है जिससे Test Case की पहचान होती है।",
  example: "TC_LOGIN_001."
},
{
  category: "Manual Testing",
  question: "What is Test Case Priority?",
  answer: "Test Case Priority indicates the importance or urgency of executing a test case.",
  hindi: "Test Case Priority बताती है कि कौन-सा Test Case पहले Execute करना ज्यादा जरूरी है।",
  example: "Login and Payment Test Cases may have High Priority."
},
{
  category: "Manual Testing",
  question: "What is a Test Case Precondition?",
  answer: "A Precondition is a requirement that must be satisfied before executing a test case.",
  hindi: "Precondition वह शर्त होती है जिसे Test Case Execute करने से पहले पूरा होना चाहिए।",
  example: "The user must have an active account before testing Login."
},
{
  category: "Manual Testing",
  question: "What is a Test Case Postcondition?",
  answer: "A Postcondition describes the expected state of the application after a test case is executed.",
  hindi: "Postcondition बताती है कि Test Case Execute होने के बाद Application की स्थिति क्या होनी चाहिए।",
  example: "After successful Logout, the user should return to the Login Page."
},
{
  category: "Manual Testing",
  question: "What is Test Coverage?",
  answer: "Test Coverage measures how much of the defined requirements or functionality is covered by tests.",
  hindi: "Test Coverage से पता चलता है कि कितनी Requirements या Functionality के लिए Tests बनाए गए हैं।",
  example: "Creating Test Cases for all defined Login Requirements."
},
{
  category: "Manual Testing",
  question: "What is Test Case Review?",
  answer: "Test Case Review is the process of examining test cases to identify mistakes, missing scenarios, and opportunities for improvement.",
  hindi: "Test Case Review में लिखे हुए Test Cases को Check करते हैं ताकि गलतियाँ और छूटे हुए Scenarios पता चल सकें।",
  example: "A senior tester reviews Login Test Cases before execution."
},
{
  category: "Manual Testing",
  question: "What is Test Case Reusability?",
  answer: "Test Case Reusability means designing test cases that can be used again in different testing cycles when applicable.",
  hindi: "Test Case Reusability का मतलब है कि जरूरत पड़ने पर एक Test Case को दोबारा इस्तेमाल किया जा सके।",
  example: "Using the same Login Test Case during multiple regression testing cycles."
},
{
  category: "Manual Testing",
  question: "What is a Test Suite?",
  answer: "A Test Suite is a collection of related test cases grouped for execution or management.",
  hindi: "Test Suite संबंधित Test Cases का एक Group होता है।",
  example: "A Login Test Suite containing valid Login, invalid Login, and Forgot Password Test Cases."
},
{
  category: "Manual Testing",
  question: "What is a Test Execution Report?",
  answer: "A Test Execution Report summarizes test execution results, including passed, failed, blocked, and pending tests.",
  hindi: "Test Execution Report में Test Cases के Results और Testing की Progress दिखाई जाती है।",
  example: "Out of 100 Test Cases, 80 Passed, 15 Failed, and 5 were Blocked."
}
];
// Chapter 5: Bug Life Cycle & Defect Management

const chapter5Questions = [
  {
    category: "Manual Testing",
    question: "What is a Bug?",
    answer: "A Bug is a defect in software that causes the application to behave differently from the expected result.",
    hindi: "जब Software उम्मीद के अनुसार काम नहीं करता, तो उस समस्या को Bug कहते हैं।",
    example: "Clicking the Login button does not log in a user with valid credentials."
  },
  {
    category: "Manual Testing",
    question: "What is Defect Management?",
    answer: "Defect Management is the process of identifying, reporting, tracking, fixing, and closing software defects.",
    hindi: "Defect Management में Bugs को ढूँढना, Report करना, Track करना, Fix करना और Close करना शामिल है।",
    example: "Reporting a Login Bug and tracking it until the developer fixes it."
  },
  {
    category: "Manual Testing",
    question: "What is the Bug Life Cycle?",
    answer: "The Bug Life Cycle describes the different stages a defect goes through from identification to closure.",
    hindi: "Bug मिलने से लेकर उसके Close होने तक की अलग-अलग Stages को Bug Life Cycle कहते हैं।",
    example: "New → Assigned → Open → Fixed → Retest → Closed."
  },
  {
    category: "Manual Testing",
    question: "What is Bug Severity?",
    answer: "Severity indicates how seriously a defect affects the functionality of an application.",
    hindi: "Severity बताती है कि Bug का Application की Functionality पर कितना गंभीर असर पड़ रहा है।",
    example: "The application crashes when a user clicks the Payment button."
  },
  {
    category: "Manual Testing",
    question: "What is Bug Priority?",
    answer: "Priority indicates how urgently a defect should be fixed.",
    hindi: "Priority बताती है कि किसी Bug को कितनी जल्दी Fix करना जरूरी है।",
    example: "A spelling mistake on the homepage may receive high priority before a major product launch."
  }
,
{
  category: "Manual Testing",
  question: "What is a Defect Report?",
  answer: "A Defect Report is a document containing information about an identified software defect.",
  hindi: "Defect Report में मिले हुए Bug की पूरी जानकारी लिखी जाती है।",
  example: "A report containing Bug ID, Summary, Steps to Reproduce, Expected Result, and Actual Result."
},
{
  category: "Manual Testing",
  question: "What is a Bug ID?",
  answer: "A Bug ID is a unique identifier assigned to a defect for tracking.",
  hindi: "Bug ID एक Unique Number होता है जिससे किसी Bug को Track किया जाता है।",
  example: "BUG-101."
},
{
  category: "Manual Testing",
  question: "What is a Bug Summary?",
  answer: "A Bug Summary is a short description of a defect.",
  hindi: "Bug Summary में Bug की समस्या को कम शब्दों में बताया जाता है।",
  example: "Login button does not respond after entering valid credentials."
},
{
  category: "Manual Testing",
  question: "What are Steps to Reproduce?",
  answer: "Steps to Reproduce are instructions that help another person observe the reported defect.",
  hindi: "ये वे Steps हैं जिन्हें Follow करके दूसरा व्यक्ति भी उसी Bug को देख सकता है।",
  example: "Open Login Page, enter valid credentials, and click Login."
},
{
  category: "Manual Testing",
  question: "What is a New Bug Status?",
  answer: "New indicates that a defect has been reported and is awaiting initial review.",
  hindi: "New Status का मतलब है कि Bug Report किया गया है और अभी उसकी शुरुआती जाँच बाकी है।",
  example: "A tester reports a Login issue for the first time."
},
{
  category: "Manual Testing",
  question: "What is an Assigned Bug?",
  answer: "An Assigned Bug is a defect allocated to a team member for investigation or resolution.",
  hindi: "जब Bug किसी Developer या Team Member को दिया जाता है, तो उसे Assigned कहते हैं।",
  example: "A Login Bug is assigned to a developer."
},
{
  category: "Manual Testing",
  question: "What is an Open Bug?",
  answer: "An Open Bug is a defect that has been accepted and is awaiting or undergoing resolution.",
  hindi: "Open Bug वह होता है जिसे स्वीकार कर लिया गया है और जिस पर काम होना बाकी है या चल रहा है।",
  example: "A developer starts investigating the Login issue."
},
{
  category: "Manual Testing",
  question: "What is a Fixed Bug?",
  answer: "A Fixed Bug is a defect for which the developer has implemented a correction.",
  hindi: "जब Developer Bug को ठीक कर देता है, तो उसका Status Fixed किया जा सकता है।",
  example: "The developer corrects the Login button functionality."
},
{
  category: "Manual Testing",
  question: "What is Bug Retesting?",
  answer: "Bug Retesting verifies whether a previously reported defect has been fixed successfully.",
  hindi: "Bug Retesting में Tester दोबारा Check करता है कि Report किया गया Bug ठीक हुआ या नहीं।",
  example: "Testing the Login button again after the developer fixes it."
},
{
  category: "Manual Testing",
  question: "What is a Closed Bug?",
  answer: "A Closed Bug is a defect that has completed the required verification and closure process.",
  hindi: "जब Bug Fix होने के बाद Verify हो जाता है, तो उसे Closed किया जाता है।",
  example: "The tester verifies the Login fix and closes the Bug."
},
{
  category: "Manual Testing",
  question: "What is a Reopened Bug?",
  answer: "A Reopened Bug is a previously resolved defect that still exists or appears again during verification.",
  hindi: "जब Fixed बताया गया Bug दोबारा Testing में मिलता है, तो उसे Reopen किया जाता है।",
  example: "The Login button still fails after the developer reports it as fixed."
},
{
  category: "Manual Testing",
  question: "What is a Rejected Bug?",
  answer: "A Rejected Bug is a reported issue that is not accepted as a valid defect.",
  hindi: "जब Report की गई समस्या को Valid Bug नहीं माना जाता, तो उसे Rejected किया जा सकता है।",
  example: "A reported behavior matches the approved requirement."
},
{
  category: "Manual Testing",
  question: "What is a Duplicate Bug?",
  answer: "A Duplicate Bug is a defect that has already been reported in another existing defect record.",
  hindi: "जब एक ही Bug पहले से Report किया जा चुका हो, तो नई Report को Duplicate कहा जाता है।",
  example: "Two testers report the same Login button issue."
},
{
  category: "Manual Testing",
  question: "What is a Deferred Bug?",
  answer: "A Deferred Bug is a defect whose resolution is postponed to a later release or development cycle.",
  hindi: "जब किसी Bug को अभी Fix करने के बजाय अगले Release के लिए टाल दिया जाता है, तो उसे Deferred कहते हैं।",
  example: "A minor alignment issue is scheduled for the next release."
},
{
  category: "Manual Testing",
  question: "What is a Cannot Reproduce Bug?",
  answer: "Cannot Reproduce indicates that the reported defect could not be observed using the available information and environment.",
  hindi: "जब दिए गए Steps Follow करने पर भी Bug दोबारा नहीं मिलता, तो उसे Cannot Reproduce कहा जा सकता है।",
  example: "The developer cannot observe the reported Login issue."
},
{
  category: "Manual Testing",
  question: "What is the difference between Severity and Priority?",
  answer: "Severity describes the impact of a defect, while Priority describes how urgently it should be fixed.",
  hindi: "Severity Bug के असर को बताती है, जबकि Priority बताती है कि उसे कितनी जल्दी ठीक करना है।",
  example: "A homepage spelling mistake may have low severity but high priority before launch."
},
{
  category: "Manual Testing",
  question: "What is a Critical Bug?",
  answer: "A Critical Bug seriously affects an essential application function or makes a major workflow unusable.",
  hindi: "Critical Bug Application की किसी बहुत जरूरी Functionality को गंभीर रूप से प्रभावित करता है।",
  example: "All users are unable to complete payments."
},
{
  category: "Manual Testing",
  question: "What is a Minor Bug?",
  answer: "A Minor Bug has a limited impact and usually does not prevent major functionality from working.",
  hindi: "Minor Bug का असर कम होता है और आमतौर पर मुख्य Functionality काम करती रहती है।",
  example: "A small spacing issue on a settings page."
},
{
  category: "Manual Testing",
  question: "What is Bug Triage?",
  answer: "Bug Triage is the process of reviewing defects and deciding their validity, severity, priority, ownership, and next actions.",
  hindi: "Bug Triage में Team Bugs को Review करके उनकी Priority, Severity और आगे की कार्रवाई तय करती है।",
  example: "The QA Lead, Developer, and Product Manager review reported defects."
},
{
  category: "Manual Testing",
  question: "What is Bug Leakage?",
  answer: "Bug Leakage occurs when a defect missed during one testing stage is discovered in a later stage or environment.",
  hindi: "जब Testing के किसी Stage में Bug छूट जाता है और बाद के Stage में मिलता है, तो उसे Bug Leakage कहते हैं।",
  example: "A defect missed during system testing is discovered during UAT."
},
{
  category: "Manual Testing",
  question: "What is Bug Release?",
  answer: "Bug Release refers to releasing software with one or more known defects after evaluating and accepting their risks.",
  hindi: "जब Team कुछ ज्ञात Bugs के साथ Software Release करने का निर्णय लेती है, तो इसे Bug Release कहा जाता है।",
  example: "A release proceeds with an accepted low-impact cosmetic defect."
},
{
  category: "Manual Testing",
  question: "What is Root Cause Analysis?",
  answer: "Root Cause Analysis identifies the underlying reason a defect occurred so similar problems can be prevented.",
  hindi: "Root Cause Analysis में पता लगाते हैं कि Bug असल में किस वजह से आया था।",
  example: "A Login failure is traced to an incorrect database configuration."
},
{
  category: "Manual Testing",
  question: "What is Defect Density?",
  answer: "Defect Density is the number of identified defects relative to the size of a software component.",
  hindi: "Defect Density से Software के Size के मुकाबले मिले हुए Bugs की संख्या मापी जाती है।",
  example: "20 defects found in a module containing 10,000 lines of code equals 2 defects per 1,000 lines."
},
{
  category: "Manual Testing",
  question: "What is Defect Aging?",
  answer: "Defect Aging measures how long a defect remains unresolved.",
  hindi: "Defect Aging बताता है कि कोई Bug कितने समय से Resolve नहीं हुआ है।",
  example: "A defect reported 12 days ago is still Open."
},
{
  category: "Manual Testing",
  question: "Why should screenshots be attached to a Bug Report?",
  answer: "Screenshots provide visual evidence and help team members understand the reported issue.",
  hindi: "Screenshot लगाने से Developer को Bug समझने में आसानी होती है और समस्या का Visual Proof मिलता है।",
  example: "Attach a screenshot showing an incorrect error message on the Login Page."
}
];
// Chapter 6: Testing Types & Techniques

const chapter6Questions = [
  {
    category: "Manual Testing",
    question: "What is Functional Testing?",
    answer: "Functional Testing verifies whether the software features work according to the specified requirements.",
    hindi: "Functional Testing में Check करते हैं कि Application के Features Requirements के अनुसार काम कर रहे हैं या नहीं।",
    example: "Verify that a user can log in using valid credentials."
  },
  {
    category: "Manual Testing",
    question: "What is Non-Functional Testing?",
    answer: "Non-Functional Testing evaluates quality attributes such as performance, usability, reliability, and security.",
    hindi: "Non-Functional Testing में Application की Speed, Usability, Reliability और Security जैसी चीजें Check की जाती हैं।",
    example: "Check how quickly a website loads when many users access it."
  },
  {
    category: "Manual Testing",
    question: "What is Smoke Testing?",
    answer: "Smoke Testing is a quick check of critical functionalities to determine whether a new build is stable enough for further testing.",
    hindi: "Smoke Testing में नए Build की मुख्य Functionalities Check करते हैं ताकि पता चले कि आगे Testing की जा सकती है या नहीं।",
    example: "After receiving a new build, verify that Login, Dashboard, and Logout work."
  },
  {
    category: "Manual Testing",
    question: "What is Sanity Testing?",
    answer: "Sanity Testing is a focused check to verify that a specific change or bug fix works as expected.",
    hindi: "Sanity Testing में किसी छोटे Change या Bug Fix से संबंधित Functionality को Check करते हैं।",
    example: "After a Login bug is fixed, verify that Login works correctly."
  },
  {
    category: "Manual Testing",
    question: "What is Regression Testing?",
    answer: "Regression Testing verifies that recent changes have not negatively affected previously working functionality.",
    hindi: "Regression Testing में Check करते हैं कि नए Changes की वजह से पुरानी सही चल रही Functionality खराब तो नहीं हुई।",
    example: "After updating Login, verify that Registration and Forgot Password still work."
  },
  {
    category: "Manual Testing",
    question: "What is Retesting?",
    answer: "Retesting verifies whether a previously reported defect has been fixed.",
    hindi: "Retesting में पहले मिले हुए Bug को दोबारा Check करते हैं कि वह ठीक हुआ या नहीं।",
    example: "Execute the failed Login Test Case again after the developer fixes the bug."
  },
  {
    category: "Manual Testing",
    question: "What is Integration Testing?",
    answer: "Integration Testing verifies whether different software modules work correctly together.",
    hindi: "Integration Testing में Check करते हैं कि Application के अलग-अलग Modules आपस में सही तरीके से काम कर रहे हैं या नहीं।",
    example: "Verify that the Login module correctly communicates with the user database."
  },
  {
    category: "Manual Testing",
    question: "What is System Testing?",
    answer: "System Testing verifies the behavior of the complete integrated application against its requirements.",
    hindi: "System Testing में पूरी Application को एक साथ Test किया जाता है।",
    example: "Test the complete shopping process from Login to Order Confirmation."
  },
  {
    category: "Manual Testing",
    question: "What is User Acceptance Testing (UAT)?",
    answer: "UAT verifies whether the application meets business needs and is acceptable to its intended users or stakeholders.",
    hindi: "UAT में User या Business Team Check करती है कि Application उनकी जरूरतों के अनुसार तैयार हुई है या नहीं।",
    example: "A business representative verifies that the Order Management system supports the required workflow."
  },
  {
    category: "Manual Testing",
    question: "What is Exploratory Testing?",
    answer: "Exploratory Testing is an approach where testers learn about the application, design tests, and execute them simultaneously.",
    hindi: "Exploratory Testing में Tester Application को समझते हुए नए Test Scenarios सोचता है और साथ-साथ Test करता है।",
    example: "Explore a new Registration Page and try different input combinations to discover unexpected issues."
  }
,
{
  category: "Manual Testing",
  question: "What is Ad Hoc Testing?",
  answer: "Ad Hoc Testing is informal testing performed without predefined test cases or a structured test plan.",
  hindi: "Ad Hoc Testing में पहले से लिखे Test Cases के बिना Application को Test किया जाता है।",
  example: "Randomly explore a shopping website to identify unexpected issues."
},
{
  category: "Manual Testing",
  question: "What is Alpha Testing?",
  answer: "Alpha Testing is performed internally before software is released to external users.",
  hindi: "Alpha Testing में Software को बाहरी Users तक पहुँचाने से पहले Internal Team द्वारा Test किया जाता है।",
  example: "Company employees test a new mobile application before public release."
},
{
  category: "Manual Testing",
  question: "What is Beta Testing?",
  answer: "Beta Testing is performed by selected external users in real-world conditions before a wider release.",
  hindi: "Beta Testing में कुछ चुने हुए वास्तविक Users Software इस्तेमाल करके Feedback देते हैं।",
  example: "Selected users test a new application before its official launch."
},
{
  category: "Manual Testing",
  question: "What is End-to-End Testing?",
  answer: "End-to-End Testing verifies a complete user workflow across connected components.",
  hindi: "End-to-End Testing में शुरुआत से अंत तक पूरी User Journey को Test किया जाता है।",
  example: "Login, search for a product, add it to cart, pay, and receive order confirmation."
},
{
  category: "Manual Testing",
  question: "What is UI Testing?",
  answer: "UI Testing verifies the appearance and behavior of user interface elements.",
  hindi: "UI Testing में Application के Buttons, Forms, Menus और दूसरे Screen Elements Check किए जाते हैं।",
  example: "Verify that the Submit button is visible and works correctly."
},
{
  category: "Manual Testing",
  question: "What is Usability Testing?",
  answer: "Usability Testing evaluates how easily users can understand and use an application.",
  hindi: "Usability Testing में Check करते हैं कि User के लिए Application इस्तेमाल करना कितना आसान है।",
  example: "Observe whether a new user can complete Registration without assistance."
},
{
  category: "Manual Testing",
  question: "What is Compatibility Testing?",
  answer: "Compatibility Testing verifies whether software works correctly across different environments.",
  hindi: "Compatibility Testing में अलग-अलग Browsers, Devices और Operating Systems पर Application Check की जाती है।",
  example: "Test a website on Chrome, Firefox, Android, and Windows."
},
{
  category: "Manual Testing",
  question: "What is Cross-Browser Testing?",
  answer: "Cross-Browser Testing verifies application behavior across different web browsers.",
  hindi: "Cross-Browser Testing में Website को अलग-अलग Browsers पर Test करते हैं।",
  example: "Verify Login functionality in Chrome, Firefox, and Edge."
},
{
  category: "Manual Testing",
  question: "What is Accessibility Testing?",
  answer: "Accessibility Testing checks whether an application can be used by people with different accessibility needs.",
  hindi: "Accessibility Testing में Check करते हैं कि अलग-अलग जरूरतों वाले लोग भी Application इस्तेमाल कर सकें।",
  example: "Verify that a form can be completed using only a keyboard."
},
{
  category: "Manual Testing",
  question: "What is Performance Testing?",
  answer: "Performance Testing evaluates application speed, responsiveness, stability, and resource usage under different workloads.",
  hindi: "Performance Testing में Application की Speed और अलग-अलग Load पर उसका Behavior Check करते हैं।",
  example: "Measure website response time when 500 users access it simultaneously."
},
{
  category: "Manual Testing",
  question: "What is Load Testing?",
  answer: "Load Testing checks how an application performs under expected user or transaction loads.",
  hindi: "Load Testing में सामान्य या अपेक्षित Users के Load पर Application का Performance Check करते हैं।",
  example: "Test an application with 1,000 simultaneous users when that is its expected load."
},
{
  category: "Manual Testing",
  question: "What is Stress Testing?",
  answer: "Stress Testing evaluates application behavior when the workload exceeds normal operating limits.",
  hindi: "Stress Testing में Application पर सामान्य सीमा से ज्यादा Load देकर उसका Behavior Check करते हैं।",
  example: "Increase simulated users beyond the expected capacity and observe system behavior."
},
{
  category: "Manual Testing",
  question: "What is Spike Testing?",
  answer: "Spike Testing evaluates how an application responds to sudden and significant changes in workload.",
  hindi: "Spike Testing में अचानक बहुत ज्यादा Traffic आने पर Application का Behavior Check करते हैं।",
  example: "Increase simulated traffic from 100 to 2,000 users within a short period."
},
{
  category: "Manual Testing",
  question: "What is Endurance Testing?",
  answer: "Endurance Testing checks whether an application remains stable under sustained workload for an extended period.",
  hindi: "Endurance Testing में लंबे समय तक Load देकर Application की Stability Check की जाती है।",
  example: "Run a system under expected load continuously for several hours."
},
{
  category: "Manual Testing",
  question: "What is Volume Testing?",
  answer: "Volume Testing checks application behavior when it processes large amounts of data.",
  hindi: "Volume Testing में बहुत ज्यादा Data के साथ Application का Behavior Check करते हैं।",
  example: "Verify whether a reporting system can process one million records."
},
{
  category: "Manual Testing",
  question: "What is Scalability Testing?",
  answer: "Scalability Testing evaluates how effectively an application handles increasing workload or resources.",
  hindi: "Scalability Testing में Check करते हैं कि बढ़ते Users या Data के साथ Application कितनी अच्छी तरह काम करती है।",
  example: "Measure performance as user traffic increases from 500 to 5,000."
},
{
  category: "Manual Testing",
  question: "What is Reliability Testing?",
  answer: "Reliability Testing verifies whether software performs consistently without failure under specified conditions.",
  hindi: "Reliability Testing में Check करते हैं कि Application तय परिस्थितियों में लगातार सही काम करती है या नहीं।",
  example: "Run repeated transactions and monitor whether the system remains stable."
},
{
  category: "Manual Testing",
  question: "What is Recovery Testing?",
  answer: "Recovery Testing verifies whether an application can recover correctly after a failure or interruption.",
  hindi: "Recovery Testing में Check करते हैं कि Failure के बाद Application सही तरीके से वापस काम करना शुरू करती है या नहीं।",
  example: "Verify that a system restores service correctly after an unexpected restart."
},
{
  category: "Manual Testing",
  question: "What is Installation Testing?",
  answer: "Installation Testing verifies that software can be installed, updated, and uninstalled correctly.",
  hindi: "Installation Testing में Software के Install, Update और Uninstall होने की प्रक्रिया Check करते हैं।",
  example: "Install an application and verify that it launches successfully."
},
{
  category: "Manual Testing",
  question: "What is Localization Testing?",
  answer: "Localization Testing verifies whether software is correctly adapted for a specific language, region, or locale.",
  hindi: "Localization Testing में किसी खास भाषा या क्षेत्र के अनुसार Application का Content और Format Check किया जाता है।",
  example: "Verify Hindi translations and Indian date formats in an application."
}
,
{
  category: "Manual Testing",
  question: "What is Internationalization Testing?",
  answer: "Internationalization Testing checks whether software can support different languages and regional settings without major code changes.",
  hindi: "इसमें Check करते हैं कि Application अलग-अलग भाषाओं और Regions को Support करने के लिए तैयार है या नहीं।",
  example: "Verify that the application supports different date, currency, and language formats."
},
{
  category: "Manual Testing",
  question: "What is Security Testing?",
  answer: "Security Testing evaluates whether an application protects its data and functionality against security risks.",
  hindi: "Security Testing में Application और उसके Data की सुरक्षा से संबंधित समस्याएँ Check की जाती हैं।",
  example: "Verify that an unauthorized user cannot access another user's account."
},
{
  category: "Manual Testing",
  question: "What is Database Testing?",
  answer: "Database Testing verifies the correctness, integrity, and consistency of data stored in a database.",
  hindi: "Database Testing में Database के Data की Accuracy और Consistency Check की जाती है।",
  example: "Verify that a new user record is saved correctly after Registration."
},
{
  category: "Manual Testing",
  question: "What is API Testing?",
  answer: "API Testing verifies whether application programming interfaces return correct responses and handle requests as expected.",
  hindi: "API Testing में Check करते हैं कि API सही Request पर सही Response दे रही है या नहीं।",
  example: "Verify that a valid GET request returns the expected user details."
},
{
  category: "Manual Testing",
  question: "What is Backend Testing?",
  answer: "Backend Testing verifies server-side logic, data processing, APIs, and related components.",
  hindi: "Backend Testing में Application के Server, Logic, API और Data Processing को Check करते हैं।",
  example: "Verify that placing an order correctly updates the order database."
},
{
  category: "Manual Testing",
  question: "What is Frontend Testing?",
  answer: "Frontend Testing verifies the user-facing parts of an application and their behavior.",
  hindi: "Frontend Testing में User को दिखाई देने वाले Page, Form, Button और दूसरे Elements Check करते हैं।",
  example: "Verify that an error message appears when a required field is empty."
},
{
  category: "Manual Testing",
  question: "What is Mobile Application Testing?",
  answer: "Mobile Application Testing verifies the functionality and quality of applications on mobile devices.",
  hindi: "Mobile Testing में अलग-अलग Mobile Devices पर Application का Behavior Check करते हैं।",
  example: "Verify that an Android application works correctly after screen rotation."
},
{
  category: "Manual Testing",
  question: "What is Responsive Testing?",
  answer: "Responsive Testing verifies whether a website layout adapts correctly to different screen sizes.",
  hindi: "Responsive Testing में Check करते हैं कि Website Mobile, Tablet और Desktop पर सही दिखाई दे रही है या नहीं।",
  example: "Verify that the navigation menu fits properly on a mobile screen."
},
{
  category: "Manual Testing",
  question: "What is Compatibility Testing in Mobile Applications?",
  answer: "It verifies whether a mobile application works correctly across supported devices, operating systems, and screen sizes.",
  hindi: "इसमें अलग-अलग Mobile Models, OS Versions और Screen Sizes पर App को Check करते हैं।",
  example: "Test an application on supported Android versions and different screen sizes."
},
{
  category: "Manual Testing",
  question: "What is Monkey Testing?",
  answer: "Monkey Testing involves providing random inputs or actions to identify unexpected application failures.",
  hindi: "Monkey Testing में बिना किसी तय Sequence के Random Actions करके Application का Behavior Check करते हैं।",
  example: "Randomly tap different buttons and navigate between screens."
},
{
  category: "Manual Testing",
  question: "What is Risk-Based Testing?",
  answer: "Risk-Based Testing prioritizes testing activities according to the likelihood and impact of potential failures.",
  hindi: "Risk-Based Testing में ज्यादा Risk वाली Functionalities को पहले Test किया जाता है।",
  example: "Prioritize Payment Testing over a minor profile color change."
},
{
  category: "Manual Testing",
  question: "What is Session-Based Testing?",
  answer: "Session-Based Testing organizes exploratory testing into focused, time-boxed sessions with defined objectives.",
  hindi: "इसमें एक तय समय और उद्देश्य के साथ Exploratory Testing की जाती है।",
  example: "Spend a 45-minute session exploring the Registration functionality."
},
{
  category: "Manual Testing",
  question: "What is Pair Testing?",
  answer: "Pair Testing is a collaborative approach in which two people work together to test the same functionality.",
  hindi: "Pair Testing में दो लोग मिलकर एक ही Functionality को Test करते हैं।",
  example: "A developer and a tester jointly explore a new Login feature."
},
{
  category: "Manual Testing",
  question: "What is Static Testing?",
  answer: "Static Testing examines software work products without executing the application code.",
  hindi: "Static Testing में Software चलाए बिना Requirements, Design या Code को Review किया जाता है।",
  example: "Review a requirement document to identify missing information."
},
{
  category: "Manual Testing",
  question: "What is Dynamic Testing?",
  answer: "Dynamic Testing evaluates software behavior by executing the application or its code.",
  hindi: "Dynamic Testing में Application को Run करके उसका Behavior Check किया जाता है।",
  example: "Open the Login Page and execute Login Test Cases."
},
{
  category: "Manual Testing",
  question: "What is Black Box Testing?",
  answer: "Black Box Testing verifies software behavior using inputs and outputs without requiring knowledge of its internal implementation.",
  hindi: "Black Box Testing में अंदर का Code जाने बिना Input और Output के आधार पर Testing करते हैं।",
  example: "Enter Login credentials and verify the displayed result."
},
{
  category: "Manual Testing",
  question: "What is White Box Testing?",
  answer: "White Box Testing examines internal code structure, logic, and execution paths.",
  hindi: "White Box Testing में Application के Internal Code और Logic को समझकर Testing की जाती है।",
  example: "Verify different branches of a password validation function."
},
{
  category: "Manual Testing",
  question: "What is Grey Box Testing?",
  answer: "Grey Box Testing combines external behavior testing with partial knowledge of the system's internal design.",
  hindi: "Grey Box Testing में Tester को Application के Internal Design की कुछ जानकारी होती है।",
  example: "Test Login behavior while knowing how the application stores user sessions."
},
{
  category: "Manual Testing",
  question: "What is Unit Testing?",
  answer: "Unit Testing verifies individual functions, methods, or small software components in isolation.",
  hindi: "Unit Testing में Code के छोटे हिस्सों जैसे Function या Method को अलग से Test किया जाता है।",
  example: "Verify that a function correctly calculates the total price."
},
{
  category: "Manual Testing",
  question: "What is Component Testing?",
  answer: "Component Testing verifies an individual software component independently from other components where possible.",
  hindi: "Component Testing में Software के किसी एक Module या Component को अलग से Check करते हैं।",
  example: "Test the shopping cart component using simulated dependencies."
}
];
const javascriptChapter1Questions = [
  {
    category: "JavaScript",
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language used to make websites interactive and build automation scripts.",
    hindi: "JavaScript एक Programming Language है। इसका उपयोग Website को Interactive बनाने और Automation Scripts लिखने में होता है।",
    example: "We can use JavaScript with Playwright to automate a Login Page."
  },
  {
    category: "JavaScript",
    question: "What is a variable in JavaScript?",
    answer: "A variable is used to store data that can be used in a program.",
    hindi: "Variable का उपयोग किसी Value या Data को Store करने के लिए किया जाता है।",
    example: "let username = 'Aman';"
  },
  {
    category: "JavaScript",
    question: "What is the difference between let, const and var?",
    answer: "let allows reassignment, const does not allow reassignment, and var is the older way of declaring variables.",
    hindi: "let की Value बदल सकते हैं, const को दोबारा Assign नहीं कर सकते और var Variable बनाने का पुराना तरीका है।",
    example: "let age = 20; const country = 'India';"
  },
  {
    category: "JavaScript",
    question: "What are data types in JavaScript?",
    answer: "Data types describe the kind of value stored in a variable, such as String, Number, Boolean, Undefined and Object.",
    hindi: "Data Type बताता है कि Variable में किस प्रकार की Value Store है।",
    example: "let name = 'Aman'; let age = 20; let passed = true;"
  },
  {
    category: "JavaScript",
    question: "What is a String in JavaScript?",
    answer: "A String is a sequence of characters written inside quotes.",
    hindi: "String अक्षरों या Text का समूह होता है, जिसे Quotes के अंदर लिखा जाता है।",
    example: "let course = 'JavaScript';"
  },
  {
    category: "JavaScript",
    question: "What is a Number in JavaScript?",
    answer: "Number is a data type used to store numeric values.",
    hindi: "Number Data Type का उपयोग संख्याओं को Store करने के लिए होता है।",
    example: "let age = 25; let price = 99.50;"
  },
  {
    category: "JavaScript",
    question: "What is a Boolean in JavaScript?",
    answer: "Boolean is a data type that has only two values: true and false.",
    hindi: "Boolean Data Type में केवल दो Values होती हैं: true और false।",
    example: "let isLoggedIn = true;"
  },
  {
    category: "JavaScript",
    question: "What is undefined in JavaScript?",
    answer: "Undefined means a variable has been declared but has not been assigned a value.",
    hindi: "जब Variable बनाया गया हो लेकिन उसमें कोई Value Assign न की गई हो, तो उसकी Value undefined होती है।",
    example: "let username; console.log(username); // undefined"
  },
  {
    category: "JavaScript",
    question: "What is null in JavaScript?",
    answer: "Null represents an intentional absence of a value.",
    hindi: "null का मतलब है कि Variable में जानबूझकर कोई Value नहीं रखी गई है।",
    example: "let selectedUser = null;"
  },
  {
    category: "JavaScript",
    question: "What is the typeof operator in JavaScript?",
    answer: "The typeof operator is used to check the data type of a value.",
    hindi: "typeof Operator का उपयोग किसी Value का Data Type पता करने के लिए किया जाता है।",
    example: "console.log(typeof 'Hello'); // string"
  },
  {
    category: "JavaScript",
    question: "What is an Array in JavaScript?",
    answer: "An Array is used to store multiple values in a single variable.",
    hindi: "Array का उपयोग एक ही Variable में कई Values Store करने के लिए होता है।",
    example: "let browsers = ['Chrome', 'Firefox', 'Edge'];"
  },
  {
    category: "JavaScript",
    question: "What is an Object in JavaScript?",
    answer: "An Object stores data in key-value pairs.",
    hindi: "Object में Data को Key और Value के रूप में Store किया जाता है।",
    example: "let user = { name: 'Aman', role: 'QA' };"
  },
  {
    category: "JavaScript",
    question: "What is a Function in JavaScript?",
    answer: "A Function is a reusable block of code that performs a specific task.",
    hindi: "Function Code का ऐसा Block है जिसे एक ही काम के लिए बार-बार इस्तेमाल कर सकते हैं।",
    example: "function greet() { return 'Hello'; }"
  },
  {
    category: "JavaScript",
    question: "What is an Arrow Function in JavaScript?",
    answer: "An Arrow Function is a shorter syntax for writing functions.",
    hindi: "Arrow Function, JavaScript में Function लिखने का छोटा तरीका है।",
    example: "const add = (a, b) => a + b;"
  },
  {
    category: "JavaScript",
    question: "What is console.log() in JavaScript?",
    answer: "console.log() is used to display messages and values in the browser or runtime console.",
    hindi: "console.log() का उपयोग Console में Message या Value दिखाने के लिए होता है।",
    example: "console.log('Hello JavaScript');"
  }
,
  {
    category: "JavaScript",
    question: "What is the difference between == and === in JavaScript?",
    answer: "== compares values after type conversion, while === compares both value and data type without type conversion.",
    hindi: "== Value की तुलना जरूरत पड़ने पर Type Conversion करके करता है, जबकि === Value और Data Type दोनों की तुलना करता है।",
    example: "5 == '5' // true; 5 === '5' // false"
  },
  {
    category: "JavaScript",
    question: "What is if...else in JavaScript?",
    answer: "if...else is a conditional statement used to execute different blocks of code based on a condition.",
    hindi: "if...else का उपयोग Condition के आधार पर अलग-अलग Code चलाने के लिए किया जाता है।",
    example: "if (age >= 18) { console.log('Adult'); } else { console.log('Minor'); }"
  },
  {
    category: "JavaScript",
    question: "What is a for loop in JavaScript?",
    answer: "A for loop repeats a block of code while its condition is true.",
    hindi: "for Loop का उपयोग किसी Code को बार-बार चलाने के लिए किया जाता है।",
    example: "for (let i = 1; i <= 5; i++) { console.log(i); }"
  },
  {
    category: "JavaScript",
    question: "What is a while loop in JavaScript?",
    answer: "A while loop executes a block of code repeatedly as long as its condition remains true.",
    hindi: "while Loop तब तक चलता है जब तक उसकी Condition true रहती है।",
    example: "let i = 1; while (i <= 3) { console.log(i); i++; }"
  },
  {
    category: "JavaScript",
    question: "What are Template Literals in JavaScript?",
    answer: "Template Literals are strings written using backticks that support variable interpolation.",
    hindi: "Template Literals में Backticks का उपयोग होता है और ${} की मदद से Variable की Value String में जोड़ सकते हैं।",
    example: "const name = 'Aman'; console.log(`Hello ${name}`);"
  }
,
  {
    category: "JavaScript",
    question: "What is the difference between break and continue in JavaScript?",
    answer: "break stops a loop completely, while continue skips the current iteration and moves to the next one.",
    hindi: "break Loop को पूरी तरह रोक देता है, जबकि continue केवल वर्तमान Iteration को छोड़कर अगली Iteration पर जाता है।",
    example: "break; // Exit loop | continue; // Skip current iteration"
  },
  {
    category: "JavaScript",
    question: "What is the difference between push() and pop() in JavaScript?",
    answer: "push() adds an element to the end of an array, while pop() removes the last element.",
    hindi: "push() Array के अंत में नया Element जोड़ता है, जबकि pop() आखिरी Element को हटा देता है।",
    example: "let a = [1, 2]; a.push(3); a.pop();"
  },
  {
    category: "JavaScript",
    question: "What is the difference between shift() and unshift()?",
    answer: "shift() removes the first element of an array, while unshift() adds an element at the beginning.",
    hindi: "shift() Array का पहला Element हटाता है और unshift() शुरुआत में नया Element जोड़ता है।",
    example: "let a = [2, 3]; a.unshift(1); a.shift();"
  },
  {
    category: "JavaScript",
    question: "What is the difference between map() and forEach()?",
    answer: "map() creates a new array using the returned values, while forEach() executes a function for each element and returns undefined.",
    hindi: "map() Return की गई Values से नया Array बनाता है, जबकि forEach() हर Element पर Function चलाता है और undefined Return करता है।",
    example: "const nums = [1, 2]; const doubled = nums.map(n => n * 2); nums.forEach(n => console.log(n));"
  },
  {
    category: "JavaScript",
    question: "What is the filter() method in JavaScript?",
    answer: "filter() creates a new array containing elements that satisfy a given condition.",
    hindi: "filter() Condition पूरी करने वाले Elements से नया Array बनाता है।",
    example: "const nums = [1, 2, 3, 4]; const even = nums.filter(n => n % 2 === 0);"
  }
,
  {
    category: "JavaScript",
    question: "What is the find() method in JavaScript?",
    answer: "find() returns the first element in an array that satisfies a given condition. If no element matches, it returns undefined.",
    hindi: "find() Array का पहला ऐसा Element Return करता है जो दी गई Condition पूरी करता है। कोई Match न मिलने पर undefined मिलता है।",
    example: "const nums = [5, 12, 8]; const result = nums.find(n => n > 10); // 12"
  },
  {
    category: "JavaScript",
    question: "What is the includes() method in JavaScript?",
    answer: "includes() checks whether an array or string contains a specified value and returns true or false.",
    hindi: "includes() जाँचता है कि Array या String में कोई खास Value मौजूद है या नहीं। यह true या false Return करता है।",
    example: "const fruits = ['Apple', 'Mango']; console.log(fruits.includes('Mango')); // true"
  },
  {
    category: "JavaScript",
    question: "What is the difference between slice() and splice() in JavaScript?",
    answer: "slice() returns a selected portion without changing the original array. splice() can add, remove or replace elements and changes the original array.",
    hindi: "slice() Original Array को बदले बिना उसका एक हिस्सा देता है, जबकि splice() Original Array में Elements जोड़, हटा या बदल सकता है।",
    example: "let a = [1, 2, 3, 4]; a.slice(1, 3); // [2, 3]; a.splice(1, 1); // removes 2"
  },
  {
    category: "JavaScript",
    question: "What is the Spread Operator (...) in JavaScript?",
    answer: "The spread operator expands elements of an iterable, such as an array, into individual values. It can also copy properties from an object.",
    hindi: "Spread Operator (...) Array की Values को फैलाने और Array या Object की Shallow Copy बनाने में उपयोगी होता है।",
    example: "const a = [1, 2]; const b = [...a, 3]; // [1, 2, 3]"
  },
  {
    category: "JavaScript",
    question: "What is Destructuring in JavaScript?",
    answer: "Destructuring allows values from arrays or properties from objects to be assigned to separate variables.",
    hindi: "Destructuring की मदद से Array की Values या Object की Properties को आसानी से अलग-अलग Variables में निकाल सकते हैं।",
    example: "const user = { name: 'Aman', role: 'QA' }; const { name, role } = user;"
  }
];