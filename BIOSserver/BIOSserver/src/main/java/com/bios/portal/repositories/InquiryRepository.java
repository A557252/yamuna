package com.bios.portal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bios.portal.entities.Inquiry;

/**
 * Author @ Tushar Upadhyay
 */

public interface InquiryRepository extends JpaRepository<Inquiry,Integer>{
	public List<Inquiry> findByVin(String vin);
}
