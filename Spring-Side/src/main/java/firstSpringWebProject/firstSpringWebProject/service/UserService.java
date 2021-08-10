package firstSpringWebProject.firstSpringWebProject.service;

import firstSpringWebProject.firstSpringWebProject.domain.RoleType;
import firstSpringWebProject.firstSpringWebProject.domain.User;
import firstSpringWebProject.firstSpringWebProject.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder encoder;

    @Transactional
    public User join(User user){

        String raw = user.getPassword();
        String enc = encoder.encode(raw);
        user.setPassword(enc);
        user.setRole(RoleType.USER);
        return userRepository.save(user);
    }
}
