import { z } from "zod";

export const additionTool = {
    name:'Add',
    description:"Adds two numbers and returns their sum",
    inputSchema:{
        a:z.number().describe("First Number"),
        b:z.number().describe("Second Number")
    },
    outputSchema:{
        operation:z.string().describe("Operation performed"),
        a:z.number().describe("First Input Number"),
        b:z.number().describe("Second Input Number"),
        result:z.number().describe("Sum of two numbers")
    },
    handler:async ({a, b}) => {
        const result = a + b;

        return {
            content:[
                {
                    type:"text",
                    text:`The sum of ${a} and ${b} is ${result}`
                }
            ],
            structuredContent:{
                operation:"addition",
                a,
                b,
                result
            }
        }
    }
};