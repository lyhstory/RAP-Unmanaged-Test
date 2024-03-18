sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'orderum.project1',
            componentId: 'OrdersUMList',
            contextPath: '/OrdersUM'
        },
        CustomPageDefinitions
    );
});