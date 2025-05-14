"use Client";
import React, { useEffect, useState } from 'react';
import { useSWRConfig } from "swr";
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
export default function CompletedOrderDataTable() {
    var mutate = useSWRConfig().mutate;
    var router = useRouter();
    var _a = useState([]), orderData = _a[0], setOrderData = _a[1];
    var data = useSelector(function (state) { return state.Admin.Order; });
    var _b = useState(''), search = _b[0], setSearch = _b[1];
    var _c = useState([]), filteredData = _c[0], setFilteredData = _c[1];
    useEffect(function () {
        var filteredCompletedOrder = data === null || data === void 0 ? void 0 : data.filter(function (item) { return (item === null || item === void 0 ? void 0 : item.isDelivered) === true; });
        setOrderData(filteredCompletedOrder);
    }, [data]);
    useEffect(function () {
        setFilteredData(orderData);
    }, [orderData]);
    var columns = [
        {
            name: 'Order ID',
            selector: function (row) { return row === null || row === void 0 ? void 0 : row._id; },
            sortable: true,
        },
        {
            name: 'Total Price',
            selector: function (row) { return row === null || row === void 0 ? void 0 : row.totalPrice; },
            sortable: true,
        },
        {
            name: 'Delivered',
            selector: function (row) { return (row === null || row === void 0 ? void 0 : row.isDelivered) ? 'Yes' : 'No'; },
            sortable: true,
        },
        {
            name: 'Action',
            cell: function (row) { return (<button onClick={function () { return router.push("/order/view-orders-details/".concat(row === null || row === void 0 ? void 0 : row._id)); }} className=' w-20 py-2 mx-2 text-xs text-green-600 hover:text-white my-2 hover:bg-green-600 border border-green-600 rounded transition-all duration-700'>Details</button>); }
        },
    ];
    useEffect(function () {
        if (search === '') {
            setFilteredData(orderData);
        }
        else {
            setFilteredData(orderData === null || orderData === void 0 ? void 0 : orderData.filter(function (item) {
                var _a;
                var itemData = (_a = item === null || item === void 0 ? void 0 : item._id) === null || _a === void 0 ? void 0 : _a.toUpperCase();
                var textData = search.toUpperCase();
                return itemData.indexOf(textData) > -1;
            }));
        }
    }, [search, orderData]);
    return (<div className='w-full h-full'>
      <DataTable columns={columns} data={filteredData || []} key={'ThisOrdersData'} pagination keyField="id" title={"Orders list"} fixedHeader fixedHeaderScrollHeight='700px' selectableRows selectableRowsHighlight persistTableHead subHeader subHeaderComponent={<input className='w-60 dark:bg-transparent py-2 px-2  outline-none  border-b-2 border-orange-600' type={"search"} value={search} onChange={function (e) { return setSearch(e.target.value); }} placeholder={"Orders ID"}/>} className="bg-white px-4 h-5/6 "/>

    </div>);
}
