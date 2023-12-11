import React from 'react';

interface IStatsSectionsProps {
    title: string;
    value: string;
    porcentage: string;
}

interface IStatsComponentsProps {
    data: IStatsSectionsProps[];
}

 const StatsComponents: React.FC<IStatsComponentsProps> = (props) =>  {
  return (
    <>
        <dl className={"mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4"}>
            {
                props.data.map((item: IStatsSectionsProps) => (
                    <>
                        <div className={"flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"}>
                            <dt className={"text-sm font-medium leading-6 text-gray-500"}>{ item.title }</dt>
                            <dd className={"text-xs font-medium text-gray-700"}>{ item.porcentage }</dd>
                            <dd className={"w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"}>{ item.value }</dd>
                        </div>
                    </>
                ))
            }
        </dl>

    </>
  )
}

export default StatsComponents;
