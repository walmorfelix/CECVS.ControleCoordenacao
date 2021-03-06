﻿using ControleCoordenacao.Domain.Entities;
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
    [ApiController]
    [Produces("application/json")]
    public class EmpregadosController : ControllerBase
    {
        private readonly IEmpregadoRepository _empregadoRepository;
        private readonly ICoordenacaoRepository _coordenacaoRepository;

        public EmpregadosController(IEmpregadoRepository empregadoRepository, ICoordenacaoRepository coordenacaoRepository)
        {
            _empregadoRepository = empregadoRepository;
            _coordenacaoRepository = coordenacaoRepository;
        }

        [HttpGet("get-all")]
        public IActionResult GetEmpregados()
        {
            try
            {
                //return Ok(_empregadoRepository.GetAll());

                var empregados = _empregadoRepository
                                    .GetAll()
                                    .ToList();

                var empregadosDto = new List<EmpregadoDto>();
                foreach (var empregado in empregados)
                {
                    var empregadoDto = new EmpregadoDto
                    {
                        Id = empregado.Id,
                        CoordenacaoId = empregado.CoordenacaoId,
                        Coordenacao = _empregadoRepository.ObterCoordenacao(empregado.CoordenacaoId),
                        Matricula = empregado.Matricula,
                        Nome = empregado.Nome,
                        Ativo = empregado.Ativo
                    };

                    empregadosDto.Add(empregadoDto);
                }

                return Ok(empregadosDto);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("empregados-coordenacao/{coordenacaoId:int}")]
        public IActionResult ObterEmpregadosPorCoordenacao(int coordenacaoId)
        {
            try
            {
                var empregados = _empregadoRepository.ObterEmpregadosPorCoordenacao(coordenacaoId);
                var empregadosDto = new List<EmpregadoDto>();
                foreach (var empregado in empregados)
                {
                    var empregadoDto = new EmpregadoDto
                    {
                        Id = empregado.Id,
                        Matricula = empregado.Matricula,
                        Nome = empregado.Nome,
                        Coordenacao = _empregadoRepository.ObterCoordenacao(empregado.CoordenacaoId),
                        CoordenacaoId = empregado.CoordenacaoId,
                        Ativo = true
                    };

                    empregadosDto.Add(empregadoDto);

                }
                return Ok(empregadosDto);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [HttpPost("add")]
        public IActionResult PostEmpregado(EmpregadoDto empregadoDto)
        {
            try
            {
                bool coordenacaoExiste = _coordenacaoRepository.CoordenacaoExiste(empregadoDto.Coordenacao);

                if (!coordenacaoExiste)
                {
                    return Ok("Coordenação não existe");
                }


                if (!_empregadoRepository.MatriculaExiste(empregadoDto.Matricula))
                {
                   var empregado = new Empregado {
                       Id = _empregadoRepository.ObterId() + 1,
                       Matricula = empregadoDto.Matricula,
                       Nome = empregadoDto.Nome,
                       CoordenacaoId = _coordenacaoRepository.ObterCoordenacaoIdPorNome(empregadoDto.Coordenacao),                       
                       Ativo = true
                };
                    _empregadoRepository
                        .Add(empregado);


                    return Ok($"Empregado matrícula: {empregado.Matricula} criado com sucesso.");
                }
                return Ok("Matrícula já existe");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetEmpregadoById(int id)
        {
            try
            {
                var empregado =_empregadoRepository.EmpregadoById(id).SingleOrDefault();

                var empregadoDto = new EmpregadoDto
                {
                    Id = empregado.Id,
                    Matricula = empregado.Matricula,
                    Nome = empregado.Nome,
                    CoordenacaoId = empregado.CoordenacaoId,
                    Coordenacao = _empregadoRepository.ObterCoordenacao(empregado.Id),
                    Ativo = empregado.Ativo
                };

                return Ok(empregadoDto);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("alterar")]
        public IActionResult PutEmpregado(EmpregadoDto empregadoDto)
        {
            try
            {
                bool coordenacaoExiste = _coordenacaoRepository.CoordenacaoExiste(empregadoDto.Coordenacao);
                int coordenacaoId = _coordenacaoRepository.ObterCoordenacaoIdPorNome(empregadoDto.Coordenacao);

                if (!coordenacaoExiste)
                {
                    return Ok("Coordenação não existe");
                }

                if (_empregadoRepository.MatriculaExiste(empregadoDto.Matricula))
                {
                    var empregado = new Empregado
                    {
                        Id = empregadoDto.Id,
                        Matricula = empregadoDto.Matricula,
                        Nome = empregadoDto.Nome,
                        CoordenacaoId = coordenacaoId,
                        Ativo = true
                    };
                    _empregadoRepository
                        .Update(empregado);


                    return Ok($"Empregado matrícula {empregado.Matricula} alterado com sucesso.");
                }
                return Ok("Matrícula já existe");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpDelete("remover/{id:int}")]
        public IActionResult DeleteEmpregado(int id)
        {
            try
            {
                if (_empregadoRepository.EmpregadoIdExiste(id))
                {
                    var empregado = _empregadoRepository.EmpregadoById(id).SingleOrDefault();
                    _empregadoRepository.Remove(empregado);

                    return Ok($"Empregado: {empregado.Matricula} - {empregado.Nome} removido com sucesso.");
                }
                return Ok("Empregado não localizado na base");

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


    }
}
