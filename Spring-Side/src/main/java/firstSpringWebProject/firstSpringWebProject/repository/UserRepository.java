package firstSpringWebProject.firstSpringWebProject.repository;

import firstSpringWebProject.firstSpringWebProject.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {



    public User findByUsernameAndPassword(String username, String password);
    public User findByUsername(String username);
    public User findByNickname(String nickname);
}
