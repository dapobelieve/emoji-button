import { library, icon } from '@fortawesome/fontawesome-svg-core';
import {
  faCat,
  faCoffee,
  faFutbol,
  faHistory,
  faMusic,
  faSearch,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import {
  faBuilding,
  faFlag,
  faFrown,
  faLightbulb,
  faSmile
} from '@fortawesome/free-regular-svg-icons';

library.add(
  faBuilding,
  faCat,
  faCoffee,
  faFlag,
  faFrown,
  faFutbol,
  faHistory,
  faLightbulb,
  faMusic,
  faSearch,
  faSmile,
  faTimes
);

export const building = icon({ prefix: 'far', iconName: 'building' }).html[0];
export const cat = icon({ prefix: 'fas', iconName: 'cat' }).html[0];
export const coffee = icon({ prefix: 'fas', iconName: 'coffee' }).html[0];
export const flag = icon({ prefix: 'far', iconName: 'flag' }).html[0];
export const futbol = icon({ prefix: 'fas', iconName: 'futbol' }).html[0];
export const frown = icon({ prefix: 'far', iconName: 'frown' }).html[0];
export const history = icon({ prefix: 'fas', iconName: 'history' }).html[0];
export const lightbulb = icon({ prefix: 'far', iconName: 'lightbulb' }).html[0];
export const music = icon({ prefix: 'fas', iconName: 'music' }).html[0];
export const search = icon({ prefix: 'fas', iconName: 'search' }).html[0];
export const smile = icon({ prefix: 'far', iconName: 'smile' }).html[0];
export const times = icon({ prefix: 'fas', iconName: 'times' }).html[0];
