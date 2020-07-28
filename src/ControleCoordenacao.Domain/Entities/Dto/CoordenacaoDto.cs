using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControleCoordenacao.Domain.Entities.Dto
{
    public class CoordenacaoDto
    {
        public int CoordenacaoId { get; set; }
        public string Nome { get; set; }
        public string CaixaPostal { get; set; }
        public bool Ativo { get; set; }
        public List<Empregado> Empregados { get; set; }

        public CoordenacaoDto()
        {
            Empregados = new List<Empregado>();
            Ativo = true;
        }
    }
}
