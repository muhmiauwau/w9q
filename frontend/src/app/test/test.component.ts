import {NgFor} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiSurface} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';
import {TuiSearch} from '@taiga-ui/layout';
import {TuiCardLarge} from '@taiga-ui/layout';
import {TuiButton, TuiLink, TuiTextfield} from '@taiga-ui/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core';

import {DndModule} from 'ngx-drag-drop';
import {DndDropEvent} from 'ngx-drag-drop';

interface kEntryInter {
  id: number;
  title: string;
  status: number;
}


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NgFor, 
    ReactiveFormsModule,
    TuiAvatar, 
    TuiCell, 
    TuiSurface,
    TuiCardLarge,
    TuiSearch,
    TuiTextfield,
    TuiButton,
    TuiDataList, 
    TuiDropdown,
    TuiIcon, 
    TuiIconPipe,
    DndModule
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.less'
})
export class TestComponent {

  // kanban
  protected readonly sizes = ['s', 'm', 'l'] as const;
  protected readonly cols = ['a', 'b', 'c', 'd'] as const;


    // search
  protected readonly form = new FormGroup({
      search: new FormControl(),
  });



  // avatar dropdown
  protected readonly items = ['Profil'];
 
  protected open = false;

  protected onClick(): void {
      this.open = false;
  }


  public section:string = "kanban"


  public changeSection(item:string) {
    this.section = item
  }


  public status:any = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]

  public kEntries:kEntryInter[] = [
    { id: 1, title: 'test1', status: 1 },
    { id: 2, title: 'q3t5r', status: 3 },
    { id: 3, title: 'y8h29', status: 4 },
    { id: 4, title: 'a2s8t', status: 2 },
    { id: 5, title: 'z4x1p', status: 5 },
    { id: 6, title: 'b5n9w', status: 1 },
    { id: 7, title: 'm6r3e', status: 4 },
    { id: 8, title: 'c7o4f', status: 2 },
    { id: 9, title: 'd8p5g', status: 3 },
    { id: 10, title: 'e9q6h', status: 5 },
    { id: 11, title: 'f0r7j', status: 1 },
    { id: 12, title: 'g1s8k', status: 3 },
    { id: 13, title: 'h2t9l', status: 2 },
    { id: 14, title: 'i3u0m', status: 4 },
    { id: 15, title: 'j4v1n', status: 5 },
    { id: 16, title: 'k5w2o', status: 1 },
    { id: 17, title: 'l6x3p', status: 3 },
    { id: 18, title: 'm7y4q', status: 2 },
    { id: 19, title: 'n8z5r', status: 4 },
    { id: 20, title: 'o9a6s', status: 5 },
    { id: 21, title: 'p0b7t', status: 1 },
    { id: 22, title: 'q1c8u', status: 3 },
    { id: 23, title: 'r2d9v', status: 2 },
    { id: 24, title: 's3e0w', status: 4 },
    { id: 25, title: 't4f1x', status: 5 },
    { id: 26, title: 'u5g2y', status: 1 },
    { id: 27, title: 'v6h3z', status: 3 },
    { id: 28, title: 'w7i4a', status: 2 },
    { id: 29, title: 'x8j5b', status: 4 },
    { id: 30, title: 'y9k6c', status: 5 }
  ]




  onDragStart(event: DragEvent) {

    // console.log("drag started", JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {

    // console.log("drag ended", JSON.stringify(event, null, 2));
  }

  onDraggableMoved(event: DragEvent) {

    // console.log("draggable moved", JSON.stringify(event, null, 2));
  }

  onDragCanceled(event: DragEvent) {

    // console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {

    // console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent, colId:number) {
    let find = this.kEntries.find((e:kEntryInter) => e.id == event.data)
    if (find && find.status ) find.status = colId
    
    // console.log("dropped", JSON.stringify(event, null, 2));
  }

}
