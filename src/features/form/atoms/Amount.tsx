import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { IField } from "./IField"


export const Amount: FC<IField<number>> = ({ selector, change }) => {
	const value = useAppSelector(selector)
	const dispatch = useAppDispatch()

	return (
		<div className="form-group">
			<label htmlFor="amount">Amount</label>

			<input
				id="amount"
				type="number"
				className="form-control"
				aria-describedby="amountHelp"
				placeholder="Enter amount"
				value={value}
				onChange={(e) => dispatch(change(Number(e.target.value)))}
			/>

			<small id="amountHelp" className="form-text text-muted">
				We'll calculate total price by provided amount.
			</small>
		</div>
	)
}
