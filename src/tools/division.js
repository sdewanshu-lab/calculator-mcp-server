import { z } from "zod";

export const divisionTool = {
    name:"Divide",
    description:"Divides the dividend by divisor and returns the quetient",
    inputSchema:{
        a:z.number().describe("Dividend"),
        b:z.number().describe("Divisor")
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
                        text:`The quetient of ${a} and ${b} is ${result}`
                    }
                ],
                isError:false
            }
        }
    }
};