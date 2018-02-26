export class Constants {

  public static URL = {
    host_url_home: 'http://10.87.201.73:9000',
    host_url: 'http://yamuna.apps.eu01.cf.canopy-cloud.com',
    packages_url: '/BIOS/packageService/getVinPackages?vin=',
    inquiry_url: '/BIOS/packageService/getAllServices',
    login_url: '/BIOS/userService/login',
    save_inquiry_url: '/BIOS/inquiryService/inquiry',
    AUTHENTICATE_URLS: ['dashboard']
  };
  public static isDev = true;

  public static json =
    [
      {
        "carId": 1,
        "vin": "WVWZZZ1J3W000001",
        "model": {
          "modelId": 1,
          "modelName": "polo"
        }, "packages": [
          {
            "packageId": 1,
            "packageName": "Basic package",
            "price": 11,
            "description": "Basic package description",
            "isActive": "Y",
            "spareParts": [
              { "spareId": 5, "spareName": "engine valve" }
              , { "spareId": 5, "spareName": "engine valve" }],
            "labourPositions": [
              { "lpositionId": 5, "lpositionName": "wheel balancing" },
              { "lpositionId": 5, "lpositionName": "wheel balancing" }]
          },
          {
            "packageId": 2,
            "packageName": "Summer package",
            "price": 22,
            "description": "Summer package description",
            "isActive": "Y",
            "spareParts": [{ "spareId": 3, "spareName": "rear view mirror" }],
            "labourPositions": [{ "lpositionId": 3, "lpositionName": "internal washing" }]
          },
          {
            "packageId": 4, "packageName": "15.000 km Service inspection", "price": 44,
            "description": "15.000 km Service inspection description", "isActive": "Y",
            "spareParts": [], "labourPositions": []
          }]
      }
    ]

  public static inquiriesJson =[
    {
      "inquiryId": 1,
      "carId": 1,
      "vin": "WVWZZZ1J3W000001",
      "totalPrice": 222,
      "createdOn": "2010-10-29 09:10:23 +0530",
      "modifiedOn": "2010-10-31 09:10:23 +0530",
      "userId": "1",
      "title": "qweewqqwe",
      "inquiryPackage": [
        {
          "inqPackId": 1,
          "packageId": 1,
          "packagePrice": 12
        }
      ],
      "addItems": [
        {
          "addItemId": 1,
          "description": "lpositionName1",
          "price": 12
        },
        {
          "addItemId": 2,
          "description": "lpositionName2",
          "price": 23
        }
      ]
    },
    {
      "inquiryId": 2,
      "carId": 1,
      "vin": "WVWZZZ1J3W000001",
      "totalPrice": 222,
      "createdOn": "2010-10-29 09:10:23 +0530",
      "modifiedOn": "2010-10-31 09:10:23 +0530",
      "userId": "1",
      "title": "qweewqqwe",
      "inquiryPackage": [
        {
          "inqPackId": 2,
          "packageId": 1,
          "packagePrice": 12
        }
      ],
      "addItems": [
        {
          "addItemId": 3,
          "description": "lpositionName1",
          "price": 12
        },
        {
          "addItemId": 4,
          "description": "lpositionName2",
          "price": 23
        }
      ]
    },
    {
      "inquiryId": 3,
      "carId": 1,
      "vin": "WVWZZZ1J3W000001",
      "totalPrice": 222,
      "createdOn": "2010-10-29 09:10:23 +0530",
      "modifiedOn": "2010-10-31 09:10:23 +0530",
      "userId": "1",
      "title": "qweewqqwe",
      "inquiryPackage": [
        {
          "inqPackId": 3,
          "packageId": 1,
          "packagePrice": 12
        }
      ],
      "addItems": [
        {
          "addItemId": 5,
          "description": "lpositionName1",
          "price": 12
        },
        {
          "addItemId": 6,
          "description": "lpositionName2",
          "price": 23
        }
      ]
    }
  ];


  public static inquiries = [
    {
      'title': 'Test Inquiry',
      'totalPrice': 5000,
      'userId': 123,
      'carId': 456,
      'packages': [{
        'packageId': 1,
        'packageName': 'Basic package',
        'price': 11,
        'description': 'Basic package description',
        'spareParts': [
          {
            'spareId': 5,
            'name': 'engine valve'
          },
          {
            'spareId': 5,
            'name': 'engine valve'
          }
        ],
        'labourPositions': [
          {
            'labourPositionId': 5,
            'workDescription': 'wheel balancing'
          },
          {
            'labourPositionId': 5,
            'workDescription': 'wheel balancing'
          }
        ]
      }],
      'additionalItems': [{
        'description': 'Test desciption',
        'price': 200
      }]
    }];
}
