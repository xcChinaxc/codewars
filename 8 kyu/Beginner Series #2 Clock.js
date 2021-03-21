/* Beginner Series #2 Clock */

function past(h, m, s){
    return (0 <= h <= 23 ? h * 3600000 : 0) + (0 <= m <= 59 ? m * 60000 : 0) + (0 <= s <= 59 ? s * 1000 : 0)
}