import {
	formReducer,
	FormState,
	setAmount,
	setPrice,
	setDiscount,
} from './formSlice'


describe('form reducer', () => {
	const initialState: FormState = {
		amount: 0,
		price: 10,
		discount: 0.05,
		total: 0,
	}

	it('should handle initial state', () => {
		expect(formReducer(undefined, { type: 'unknown' })).toEqual({
			amount: 0,
			price: 10,
			discount: 0.05,
			total: 0,
		})
	})

	it('should handle setAmount', () => {
		const actual = formReducer(initialState, setAmount(100))
		expect(actual.amount).toEqual(100)
	})

	it('should handle setPrice', () => {
		const actual = formReducer(initialState, setPrice(1000000))
		expect(actual.price).toEqual(1000000)
	})

	it('should handle setDeiscount', () => {
		const actual = formReducer(initialState, setDiscount(0.5))
		expect(actual.discount).toEqual(.5)
	})
})
