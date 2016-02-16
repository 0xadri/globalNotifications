/*
 * Module strategy based on :
 *  - comment of Maciej Baron on www.impressivewebs.com/my-current-javascript-design-pattern
 *  - presentation from Paul Irish https://www.youtube.com/watch?v=i_qE1iAmjFg
 *
 * Created by: Adrien Berthou - August 2014
 */
// requires jQuery
;(function(globalNotification, window, document, $, undefined) {

    "use strict";

    var successLevelClass = 'inner--success';
    var errorLevelClass = 'inner--error';
    var warningLevelClass = 'inner--warning';

    var successDefaultMsg = 'Operation successfull';
    var errorDefaultMsg = 'Operation failed';

    var showNofitication = function( notificationLevelClass, notificationMsg ){

        removeNotificationIfAny();

        // add message to HTML
        $('.global-notification .msg').text( notificationMsg );

        // add relevant class with level to HTML
        $('.global-notification .inner').addClass( notificationLevelClass );

    };

    var removeNotificationIfAny = function(){
        $('.global-notification .inner').removeClass(successLevelClass + ' ' + errorLevelClass + ' ' + warningLevelClass);
    };

    globalNotification.showSuccess = function( notificationMsg ){
        showNofitication(successLevelClass, notificationMsg || successDefaultMsg);
    };

    globalNotification.showError = function( notificationMsg ){
        showNofitication(errorLevelClass, notificationMsg || errorDefaultMsg);
    };

    /* [1] warning does not have a default message */
    globalNotification.showWarning = function( notificationMsg ){
        if( !notificationMsg ){ /* [1] */
            showNofitication(warningLevelClass, notificationMsg);
        }
    };

    globalNotification.init = function(){
        $('.global-notification .icon-close').on('click',function(){
            removeNotificationIfAny();
        });
    };

}(window.globalNotification = window.globalNotification || {}, this, this.document, jQuery));
