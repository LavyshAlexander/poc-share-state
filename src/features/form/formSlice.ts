import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fromBase64, toBase64 } from "../../app/services"

export interface FormState {
	amount: number
	price: number
	discount: number
	total: number
	share: string
}

const initialState: FormState = {
	amount: 0,
	price: 10,
	discount: 0.05,
	total: 0,
	share: ''
}

const calculateTotal = (state: FormState): number => state.amount * state.price * (1 - state.discount)

const shareParam = "share"

const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		init: (state) => {
			const queryString = window.location.search
			const urlParams = new URLSearchParams(queryString)

			if (urlParams.has(shareParam)) {
				const share = urlParams.get(shareParam) as string
				const sharedState = fromBase64(share) as FormState

				state.amount = sharedState.amount
				state.price = sharedState.price
				state.discount = sharedState.discount
				state.total = sharedState.total
				state.share = share
			}
		},
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
		share: (state) => {
			const shareId = toBase64(state)
			state.share = shareId

			const shareUrl = `${window.location.origin}/?${shareParam}=${shareId}`
			navigator.clipboard.writeText(shareUrl);
		}
	}
})

export const { setAmount, setPrice, setDiscount, share, init } = formSlice.actions
export const formReducer = formSlice.reducer