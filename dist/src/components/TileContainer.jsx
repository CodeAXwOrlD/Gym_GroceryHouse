"use client";
import React, { useState } from 'react';
import StatsTiles from '@/components/StatsTiles';
import GettingDatasLength from '@/app/tilesDatas/Tiles';
export default function TileContainer() {
    var _a = useState(GettingDatasLength()), data = _a[0], setData = _a[1];
    return (<>
 {data === null || data === void 0 ? void 0 : data.map(function (tile, index) {
            return (<StatsTiles key={index} Icon={tile.icon} color={tile.color} title={tile.title} count={tile.count}/>);
        })}
    </>);
}
