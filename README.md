# 14f3v.bun-express.ts
This is a template for creating Express template using TypeScript which compatible with [bun.sh](https://bun.sh) and nodejs

## Features
- Ready-to-use setup for Express with TypeScript.
- TypeScript type checking and transpilation.
- Compatible with bun, npm and yarn.
- Easily extendable and customizable.

## Prerequisites
Before you begin, ensure you have met the following requirements:

- [Bun.sh](https://bun.sh) version ^1.0.0
- Node.js and npm (or yarn) installed on your machine.
- Basic understanding of TypeScript and Express

## Installation
To get started with this project template, follow these steps:

incase of apnormal using via bun create template
```bash
bun create github.com/14f3v/14f3v/14f3v.bun-express.ts example_project
```

then change directory into example_project and run bun install to install dependencies
```bash
cd example_project && bun install
```

## Usage
To start the development server, run:
```bash
bun run dev
```
or
```bash
bun dev
```

interm of running application with debug mode via vscode, just press **F5** key to start application with debug mode of vscode.
The server will start at http://localhost:3000 by default.

## Directory Structure
directory structure and path alias setup help organize your Express TypeScript project, making it easier to manage and maintain as it grows in size and complexity.

- **src/**: This directory contains your TypeScript source files.

- **src/server.ts**: Entry point of your Express.js server. This file initializes and configures your Express application.

- **src/constants/**: This directory contains constant values used throughout your application, such as error messages, status codes, or configuration settings.

- **src/models/**: Contains your data models, representing the structure of your application's data. These models typically map to database tables or external API payloads.

- **src/repos/**: Contains data access logic, including functions for interacting with databases or external APIs. Repositories encapsulate database queries and interactions.

- **src/routes/**: Defines the routes of your Express application. Each file in this directory corresponds to a group of related routes, such as user routes, authentication routes, or API routes.

- **src/controllers/**: Contains route handlers, also known as controllers. Controllers handle incoming HTTP requests, process data, and send back responses. They interact with models and services to fulfill client requests.

- **src/services/**: Contains business logic and application-specific functionality. Services encapsulate complex operations and business rules, helping keep controllers and routes lean and focused on handling HTTP requests and responses.

- **src/middlewares/**: Contains Express middleware functions. Middleware functions are functions that have access to the request object **(req)**, the response object **(res)**, and the next middleware function in the application's request-response cycle. They can modify request and response objects, end the request-response cycle, or call the next middleware function in the stack.

- **src/utils/**: Contains utility functions and helper methods used throughout your application. Utilities provide common functionality that can be reused across different parts of your codebase.

- **src/configs/**: Contains configuration files for your application. Configuration files define settings, environment variables, and other parameters used to configure the behavior of your application.

> With path aliases configured in your **tsconfig.json**, you can import modules using these aliases. For example, ```import { UserModel } from '@models/UserModel';``` will resolve to ```src/models/UserModel.ts```.



## Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or create a pull request.
Feel free to customize this template to better suit your project's specific needs. Happy coding!




