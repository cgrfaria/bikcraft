// ACTIVE MENU

const links = document.querySelectorAll('.header-menu a');

function activeLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('active');
  }
}

links.forEach(activeLink);

// BUDGET ITENS

const parameters = new URLSearchParams(location.search);

function activeProduct(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activeProduct);

// Q&A

const questions = document.querySelectorAll('.questions button');

function activeQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute('aria-controls');
  const answer = document.getElementById(controls);

  answer.classList.toggle('active');
  const active = answer.classList.contains('active');
  question.setAttribute('aria-expanded', active);
}

function eventsQuestions(question) {
  question.addEventListener('click', activeQuestion);
}

questions.forEach(eventsQuestions);
