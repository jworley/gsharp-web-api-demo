package GsharpWeb.Routes

import System

// Returns a random session identifier for load distribution
func RandomRoute() int32 {
    const rand = Random()
    return rand.Next(101)
}

// Generates personalized greeting message
func GreetRoute(name string) string {
    return "Hello, " + name + "! Welcome to the API."
}

// Calculates sum of two numbers from URL parameters
func AddRoute(a string, b string) string {
    const numA = Int32.Parse(a)
    const numB = Int32.Parse(b)
    const sum = numA + numB
    return a + " + " + b + " = " + sum.ToString()
}

// Returns API metadata and available endpoints
func InfoRoute() string {
    const info = "GSharp Web API\n" +
                 "==============\n\n" +
                 "Runtime: .NET 10\n" +
                 "Framework: ASP.NET Core\n\n" +
                 "Available Endpoints:\n" +
                 "- GET /api/random - Random number generator\n" +
                 "- GET /api/greet/{name} - Personalized greeting\n" +
                 "- GET /api/add/{a}/{b} - Addition calculator\n" +
                 "- GET /api/info - API information\n\n" +
                 "Documentation: https://davidobando.github.io/gsharp/"
    
    return info
}