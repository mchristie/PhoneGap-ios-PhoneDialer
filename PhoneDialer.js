
var PhoneDialer = function() {
    
}

// call this to register for push notifications
PhoneDialer.prototype.dial = function(phnum) {
  if (typeof PhoneGap !== "undefined") {
      PhoneGap.exec(null, null, "PhoneDialer", "dialPhone", [{"number":phnum,}]);
  } else {
      if (typeof cordova !== "undefined") {
          cordova.exec(null, null, "PhoneDialer", "dialPhone", [{"number":phnum,}]);
      }
  }
};


if (typeof PhoneGap !== "undefined") {
    PhoneGap.addConstructor(function() {
        if(!window.plugins) {
            window.plugins = {};
        }
        window.plugins.phoneDialer = new PhoneDialer();
    });
} else {
    if (typeof cordova !== "undefined") {
      cordova.addConstructor(function() {
          if(!window.plugins) {
              window.plugins = {};
          }
          window.plugins.phoneDialer = new PhoneDialer();
      });
    }
}
