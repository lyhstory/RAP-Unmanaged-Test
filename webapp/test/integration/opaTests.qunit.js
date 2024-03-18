sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'orderum/project1/test/integration/FirstJourney',
		'orderum/project1/test/integration/pages/OrdersUMList',
		'orderum/project1/test/integration/pages/OrdersUMObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersUMList, OrdersUMObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('orderum/project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersUMList: OrdersUMList,
					onTheOrdersUMObjectPage: OrdersUMObjectPage
                }
            },
            opaJourney.run
        );
    }
);