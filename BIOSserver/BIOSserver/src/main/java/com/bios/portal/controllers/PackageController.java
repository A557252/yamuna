package com.bios.portal.controllers;

import java.util.List;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.bios.portal.entities.Car;
import com.bios.portal.entities.Package;
import com.bios.portal.services.CarService;
import com.bios.portal.services.PackageService;

/**
 * @author Tushar Upadhyay
 */

@RestController
@RequestMapping("/BIOS/packageService")
//@CrossOrigin(origins = "http://localhost:4200")
public class PackageController {

	private static Logger log = Logger.getLogger(PackageController.class);
	
	@Autowired
	private PackageService pacSer;
	
	@Autowired
	private CarService carSer;
	
	@RequestMapping(value = "/getVinPackages", method = RequestMethod.GET, produces =MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getPackages(@RequestParam ("vin") String vin )
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
			log.error("Packages Delivery Failed");
			return new ResponseEntity<List<Car>>(resultList,HttpStatus.NOT_IMPLEMENTED);
		}
	}
	
	@RequestMapping(value = "/getAllServices", method = RequestMethod.GET, produces =MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAdditionalServices()
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
			log.error("Packages Delivery Failed");
			return new ResponseEntity<List<Package>>(resultList,HttpStatus.NOT_IMPLEMENTED);
		}
	}
}
