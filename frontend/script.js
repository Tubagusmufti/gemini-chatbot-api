document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chat-form");
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  // pesan user/bot
  function tambahPesan(role, teks) {
    const wrapper = document.createElement("div");
    wrapper.className = `flex ${role === "user" ? "justify-end" : "justify-start"}`;

    const bubble = document.createElement("div");
    if (role === "user") {
      bubble.className = "bg-purple-600 text-white px-4 py-2 rounded-2xl max-w-xs shadow";
    } else {
      bubble.className = "bg-gray-700 text-white px-4 py-2 rounded-2xl max-w-xs shadow";
    }
    bubble.textContent = teks;

    wrapper.appendChild(bubble);
    chatBox.appendChild(wrapper);
    chatBox.scrollTop = chatBox.scrollHeight;
    return bubble;
  }

  // bubble loading
  function tambahLoadingBubble() {
    const wrapper = document.createElement("div");
    wrapper.className = "flex justify-start";
    wrapper.innerHTML = `
      <div class="typing-bubble">
        <span></span><span></span><span></span>
      </div>
    `;
    chatBox.appendChild(wrapper);
    chatBox.scrollTop = chatBox.scrollHeight;
    return wrapper;
  }

  // Event submit form
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const pesan = userInput.value.trim();
    if (!pesan) return;

    tambahPesan("user", pesan);
    userInput.value = "";

    const loadingEl = tambahLoadingBubble();

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: pesan }]
        })
      });

      loadingEl.remove();

      if (!res.ok) {
        tambahPesan("bot", "Gagal mendapatkan respons dari server.");
        return;
      }

      const data = await res.json();
      tambahPesan("bot", data.result || "Maaf, tidak ada respons yang diterima.");
    } catch (err) {
      console.error(err);
      loadingEl.remove();
      tambahPesan("bot", "Terjadi kesalahan saat menghubungi server.");
    }
  });
});
