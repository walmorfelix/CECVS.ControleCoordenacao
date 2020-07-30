using ControleCoordenacao.Domain.Entities;
using System.Collections.Generic;

namespace ControleCoordenacao.Domain.Interfaces.Repositories
{
    public interface IEmpregadoRepository : IBaseRepository<Empregado>
    {
        string ObterCoordenacao(int coordenacaoId);
        bool MatriculaExiste(string matricula);
        int ObterId();
        IEnumerable<Empregado> EmpregadoById(int id);
        bool EmpregadoIdExiste(int id);

        IEnumerable<Empregado> ObterEmpregadosPorCoordenacao(int coordenacaoId);
    }
}
