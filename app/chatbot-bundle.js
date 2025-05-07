import { createRoot } from 'react-dom/client';
import React from 'react';
import ChatApp from './ChatApp';

// Make sure this function is properly exposed to the global scope
window.mountNekoFoxChat = function(containerId, shadowRoot) {
  console.log('Mounting chat app to', containerId);
  
  try {
    // If we're using Shadow DOM
    if (shadowRoot) {
      const container = shadowRoot.getElementById(containerId);
      
      if (!container) {
        console.error('Container not found in shadow root:', containerId);
        return;
      }
      
      // We need to inject our CSS into the Shadow DOM
      const styleSheet = document.createElement('style');
      styleSheet.textContent = `
        /* Basic styles */
        .fixed { position: fixed; }
        .bottom-4 { bottom: 1rem; }
        .right-4 { right: 1rem; }
        .z-50 { z-index: 50; }
        /* Add more styles as needed */
      `;
      shadowRoot.appendChild(styleSheet);
      
      const root = createRoot(container);
      root.render(React.createElement(ChatApp));
    } 
    // Regular DOM mounting
    else {
      const container = document.getElementById(containerId);
      
      if (!container) {
        console.error('Container not found in DOM:', containerId);
        return;
      }
      
      const root = createRoot(container);
      root.render(React.createElement(ChatApp));
    }
    console.log('Chat app mounted successfully');
  } catch (error) {
    console.error('Error mounting chat app:', error);
  }
};

// Log when the script loads to help with debugging
console.log('Chatbot bundle loaded, mountNekoFoxChat function is available'); 