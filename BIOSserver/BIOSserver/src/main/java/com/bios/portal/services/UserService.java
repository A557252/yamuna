package com.bios.portal.services;

import java.util.List;
import com.bios.portal.entities.User;

/**
 * Author @ Tushar Upadhyay
 */

public interface UserService {
	boolean findUser(User user) throws Exception;
	boolean addUser(User user) throws Exception;
	boolean modifyUser(User user) throws Exception;
	List< User > fetchUserList(String uid) throws Exception;

}
