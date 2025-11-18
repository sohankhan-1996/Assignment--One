//Questions-1
function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  }
  else{
    return 0;
  }
  
}



//Question-2

function getLength(value:string|number[]):string|number{
    if(typeof value === 'string'){
        return value.length;
    }
    else if(Array.isArray(value)){
        return value.length;
    }
    else{
       return 0;
    }
  

   
}
 
//Question-3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails():string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}




//Question-4

type Item={title:string,rating:number}

function filterByRating(items: Item[]):Item[] {
 const filteredItems=items.filter(item => item.rating >= 4);
 return filteredItems;
}

const books = [
  { title: 'Bangla', rating: 4.5 },
  { title: 'History', rating: 3.2 },
  { title: 'Math', rating: 5.0 },
  { title: 'Novels', rating: 7.5 },
];


//Question-5

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]):User[] {
  const filterActiveUsers= users.filter(user => user.isActive === true);
  return filterActiveUsers;
}


const users = [
  { id: 1, name: "Sohan", email: "sohan@mail.com", isActive: true },
  { id: 2, name: "Rohan", email: "rohan@mail.com", isActive: false },
  { id: 3, name: "Mina", email: "mina@mail.com", isActive: true }
];


//Question-6

interface Book{
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book):void {
console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}

const mybook:Book = {
  title: "TypeScript Guide",
  author: "John Doe",
  publishedYear: 2021,
  isAvailable: true
};


//Question-7

function getUniqueValues(arr1: (string | number)[],arr2: (string | number)[]): (string | number)[]
{

  const combined = [...arr1, ...arr2];  
  const uniqueSet = new Set(combined);  

  return [...uniqueSet]; 

}


//Question-8



 type Product ={
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length < 1) {
    return 0;
  } else {
    return products.reduce((total, product) => {
      const priceWithoutDiscount = product.price * product.quantity;
      const discountedPrice = product.discount
        ? priceWithoutDiscount * (1 - product.discount / 100)
        : priceWithoutDiscount;

      return total + discountedPrice;
    }, 0);
  }
}



const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
