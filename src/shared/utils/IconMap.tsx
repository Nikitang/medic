import Beaker from 'shared/assets/icons/beaker.svg';
import Surgeon from 'shared/assets/icons/surgeon.svg';
import Paper from 'shared/assets/icons/paper.svg';
import Magnifying from 'shared/assets/icons/magnifying.svg';
import Scalpel from 'shared/assets/icons/scalpel.svg';
import CheckUp from 'shared/assets/icons/checkup.svg';
import { ReactElement } from 'react';

export type IconTypes =
    | 'beaker'
    | 'surgeon'
    | 'paper'
    | 'magnifying'
    | 'scalpel'
    | 'checkUp';

type IconMapType = Record<IconTypes, ReactElement>;

export const iconMap: IconMapType = {
    beaker: <Beaker />,
    surgeon: <Surgeon />,
    paper: <Paper />,
    magnifying: <Magnifying />,
    scalpel: <Scalpel />,
    checkUp: <CheckUp />,
};
