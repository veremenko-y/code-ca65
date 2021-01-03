// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    let workspaceRoot = vscode.workspace.rootPath;
	if (workspaceRoot) {
		let ca65Promise: Thenable<vscode.Task[]> | undefined = undefined;
        vscode.window.onDidChangeActiveTextEditor(() => ca65Promise = undefined);
    }
}

// this method is called when your extension is deactivated
export function deactivate() {
}