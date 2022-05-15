//CLASE PADRE
class campeon{
    constructor(nombre, vida, mana, ataque, ...habilidad){
        this.nombre = nombre;
        this.vida =  vida;
        this.mana = mana;
        this.ataque = ataque;
        this.habilidad = habilidad;
    }
};

//CLASE HIJA tanque
class tanque extends campeon{
    constructor(nombre, vida, mana, ataque, armadura, ...habilidad){
        super(nombre, vida, mana, ataque, ...habilidad)
        this.armadura = armadura;
        this.fortaleza = "tirador";
        this.fortaleza2 = "mago";
        this.multiplicador = this.vida * 1.24;
    };
    presentarse(){    
        console.log ("Mi nombre es " + this.nombre + " soy un campeón de League of Legends");
        console.log ("Mis estadisticas son; " + "Vida:" + this.vida + ", Maná:"+ this.mana + ", Ataque:" + this.ataque);
    };
    comparar(nombre){
        if (nombre instanceof tanque == true){
            console.log( "Las ventajas están a la par, todo depende de ti");
        }
        if (nombre instanceof mago == true){
            console.log( "Tu personaje, " + this.nombre + " se va a rifar" );
        }
        if (nombre instanceof luchador == true){
            console.log( "Tu personaje, " + this.nombre + " va valer queso" );
        }
        if (nombre instanceof asesino == true){
            console.log( "Tu personaje, " + this.nombre + " se va a rifar" );
        }
        if (nombre instanceof tirador == true){
            console.log( "Tu personaje, " + this.nombre + " va valer queso" );
        }
    };
};

//CLASE HIJA luchador
class luchador extends campeon{
    constructor(nombre, vida, mana, ataque, ...habilidad){
        super(nombre, vida, mana, ataque, ...habilidad)
        this.fortaleza = "mago";
        this.fortaleza2 = "tirador";
        this.multiplicador = this.vida * 1.15;
        this.multiAtaque = this.ataque * 1.15;
    };
    presentarse(){    
        console.log("Mi nombre es " + this.nombre + " soy un campeón de League of Legends");
        console.log ("Mis estadisticas son; " + "Vida:" + this.vida + ", Maná:"+ this.mana + ", Ataque:" + this.ataque);
    };
    comparar(nombre){
        if (nombre instanceof luchador == true){
            console.log( "Las ventajas están a la par, todo depende de ti");
        }
        if (nombre instanceof tanque == true){
            console.log( "Tu personaje, " + this.nombre + " se va a rifar" );
        }
        if (nombre instanceof mago == true){
            console.log( "Tu personaje, " + this.nombre + " va valer queso" );
        }
        if (nombre instanceof asesino == true){
            console.log( "Tu personaje, " + this.nombre + " se va a rifar" );
        }
        if (nombre instanceof tirador == true){
            console.log( "Tu personaje, " + this.nombre + " va valer queso" );
        } 
    };
};

//CLASE HIJA tirador
class tirador extends campeon{
    constructor(nombre, vida, mana, ataque, distancia, ...habilidad){
        super(nombre, vida, mana, ataque, ...habilidad)
        this.distancia = distancia;
        this.fortaleza = "luchador";
        this.fortaleza2 = "mago";
        this.multiAtaque = this.ataque * 1.15;
    };
    presentarse(){    
        console.log("Mi nombre es " + this.nombre + " soy un campeón de League of Legends");
        console.log ("Mis estadisticas son; " + "Vida:" + this.vida + ", Maná:"+ this.mana + ", Ataque:" + this.ataque);
    };
    comparar(nombre){
        if (nombre instanceof tirador == true){
            console.log( "Las ventajas están a la par, todo depende de ti");
        }
        if (nombre instanceof tanque == true){
            console.log( "Tu personaje, " + this.nombre + " se va a rifar" );
        }
        if (nombre instanceof mago == true){
            console.log( "Tu personaje, " + this.nombre + " va valer queso" );
        }
        if (nombre instanceof luchador == true){
            console.log( "Tu personaje, " + this.nombre + " se va a rifar" );
        }
        if (nombre instanceof asesino == true){
            console.log( "Tu personaje, " + this.nombre + " va valer queso" );
        } 
    };
};

