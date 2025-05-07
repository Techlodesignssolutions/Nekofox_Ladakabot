(function() {
  // Only initialize once
  if (window.ladakaWidgetInitialized) return;
  window.ladakaWidgetInitialized = true;
  
  // Create container div with pointer-events: none
  const container = document.createElement('div');
  container.id = 'ladaka-widget-container';
  container.style.position = 'fixed';
  container.style.bottom = '20px';
  container.style.right = '20px';
  container.style.width = '64px';
  container.style.height = '64px';
  container.style.zIndex = '9999';
  container.style.borderRadius = '50%';
  container.style.transition = 'all 0.3s ease';
  container.style.overflow = 'hidden';
  // Make container click-through by default
  container.style.pointerEvents = 'none';
  
  document.body.appendChild(container);
  
  // Create iframe with pointer-events: auto
  const iframe = document.createElement('iframe');
  iframe.id = 'ladaka-chat-iframe';
  iframe.src = 'https://nekofox-ladakabot.vercel.app/widget?state=closed&transparent=true';
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.pointerEvents = 'auto'; // Make iframe capture clicks
  iframe.style.backgroundColor = 'transparent'; // Make iframe background transparent
  iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups');
  iframe.setAttribute('allow', 'clipboard-write microphone camera');
  iframe.setAttribute('allowTransparency', 'true');
  
  container.appendChild(iframe);
  
  // Listen for messages from the iframe
  window.addEventListener('message', function(event) {
    if (event.origin !== 'https://nekofox-ladakabot.vercel.app') return;
    
    if (event.data === 'open') {
      container.style.width = '400px';
      container.style.height = '600px';
      container.style.borderRadius = '10px';
      container.style.boxShadow = '0 4px 12px rgba(0,0,0,.15)';
      // Keep background transparent for click-through
      container.style.background = 'transparent';
    }
    
    if (event.data === 'close') {
      container.style.width = '64px';
      container.style.height = '64px';
      container.style.borderRadius = '50%';
      container.style.boxShadow = 'none';
      container.style.background = 'transparent';
    }
  });
})(); 