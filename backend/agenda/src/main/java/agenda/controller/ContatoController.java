package agenda.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import agenda.entity.Contato;
import agenda.service.ContatoService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/contatos")
public class ContatoController {
    
    @Autowired
    private ContatoService contatoService;
    
    @GetMapping
    public List<Contato> listarTodos() {
        return contatoService.listarTodos();
    }

    @PostMapping
    public Contato salvar(@RequestBody Contato contato) {
        return contatoService.salvar(contato);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        contatoService.excluir(id);
    }
}
