"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const cats = {
    'Coding Cat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
    'Compiling Cat': 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif'
};
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('catCoding.start', () => {
        const panel = vscode.window.createWebviewPanel('catCoding', 'Cat Coding', vscode.ViewColumn.One, {});
        let iteration = 0;
        const updateWebview = () => {
            const cat = iteration++ % 2 ? 'Compiling Cat' : 'Coding Cat';
            panel.title = cat;
            panel.webview.html = getWebviewContent(cat);
        };
        // Set initial content
        updateWebview();
        // And schedule updates to the content every second
        setInterval(updateWebview, 1000);
    }));
}
exports.activate = activate;
function getWebviewContent(cat) {
    return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Cat Coding</title>
	</head>
	<body>
		<img src="${cats[cat]}" width="300" />
	</body>
	</html>`;
}
//# sourceMappingURL=extension.js.map