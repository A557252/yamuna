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
	public boolean findUser(User user) throws Exception {
		 List < User > resUser = usrRepo.findByLoginName(user.getUserName());
	        if (resUser != null) {
	            for (User usr: resUser) {
	                return usr.getUserPassword().equals(user.getUserPassword()) ? true : false;
	            }
	        }
	        return false;
	}

	@Transactional
	@Override
	public boolean addUser(User user) throws Exception {
		return usrRepo.save(user) != null ? true : false;
	}

	@Transactional
	@Override
	public boolean modifyUser(User user) throws Exception {
		return usrRepo.saveAndFlush(user) != null ? true : false;
	}

	@Transactional
	@Override
	public List<User> fetchUserList(String vin) throws Exception {
		return usrRepo.findAll();
	}

	
}
