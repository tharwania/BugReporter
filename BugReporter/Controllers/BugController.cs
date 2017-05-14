using BugReporter.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BugReporter.Controllers
{
    public class BugController : ApiController
    {
        // GET: api/Bug
        public List<BugModel> Get()
        {
            List<BugModel> list = new List<BugModel>();
            list.Add(new BugModel("Bug 1", "Bug Biug Bug Bugg"));
            list.Add(new BugModel("Bug 2", "Rhis is a bug Lumber 2"));
            list.Add(new BugModel("Bug 3", "We re testing this"));
            list.Add(new BugModel("Bug 4", "and now we have lumber 4"));
            list.Add(new BugModel("Bug 5", "yahoo just got lumber 5"));
            list.Add(new BugModel("Bug 6", "hehe this is number 6"));

            return list.ToList();
        }

        // GET: api/Bug/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Bug
        public void Post([FromBody]BugModel value)
        {
            value.print();
        }

        // PUT: api/Bug/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Bug/5
        public void Delete(int id)
        {
        }
    }
}
