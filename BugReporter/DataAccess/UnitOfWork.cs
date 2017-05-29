using BugReporter.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BugReporter.DataAccess
{
    public class UnitOfWork :  IDisposable
    {
        private readonly BugReporterEntities _context;

        public UnitOfWork(BugReporterEntities context)
        {
            _context = context;
            Bugs = new BugRepository(_context);
        }

        public BugRepository Bugs { get; private set; }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}