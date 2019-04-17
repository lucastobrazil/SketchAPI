interface CALayerUninitialized<InitializedType = CALayer> extends NSObjectUninitialized<CALayer> {
  initWithLayer(layer: any): InitializedType;
}

interface CALayer extends NSObject, INSSecureCoding, ICAMediaTiming {
  addConstraint(c: CAConstraint): void;
  presentationLayer(): CALayer;
  modelLayer(): CALayer;
  shouldArchiveValueForKey(key: NSString | string): boolean;
  affineTransform(): CGAffineTransform;
  setAffineTransform(m: CGAffineTransform): void;
  contentsAreFlipped(): boolean;
  removeFromSuperlayer(): void;
  addSublayer(layer: CALayer): void;
  insertSublayer_atIndex(layer: CALayer, idx: number): void;
  insertSublayer_below(layer: CALayer, sibling: CALayer | null): void;
  insertSublayer_above(layer: CALayer, sibling: CALayer | null): void;
  replaceSublayer_with(oldLayer: CALayer, newLayer: CALayer): void;
  convertPoint_fromLayer(p: CGPoint, l: CALayer | null): CGPoint;
  convertPoint_toLayer(p: CGPoint, l: CALayer | null): CGPoint;
  convertRect_fromLayer(r: CGRect, l: CALayer | null): CGRect;
  convertRect_toLayer(r: CGRect, l: CALayer | null): CGRect;
  convertTime_fromLayer(t: CFTimeInterval, l: CALayer | null): CFTimeInterval;
  convertTime_toLayer(t: CFTimeInterval, l: CALayer | null): CFTimeInterval;
  hitTest(p: CGPoint): CALayer;
  containsPoint(p: CGPoint): boolean;
  display(): void;
  setNeedsDisplay(): void;
  setNeedsDisplayInRect(r: CGRect): void;
  needsDisplay(): boolean;
  displayIfNeeded(): void;
  drawInContext(ctx: CGContextRef): void;
  renderInContext(ctx: CGContextRef): void;
  preferredFrameSize(): CGSize;
  setNeedsLayout(): void;
  needsLayout(): boolean;
  layoutIfNeeded(): void;
  layoutSublayers(): void;
  resizeSublayersWithOldSize(size: CGSize): void;
  resizeWithOldSuperlayerSize(size: CGSize): void;
  actionForKey(event: NSString | string): any;
  addAnimation_forKey(anim: CAAnimation, key: NSString | string | null): void;
  removeAllAnimations(): void;
  removeAnimationForKey(key: NSString | string): void;
  animationKeys(): NSArray<any>;
  animationForKey(key: NSString | string): CAAnimation;
  scrollPoint(p: CGPoint): void;
  scrollRectToVisible(r: CGRect): void;

