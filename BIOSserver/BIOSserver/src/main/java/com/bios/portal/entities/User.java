package com.bios.portal.entities;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Author @ Tushar Upadhyay
 */

@Entity
@Table (name = "USER_TABLE")
public class User implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -8764731931157225180L;

	@Id
	@GeneratedValue
	@Column(name="USER_ID")
	private int userId;
	
	@Column(name="USER_FULLNAME",length=50)
	private String userFullName;
	
	@Column(name="USER_NAME",length=50)
	private String userName;
	
	@Column(name="USER_PWD",length=100)
	private String userPassword;
	
	@Column(name="USER_ROLE",length=100)
	private String userRole;
	
	@Column(name="IS_ACTIVE",length=1)
	private String IsActive;
	
	public User() {
		
	}

	public User(int userId, String userFullName, String userName, String userPassword, String userRole,
			String isActive) {
		super();
		this.userId = userId;
		this.userFullName = userFullName;
		this.userName = userName;
		this.userPassword = userPassword;
		this.userRole = userRole;
		IsActive = isActive;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserFullName() {
		return userFullName;
	}

	public void setUserFullName(String userFullName) {
		this.userFullName = userFullName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	public String getIsActive() {
		return IsActive;
	}

	public void setIsActive(String isActive) {
		IsActive = isActive;
	}
}
