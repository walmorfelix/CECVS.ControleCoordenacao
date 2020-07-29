using ControleCoordenacao.Domain.Entities;
using ControleCoordenacao.Domain.Interfaces.Repositories;
using ControleCoordenacao.Repository.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControleCoordenacao.Repository.Repositories
{
    public class CoordenacaoRepository : BaseRepository<Coordenacao>, ICoordenacaoRepository
    {
        public CoordenacaoRepository(ControleCoordenacaoContext context) : base(context)
        {
            if (context.Coordenacoes.Count(n => n.Nome == "Governança") == 0 )
            {
                var empregados = new List<Empregado>
                {
                    new Empregado
                    {
                        //EmpregadoId = 1,                    
                        //CoordenacaoId = 1,
                        Matricula = "c000001",
                        Nome = "Gabriel dos Santos",
                        Ativo = true
                    }
                };

                var coordenacao = new Coordenacao()
                {
                    //CoordenacaoId = 1,
                    Empregados = empregados,
                    Nome = "Governança",
                    CaixaPostal = "caixa01@caixa.gov.br",
                    Ativo = true
                };

                Add(coordenacao);
            }

            if (context.Coordenacoes.Count(n => n.Nome == "Operações") == 0)
            {
                var empregados = new List<Empregado>
                {
                    new Empregado()
                    {
                        Matricula = "c000002",
                        Nome = "Alice Araujo",
                        Ativo = true
                    }
                };

                var coordenacao = new Coordenacao()
                {
                    //CoordenacaoId = 1,
                    Empregados = empregados,
                    Nome = "Operações",
                    CaixaPostal = "caixa02@caixa.gov.br",
                    Ativo = true
                };

                Add(coordenacao);
            }

            if (context.Coordenacoes.Count(n => n.Nome == "Inovação e Tecnologia") == 0)
            {
                var empregados = new List<Empregado>
                {
                    new Empregado()
                    {
                        //EmpregadoId = 3,
                        //CoordenacaoId = 3,
                        Matricula = "c000003",
                        Nome = "Rafael da Silva",
                        Ativo = true
                    },
                    new Empregado()
                    {
                        //EmpregadoId = 4,
                        //CoordenacaoId = 3,
                        Matricula = "c000004",
                        Nome = "Tereza Cristina",
                        Ativo = true
                    }
                };

                var coordenacao = new Coordenacao()
                {
                    //CoordenacaoId = 1,
                    Empregados = empregados,
                    Nome = "Inovação e Tecnologia",
                    CaixaPostal = "caixa03@caixa.gov.br",
                    Ativo = true
                };

                Add(coordenacao);
            }
        }

        public void AtualizarCoordenacao(Coordenacao coordenacao)
        {
            Context.Entry(coordenacao).State = EntityState.Modified;
            Context.SaveChanges();
        }

        public IEnumerable<Coordenacao> CoordenacaoById(int id)
        {
            return Context.Coordenacoes
                .Include(e=>e.Empregados)
                .Where(c => c.Id == id);
        }

        public bool CoordenacaoExiste(string nome)
        {
            return Context.Coordenacoes
                .Count(c => c.Nome == nome) > 0;
        }

        public IEnumerable<Coordenacao> ListarCoodenacao()
        {
            return Context.Coordenacoes
                .Include(e => e.Empregados);
        }

        public int ObterId()
        {
            return Context.Coordenacoes.Max(c => c.Id);
        }

        public bool TemEmpregado(int id)
        {
           return CoordenacaoById(id)
                     .FirstOrDefault()
                     .Empregados
                     .Count() > 0;            
        }
    }
}
