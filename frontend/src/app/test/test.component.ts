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
    TuiIconPipe
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


  public section:string = "mail"


  public changeSection(item:string) {
    this.section = item
  }

}
