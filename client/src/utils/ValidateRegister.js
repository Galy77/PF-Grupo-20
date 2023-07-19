export function ValidateRegister(input) {
    let error = {};
  
    if (input.full_name.trim().length === 0) {
      error.full_name = "Ingrese un nombre.";
    } else if (!/^[a-zA-Z\s]+$/.test(input.full_name)) {
      error.full_name = "El nombre solo debe contener letras y espacios.";
    } else if (input.full_name.trim().split(" ").length < 2) {
      error.full_name = "Ingrese un nombre y apellido.";
    }
  
    if (input.email.trim().length === 0) {
      error.email = "Ingrese un correo electrónico.";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      error.email = "Ingrese un correo electrónico válido.";
    }
  
    if (input.password.trim().length === 0) {
      error.password = "Ingrese una contraseña.";
    } else if (!/(?=.*[A-Z])(?=.*\d)/.test(input.password)) {
      error.password =
        "La contraseña debe contener al menos una mayúscula y un número.";
    }
  
    if (input.phone.trim().length === 0) {
      error.phone = "Ingrese un número de teléfono.";
    } else if (input.phone.trim().length < 5) {
      error.phone = "El número de teléfono debe tener al menos 5 dígitos.";
    }
  
    if (input.direction_shipping.trim().length === 0) {
      error.direction_shipping = "Ingrese una dirección de envío.";
    }
  
    return error;
  }