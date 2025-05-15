package agenda.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import agenda.entity.Compromisso;
import agenda.service.CompromissoService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/compromissos")
public class CompromissoController {
    
    @Autowired
    private CompromissoService compromissoService;

    @GetMapping
    public List<Compromisso> listarTodos() {
        return compromissoService.listarTodos();
    }

    @PostMapping
    public Compromisso salvar(@RequestBody Compromisso compromisso) {
        return compromissoService.salvar(compromisso);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        compromissoService.excluir(id);
    }
}
