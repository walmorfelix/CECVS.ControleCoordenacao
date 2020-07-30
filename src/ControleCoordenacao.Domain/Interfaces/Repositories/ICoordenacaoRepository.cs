using ControleCoordenacao.Domain.Entities;
using System.Collections.Generic;

namespace ControleCoordenacao.Domain.Interfaces.Repositories
{
    public interface ICoordenacaoRepository:IBaseRepository<Coordenacao>
    {
        int ObterId();
        bool CoordenacaoExiste(string nome);
        IEnumerable<Coordenacao> ListarCoodenacao();
        IEnumerable<Coordenacao> CoordenacaoById(int id);
        void AtualizarCoordenacao(Coordenacao coordenacao);
        bool TemEmpregado(int id);
        int ObterCoordenacaoIdPorNome(string nome);

        
    }

}
