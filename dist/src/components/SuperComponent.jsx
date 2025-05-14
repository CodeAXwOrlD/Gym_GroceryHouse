import React from 'react';
import { useSelector } from 'react-redux';
import TileContainer from './TileContainer';
import ProductDataTable from './ProductDataTable';
import CategoryDataTable from './CategoryDataTable';
import PendingOrdersDataTable from './PendingOrdersDataTable';
import CompletedOrderDataTable from './CompletedOrderDataTable';
export default function SuperComponent() {
    var navActive = useSelector(function (state) { return state.AdminNav.ActiveNav; });
    switch (navActive) {
        case 'Base':
            return <TileContainer />;
        case 'activeProducts':
            return <ProductDataTable />;
        case 'activeCategories':
            return <CategoryDataTable />;
        case 'activePendingOrder':
            return <PendingOrdersDataTable />;
        case 'activeDeliveredOrder':
            return <CompletedOrderDataTable />;
        default:
            return <TileContainer />;
    }
}
export var dynamic = 'force-dynamic';
