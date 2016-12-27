import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    ContentChild,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
    <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input() bindable = 1000;

  // Use variable defined in current template to map to class property
  @ViewChild('boundParagraph')
  boundParagraph: HTMLElement;

  // Use variable passed in the ng-conent to map to a class property
  @ContentChild('boundContent')
  boundContent: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.logHook('ngOnInit');
  }

  ngOnChanges() {
    this.logHook('ngOnChanges');
  }

  ngAfterContentChecked() {
    this.logHook('ngAfterContentChecked');
  }

  ngAfterContentInit() {
    this.logHook('ngAfterContentInit');
    console.log(this.boundContent);
  }

  ngAfterViewInit() {
    this.logHook('ngAfterViewInit');
    console.log(this.boundParagraph);
  }

  ngAfterViewChecked() {
    this.logHook('ngAfterViewChecked');
  }

  ngDoCheck() {
    this.logHook('ngDoCheck');
  }

  ngOnDestroy() {
    this.logHook('ngOnDestroy');
  }

  private logHook(hook: string) {
    console.log(hook);
  }

}
