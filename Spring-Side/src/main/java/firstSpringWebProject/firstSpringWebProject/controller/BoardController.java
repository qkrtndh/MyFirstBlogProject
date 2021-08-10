package firstSpringWebProject.firstSpringWebProject.controller;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BoardController {

    @GetMapping("/")
    public void index(){

    }

    @GetMapping("/bookList")
    public void boardList(Model model){
        model.addAttribute("boardList",  "hello");
    }
}
