// Тут можно менять причины. Их может быть меньше или больше 27.
const reasons = [
  "за твою улыбку",
  "за твою доброту",
  "за твой смех",
  "за твою нежность",
  "за твой характер",
  "за твою красоту",
  "за твою поддержку",
  "за твои глаза",
  "за твою честность",
  "за тепло рядом с тобой",
  "за наши разговоры",
  "за твою заботу",
  "за твою энергию",
  "за твою искренность",
  "за то, как ты вдохновляешь",
  "за уют, который ты создаёшь",
  "за твою веру в меня",
  "за наши воспоминания",
  "за твою женственность",
  "за твою силу",
  "за твою мягкость",
  "за то, что ты настоящая",
  "за каждое сообщение",
  "за каждый взгляд",
  "за каждый наш день",
  "за мечты, которые хочется строить вместе",
  "просто за то, что ты есть",
];

const surprisePhrases = [
  "Нехватит вселенной, чтобы передать, как сильно я тебя люблю ❤️",
  "Ты — мой самый главный подарок судьбы!",
  "Пусть твои 27 будут началом самого счастливого года.",
  "Я рядом. Я люблю. Я счастлив с тобой!.",
];

const reasonList = document.getElementById("reasonList");
reasons.forEach((text, index) => {
  const item = document.createElement("div");
  item.className = "reason";
  item.innerHTML = `<b>${index + 1}.</b> ${text}`;
  reasonList.appendChild(item);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.16 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const surpriseButton = document.getElementById("surpriseButton");
const surpriseText = document.getElementById("surpriseText");
let phraseIndex = 0;

surpriseButton.addEventListener("click", () => {
  phraseIndex = (phraseIndex + 1) % surprisePhrases.length;
  surpriseText.textContent = surprisePhrases[phraseIndex];
  createHearts(10);
});

function createHearts(count = 1) {
  const container = document.querySelector(".floating-hearts");

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.textContent = "♡";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 18 + Math.random() * 26 + "px";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 7200);
  }
}

setInterval(() => createHearts(1), 1600);
