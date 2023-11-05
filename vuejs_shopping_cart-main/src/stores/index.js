import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return { 
            products: [
                {
                    id: 1,
                    name: 'Neumatico',
                    price: 80000,
                    image: 'https://neumaticosrocca.com.ar/ciudadela/wp-content/uploads/2022/04/ECOPIA-EP22.png'
                },
                {
                    id: 2,
                    name: 'Valvula',
                    price: 10000,
                    image: 'https://www.contrapesos.cl/wp-content/uploads/2019/03/TR-413.png'
                },
                {
                    id: 3,
                    name: 'Pastillas de Freno',
                    price: 15000,
                    image: 'https://cdn11.bigcommerce.com/s-1njh4cfv9e/images/stencil/600x600/products/1886/6574/pastillas_freno_delantero_luv_dmax_2.4l-3.0l_diesel_4x2_01__36363.1629856558.jpg?c=1'
                },
                {
                    id: 4,
                    name: 'Filtro de Aceite',
                    price: 10000,
                    image: 'https://www.factoryparts.com.ar/10518-tm_thickbox_default/filtro-de-aceite-scania-serie-3-serie-4-114-124-scania-p-r-g-t-oem-scania-176-8402-200-2705-130-1696.jpg'
                },
                {
                    id: 5,
                    name: 'Amortiguadores',
                    price: 41000,
                    image: 'https://potenzaemarket.com/cdn/shop/products/D_688902-MLA51905886035_102022-B_1024x1024@2x.jpg?v=1668546966'
                },
                {
                    id: 6,
                    name: 'Baterias',
                    price: 50000,
                    image: 'https://www.fullauto.com.ar/wp-content/uploads/2018/08/0d59a6ad-a6db-4c7b-8d00-932cd668f12b.jpg'
                },
                {
                    id: 7,
                    name: 'Llantas',
                    price: 100000,
                    image: 'https://www.distrillantas.com.ar/media/catalog/product/cache/f8f702a884bffa23c255debe5fdee143/m/r/mreb16.png'
                },
                {
                    id: 8,
                    name: 'Correa de Transmision',
                    price: 11000,
                    image: 'https://ciper.vtexassets.com/arquivos/ids/211010-1200-auto?v=637986028679130000&width=1200&height=auto&aspect=true'
                },
                {
                    id: 9,
                    name: 'Bujia',
                    price: 16000,
                    image: 'https://gauss.com.br/produtos/wp-content/uploads/sites/2/2021/03/gv7r47i.jpg'
                },
            ],
            cartItems : []
        }
    },
    getters: {
        countCartItems(){
            return this.cartItems.length;
        },
        getCartItems(){
            return this.cartItems;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
              this.products[index].quantity += 1;
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been updated',
                showConfirmButton: false,
                timer: 1500
              });
            }else {
              item.quantity = 1;
              this.cartItems.push(item);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El producto ha sido agregado al carrito',
                showConfirmButton: false,
                timer: 1500
              });
            }
        },
        incrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity += 1;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your item has been updated',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your item has been updated',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'El producto ha sido eliminado del carrito',
              showConfirmButton: false,
              timer: 1500
            });
        }
        
    },
})