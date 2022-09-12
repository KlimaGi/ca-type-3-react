type TaskProp = {
  id: number,
  text: string,
  day: string,
  reminder: boolean,

};
type onDeleteFCProp = (id: number) => void;

type toggleReminderProp = (id: number) => void;
