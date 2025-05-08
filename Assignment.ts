{

  // 

function formatString(input: string, toUpper?: boolean): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}


function filterByRating(items: { title: string; rating: number }[] ): { title: string; rating: number }[] {
  
  let newFilteredBooks: { title: string; rating: number }[] = [];
  
  const filterBooks = items?.filter((items) => items?.rating > 4.0);
  const createNewList = filterBooks?.map((items) => ({title: items?.title, rating: items?.rating,}));
  newFilteredBooks = createNewList;

  return newFilteredBooks;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    arrays.map(arr => arr.forEach(item => result.push(item)));
    return result;
  }


class Vehicle {

    private make : string;
    private year : number;

    constructor(make:string, year:number){
        this.make = make;
        this.year = year;
    }

   getInfo() : string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {

    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
  
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }


function processValue(value: string | number): string | number {

    if (typeof value === "string") {
      return value?.length;
    } else {
      return value * 2;
    }
 
  }


interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {

    if (products?.length === 0){
        return null;
    }

    return products?.reduce((max,current)=>
    max.price < current.price ? current : max
    );
  }


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    }
    return "Weekday";
  }
  

async function squareAsync (n : number): Promise<number> {
    if(n < 0 ){
        throw new Error("Negative number not allowed")
    }
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(n * n);
        },1000)
    }) 
}


// 
}