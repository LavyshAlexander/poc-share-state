import { FC } from "react"
import { selectAmount, selectDiscount, selectPrice, selectTotal } from "./formSelectors"
import { setAmount, setDiscount, setPrice } from "./formSlice"
import { Amount, Price, Discount, Total } from './atoms'


export const Form: FC = () => {
	return (
		<form>
			<Amount selector={selectAmount} change={setAmount} />

			<Price selector={selectPrice} change={setPrice} />

			<Discount selector={selectDiscount} change={setDiscount} />

			<hr />

			<Total selector={selectTotal} />

			<hr />



		</form>
	)
}