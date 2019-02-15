
'use strict';
var socket = io();

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
        Payment: '',
        Gender:'Other',
        Choise: [],
        orders: {},
        orderId: 1,
        form: null
    },
    methods: {
        addOrder: function(event) {
            socket.emit("addOrder", { orderId: this.orderId,
                details: this.orders.details, orderItems: [this.Choise], personalInfo: [this.Fullname, this.Email, this.Payment, this.Gender]
              },
              );
              this.orderId += 1;
            
        },
          displayOrder: function (event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
            this.orders = {details: { 
                                    x: event.clientX - 10 - offset.x,
                                    y: event.clientY - 10 - offset.y },
                                    };
          }
    }
})

