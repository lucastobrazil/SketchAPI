interface MSMultipleColorStylePartInspectorViewControllerUninitialized<InitializedType = MSMultipleColorStylePartInspectorViewController> extends MSMultipleStylePartInspectorViewControllerUninitialized<MSMultipleColorStylePartInspectorViewController> {}

interface MSMultipleColorStylePartInspectorViewController extends MSMultipleStylePartInspectorViewController {
  openPopoverAtIndex_preferringNative(index: NSUInteger, prefersNative: boolean): void;
  closePopoverImmediately(immediately: boolean): void;
}

declare const MSMultipleColorStylePartInspectorViewController: {
  alloc(): MSMultipleColorStylePartInspectorViewControllerUninitialized;
  class(): MSMultipleColorStylePartInspectorViewController;
}
