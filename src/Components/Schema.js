import * as yup from 'yup'

export const BookingSchema  = yup.object().shape({
  cardHolderName:yup.string().min(2,"Enter minimum 2 characters").required("Required"),
  cardNo:yup.number().min(1000000000000000,"Card number must be minimum 16 digit number").max(9999999999990000, "Card number must be a 16-digit number").required("Required"),
  cvv:yup.number().min(100,"CVV number must be minimum 3 digit number").max(999, "CVV number must be a 3-digit number").required("Required"),
  month:yup.string().required("Required"),
  year:yup.string().required("Required"),
})