package firstSpringWebProject.firstSpringWebProject.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter(){

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);//서버가 응답할 때 json 을 자바스크립트에서 처리할 수 있도록 설정

        config.addAllowedOriginPattern("*");//모든 ip에 대한 응답을 허용
        config.addAllowedHeader("*");//모든 헤더에 대한 응답을 허용
        config.addAllowedMethod("*");//모든 post, get, put, delete, fetch 허용
        source.registerCorsConfiguration("/**",config);//해당주소에 대해 위의 설정을 적용한다.
        return new CorsFilter(source);

    }
}
