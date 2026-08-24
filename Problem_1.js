//Problem-01: Battery Level Status
const getBatteryStatus =(percentage: number): string => {
 if (percentage <= 20)
 {
    return "Low";
 }
 else if (percentage <= 50)
 {
    return "Medium";
 }
 else if (percentage <= 90)
 {
    return "High";
 }
 else {return "Full";}
}