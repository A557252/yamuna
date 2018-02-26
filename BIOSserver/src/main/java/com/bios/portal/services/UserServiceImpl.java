package com.bios.portal.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.bios.portal.entities.User;
import com.bios.portal.repositories.UserRepository;

/**
 * Author @ Tushar Upadhyay
 */

@Service("UserService")
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository usrRepo;
	
	@Transactional
	@Override
	public User findUser(User user) throws Exception {
		 List < User > resUser = usrRepo.findByLoginName(user.getLoginName());
	        if (resUser != null) {
	            for (User usr: resUser) {
	                return usr.getUserPassword().equals(user.getUserPassword()) ? usr : null;
	            }
	        }
	        return null;
	}
	
}
