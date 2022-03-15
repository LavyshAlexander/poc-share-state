import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectAmount, selectDiscount, selectPrice, selectTotal } from "./formSelectors"
import { setAmount, setDiscount, setPrice } from "./formSlice"


export const Form: FC = () => {
	const amount = useAppSelector(selectAmount)
	const price = useAppSelector(selectPrice)
	const discount = useAppSelector(selectDiscount)
	const total = useAppSelector(selectTotal)

	const dispatch = useAppDispatch()

	return (
		<form>
			<div className="form-group">
				<label htmlFor="amount">Amount</label>
				<input
					id="amount"
					type="number"
					className="form-control"
					aria-describedby="emailHelp"
					placeholder="Enter amount"
					value={amount}
					onChange={(e) => dispatch(setAmount(Number(e.target.value)))}
				/>

				<small id="amountHelp" className="form-text text-muted">
					We'll calculate total price by provided amount.
				</small>
			</div>

			<div className="form-group">
				<label htmlFor="price">Price</label>
				<input
					id="price"
					type="number"
					className="form-control"
					placeholder="Enter price"
					value={price}
					onChange={(e) => dispatch(setPrice(Number(e.target.value)))}
				/>
			</div>

			<div className="form-group">
				<label htmlFor="discount">Discount</label>
				<input
					id="discount"
					type="number"
					className="form-control"
					placeholder="Enter discount"
					min={0}
					max={1}
					step={0.01}
					value={discount}
					onChange={(e) => dispatch(setDiscount(Number(e.target.value)))}
				/>
			</div>

			<hr />

			<div className="form-group">
				<label htmlFor="total">Total</label>

				<input
					disabled
					id="total"
					type="number"
					className="form-control"
					placeholder="Enter total"
					value={total.toFixed(2)}
				/>
			</div>
		</form>
	)
}