package firstSpringWebProject.firstSpringWebProject.controller;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {

    @GetMapping("/")
    public String index(){
        return "server index page";
    }

    @GetMapping("/bookList")
    public void boardList(Model model){
        model.addAttribute("boardList",  "hello");
    }
}
