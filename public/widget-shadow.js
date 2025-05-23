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
  // Make the container itself click-through by default
  container.style.pointerEvents = 'none';
  
  // Create Shadow DOM for isolation
  const shadow = container.attachShadow({ mode: 'closed' });
  
  // Create root for your app inside Shadow DOM
  const root = document.createElement('div');
  root.id = 'nekofox-chatbot-root';
  // But make the actual root element capture pointer events
  root.style.pointerEvents = 'auto';
  shadow.appendChild(root);
  
  document.body.appendChild(container);
  
  // Add base styles to control pointer events
  const baseStyles = document.createElement('style');
  baseStyles.textContent = `
    /* Make transparent areas click-through */
    #nekofox-chatbot-root {
      pointer-events: auto;
    }
    
    /* Ensure actual components capture clicks */
    #nekofox-chatbot-root button,
    #nekofox-chatbot-root input,
    #nekofox-chatbot-root a,
    #nekofox-chatbot-root [role="button"],
    #nekofox-chatbot-root .nekofox-chatbot {
      pointer-events: auto;
    }
  `;
  shadow.appendChild(baseStyles);
  
  // Always use Vercel in production
  const baseUrl = 'https://nekofox-ladakabot.vercel.app';
  
  // Load React first
  const reactScript = document.createElement('script');
  reactScript.src = 'https://unpkg.com/react@18/umd/react.production.min.js';
  
  // Load ReactDOM after React
  const reactDomScript = document.createElement('script');
  reactDomScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';
  
  // Load your app bundle after React and ReactDOM
  const appScript = document.createElement('script');
  appScript.src = `${baseUrl}/chatbot-bundle.js`;
  
  // Add scripts in sequence
  shadow.appendChild(reactScript);
  
  reactScript.onload = function() {
    shadow.appendChild(reactDomScript);
  };
  
  reactDomScript.onload = function() {
    shadow.appendChild(appScript);
  };
  
  appScript.onload = function() {
    if (typeof window.mountNekoFoxChat === 'function') {
      window.mountNekoFoxChat('nekofox-chatbot-root', shadow);
    } else {
      console.error('mountNekoFoxChat function not found');
    }
  };
  
  // Add error handlers for debugging
  reactScript.onerror = function() { console.error('Failed to load React'); };
  reactDomScript.onerror = function() { console.error('Failed to load ReactDOM'); };
  appScript.onerror = function() { console.error('Failed to load app bundle'); };
})();