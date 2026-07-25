package GsharpWeb

import System
import Microsoft.AspNetCore.Builder
import Microsoft.AspNetCore.Routing
import Microsoft.Extensions.Hosting
import GsharpWeb.Routes

let builder = WebApplication.CreateBuilder(args)
let app = builder.Build()

app.UseDefaultFiles()
app.UseStaticFiles()

app.MapGet("/api/random", RandomRoute)
app.MapGet("/api/greet/{name}", GreetRoute)
app.MapGet("/api/add/{a}/{b}", AddRoute)
app.MapGet("/api/info", InfoRoute)

app.Run("http://localhost:5117")
