package com.bios.portal.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bios.portal.entities.Inquiry;
import com.bios.portal.repositories.InquiryRepository;

/**
 * Author @ Tushar Upadhyay
 */
@Service("inquiryService")
public class InquiryServiceImpl implements InquiryService{
	
	@Autowired
	InquiryRepository inqRepo;

	@Transactional
	@Override
	public boolean addInquiry(Inquiry inquiry) throws Exception {
		return inqRepo.save(inquiry) != null ? true : false;
	}
	
	@Transactional
	@Override
	public List<Inquiry> getVinInquiries(String vin) throws Exception {
		return inqRepo.findByVin(vin);
	}
	
}
