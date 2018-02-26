package com.bios.portal.services;

import java.util.List;

import com.bios.portal.entities.Inquiry;

/**
 * Author @ Tushar Upadhyay
 */

public interface InquiryService {

	boolean addInquiry(Inquiry inquiry) throws Exception;
	List<Inquiry> getVinInquiries(String vin) throws Exception;
}
