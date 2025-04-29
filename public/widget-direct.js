(function() {
  // Only initialize once
  if (window.nekoFoxChatInitialized) return;
  window.nekoFoxChatInitialized = true;
  
  // Create container div
  const container = document.createElement('div');
  container.id = 'nekofox-chatbot-root';
  container.style.position = 'fixed';
  container.style.bottom = '20px';
  container.style.right = '20px';
  container.style.zIndex = '9999';
  document.body.appendChild(container);
  
  // Load React and your app bundle
  const script = document.createElement('script');
  script.src = 'https://nekofox-ladakabot.vercel.app/chatbot-bundle.js';
  script.onload = function() {
    // This function will be called by your bundle when it loads
    window.mountNekoFoxChat('nekofox-chatbot-root');
  };
  document.body.appendChild(script);
})(); 