package firstSpringWebProject.firstSpringWebProject.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;


import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;


@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false,length = 100)
    private String title;

    @Lob
    private String content;

    @CreationTimestamp
    private Timestamp createDate;

    private int count;

    private int replycount;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @OneToMany(mappedBy = "board",fetch = FetchType.EAGER,cascade = CascadeType.REMOVE)//mappedby는 연관관계의 주인이 아니므로 .fk 가 아니며, db에 칼럼을 생성하지 않도록한다.
    //이렇게 함으로서 board 테이블을 불러올 때 reply를 join만 하게 할 수 있다.
    @JsonIgnoreProperties({"board"})
    //내부의 board의 getter를 하지 않는다.(무한참조방지)
    @OrderBy("id desc")
    private List<Reply> replys;
}
