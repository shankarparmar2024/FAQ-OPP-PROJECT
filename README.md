Interactive Q&A Webpage (JavaScript OOP)
Overview

This project is a simple interactive FAQ webpage where users can click on a question to show or hide the answer. The goal of this assignment was to practice JavaScript Object-Oriented Programming, along with basic HTML structure and CSS styling.

Instead of writing static HTML for every question, the questions and answers are created using a JavaScript class and then displayed dynamically on the webpage.
Features

Click on a question to reveal the answer

Click again to hide the answer

Answers are hidden by default

Smooth open and close animation

Visual indicator (+ / -) showing whether the answer is open or closed

Questions and answers generated dynamically using JavaScript

Technologies Used

HTML – for the structure of the webpage

CSS – for styling and animations

JavaScript – to handle interaction and dynamic content

Object-Oriented Programming (OOP) – used to organize Q&A items using a class
How It Works

A JavaScript class called QAItem is used to represent each question and answer.
Each object created from this class stores the question text and the answer text.

When the page loads:

Several QAItem objects are created and stored in an array.

The render() method generates the HTML elements for each item.

Event listeners are added to detect when a question is clicked.

When clicked, the answer section expands or collapses and the icon changes.


project
│
├── index.html
├── style.css
└── script.js
