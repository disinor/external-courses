const NewRoom = function (nameRoom) {
  this.nameRoom = nameRoom;
  this.shine = false;
  this.devices = [];

  this.toTurnOnTheLight = () => {
    this.shine = true;
  };
  this.toTurnOffTheLight = () => {
    this.shine = false;
  };
  this.addDevice = (device) => {
    this.devices.push(device);
  };
};

const newRoomHall = function (nameRoom) {
  NewRoom.apply(this, arguments);
  this.floorHeating = false;
  this.power = 5;

  this.floorHeatingOn = () => {
    this.floorHeating = true;
  };

  this.floorHeatingOff = () => {
    this.floorHeating = false;
  };
};

const Apartament = function (nameApartament) {
  this.nameApartament = nameApartament;
  this.roomApartament = [];

  this.addRoom = (nameRoom) => {
    this.roomApartament.push(nameRoom);
  };

  this.calculateThePower = function () {
    this.powerConsumption = 0;
    
    apartament.roomApartament.forEach((e) => {
      e.devices.forEach((element) => {
        if (element.switchPosition === true) {
          console.log(this.powerConsumption);
          this.powerConsumption += element.powerDevice;
        }
      });
    });
  };

  this.searchDevise = function (name) {
    this.powerConsumption = 0;

    apartament.roomApartament.forEach((e) => {
      e.devices.forEach((element) => {
        if (element.nameDevice === name) {
          console.log(element);
        }
      });
    });
  };
};

const NewDevice = function (name, power, room) {
  this.nameDevice = name;
  this.powerDevice = power;
  this.roomDevice = room;
  this.switchPosition = false;

  this.turnOn = function () {
    this.switchPosition = true;
  };

  this.turnOff = function () {
    this.switchPosition = false;
  };
};

const NewDeviceTv = function (name, power, room, volume) {
  NewDevice.apply(this, arguments);
  this.volume = volume;
  this.turnUpTheVolume = () => {
    this.volume += 5;
  };

  this.turnDownTheVolume = () => {
    this.volume -= 5;
  };
};

const newDeviceLamp = function (name, power, room, color) {
  NewDevice.apply(this, arguments);
  this.color = color;
  this.changeColor = (newColor) => {
    this.color = newColor;
  };
};

const newDeviceIron = function (name, power, room, heatingPower) {
  NewDevice.apply(this, arguments);
  this.heatingPower = heatingPower;

  this.increaseHeating = (value) => {
    this.heatingPower = value;
  };
};

const apartament = new Apartament('Квартира Васи');
apartament.addRoom(new newRoomHall('Hall'));
apartament.addRoom(new NewRoom('kitchen'));
apartament.addRoom(new NewRoom('beadroom'));

apartament.roomApartament[0].addDevice(new NewDeviceTv('tv', 18, 'hall', 25));
apartament.roomApartament[0].addDevice(new NewDevice('ps', 5, 'hall'));
apartament.roomApartament[0].devices[0].turnOn();
/* apartament.roomApartament[0].devices[1].turnOn(); */

apartament.roomApartament[1].addDevice(
  new NewDevice('microvave', 8, 'kitchen')
);
apartament.roomApartament[1].addDevice(
  new newDeviceLamp('lamp', 3, 'kitchen', 'red')
);

apartament.roomApartament[2].addDevice(
  new newDeviceIron('iron', 10, 'beadroom', 64)
);
apartament.roomApartament[2].addDevice(
  new newDeviceLamp('lamp', 3, 'beadroom', 'green')
);
apartament.roomApartament[2].devices[0].turnOn();

apartament.searchDevise('lamp');

console.log(apartament);
