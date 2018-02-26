package com.bios.portal.services;

import java.util.List;

import com.bios.portal.entities.Car;

/**
 * Author @ Tushar Upadhyay
 */
public interface CarService {
	List< Car > getVINPackages(String vin) throws Exception;
}
