var app = new Vue({
    el: '#app',
    data: {
        cedula:"",
        empleado:"",
        horas:"",
        cargo:[{nombreCargo:"Gerente",valorHora:25000},
               {nombreCargo:"Ingeniero",valorHora:20000},
               {nombreCargo:"Secretario",valorHora:10000},
        ],
        seleccionCargo:"",
        empleados:[],
        totalPagar:"",
        index:"",
        error1:false,
        error2:false,
        error3:false,
        error4:false,
    },
    methods: {
        getErrorCedula(){
            if(this.cedula==""){
                this.error1=true;
            }else{
                this.error1=false;
            }
        },
        getErrorEmpleado(){
            if(this.empleado==""){
                this.error2=true;
            }else{
                this.error2=false;
            }
        },
        getErrorHoras(){
            if(this.horas==""){
                this.error3=true;
            }else{
                this.error3=false;
            }
        },
        getErrorCargo(){
            if(this.seleccionCargo==""){
                this.error4=true;
            }else{
                this.error4=false;
            }
        },
        limpiarCasillas(){
        this.cedula="",
        this.empleado="",
        this.horas="",
        this.seleccionCargo=""
        },
        
        validacionHora(){
            if(this.horas<10){
                alert("!Numero de horas trabajadas deben ser mayor a 10¡")
            }else if(this.horas>100){
                alert("!Numero maximo de horas trabajadas es de 100¡") 
            }else{
                if(this.empleado==""){
                    this.getErrorEmpleado();
                    alert("Debe llenar todos los campos")
                }else{
                    if(this.horas==""){
                        this.getErrorHoras();
                        alert("Debe llenar todos los campos")
                    }else{
                        if(this.seleccionCargo==""){
                            this.getErrorCargo();
                            alert("Debe llenar todos los campos")
                        }else{
                            if(this.cedula=="" ){
                                this.getErrorCedula();
                                alert("Debe llenar todos los campos")
                            }else{
                                this.agregarEmpleado();
                            }
                            
                        }

                    }
                }
            
            }
            
        },
        getIndex(evt){
            this.index = evt.target.selectedIndex;
        },
        agregarEmpleado(){
            this.totalPagar=this.horas*this.cargo[this.index].valorHora;
            this.empleados.push({cedula:this.cedula,empleado:this.empleado,horas:this.horas,seleccionCargo:this.seleccionCargo,totalPagar:this.totalPagar});
            this.getErrorCedula();
            this.getErrorEmpleado();
            this.getErrorHoras();
            this.getErrorCargo();
            this.limpiarCasillas();
        },
        borarEmpleados(index){
            this.empleados.splice(index,1);
        }

       
        
       
        
        
        
    }
  })