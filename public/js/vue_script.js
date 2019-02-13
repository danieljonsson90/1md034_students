
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
        form: null
    },
    created: function () {
        socket.on('initialize', function (data) {
          this.orders = data.orders;
        }.bind(this));
   
        socket.on('currentQueue', function (data) {
          this.orders = data.orders;
        }.bind(this));
      },
    methods: {
        updateFunction: function() {
            this.form = ['Your Orders: ' + this.Choise,'Fullname: '+ this.Fullname,'Email adress: ' + this.Email,'Payment: ' 
            + this.Payment,'Gender: ' + this.Gender];
            console.log("check");
        },
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
              return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
          },
          addOrder: function (event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
            socket.emit("addOrder", { orderId: this.getNext(),
                                      details: { x: event.clientX - 10 - offset.x,
                                                 y: event.clientY - 10 - offset.y },
                                      orderItems: ["Beans", "Curry"]
                                    });
          }
    }
})

