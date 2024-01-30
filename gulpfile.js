var gulp = require('gulp');/*Esto trae, en este caso la dependencia gulp */
var browserSync = require('browser-sync').create();/*Sincronización del navegador */
var reload = browserSync.reload;/*Biblioteca de recarga desde la sincronización del navegador */

/* Creamos un tarea llamada 'serve', podemos decir gulp serve y luego inicará automaticamente esta función, dónde se conecta a la sincronizacion del navegador, que está escuchando el directorio base (baseDir) y que va a iniciar un pequeño servidor para nosotros*/
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  /* Cualquier cambio en los archivos HTML y si hay cambios, llama a reload, que está arriba del todo, es la recarga que importamos */
  gulp.watch("*.html").on("change", reload);
});