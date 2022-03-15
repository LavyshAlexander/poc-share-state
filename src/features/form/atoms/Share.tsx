import { FC } from "react"
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { RootState } from "../../../app/store"


interface IShare {
	selector: (s: RootState) => string
	action: ActionCreatorWithoutPayload
}

export const Share: FC<IShare> = ({ selector, action }) => {
	const value = useAppSelector(selector)
	const dispatch = useAppDispatch()

	return (
		<div className="form-group">
			<textarea
				readOnly
				id="share"
				className="form-control"
				value={value}
			/>

			<button onClick={(e) => {
				e.preventDefault()
				dispatch(action())
			}}>Share</button>
		</div>
	)
}
