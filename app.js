let responses = [];

  let questions = [    "Qual é o seu nome?",    "Quantos anos você tem?",    "Onde você mora?"  ];

  for (let i = 0; i < questions.length; i++) {
    responses[i] = prompt(questions[i]);
  }

  console.log(responses);

  var button = document.getElementById("toggleButton");
  var menu = document.getElementById("menu");
  var isMenuVisible = false;

  button.addEventListener("click", function() {
    if (isMenuVisible) {
      menu.style.display = "none";
      isMenuVisible = false;
    } else {
      menu.style.display = "block";
      isMenuVisible = true;
    }
  });

 