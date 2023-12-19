import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor(public userService: UsersService) {}
  usuarios: any = [];

  mensaje = ''
  //listado de usuarios
  ngOnInit(): void {
    this.list();
  }

  resetForm(form: NgForm){
    form.reset(),
    this.userService.datosUsuario = {
      id:-1,
    }
    setTimeout(()=>{
      this.mensaje =''
    }, 3000)

  }

  list() {
    this.userService.getUsers().subscribe((res) => {
      this.usuarios = res.data;
      console.log(this.usuarios);
    });
  }

  //nuevo usuario
  create(form: NgForm) {
    if(form.value.id != -1){
      //actualizar
      this.userService.updateUser(form.value).subscribe((res)=>{
        console.log('Respuesta del put' + res)
        this.mensaje="Usuario actualizado correctamente"
        form.resetForm(form);
        this.list()
      })
    } else{

    }
    if (!form.valid) {
      console.log('formulario invalido');
      return;
    } else {
      const usu = {
        name: form.value.name,
        job: form.value.job,
      };
      this.userService.createUser(usu).subscribe((res) => {
        console.log(res);
        this.mensaje="Usuario creado correctamente"
        form.resetForm(form);
        this.list();
      });
    }
  }


  //eliminar usuario
  delete(id:any){
     let confirmacion = confirm("Desea eliminar el Usuario #" + id + "?")
     if (confirmacion){
       alert('Eliminando al usuario #' + id)
      this.userService.deleteUser(id).subscribe(
        (res)=>{
          console.log("Respuesta de eliminar",res);
          this.list();
          this.mensaje="Usuario eliminado correctamente"
        }
      )
     }
    }

    //actualizar el usuario
    update(usu: any){ 
      this.userService.datosUsuario = {
        id: usu.id,
        name: usu.first_name,
        job: 'Astrofisico',
      }

    }
}
