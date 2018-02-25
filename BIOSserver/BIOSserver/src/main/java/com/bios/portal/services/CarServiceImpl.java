package com.bios.portal.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bios.portal.entities.Car;
import com.bios.portal.repositories.CarRepository;
/**
 * Author @ Tushar Upadhyay
 */
@Service("carService")
public class CarServiceImpl implements CarService{

	@Autowired
	CarRepository carRepo;
	
	@Transactional
	@Override
	public List<Car> getVINPackages(String vin) throws Exception {
		return  carRepo.findByVin(vin);
	}
}
