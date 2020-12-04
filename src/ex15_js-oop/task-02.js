const Apartament = function (nameApartament) {
  this.name = nameApartament;
};

const NewDevice = function (nameDevice, power, room) {
  this.nameDevice = nameDevice;
  this.power = power;
  this.switchPosition = false;
  this.roomDevice = room;

  this.turnOn = function () {
    this.switchPosition = true;
  };

  this.turnOff = function () {
    this.switchPosition = false;
  };
};

const Room = function (nameRoom) {
  this.room = nameRoom;

  this.addDevice = function (nameDevice, power, room) {
    this[nameDevice] = new NewDevice(nameDevice, power, room);
  };
};

const rooms = {
  kitchen: new Room('kitchen'),
  hall: new Room('hall'),
  bedroom: new Room('bedroom'),
};

Apartament.prototype = rooms;

rooms.kitchen.addDevice('tvKitchen', 10, 'kitchen');
rooms.kitchen.addDevice('microwaveOven', 15, 'kitchen');
rooms.kitchen.addDevice('fridge', 13, 'kitchen');
rooms.kitchen.microwaveOven.turnOn();

rooms.bedroom.addDevice('iron', 13, 'bedroom');
rooms.bedroom.addDevice('lamp', 3, 'bedroom');

rooms.hall.addDevice('tvHall', 18, 'hall');
rooms.hall.addDevice('ps', 5, 'hall');
rooms.hall.tvHall.turnOn();
rooms.hall.ps.turnOn();

const newSearch = function (name) {
  for (room in rooms) {
    for (device in rooms[room]) {
      let deviceRoom = rooms[room][device];

      if (typeof deviceRoom === 'object') {
        if (deviceRoom.nameDevice === name) {
          return deviceRoom;
        }
      }
    }
  }
  return undefined
};

const powerConsumption = function () {
  let sum = 0;

  for (room in rooms) {
    for (device in rooms[room]) {
      let deviceRoom = rooms[room][device];

      if (typeof deviceRoom === 'object') {
        if (deviceRoom.switchPosition === true) {
          sum += deviceRoom.power;
        }
      }
    }
  }

  return sum;
};

const apartament = new Apartament('Квартира Васи');
