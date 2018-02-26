package com.bios.portal.controllers;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import com.bios.portal.entities.Package;
import com.bios.portal.services.CarService;
import com.bios.portal.services.PackageService;
import com.bios.portal.utils.Constants;

/**
 * @author Tushar Upadhyay
 */

@RestController
@RequestMapping("/BIOS/packageService")
@CrossOrigin(origins = "http://yamunafrontendnew.apps.eu01.cf.canopy-cloud.com")
public class PackageController {

	final Logger log = LoggerFactory.getLogger(PackageController.class);
	
	@Autowired
	private PackageService pacSer;
	
	@Autowired
	private CarService carSer;
	
	@RequestMapping(value = "/packages", method = RequestMethod.GET, produces =MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<List<Car>> getPackages(@RequestParam ("vin") String vin )
	{
		List<Car> resultList = null;
		try {
			resultList = carSer.getVINPackages(vin);
			if(resultList != null){
				return new ResponseEntity<List<Car>>(resultList,HttpStatus.OK);
			} else {
				log.error("Packages Delivery Failed");
				return new ResponseEntity<List<Car>>(resultList,HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			log.error(e.getStackTrace().toString());
			return new ResponseEntity<List<Car>>(resultList,HttpStatus.NOT_IMPLEMENTED);
		}
	}
	
	@RequestMapping(value = "/services", method = RequestMethod.GET, produces =MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<List<Package>> getAdditionalServices()
	{
		List<Package> resultList = null;
		try {
			resultList = pacSer.getPackages();
			if(resultList != null){
				return new ResponseEntity<List<Package>>(resultList,HttpStatus.OK);
			} else {
				log.error("Packages Delivery Failed");
				return new ResponseEntity<List<Package>>(resultList,HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			log.error(e.getStackTrace().toString());
			return new ResponseEntity<List<Package>>(resultList,HttpStatus.NOT_IMPLEMENTED);
		}
	}
	
	@RequestMapping(value = "/updatePackage", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> updatePackages(@RequestBody List<Package> packs){
		try {
			if(pacSer.setPackages(packs)) {
				log.info("Package Add or Update  successfully");
				return new ResponseEntity<String>(Constants.SUCCESS_STATUS+Constants.INSERTED_SUCCESS,HttpStatus.OK);
			}else {
				log.error("Package Add or Update Failed");
				return new ResponseEntity<String>(Constants.FAILURE_STATUS+Constants.INSERTED_FAILURE,HttpStatus.BAD_REQUEST);
			}
		}catch (Exception e) {
			log.error(e.getStackTrace().toString());
			return new ResponseEntity<String>(Constants.FAILURE_STATUS+Constants.INSERTED_FAILURE,HttpStatus.NOT_IMPLEMENTED);
		}
	}
}
