const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow() {
const win = new BrowserWindow({
width: 800,
height: 600,
icon: path.join(__dirname, 'icon.ico')
});
win.loadFile('index.html');
}

app.whenReady().then(createWindow);
// Pechar a app cando tódalas xanelas están pechadas (excepto en Mac)
app.on('window-all-closed', () => { if (process.platform !== 'darwin') { app.quit(); }
});

// Re-crear xanelas ao activar a app (en Mac)
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) {
createWindow(); } });