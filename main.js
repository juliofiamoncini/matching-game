import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"

import BoardGame from './src/objects/BoardGame';
import ScoreBoard from './src/objects/ScoreBoard';

const $root = document.querySelector("#root");

/*
const playerQuantity = 2;
for (let i = 0; i < playerQuantity; i++) {
    $root.insertAdjacentHTML('beforeEnd', $htmlPlayerName(`Player ${i + 1}`))
}
*/

$root.insertAdjacentHTML(
    'beforeEnd',
    `
        ${ScoreBoard()}
        ${BoardGame(6)}        
    `
);