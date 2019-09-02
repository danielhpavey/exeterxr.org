import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}

import Vue from 'vue'
import moment from 'moment'

Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});

Vue.filter('formatPrettyDate', function(value) {
  if (value) {
    return moment(String(value)).format('dddd Do MMMM YYYY')
  }
});

Vue.filter('formatTime', function(value) {
  if (value) {
    return moment(String(value)).format('h:mm a')
  }
});
