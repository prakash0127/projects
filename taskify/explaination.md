About project- taskify

Its a todo list application/ project and having drag and drop from the complete and active tasks

to create a project with CRM - cmd would be - npx create-react-app nameofapp --template typescript
now file extension will be tsx not js
and npm start to run the project

remove the unwanted file and code
added A simple hello world

suppose if you type let name = "Prakash";

but it will ask you here a type of it
that means you have to align a type to this variable

let name:string = "prakash";

suppose if you assign like
let name:string;
and later on if you assign it to anumber it will give you a error
name = 10; this will give you an error

there are several type in typescript like
boolean, string, number, etc
tupple this holds the fixed number of types like for example

let role :[number, string];
but if you pass number and number it will give you an error and it is called tiple

now objects how to define it
two to define a objects
one way - let person:Object; but this is not a recommended way to do create a object bcz we have a person then we habe
so many properties like name age etc

way using type or interface to declare the Object
type Person (keep the type name start with cap) and it will contain all the property types

type Person = {
name: string;
age: number;
}

let person: Person = {
name: "Prakash",
age: 20,
};

this is how we can define but you need to declare the property and value
suppose if you dont want to define any value or say want to keep a property as optional so
while defining

type person = {
name: string;
age?: number; // here we are making optional just need to add "?" question mark
}

so here age is optional now if you not declare age while creating an object like person, it will not give an error
assigning to another variable like person
let lotsOfPeople: Person[]; and it is an array of person we can define for this as well

suppose you want to add the type of any variable a number and as well as string too
let age: number | string ; now you can assign this variable as number value and string value anyone both
and it is called Unique type in ts

define a function or type of the variable is function
there is a two ways to define a function type
one way - let printName:Function; this work absolute fine but another way

2nd way let printName: (name:string) => void;
here in the place we can have number/string/boolean etc return type
even though we can have any type as well but it is not recommended because why we need ts if we want to give any type to a variable, recommended to give a type
there is a type called unknown just like others

let personName: unknown;
it can take any type

for function we can define void but it return undefined every time
we can define never but never doesnot return anything

there is a recomendation to read it a document i.e typscriptlang.org

what is called type
type is called alias,

alias is of two type one is type and another is interface

interface Person {
name: Person;
age?: number;
}

it will work as similar to type
then what is the difference between both
suppose we have
let X = {
a: string;
b:number;
}
let Y = X & {
c: string;
d:number;
}

let y:Y = {
c: "hello",
d: 10,
}
here it will give an error bcz expecting some values a and b, but if we remove X & so it will work
and so type can be extended like this

how we can do in the case of interface
interface Guy {
profession: string;
}
and to add person as well so
interface Guy extends Person {
peofession: string;
}

and it is more easier than type and prefer this

and now we will build react app

we will use arrow function to build it
will add React.FC and what exactlty it is
here waht is this App function all about or exact type of this App or can say component
if you hover on it it will tells us to type of the component and so it is functional component right
so we are providing the App: React.FC means of function of type react component and called functional component
there will be other types as well

create a input feild inside the form and did the styling
now creating a state and you need to give a type of the state for that we need to pass "" so it will behave to accept sting
and now if you hover on the variable it will show string
but we need to specify it so that we need to give like <string> like this after the useState
so const [todo, setTodo] = useState<string>();
now you have define the string of the useState
