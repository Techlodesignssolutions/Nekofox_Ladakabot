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
  
  // Load React first
  const reactScript = document.createElement('script');
  reactScript.src = 'https://unpkg.com/react@18/umd/react.production.min.js';
  
  // Load ReactDOM after React
  const reactDomScript = document.createElement('script');
  reactDomScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';
  
  // Load your app bundle after React and ReactDOM
  const appScript = document.createElement('script');
  appScript.src = 'https://nekofox-ladakabot.vercel.app/chatbot-bundle.js';
  
  reactScript.onload = function() {
    document.body.appendChild(reactDomScript);
  };
  
  reactDomScript.onload = function() {
    document.body.appendChild(appScript);
  };
  
  appScript.onload = function() {
    // This function will be called by your bundle when it loads
    window.mountNekoFoxChat('nekofox-chatbot-root');
  };
  
  document.body.appendChild(reactScript);
})(); 