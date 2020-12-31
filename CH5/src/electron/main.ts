import { app, BrowserWindow, ipcMain } from 'electron';
import * as fs from 'fs';
import * as path from 'path';

const contentFile = path.join(app.getPath('userData'), 'content.html');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
});


ipcMain.handle('getContent', () => {
  if (fs.existsSync(contentFile)) {
    const result = fs.readFileSync(contentFile);
    return result.toString();
  }
  return '';
});

ipcMain.handle('setContent', ({}, content: string) => {
  fs.writeFileSync(contentFile, content);
});
