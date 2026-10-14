import { z } from "zod";

export const multiplicationTool = {
    name:"Multiply",
    description:"Multiplies two numbers and returns their product",
    inputSchema:{
        a:z.number().describe("First Number"),
        b:z.number().describe("Second Number")
    },
    handler:async ({a, b}) => {
        const result = a * b;

        return {
            content:[
                {
                    type:"text",
                    text:`The product of ${a} and ${b} is ${result}`
                }
            ]
        }
    }
};