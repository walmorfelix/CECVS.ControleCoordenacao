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
            if (context.Coordenacoes.Count() == 0)
            {
                if (context.Coordenacoes.Count(n => n.Nome == "Governança") == 0)
                {
                    Add(new Coordenacao()
                    {
                        Nome = "Governança",
                        CaixaPostal = "caixa01@caixa.gov.br",
                        Ativo = true
                    });
                }

                if (context.Coordenacoes.Count(n => n.Nome == "Operações") == 0)
                {
                    Add(new Coordenacao()
                    {
                        //CoordenacaoId = 1,                        
                        Nome = "Operações",
                        CaixaPostal = "caixa02@caixa.gov.br",
                        Ativo = true
                    });
                }

                if (context.Coordenacoes.Count(n => n.Nome == "Inovação e Tecnologia") == 0)
                {
                    Add(new Coordenacao()
                    {
                        //CoordenacaoId = 1,                        
                        Nome = "Inovação e Tecnologia",
                        CaixaPostal = "caixa03@caixa.gov.br",
                        Ativo = true
                    });
                }               

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

        public int ObterCoordenacaoIdPorNome(string nome)
        {
            return Context.Coordenacoes.Where(c => c.Nome == nome).Select(c=>c.Id).SingleOrDefault();
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
