package firstSpringWebProject.firstSpringWebProject.controller.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserApiController {

    @GetMapping("/api/user/test")
    @CrossOrigin
    public String test1(){
        return "<h1>api/user/test</h1>";
    }

    @GetMapping("/api/admin/test")
    @CrossOrigin
    public String test2(){
        return "<h1>api/admin/test</h1>";
    }
}
