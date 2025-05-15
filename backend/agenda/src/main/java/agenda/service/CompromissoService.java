package agenda.service;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import agenda.entity.Compromisso;
import agenda.repository.CompromissoRepository; 

@Service
public class CompromissoService {
    
    @Autowired
    private CompromissoRepository compromissoRepository;

    public List<Compromisso> listarTodos() {
        return compromissoRepository.findAll();
    }

    public Compromisso salvar(Compromisso compromisso) {
        if (compromisso.getDataHora().isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("Compromissos não podem ser criados no passado.");
        }

        if (compromissoRepository.existsByContatoIdAndDataHora(compromisso.getContato().getId(), compromisso.getDataHora())) {
            throw new IllegalArgumentException("O contato já possui um compromisso nesse horário.");
        }

        return compromissoRepository.save(compromisso);
    }

    public void excluir(Long id) {
        compromissoRepository.deleteById(id);
    }
}
