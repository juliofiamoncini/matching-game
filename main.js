import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"

//import PlayerName from "./src/components/PlayerName";
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector("#root");
//const $htmlPlayerName = PlayerName;
const $htmlBoardGame = BoardGame(6);

/*
const playerQuantity = 2;
for (let i = 0; i < playerQuantity; i++) {
    $root.insertAdjacentHTML('beforeEnd', $htmlPlayerName(`Player ${i + 1}`))
}
*/

$root.insertAdjacentHTML('beforeEnd', $htmlBoardGame);

/*
const cardQuantity = 6;
for (let i = 0; i < cardQuantity; i++) {
    $root.insertAdjacentHTML('beforeEnd', $htmlCardGame);
}
*/