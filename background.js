chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed or updated');
  chrome.storage.sync.get('payloads', (data) => {
    if (!data.payloads) {
      const defaultPayloads = [
        '<script>alert("XSS Test 1");</script>',
        '<img src=x onerror=alert("XSS Test 2")>',
        '<svg onload=alert("XSS Test 3")>'
      ];
      chrome.storage.sync.set({ payloads: defaultPayloads }, () => {
        console.log('Default payloads set:', defaultPayloads);
      });
    }
  });

  chrome.contextMenus.create({
    id: "xss-payloads",
    title: "XSS Payloads",
    contexts: ["all"]
  });
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.payloads) {
    console.log('Payloads updated:', changes.payloads.newValue);
    updateContextMenu(changes.payloads.newValue);
  }
});

function updateContextMenu(payloads) {
  console.log('Updating context menu with payloads:', payloads);
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "xss-payloads",
      title: "XSS Payloads",
      contexts: ["all"]
    });

    payloads.forEach((payload, index) => {
      chrome.contextMenus.create({
        id: `payload-${index}`,
        parentId: "xss-payloads",
        title: payload.length > 30 ? payload.substring(0, 27) + "..." : payload,
        contexts: ["all"]
      });
    });
  });
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log('Context menu clicked:', info.menuItemId);
  if (info.menuItemId.startsWith("payload-")) {
    const index = parseInt(info.menuItemId.split('-')[1]);
    console.log('Selected payload index:', index);
    chrome.storage.sync.get('payloads', (data) => {
      const payload = data.payloads[index];
      console.log('Payload to copy:', payload);
      if (payload) {
        chrome.windows.create({
          url: chrome.runtime.getURL('copy.html') + '?payload=' + encodeURIComponent(payload),
          type: 'popup',
          width: 300,
          height: 200
        });
      } else {
        console.log('No payload found at index:', index);
      }
    });
  }
});