export const crearUsername = (email) => {
    const separador = "@curaduria4bogota.com.co"
    const username = email.split(separador)
    return username[0]
}