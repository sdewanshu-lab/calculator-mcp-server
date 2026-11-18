import { z } from "zod";

export const multiplicationTool = {
    name:"Multiply",
    description:"Multiplies two numbers and returns their product",
    inputSchema:{
        a:z.number().describe("First Number"),
        b:z.number().describe("Second Number")
    },
    outputSchema:{
        operation:z.string().describe("Operation performed"),
        a:z.number().describe("First Input Number"),
        b:z.number().describe("Second Input Number"),
        result:z.number().describe("Product of two numbers")
    },
    handler:async ({a, b}) => {
        const result = a * b;

        return {
            content:[
                {
                    type:"text",
                    text:`The product of ${a} and ${b} is ${result}`
                }
            ],
            structuredContent:{
                operation:"multiplication",
                a,
                b,
                result
            }
        }
    }
};