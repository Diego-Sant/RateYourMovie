package com.rymovie.rateyourmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rymovie.rateyourmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
