import { z } from "zod";

export const divisionTool = {
    name:"Divide",
    description:"Divides the dividend by divisor and returns the quotient",
    inputSchema:{
        a:z.number().describe("Dividend"),
        b:z.number().describe("Divisor")
    },
    outputSchema: {
        operation: z.literal("division").describe("Operation performed"),
        a: z.number().describe("Dividend"),
        b: z.number().describe("Divisor"),
        result: z.number().describe("Quotient of the two numbers")
    },
    handler:async ({a, b}) => {
        if (b===0) {
            return {
                content:[
                    {
                        type:"text",
                        text:"Error: Division by 0 is not possible"
                    }
                ],
                isError:true
            }
        } else {
            const result = a / b;

            return {
                content:[
                    {
                        type:"text",
                        text:`The quotient of ${a} and ${b} is ${result}`
                    }
                ],
                structuredContent: {
                    operation: "division",
                    a,
                    b,
                    result
                },
                isError:false
            }
        }
    }
};