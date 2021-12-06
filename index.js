const app = document.getElementById("app");
let faqs = [];

var title = document.createElement("h2");
title.classList.add("title");
title.innerHTML = "FAQ?";
app.appendChild(title);

window.onload = () => {
  let faq = new FAQ();
  for (let index = 0; index < 3; index++) {
    let faq = new FAQ();
    faqs.push(faq);
    app.appendChild(faq.render());
  }

  faqs.forEach((faq, index) => {
    faq.$answer.classList.add("hidden");

    if (index === 0) {
      let question1 = document.createElement("h3");
      question1.innerHTML = "What kind of payment do you support?";

      let box = document.createElement("span");
      box.classList.add("box");

      let plus = document.createElement("p");
      plus.classList.add("box_plus");
      plus.innerHTML = "+";
      box.appendChild(plus);

      faq.$question.appendChild(question1);
      faq.$question.appendChild(box);

      let answer1 = document.createElement("p");
      answer1.innerHTML = "We support credit cart , PayPal and Stripe";
      faq.$answer.appendChild(answer1);
    }

    if (index === 1) {
      let question2 = document.createElement("h3");
      question2.innerHTML = "What is the Shipping Estimator?";

      let box = document.createElement("span");
      box.classList.add("box");

      let plus = document.createElement("p");
      plus.classList.add("box_plus");
      plus.innerHTML = "+";
      box.appendChild(plus);

      faq.$question.appendChild(question2);
      faq.$question.appendChild(box);

      let answer2 = document.createElement("p");
      answer2.innerHTML =
        "This estimates the shipping costs for all available shipping options before an order is placed.";
      faq.$answer.appendChild(answer2);
    }

    if (index === 2) {
      let question3 = document.createElement("h3");
      question3.innerHTML = "Is shipping to Puerto Rico available?";

      let box = document.createElement("span");
      box.classList.add("box");

      let plus = document.createElement("p");
      plus.classList.add("box_plus");
      plus.innerHTML = "+";
      box.appendChild(plus);

      faq.$question.appendChild(question3);
      faq.$question.appendChild(box);

      let answer3 = document.createElement("p");
      answer3.innerHTML =
        "Shipping is not available to Puerto Rico, currently.";
      faq.$answer.appendChild(answer3);
    }

    let box = faq.$question.childNodes[1];

    box.addEventListener("click", () => {
      faq.$answer.classList.toggle("hidden");

      if (faq.$answer.classList.contains("hidden")) {
        box.removeChild(box.childNodes[0]);

        let plus = document.createElement("p");
        plus.classList.add("box_plus");
        plus.innerHTML = "+";
        box.appendChild(plus);
      } else {
        box.removeChild(box.childNodes[0]);

        let minus = document.createElement("p");
        minus.classList.add("box_minus");
        minus.innerHTML = "-";
        box.appendChild(minus);
      }
    });
  });
};
