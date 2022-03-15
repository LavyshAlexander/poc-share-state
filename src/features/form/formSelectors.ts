import { RootState } from "../../app/store"


export const selectAmount = (s: RootState) => s.form.amount
export const selectPrice = (s: RootState) => s.form.price
export const selectDiscount = (s: RootState) => s.form.discount
export const selectTotal = (s: RootState) => s.form.total
