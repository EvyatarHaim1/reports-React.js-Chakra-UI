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

export const projectOptions = [
  messages.titles.projects,
  messages.titles.project1,
  messages.titles.project2,
  messages.titles.project3,
  messages.titles.project4,
];

export const gatewaysOptions = [
  messages.titles.gateways,
  messages.paragraphs.gateway1,
  messages.paragraphs.gateway2,
  messages.paragraphs.gateway3,
  messages.paragraphs.gateway4,
];

export const filterReportOption = [
  messages.filteroptions.from,
  messages.filteroptions.to,
  messages.filteroptions.projectId,
  messages.filteroptions.gatewayId,
];

export const calculateTotal = data => {
  let sum = 0;
  if (data.length > 2) data?.shift();
  data?.map(arr => arr?.map(amount => Number((sum += amount))));
  console.log(sum);
  return sum;
};
