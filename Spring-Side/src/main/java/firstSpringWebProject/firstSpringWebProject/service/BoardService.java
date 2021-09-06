package firstSpringWebProject.firstSpringWebProject.service;

import firstSpringWebProject.firstSpringWebProject.domain.Board;
import firstSpringWebProject.firstSpringWebProject.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;

    @Transactional//함수 종료시 commit, rollback을 결정
    public Board 저장하기(Board board) {

        return boardRepository.save(board);
    }
}
