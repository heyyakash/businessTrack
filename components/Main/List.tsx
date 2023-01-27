import React from 'react'

const List = () => {
    return (

        <div className="relative overflow-x-auto mt-6    rounded-xl">
            <table className="w-full text-sm text-left ">
                <thead className="text-xs text-gray-700 uppercase bg-stone-100 rounded-xl">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Company
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Valuation
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b ">
                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Sliver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
            
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default List