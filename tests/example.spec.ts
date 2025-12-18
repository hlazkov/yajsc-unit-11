const myFunction = (prop: any) => {
  return prop;
}

abstract class MyClass {
  abstract myMethod(): void;
}

class MySubClass extends MyClass {

  myMethod(): void {
    console.log('MySubClass implementation of myMethod');
  }
}

interface User {
  name: string;
  role: UserRoles;
}

interface Topic {
  name?: string; // string | undefined
  text: string;
}

interface Post {
  value: number;
  price: number;
  isEmpty: boolean;
  createdAt: string;
  name?: string; // string | undefined
  lastName?: string;
  topic?: Topic[];
  myTrash: {opt1: any, opt2: any}, 
}

const myObj: Post = {
  value: 10,
  price: 0,
  isEmpty: false,
  createdAt: '11:50',
  myTrash: {opt1: 1, opt2: 0},
}

// const myObj2: Post = {
//   value: 12,
//   price: 1,
//   isEmpty: false,
//   createdAt: '11:50',
//   myTrash: {opt1: 1, opt2: 0},
// }

const makeMyPrettyObject = (value: number, price = 0): Post => {
  return {
    value,
    price,
    isEmpty: false,
    createdAt: '20:06',
    name: 'default',
    myTrash: {opt1: null, opt2: undefined},
  }
}

myObj.name = 'My very first object <3';

const apiCallGetMyPosts = (connection?: any): Promise<Post[]> => {
  return Promise.resolve([makeMyPrettyObject(12)]);
}

enum UserRoles {
  admin,
  user,
  redactor,
  viewer,
  uselessUser,
}

const checkIsAdmin = (role: UserRoles): boolean => {
  return role === UserRoles.admin;
}
const checkIsUser = (role: UserRoles): boolean => {
  return role === UserRoles.user;
}
const checkIsRedactor = (role: UserRoles): boolean => {
  return role === UserRoles.redactor;
}
const checkIsViewer = (role: UserRoles): boolean => {
  return role === UserRoles.viewer;
}

// checkIsAdmin(USER_ADMIN);
checkIsAdmin(UserRoles.admin);
