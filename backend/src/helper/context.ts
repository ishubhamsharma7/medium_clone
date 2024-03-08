
interface UserToken {
  id: string;
  name:string;
  email:string
}

export type Bindings = {
   DATABASE_URL: string;
   JWT_SECRET: string;
   CORS_ORIGIN:string
}

export type userContext = {
   Bindings: Bindings,
  Variables: {
    body: {
      name?: string;
      email: string;
      password: string;
    },
    resetPassword?:{
      email:string
      newPassword:string;
      confirmPassword:string;
    }
  }
}

export type blogContext = {
   Bindings: Bindings;
   Variables: {
    userId: string;
    body : {
      id?:string,
      title : string,
      content : string
    }
  };
};
 
export type CookieContext =  {
  Bindings: Bindings;
   Variables: {
    user: UserToken;
  };
}

