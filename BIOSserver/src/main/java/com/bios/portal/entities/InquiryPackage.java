package com.bios.portal.entities;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Author @ Tushar Upadhyay
 */

@Entity
@Table (name = "INQUIRY_PACKAGE")
public class InquiryPackage implements Serializable{

	
	private static final long serialVersionUID = 6415252247382624945L;
	
	@Id
	@GeneratedValue
	@Column(name="INQ_PACK_ID")
	private int inqPackId;

	@ManyToOne
	@JoinColumn(name="inquiry_id")
	private Inquiry inquiry;
	
	@Column(name="PACKAGE_ID")
	private int packageId;
	
	@Column(name="PACKAGE_PRICE")
	private int packagePrice;

	public InquiryPackage() {
		
	}

	public InquiryPackage(int inqPackId, int packageId, int packagePrice) {
		this.inqPackId = inqPackId;
		this.packageId = packageId;
		this.packagePrice = packagePrice;
	}

	public int getInqPackId() {
		return inqPackId;
	}

	public void setInqPackId(int inqPackId) {
		this.inqPackId = inqPackId;
	}


	public int getPackageId() {
		return packageId;
	}

	public void setPackageId(int packageId) {
		this.packageId = packageId;
	}

	public int getPackagePrice() {
		return packagePrice;
	}

	public void setPackagePrice(int packagePrice) {
		this.packagePrice = packagePrice;
	}

	public void setInquiry(Inquiry inquiry) {
		this.inquiry = inquiry;
	}

	@Override
	public String toString() {
		return "InquiryPackage [inqPackId=" + inqPackId + ", inquiry=" + inquiry + ", packageId=" + packageId
				+ ", packagePrice=" + packagePrice + "]";
	}
	
}
