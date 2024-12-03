export const signup = async (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username && password) {
          resolve({ message: 'Signup successful!' });
        } else {
          reject(new Error('Signup failed!'));
        }
      }, 1000);
    });
  };
  
  export const login = async (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'test' && password === 'password') {
          resolve({ message: 'Login successful!' });
        } else {
          reject(new Error('Login failed!'));
        }
      }, 1000);
    });
  };  