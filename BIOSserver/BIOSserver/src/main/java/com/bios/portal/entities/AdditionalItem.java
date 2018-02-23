package com.bios.portal.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.bios.portal.entities.Maintenance;
import com.bios.portal.entities.Spare;

/**
 * Author @ Tushar Upadhyay
 */

@Entity
@Table (name = "ADDITIONAL_ITEMS")
public class AdditionalItem implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	@Column(name="INQUIRY_ID")
	private int inqId;
	
	@Column(name="DESCRIPTION",length=50)
	private String description;
	
	@Column(name="PRICE")
	private int price;
	
	
	public AdditionalItem() {

	}


	public AdditionalItem(int inqId, String description, int price) {
		super();
		this.inqId = inqId;
		this.description = description;
		this.price = price;
	}


	public int getInqId() {
		return inqId;
	}


	public void setInqId(int inqId) {
		this.inqId = inqId;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}


	@Override
	public String toString() {
		return "AdditionalItems [inqId=" + inqId + ", description="
				+ description + ", price=" + price + "]";
	}


	
	
}
