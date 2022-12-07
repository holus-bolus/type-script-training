//literal type

let Env: 'development' | 'staging' | 'production';

//Types

type Environment = 'development' | 'staging' | 'production';

//enum

enum Env3 {
  Development, staging,
  production
}

let env3 : Env3 = Env3.production;

function setEnv3(myEnv: Env3): Env3 {
  return myEnv;
}

setEnv3(Env3.Development);