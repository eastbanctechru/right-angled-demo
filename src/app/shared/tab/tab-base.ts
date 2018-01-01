export abstract class Tab {
  public tabTitle: string = '';
  public isActive: boolean = false;
  public activate(): void {
    this.isActive = true;
  }
  public deactivate(): void {
    this.isActive = false;
  }
}
