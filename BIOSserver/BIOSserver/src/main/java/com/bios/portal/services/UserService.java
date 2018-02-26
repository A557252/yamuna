package com.bios.portal.services;

import com.bios.portal.entities.User;

/**
 * Author @ Tushar Upadhyay
 */

public interface UserService {
	User findUser(User user) throws Exception;
}
