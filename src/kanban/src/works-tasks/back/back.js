const LS_NAME_TASKS = 'tasks';
let dataMock = [
  {
    title: 'backlog',
    issues: [
      {
        id: 0,
        name: 'Login page – performance issues',
      },
    ],
  },
  {
    title: 'ready',
    issues: [
      {
        id: 0,
        name: 'Shop page – performance issues',
      },
    ],
  },
  {
    title: 'inProgress',
    issues: [
      {
        id: 0,
        name: 'User page – performance issues',
      },
    ],
  },
  {
    title: 'finished',
    issues: [
      {
        id: 0,
        name: 'Main page – performance issues',
      },
    ],
  },
];

const saveData = localStorage.getItem(LS_NAME_TASKS);
if (saveData) {
  dataMock = JSON.parse(saveData);
} else {
  localStorage.setItem(LS_NAME_TASKS, JSON.stringify(dataMock));
}
