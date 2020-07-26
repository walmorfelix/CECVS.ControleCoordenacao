using ControleCoordenacao.Domain.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ControleCoordenacoes.Api.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class CoordenacoesController:ControllerBase
    {
        private readonly ICoordenacaoRepository _coordenacaoRepository;

        public CoordenacoesController(ICoordenacaoRepository coordenacaoRepository)
        {
            _coordenacaoRepository = coordenacaoRepository;
        }

        [HttpGet("get-all")]        
        public IActionResult GetCoordenacoes()
        {
            try
            {
                var coordenacoes = _coordenacaoRepository.GetAll();
                return Ok(coordenacoes);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
