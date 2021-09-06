package firstSpringWebProject.firstSpringWebProject.controller;

import firstSpringWebProject.firstSpringWebProject.domain.Board;
import firstSpringWebProject.firstSpringWebProject.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/")
    public String index(){
        return "server index page";
    }

    @GetMapping("/bookList")
    public void boardList(Model model){
        model.addAttribute("boardList",  "hello");
    }

    //테스트용
    @PostMapping("/book")
    public String book(){
        return "<h1>book</h1>";
    }

    @CrossOrigin//외부의 자바스크립트 요청을 허용
    @PostMapping("/board")
    public ResponseEntity<?> save(@RequestBody Board board) {
        System.out.println("@@"+board.getContent());
        return new ResponseEntity<>(boardService.저장하기(board), HttpStatus.CREATED);

    }
}
