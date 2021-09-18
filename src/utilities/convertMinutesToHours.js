export const convertMinutesToHours = (minutes) => {
    const hours = Math.trunc(minutes/60) //returns the integer part of a number by removing any fractional digits.
    const min = minutes % 60 // The remainder operator (%) returns the remainder left over when one operand is divided by a second operand.
    return `${hours}h ${min}min`
}