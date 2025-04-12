import React from 'react'
import { PlusCircleIcon, MinusCircleIcon } from 'lucide-react'
import { EstimationItem as EstimationItemType } from '../types/estimation'
interface EstimationItemProps {
  item: EstimationItemType
  canDelete: boolean
  onDelete: () => void
  onAddItem: () => void
  onChange: (updatedItem: EstimationItemType) => void
}
const EstimationItem: React.FC<EstimationItemProps> = ({
  item,
  canDelete,
  onDelete,
  onAddItem,
  onChange,
}) => {
  const handleChange = (
    field: keyof EstimationItemType,
    value: string | number,
  ) => {
    const updatedItem = {
      ...item,
      [field]: value,
    }
    if (field === 'quantity' || field === 'price' || field === 'margin') {
      const quantity = field === 'quantity' ? Number(value) : item.quantity
      const price = field === 'price' ? Number(value) : item.price
      const margin = field === 'margin' ? Number(value) : item.margin
      updatedItem.total = quantity * price * (1 + margin / 100)
    }
    onChange(updatedItem)
  }
  return (
    <div className="flex gap-2 mt-2">
      <input
        type="text"
        value={item.name}
        onChange={(e) => handleChange('name', e.target.value)}
        placeholder="Item Name"
        className="border border-gray-300 rounded-md px-3 py-2 text-sm flex-1 text-gray-900"
      />
      <input
        type="text"
        value={item.description}
        onChange={(e) => handleChange('description', e.target.value)}
        placeholder="Item Description"
        className="border border-gray-300 rounded-md px-3 py-2 text-sm flex-1 text-gray-900"
      />
      <input
        type="text"
        value={item.unit}
        onChange={(e) => handleChange('unit', e.target.value)}
        placeholder="Unit"
        className="border border-gray-300 rounded-md px-3 py-2 text-sm w-20 text-gray-900"
      />
      <input
        type="number"
        value={item.quantity || ''}
        onChange={(e) => handleChange('quantity', e.target.value)}
        placeholder="Quantity"
        className="border border-gray-300 rounded-md px-3 py-2 text-sm w-24 text-gray-900"
      />
      <input
        type="number"
        value={item.price || ''}
        onChange={(e) => handleChange('price', e.target.value)}
        placeholder="Price"
        className="border border-gray-300 rounded-md px-3 py-2 text-sm w-28 text-gray-900"
      />
      <input
        type="number"
        value={item.margin || ''}
        onChange={(e) => handleChange('margin', e.target.value)}
        placeholder="Margin"
        className="border border-gray-300 rounded-md px-3 py-2 text-sm w-28 text-gray-900"
      />
      <input
        type="text"
        value={item.total.toFixed(2)}
        placeholder="Total"
        className="border border-gray-300 rounded-md px-3 py-2 text-sm w-28 text-gray-900"
        readOnly
      />
      <div className="flex gap-1">
        <button
          type="button"
          onClick={onAddItem}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <PlusCircleIcon size={20} />
        </button>
        {canDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <MinusCircleIcon size={20} />
          </button>
        )}
      </div>
    </div>
  )
}
interface EstimationSectionProps {
  section: {
    id: string
    name: string
    items: EstimationItemType[]
    total: number
  }
  onUpdate: (updatedSection: any) => void
}
const EstimationSection: React.FC<EstimationSectionProps> = ({
  section,
  onUpdate,
}) => {
  const addItem = () => {
    const newItem: EstimationItemType = {
      id: `item-${Date.now()}`,
      name: '',
      description: '',
      unit: '',
      quantity: 0,
      price: 0,
      margin: 0,
      total: 0,
    }
    onUpdate({
      ...section,
      items: [...section.items, newItem],
    })
  }
  const removeItem = (itemId: string) => {
    onUpdate({
      ...section,
      items: section.items.filter((item) => item.id !== itemId),
    })
  }
  const updateItem = (itemId: string, updatedItem: EstimationItemType) => {
    const updatedItems = section.items.map((item) =>
      item.id === itemId ? updatedItem : item,
    )
    onUpdate({
      ...section,
      items: updatedItems,
      total: updatedItems.reduce((sum, item) => sum + item.total, 0),
    })
  }
  return (
    <div className="mb-4">
      <div className="flex items-center">
        <button
          type="button"
          className="p-1 rounded-full hover:bg-gray-100 mr-2"
        >
          <PlusCircleIcon size={20} />
        </button>
        <input
          type="text"
          value={section.name}
          onChange={(e) =>
            onUpdate({
              ...section,
              name: e.target.value,
            })
          }
          placeholder="Sample Section"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm flex-1 text-gray-900"
        />
        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm">{section.total.toFixed(2)}</span>
          <span className="text-sm">$</span>
        </div>
      </div>
      <div className="ml-8 mt-3">
        {section.items.map((item) => (
          <EstimationItem
            key={item.id}
            item={item}
            canDelete={section.items.length > 1}
            onDelete={() => removeItem(item.id)}
            onAddItem={addItem}
            onChange={(updatedItem) => updateItem(item.id, updatedItem)}
          />
        ))}
      </div>
    </div>
  )
}
export default EstimationSection
