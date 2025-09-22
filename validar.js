function validarFormulario() {
    let codigo = document.getElementById("codigo").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let editorial = document.getElementById("editorial").value;
    let autor = document.getElementById("autor").value.trim();
    let fechaEdicion = document.getElementById("fecha_edicion").value;
    let cantidad = document.getElementById("cantidad").value;
    let fechaSalida = document.getElementById("fecha_salida").value;

    if (!codigo || !nombre || !editorial || !autor || !fechaEdicion || !cantidad || !fechaSalida) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Todos los campos son obligatorios.',
            confirmButtonColor: '#6a1b9a'
        });
        return false;
    }
    Swal.fire({
        title: '¿Deseas guardar este registro?',
        text: "Verifica que los datos sean correctos.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#6a1b9a',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, guardar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector("form").submit();
        }
    });

    return false;
}
