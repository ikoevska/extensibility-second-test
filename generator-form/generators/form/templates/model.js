(function (parent){
    var <%= name %> = kendo.observable({
        fields: {}<% if(typeof submitButton !== 'undefined' && submitButton) { %>,
        submit: function () {}<% } %><% if(typeof cancelButton !== 'undefined' && cancelButton) { %>,
        cancel: function () {}<% } %>
    });

    parent.set('<%= name %>', <%= name %>);
})(app.<%= parent %>);

// START_CUSTOM_CODE_<%= name %>
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_<%= name %>
