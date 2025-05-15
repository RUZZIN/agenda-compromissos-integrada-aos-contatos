package agenda;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(info = @Info(
        title = "API Rest Full Agenda de Compromissos Integrada aos Contatos",
        version = "1.0",
        description = "Agenda de Compromissos Integrada aos\n"
        		+ "Contatos",
        contact = @Contact(name = "Ruan", email = "ruanp9725@gmail.ocm"))
)

@SpringBootApplication
public class AgendaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgendaApplication.class, args);
	}

}
