
export type user = {
    Id: number,
    Name: string,
    Password:string,
    Phone: string,
    Username: string,
    Email:string,
    Tz: string
}

export type Ingrident= {

    	Name :string
    	Count :number
    	Type:string
    
}
export type Recipise={
    Id:number,
    Name :string,
    Instructions :[{Name:""}],
    Difficulty :number,
   Duration :number,
   Img:string,
   Ingridents :Ingrident[]
   UserId :number,
   Categoryid:number,
   Description :string
  
}
export type Category=
{
    Id:number,
    Name :string,


}