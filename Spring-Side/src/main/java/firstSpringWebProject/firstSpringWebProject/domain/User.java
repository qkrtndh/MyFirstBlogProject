package firstSpringWebProject.firstSpringWebProject.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class User {
    @Id//primarykey 등록
    @GeneratedValue(strategy = GenerationType.IDENTITY)//연결된 DB의 너버링 전략을 따라간다는 설정
    private Long id;//auto_increment

    @Column(nullable = false,length = 100)//hash 암호화시를 위해 넉넉하게 설정
    private String password;
    @Column(nullable = false,length = 50)
    private String username;

    //private String oauth;//kakao,google

    @Column(nullable = false,length = 50,unique = true)//닉네임
    private String nickname;

    @Enumerated(EnumType.STRING)//DB에는 RoleType이라는 Enum이 없으므로 적용해줌
    private Role role;	//USER,ADMIN,MANAGE으로 강제

    @CreationTimestamp//시간이 자동 입력
    private Timestamp createDate;
}
