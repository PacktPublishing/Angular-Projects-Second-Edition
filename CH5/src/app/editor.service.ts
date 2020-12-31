import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { ElectronWindow, WINDOW } from './window';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  private get ipcRenderer(): Electron.IpcRenderer {
    return this.window.require('electron').ipcRenderer;
  }

  constructor(@Inject(WINDOW) private window: ElectronWindow) {}

  getContent(): Promise<string> {
    return this.ipcRenderer.invoke('getContent');
  }

  setContent(content: string) {
    this.ipcRenderer.invoke('setContent', content);
  }

}
