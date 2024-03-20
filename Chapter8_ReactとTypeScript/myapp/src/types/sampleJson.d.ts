declare module '~/data/sample.json' {
    interface UserData {
      id: number;
      name: string;
      age: number,
      personalColor : string,
    }
  
    const data: UserData;
  
    export default data;
  }
  