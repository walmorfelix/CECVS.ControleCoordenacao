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
            if (context.Coordenacoes.Count(n => n.Nome == "Governança") == 0)
            {
                Add(new Coordenacao()
                {
                    Id = 1,
                    Nome = "Governança",
                    CaixaPostal = "caixa01@caixa.gov.br",
                    Ativo = true
                });

                context.SaveChanges();
            }

            if (context.Coordenacoes.Count(n => n.Nome == "Operações") == 0)
            {
                Add(new Coordenacao()
                {
                    Id = 2,
                    Nome = "Operações",
                    CaixaPostal = "caixa02@caixa.gov.br",
                    Ativo = true
                });

                context.SaveChanges();
            }

            if (context.Coordenacoes.Count(n => n.Nome == "Inovação e Tecnologia") == 0)
            {
                Add(new Coordenacao()
                {
                    Id = 3,
                    Nome = "Inovação e Tecnologia",
                    CaixaPostal = "caixa03@caixa.gov.br",
                    Ativo = true
                });

                context.SaveChanges();
            }            
        }

        public bool CoordenacaoExiste(string nome)
        {
            return Context.Coordenacoes
                .Count(c=>c.Nome == nome) > 0;
        }

        public int ObterId()
        {
            return Context.Coordenacoes.Max(c => c.Id);
        }
    }
}
