using ControleCoordenacao.Domain.Interfaces.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace ControleCoordenacoes.Api.Controllers
{
    [EnableCors("AllowOrigin")]
    [Route("api/[Controller]")]
    [ApiController]
    public class CoordenacoesController:ControllerBase
    {
        private readonly ICoordenacaoRepository _coordenacaoRepository;

        public CoordenacoesController(ICoordenacaoRepository coordenacaoRepository)
        {
            _coordenacaoRepository = coordenacaoRepository;
        }

        [HttpGet]        
        public IActionResult GetCoordenacoes()
        {
            try
            {
                var coordenacoes = _coordenacaoRepository
                    .GetAll()
                    .ToList()
                    .Where(c=>c.Ativo == true);

                return Ok(coordenacoes);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
