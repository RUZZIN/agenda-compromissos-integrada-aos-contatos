package agenda.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import agenda.entity.Compromisso;

@Repository
public interface CompromissoRepository extends JpaRepository<Compromisso, Long> {   
    List<Compromisso> findByContatoIdAndDataHoraBetween(Long contatoId, LocalDateTime start, LocalDateTime end);
    boolean existsByContatoIdAndDataHora(Long contatoId, LocalDateTime dataHora);
} 
