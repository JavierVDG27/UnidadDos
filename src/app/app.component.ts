import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteAutoActiveFirstOptionExample } from "./components/autocomplete/autocomplete.component";
import { BadgeHarnessExample } from "./components/badge/badge.component";
import { ButtonOverviewExample } from "./components/buttom/buttom.component";
import { ButtonToggleModeExample } from "./components/button-toggle/button-toggle.component";
import { CardActionsExample } from "./components/card/card.component";
import { CheckboxConfigurableExample } from "./components/checkbox/checkbox.component";
import { ChipsAutocompleteExample } from "./components/chips/chips.component";
import { DialogAnimationsExample } from "./components/dialog/dialog.component";
import { DividerOverviewExample } from "./components/divider/divider.component";
import { DatepickerValueExample } from "./components/datepicker/datepicker.component";
import { FormFieldOverviewExample } from "./components/form-field/form-field.component";
import { GridListOverviewExample } from "./components/grid-list/grid-list.component";
import { AutocompletedosComponent } from "./components/autocompletedos/autocompletedos.component";
import { IconComponent } from "./components/icon/icon.component";
import { InputComponent } from "./components/input/input.component";
import { ListComponent } from "./components/list/list.component";
import { MenuComponent } from "./components/menu/menu.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { BottomSheetOverviewExampleSheet, BottomSheetOverviewExample } from "./components/bottom-sheet/bottom-sheet.component";
import { ProgressBarDeterminateExample } from "./components/progress-bar/progress-bar.component";
import { ProgressSpinnerComponent } from "./components/progress-spinner/progress-spinner.component";
import { RadioButtonComponent } from "./components/radio-button/radio-button.component";
import { RipplesComponent } from "./components/ripples/ripples.component";
import { SelectCustomTriggerExample } from "./components/select/select.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { SlideToggleComponent } from "./components/slide-toggle/slide-toggle.component";
import { SliderComponent } from "./components/slider/slider.component";
import { SnackbarComponent } from "./components/snackbar/snackbar.component";
import { SortHeaderComponent } from "./components/sort-header/sort-header.component";
import { TableComponent } from "./components/table/table.component";
import { TabsComponent } from "./components/tabs/tabs.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { TooltipComponent } from "./components/tooltip/tooltip.component";
import { TreeComponent } from "./components/tree/tree.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AutocompleteAutoActiveFirstOptionExample,
    BadgeHarnessExample,
    ButtonOverviewExample,
    ButtonToggleModeExample,
    CardActionsExample,
    CheckboxConfigurableExample,
    ChipsAutocompleteExample,
    DialogAnimationsExample,
    DividerOverviewExample,
    DatepickerValueExample,
    FormFieldOverviewExample,
    GridListOverviewExample,
    AutocompletedosComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    BottomSheetOverviewExampleSheet,
    ProgressBarDeterminateExample,
    ProgressSpinnerComponent,
    RadioButtonComponent,
    RipplesComponent,
    SelectCustomTriggerExample,
    SidenavComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortHeaderComponent,
    TableComponent,
    TabsComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent, BottomSheetOverviewExample],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UnidadDos';
}
