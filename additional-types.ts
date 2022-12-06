//Any
//we can declare a variable with the any instruction and put there a number. Then change it to the string

let test: any = 123;

test = '1234';

test.map();

//Unknown
//WE use this type when we don't know what we will get from the server; This method doesn't allow to use methods, such as map(), etc.

let unknownType: unknown = 1234;

//void instruction is used in functions. When we use void it means that function doesn't return anything

function logger(arg: string): void {

}

const voidFunction = (arg: string): void => {
  
};