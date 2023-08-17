function getClockAngle(hh_mm: string): number {
  const [hour, minute] = hh_mm.split(':').map(Number)
  const angle = Math.abs(30 * (hour % 12) - (11 / 2) * minute)
  const shorterAngle = Math.min(angle, 360 - angle)
  return shorterAngle
}
console.log(getClockAngle('09:00'))
console.log(getClockAngle('17:30'))
