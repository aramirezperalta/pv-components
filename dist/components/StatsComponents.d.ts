import React from 'react';
interface IStatsSectionsProps {
    title: string;
    value: string;
    porcentage: string;
}
interface IStatsComponentsProps {
    data: IStatsSectionsProps[];
}
declare const StatsComponents: React.FC<IStatsComponentsProps>;
export default StatsComponents;
