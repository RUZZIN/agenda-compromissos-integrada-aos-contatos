package agenda.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import agenda.entity.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long> {
    
}
