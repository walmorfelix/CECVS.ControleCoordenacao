using System.Collections.Generic;

namespace ControleCoordenacao.Domain.Entities
{
    public class Coordenacao : Entity
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string CaixaPostal { get; set; }
        public bool Ativo { get; set; }
        public virtual ICollection<Empregado> Empregados { get; set; }

        public Coordenacao()
        {
            Empregados = new HashSet<Empregado>();
        }
    }
}
