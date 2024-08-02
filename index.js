const { app, BrowserWindow } = require('electron');
const path = require('path');

require('electron-reload')(path.join(__dirname, './nowplaying.json'), {
	/* DEV */
	// electron: require(`${__dirname}/node_modules/electron`),
	/* BUILD */
	electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
	forceHardReset: true,
	hardResetMethod: 'reload',
});

function createWindow() {
	let win = new BrowserWindow({
		// width: 800,
		// height: 600,
		width: 300,
		height: 95,
		webPreferences: {
			nodeIntegration: true,
		},
		useContentSize: true,
		frame: false,
		transparent: true,
		skipTaskbar: true,
	});
	// win.webContents.openDevTools();
	win.loadFile('index.html');

	win.setPosition(0, 0);
	win.webContents.on('did-finish-load', function () {
		win.setSize(300, 95);
		win.setAlwaysOnTop(true);
	});
}

app.on('ready', () => {
	createWindow();
});
