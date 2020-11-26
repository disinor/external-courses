const LS_NAME_TASKS = "tasks";
let dataMock = {
  backlog: [{id:0,name:'Login page – performance issues'}],

  ready: [{id:0,name:'Shop page – performance issues'}],

  inProgress: [{id:0,name:'User page – performance issues'}],

  finished: [{id:0,name:'Main page – performance issues'}],
};

const saveData = localStorage.getItem(LS_NAME_TASKS)
if (saveData){
dataMock= JSON.parse(saveData)
}else{localStorage.setItem(LS_NAME_TASKS, JSON.stringify(dataMock));}
