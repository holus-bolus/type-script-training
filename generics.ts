interface User555 {
  name: string;
  lastName: string;
}

interface Articles {
  title:string;
  author:string;
  content: string;
}


function makeRequest(url: string, params?: { query: {} }): User555 | Articles {
  return {
    name: 'Oleksii',
    lastName: 'Ustinov'
  };
}

const myUser = makeRequest('/getUsers');


const myArticles  = makeRequest('/getArticles')