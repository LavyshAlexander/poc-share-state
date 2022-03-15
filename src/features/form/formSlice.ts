import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface FormState {
	amount: number
	price: number
	discount: number
	total: number
}

const initialState: FormState = {
	amount: 0,
	price: 10,
	discount: 0.05,
	total: 0,
}

const calculateTotal = (state: FormState): number => state.amount * state.price * (1 - state.discount)

const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		setAmount: (state, action: PayloadAction<number>) => {
			state.amount = action.payload
			state.total = calculateTotal(state)
		},
		setPrice: (state, action: PayloadAction<number>) => {
			state.price = action.payload
			state.total = calculateTotal(state)
		},
		setDiscount: (state, action: PayloadAction<number>) => {
			state.discount = action.payload
			state.total = calculateTotal(state)
		},
	}
})

export const { setAmount, setPrice, setDiscount } = formSlice.actions
export const formReducer = formSlice.reducer