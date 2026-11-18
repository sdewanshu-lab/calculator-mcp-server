import { z } from "zod";

export const percentageTool = {
    name:"Percentage",
    description:"Calculates a specified percentage of a given number",
    inputSchema:{
        value:z.number().describe("The number to calculate percentage of"),
        percent:z.number().describe("The percent to calculate")
    },
    outputSchema:{
        operation:z.literal("percentage").describe("Operation performed"),
        value:z.number().describe("The number to calculate percentage of"),
        percent:z.number().describe("The percent to calculate"),
        result:z.number().describe("The percentage of a given value")
    },
    handler:async ({value, percent}) => {
        const result = (value * percent) / 100;

        return {
            content:[
                {
                    type:"text",
                    text:`The ${percent} % of ${value} is ${result}`
                }
            ],
            structuredContent:{
                operation:"percentage",
                value,
                percent,
                result
            }
        }
    }
};