const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<style>", "<script>", "<css>", "<link>"],
      answer: "<style>"
    },
    {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-style", "text-size", "font-size", "text-style"],
      answer: "font-size"
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<lb>", "<br>", "<line>"],
      answer: "<br>"
    },
    {
      question: "Which HTML tag is used to define a footer for a document or section?",
      options: ["<bottom>", "<footer>", "<section>", "<foot>"],
      answer: "<footer>"
    },
    {
      question: "Which is the correct CSS syntax?",
      options: ["body {color: black;}", "{body:color=black;}", "{body;color:black;}", "body:color=black;"],
      answer: "body {color: black;}"
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["style", "font", "class", "styles"],
      answer: "style"
    },
    {
      question: "How do you write 'Hello World' in an alert box in JavaScript?",
      options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "console.log('Hello World');"],
      answer: "alert('Hello World');"
    },
    {
      question: "How do you create a function in JavaScript?",
      options: ["function:myFunction()", "function = myFunction()", "function myFunction()", "def myFunction()"],
      answer: "function myFunction()"
    },
    {
      question: "How do you call a function named 'myFunction'?",
      options: ["call myFunction()", "call function myFunction()", "myFunction()", "execute myFunction"],
      answer: "myFunction()"
    },
    {
      question: "How to write an IF statement in JavaScript?",
      options: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i == 5 then"],
      answer: "if (i == 5)"
    },
    {
      question: "How does a WHILE loop start?",
      options: ["while i = 1 to 10", "while (i <= 10; i++)", "while (i <= 10)", "while (i)"],
      answer: "while (i <= 10)"
    },
    {
      question: "What is the correct way to link an external JavaScript file?",
      options: ["<script src='filename.js'>", "<script href='filename.js'>", "<script name='filename.js'>", "<script link='filename.js'>"],
      answer: "<script src='filename.js'>"
    },
    {
      question: "How do you add a comment in HTML?",
      options: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "' This is a comment"],
      answer: "<!-- This is a comment -->"
    },
    {
      question: "How do you add a comment in CSS?",
      options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "' This is a comment"],
      answer: "/* This is a comment */"
    },
    {
      question: "Which of the following is the correct syntax for a media query in CSS?",
      options: ["@media (max-width: 600px)", "@media {max-width: 600px}", "media-query(max-width: 600px)", "@media width(max: 600px)"],
      answer: "@media (max-width: 600px)"
    },
    {
      question: "Which of the following is used to clear a float in CSS?",
      options: ["float:clear", "float:stop", "clear:both", "clear:float"],
      answer: "clear:both"
    },
    {
      question: "What does DOM stand for?",
      options: ["Document Order Model", "Document Object Model", "Digital Object Model", "Data Object Management"],
      answer: "Document Object Model"
    },
    {
      question: "Which method is used to select an element by its ID in JavaScript?",
      options: ["getElementById()", "querySelectorAll()", "getElementsByClass()", "getElementByTag()"],
      answer: "getElementById()"
    },
    {
      question: "What does JSON stand for?",
      options: ["Java Source Open Network", "JavaScript Object Notation", "JavaScript Open Notation", "JavaScript Object Node"],
      answer: "JavaScript Object Notation"
    },
    {
      question: "Which HTTP method is used to retrieve data from a server?",
      options: ["GET", "POST", "PUT", "DELETE"],
      answer: "GET"
    },
    {
      question: "Which CSS framework is maintained by Twitter?",
      options: ["Bootstrap", "Bulma", "Foundation", "Materialize"],
      answer: "Bootstrap"
    },
    {
      question: "What is the use of the 'position: absolute' property in CSS?",
      options: ["Positions the element based on the browser window", "Positions the element based on its containing element", "Floats the element to the left", "Aligns the element to the center"],
      answer: "Positions the element based on its containing element"
    },
    {
      question: "What does AJAX stand for?",
      options: ["Asynchronous JavaScript And XML", "Advanced JavaScript And XHTML", "Application JavaScript And XML", "Asynchronous Java And XHTML"],
      answer: "Asynchronous JavaScript And XML"
    },
    {
      question: "Which symbol is used to select an ID in CSS?",
      options: ["#", ".", "@", "$"],
      answer: "#"
    },
    {
      question: "Which is the default value of the position property in CSS?",
      options: ["relative", "absolute", "fixed", "static"],
      answer: "static"
    },
    {
      question: "How can you make a numbered list in HTML?",
      options: ["<ul>", "<dl>", "<ol>", "<li>"],
      answer: "<ol>"
    },
    {
      question: "Which tag is used to create an HTML table?",
      options: ["<table>", "<tbl>", "<tr>", "<td>"],
      answer: "<table>"
    },
    {
      question: "Which of the following CSS property is used to change the background color?",
      options: ["background-color", "bgcolor", "color", "bg-color"],
      answer: "background-color"
    },
    {
      question: "What is the correct syntax to change text color in CSS?",
      options: ["color: blue;", "text-color: blue;", "fgcolor: blue;", "font-color: blue;"],
      answer: "color: blue;"
    },
    {
      question: "Which HTML tag is used to display an image?",
      options: ["<img>", "<picture>", "<image>", "<src>"],
      answer: "<img>"
    },
    {
      question: "How can you make text bold in HTML?",
      options: ["<bold>", "<b>", "<strong>", "<bt>"],
      answer: "<b>"
    },
    {
      question: "How do you insert a comment in a JavaScript file?",
      options: ["<!-- This is a comment -->", "// This is a comment", "' This is a comment", "/* This is a comment"],
      answer: "// This is a comment"
    },
    {
      question: "Which HTML tag is used to define a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<hyperlink>"],
      answer: "<a>"
    },
    {
      question: "What is the purpose of 'display: flex' in CSS?",
      options: ["To align items in a grid", "To align items in a row or column", "To hide the element", "To create a fixed layout"],
      answer: "To align items in a row or column"
    },
    {
      question: "Which is not a valid JavaScript data type?",
      options: ["String", "Number", "Float", "Boolean"],
      answer: "Float"
    },
    {
      question: "Which HTML attribute is used to specify the character encoding?",
      options: ["lang", "charset", "encoding", "type"],
      answer: "charset"
    },
    {
      question: "Which symbol is used for comments in CSS?",
      options: ["//", "<!-- -->", "#", "/* */"],
      answer: "/* */"
    },
    {
      question: "Which of the following is a CSS preprocessor?",
      options: ["Sass", "JavaScript", "HTML", "DOM"],
      answer: "Sass"
    },
    {
      question: "Which HTML element is used to define the title of a document?",
      options: ["<title>", "<head>", "<meta>", "<h1>"],
      answer: "<title>"
    },
    {
      question: "Which tag is used to add a header in HTML5?",
      options: ["<header>", "<head>", "<h1>", "<section>"],
      answer: "<header>"
    },
    {
      question: "Which HTML attribute specifies the language of the document?",
      options: ["lang", "dir", "xml", "charset"],
      answer: "lang"
    },
    {
      question: "What is the correct way to add a background color in CSS?",
      options: ["background-color: blue;", "bg-color: blue;", "color: blue;", "background: color blue;"],
      answer: "background-color: blue;"
    },
    {
      question: "What is the purpose of 'z-index' in CSS?",
      options: ["To stack elements", "To set the zoom level", "To align text", "To scale elements"],
      answer: "To stack elements"
    },
    {
      question: "What does API stand for?",
      options: ["Application Programming Interface", "Application Program Internet", "Advanced Programming Interface", "Application Process Interface"],
      answer: "Application Programming Interface"
    },
    {
      question: "Which HTML element is used to specify a list item?",
      options: ["<li>", "<list>", "<ul>", "<item>"],
      answer: "<li>"
    },
    {
      question: "What is the default display property of <div> element?",
      options: ["inline", "block", "flex", "inline-block"],
      answer: "block"
    },
    {
      question: "How to select all <p> elements inside a <div> in CSS?",
      options: ["div p", "div.p", "div > p", "div+p"],
      answer: "div p"
    }
  ];

