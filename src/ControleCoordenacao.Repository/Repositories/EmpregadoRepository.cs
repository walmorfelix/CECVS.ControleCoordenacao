using ControleCoordenacao.Domain.Entities;
using ControleCoordenacao.Domain.Interfaces.Repositories;
using ControleCoordenacao.Repository.Context;
using System.Collections.Generic;
using System.Linq;

namespace ControleCoordenacao.Repository.Repositories
{
    public class EmpregadoRepository : BaseRepository<Empregado>, IEmpregadoRepository
    {
        public EmpregadoRepository(ControleCoordenacaoContext context) : base(context)
        {
            if (context.Empregados.Count() == 0)
            {
                if (context.Empregados.Count(m => m.Matricula == "c000001") == 0)
                {
                    Add(new Empregado()
                    {
                        //EmpregadoId = 1,
                        CoordenacaoId = 1,
                        Matricula = "c000001",
                        Nome = "Gabriel dos Santos",
                        Ativo = true
                    });
                }

                if (context.Empregados.Count(m => m.Matricula == "c000002") == 0)
                {
                    Add(new Empregado()
                    {
                        //EmpregadoId = 2,
                        CoordenacaoId = 2,
                        Matricula = "c000002",
                        Nome = "Alice Araujo",
                        Ativo = true
                    });

                }

                if (context.Empregados.Count(m => m.Matricula == "c000003") == 0)
                {
                    Add(new Empregado()
                    {
                        //EmpregadoId = 3,
                        CoordenacaoId = 3,
                        Matricula = "c000003",
                        Nome = "Rafael da Silva",
                        Ativo = true
                    });

                }

                if (context.Empregados.Count(m => m.Matricula == "c000004") == 0)
                {
                    Add(new Empregado()
                    {
                        //EmpregadoId = 4,
                        CoordenacaoId = 3,
                        Matricula = "c000004",
                        Nome = "Tereza Cristina",
                        Ativo = true
                    });

                }

            }
           
        }

        public IEnumerable<Empregado> EmpregadoById(int id)
        {
            return Context.Empregados                
                .Where(c => c.Id == id);
        }

        public bool EmpregadoIdExiste(int id)
        {
            return Context.Empregados.Where(e => e.Id == id).Count() > 0;
        }

        public bool MatriculaExiste(string matricula)
        {
            return Context.Empregados.Where(e => e.Matricula == matricula).Count() > 0;
        }

        public string ObterCoordenacao(int coordenacaoId)
        {
            var a = Context.Coordenacoes.Where(c => c.Id == coordenacaoId).Select(n => n.Nome).SingleOrDefault();
            return a;
        }

        public IEnumerable<Empregado> ObterEmpregadosPorCoordenacao(int coordenacaoId)
        {
            var a = Context.Coordenacoes
                .Where(c => c.Id == coordenacaoId)
                .Select(e => e.Empregados)
                .FirstOrDefault();               

            return a;
        }

        public int ObterId()
        {
            return Context.Empregados.Max(e => e.Id);
        }
    }
}