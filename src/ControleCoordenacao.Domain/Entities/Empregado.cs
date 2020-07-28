namespace ControleCoordenacao.Domain.Entities
{
    public class Empregado
    {
        public int Id { get; set; }
        public int CoordenacaoId { get; set; }
        //public virtual Coordenacao Coordenacao { get; set; }
        public string Matricula { get; set; }
        public string Nome { get; set; }
        public bool Ativo { get; set; }
    }
}
