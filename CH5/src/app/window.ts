import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('Global window object', {
  factory: () => window
});

export interface ElectronWindow extends Window {
  require(module: string): any;
}
