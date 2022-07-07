declare type FormRule = {
  required?: boolean
  trigger: string
  validator?: (rule: any, value?: any, callback?: Fn) => void
}
