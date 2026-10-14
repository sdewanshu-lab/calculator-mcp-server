import { z } from "zod";

export const additionTool = {
    name:'Add',
    description:"Adds two numbers and returns hteir sum",
    inputSchema:{
        a:z.number().describe("First Number"),
        b:z.number().describe("Second Number")
    },
    handler:async ({a, b}) => {
        const result = a + b;

        return {
            content:[
                {
                    type:"text",
                    text:`The sum of ${a} and ${b} is ${result}`
                }
            ]
        }
    }
};