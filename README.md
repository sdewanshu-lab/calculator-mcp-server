# Calculator MCP Server

A simple Model Context Protocol (MCP) server built in Node.js that provides some basic arithmetic calculation tools.The srver uses official MCP JavaScript SDK, Zod for input validation and Standard Input/Output (stdio to communicate with MCP clients. 

### Features:

- Addition of two numbers
- Subtraction of one number from another
- Multiplication of two numbers
- Division of a number by another number with handling of divide by zero error
- Percentage calculation

### Technologies used:

- JavaScript ES Module
- Node.js
- Model Context Protocol (MCP)
- MCP JavaScript SDK
- Zod

### Tools Available:

| Name | Description | Example |
|:----:|:-----------:|:-------:|
| Add | Adds two numbers and returns their sum | a = 2, b = 3, result = 5|
| Subtract | Subtracts the second number from the first and returns the difference | a = 10, b = 5, result = 5 <br><br> a = 5, b = 8, result = -3 |
| Multiply | Multiplies two numbers and returns their product | a = 4, b = 3, result = 12 |
| Divide | Divides the first number by the second and returns the quotient | a = 4, b = 2 result = 2 <br><br> a = 5, b = 2, result = 2.5 <br> <br> a = 6, b = 0, result = Division by zero is not allowed |
|Percentage | Calculates a specified percent of a given number | value is 500 percent is 20 result is 100 |

**Note** *Add, Subtract, Multiply and Divide take a and b as input, while Percentage takes Value and Percent as inputs.* 

### Project Folder Structure:

```text
calculator-mcp-server
├── src
│   ├── server
│   │   └── calculatorServer.js
│   ├── tools
│   │   ├── addition.js
│   │   ├── division.js
│   │   ├── multiplication.js
│   │   ├── percentage.js
│   │   └── subtraction.js
│   └── index.js
├── .gitignore
├── LICENSE
├── README.md
├── package-lock.json
└── package.json
```

### Prerequisites:

1. Node.js Version: v24.11.1
2. npm Version: v11.6.2

### Install dependencies:

Clone repository using `https://github.com/sdewanshu-lab/calculator-mcp-server.git`

1. npm install

### Run Server:

1. npm run start

### Testing:

Launch MCP Inspector via `npx @modelcontextprotocol/inspector`
This will open MCP Inspector in browser or give an URL. Copy that URL and paste it in browser.

### Server Settings:

| Setting | Value |
|:-------:|:-----:|
| Transport | stdio |
| Command | node |
| Arguments | src/index.js |
| Directory | Project Root Diroctory |

**Note** *After configuring the server, connect it and open Tools. Select the desired tool from the list and perform the calculations. Examples are provided in Tools Available section.*

### Version

1.0.0

More functionalities are yet to be added and new versions are to be released. 

## Author

Dewanshu Sharma 