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
		
	public Spare() {

	}

	public Spare(int spareId, String spareName) {
		this.spareId = spareId;
		this.spareName = spareName;
	}

	public int getSpareId() {
		return spareId;
	}

	public void setSpareId(int spareId) {
		this.spareId = spareId;
	}

	public String geSpareName() {
		return spareName;
	}

	public void setSpareName(String spareName) {
		this.spareName = spareName;
	}
	
	@Override
	public String toString() {
		return "Spare [spareId=" + spareId + ", spareName=" + spareName + "]";
	}
	
}
