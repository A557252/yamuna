package com.bios.portal.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bios.portal.entities.Inquiry;
import com.bios.portal.repositories.InquiryRepository;

/**
 * Author @ Tushar Upadhyay
 */
@Service("inquiryService")
public class InquiryServiceImpl implements InquiryService{
	
	@Autowired
	InquiryRepository inqRepo;

	@Override
	public boolean addInquiry(Inquiry inquiry) throws Exception {
		return inqRepo.save(inquiry) != null ? true : false;
	}
	
	@Override
	public List<Inquiry> getVinInquiries(String vin) throws Exception {
		return inqRepo.findByVin(vin);
	}
	
}
