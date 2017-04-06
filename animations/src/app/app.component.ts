import { animate, Component, keyframes, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      // Animation meta data - for our state value below
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      //Both in one definition
      //transition('normal <=> highlighted', animate(300)),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800))
    ]),
    trigger('wildState', [
      // Animation meta data - for our state value below
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(200)),
      transition('highlighted => normal', animate(1200)),
      /*transition('shrunken <=> *', animate(500, style({
        // this instantly changes border and jumps to end state
        borderRadius: '50px'
      }))),*/
      transition('shrunken <=> *', [
        // Instant
        style({
          'background-color': 'orange'
        }),
        // in between transition
        animate(1000, style({
          'border-radius': '50px'
        })),
        // Before final state transformation
        animate(500)  // Now transition to end state
      ])
    ]),
    trigger('list1', [
      // Animation meta data - for our state value below
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      // Animate from not-existent to any state. This is when new element enters the dom
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
        ]),
        // Animate to delete
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
        ])
    ]),
    trigger('list2', [
      // Animation meta data - for our state value below
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        // Default keyframe time is divided equally, override with offset
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
        ]),
        // Animate to delete
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
        ])
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item: any) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    this.state = (this.state == 'normal') ? 'highlighted' : 'normal';
    this.wildState = (this.wildState == 'normal') ? 'highlighted' : 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }
}
