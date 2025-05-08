
function formatString(input: string, toUpper?: boolean): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
//   { title: "Book D", rating: 2.8 },
//   { title: "Book E", rating: 4.8 },
// ];

function filterByRating(items: { title: string; rating: number }[] ): { title: string; rating: number }[] {
  let newFilteredBooks = [];
  
  const filterBooks = items?.filter((items) => items?.rating > 4.0);
  const createNewList = filterBooks?.map((items) => ({title: items?.title, rating: items?.rating,}));
  newFilteredBooks = createNewList;

  return newFilteredBooks;
}

// filterByRating(books)
// console.log(filterByRating(books));


function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    arrays.map(arr => arr.forEach(item => result.push(item)));
    return result;
  }

//   console.log(concatenateArrays(["a", "b"], ["c"]));
//   console.log(concatenateArrays([1, 2], [3, 4], [5]));

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

//   const myCar = new Car("Toyota", 2020, "Corolla");

//   console.log(myCar.getInfo()); 
//   console.log(myCar.getModel());  

function processValue(value: string | number): string | number {

    if (typeof value === "string") {
      return value?.length;
    } else {
      return value * 2;
    }
 
  }

//   console.log(processValue("hello"));
//   console.log(processValue(10));     

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

// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 95 },
//   { name: "Bag", price: 50 }
// ];
  
//   console.log(getMostExpensiveProduct(products));

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
  
//   console.log(getDayType(Day.Monday));  // Output: "Weekday"
//   console.log(getDayType(Day.Sunday));

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

// squareAsync(4).then(console.log)
// squareAsync(-4).catch(console.error)
