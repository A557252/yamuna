package com.bios.portal.controllers;

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
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	final Logger log = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserService usrSer;
		
	@SuppressWarnings("null")
	@RequestMapping(value = "/login", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	    public @ResponseBody ResponseEntity < User > userLogin(@RequestBody User user) {
		 User resUser = new User(); 
		 try {
	        	User usr = usrSer.findUser(user);
	            if (usr !=null) {
	                log.info("User Logged In Successfully " + user.getLoginName());
	                resUser.setUserId(usr.getUserId());
	                resUser.setUserName(usr.getUserName());
	                resUser.setUserRole(usr.getUserRole());
	                return new ResponseEntity < User > (resUser, HttpStatus.OK);
	            } else {
	                log.error("User Log In Failed" + user.getLoginName());
	                return new ResponseEntity < User > (resUser, HttpStatus.NOT_FOUND);
	            }
	        } catch (Exception e) {
	            log.error(e.getStackTrace().toString());
	            return new ResponseEntity < User > (resUser, HttpStatus.BAD_REQUEST);
	        }
	    }

	    @RequestMapping(value = "/logout", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	    public @ResponseBody ResponseEntity < ? > userLogout() {
	        log.info("User Logged Out Successfully");
	        return new ResponseEntity < String > (Constants.SUCCESS_STATUS + Constants.LOGOUT_FAIL, HttpStatus.OK);
	    }
}
