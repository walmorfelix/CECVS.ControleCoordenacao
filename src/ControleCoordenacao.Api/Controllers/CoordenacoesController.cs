using ControleCoordenacao.Domain.Entities;
using ControleCoordenacao.Domain.Interfaces.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace ControleCoordenacoes.Api.Controllers
{   [EnableCors("Development")]
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

        [HttpPost("add")]
        public IActionResult PostCoordenacoes(Coordenacao coordenacao)
        {
            try
            {
                if (!_coordenacaoRepository.CoordenacaoExiste(coordenacao.Nome))
                {
                    coordenacao.Id = _coordenacaoRepository.ObterId() + 1;
                    coordenacao.Ativo = true;

                    _coordenacaoRepository
                        .Add(coordenacao);


                    return Ok($"CoordenacaoId:{coordenacao.Id}");
                }
                return Ok("Coordenação já existe");                
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
