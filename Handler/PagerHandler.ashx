

using System;
using System.Web;
using System.Collections.Generic;
using System.Text;
using System.Linq;

public class PagerHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain"; 

        string str = string.Empty;

        //具体的页面数
        int pageIndex;
        int.TryParse(context.Request["pageIndex"], out pageIndex);
        //页面显示条数
        int size = Convert.ToInt32(context.Request["pageSize"]);
        if (pageIndex == 0)
        {
            pageIndex = 1;
        }
        System.Collections.Generic.IEnumerable<Person> list = Common.personList.Skip((pageIndex - 1) * size).Take(size);
        StringBuilder sb = new StringBuilder();
        foreach (Person p in list)
        {
            sb.Append("<tr><td>");
            sb.Append(p.Id.ToString());
            sb.Append("</td><td>");
            sb.Append(p.Name);
            sb.Append("</td></tr>");
        }
        str = sb.ToString();
        context.Response.Write(str);
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}