package agenda.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import agenda.entity.Contato;
import agenda.repository.ContatoRepository;

@Service
public class ContatoService {
    
    @Autowired
    private ContatoRepository contatoRepository;

    public List<Contato> listarTodos() {
        return contatoRepository.findAll();
    }

    public Contato salvar(Contato contato) {
        return contatoRepository.save(contato);
    }

    public void excluir(Long id) {
        contatoRepository.deleteById(id);
    }
}
