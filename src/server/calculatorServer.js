import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { additionTool } from "../tools/addition.js";
import { subtractionTool } from "../tools/subtraction.js";
import { multiplicationTool } from "../tools/multiplication.js";
import { divisionTool } from "../tools/division.js";
import { percentageTool } from "../tools/percentage.js";

//Initializing MCP Server
export const server = new McpServer({
    name:"Calculator MCP Server",
    version:"1.0.0"
});

//Collecting all available calculator tools
const tools = [
    additionTool,
    subtractionTool,
    multiplicationTool,
    divisionTool,
    percentageTool
];

//Registering all collected tools with the MCP Server
for(const tool of tools) {
    server.registerTool(tool.name, {
        description:tool.description,
        inputSchema:tool.inputSchema
    }, tool.handler);
}