import { FC } from "react"


export const Form: FC = () => {

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
				/>
			</div>

			<div className="form-group">
				<label htmlFor="discount">Discount</label>
				<input
					id="discount"
					type="number"
					className="form-control"
					placeholder="Enter discount"
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
				/>
			</div>
		</form>
	)
}