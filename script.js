document.addEventListener("DOMContentLoaded", () => {
  // بوت الشات (الكود الأصلي)
  const chatButton = document.getElementById("chat-button");
  const chatBox = document.getElementById("chat-box");
  const chatClose = document.getElementById("chat-close");
  const chatInput = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");

  chatButton.addEventListener("click", () => {
    chatBox.classList.remove("hidden");
    chatBox.setAttribute("aria-hidden", "false");
  });

  chatClose.addEventListener("click", () => {
    chatBox.classList.add("hidden");
    chatBox.setAttribute("aria-hidden", "true");
  });

  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && chatInput.value.trim() !== "") {
      const userMessage = chatInput.value.trim();
      const userMsgElem = document.createElement("p");
      userMsgElem.textContent = `أنت: ${userMessage}`;
      chatBody.appendChild(userMsgElem);
      chatInput.value = "";
      chatBody.scrollTop = chatBody.scrollHeight;

      // رد البوت (بسيط)
      const botReply = document.createElement("p");
      botReply.textContent = "بوت Adham AI: شكراً لسؤالك، سنرد عليك قريبًا.";
      chatBody.appendChild(botReply);
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  });

  // --- كود مودال التسجيل ---

  const authModal = document.getElementById("auth-modal");
  const openAuthBtn = document.getElementById("open-auth-modal");
  const closeAuthBtn = document.getElementById("auth-modal-close");
  const btnRegister = document.getElementById("btn-register");
  const btnLogin = document.getElementById("btn-login");

  // فتح مودال التسجيل عند الضغط على الزر
  openAuthBtn.addEventListener("click", () => {
    authModal.classList.remove("hidden");
    authModal.setAttribute("aria-hidden", "false");
    openAuthBtn.setAttribute("aria-expanded", "true");
  });

  // إغلاق مودال التسجيل عند الضغط على زر الإغلاق
  closeAuthBtn.addEventListener("click", () => {
    authModal.classList.add("hidden");
    authModal.setAttribute("aria-hidden", "true");
    openAuthBtn.setAttribute("aria-expanded", "false");
  });

  // تحويل لصفحة التسجيل
  btnRegister.addEventListener("click", () => {
    window.location.href = "register.html"; // عدل الرابط حسب موقع صفحة التسجيل عندك
  });

  // تحويل لصفحة تسجيل الدخول
  btnLogin.addEventListener("click", () => {
    window.location.href = "login.html"; // عدل الرابط حسب موقع صفحة تسجيل الدخول عندك
  });
});
