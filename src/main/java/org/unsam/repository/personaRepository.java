package org.unsam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.unsam.entity.persona;

@Repository
public interface personaRepository extends JpaRepository<persona, Long> {
}
