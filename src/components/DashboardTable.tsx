import React from 'react';

const tableData = [
  {
    product: 'Apple Watch',
    img: 'https://m.media-amazon.com/images/I/61CvjSE01lL._AC_UF1000,1000_QL80_.jpg',
    location: '6096 Marjolaine Landing',
    dateTime: '12.09.2019 - 12.53 PM',
    piece: 423,
    amount: '$34,295',
    status: 'Delivered',
  },
  {
    product: 'Apple Watch',
    img: 'https://m.media-amazon.com/images/I/61CvjSE01lL._AC_UF1000,1000_QL80_.jpg',
    location: '6096 Marjolaine Landing',
    dateTime: '12.09.2019 - 12.53 PM',
    piece: 423,
    amount: '$34,295',
    status: 'Pending',
  },
  {
    product: 'Apple Watch',
    img: 'https://m.media-amazon.com/images/I/61CvjSE01lL._AC_UF1000,1000_QL80_.jpg',
    location: '6096 Marjolaine Landing',
    dateTime: '12.09.2019 - 12.53 PM',
    piece: 423,
    amount: '$34,295',
    status: 'Rejected',
  },
];

const statusClasses: Record<string, string> = {
  Delivered: 'bg-emerald-100 text-emerald-600',
  Pending: 'bg-yellow-100 text-yellow-600',
  Rejected: 'bg-red-100 text-red-600',
};

export function DashboardTable() {
  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100 rounded-lg">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Product Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Location</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date - Time</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Piece</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {tableData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                  <img src={item.img} alt={item.product} className="w-10 h-10 rounded-full object-cover" />
                  <span className="text-sm font-medium text-gray-900">{item.product}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.dateTime}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.piece}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-4 py-1 rounded-full text-xs font-semibold ${statusClasses[item.status]}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
