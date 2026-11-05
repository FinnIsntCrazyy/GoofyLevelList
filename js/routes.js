import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/GoofyLevelList/', component: List },
    { path: '/GoofyLevelList/#/leaderboard', component: Leaderboard },
    { path: '/GoofyLevelList/#/roulette', component: Roulette },
];
