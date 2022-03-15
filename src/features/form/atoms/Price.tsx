import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { IField } from "./IField"


export const Price: FC<IField<number>> = ({ selector, change }) => {
	const value = useAppSelector(selector)
	const dispatch = useAppDispatch()

	return (
		<div className="form-group">
			<label htmlFor="price">Price</label>

			<input
				id="price"
				type="number"
				className="form-control"
				placeholder="Enter price"
				value={value}
				onChange={(e) => dispatch(change(Number(e.target.value)))}
			/>
		</div>
	)
}
