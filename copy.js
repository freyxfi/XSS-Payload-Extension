document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const payload = urlParams.get('payload');
  document.getElementById('copyButton').addEventListener('click', () => {
    navigator.clipboard.writeText(decodeURIComponent(payload)).then(() => {
      alert('Payload copied to clipboard!');
      window.close();
    }).catch(err => {
      console.error('Copy failed:', err);
      alert('Failed to copy payload. Check console for details.');
    });
  });
});