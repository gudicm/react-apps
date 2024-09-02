export type StringKeyObject = {
  [key: string]: string | number | [string, number, StringKeyObject] | StringKeyObject;
};
