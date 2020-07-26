using ControleCoordenacao.Domain.Entities;
using ControleCoordenacao.Domain.Interfaces.Repositories;
using ControleCoordenacao.Repository.Context;

namespace ControleCoordenacao.Repository.Repositories
{
    public class EmpregadoRepository : BaseRepository<Empregado>, IEmpregadoRepository
    {
        public EmpregadoRepository(ControleCoordenacaoContext context) : base(context)
        {
            Add(new Empregado()
            {
                Id = 1,
                CoordenacaoId = 1,
                Matricula = "c000001",
                Nome = "Ana Maria",
                Ativo = true
            });

            Add(new Empregado()
            {
                Id=2,
                CoordenacaoId = 2,
                Matricula = "c000002",
                Nome = "João Pedro",
                Ativo = true
            });

            Add(new Empregado()
            {
                Id = 3,
                CoordenacaoId = 3,
                Matricula = "c000003",
                Nome = "Gabriel dos Santos",
                Ativo = true
            });

            Add(new Empregado()
            {
                Id = 4,
                CoordenacaoId = 3,
                Matricula = "c000004",
                Nome = "Alice Araujo",
                Ativo = true
            });

            context.SaveChanges();
        }
    }
}