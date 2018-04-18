
import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia) {
  aurelia.globalResources([PLATFORM.moduleName('./aurelia-plugins-tabs-tabs'), PLATFORM.moduleName('./aurelia-plugins-tabs-tab-content'), PLATFORM.moduleName('./aurelia-plugins-tabs-tab-pane')]);
}