  constraints(): NSArray<any>;
  setConstraints(constraints: NSArray<any> | any[]): void;
  bounds(): CGRect;
  setBounds(bounds: CGRect): void;
  position(): CGPoint;
  setPosition(position: CGPoint): void;
  zPosition(): CGFloat;
  setZPosition(zPosition: CGFloat): void;
  anchorPoint(): CGPoint;
  setAnchorPoint(anchorPoint: CGPoint): void;
  anchorPointZ(): CGFloat;
  setAnchorPointZ(anchorPointZ: CGFloat): void;
  transform(): CATransform3D;
  setTransform(transform: CATransform3D): void;
  frame(): CGRect;
  setFrame(frame: CGRect): void;
  hidden(): boolean;
  setHidden(hidden: boolean): void;
  doubleSided(): boolean;
  setDoubleSided(doubleSided: boolean): void;
  geometryFlipped(): boolean;
  setGeometryFlipped(geometryFlipped: boolean): void;
  superlayer(): CALayer;
  sublayers(): NSArray<any>;
  setSublayers(sublayers: NSArray<any> | any[]): void;
  sublayerTransform(): CATransform3D;
  setSublayerTransform(sublayerTransform: CATransform3D): void;
  mask(): CALayer;
  setMask(mask: CALayer): void;
  masksToBounds(): boolean;
  setMasksToBounds(masksToBounds: boolean): void;
  contents(): any;
  setContents(contents: any): void;
  contentsRect(): CGRect;
  setContentsRect(contentsRect: CGRect): void;
  contentsGravity(): CALayerContentsGravity;
  setContentsGravity(contentsGravity: CALayerContentsGravity): void;
  contentsScale(): CGFloat;
  setContentsScale(contentsScale: CGFloat): void;
  contentsCenter(): CGRect;
  setContentsCenter(contentsCenter: CGRect): void;
  contentsFormat(): CALayerContentsFormat;
  setContentsFormat(contentsFormat: CALayerContentsFormat): void;
  minificationFilter(): CALayerContentsFilter;
  setMinificationFilter(minificationFilter: CALayerContentsFilter): void;
  magnificationFilter(): CALayerContentsFilter;
  setMagnificationFilter(magnificationFilter: CALayerContentsFilter): void;
  minificationFilterBias(): number;
  setMinificationFilterBias(minificationFilterBias: number): void;
  opaque(): boolean;
  setOpaque(opaque: boolean): void;
  needsDisplayOnBoundsChange(): boolean;
  setNeedsDisplayOnBoundsChange(needsDisplayOnBoundsChange: boolean): void;
  drawsAsynchronously(): boolean;
  setDrawsAsynchronously(drawsAsynchronously: boolean): void;
  edgeAntialiasingMask(): CAEdgeAntialiasingMask;
  setEdgeAntialiasingMask(edgeAntialiasingMask: CAEdgeAntialiasingMask): void;
  allowsEdgeAntialiasing(): boolean;
  setAllowsEdgeAntialiasing(allowsEdgeAntialiasing: boolean): void;
  backgroundColor(): CGColorRef;
  setBackgroundColor(backgroundColor: CGColorRef): void;
  cornerRadius(): CGFloat;
  setCornerRadius(cornerRadius: CGFloat): void;
  maskedCorners(): CACornerMask;
  setMaskedCorners(maskedCorners: CACornerMask): void;
  borderWidth(): CGFloat;
  setBorderWidth(borderWidth: CGFloat): void;
  borderColor(): CGColorRef;
  setBorderColor(borderColor: CGColorRef): void;
  opacity(): number;
  setOpacity(opacity: number): void;
  allowsGroupOpacity(): boolean;
  setAllowsGroupOpacity(allowsGroupOpacity: boolean): void;
  compositingFilter(): any;
  setCompositingFilter(compositingFilter: any): void;
  filters(): NSArray<any>;
  setFilters(filters: NSArray<any> | any[]): void;
  backgroundFilters(): NSArray<any>;
  setBackgroundFilters(backgroundFilters: NSArray<any> | any[]): void;
  shouldRasterize(): boolean;
  setShouldRasterize(shouldRasterize: boolean): void;
  rasterizationScale(): CGFloat;
  setRasterizationScale(rasterizationScale: CGFloat): void;
  shadowColor(): CGColorRef;
  setShadowColor(shadowColor: CGColorRef): void;
  shadowOpacity(): number;
  setShadowOpacity(shadowOpacity: number): void;
  shadowOffset(): CGSize;
  setShadowOffset(shadowOffset: CGSize): void;
  shadowRadius(): CGFloat;
  setShadowRadius(shadowRadius: CGFloat): void;
  shadowPath(): CGPathRef;
  setShadowPath(shadowPath: CGPathRef): void;
  autoresizingMask(): CAAutoresizingMask;
  setAutoresizingMask(autoresizingMask: CAAutoresizingMask): void;
  layoutManager(): any;
  setLayoutManager(layoutManager: any): void;
  actions(): NSDictionary<any, any>;
  setActions(actions: NSDictionary<any, any> | {[key: string]: any}): void;
  name(): NSString;
  setName(name: NSString | string): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  style(): NSDictionary<any, any>;
  setStyle(style: NSDictionary<any, any> | {[key: string]: any}): void;
  visibleRect(): CGRect;
  beginTime(): CFTimeInterval;
  setBeginTime(beginTime: CFTimeInterval): void;
  duration(): CFTimeInterval;
  setDuration(duration: CFTimeInterval): void;
  speed(): number;
  setSpeed(speed: number): void;
  timeOffset(): CFTimeInterval;
  setTimeOffset(timeOffset: CFTimeInterval): void;
  repeatCount(): number;
  setRepeatCount(repeatCount: number): void;
  repeatDuration(): CFTimeInterval;
  setRepeatDuration(repeatDuration: CFTimeInterval): void;
  autoreverses(): boolean;
  setAutoreverses(autoreverses: boolean): void;
  fillMode(): CAMediaTimingFillMode;
  setFillMode(fillMode: CAMediaTimingFillMode): void;
}

declare const CALayer: {
  alloc(): CALayerUninitialized;
  class(): CALayer;
  layer(): CALayer;
  defaultValueForKey(key: NSString | string): any;
  needsDisplayForKey(key: NSString | string): boolean;
  defaultActionForKey(event: NSString | string): any;
  layerWithRemoteClientId(client_id: number): CALayer;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}
