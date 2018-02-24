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
@Table (name = "MAINTENANCE")
public class Maintenance implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	@Column(name="LPOSITION_ID")
	private int lpositionId;
	
	@Column(name="LPOSITION_NAME",length=100)
	private String lpositionName;
	
	@Column(name="LPOSITION_PRICE",length=10)
	private int lpositionPrice;
	
	public Maintenance() {

	}

	public Maintenance(int lpositionId, String lpositionName, int lpositionPrice) {
		this.lpositionId = lpositionId;
		this.lpositionName = lpositionName;
		this.lpositionPrice = lpositionPrice;
	}

	public int getLpositionId() {
		return lpositionId;
	}

	public void setLpositionId(int lpositionId) {
		this.lpositionId = lpositionId;
	}

	public String getLpositionName() {
		return lpositionName;
	}

	public void setLpositionName(String lpositionName) {
		this.lpositionName = lpositionName;
	}

	public int getlpositionPrice() {
		return lpositionPrice;
	}

	public void setlpositionPrice(int lpositionPrice) {
		this.lpositionPrice = lpositionPrice;
	}

	@Override
	public String toString() {
		return "Maintenance [lpositionId=" + lpositionId + ", lpositionName=" + lpositionName + ", lpositionPrice="
				+ lpositionPrice + "]";
	}	
}
