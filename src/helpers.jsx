import ArrowIcon from './assets/svg/arrowDown.svg';
import DateIcon from './assets/svg/date.svg';
import { messages } from './messages';

export const projectsIndex = [
  {
    name: messages.titles.project1,
    color: 'purple.100',
  },
  {
    name: messages.titles.project2,
    color: 'orange.200',
  },
  {
    name: messages.titles.project3,
    color: 'yellow.100',
  },
  {
    name: messages.titles.project4,
    color: 'gray.200',
  },
];

export const TopSectionButtons = [
  {
    icon: ArrowIcon,
    text: messages.buttons.selectProject,
  },
  {
    icon: ArrowIcon,
    text: messages.buttons.selectGateway,
  },
  {
    icon: DateIcon,
    text: messages.buttons.fromDate,
  },
  {
    icon: DateIcon,
    text: messages.buttons.toDate,
  },
  {
    text: messages.buttons.generateReport,
    type: 'report',
  },
];
