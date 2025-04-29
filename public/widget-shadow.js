(function() {
  // Only initialize once
  if (window.nekoFoxChatInitialized) return;
  window.nekoFoxChatInitialized = true;
  
  // Create container
  const container = document.createElement('div');
  container.id = 'nekofox-chatbot-container';
  container.style.position = 'fixed';
  container.style.bottom = '20px';
  container.style.right = '20px';
  container.style.zIndex = '9999';
  
  // Create Shadow DOM for isolation
  const shadow = container.attachShadow({ mode: 'closed' });
  
  // Create root for your app inside Shadow DOM
  const root = document.createElement('div');
  root.id = 'nekofox-chatbot-root';
  shadow.appendChild(root);
  
  document.body.appendChild(container);
  
  // Load your app bundle
  const script = document.createElement('script');
  script.src = 'https://nekofox-ladakabot-djrp.vercel.app/chatbot-bundle.js';
  script.onload = function() {
    window.mountNekoFoxChat('nekofox-chatbot-root', shadow);
  };
  shadow.appendChild(script);
})();