interface User {
  name: string;
}

interface Human extends User {
  speak(): void;
}

interface Animal extends User {
  color: string;
}

const serverInfo: User = {
  name: 'Oleksii',
  speak: () => {
    console.log('Hello');
  }
};

function isHuman(serverInfo: User): server is User {
  return typeof (serverInfo as Human).speak === 'function';
}

if (isHuman(serverInfo)) {
  serverInfo.speak();
}