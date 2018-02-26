package com.bios.portal.controllers;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bios.portal.entities.Car;
import com.bios.portal.entities.Inquiry;
import com.bios.portal.services.InquiryService;
import com.bios.portal.utils.Constants;

/**
 * @author Tushar Upadhyay
 */

@RestController
@RequestMapping("/BIOS/inquiryService")
//@CrossOrigin(origins = "http://localhost:4200")
public class InquiryController {

	private static Logger log = Logger.getLogger(PackageController.class);
	@Autowired
	InquiryService inqSer;
	
	@RequestMapping(value = "/inquiry", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> insertInquiry(@RequestBody Inquiry inquiry)
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
	
	@RequestMapping(value = "/inquiries", method = RequestMethod.GET, produces =MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<List<Inquiry>> getInquiries(@RequestParam ("vin") String vin )
	{
		List<Inquiry> resultList = null;
		try {
			resultList = inqSer.getVinInquiries(vin);
			if(resultList != null){
				return new ResponseEntity<List<Inquiry>>(resultList,HttpStatus.OK);
			} else {
				log.error("Inquiry Delivery Failed");
				return new ResponseEntity<List<Inquiry>>(resultList,HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			log.error("Inquiry Delivery Failed" + e.getMessage());
			return new ResponseEntity<List<Inquiry>>(resultList,HttpStatus.NOT_IMPLEMENTED);
		}
	}
}
