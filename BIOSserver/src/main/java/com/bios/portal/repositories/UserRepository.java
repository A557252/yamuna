package com.bios.portal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bios.portal.entities.User;

/**
 * Author @ Tushar Upadhyay
 */

public interface UserRepository extends JpaRepository<User,Integer>{

	public List<User> findByUserName(String loginName);
	
}
