type TaskProp = {
  text: string,
  day: string,
  reminder: boolean,
  id: number,
};
type subTaskProp = Omit<TaskProp, 'id'>;

type onDeleteFCProp = (id: number) => void;

type toggleReminderProp = (id: number) => void;

type addTaskProp = (task: TaskProp) => void;
type subAddTaskProp = (task: subTaskProp) => void;
