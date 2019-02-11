
function MenuItem(name,kCal,g,l,img) {
    this.burgername = name;
    this.Calories = kCal;
    this.gluten = g;
    this.lactose = l;
    this.img = img;
    this.name = function() {
        return this.burgername;
        }; 
      }

var vm = new Vue ({
    el:'#mainId',
    data: {
        food: items,
        Fullname: '',
        Email: '',
        Street: '',
        House: '',
        Payment: '',
        Gender:'Other',
        Choise: [],
        form: null
    },
    methods: {
        updateFunction: function() {
            this.form = ['Your Orders: ' + this.Choise,'Fullname: '+ this.Fullname,'Email adress: ' + this.Email,'Street: ' + this.Street,'House number: ' +  this.House,'Payment: ' 
            + this.Payment,'Gender: ' + this.Gender];
            console.log("check");
        }
    }
})
 

