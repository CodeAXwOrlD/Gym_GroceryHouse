"use client";
import { useSelector } from "react-redux";
export default function GettingDatasLength() {
    var catData = useSelector(function (state) { return state.Admin.category; });
    var prodData = useSelector(function (state) { return state.Admin.product; });
    var orderData = useSelector(function (state) { return state.Admin.Order; });
    return [
        {
            icon: "FaUserAlt",
            color: "text-green-600",
            title: "Total Users",
            count: 500,
        },
        {
            icon: "GiAbstract010",
            color: "text-blue-600",
            title: "Total Products",
            count: (prodData === null || prodData === void 0 ? void 0 : prodData.length) || 0
        },
        {
            icon: "CgMenuGridR",
            color: "text-purple-600",
            title: "Total Categories",
            count: (catData === null || catData === void 0 ? void 0 : catData.length) || 0
        },
        {
            icon: "AiOutlineClockCircle",
            color: "text-yellow-600",
            title: "Pending Orders",
            count: (orderData === null || orderData === void 0 ? void 0 : orderData.length) || 0,
        },
        {
            icon: "GrCompliance",
            color: "text-orange-600",
            title: "Completed Orders",
            count: 100,
        },
        {
            icon: "TfiStatsUp",
            color: "text-orange-600",
            title: "Month Statistics",
            count: +100,
        },
    ];
}
