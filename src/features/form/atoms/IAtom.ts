import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"


export interface IAtom<T> {
	selector: (s: RootState) => number
	change: ActionCreatorWithPayload<T, string>
}