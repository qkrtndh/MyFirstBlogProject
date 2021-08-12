package firstSpringWebProject.firstSpringWebProject.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class MyFilter1 implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;

        //토큰:SooStory
        if(req.getMethod().equals("POST")){
            System.out.println("POST요청됨");
            String headerAuth = req.getHeader("Authorization");
            System.out.println(headerAuth);
            if(headerAuth.equals("SooStory")){
                chain.doFilter(req,res);
            }
            else{
                //PrintWriter out = res.getWriter();
                //out.println("인증안됨");
                System.out.println("인증안됨");
            }
        }
        chain.doFilter(req,res);

    }
}
