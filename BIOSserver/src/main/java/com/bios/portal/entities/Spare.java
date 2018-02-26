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
@Table (name = "SPARE")
public class Spare implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	@Column(name="SPARE_ID")
	private int spareId;
	
	@Column(name="SPARE_NAME",length=100)
	private String spareName;
	
	@Column(name="SPARE_PRICE",length=10)
	private int sparePrice;
	
	public Spare() {

	}

	public Spare(int spareId, String spareName, int sparePrice) {
		this.spareId = spareId;
		this.spareName = spareName;
		this.sparePrice = sparePrice;
	}

	public int getSpareId() {
		return spareId;
	}

	public void setSpareId(int spareId) {
		this.spareId = spareId;
	}

	public String getSpareName() {
		return spareName;
	}

	public void setSpareName(String spareName) {
		this.spareName = spareName;
	}

	public int getsparePrice() {
		return sparePrice;
	}

	public void setsparePrice(int sparePrice) {
		this.sparePrice = sparePrice;
	}

	@Override
	public String toString() {
		return "Spare [spareId=" + spareId + ", spareName=" + spareName + ", sparePrice=" + sparePrice + "]";
	}
}
