const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'electron', 'preload.js'), // preload helyes útvonala
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // HTML helyes útvonala
  win.loadFile(path.join(__dirname, 'html', 'index.html'));
}

app.whenReady().then(createWindow);
