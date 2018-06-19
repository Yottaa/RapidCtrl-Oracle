define(

    //-------------------------------------------------------------------
    // DEPENDENCIES
    //-------------------------------------------------------------------
    ['https://cdn.yottaa.com/rapid.min.js', 'ccLogger'],

    //-------------------------------------------------------------------
    // Module definition
    //-------------------------------------------------------------------
    function (yo, log) {
        log.info("YOTAA RAPID WIDGET LOADED");

        return {
            onLoad: function(widget) {
                var siteKey = widget.site().extensionSiteSettings['yottaa-rapid-control-settings']['yottaaSiteKey'];
                var configurationURL = "//qoe-1.yottaa.net/api/v1/configure.rapid.js?key=" + siteKey;
                log.info("Loading rapid ctrl configuration from " + configurationURL);
                Yo.configure(configurationURL);
            }
        }
    }

);
