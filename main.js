const { app, BrowserWindow, nativeImage } = require('electron');

require("electron-reload")(__dirname, {    
    electron: require(`${__dirname}/node_modules/electron`),
  });

let win ;

function mainWindow () {

    const icon = nativeImage.createFromPath(`${app.getAppPath()}/build/icon.png`);

    if(app.dock){
        app.dock.setIcon(icon);
    }

    win = new BrowserWindow({
        width: 700,
        height: 600,
        resizable: true,
        autoHideMenuBar: true,
        //titleBarStyle: 'customButtonOnHover',
        alwaysOnTop: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL('http://localhost:3000');

    win.on('show', () => {
        window.show();
    });

    contents = win.webContents
}

function toggleDevTools() {
    contents.toggleDevTools();
}

function fullScreen() {
    win.isSimplesFullScreen() ? win.setSimplesFullScreen(false) 
    : win.setSimplesFullScreen(true);
}

app.on('ready' , mainWindow);


