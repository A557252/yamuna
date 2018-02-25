package com.bios.portal.controllers;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bios.portal.entities.Inquiry;
import com.bios.portal.services.InquiryService;
import com.bios.portal.utils.Constants;

/**
 * @author Tushar Upadhyay
 */

@RestController
@RequestMapping("/BIOS/packageService")
@CrossOrigin(origins = "http://localhost:4200")
public class InquiryController {

	private static Logger log = Logger.getLogger(PackageController.class);
	@Autowired
	InquiryService inqSer;
	
	@RequestMapping(value = "/addInquiry", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> insertInquiry(@RequestBody Inquiry inquiry)
	{
		try {
			if(inqSer.addInquiry(inquiry)){
				log.info("Inquiry added  successfully");
				return new ResponseEntity<String>(Constants.SUCCESS_STATUS+Constants.INSERTED_SUCCESS,HttpStatus.OK);
			} else {
				log.error("Inquiry adding Failed");
				return new ResponseEntity<String>(Constants.FAILURE_STATUS+Constants.INSERTED_FAILURE,HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			log.error("Inquiry adding Failed");
			return new ResponseEntity<String>(Constants.FAILURE_STATUS+Constants.INSERTED_FAILURE,HttpStatus.NOT_IMPLEMENTED);
		}
		
	}
}
