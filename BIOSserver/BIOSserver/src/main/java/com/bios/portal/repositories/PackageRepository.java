package com.bios.portal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bios.portal.entities.Package;
/**
 * Author @ Tushar Upadhyay
 */

public interface PackageRepository extends JpaRepository<Package,Integer>{
	
}