//CLASE HIJA mago
class mago extends campeon{
    constructor(nombre, vida, mana, ataque, distancia, ...habilidad){
        super(nombre, vida, mana, ataque, ...habilidad)
        this.distancia = distancia;
        this.fortaleza = "ltanque";
        this.fortaleza2 = "tirador";
        this.multiAtaque = this.ataque * 1.24;
    };
    presentarse(){    
        console.log("Mi nombre es " + this.nombre + " soy un campeón de League of Legends");
        console.log ("Mis estadisticas son; " + "Vida:" + this.vida + ", Maná:"+ this.mana + ", Ataque:" + this.ataque);
    };
    comparar(nombre){
        if (nombre instanceof mago == true){
            console.log( "Las ventajas están a la par, todo depende de ti");
        }
        if (nombre instanceof tirador == true){
            console.log( "Tu personaje, " + this.nombre + " se va a rifar" );
        }
        if (nombre instanceof tanque == true){
            console.log( "Tu personaje, " + this.nombre + " va valer queso" );
        }
        if (nombre instanceof asesino == true){
            console.log( "Tu personaje, " + this.nombre + " se va a rifar" );
        }
        if (nombre instanceof luchador == true){
            console.log( "Tu personaje, " + this.nombre + " va valer queso" );
        } 
    };
};

//CLASE HIJA asesino
class asesino extends campeon{
    constructor(nombre, vida, mana, ataque, movilidad, ...habilidad){
        super(nombre, vida, mana, ataque, ...habilidad)
        this.movilidad = movilidad;
        this.multi = this.vida * 0.95;
        this.multiAtaque = this.ataque * 1.30;
    };
    presentarse(){    
        console.log ("Mi nombre es " + this.nombre + " soy un campeón de League of Legends");
        console.log ("Mis estadisticas son; " + "Vida:" + this.vida + ", Maná:"+ this.mana + ", Ataque:" + this.ataque);
    };
    comparar(nombre){
        if (nombre instanceof asesino == true){
            console.log( "Las ventajas están a la par, todo depende de ti");
        }
        if (nombre instanceof mago == true){
            console.log( "Tu personaje, " + this.nombre + " se va a rifar" );
        }
        if (nombre instanceof tanque == true){
            console.log( "Tu personaje, " + this.nombre + " va valer queso" );
        }
        if (nombre instanceof tirador == true){
            console.log( "Tu personaje, " + this.nombre + " se va a rifar" );
        }
        if (nombre instanceof luchador == true){
            console.log( "Tu personaje, " + this.nombre + " va valer queso" );
        } 
    };
};

const personaje0 = new tanque ("Akshan", 100.5, 85, 120, true, "Gargajo de acido");
console.log (personaje0);
personaje0.presentarse();
personaje0.comparar(personaje0);

const personaje1 = new luchador ("Annie", 9, 90, 280, true, "Hablar con las plantas");
console.log (personaje1);
personaje1.presentarse();
personaje1.comparar(personaje0);

const personaje2 = new tirador ("Ashe", 24, 360, 75, true, "Malvajiarse con tinner");
console.log (personaje2);
personaje2.presentarse();
personaje2.comparar(personaje1);

const personaje3 = new mago ("Camille Ferros", 81, 450, 21, true, "Comer vidrio");
console.log (personaje3);
personaje3.presentarse();
personaje3.comparar(personaje2);

const personaje4 = new mago ("Camille Ferros", 81, 450, 21, true, "Ligar");
console.log (personaje4);
personaje4.presentarse();
personaje4.comparar(personaje3);