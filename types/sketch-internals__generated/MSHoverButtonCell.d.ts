interface MSHoverButtonCellUninitialized<InitializedType = MSHoverButtonCell> extends NSButtonCellUninitialized<MSHoverButtonCell> {}

interface MSHoverButtonCell extends NSButtonCell {
}

declare const MSHoverButtonCell: {
  alloc(): MSHoverButtonCellUninitialized;
  class(): MSHoverButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}
