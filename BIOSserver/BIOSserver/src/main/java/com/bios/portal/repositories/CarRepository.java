package com.bios.portal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bios.portal.entities.Car;
/**
 * Author @ Tushar Upadhyay
 */

public interface CarRepository extends JpaRepository<Car,Integer>{
	public List<Car> findByVin(String vin);
}
