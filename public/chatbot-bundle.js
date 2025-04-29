import { createRoot } from 'react-dom/client';
import ChatApp from './ChatApp';

// This function will be called by the widget script
window.mountNekoFoxChat = function(containerId, shadowRoot) {
  // If we're using Shadow DOM
  if (shadowRoot) {
    const container = shadowRoot.getElementById(containerId);
    
    // We need to inject our CSS into the Shadow DOM
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      /* Your tailwind-generated CSS would go here */
      /* For now, we'll include basic styles */
      .fixed { position: fixed; }
      .bottom-4 { bottom: 1rem; }
      .right-4 { right: 1rem; }
      .z-50 { z-index: 50; }
      /* Add more styles as needed */
    `;
    shadowRoot.appendChild(styleSheet);
    
    const root = createRoot(container);
    root.render(<ChatApp />);
  } 
  // Regular DOM mounting
  else {
    const container = document.getElementById(containerId);
    const root = createRoot(container);
    root.render(<ChatApp />);
  }
}; 