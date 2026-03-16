class QAItem {

constructor(question, answer){
    this.question = question;
    this.answer = answer;
}

render(){

    const container = document.createElement("div");
    container.classList.add("qa-item");

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const qText = document.createElement("span");
    qText.textContent = this.question;

    const icon = document.createElement("span");
    icon.textContent = "+";
    icon.classList.add("icon");

    questionDiv.appendChild(qText);
    questionDiv.appendChild(icon);

    const answerDiv = document.createElement("div");
    answerDiv.classList.add("answer");
    answerDiv.textContent = this.answer;

    container.appendChild(questionDiv);
    container.appendChild(answerDiv);

    questionDiv.addEventListener("click", () => {
        container.classList.toggle("active");

        if(container.classList.contains("active")){
            icon.textContent = "-";
        }else{
            icon.textContent = "+";
        }
    });

    return container;
}

}

const faqList = [

new QAItem(
"What is JavaScript?",
"JavaScript is a high-level, dynamic programming language that runs in web browsers and on servers through environments like Node.js. It enables interactivity by manipulating the Document Object Model (DOM), handling events, and updating content without reloading pages. Its syntax draws from C-family languages, featuring first-class functions, closures, prototypes, and asynchronous patterns via callbacks, promises, and async/await. JavaScript supports modular development with modules and toolchains, and integrates with HTML and CSS to build rich user interfaces. While originally designed for client-side scripting, it’s now a versatile language for full-stack development, desktop and mobile apps, and various runtimes and ecosystems worldwide today."
),

new QAItem(
"What is Object Oriented Programming?",
"In a live project, Object-Oriented Programming (OOP) is a structural philosophy that treats software as a collection of independent, interacting smart module rather than a linear list of commands. By organizing code into Objects—like a UserAccount or Transaction—you create a plug-and-play architecture where data is protected via Encapsulation and complex logic is simplified through Abstraction."
),

new QAItem(
"What is an Event Listener?",
"An Event Listener is a function that waits for a specific event to occur on a particular element, such as a click, hover, or keypress. When the event happens, the listener executes the associated function, allowing developers to create interactive web applications by responding to user actions in real-time."
)

];

const faqContainer = document.getElementById("faq-container");

faqList.forEach(item=>{
    faqContainer.appendChild(item.render());
});