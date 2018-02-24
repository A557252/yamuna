package com.bios.portal.entities;

import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import com.bios.portal.entities.Maintenance;
import com.bios.portal.entities.Spare;

/**
 * Author @ Tushar Upadhyay
 */

@Entity
@Table (name = "PACKAGE")
public class Package implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	@Column(name="PACKAGE_ID")
	private int packageId;
	
	@Column(name="PACKAGE_NAME",length=100)
	private String packageName;
	
	@Column(name="PRICE")
	private int price;
	
	@Column(name="DESCRIPTION",length=200)
	private String description;
	
	@Column(name="IS_ACTIVE",length=1)
	private String isActive;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "package_spare", joinColumns = { @JoinColumn(name = "package_id") }, inverseJoinColumns = { @JoinColumn(name = "spare_id") })
	List<Spare> spareParts;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "package_maintenance", joinColumns = { @JoinColumn(name = "package_id") }, inverseJoinColumns = { @JoinColumn(name = "lposition_id") })
	List <Maintenance> labourPositions;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "car_package", joinColumns = { @JoinColumn(name = "package_id") }, inverseJoinColumns = { @JoinColumn(name = "car_id") })
	List <Car> car;
	
	public Package() {

	}

	public Package(int packageId, String packageName, int price, String description, String isActive,
			List<Spare> spareParts, List<Maintenance> labourPositions, List<Car> car) {
		this.packageId = packageId;
		this.packageName = packageName;
		this.price = price;
		this.description = description;
		this.isActive = isActive;
		this.spareParts = spareParts;
		this.labourPositions = labourPositions;
		this.car = car;
	}


	public int getPackageId() {
		return packageId;
	}


	public void setPackageId(int packageId) {
		this.packageId = packageId;
	}

	public String getPackageName() {
		return packageName;
	}


	public void setPackageName(String packageName) {
		this.packageName = packageName;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Spare> getSpareParts() {
		return spareParts;
	}

	public void setSpareParts(List<Spare> spareParts) {
		this.spareParts = spareParts;
	}

	public List<Maintenance> getLabourPositions() {
		return labourPositions;
	}

	public void setLabourPositions(List<Maintenance> labourPositions) {
		this.labourPositions = labourPositions;
	}

	public String getIsActive() {
		return isActive;
	}

	public void setIsActive(String isActive) {
		this.isActive = isActive;
	}
}
