import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"


export interface IField<T> {
	selector: (s: RootState) => number
	change: ActionCreatorWithPayload<T, string>
}