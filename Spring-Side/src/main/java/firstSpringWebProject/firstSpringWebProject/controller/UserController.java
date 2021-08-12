package firstSpringWebProject.firstSpringWebProject.controller;

import firstSpringWebProject.firstSpringWebProject.domain.User;
import firstSpringWebProject.firstSpringWebProject.repository.UserRepository;
import firstSpringWebProject.firstSpringWebProject.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @CrossOrigin
    @PostMapping("/user")
    private ResponseEntity<?> join(@RequestBody User user){
        System.out.println("!!!!");
       return new ResponseEntity<>(userService.join(user), HttpStatus.CREATED);
    }
}
