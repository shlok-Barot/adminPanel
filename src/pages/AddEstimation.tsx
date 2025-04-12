import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addEstimation } from "../redux/estimationSlice";
import EstimationSection from "../components/EstimationSection";
import { PlusCircleIcon } from "lucide-react";
import {
  Estimation,
  EstimationSection as EstimationSectionType,
} from "../types/estimation";

const AddEstimation: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sections, setSections] = useState<EstimationSectionType[]>([
    {
      id: `section-${Date.now()}`,
      name: "Sample Section",
      items: [
        {
          id: `item-${Date.now()}`,
          name: "",
          description: "",
          unit: "",
          quantity: 0,
          price: 0,
          margin: 0,
          total: 0,
        },
      ],
      total: 0,
    },
  ]);
  
  const addSection = () => {
    setSections([
      ...sections,
      {
        id: `section-${Date.now()}`,
        name: "Sample Section",
        items: [
          {
            id: `item-${Date.now()}`,
            name: "",
            description: "",
            unit: "",
            quantity: 0,
            price: 0,
            margin: 0,
            total: 0,
          },
        ],
        total: 0,
      },
    ]);
  };

  const updateSection = (
    sectionId: string,
    updatedSection: EstimationSectionType
  ) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId ? updatedSection : section
      )
    );
  };

  const calculateTotals = () => {
    const subTotal = sections.reduce((sum, section) => sum + section.total, 0);
    const totalMargin = sections.reduce(
      (sum, section) =>
        sum +
        section.items.reduce(
          (itemSum, item) =>
            itemSum + (item.total - item.price * item.quantity),
          0
        ),
      0
    );
    return {
      subTotal,
      totalMargin,
      totalAmount: subTotal,
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { subTotal, totalMargin, totalAmount } = calculateTotals();
    const newEstimation: Estimation = {
      id: uuidv4(),
      version: `0000${Math.floor(Math.random() * 1000)}`,
      project: sections[0]?.name || "New Project",
      client: sections[0]?.items[0]?.description || "New Client",
      createdDate: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      lastModified: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      status: "Created",
      sections,
      subTotal,
      totalMargin,
      totalAmount,
    };
    dispatch(addEstimation(newEstimation));
    navigate("/estimates");
  };

  const { subTotal, totalMargin, totalAmount } = calculateTotals();

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  ITEM
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  DESCRIPTION
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  UNIT
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  QUANTITY
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  PRICE ($)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  MARGIN (+/-)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"></th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="p-6">
          {sections.map((section) => (
            <EstimationSection
              key={section.id}
              section={section}
              onUpdate={(updatedSection) =>
                updateSection(section.id, updatedSection)
              }
            />
          ))}
          <button
            type="button"
            onClick={addSection}
            className="flex items-center text-sm text-gray-900 hover:text-gray-900 mt-4"
          >
            <PlusCircleIcon size={20} className="mr-1" />
            Add Section
          </button>
          <div className="mt-8 border-t border-gray-200 pt-4">
            <div className="flex justify-end">
              <div className="w-1/3">
                <div className="flex justify-between py-2 text-sm">
                  <span className="text-gray-900">Sub Total</span>
                  <span className="font-medium">$ {subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 text-sm border-b border-gray-200">
                  <span className="text-gray-900">Total Margin</span>
                  <span className="font-medium">
                    $ {totalMargin.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between py-2 text-base font-bold mt-2">
                  <span className="text-gray-900">Total Amount</span>
                  <span>$ {totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4 p-6 bg-white border-t border-gray-200">
          <button
            type="button"
            onClick={() => navigate("/estimates")}
            className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-600"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEstimation;
