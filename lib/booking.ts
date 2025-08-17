export function getBookingUrl(){
  return process.env.NEXT_PUBLIC_BOOKING_URL || '/contact'
}
