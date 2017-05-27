using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BugReporter.ViewModels
{
    public class BugModel
    {
        public BugModel() { }
        public BugModel(string v1, string v2)
        {
            this.Id = getNewId();
            this.Title = v1;
            this.Description = v2;
        }
        private static int IdIncreamenter { get; set; }

        public int getNewId()
        {
            return IdIncreamenter++;
        }
        
        public int Id { get; set; }
        public string Title { get; set;}
        public string Description { get; set; }

        public void print()
        {
            System.Console.WriteLine("Id" + Id + "Title:  " + Title + "  Desc: " + Description);
        }
    }
}