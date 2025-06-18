document.addEventListener('DOMContentLoaded', () => {
  const newPayloadInput = document.getElementById('newPayload');
  const addPayloadButton = document.getElementById('addPayload');
  const payloadList = document.getElementById('payloadList');

  // Load and display existing payloads
  function loadPayloads() {
    chrome.storage.sync.get('payloads', (data) => {
      payloadList.innerHTML = '';
      const payloads = data.payloads || [];
      payloads.forEach((payload, index) => {
        const li = document.createElement('li');
        li.textContent = payload.length > 30 ? payload.substring(0, 27) + '...' : payload;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => deletePayload(index);
        li.appendChild(deleteBtn);
        payloadList.appendChild(li);
      });
    });
  }

  // Add new payload
  addPayloadButton.addEventListener('click', () => {
    const payload = newPayloadInput.value.trim();
    if (payload) {
      chrome.storage.sync.get('payloads', (data) => {
        const payloads = data.payloads || [];
        payloads.push(payload);
        chrome.storage.sync.set({ payloads }, () => {
          newPayloadInput.value = '';
          loadPayloads();
        });
      });
    }
  });

  // Delete payload
  function deletePayload(index) {
    chrome.storage.sync.get('payloads', (data) => {
      const payloads = data.payloads || [];
      payloads.splice(index, 1);
      chrome.storage.sync.set({ payloads }, loadPayloads);
    });
  }

  // Initial load
  loadPayloads();
});