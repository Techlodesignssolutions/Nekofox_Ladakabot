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
  
  // Load React first
  const reactScript = document.createElement('script');
  reactScript.src = 'https://unpkg.com/react@18/umd/react.production.min.js';
  
  // Load ReactDOM after React
  const reactDomScript = document.createElement('script');
  reactDomScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';
  
  // Load your app bundle after React and ReactDOM
  const appScript = document.createElement('script');
  appScript.src = 'https://nekofox-ladakabot.vercel.app/chatbot-bundle.js';
  
  // Add scripts in sequence
  shadow.appendChild(reactScript);
  
  reactScript.onload = function() {
    shadow.appendChild(reactDomScript);
  };
  
  reactDomScript.onload = function() {
    shadow.appendChild(appScript);
  };
  
  appScript.onload = function() {
    window.mountNekoFoxChat('nekofox-chatbot-root', shadow);
  };
})();