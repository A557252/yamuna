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
import com.bios.portal.entities.User;
import com.bios.portal.services.UserService;
import com.bios.portal.utils.Constants;

/**
 * @author Tushar Upadhyay
 */

@RestController
@RequestMapping("/BIOS/userService")
@CrossOrigin(origins = "http://yamunafrontend1.apps.eu01.cf.canopy-cloud.com")
public class UserController {

	private static Logger log = Logger.getLogger(UserController.class);
	
	@Autowired
	private UserService usrSer;
	
	@RequestMapping(value = "/healthCheck", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity< ? > checkHealth()
	{
		log.error("Service running fine!!!");
		return new ResponseEntity< String >("{\"success\":\"Service Available\"}",HttpStatus.OK);
	}
	
	 @RequestMapping(value = "/login", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	    public @ResponseBody ResponseEntity < ? > userLogin(@RequestBody User user) {
	        try {
	            if (usrSer.findUser(user)) {
	                log.info("User Logged In Successfully " + user.getLoginName());
	                return new ResponseEntity < String > (Constants.SUCCESS_STATUS + Constants.LOGIN_SUCCESS, HttpStatus.OK);
	            } else {
	                log.error("User Log In Failed" + user.getLoginName());
	                return new ResponseEntity < String > (Constants.FAILURE_STATUS + Constants.LOGIN_FAILURE_NO_USER, HttpStatus.NOT_FOUND);
	            }
	        } catch (Exception e) {
	            log.error("User Log In Failed" + e.getMessage());
	            return new ResponseEntity < String > (Constants.FAILURE_STATUS + Constants.LOGIN_FAILURE_NO_USER, HttpStatus.BAD_REQUEST);
	        }
	    }

	    @RequestMapping(value = "/logout", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	    public @ResponseBody ResponseEntity < ? > userLogout() {
	        log.info("User Logged Out Successfully");
	        return new ResponseEntity < String > (Constants.SUCCESS_STATUS + Constants.LOGOUT_FAIL, HttpStatus.OK);
	    }
}
