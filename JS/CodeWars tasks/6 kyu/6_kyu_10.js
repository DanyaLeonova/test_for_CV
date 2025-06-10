/*
Codewars Challenge: https://www.codewars.com/kata/5544c7a5cb454edb3c000047
Difficulty: 6 kyu
Completion date: 06.2025
Description: A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.
He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
His mother looks out of a window 1.5 meters from the ground.
How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
*/

function bouncingBall(h,  bounce,  window) {
  let bounces = 1
  if(h > 0 && bounce > 0 && bounce < 1 && window < h)
    {
      h *= bounce
      while (h > window) {
        bounces += 2
        h *= bounce
    }
    return bounces
    }
  else
    {
      return -1
    }
}