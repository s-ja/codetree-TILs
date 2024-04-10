const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number)
// n = n * n 격자
// t = 움직일 수 있는 시간
let [r, c, d] = input[1].split(' ')
// r, c = 구슬의 초기 위치(r 행 c 열)
// d = 구슬의 초기 방향

r = Number(r) - 1
c = Number(c) - 1

const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

const mapper = {
    'R': 0,
    'D': 1,
    'U': 2,
    'L': 3
};

let direction = mapper[d];

for (let i = 0; i < t; i++) {
    if (inRange(r + dx[direction], c + dy[direction])) {
        r += dx[direction];
        c += dy[direction];
    } else {
        direction = 3 - direction;
    }
}

console.log((r + 1), (c + 1));