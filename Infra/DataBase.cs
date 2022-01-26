using System;
using Mirna;

namespace FOS.Infra
{
    public class DataBaseRepository
    {
        DbAccess AcessData = new DbAccess("mongodb+srv://API:YXsGUUmagZivjzEm@cluster0.miyoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority","DashBoards","dash");
        public string  CreateCon(){
            var dyn = AcessData.ReadAllDocument("dash","DashBoards");
            return dyn[0].ToString();
        }
    }
} 