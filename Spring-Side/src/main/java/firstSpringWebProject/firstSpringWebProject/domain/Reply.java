package firstSpringWebProject.firstSpringWebProject.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false,length=200)
    private String content;

    //어느 게시글의 댓글인지 알기 위해서
    @ManyToOne
    @JoinColumn(name="boardId")
    private Board board;

    //작성자 정보를 위해
    @ManyToOne
    @JoinColumn(name="userId")
    private User user;

    @CreationTimestamp
    private Timestamp createDate;
}
