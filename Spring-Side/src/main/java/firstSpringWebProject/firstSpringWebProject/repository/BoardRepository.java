package firstSpringWebProject.firstSpringWebProject.repository;

import firstSpringWebProject.firstSpringWebProject.domain.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board,Integer> {
}
