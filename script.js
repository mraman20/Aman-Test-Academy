/* Aman QA Academy - Questions and Answers */

const questions = [
    {
        category: "Manual Testing",
        question: "What is Software Testing?",
        answer: "Software Testing is the process of verifying and validating software to ensure it meets specified requirements.",
        hindi: "Software Testing में हम चेक करते हैं कि Application सही तरीके से काम कर रही है या नहीं।",
        example: "Check Login using valid and invalid credentials."
    },
    {
        category: "Manual Testing",
        question: "What is a Test Case?",
        answer: "A Test Case contains test steps, test data and expected results used to verify a feature.",
        hindi: "Test Case में हम लिखते हैं कि क्या टेस्ट करना है, कैसे करना है और Expected Result क्या होगा।",
        example: "Enter valid credentials, click Login and verify that the Dashboard opens."
    },
    {
        category: "Manual Testing",
        question: "What is Regression Testing?",
        answer: "Regression Testing checks whether existing functionality still works after changes or bug fixes.",
        hindi: "नए बदलाव के बाद पुराने Features को दोबारा टेस्ट करना Regression Testing है।",
        example: "After a payment update, test Cart and Checkout again."
    },
    {
        category: "JavaScript",
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language used to create interactive web applications.",
        hindi: "JavaScript से वेबसाइट में Search, Buttons और दूसरे Interactive Features बनाए जाते हैं।",
        example: "console.log('Hello QA');"
    },
    {
        category: "JavaScript",
        question: "What is the difference between let and const?",
        answer: "let allows reassignment, whereas a const binding cannot be reassigned.",
        hindi: "let की Value दोबारा Assign कर सकते हैं, लेकिन const की Binding नहीं।",
        example: "let count = 1; count = 2; const name = 'Aman';"
    },
    {
        category: "TypeScript",
        question: "What is TypeScript?",
        answer: "TypeScript adds static type checking to JavaScript.",
        hindi: "TypeScript में Types लिख सकते हैं, जिससे कई Coding Mistakes जल्दी पकड़ में आती हैं।",
        example: "let age: number = 20;"
    },
    {
        category: "Playwright",
        question: "What is Playwright?",
        answer: "Playwright is a browser automation framework used for end-to-end testing.",
        hindi: "Playwright से हम Browser में वेबसाइट के Actions Automatically Test करते हैं।",
        example: "await page.goto('https://example.com');"
    },
    {
        category: "Playwright",
        question: "How do you click a button in Playwright?",
        answer: "Locate the button using a suitable locator and call click().",
        hindi: "Playwright में Button को Locate करके उस पर Click करते हैं।",
        example: "await page.getByRole('button', { name: 'Login' }).click();"
    },
    {
        category: "API Testing",
        question: "What is API Testing?",
        answer: "API Testing verifies the functionality and responses of application programming interfaces.",
        hindi: "API Testing में Request भेजकर Response, Status Code और Data चेक करते हैं।",
        example: "Send a GET request and verify status code 200."
    },
    {
        category: "SQL",
        question: "What is SELECT in SQL?",
        answer: "SELECT is used to retrieve data from database tables.",
        hindi: "SELECT Command से Database का Data पढ़ते हैं।",
        example: "SELECT * FROM users;"
    },
    {
        category: "Git & GitHub",
        question: "What is Git?",
        answer: "Git is a distributed version control system used to track changes in code.",
        hindi: "Git हमारे Code के Changes और उनकी History Track करता है।",
        example: "git status"
    },
    {
        category: "Interview Questions",
        question: "How do you report a bug?",
        answer: "Include a clear title, steps to reproduce, actual result, expected result and environment details.",
        hindi: "Bug Report में समस्या, उसे दोबारा लाने के Steps और Expected तथा Actual Result लिखते हैं।",
        example: "Login fails when valid credentials are entered."
    }
];
questions.push(...chapter1Questions);
questions.push(...chapter2Questions);
questions.push(...chapter3Questions);
questions.push(...chapter4Questions);
questions.push(...chapter5Questions);
questions.push(...chapter6Questions);
questions.push(...javascriptChapter1Questions);
questions.push(...javascript50Questions);
const questionList = document.getElementById("questionList");
const searchBox = document.getElementById("searchBox");
// Automatically count total questions
const totalQuestions = document.getElementById("totalQuestions");
totalQuestions.textContent = "📚 Total Questions: " + questions.length;

