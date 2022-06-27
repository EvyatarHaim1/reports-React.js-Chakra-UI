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
    click: 'selectProject',
  },
  {
    icon: ArrowIcon,
    text: messages.buttons.selectGateway,
    click: ' selectGateways',
  },
  {
    icon: DateIcon,
    text: messages.buttons.fromDate,
    click: 'date',
  },
  {
    icon: DateIcon,
    text: messages.buttons.toDate,
    click: 'date',
  },
  {
    text: messages.buttons.generateReport,
    type: 'report',
    click: 'report',
  },
];

export const gatewaysIndex = [
  {
    name: messages.paragraphs.stripe,
    color: 'purple.100',
  },
  {
    name: messages.paragraphs.authorize,
    color: 'orange.200',
  },
  {
    name: messages.paragraphs.gateway3,
    color: 'yellow.100',
  },
  {
    name: messages.paragraphs.gateway4,
    color: 'gray.200',
  },
];
