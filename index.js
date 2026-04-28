const plays = [
  'scores from outside the box',
  'pulls off a stunning bicycle kick',
  'beats the offside trap and slots it in',
  'curls it into the top corner',
  'heads it in from a corner kick',
  'intercepts the pass and launches a counter-attack',
  'saves a last-minute penalty'
]
const announcer = [
  'GOLAZOOO!',
  "He's done it again!",
  'Absolutely sensational!',
  'The keeper had no chance!',
  'What a moment in football history!',
  'VAR cannot take this one away!',
  'The whole stadium is on its feet!'
]

const crowd = [
  'The ultras are going absolutely mental!',
  'Scarves are waving all across the stand!',
  'The away fans are stunned into silence!',
  'Pure pandemonium in the stadium!',
  'Tears in the stands — this means everything!',
  "The home supporters can't believe what they just witnessed!"
]


function commentarygenrator(comment) {
    return comment[Math.floor(Math.random() * comment.length)];

}

function getRandomnumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

console.log(`Player #${getRandomnumber(99)} ${commentarygenrator(plays)} — ${commentarygenrator(announcer)} — ${commentarygenrator(crowd)}`)
