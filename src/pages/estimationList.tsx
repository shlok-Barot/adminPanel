import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { PencilIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
const EstimationList: React.FC = () => {
  const estimations = useSelector((state: RootState) => state.estimations.items)
  const navigate = useNavigate()
  const getStatusBadge = (status: string) => {
    const baseClasses = 'px-3 py-1 rounded-md text-sm font-medium'
    switch (status) {
      case 'Created':
        return (
          <span className={`${baseClasses} bg-green-100 text-green-800`}>
            {status}
          </span>
        )
      case 'Processing':
        return (
          <span className={`${baseClasses} bg-purple-100 text-purple-800`}>
            {status}
          </span>
        )
      case 'Rejected':
        return (
          <span className={`${baseClasses} bg-red-100 text-red-800`}>
            {status}
          </span>
        )
      case 'On Hold':
        return (
          <span className={`${baseClasses} bg-orange-100 text-orange-800`}>
            {status}
          </span>
        )
      case 'In Transit':
        return (
          <span className={`${baseClasses} bg-purple-100 text-purple-800`}>
            {status}
          </span>
        )
      default:
        return (
          <span className={`${baseClasses} bg-gray-100 text-gray-800`}>
            {status}
          </span>
        )
    }
  }
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Estimates</h1>
        <button
          onClick={() => navigate('/addEstimate')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add Estimate
        </button>
      </div>
      <div className="bg-white shadow-sm rounded-md overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  VERSION
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  PROJECT
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  CLIENT
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  CREATED DATE
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  LAST MODIFIED
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  STATUS
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {estimations.map((estimation) => (
                <tr key={estimation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {estimation.version}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {estimation.project}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {estimation.client}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {estimation.createdDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {estimation.lastModified}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(estimation.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <button className="text-gray-800 hover:text-blue-600">
                      <PencilIcon size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-white border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">Showing 1-09 of 78</div>
          <div className="flex space-x-2">
            <button className="p-1 rounded-md border border-gray-300 hover:bg-gray-50 text-gray-900">
              <ChevronLeftIcon size={18} />
            </button>
            <button className="p-1 rounded-md border border-gray-300 hover:bg-gray-50 text-gray-900">
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EstimationList
