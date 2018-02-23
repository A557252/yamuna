package com.bios.portal.daos;

import java.util.List;

import com.bios.portal.entities.User;;

/**
 * Author @ Tushar Upadhyay
 */

public interface UserDao {
	boolean insertUser(User user) throws Exception;
	boolean updateUser(User user) throws Exception;
	List< User > getUser(String userName) throws Exception;
}
