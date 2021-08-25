package firstSpringWebProject.firstSpringWebProject.service;

import firstSpringWebProject.firstSpringWebProject.domain.Role;
import firstSpringWebProject.firstSpringWebProject.domain.User;
import firstSpringWebProject.firstSpringWebProject.domain.dto.ReduplicationDto;
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
        user.setRole(Role.ROLE_USER);
        return userRepository.save(user);
    }

    public String usernameCheck(ReduplicationDto reduplicationDto){
        User user = userRepository.findByUsername(reduplicationDto.getUsername());
        if (user==null) {
            return "사용 가능한 메일입니다.";
        }
        return "중복된 이메일 입니다.";
    }
    public String nicknameCheck(ReduplicationDto reduplicationDto){
        User user = userRepository.findByNickname(reduplicationDto.getNickname());
        if (user==null) {
            return "사용 가능한 닉네임입니다.";
        }
        return "중복된 닉네임 입니다.";
    }
}
