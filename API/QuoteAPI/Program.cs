using QuoteAPI.DAL;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";


//Scaffold-DbContext "Server=localhost;User=root;Password=1234;Database=quote_database" "Pomelo.EntityFrameworkCore.MySql" -OutputDir DAL –Force
//Scaffold-DbContext "Server=blq3fzst5xjszsncpo7q-mysql.services.clever-cloud.com;User=uo7dtu06efduvrgl;Password=P9jr9QPCOGBDez2LH6F1;Database=blq3fzst5xjszsncpo7q" "Pomelo.EntityFrameworkCore.MySql" -OutputDir DAL –Force
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<quote_databaseContext>();
builder.Services.AddCors(options =>
{
  options.AddPolicy(MyAllowSpecificOrigins,
                        policy =>
                        {
                          policy.WithOrigins("http://localhost:4200")
                                                .AllowAnyHeader()
                                                .AllowAnyMethod();
                        });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(MyAllowSpecificOrigins);
app.UseAuthorization();

app.MapControllers();

app.Run();
