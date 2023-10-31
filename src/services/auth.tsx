// Definindo a interface Response para representar a estrutura da resposta da função signIn
interface Response {
  token: string; 
  user: {
    // Um objeto de usuário contendo nome e email
    email: string; 
    senha: string;
  };
}

// Definindo a função signIn que retorna uma Promise do tipo Response
export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Dentro da Promise, resolvemos com um objeto contendo um token e informações de usuário
      resolve({
        token: "sdfsadfsadfasd", // Exemplo de token (string)
        user: {email: "malu@gmail.com", senha: '123456' }, // Exemplo de informações de usuário
      });
    }, 2000); // O atraso de 2000 milissegundos (2 segundos) simula uma operação assíncrona
  });
}
