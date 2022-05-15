(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    class productService {

        getProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }

    }

    class notifyService {
            
            notifyClients() {
                console.log('Enviando correo a los clientes');
            }
    
    }


    class cartService {
        
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }

    }


    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
    
        pruductService: productService;
        notifyService: notifyService;
        cartService: cartService;

        constructor(productService: productService, notifyService: notifyService, cartService: cartService) {
            this.pruductService = productService;
            this.notifyService = notifyService;
            this.cartService = cartService;
        }

        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.pruductService.getProduct(id);
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.pruductService.saveProduct(product);
        }

        notifyClients() {
            this.notifyService.notifyClients();
        }

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            this.cartService.onAddToCart(productId);
        }
    
    }
    
    const productBloc = new ProductBloc(new productService(), new notifyService(), new cartService());

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);








})();