# 1 No Q. Explain the Difference Between `any`, `unknown`, and `never` Types in TypeScript

### 🔍 **`any`**
- The `any` type allows any value to be assigned to a variable.
- It disables type checking, making it less safe.
- Example:
    ```typescript
    let value: any = 42;
    value = "Hello"; 
    ```

### ❓ **`unknown`**
- The `unknown` type is safer than `any` because it requires type checking before usage.
- You cannot perform operations on an `unknown` type without first narrowing it.
- Example:
    ```typescript
    let value: unknown = 42;
    if (typeof value === "number") {
        console.log(value + 10); 
    }
    ```

### 🚫 **`never`**
- The `never` type represents values that never occur.
- It is used for functions that throw errors or never return.
- Example:
    ```typescript
    function error(message: string): never {
        throw new Error(message);
    }
    ```
# 2 No Q. 🔗 Union and Intersection Types

#### **Union Types**
- A union type allows a variable to hold one of several types.
- Example:
    ```typescript
        type StringOrNumber = string | number;

        let value: StringOrNumber;
        value = "Hello"; 
        value = 42;     
        

    ```

#### **Intersection Types**
- An intersection type combines multiple types into one. A value must satisfy all the types.
- Example:
    ```typescript
        interface Person {
            name: string;
        }

        interface Employee {
            employeeId: number;
        }

        type EmployeePerson = Person & Employee;

        const employee: EmployeePerson = {
            name: "Alice",
            employeeId: 123
        };

    ```