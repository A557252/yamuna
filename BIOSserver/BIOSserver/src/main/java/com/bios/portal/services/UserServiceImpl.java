package com.bios.portal.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.bios.portal.daos.UserDao;
import com.bios.portal.entities.User;

/**
 * Author @ Tushar Upadhyay
 */

@Service("UserService")
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	UserDao usrDao;
	
	@Override
	public boolean findUser(User user) throws Exception {
		 List < User > resUser = usrDao.getUser(user.getUserName());
	        if (resUser != null) {
	            for (User usr: resUser) {
	                return usr.getUserPassword().equals(user.getUserPassword()) ? true : false;
	            }
	        }
	        return false;
	}

	@Override
	public boolean addUser(User inq) throws Exception {
		return usrDao.insertUser(inq);
	}

	@Override
	public boolean modifyUser(User inq) throws Exception {
		return usrDao.updateUser(inq);
	}

	@Override
	public List<User> fetchUserList(String vin) throws Exception {
		return (List < User >)usrDao.getUser(vin);
	}

	
}
