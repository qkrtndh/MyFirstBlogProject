package firstSpringWebProject.firstSpringWebProject.config;

import firstSpringWebProject.firstSpringWebProject.config.jwt.JwtAuthenticationFilter;
import firstSpringWebProject.firstSpringWebProject.config.jwt.JwtAuthorizationFilter;
import firstSpringWebProject.firstSpringWebProject.filter.MyFilter1;
import firstSpringWebProject.firstSpringWebProject.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;

//security설정을 위한 파일
@Configuration//ioc 가능하도록함.
@EnableWebSecurity//시큐리티 활성화?
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final CorsFilter corsFilter;
    private final UserRepository userRepository;

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //http.addFilterBefore(new MyFilter1(), BasicAuthenticationFilter.class);

        //csrf를 off
        http.csrf().disable();
        //세션을 사용하지 않는 stateless 서버로 운용할 것
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(corsFilter)
                .formLogin().disable()//폼태그를 통한 로그인을 사용하지 않음
                .httpBasic().disable()//기본적인 http 로그인방식을 사용하지 않겠다.
                .addFilter(new JwtAuthenticationFilter(authenticationManager()))
                .addFilter(new JwtAuthorizationFilter(authenticationManager(),userRepository))
                .authorizeRequests()
                .antMatchers("/api/user/**")
                .access("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN') or hasRole('ROLE_MANAGE')")
                .antMatchers("/api/MANAGE/**")
                .access("hasRole('ROLE_ADMIN') or hasRole('ROLE_MANAGE')")
                .antMatchers("/api/admin/**")
                .access("hasRole('ROLE_ADMIN')")
                .anyRequest().permitAll();
    }
}
