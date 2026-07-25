# GSharp Web API

A lightweight web API built with G# and ASP.NET Core, demonstrating modern server-side development with the GSharp language.

![G# + ASP.NET Core](https://img.shields.io/badge/G%23-Server--Side-blue)
![ASP.NET Core](https://img.shields.io/badge/ASP.NET%20Core-10.0-purple)

---

## Overview

GSharp Web API is a RESTful service providing utility endpoints for random number generation, personalized greetings, mathematical operations, and API metadata. Built on .NET 10 with ASP.NET Core's minimal API framework.

## Features

- **Random Number Generation** - Session identifier generation
- **Greeting Service** - Personalized welcome messages
- **Calculator** - Basic arithmetic operations
- **API Metadata** - Endpoint documentation and runtime information

---

## Getting Started

### Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- G# compiler (included with .NET SDK)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd GsharpWeb
```

2. Build the project:
```bash
dotnet build
```

3. Run the application:
```bash
dotnet run
```

The server will start at `http://localhost:5117`

---

## API Endpoints

### GET `/api/random`
Returns a random number between 0 and 100.

**Response:**
```
42
```

### GET `/api/greet/{name}`
Returns a personalized greeting message.

**Parameters:**
- `name` (string) - Name to include in greeting

**Example:**
```
GET /api/greet/Alex
```

**Response:**
```
Hello, Alex! Welcome to the API.
```

### GET `/api/add/{a}/{b}`
Adds two numbers and returns the result.

**Parameters:**
- `a` (number) - First operand
- `b` (number) - Second operand

**Example:**
```
GET /api/add/42/58
```

**Response:**
```
42 + 58 = 100
```

### GET `/api/info`
Returns API metadata and available endpoints.

**Response:**
```
GSharp Web API
==============

Runtime: .NET 10
Framework: ASP.NET Core

Available Endpoints:
- GET /api/random - Random number generator
- GET /api/greet/{name} - Personalized greeting
- GET /api/add/{a}/{b} - Addition calculator
- GET /api/info - API information

Documentation: https://davidobando.github.io/gsharp/
```

---

## Project Structure

```
GsharpWeb/
├── Program.gs              # Application entry point
├── Routes.gs               # API endpoint handlers
├── GsharpWeb.gsproj        # Project configuration
└── wwwroot/                # Static web files
    ├── index.html          # Web interface
    └── js/
        └── app.js          # Frontend JavaScript
```

### Key Files

- **[`Program.gs`](Program.gs)** - Configures the ASP.NET Core web server and registers API routes
- **[`Routes.gs`](Routes.gs)** - Implements API endpoint logic
- **`wwwroot/`** - Static files for the web interface

---

## Development

### Building

```bash
dotnet build
```

### Running in Development Mode

```bash
dotnet run
```

### Running in Production

```bash
dotnet publish -c Release
cd bin/Release/net10.0/publish
dotnet GsharpWeb.dll
```

---

## Configuration

The application runs on `http://localhost:5117` by default. To change the port, modify [`Program.gs`](Program.gs:18):

```gsharp
app.Run("http://localhost:YOUR_PORT")
```

---

## Technology Stack

- **Language:** G# (GSharp)
- **Runtime:** .NET 10
- **Framework:** ASP.NET Core (Minimal APIs)
- **Frontend:** Vanilla JavaScript

---

## About G#

G# is a modern, statically-typed language that compiles to .NET, combining functional programming principles with practical .NET interoperability.

Learn more: [https://davidobando.github.io/gsharp/](https://davidobando.github.io/gsharp/)

---

## License

This project is provided as-is for demonstration purposes.
