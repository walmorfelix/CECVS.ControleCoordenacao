using ControleCoordenacao.Domain.Entities;
using ControleCoordenacao.Domain.Entities.Dto;
using ControleCoordenacao.Domain.Interfaces.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace ControleCoordenacoes.Api.Controllers
{
    [EnableCors("Development")]
    [Route("api/[Controller]")]
    [Produces("application/json")]
    [ApiController]
    public class CoordenacoesController : ControllerBase
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
                    .ListarCoodenacao()
                    .ToList();

                var coordenacoesDto = new List<CoordenacaoDto>();
                foreach (var coordenacao in coordenacoes)
                {
                    var coordenacaoDto = new CoordenacaoDto
                    {
                        CoordenacaoId = coordenacao.Id,
                        Nome = coordenacao.Nome,
                        CaixaPostal = coordenacao.CaixaPostal,
                        Empregados = coordenacao.Empregados.ToList(),
                        Ativo = coordenacao.Ativo
                    };

                    coordenacoesDto.Add(coordenacaoDto);
                }

                return Ok(coordenacoesDto);
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

        [HttpGet("{id}")]
        public IActionResult GetCoordenacaoById(int id)
       {
            try
            {
                return Ok(_coordenacaoRepository.CoordenacaoById(id));

            }
            catch (Exception e)
            {
               return BadRequest(e.Message);
            }             
        }

        [HttpPut("alterar")]
        public IActionResult PutCoordenacao(Coordenacao coordenacao)
        {
            try
            {
                _coordenacaoRepository.Update(coordenacao);

                return Ok("Alteração: coordenacaoId:" + coordenacao.Id);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpDelete("remover/{id:int}")]
        public IActionResult DeleteCoordenacao(int id)
        {
            try
            {
                if (!_coordenacaoRepository.TemEmpregado(id))
                {
                    var coordenacao = _coordenacaoRepository.CoordenacaoById(id).SingleOrDefault();
                    _coordenacaoRepository.Remove(coordenacao);
                    return Ok($"Removido: CoordenacaoId = {id}");
                }
                return Ok("Não é permitido exclusão de coordenação com empregados vinculados");

            }
            catch (Exception e )
            {
                return BadRequest(e.Message);
            }
        }


    }
}
