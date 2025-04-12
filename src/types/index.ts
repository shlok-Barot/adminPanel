export interface Project {
  id: string;
  customer: string;
  referenceNumber: string;
  projectName: string;
  projectNumber: string;
  areaLocation: string;
  address: string;
  dueDate?: string;
  contact?: string;
  manager?: string;
  staff?: string;
  status: string;
  email?: string;
}
export interface AddProjectFormData {
  customer: string;
  referenceNumber: string;
  projectName: string;
  projectNumber: string;
  areaLocation: string;
  address: string;
  dueDate: string;
  contact: string;
  manager: string;
  staff: string;
  status: string;
  email: string;
}
