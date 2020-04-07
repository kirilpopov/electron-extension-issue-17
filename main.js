const { app, BrowserWindow } = require('electron');
const { ExtensibleSession } = require("electron-extensions/main");
const { resolve } = require("path");

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    // and load the index.html of the app.
    win.loadFile('index.html')

    // Open the DevTools.
    win.webContents.openDevTools()
}

// Some APIs can only be used after this event occurs.
const extensions = new ExtensibleSession(({
    preloadPath: resolve(__dirname, 'preload.js'),
}));

app.whenReady().then(async () => {
    extensions.loadExtension('./sample-extension');
    createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})