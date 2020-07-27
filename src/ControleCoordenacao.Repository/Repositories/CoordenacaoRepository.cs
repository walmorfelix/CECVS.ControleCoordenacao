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
            Add(new Coordenacao()
            {
                //Id = 1,
                Nome = "Governança",
                CaixaPostal = "caixa01@caixa.gov.br",
                Ativo = true
            });

            Add(new Coordenacao()
            {
                //Id = 2,
                Nome = "Operações",
                CaixaPostal = "caixa02@caixa.gov.br",
                Ativo = true
            });

            Add(new Coordenacao()
            {
                //Id = 3,
                Nome = "Inovação e Tecnologia",
                CaixaPostal = "caixa03@caixa.gov.br",
                Ativo = true
            });

            context.SaveChanges();
        }
    }
}
