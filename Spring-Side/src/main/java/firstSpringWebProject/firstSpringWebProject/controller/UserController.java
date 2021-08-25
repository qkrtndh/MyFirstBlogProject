package firstSpringWebProject.firstSpringWebProject.controller;

import firstSpringWebProject.firstSpringWebProject.domain.User;
import firstSpringWebProject.firstSpringWebProject.domain.dto.ReduplicationDto;
import firstSpringWebProject.firstSpringWebProject.repository.UserRepository;
import firstSpringWebProject.firstSpringWebProject.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @CrossOrigin
    @PostMapping("/user")
    private ResponseEntity<?> join(@RequestBody User user){

       return new ResponseEntity<>(userService.join(user), HttpStatus.CREATED);
    }

    @CrossOrigin
    @GetMapping("/user/username/reduplication")
    private String usernameCheck(@RequestBody ReduplicationDto reduplicationDto){
        System.out.println(reduplicationDto);
        return userService.usernameCheck(reduplicationDto);
    }

    @CrossOrigin
    @GetMapping("/user/nickname/reduplication")
    private String nicknameCheck(@RequestBody ReduplicationDto reduplicationDto){
        System.out.println(reduplicationDto);
        return userService.nicknameCheck(reduplicationDto);
    }
}
