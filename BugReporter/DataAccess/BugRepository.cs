using System.Data.Entity;
using BugReporter.Models;

namespace BugReporter.DataAccess
{
    public class BugRepository : Repository<Bug>
    {
        public BugRepository(DbContext context) : base(context)
        {
        }

    }
}