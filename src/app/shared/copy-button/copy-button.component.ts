import { Component, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import * as Clipboard from "clipboard";
import { isBrowser } from "../../runtime";

const isBowser: boolean = typeof document === "object" && !!document;

@Component({
    selector: "rt-demo-copy-button",
    styleUrls: ["copy-button.component.css"],
    template: `<button class="btn btn-primary" title="Copy source code to clipboard">Copy code</button>`
})
export class CopyButtonComponent implements OnInit, OnDestroy {
    @Input() public text: string = null;
    private clipboard: Clipboard;
    constructor(private elementRef: ElementRef) {}
    public ngOnInit(): void {
        if (isBrowser) {
            this.clipboard = new Clipboard(this.elementRef.nativeElement, {
                text: this.getText
            });
        }
    }
    public ngOnDestroy(): void {
        if (this.clipboard) {
            this.clipboard.destroy();
        }
    }
    public getText = (): string => {
        return this.text;
    };
}
