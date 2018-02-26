package com.bios.portal.services;

import java.util.List;
import com.bios.portal.entities.Package;

/**
 * Author @ Tushar Upadhyay
 */


public interface PackageService {
	List< Package > getPackages() throws Exception;
	boolean setPackages(List<Package> packs) throws Exception;
}
