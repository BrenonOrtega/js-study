const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: 'Bryan',
        birthDate: new Date()
      });
    }, 1000);
  })
}

const getPhoneNumber = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      return resolve({
        ddd: 11,
        number: 20838983,
      });
    }, 4000);
  });
};

const getAddress = (userId) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      return resolve({
        street: 'morro dos prazeres',
        number: 852
      });
    }, 3000);
  });
}

/*
//Aqui é possível verificar uma maneira de montar o objeto "usuario" sincronizando
//as diversas promises envolvidas.
const user = getUser();
const address = getAddress();
const phone = getPhoneNumber();

const fullUser = user.then(userResult => {
  console.log("userResult:", userResult);

  const result = address.then(addressResult => {
    console.log("address result:", addressResult);

    const result = phone.then(phoneResult => {
      console.log('phone result:', phoneResult);
      //Este return é a resolução de promises aninhadas e portanto
      //é nesta ultima chamada que é possível retornar todo o objeto montado
      //já que todos os resultados das promises estão em escopo sendo assim 
      //devemos retornar o valor completo e continuar retornando o objeto para
      //um nível acima até que ele seja retornado pela primeira resolução da promise.
      return {
        user: userResult,
        address: addressResult,
        phone: phoneResult,
      };
    });

    return result;
  });

  return result;
}).catch(error => console.error('error', error));

//Resolvendo a promise com o usuário completo sendo entregue.
fullUser.then(result => {
  console.log('resolvendo a promise manualmente com promises aninhadas.')
  console.log('fullUser:', result)
}); */

/* Abaixo é mostrado como executar a resolução dos métodos assincronos do node 
utilizando callback functions, é um tanto quanto confuso e é dificil entender
plenamento o que acontece, eu mesmo entendi o conceito básico porém ainda é 
um tanto quanto abstrato para mim.
const resolveUser = (error, user) => {
  console.log("user", user);

  getAddress(user.id, (error2, address) => {
    console.log(`${address.street}, ${address.number}`);
  });

  getPhoneNumber(user.id, (error1, phone) => {
    console.log('phone', phone);
  })

  return user;
};
const user = getUser(resolveUser); */

//EXECUÇÃO UTILIZANDO ASYNC E AWAIT
//-- Implementado após a adição destas palavras chave no typescript, automaticamente
//retorna uma promise, que no C# seria uma task e é necessário aguardar a resolução.

const main = async () => {
  try{
    console.time('promise-time');
    //primeiro aguardamos o usuário, visto que ele é uma informação necessária para podermos 
    //prosseguir com a recuperação dos detalhes deste usuário.
    const user = await getUser();
    const userDetails = await Promise.all([
      getPhoneNumber(user.id),
      getAddress(user.id)
    ]);
    const phone = userDetails[0];
    const address = userDetails[1];

    const builtUser = user;

    builtUser.address = address;
    builtUser.phone = phone;

    console.log('built user:', builtUser);

    //este time demonstra que devido ao telefone e o endereço não seremn interdependentes,
    //podemos disparar a execução das duas funções ao mesmo tempo e aguardar todas colocando
    // suas resolução dentro de um array 
    console.timeEnd('promise-time');

  } catch (error) {
    console.error('ó o erro vindo', error);
  }
}
main();