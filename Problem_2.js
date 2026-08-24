//Problem-02: Table Booking Confirmation
type Booking = 
{
    name : string ; 
    guests : number ;
    time : string ;
};


const formatBookingConfirmation = (booking : Booking) : string => {
    return booking.name + "'s table for " + booking.guests + " guests is confirmed at " + booking.time + ".";
};