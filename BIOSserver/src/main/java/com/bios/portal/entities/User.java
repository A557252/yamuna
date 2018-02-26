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
@Table (name = "VWUSER")
public class User implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -8764731931157225180L;

	@Id
	@GeneratedValue
	@Column(name="USER_ID")
	private int userId;
	
	@Column(name="USER_NAME",length=50)
	private String userName;
	
	@Column(name="LOGIN_NAME",length=50)
	private String loginName;
	
	@Column(name="USER_PWD",length=100)
	private String userPassword;
	
	@Column(name="USER_ROLE",length=100)
	private String userRole;
	
	@Column(name="IS_ACTIVE",length=3)
	private String IsActive;
	
	public User() {
		
	}

	public User(int userId, String userName, String loginName, String userPassword, String userRole,
			String isActive) {
		this.userId = userId;
		this.userName = userName;
		this.loginName = loginName;
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

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
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

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", loginName=" + loginName + ", userPassword="
				+ userPassword + ", userRole=" + userRole + ", IsActive=" + IsActive + "]";
	}
}
