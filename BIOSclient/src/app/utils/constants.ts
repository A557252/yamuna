export class Constants {

    public static URL = {
        host_url: 'http://localhost:9000',
        inquiry_url: '/BIOS/packagess?vin=',
        login_url: '/BIOS/userService/login'
    };

    public static json = [
        {
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
        },
        {
          'packageId': 2,
          'packageName': 'Summer package',
          'price': 22,
          'description': 'Summer package description',
          'spareParts': [
            {
              'spareId': 3,
              'name': 'rear view mirror'
            }
          ],
          'labourPositions': [
            {
              'labourPositionId': 3,
              'workDescription': 'internal washing'
            }
          ]
        }
      ];
}
