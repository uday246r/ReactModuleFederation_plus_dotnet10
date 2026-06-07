using EmployeeService.Middleware;

namespace EmployeeService.Extensions;

public static class MiddlewareExtensions
{
    public static WebApplication ConfigurePipeline(
        this WebApplication app)
    {
        app.UseSwagger();

        app.UseSwaggerUI();

        app.UseMiddleware<ExceptionMiddleware>();

        app.UseAuthorization();

        app.MapControllers();

        return app;
    }
}