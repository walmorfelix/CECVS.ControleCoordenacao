using ControleCoordenacao.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ControleCoordenacao.Repository.Config
{
    public class EmpregadoConfig : IEntityTypeConfiguration<Empregado>
    {
        public void Configure(EntityTypeBuilder<Empregado> builder)
        {
            builder.HasKey(e => e.Id);
            builder.HasOne(e => e.Coordenacao);
        }
    }
}
