package com.bios.portal.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Author @ Tushar Upadhyay
 */

@Entity
@Table (name = "INQUIRY")
public class Inquiry implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	@Column(name="INQUIRY_ID")
	private int inquiryId;
	
	@Column(name="CAR_ID", length=3)
	private int carId;
	
	@Column(name="VIN",length=17)
	private String vin;
	
	@Column(name="TOTAL_PRICE")
	private int totalPrice;
	
	@Column(name="CREATED_ON",length=30)
	private String createdOn;
	
	@Column(name="MODIFIED_ON",length=30)
	private String modifiedOn;
	
	@Column(name="USER_ID",length=3)
	private String userId;
	
	@Column(name="TITLE",length=50)
	private String title;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "INQUIRY_ID")
	private List<InquiryPackage> inquiryPackage;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "INQUIRY_ID")
	private List<AdditionalItem> addItems;
	
	public Inquiry() {

	}

	public Inquiry(int inquiryId, int carId, String vin, int totalPrice, String createdOn, String modifiedOn,
			String userId, String title,  List<InquiryPackage> inquiryPackage, List<AdditionalItem> addItems) { 
		this.inquiryId = inquiryId;
		this.carId = carId;
		this.vin = vin;
		this.totalPrice = totalPrice;
		this.createdOn = createdOn;
		this.modifiedOn = modifiedOn;
		this.userId = userId;
		this.title = title;
		this.inquiryPackage = inquiryPackage;
		this.addItems = addItems;
	}

	public int getInquiryId() {
		return inquiryId;
	}

	public void setInquiryId(int inquiryId) {
		this.inquiryId = inquiryId;
	}

	public int getCarId() {
		return carId;
	}

	public void setCarId(int carId) {
		this.carId = carId;
	}

	public String getVin() {
		return vin;
	}

	public void setVin(String vin) {
		this.vin = vin;
	}

	public int getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(String createdOn) {
		this.createdOn = createdOn;
	}

	public String getModifiedOn() {
		return modifiedOn;
	}

	public void setModifiedOn(String modifiedOn) {
		this.modifiedOn = modifiedOn;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	

	/*public  List<InquiryPackage> getInquiryPackage() {
		return inquiryPackage;
	}*/

	public void setInquiryPackage( List<InquiryPackage> inquiryPackage) {
		this.inquiryPackage = inquiryPackage;
	}

	/*public List<AdditionalItem> getAddItems() {
		return addItems;
	}*/

	public void setAddItems(List<AdditionalItem> addItems) {
		this.addItems = addItems;
	}

}
