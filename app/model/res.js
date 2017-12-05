
tableApp.factory("Table", function(){
    function Table(plainObject) {
        this.day = plainObject.day;
        this.time = plainObject.time;
        this.num = plainObject.num;
        this.status = plainObject.status;
        this.res = plainObject.res;
        this.img0 = plainObject.img0;
        this.img1 = plainObject.img1;
        this.fName = plainObject.fName;
        this.lName = plainObject.lName;
        this.phone = plainObject.phone;
        this.diners = plainObject.diners;
        this.currentImage = this.img0;
      
    };

    return Table;
})

tableApp.factory("Reservations", function(){
    function Reservations(plainObject) {
        this.day = plainObject.day;
        this.time = plainObject.time;
        this.table = plainObject.table;
        this.fName = plainObject.fName;
        this.lName = plainObject.lName;
        this.phone = plainObject.phone;
        this.diners = plainObject.diners;
      
    };

    return Reservations;
})

