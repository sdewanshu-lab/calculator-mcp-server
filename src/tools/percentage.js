import { z } from "zod";

export const percentageTool = {
    name:"Percentage",
    description:"Calculates a specified percentage of a given number",
    inputSchema:{
        value:z.number().describe("The number to calculate percentage of"),
        percent:z.number().describe("The percent to calculate")
    },
    handler:async ({value, percent}) => {
        const result = (value * percent) / 100;

        return {
            content:[
                {
                    type:"text",
                    text:`The ${percent} % of ${value} is ${result}`
                }
            ]
        }
    }
};