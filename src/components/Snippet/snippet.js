export function createSnippet({ language = "html", code = "" }) {
    const wrapper = document.createElement("div");
    wrapper.className = "snippet-wrapper";
  
    const pre = document.createElement("pre");
    pre.className = `snippet-box language-${language}`;
  
    const codeEl = document.createElement("code");
    codeEl.textContent = code;
    pre.appendChild(codeEl);
  
    const copyBtn = document.createElement("button");
    copyBtn.className = "snippet-copy-btn";
    copyBtn.textContent = "📋 Copy";
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(code).then(() => {
        copyBtn.textContent = "✅ Copied!";
        setTimeout(() => (copyBtn.textContent = "📋 Copy"), 1500);
      });
    };
  
    wrapper.appendChild(pre);
    wrapper.appendChild(copyBtn);
    return wrapper;
  }
  