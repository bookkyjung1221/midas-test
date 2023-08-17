function getHandScore(input: string): number {
  const cards = input.split(' ')
  const suits = { S: 0, C: 0, H: 0, D: 0 }

  for (const card of cards) {
    const suit = card.charAt(0)
    const rank = card.substring(1)
    if (rank === 'A') {
      suits[suit as keyof typeof suits] = 11
    } else if (rank === 'J' || rank === 'Q' || rank === 'K') {
      suits[suit as keyof typeof suits] += 10
    } else {
      suits[suit as keyof typeof suits] += parseInt(rank, 10)
    }
  }
  const maxScore = Math.max(suits['S'], suits['C'], suits['H'], suits['D'])
  return maxScore
}
console.log(getHandScore('S8 S10 CA'))
