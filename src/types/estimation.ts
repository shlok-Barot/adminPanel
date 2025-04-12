export interface EstimationItem {
    id: string;
    name: string;
    description: string;
    unit: string;
    quantity: number;
    price: number;
    margin: number;
    total: number;
  }
  export interface EstimationSection {
    id: string;
    name: string;
    items: EstimationItem[];
    total: number;
  }
  export interface Estimation {
    id: string;
    version: string;
    project: string;
    client: string;
    createdDate: string;
    lastModified: string;
    status: 'Created' | 'Processing' | 'Rejected' | 'On Hold' | 'In Transit';
    sections: EstimationSection[];
    subTotal: number;
    totalMargin: number;
    totalAmount: number;
  }