import { Injectable, Optional, RendererFactory2, ViewEncapsulation } from '@angular/core';
import { PlatformState } from '@angular/platform-server';
import { TransferState } from './transfer-state';

@Injectable()
export class ServerTransferState extends TransferState {
  constructor(private state: PlatformState, private rendererFactory: RendererFactory2) {
    super();
  }

  /**
   * Inject the State into the bottom of the <head>
   */
  inject(): void {
    try {
      const document: any = this.state.getDocument();
      const transferStateString = JSON.stringify(this.toJson());
      const renderer = this.rendererFactory.createRenderer(document, {
        data: {},
        encapsulation: ViewEncapsulation.None,
        id: '-1',
        styles: []
      });

      const head = document.head;
      if (head.name !== 'head') {
        throw new Error('Please have <head> as the first element in your document');
      }

      const script = renderer.createElement('script');
      renderer.setValue(script, `window['TRANSFER_STATE'] = ${transferStateString}`);
      renderer.appendChild(head, script);
    } catch (e) {
      // tslint:disable-next-line:no-console
      console.error(e);
    }
  }
}
