import "@hotwired/turbo-rails";
import { Application } from "@hotwired/stimulus";
import MountTimersController from "../controllers/mount_timers";

window.Stimulus = Application.start();
Stimulus.register("mount-timers", MountTimersController);

// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
