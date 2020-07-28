using System.Collections.Generic;
using System.Linq;
using ControleCoordenacao.Domain.Interfaces.Repositories;
using ControleCoordenacao.Repository.Context;
using Microsoft.EntityFrameworkCore;

namespace ControleCoordenacao.Repository.Repositories
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        protected readonly ControleCoordenacaoContext Context;

        public BaseRepository(ControleCoordenacaoContext context)
        {
            Context = context;
        }
        public void Add(TEntity entity)
        {
            Context.Set<TEntity>().Add(entity);
            Context.SaveChanges();
        }
        public IEnumerable<TEntity> GetAll()
        {
            return Context.Set<TEntity>().ToList();
        }

        public TEntity GetById(int id)
        {
            return Context.Set<TEntity>().Find(id);            
        }

        public void Remove(TEntity entity)
        {
            var entry = Context.Entry(entity);
            Context.Attach(entity);
            entry.State = EntityState.Modified;            
            Context.SaveChanges();
        }

        public void Update(TEntity entity)
        {
            Context.Set<TEntity>().Update(entity);            
            Context.SaveChanges();
        }

        public void Dispose()
        {
            Context.Dispose();
        }
    }
}
