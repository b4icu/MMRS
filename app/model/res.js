
tableApp.factory("Table", function(){
    function Table(plainObject) {
        this.num = plainObject.num;
        this.status = plainObject.status;
        this.res = plainObject.res;
        this.img0 = plainObject.img0;
        this.img1 = plainObject.img1;
        this.currentImage = this.img0;
      
    };

    return Table;
});

