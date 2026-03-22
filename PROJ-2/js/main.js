const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        resizable: false,
        mazimizable: false,
        fullscreenable: true,
        frame: false,
        transparent: true,
        backgroundColor: '#00000000',
        webPreferences: {
            contextIsolation: true
        }
    })

    win.loadFile('index.html');
    // win.setAlwaysOnTop(true);
}

app.whenReady().then(createWindow)