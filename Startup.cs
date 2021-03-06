using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace FOS
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddMemoryCache();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "Default",
                    pattern: "{controller=Home}/{action=Index}/{name?}");
                endpoints.MapControllerRoute(
                    name: "DefaultPrivacy",
                    pattern: "{controller=Home}/{action=Privacy}");
                endpoints.MapControllerRoute(
                    name: "usersField",
                    pattern: "{controller=Home}/{action=UserArea}/{name?}/{tipo?}"
                );
                endpoints.MapControllerRoute(
                    name: "aboutRoute",
                    pattern: "{controller=About}/{action=Index}"
                );
                endpoints.MapControllerRoute(
                    name: "HubRoute",
                    pattern: "{controller=Hub}/{action=Env}/{name?}"
                );
                endpoints.MapControllerRoute(
                    name: "HubError",
                    pattern: "{controller=Hub}/{action=Error}/{erroId?}"
                );
                endpoints.MapControllerRoute(
                    name:"UserRoute",
                    pattern:"{controller=User}/{action=Page}/{id?}" 
                );
                endpoints.MapControllerRoute(
                    name:"EnvCreate",
                    pattern:"{controller=EnvCreate}/{action=Index}/{id?}" 
                );
            });
        }
    }
}
