package firstSpringWebProject.firstSpringWebProject.controller;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BlogController {

    @GetMapping("bookList")
    public void boardList(Model model){
        model.addAttribute("boardList",  "hello");
    }
}