function generateUniqueRandomNumbers(count, min, max) {
    const uniqueNumbers = new Set();
    
    while (uniqueNumbers.size < count) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        uniqueNumbers.add(randomNum);
    }
    
    return Array.from(uniqueNumbers);
}

const randomNumbers = generateUniqueRandomNumbers(20, 0, 47);
console.log(randomNumbers);

const container = document.getElementsByClassName("container")[0];
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let cnt=0;
let str="";


function generateQuestion(ques){
  str=`<div class="wrapper">
  <div class="question">
    Q${cnt+1} ${ques.question}
  </div>
  <ul>
     ${ques.options.map((item)=>{
      return `<li><input type="radio" name="answer" id="answer">${item}</li>`
     })}
  </ul>   
</div>`;
}

window.addEventListener("load",()=>{
  let ques = questions[randomNumbers[cnt]];
  str="";
  generateQuestion(ques);
  container.innerHTML = str;
})



function generateNext(){
  cnt++;
  if(cnt<20){
    let ques = questions[randomNumbers[cnt]];
    generateQuestion(ques);
    container.innerHTML = str;
    str="";
    console.log(str);
  }
  else{
    cnt=0;
  }
}

function generatePrev() {
  cnt--;
  if (cnt >= 0) {
      generateQuestion(questions[randomNumbers[cnt]]);
      container.innerHTML = str;
       str="";
  } else {
      cnt = 19; // Prevent going out of bounds
  }
}

next.addEventListener("click",()=>{
  generateNext();
})

prev.addEventListener("click", () => {
  generatePrev();
});

