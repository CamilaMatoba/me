const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("is-open", !isOpen);
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

document.querySelector("[data-contact-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const subject = encodeURIComponent(formData.get("subject") || "Website enquiry");
  const body = encodeURIComponent(`Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`);
  const note = form.querySelector("[data-form-note]");
  if (note) note.textContent = "Your email app will open with your message ready to send.";
  window.location.href = `mailto:camila@matoba.com.br?subject=${subject}&body=${body}`;
});