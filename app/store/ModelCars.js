Ext.define('App.store.ModelCars', {
    extend: 'Ext.data.Store',
    model: 'App.model.ModelCar',
    sorters: ['name'],
    data: [
        { 'id': 1, 'category': 'Trucks and Buses', 'name': '1940 Ford Pickup Truck', 'vendor': 'Motor City Art Classics' },
	    { 'id': 2, 'category': 'Trucks and Buses', 'name': '1957 Chevy Pickup', 'vendor': 'Gearbox Collectibles' },
	    { 'id': 3, 'category': 'Classic Cars', 'name': '1972 Alfa Romeo GTA', 'vendor': 'Motor City Art Classics' },
	    { 'id': 4, 'category': 'Motorcycles', 'name': '2003 Harley-Davidson Eagle Drag Bike', 'vendor': 'Studio M Art Models' },
        { 'id': 5, 'category': 'Motorcycles', 'name': '1996 Moto Guzzi 1100i', 'vendor': 'Motor City Art Classics' },
        { 'id': 6, 'category': 'Classic Cars', 'name': '1952 Alpine Renault 1300', 'vendor': 'Studio M Art Models' },
        { 'id': 7, 'category': 'Classic Cars', 'name': '1993 Mazda RX-7', 'vendor': 'Motor City Art Classics' },
        { 'id': 9, 'category': 'Classic Cars', 'name': '1965 Aston Martin DB5', 'vendor': 'Motor City Art Classics' },
        { 'id': 10, 'category': 'Classic Cars', 'name': '1998 Chrysler Plymouth Prowler', 'vendor': 'Unimax Art Galleries' },
        { 'id': 11, 'category': 'Trucks and Buses', 'name': '1926 Ford Fire Engine', 'vendor': 'Studio M Art Models' },
        { 'id': 12, 'category': 'Trucks and Buses', 'name': '1962 Volkswagen Microbus', 'vendor': 'Unimax Art Galleries' },
        { 'id': 13, 'category': 'Trucks and Buses', 'name': '1980’s GM Manhattan Express', 'vendor': 'Motor City Art Classics' },
        { 'id': 14, 'category': 'Motorcycles', 'name': '1997 BMW F650 ST', 'vendor': 'Gearbox Collectibles' },
        { 'id': 15, 'category': 'Motorcycles', 'name': '1974 Ducati 350 Mk3 Desmo', 'vendor': 'Motor City Art Classics' },
        { 'id': 16, 'category': 'Motorcycles', 'name': '2002 Yamaha YZR M1', 'vendor': 'Motor City Art Classics' }
    ]
});