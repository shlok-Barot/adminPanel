import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Estimation } from "../types/estimation";
interface EstimationsState {
  items: Estimation[];
  loading: boolean;
  error: string | null;
}
const initialState: EstimationsState = {
  items: [
    {
      id: "1",
      version: "00001",
      project: "Christine Brooks",
      client: "089 Kutch Green Apt. 448",
      createdDate: "04 Sep 2019",
      lastModified: "12-Jan-2022",
      status: "Created",
      sections: [],
      subTotal: 0,
      totalMargin: 0,
      totalAmount: 0,
    },
    {
      id: "2",
      version: "00002",
      project: "Rosie Pearson",
      client: "979 Immanuel Ferry Suite 526",
      createdDate: "28 May 2019",
      lastModified: "29-Jul-2024",
      status: "Processing",
      sections: [],
      subTotal: 0,
      totalMargin: 0,
      totalAmount: 0,
    },
    {
      id: "3",
      version: "00003",
      project: "Darrell Caldwell",
      client: "8587 Frida Ports",
      createdDate: "23 Nov 2019",
      lastModified: "16-Mar-2022",
      status: "Rejected",
      sections: [],
      subTotal: 0,
      totalMargin: 0,
      totalAmount: 0,
    },
    {
      id: "4",
      version: "00004",
      project: "Gilbert Johnston",
      client: "768 Destiny Lake Suite 600",
      createdDate: "05 Feb 2019",
      lastModified: "10-Dec-2021",
      status: "Created",
      sections: [],
      subTotal: 0,
      totalMargin: 0,
      totalAmount: 0,
    },
    {
      id: "5",
      version: "00005",
      project: "Alan Cain",
      client: "042 Mylene Throughway",
      createdDate: "29 Jul 2019",
      lastModified: "21-Mar-2022",
      status: "Processing",
      sections: [],
      subTotal: 0,
      totalMargin: 0,
      totalAmount: 0,
    },
    {
      id: "6",
      version: "00006",
      project: "Alfred Murray",
      client: "543 Weimann Mountain",
      createdDate: "15 Aug 2019",
      lastModified: "20-Apr-2023",
      status: "Created",
      sections: [],
      subTotal: 0,
      totalMargin: 0,
      totalAmount: 0,
    },
    {
      id: "7",
      version: "00007",
      project: "Maggie Sullivan",
      client: "New Scottieberg",
      createdDate: "21 Dec 2019",
      lastModified: "16-Nov-2023",
      status: "Processing",
      sections: [],
      subTotal: 0,
      totalMargin: 0,
      totalAmount: 0,
    },
    {
      id: "8",
      version: "00008",
      project: "Rosie Todd",
      client: "New Jon",
      createdDate: "30 Apr 2019",
      lastModified: "01-May-2023",
      status: "On Hold",
      sections: [],
      subTotal: 0,
      totalMargin: 0,
      totalAmount: 0,
    },
    {
      id: "9",
      version: "00009",
      project: "Dollie Hines",
      client: "124 Lyla Forge Suite 975",
      createdDate: "09 Jan 2019",
      lastModified: "23-Oct-2022",
      status: "In Transit",
      sections: [],
      subTotal: 0,
      totalMargin: 0,
      totalAmount: 0,
    },
  ],
  loading: false,
  error: null,
};
const estimationsSlice = createSlice({
  name: "estimations",
  initialState,
  reducers: {
    addEstimation: (state, action: PayloadAction<Estimation>) => {
      state.items.push(action.payload);
    },
    updateEstimation: (state, action: PayloadAction<Estimation>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteEstimation: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addEstimation, updateEstimation, deleteEstimation } =
  estimationsSlice.actions;
export default estimationsSlice.reducer;
