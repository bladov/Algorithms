//https://www.codewars.com/kata/can-you-keep-a-secret

const createSecretHolder = (secret) => {
    return {
        getSecret: () => {
            return secret
        },

        setSecret: (num) => {
            return secret = num
        },
    }
}

obj = createSecretHolder(5);
obj.setSecret(1);

console.log(obj.getSecret())