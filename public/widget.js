(function() {
  // Only initialize once
  if (window.nekoFoxChatInitialized) return;
  window.nekoFoxChatInitialized = true;
  
  // Create widget container
  const container = document.createElement('div');
  container.id = 'nekofox-chatbot-container';
  container.style.position = 'fixed';
  container.style.bottom = '20px';
  container.style.right = '20px';
  container.style.zIndex = '9999';
  document.body.appendChild(container);

  // Create and load the iframe
  const iframe = document.createElement('iframe');
  iframe.src = 'https://nekofox-ladakabot.vercel.app/widget';
  iframe.style.border = 'none';
  iframe.style.width = '400px';
  iframe.style.height = '600px';
  iframe.style.borderRadius = '10px';
  iframe.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  iframe.style.display = 'none'; // Start hidden, show only the avatar
  container.appendChild(iframe);
  
  // Create the avatar button
  const avatarButton = document.createElement('div');
  avatarButton.id = 'nekofox-avatar-button';
  avatarButton.style.width = '60px';
  avatarButton.style.height = '60px';
  avatarButton.style.borderRadius = '50%';
  avatarButton.style.backgroundColor = '#ff6600';
  avatarButton.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
  avatarButton.style.cursor = 'pointer';
  avatarButton.style.display = 'flex';
  avatarButton.style.alignItems = 'center';
  avatarButton.style.justifyContent = 'center';
  avatarButton.innerHTML = '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
  container.appendChild(avatarButton);
  
  // Toggle chat on avatar click
  avatarButton.addEventListener('click', () => {
    if (iframe.style.display === 'none') {
      iframe.style.display = 'block';
      avatarButton.style.display = 'none';
    }
  });

  // Add communication between parent site and iframe
  window.addEventListener('message', (event) => {
    // Handle messages from the iframe
    if (event.origin === 'https://nekofox-ladakabot.vercel.app') {
      if (event.data.type === 'resize') {
        iframe.style.height = event.data.height + 'px';
      } else if (event.data.type === 'close') {
        iframe.style.display = 'none';
        avatarButton.style.display = 'flex';
      }
    }
  });
})(); 