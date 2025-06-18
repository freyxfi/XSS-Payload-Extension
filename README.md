# XSS-Payload-Extension
My Very first extension 

# XSS Payload Manager Browser Extension

A simple Chrome/Firefox extension that allows you to store XSS payloads and copy them via a right-click context menu.  
Project started on **June 18, 2025** to streamline security testing workflows.

---

## Overview

The **XSS Payload Manager** extension provides a convenient way to manage and use XSS payloads directly within your browser. It includes:

- A popup interface to **add/delete payloads**
- A right-click **context menu** to copy payloads quickly

---

## Features

-  Store multiple XSS payloads  
-  Add or 🗑 delete payloads via a popup UI  
-  Right-click context menu to select and copy payloads  
-  Customizable icon (e.g., your Twitter PFP)

---

##  Prerequisites

- Google Chrome or Mozilla Firefox  
- Basic familiarity with browser extensions and Git

---

##  Installation

```bash
# Clone the repository
git clone https://github.com/freyxfi/XSS-Payload-Extension.git

```

# For Chrome:
Go to `chrome://extensions/`

Enable Developer mode in the top right

Click Load unpacked

Select the project directory

The extension should now appear in your toolbar

---

# Usage
Add Payloads: Click the extension icon in the toolbar to open the popup, enter a new XSS payload in the textarea, and click "Add Payload."
Delete Payloads: Use the "Delete" button next to each payload in the popup list.
Copy Payloads: Right-click on any webpage, hover over "XSS Payloads" in the context menu, and select a payload. A popup will appear—click "Copy" to copy it to your clipboard.
Note: Use this tool responsibly for legitimate security testing only.

---

# Usage
Add Payloads
`Click the extension icon in your browser toolbar → enter your XSS payload → click Add Payload`

Delete Payloads
`Click the 🗑 icon next to a saved payload in the popup to remove it`

Copy Payloads
`Right-click on any webpage → hover over XSS Payloads → select a payload → click Copy in the popup`

⚠️ Use this tool responsibly and only for legitimate security testing.

---

#File Structure

| File            | Description                             |
| --------------- | --------------------------------------- |
| `manifest.json` | Extension manifest/config file          |
| `background.js` | Manages context menus & payload storage |
| `popup.html`    | Popup UI for managing payloads          |
| `popup.js`      | Handles interactivity in popup          |
| `copy.html`     | Minimal popup UI for copying payloads   |
| `copy.js`       | Logic for copying payloads to clipboard |
| `icon48.png`    | 48×48 icon (e.g., your Twitter PFP)     |
| `icon128.png`   | 128×128 icon (e.g., your Twitter PFP)   |


#  Troubleshooting

Copy Not Working
Open the browser console (Right-click → Inspect → Console) and check for errors. Make sure all required permissions are listed in manifest.json.

Extension Fails to Load
Check manifest.json for correct JSON syntax and make sure all file paths are correct and files exist.

# Contributing
Fork this repository, submit issues, or open pull requests to improve the extension. All contributions are welcome!

# Contact
For questions or support, please open an issue on the GitHub Issues page or add your preferred contact information.


Let me know if you'd like:

- A downloadable `.md` file version
- A pre-filled `LICENSE` file (MIT, Apache, etc.)
- Help exporting the extension as a ZIP for distribution

I'm happy to assist!

