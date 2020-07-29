using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControleCoordenacao.Domain.Entities.Dto
{
    public class EmpregadoDto
    {        
        public int Id { get; set; }
        public int CoordenacaoId { get; set; }
        public string Coordenacao { get; set; }
        public string Matricula { get; set; }
        public string Nome { get; set; }
        public bool Ativo { get; set; }        
    }
}

