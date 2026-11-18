import { z } from "zod";

export const subtractionTool = {
    name:"Subtract",
    description:"Subtracts the second number from the first number and returns the difference",
    inputSchema:{
        a:z.number().describe("First Number"),
        b:z.number().describe("Second Number")
    },
    outputSchema:{
        operation:z.string().describe("Operation performed"),
        a:z.number().describe("First Input Number"),
        b:z.number().describe("Second Input Number"),
        result:z.number().describe("Difference between the first and the second number")
    },
    handler:async ({a, b}) => {
        const result = a - b;

        return {
            content:[
                {
                    type:"text",
                    text:`The difference between ${a} and ${b} is ${result}`
                }
            ],
            structuredContent:{
                operation:"subtraction",
                a,
                b,
                result
            }
        }
    }
};