function displayQuestions(searchText = "") {
    let savedBookmarks = JSON.parse(localStorage.getItem("qaBookmarks") || "[]");
    questionList.innerHTML = "";

    const filteredQuestions = questions.filter(function(item) {
        
        const text = (
            item.category + " " +
            item.question + " " +
            item.answer + " " +
            item.hindi + " " +
            item.example
        ).toLowerCase();

        return text.includes(searchText.toLowerCase());
    });

    if (filteredQuestions.length === 0) {
        questionList.textContent = "No matching questions found.";
        return;
    }

    filteredQuestions.forEach(function(item) {
        const card = document.createElement("div");
        card.className = "question-card";
    
        const title = document.createElement("h3");
        title.textContent = item.question;

        const category = document.createElement("p");
        category.textContent = "Category: " + item.category;

        const answer = document.createElement("p");
       answer.innerHTML = "<strong>English Answer:</strong> ";
answer.append(document.createTextNode(" " + item.answer));

        const hindi = document.createElement("p");
        hindi.innerHTML = "<strong>Hindi Explanation:</strong> ";
hindi.append(document.createTextNode(" " + item.hindi));
        const example = document.createElement("p");
       
        example.innerHTML = "<strong>Example:</strong> ";
example.append(document.createTextNode(" " + item.example));
// Show / Hide Answer Button
const showButton = document.createElement("button");
showButton.textContent = "Show Answer ▼";
const bookmarkButton = document.createElement("button");
bookmarkButton.textContent = "☆ Bookmark";
bookmarkButton.style.marginLeft = "10px";
if (savedBookmarks.includes(item.question)) {
  bookmarkButton.textContent = "⭐ Bookmarked";
}
bookmarkButton.onclick = function () {
  const questionId = item.question;

  if (savedBookmarks.includes(questionId)) {
    savedBookmarks = savedBookmarks.filter(id => id !== questionId);
    bookmarkButton.textContent = "☆ Bookmark";
  } else {
    savedBookmarks.push(questionId);
    bookmarkButton.textContent = "⭐ Bookmarked";
  }

  localStorage.setItem("qaBookmarks", JSON.stringify(savedBookmarks));
};

const answerBox = document.createElement("div");
answerBox.style.display = "none";

answerBox.appendChild(category);
answerBox.appendChild(answer);
answerBox.appendChild(hindi);
answerBox.appendChild(example);

showButton.onclick = function () {
    if (answerBox.style.display === "none") {
        answerBox.style.display = "block";
        showButton.textContent = "Hide Answer ▲";
    } else {
        answerBox.style.display = "none";
        showButton.textContent = "Show Answer ▼";
    }
};
        card.appendChild(title);
       card.appendChild(showButton);
       card.appendChild(bookmarkButton);
card.appendChild(answerBox);
        questionList.appendChild(card);
    });
}

searchBox.addEventListener("input", function() {
    displayQuestions(searchBox.value);
});

// Show all questions when the website opens
displayQuestions();
let showingBookmarks = false;

const myBookmarksBtn = document.getElementById("myBookmarksBtn");

myBookmarksBtn.onclick = function () {
  showingBookmarks = !showingBookmarks;

  if (showingBookmarks) {
    myBookmarksBtn.textContent = "📚 Show All Questions";
  } else {
    myBookmarksBtn.textContent = "⭐ My Bookmarks";
  }

  displayQuestions(searchBox.value);
};
/* Filter questions when a course is clicked */

function filterCourse(courseName) {
    searchBox.value = courseName;

    displayQuestions(courseName);

    document.getElementById("questions").scrollIntoView({
        behavior: "smooth"
    });
};
