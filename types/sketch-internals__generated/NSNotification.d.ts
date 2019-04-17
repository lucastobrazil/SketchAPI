interface NSNotificationUninitialized<InitializedType = NSNotification> extends NSObjectUninitialized<NSNotification> {
  initWithName_object_userInfo(name: NSNotificationName, object: any | null, userInfo: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSNotification extends NSObject, INSCopying, INSCoding {
  copyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;

  name(): NSNotificationName;
  object(): any;
  userInfo(): NSDictionary<any, any>;
}

declare const NSNotification: {
  alloc(): NSNotificationUninitialized;
  class(): NSNotification;
  notificationWithName_object(aName: NSNotificationName, anObject: any | null): NSNotification;
  notificationWithName_object_userInfo(aName: NSNotificationName, anObject: any | null, aUserInfo: NSDictionary<any, any> | {[key: string]: any} | null): NSNotification;
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
  accessInstanceVariablesDirectly(): boolean;

}
