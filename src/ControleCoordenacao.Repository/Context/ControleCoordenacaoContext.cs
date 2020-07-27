using ControleCoordenacao.Domain.Entities;
using ControleCoordenacao.Repository.Config;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;

namespace ControleCoordenacao.Repository.Context
{
    public class ControleCoordenacaoContext:DbContext
    {
        public DbSet<Coordenacao> Coordenacoes { get; set; }
        public DbSet<Empregado> Empregados { get; set; }

        public ControleCoordenacaoContext(DbContextOptions options) : base(options)
        {            
        }        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CoordenacaoConfig());
            modelBuilder.ApplyConfiguration(new EmpregadoConfig());           


            
            base.OnModelCreating(modelBuilder);
        }
    }
}
