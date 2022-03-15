import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { IAtom } from "./IAtom"


export const Discount: FC<IAtom<number>> = ({ selector, change }) => {
	const value = useAppSelector(selector)
	const dispatch = useAppDispatch()

	return (
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
				value={value}
				onChange={(e) => dispatch(change(Number(e.target.value)))}
			/>
		</div>
	)
}
