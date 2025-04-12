import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../types";
interface ProjectsState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}
const initialProjects: Project[] = [
  {
    id: "1",
    customer: "Olivia Martin",
    referenceNumber: "89PQR56789T1U2V3",
    projectName: "Sarah Williams",
    projectNumber: "PQRST9012R",
    areaLocation: "Telangana",
    address: "Mumbai, Maharashtra",
    status: "Completed",
  },
  {
    id: "2",
    customer: "Michael Jones",
    referenceNumber: "67KLMN2345PQ3R78",
    projectName: "Robert Johnson",
    projectNumber: "ABCDE1234F",
    areaLocation: "Uttar Pradesh",
    address: "Bhiwani, Haryana",
    status: "Processing",
  },
  {
    id: "3",
    customer: "John Doe",
    referenceNumber: "23PQR54567T8U9V1",
    projectName: "Isabella Anderson",
    projectNumber: "XYZAB678C",
    areaLocation: "Delhi",
    address: "Avadi, Tamil Nadu",
    status: "Rejected",
  },
  {
    id: "4",
    customer: "Ella Lewis",
    referenceNumber: "78STUV2345W6X7Y8",
    projectName: "Christopher White",
    projectNumber: "PQRST9012R",
    areaLocation: "Karnataka",
    address: "North Dum Dum, West Bengal",
    status: "On Hold",
  },
  {
    id: "5",
    customer: "James Rodriguez",
    referenceNumber: "45KLMN8901P2Q3R4",
    projectName: "Jane Smith",
    projectNumber: "RSTUV9012R",
    areaLocation: "Andhra Pradesh",
    address: "Anantapur, Andhra Pradesh",
    status: "In Transit",
  },
];
const initialState: ProjectsState = {
  projects: initialProjects,
  loading: false,
  error: null,
};
const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.unshift(action.payload);
    },
    updateProject: (state, action: PayloadAction<Project>) => {
      const index = state.projects.findIndex(
        (project) => project.id === action.payload.id
      );
      if (index !== -1) {
        state.projects[index] = action.payload;
      }
    },
  },
});
export const { addProject, updateProject } = projectsSlice.actions;
export default projectsSlice.reducer;
