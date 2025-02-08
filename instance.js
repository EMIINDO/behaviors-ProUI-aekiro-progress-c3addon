"use strict";

{
    // callMap path/SDK/instance.js

    const SDK = globalThis.SDK;
    const BEHAVIOR_CLASS = SDK.Behaviors.aekiro_progress;

    BEHAVIOR_CLASS.Instance = class aekiro_progressInstance extends SDK.IBehaviorInstanceBase {
        constructor(sdkBehType, behInst) {
            super(sdkBehType, behInst);
        }
        Release() {
        }
        OnCreate() {
        }
        OnPropertyChanged(id, value) {
        }
        LoadC2Property(name, valueString) {
            return false;       // not handled
        }
    };
}
