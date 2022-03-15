import { FC } from "react"
import { selectAmount, selectDiscount, selectPrice, selectTotal, selectShare } from "./formSelectors"
import { setAmount, setDiscount, setPrice, share } from "./formSlice"
import { Amount, Price, Discount, Total, Share } from './atoms'


export const Form: FC = () => {
	return (
		<form>
			<Amount selector={selectAmount} change={setAmount} />

			<Price selector={selectPrice} change={setPrice} />

			<Discount selector={selectDiscount} change={setDiscount} />

			<hr />

			<Total selector={selectTotal} />

			<hr />

			<Share selector={selectShare} action={share} />

		</form>
	)
}