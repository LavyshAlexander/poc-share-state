import { FC, useEffect } from "react"
import { selectAmount, selectDiscount, selectPrice, selectTotal, selectShare } from "./formSelectors"
import { setAmount, setDiscount, setPrice, share, init } from "./formSlice"
import { Amount, Price, Discount, Total, Share } from './atoms'
import { useAppDispatch } from "../../app/hooks"


export const Form: FC = () => {
	const dispatch = useAppDispatch()
	useEffect(() => { dispatch(init()) }, [dispatch])

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