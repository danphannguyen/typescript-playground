import { IPerson } from "./typeShared/Person";


export function objectDestructuring({firstname, lastname}: IPerson){
    console.log(firstname, lastname)
}