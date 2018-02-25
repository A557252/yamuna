package com.bios.portal.entities;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

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
	@Column(name="ADDITEM_ID")
	private int addItemId;
	
	@Column(name="DESCRIPTION",length=50)
	private String description;
	
	@Column(name="PRICE")
	private int price;
	
	@Column(name="INQUIRY_ID")
	private Inquiry inquiry;
	
	public AdditionalItem() {

	}

	public AdditionalItem(int addItemId, String description, int price, Inquiry inquiry) {
		this.addItemId = addItemId;
		this.description = description;
		this.price = price;
		this.inquiry = inquiry;
	}



	public int getAddItemId() {
		return addItemId;
	}

	public void setAddItemId(int addItemId) {
		this.addItemId = addItemId;
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

	public Inquiry getInquiry() {
		return inquiry;
	}

	public void setInquiry(Inquiry inquiry) {
		this.inquiry = inquiry;
	}
	
}
