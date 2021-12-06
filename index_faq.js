class FAQ {
  $faq;
  $question;
  $answer;

  constructor() {
    this.$faq = document.createElement("div");
    this.$faq.classList.add("faq");

    this.$question = document.createElement("div");
    this.$question.classList.add("question");

    this.$answer = document.createElement("div");
    this.$answer.classList.add("answer");
  }

  render() {
    this.$faq.appendChild(this.$question);
    this.$faq.appendChild(this.$answer);

    return this.$faq;
  }
}
