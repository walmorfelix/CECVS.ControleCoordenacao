using ControleCoordenacao.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ControleCoordenacao.Repository.Config
{
    public class CoordenacaoConfig : IEntityTypeConfiguration<Coordenacao>
    {
        public void Configure(EntityTypeBuilder<Coordenacao> builder)
        {
            builder.HasKey(c => c.Id);

            builder
                .HasMany(c => c.Empregados);
                //.WithOne(e=>e.Coordenacao);
        }
    }
}
