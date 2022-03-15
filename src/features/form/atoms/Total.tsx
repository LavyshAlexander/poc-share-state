import { FC } from "react"
import { useAppSelector } from "../../../app/hooks"
import { RootState } from "../../../app/store"


interface ITotal {
	selector: (s: RootState) => number
}

export const Total: FC<ITotal> = ({ selector }) => {
	const value = useAppSelector(selector)

	return (
		<div className="form-group">
			<label htmlFor="total">Total</label>

			<input
				disabled
				id="total"
				type="number"
				className="form-control"
				placeholder="Enter total"
				value={value.toFixed(2)}
			/>
		</div>
	)
}
