package com.bios.portal.entities;

import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * Author @ Tushar Upadhyay
 */

@Entity
@Table (name = "CAR")
public class Car implements Serializable{

	private static final long serialVersionUID = 5479501204414790597L;

	@Id
	@GeneratedValue
	@Column(name="CAR_ID")
	private int carId;
	
	@Column(name="VIN",length=17)
	private String vin;
	
	@OneToOne(cascade = CascadeType.ALL)
        @JoinColumn(name = "model_id")
	Model model;

	@ManyToMany(mappedBy = "car")
	List<Package> packages;
	
	public Car() {
		
	}
	
	public Car(int carId, String vin, Model model, List<Package> packages) {
		this.carId = carId;
		this.vin = vin;
		this.model = model;
		this.packages = packages;
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

	public Model getModel() {
		return model;
	}

	public void setModel(Model model) {
		this.model = model;
	}

	public List<Package> getPackages() {
		return packages;
	}

	public void setPackages(List<Package> packages) {
		this.packages = packages;
	}

	@Override
	public String toString() {
		return "Car [carId=" + carId + ", vin=" + vin + ", model=" + model + ", packages=" + packages + "]";
	}
	
}
